import { ASSETS } from './assets';
import { InspectorProfile, Certificate, LogbookEntry, Badge, QuizQuestion, RoadMapStep } from '../types';

export const INITIAL_PROFILE: InspectorProfile = {
  name: "Matías Rojas C.",
  rut: "18.421.905-K",
  regNdt: "NDT-CL-8824",
  level: "INSPECTOR NIVEL I",
  specialties: ["VT", "PT"],
  status: "VIGENTE",
  workplace: "Faena Minera & Estructuras Pesadas",
  hoursPractica: 42.5,
  hoursWeekChange: 6.5,
  precision: 94.2,
  precisionStandard: "AWS D1.1 Calibrado",
  streakDays: 7,
  streakStatus: "Simulacro Diario OK",
  xp: 1420,
  nextLevelXp: 1500,
  avatarUrl: ASSETS.avatarInspector,
  phone: "+56 9 8452 3910",
  email: "m.rojas.ndt@inspeccionsoldadurachile.cl"
};

export const INITIAL_CERTIFICATES: Certificate[] = [
  {
    id: "cert-vt-1",
    title: "Inspección Visual Directa (VT Nivel I)",
    code: "VT-101",
    norm: "AWS D1.1 / ASME SEC. V ART. 9",
    reg: "#CL-VT-2025-0419",
    description: "Acreditado para evaluación de discontinuidades superficiales, socavación, porosidad lineal y verificación dimensional con galgas Cambridge / Hi-Lo.",
    hours: "40 Horas Teórico/Práct.",
    validity: "Ene 2025 – Ene 2028",
    status: "aprobado",
    iconUrl: ASSETS.iconVT,
    issueDate: "15/01/2025",
    expiryDate: "15/01/2028",
    signedBy: "Ing. Rodrigo Palma C. - Asoc. NDT Chile Nivel III"
  },
  {
    id: "cert-pt-1",
    title: "Líquidos Penetrantes Visibles & Fluorescentes",
    code: "PT-202",
    norm: "ASTM E165 / ISO 3452-1",
    reg: "#CL-PT-2024-1182",
    description: "Técnicas Tipo II Método C (Solvente Removible) y sensibilización por capilaridad en cordones de soldadura GTAW / SMAW.",
    hours: "24 Horas Taller",
    score: "98 / 100",
    status: "aprobado",
    iconUrl: ASSETS.iconPT,
    issueDate: "04/11/2024",
    expiryDate: "04/11/2027",
    signedBy: "Dra. Carolina Méndez - Auditora AWS CWI"
  },
  {
    id: "cert-mt-1",
    title: "Partículas Magnéticas (MT Nivel I/II)",
    code: "MT-303",
    norm: "ASME SEC. V ART. 7 / ASTM E709",
    reg: "En desarrollo · Módulo 4 de 6",
    description: "Inspección de materiales ferromagnéticos mediante yugo electromagnético portátil en corriente alterna y continua.",
    hours: "32 Horas Especialidad",
    status: "en_curso",
    progressPercent: 68,
    totalLessons: 50,
    completedLessons: 34,
    nextMilestone: "Simulacro Práctico: Ensayo con Galga Berthold y Pie Gauge",
    iconUrl: ASSETS.iconMT
  },
  {
    id: "cert-ut-1",
    title: "Ultrasonido Industrial y Haz Angular (UT)",
    code: "UT-404",
    norm: "ASME SEC. V ART. 4 / AWS D1.1 CLÁUSULA 6",
    reg: "Inscripción confirmada",
    description: "Detección de discontinuidades volumétricas internas, cálculo de atenuación acústica y dimensionamiento DGS.",
    hours: "80 Horas Teórico/Práct.",
    status: "por_iniciar",
    nextMilestone: "Inicio de cohorte: Próximo Lunes 12 de Octubre",
    iconUrl: ASSETS.iconVT
  },
  {
    id: "cert-rt-1",
    title: "Interpretación Radiográfica de Soldaduras (RT)",
    code: "RT-505",
    norm: "ASME SEC. VIII DIV. 1 / API 1104",
    reg: "Pre-requisito VT Aprobado (Cumplido)",
    description: "Lectura y análisis de placas radiográficas en negatoscopio industrial con densitómetro óptico calibrado.",
    hours: "48 Horas Laboratorio",
    status: "por_iniciar",
    nextMilestone: "Matrícula abierta para inspectores Nivel I",
    iconUrl: ASSETS.iconPT
  }
];

