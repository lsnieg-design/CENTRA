export const DEFAULT_APP_CONFIG = {
  institutionName: 'Mi Institución',
  institutionShortName: 'Mi Institución',
  portalTitle: 'Portal Institucional',
  appName: 'Gestión Institucional',

  institutionType: 'Otro',
  institutionDescription: '',

  logoUrl: '/icon-192.png',

  primaryColor: '#6d28d9',
  secondaryColor: '#f97316',
  backgroundColor: '#f8fafc',
  textColor: '#1e293b',
  palette: 'violet-orange',

  rolePermissions: {},

  document: {
    header: '',
    footer: '',
    signatureName: '',
    signatureRole: '',
    showLogo: true
  },

  labels: {
    person: 'Estudiante',
    people: 'Estudiantes',
    staff: 'Personal',

    group: 'Grupo',
    groups: 'Grupos',

    file: 'Legajo',
    files: 'Legajos',

    level: 'Nivel',
    levels: 'Niveles',

    section: 'Sección',
    sections: 'Secciones',

    area: 'Área',
    areas: 'Áreas',

    team: 'Equipo',
    teams: 'Equipos',

    site: 'Sede',
    sites: 'Sedes'
  },

  address: '',
  phone: '',
  email: '',
  website: '',
  city: '',
  province: '',
  country: 'Argentina',

  schoolYear: new Date().getFullYear(),

  locale: 'es-AR',
  timezone: 'America/Argentina/Buenos_Aires',

  turns: [
    'Mañana',
    'Tarde',
    'Alternado',
    'Vespertino',
    'Doble'
  ],

  modalities: [
    'Sede',
    'Inclusión'
  ],

  eventTypes: [
    'GENERAL',
    'ADMINISTRATIVO',
    'INFORMES',
    'EVENTOS',
    'ACTOS',
    'EFEMÉRIDES',
    'CUMPLEAÑOS'
  ],

  roles: [
    'Docente',
    'Equipo Directivo',
    'Equipo Técnico',
    'Auxiliar/Preceptor',
    'Profes Especiales',
    'Administración'
  ],

  holidays: [],

  sites: [],
  levels: [],
  sections: [],
  areas: [],
  teams: [],

  features: {
    calendar: true,
    tasks: true,
    studentFiles: true,
    resources: true,
    reports: true,
    social: true,
    medical: true,
    evaluations: true,
    externalReports: true,
    notifications: true
  },

  activeModules: {},

  plan: {
    name: 'Personalizado',
    key: 'custom'
  },

  installation: {
    complete: false
  }
};

export const APP_CONFIG_STORAGE_KEY = 'institution_app_config';

export const PALETTES = {
  'violet-orange': {
    name: 'Violeta + naranja',
    primary: '#6d28d9',
    secondary: '#f97316',
    background: '#f8fafc',
    text: '#1e293b'
  },

  'blue-teal': {
    name: 'Azul + turquesa',
    primary: '#2563eb',
    secondary: '#0f766e',
    background: '#f8fafc',
    text: '#172033'
  },

  'rose-amber': {
    name: 'Rosa + ámbar',
    primary: '#e11d48',
    secondary: '#d97706',
    background: '#fffaf7',
    text: '#292524'
  },

  'navy-sky': {
    name: 'Azul noche + cielo',
    primary: '#0f3d66',
    secondary: '#0284c7',
    background: '#f5f9fc',
    text: '#172033'
  },

  'green-blue': {
    name: 'Verde + azul',
    primary: '#15803d',
    secondary: '#0f766e',
    background: '#f6fbf7',
    text: '#1b2a22'
  },

  neutral: {
    name: 'Neutros',
    primary: '#475569',
    secondary: '#64748b',
    background: '#f8fafc',
    text: '#1e293b'
  }
};

