import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

/**
 * Inicializa la estructura lógica de una instalación de CENTRA.
 */
export async function initializeCENTRAInstallation({
  db,
  appId,
  authUser,
  adminProfile
}) {
  if (!db || !appId || !authUser?.uid) {
    throw new Error('Faltan datos para inicializar CENTRA.');
  }

  const base = ['artifacts', appId, 'public', 'data'];
  const now = serverTimestamp();
  const personId =
    adminProfile.personId || authUser.uid;

  // Persona
  await setDoc(
    doc(db, ...base, 'people', personId),
    {
      firstName: adminProfile.firstName || '',
      lastName: adminProfile.lastName || '',
      fullName: adminProfile.fullName || '',
      email:
        adminProfile.email ||
        authUser.email ||
        '',
      type: 'staff',
      active: true,
      createdAt: now,
      updatedAt: now
    },
    { merge: true }
  );

  // Perfil de personal
  await setDoc(
    doc(
      db,
      ...base,
      'staff_profiles',
      personId
    ),
    {
      personId,
      createdAt: now,
      updatedAt: now
    },
    { merge: true }
  );

  // Cuenta de acceso
  await setDoc(
    doc(
      db,
      ...base,
      'users',
      authUser.uid
    ),
    {
      personId,
      authUid: authUser.uid,
      accessRoleId: 'admin',
      accessRole: 'Administrador',
      active: true,
      updatedAt: now
    },
    { merge: true }
  );

  // Configuración de instalación
  await setDoc(
    doc(
      db,
      ...base,
      'config',
      'institution'
    ),
    {
      installationComplete: true,
      architectureVersion: 1,
      appVersion: '1.0.0',
      institutionId: appId,
      updatedAt: now
    },
    { merge: true }
  );

  // Control de versión de arquitectura
  await setDoc(
    doc(
      db,
      ...base,
      'system',
      'setup'
    ),
    {
      initialized: true,
      architectureVersion: 1,
      appVersion: '1.0.0',
      initializedAt: now,
      updatedAt: now
    },
    { merge: true }
  );

  return {
    personId,
    architectureVersion: 1,
    appVersion: '1.0.0'
  };
}