export const INITIAL_LOGBOOK: LogbookEntry[] = [
  {
    id: "log-1",
    date: "04 Octubre 2026",
    company: "Minera Centinela",
    facility: "Planta Concentradora · Módulo B",
    component: "Celda de Flotación #4",
    method: "VT",
    technique: "VT Cordón 3G SMAW · Galga Cambridge",
    hours: 8.5,
    supervisor: "Carlos Valenzuela - Inspector Nivel II Reg #401",
    status: "FIRMADO",
    avatarUrl: ASSETS.faenaCentinela,
    weldingProcess: "SMAW E7018",
    discontinuitiesFound: "Socavación leve 0.4mm en corona (Aceptable bajo AWS D1.1)"
  },
  {
    id: "log-2",
    date: "02 Octubre 2026",
    company: "Astillero Asmar",
    facility: "Dique Seco Talcahuano",
    component: "Mamparo Estanco B-12",
    method: "PT",
    technique: "PT Tipo II Método C · Solvente Removible",
    hours: 6.0,
    supervisor: "Jorge Silva - Supervisor END ASMAR",
    status: "FIRMADO",
    avatarUrl: ASSETS.faenaAsmar,
    weldingProcess: "FCAW E71T-1",
    discontinuitiesFound: "Sin indicaciones relevantes tras tiempo de revelado 15 min"
  },
  {
    id: "log-3",
    date: "28 Septiembre 2026",
    company: "Minera Escondida BHP",
    facility: "Chancador Primario",
    component: "Viga Cajón Espesador #2",
    method: "VT",
    technique: "Inspección dimensional y alineamiento Hi-Lo",
    hours: 7.5,
    supervisor: "Mauricio Lagos - Auditor QA/QC",
    status: "FIRMADO",
    avatarUrl: ASSETS.faenaCentinela,
    weldingProcess: "SAW Arco Sumergido",
    discontinuitiesFound: "Sobremonta 2.1mm dentro de tolerancia máxima 3.0mm"
  }
];

export const INITIAL_BADGES: Badge[] = [
  {
    id: "badge-1",
    title: "Ojo de Halcón",
    description: "100% de aciertos en defectos de socavación y fisuras en simulaciones prácticas.",
    requirement: "Aprobar 10 simulaciones consecutivas sin falsos negativos.",
    unlocked: true,
    unlockedDate: "20 Sep 2026",
    iconUrl: ASSETS.badgeHalcon
  },
  {
    id: "badge-2",
    title: "Norma al Día",
    description: "15 simulacros AWS D1.1 aprobados consecutivamente con puntaje >90%.",
    requirement: "Resolver banco de preguntas AWS D1.1 Cláusula 6.",
    unlocked: true,
    unlockedDate: "25 Sep 2026",
    iconUrl: ASSETS.badgeNorma
  },
  {
    id: "badge-3",
    title: "Luz Negra UV",
    description: "Calibración de irradiancia >1000 µW/cm² en fluorescencia según ASTM E1417.",
    requirement: "Completar protocolo de inspección de luz UV en cámara oscura.",
    unlocked: true,
    unlockedDate: "30 Sep 2026",
    iconUrl: ASSETS.badgeLuzNegra
  },
  {
    id: "badge-4",
    title: "Faena Extrema",
    description: "+50 horas registradas en faenas de altura geográfica >3.000 msnm.",
    requirement: "Validar horas en Centinela, Collahuasi o El Teniente.",
    unlocked: true,
    unlockedDate: "03 Oct 2026",
    iconUrl: ASSETS.badgeFaena
  },
  {
    id: "badge-5",
    title: "Calibre de Oro",
    description: "Precisión milimétrica inferior a ±0.1 mm con Galga Cambridge y Bridge Cam.",
    requirement: "Medir 20 discontinuidades críticas con error nulo.",
    unlocked: false,
    iconUrl: ASSETS.badgeHalcon
  },
  {
    id: "badge-6",
    title: "Maestro del Yugo",
    description: "Prueba de levantamiento de 4.5 kg (10 lb) en AC completada satisfactoriamente.",
    requirement: "Ensayo práctico de fuerza de sustentación de yugo electromagnético.",
    unlocked: false,
    iconUrl: ASSETS.badgeNorma
  },
  {
    id: "badge-7",
    title: "Guardián de Bitácora",
    description: "Alcanzar 400 horas acreditadas ante supervisor para calificar a Nivel II.",
    requirement: "Completar las 400 horas requeridas por SNT-TC-1A.",
    unlocked: false,
    iconUrl: ASSETS.badgeFaena
  },
  {
    id: "badge-8",
    title: "Inspector AWS CWI",
    description: "Certificación integral de inspector de soldaduras reconocido internacionalmente.",
    requirement: "Aprobar examen oficial AWS de tres partes (A, B, C).",
    unlocked: false,
    iconUrl: ASSETS.badgeLuzNegra
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    norm: "AWS D1.1 / Cláusula 6 (Criterios VT)",
    question: "¿Cuál es la profundidad máxima permitida de socavación (undercut) en miembros cargados estáticamente para espesores iguales o menores a 25 mm?",
    options: [
      "1.0 mm (1/32 in) en cualquier longitud acumulada",
      "No se permite socavación en ninguna circunstancia",
      "Hasta 1.6 mm (1/16 in) para una longitud máxima acumulada de 50 mm en cualquier tramo de 300 mm",
      "2.5 mm si el cordón tiene más de 3 pases"
    ],
    correctIndex: 2,
    explanation: "Según la Tabla 6.1 de AWS D1.1, para miembros cargados estáticamente, la socavación no debe exceder 1.0 mm, excepto que se permite hasta 1.6 mm por un acumulado de 50 mm en 300 mm de cordón."
  },
  {
    id: 2,
    norm: "ASTM E165 (Líquidos Penetrantes)",
    question: "¿Cuál es el tiempo de penetración (dwell time) mínimo recomendado para cordones de soldadura en acero al carbono a temperatura ambiente?",
    options: [
      "1 a 2 minutos",
      "5 a 10 minutos (según Tabla 1 de ASTM E165)",
      "30 a 60 minutos obligatorios",
      "El penetrante actúa instantáneamente al secar"
    ],
    correctIndex: 1,
    explanation: "ASTM E165 especifica típicamente de 5 a 10 minutos para discontinuidades como socavaciones, faltas de fusión o fisuras en soldaduras de acero al carbono a 10°C - 52°C."
  },
  {
    id: 3,
    norm: "ASME Sec. V Art. 7 (Partículas Magnéticas)",
    question: "¿Cuál es la fuerza de sustentación (lifting power) mínima requerida para un yugo electromagnético en corriente alterna (AC)?",
    options: [
      "2.3 kg (5 lb) al espaciamiento máximo de polos",
      "4.5 kg (10 lb) al espaciamiento máximo entre polos",
      "18.1 kg (40 lb) exclusivamente",
      "No requiere verificación de peso, solo galga de torta"
    ],
    correctIndex: 1,
    explanation: "ASME Sección V, Artículo 7 exige que un yugo de corriente alterna (AC) sea capaz de levantar una placa patrón de acero de 4.5 kg (10 libras) a la distancia máxima de uso."
  },
  {
    id: 4,
    norm: "ASME Sec. V Art. 9 (Inspección Visual)",
    question: "¿Cuál es el nivel mínimo de iluminación requerido en la superficie de inspección para un examen visual directo?",
    options: [
      "100 lux (10 foot-candles)",
      "500 lux (50 foot-candles)",
      "1000 lux (100 foot-candles)",
      "10.000 lux con proyector de cuarzo"
    ],
    correctIndex: 2,
    explanation: "ASME Sección V Artículo 9 (T-952) exige un mínimo de 1000 lux (100 fc) sobre la superficie a inspeccionar para examen visual directo o remoto."
  },
  {
    id: 5,
    norm: "ASNT SNT-TC-1A",
    question: "En la práctica recomendada SNT-TC-1A, ¿quién es el responsable final de la certificación del personal de ensayos no destructivos?",
    options: [
      "La ASNT directamente desde Estados Unidos",
      "El empleador / empresa contratante basada en su procedimiento escrito",
      "El inspector más antiguo de la faena",
      "El fabricante de los electrodos"
    ],
    correctIndex: 1,
    explanation: "Bajo la norma SNT-TC-1A, la certificación de personal END es responsabilidad del empleador mediante su 'Written Practice', avalada por un Nivel III."
  }
];