export const INSTITUTION_TYPES = [
  'Escuela especial',
  'Escuela común',
  'Centro de día',
  'Centro terapéutico',
  'Instituto',
  'ONG',
  'Organización social',
  'Otro'
];

export const PLAN_OPTIONS = [
  {
    key: 'basic',
    name: 'Básico',
    description: 'Conjunto inicial de módulos esenciales.'
  },

  {
    key: 'standard',
    name: 'Intermedio',
    description: 'Incluye gestión, seguimiento y reportes.'
  },

  {
    key: 'complete',
    name: 'Completo',
    description: 'Acceso a todos los módulos disponibles.'
  },

  {
    key: 'custom',
    name: 'Personalizado',
    description: 'Módulos elegidos de forma específica para la institución.'
  }
];

export const MODULES = [
  ['dashboard', 'Inicio'],
  ['tasks', 'Tareas'],
  ['calendar', 'Agenda'],
  ['groups', 'Mi Aula'],
  ['matricula', 'Legajos'],
  ['resources', 'Recursos'],
  ['social', 'Trabajo Social'],
  ['proyecto', 'Proyecto institucional'],
  ['informes', 'Informes pedagógicos'],
  ['informes_externos', 'Informes externos'],
  ['evaluations', 'Evaluaciones'],
  ['equipo', 'Equipo Técnico'],
  ['medical', 'Área médica'],
  ['admin', 'Administración'],
  ['personal', 'Personal'],
  ['notifications', 'Notificaciones'],
  ['users', 'Gestión de usuarios'],
  ['audit', 'Auditoría'],
  ['configuracion', 'Configuración']
];

export const MODULE_CATALOG = {
  dashboard: {
    description: 'Inicio y resumen general',
    required: true,
    category: 'Núcleo'
  },

  tasks: {
    description: 'Tareas y pendientes',
    category: 'Gestión'
  },

  calendar: {
    description: 'Agenda, eventos y calendario',
    category: 'Gestión'
  },

  groups: {
    description: 'Aulas, grupos y estudiantes',
    category: 'Personas'
  },

  matricula: {
    description: 'Legajos y matrícula',
    category: 'Personas'
  },

  resources: {
    description: 'Recursos institucionales',
    category: 'Gestión'
  },

  social: {
    description: 'Seguimiento de Trabajo Social',
    category: 'Equipos'
  },

  proyecto: {
    description: 'Proyectos institucionales',
    category: 'Gestión'
  },

  informes: {
    description: 'Informes pedagógicos',
    category: 'Documentos'
  },

  informes_externos: {
    description: 'Informes para terceros',
    category: 'Documentos'
  },

  evaluations: {
    description: 'Evaluaciones por áreas',
    category: 'Seguimiento'
  },

  equipo: {
    description: 'Gestión del Equipo Técnico',
    category: 'Equipos'
  },

  medical: {
    description: 'Información y seguimiento del área médica',
    category: 'Equipos'
  },

  admin: {
    description: 'Documentación administrativa',
    category: 'Administración'
  },

  personal: {
    description: 'Gestión del personal',
    category: 'Administración'
  },

  notifications: {
    description: 'Avisos y notificaciones',
    category: 'Comunicación'
  },

  users: {
    description: 'Usuarios y permisos',
    category: 'Administración'
  },

  audit: {
    description: 'Auditoría y actividad del sistema',
    category: 'Administración'
  },

  configuracion: {
    description: 'Configuración de la institución',
    required: true,
    category: 'Núcleo'
  }
};

const LEGACY_FEATURE_MAP = {
  calendar: 'calendar',
  tasks: 'tasks',
  studentFiles: 'matricula',
  resources: 'resources',
  reports: 'informes',
  social: 'social',
  medical: 'medical',
  evaluations: 'evaluations',
  externalReports: 'informes_externos',
  notifications: 'notifications'
};

export function isModuleEnabled(config, moduleId) {
  if (MODULE_CATALOG[moduleId]?.required) {
    return true;
  }

  if (
    config?.activeModules &&
    Object.prototype.hasOwnProperty.call(
      config.activeModules,
      moduleId
    )
  ) {
    return config.activeModules[moduleId] !== false;
  }

  const legacyKey = Object.entries(LEGACY_FEATURE_MAP)
    .find(([, id]) => id === moduleId)?.[0];

  if (
    legacyKey &&
    config?.features &&
    config.features[legacyKey] === false
  ) {
    return false;
  }

  return true;
}

export const FEATURE_LABELS = {
  calendar: 'Agenda',
  tasks: 'Tareas',
  studentFiles: 'Legajos',
  resources: 'Recursos',
  reports: 'Informes',
  social: 'Trabajo Social',
  medical: 'Área médica',
  evaluations: 'Evaluaciones',
  externalReports: 'Informes externos',
  notifications: 'Notificaciones'
};

export function defaultPermissionsForRole(role) {
  const all = Object.fromEntries(
    MODULES.map(([id]) => [id, false])
  );

  all.dashboard = true;
  all.tasks = true;
  all.calendar = true;
  all.groups = true;

  if (
    [
      'admin',
      'super-admin',
      'Administración',
      'Equipo Directivo',
      'Dirección Inclusión'
    ].includes(role)
  ) {
    for (const [id] of MODULES) {
      all[id] = true;
    }
  } else if (
    [
      'Equipo Técnico',
      'Equipo Técnico Inclusión'
    ].includes(role)
  ) {
    [
      'matricula',
      'resources',
      'social',
      'proyecto',
      'informes',
      'informes_externos',
      'evaluations',
      'equipo',
      'notifications'
    ].forEach(id => {
      all[id] = true;
    });
  } else if (
    [
      'Docente',
      'DAI',
      'Inclusión',
      'Profes Especiales'
    ].includes(role)
  ) {
    [
      'matricula',
      'resources',
      'social',
      'proyecto',
      'informes',
      'notifications'
    ].forEach(id => {
      all[id] = true;
    });
  } else if (role === 'Auxiliar/Preceptor') {
    [
      'matricula',
      'resources',
      'notifications'
    ].forEach(id => {
      all[id] = true;
    });
  }

  return all;
}

export function getRolePermissions(config, role) {
  const defaults = defaultPermissionsForRole(role);

  return {
    ...defaults,
    ...(config?.rolePermissions?.[role] || {})
  };
}

export function canAccessModule(config, role, moduleId) {
  if (!isModuleEnabled(config, moduleId)) {
    return false;
  }

  if (role === 'super-admin' || role === 'admin') {
    return true;
  }

  return !!getRolePermissions(config, role)[moduleId];
}

export function normalizeAppConfig(value = {}) {
  const merged = {
    ...DEFAULT_APP_CONFIG,
    ...value,

    document: {
      ...DEFAULT_APP_CONFIG.document,
      ...(value.document || {})
    },

    labels: {
      ...DEFAULT_APP_CONFIG.labels,
      ...(value.labels || {})
    },

    features: {
      ...DEFAULT_APP_CONFIG.features,
      ...(value.features || {})
    },

    plan: {
      ...DEFAULT_APP_CONFIG.plan,
      ...(value.plan || {})
    },

    installation: {
      ...DEFAULT_APP_CONFIG.installation,
      ...(value.installation || {})
    }
  };

  const defaultActiveModules = Object.fromEntries(
    MODULES.map(([id]) => [id, true])
  );

  const hasExplicitModules =
    value &&
    Object.prototype.hasOwnProperty.call(
      value,
      'activeModules'
    );

  merged.activeModules = {
    ...defaultActiveModules,
    ...(hasExplicitModules
      ? (value.activeModules || {})
      : {})
  };

  if (!hasExplicitModules && value?.features) {
    Object.entries(LEGACY_FEATURE_MAP).forEach(
      ([legacyKey, moduleId]) => {
        if (value.features[legacyKey] === false) {
          merged.activeModules[moduleId] = false;
        }
      }
    );
  }

  MODULES.forEach(([id]) => {
    if (MODULE_CATALOG[id]?.required) {
      merged.activeModules[id] = true;
    }
  });

  const allRoles = Array.from(
    new Set([
      ...(merged.roles || []),
      ...Object.keys(merged.rolePermissions || {})
    ])
  );

  const permissions = {
    ...merged.rolePermissions
  };

  allRoles.forEach(role => {
    permissions[role] = getRolePermissions(
      {
        ...merged,
        rolePermissions: permissions
      },
      role
    );
  });

  merged.rolePermissions = permissions;

  [
    'turns',
    'modalities',
    'eventTypes',
    'roles',
    'holidays',
    'sites',
    'levels',
    'sections',
    'areas',
    'teams'
  ].forEach(key => {
    if (!Array.isArray(merged[key])) {
      merged[key] = DEFAULT_APP_CONFIG[key];
    }
  });

  return merged;
}