export const ROADMAP_STEPS: RoadMapStep[] = [
  {
    id: "step-1",
    level: "Nivel I Trainee",
    title: "Fundamentos Metalúrgicos y Seguridad en Soldadura",
    normRequirement: "Capacitación inicial 20 hrs",
    status: "completado",
    hoursRequired: 20,
    hoursCompleted: 20,
    modulesCount: 4,
    examType: "Examen Teórico General (100% OK)"
  },
  {
    id: "step-2",
    level: "Inspector Nivel I (Calificado)",
    title: "VT & PT Directo en Terreno",
    normRequirement: "SNT-TC-1A: 40 hrs VT + 24 hrs PT + 70 hrs Faena",
    status: "actual",
    hoursRequired: 70,
    hoursCompleted: 70,
    modulesCount: 6,
    examType: "Práctico sobre probetas con defectos reales"
  },
  {
    id: "step-3",
    level: "Inspector Nivel II (En Curso)",
    title: "Interpretación Normativa y Métodos Volumétricos MT/UT",
    normRequirement: "400 hrs registradas ante Supervisor + MT/UT",
    status: "actual",
    hoursRequired: 400,
    hoursCompleted: 240,
    modulesCount: 8,
    examType: "Específico AWS D1.1 + Redacción de Reportes Técnicos"
  },
  {
    id: "step-4",
    level: "Inspector Senior Nivel III / AWS CWI",
    title: "Auditoría de Procedimientos WPS / PQR y Calificación de Soldadores",
    normRequirement: "Experiencia verificable 5 años + Examen CWI",
    status: "bloqueado",
    hoursRequired: 2000,
    hoursCompleted: 240,
    modulesCount: 12,
    examType: "Certificación Internacional AWS / ASNT Level III"
  }
];