export function getCachedAppConfig() {
  try {
    const saved = localStorage.getItem(
      APP_CONFIG_STORAGE_KEY
    );

    return saved
      ? normalizeAppConfig(JSON.parse(saved))
      : DEFAULT_APP_CONFIG;

  } catch {
    return DEFAULT_APP_CONFIG;
  }
}

export function cacheAppConfig(config) {
  const normalized = normalizeAppConfig(config);

  try {
    localStorage.setItem(
      APP_CONFIG_STORAGE_KEY,
      JSON.stringify(normalized)
    );
  } catch {}

  return normalized;
}

export function applyBranding(config) {
  const c = normalizeAppConfig(config);

  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;

  const palette = PALETTES[c.palette] || null;

  const primary = palette?.primary || c.primaryColor;
  const secondary = palette?.secondary || c.secondaryColor;
  const background = palette?.background || c.backgroundColor;
  const text = palette?.text || c.textColor;

  root.style.setProperty('--app-primary', primary);
  root.style.setProperty('--app-secondary', secondary);
  root.style.setProperty('--app-background', background);
  root.style.setProperty('--app-text', text);

  root.style.setProperty(
    '--app-primary-soft',
    `${primary}18`
  );

  root.style.setProperty(
    '--app-secondary-soft',
    `${secondary}18`
  );

  let style = document.getElementById(
    'app-dynamic-branding'
  );

  if (!style) {
    style = document.createElement('style');
    style.id = 'app-dynamic-branding';
    document.head.appendChild(style);
  }

  style.textContent = `
    .bg-violet-600 {
      background-color: var(--app-primary) !important;
    }

    .bg-violet-700 {
      background-color: var(--app-primary) !important;
    }

    .text-violet-600 {
      color: var(--app-primary) !important;
    }

    .text-violet-700 {
      color: var(--app-primary) !important;
    }

    .text-violet-900 {
      color: color-mix(
        in srgb,
        var(--app-primary) 72%,
        #111827
      ) !important;
    }

    .bg-violet-50 {
      background-color: var(--app-primary-soft) !important;
    }

    .border-violet-100 {
      border-color: color-mix(
        in srgb,
        var(--app-primary) 18%,
        white
      ) !important;
    }

    .border-violet-600 {
      border-color: var(--app-primary) !important;
    }

    .text-orange-500 {
      color: var(--app-secondary) !important;
    }

    .text-orange-600 {
      color: var(--app-secondary) !important;
    }

    .bg-orange-500 {
      background-color: var(--app-secondary) !important;
    }

    .bg-orange-50 {
      background-color: var(--app-secondary-soft) !important;
    }
  `;

  document.title = c.portalTitle || c.appName;
}

export function getInstitutionName() {
  return (
    getCachedAppConfig().institutionName ||
    'Mi Institución'
  );
}
