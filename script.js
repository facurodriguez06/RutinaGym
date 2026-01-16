// --- DATA ---
const routineData = [
  {
    day: "Lunes",
    title: "Juntos - Pierna y Glúteo",
    exercises: [
      {
        name: "Sentadilla (Barra o Hack)",
        sets: "3",
        reps: "8-10",
        rir: "RIR 2",
        notes: "El ejercicio rey. Prioricen la profundidad. Descanso: 3 min.",
        muscles: {
          primary: ["quads", "glutes"],
          secondary: ["hamstrings", "lower_back"],
        },
      },
      {
        name: "Hip Thrust (Máquina o Barra)",
        sets: "4",
        reps: "10-12",
        rir: "RIR 1",
        notes: "Contracción máxima de glúteo arriba (1 seg). Descanso: 2 min.",
        muscles: { primary: ["glutes"], secondary: ["hamstrings"] },
      },
      {
        name: "Prensa de Piernas",
        sets: "3",
        reps: "12-15",
        rir: "RIR 1",
        notes:
          "Enfoque en cuádriceps. Pies zona media-baja de plataforma. Descanso: 90 seg.",
        muscles: { primary: ["quads"], secondary: ["glutes", "hamstrings"] },
      },
      {
        name: "Sillón de Cuádriceps (Extensiones)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Nuevo. Bombeo final para definir la pierna. Aguanta 1 seg arriba. Descanso: 60 seg.",
        muscles: { primary: ["quads"], secondary: [] },
      },
      {
        name: "Curl Femoral (Máquina)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Isquios. No despeguen la cadera. Controlen la bajada. Descanso: 60 seg.",
        muscles: { primary: ["hamstrings"], secondary: ["calves"] },
      },
      {
        name: "Gemelos en Máquina (Pantorrillas)",
        sets: "4",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Nuevo. Rango completo: talón bien abajo, punta bien arriba. Descanso: 45 seg.",
        muscles: { primary: ["calves"], secondary: [] },
      },
      {
        name: "Elevación de Rodillas (Silla Capitana)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 1",
        notes:
          "Espalda pegada. Suban rodillas suave. Sin balanceo. Descanso: 60 seg.",
        muscles: { primary: ["abs"], secondary: ["obliques"] },
      },
    ],
  },
  {
    day: "Martes",
    title: "Solo Facundo - Empuje PESADO",
    exercises: [
      {
        name: "Press de Banca Plano (Barra)",
        sets: "4",
        reps: "6-8",
        rir: "RIR 2",
        notes:
          "Carga pesada. Pies anclados al piso. Retracción escapular. Descanso: 3 min.",
        muscles: { primary: ["chest"], secondary: ["triceps", "shoulders"] },
      },
      {
        name: "Press Declinado (Barra o Manc)",
        sets: "3",
        reps: "8-10",
        rir: "RIR 2",
        notes:
          "Nuevo. Enfoca la línea inferior del pecho. Menos estrés en hombros. Descanso: 2-3 min.",
        muscles: { primary: ["chest"], secondary: ["triceps"] },
      },
      {
        name: "Press Inclinado (Máquina)",
        sets: "3",
        reps: "10-12",
        rir: "RIR 1",
        notes:
          "Completa el desarrollo del pecho superior. Movimiento controlado. Descanso: 2 min.",
        muscles: { primary: ["chest"], secondary: ["triceps", "shoulders"] },
      },
      {
        name: "Fondos (Dips) en Paralelas",
        sets: "3",
        reps: "Fallo",
        rir: "RIR 0",
        notes:
          "Al fallo. Inclina el torso. Si puedes lastrarte (agregar peso), hazlo. Descanso: 90 seg.",
        muscles: { primary: ["chest", "triceps"], secondary: ["shoulders"] },
      },
      {
        name: "Elevaciones Laterales (Manc)",
        sets: "4",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Codos semiflexionados. Hazlas estrictas, sin impulsarte con las piernas. Descanso: 60 seg.",
        muscles: { primary: ["shoulders"], secondary: ["traps"] },
      },
      {
        name: "Aperturas (Peck Deck)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Bombeo final de pecho. Estira al máximo, aprieta al centro. Descanso: 60 seg.",
        muscles: { primary: ["chest"], secondary: [] },
      },
      {
        name: "Extensiones Tríceps (Polea)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes: "Barra recta o V. Codos pegados a costillas. Descanso: 60 seg.",
        muscles: { primary: ["triceps"], secondary: [] },
      },
      {
        name: "Extensión Unilateral (Manc/Polea)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Nuevo. Agarre supino (palma arriba) a una mano. Aisla la cabeza interna. Descanso: 45 seg.",
        muscles: { primary: ["triceps"], secondary: [] },
      },
    ],
  },
  {
    day: "Miércoles",
    title: "Juntos - Tren Superior",
    exercises: [
      {
        name: "Jalón al Pecho (Agarre Ancho)",
        sets: "3",
        reps: "10-12",
        rir: "RIR 2",
        notes: "Dorsal ancho. Pecho arriba, sin balanceo. Descanso: 2 min.",
        muscles: { primary: ["lats"], secondary: ["biceps", "forearms"] },
      },
      {
        name: "Press Militar (Máquina)",
        sets: "3",
        reps: "10-12",
        rir: "RIR 1",
        notes: "Hombros fuertes. Espalda apoyada firmemente. Descanso: 90 seg.",
        muscles: { primary: ["shoulders"], secondary: ["triceps"] },
      },
      {
        name: "Remo en Polea Baja",
        sets: "3",
        reps: "12-15",
        rir: "RIR 1",
        notes:
          "Densidad de espalda. Codos rozan las costillas. Descanso: 90 seg.",
        muscles: { primary: ["lats", "traps"], secondary: ["biceps"] },
      },
      {
        name: "Press Pecho Plano (Mancuernas)",
        sets: "3",
        reps: "10-12",
        rir: "RIR 2",
        notes: "Estiramiento profundo del pectoral. Descanso: 2 min.",
        muscles: { primary: ["chest"], secondary: ["triceps", "shoulders"] },
      },
      {
        name: "Elevaciones Laterales (Polea o Mancuernas)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes: "Deltoides lateral. Controlen la bajada. Descanso: 60 seg.",
        muscles: { primary: ["shoulders"], secondary: ["traps"] },
      },
      {
        name: "Curl de Bíceps con Barra (Z o Recta)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Nuevo. Brazos. Codos fijos, solo muevan antebrazos. Descanso: 60 seg.",
        muscles: { primary: ["biceps"], secondary: ["forearms"] },
      },
    ],
  },
  {
    day: "Jueves",
    title: "Solo Facundo - Tracción VOLUMEN",
    exercises: [
      {
        name: "Jalón al Pecho (Agarre Neutro)",
        sets: "4",
        reps: "8-10",
        rir: "RIR 1",
        notes:
          "Agarre cerrado/triángulo. Jala con fuerza explosiva, sube controlado. Descanso: 2 min.",
        muscles: { primary: ["lats", "biceps"], secondary: ["forearms"] },
      },
      {
        name: "Remo en Máquina (o T-Bar)",
        sets: "4",
        reps: "8-10",
        rir: "RIR 1",
        notes:
          "Serie extra. Carga pesado. Apoya el pecho para cuidar tu lumbar. Descanso: 2 min.",
        muscles: {
          primary: ["lats", "traps"],
          secondary: ["biceps", "lower_back"],
        },
      },
      {
        name: "Encogimientos (Shrugs) con Mancuernas",
        sets: "4",
        reps: "12-15",
        rir: "RIR 1",
        notes:
          "Nuevo. Sube los hombros a las orejas. Aguanta 2 seg arriba. Descanso: 90 seg.",
        muscles: { primary: ["traps"], secondary: [] },
      },
      {
        name: "Pull-Over en Polea Alta",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Aislamiento puro del dorsal. Mantén tensión constante. Descanso: 60 seg.",
        muscles: { primary: ["lats"], secondary: ["chest"] },
      },
      {
        name: "Vuelos Posteriores (Pájaros)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Hombro posterior. No juntes las escápulas, aisla el deltoides. Descanso: 60 seg.",
        muscles: { primary: ["shoulders"], secondary: ["traps"] },
      },
      {
        name: "Curl Predicador (Máquina)",
        sets: "3",
        reps: "10-12",
        rir: "RIR 0",
        notes:
          "Banco Scott. Estira todo el brazo. El bíceps crece en la bajada. Descanso: 60 seg.",
        muscles: { primary: ["biceps"], secondary: [] },
      },
      {
        name: "Curl Martillo (Mancuernas)",
        sets: "3",
        reps: "10-12",
        rir: "RIR 0",
        notes: "Pesado. Palmas enfrentadas. Descanso: 60 seg.",
        muscles: { primary: ["biceps", "forearms"], secondary: [] },
      },
      {
        name: "Curl de Muñeca (Barra tras espalda)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Nuevo. Barra detrás de los glúteos. Enrolla solo con las muñecas. Descanso: 45 seg.",
        muscles: { primary: ["forearms"], secondary: [] },
      },
    ],
  },
  {
    day: "Viernes",
    title: "Juntos - Full Body",
    exercises: [
      {
        name: "Peso Muerto Rumano (Mancuernas/Barra)",
        sets: "3",
        reps: "10-12",
        rir: "RIR 2",
        notes:
          "Cadera atrás. Rodillas semi-rígidas. Sentir isquios. Descanso: 2 min.",
        muscles: {
          primary: ["hamstrings", "glutes"],
          secondary: ["lower_back"],
        },
      },
      {
        name: "Press de Pecho (Máquina)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes: "Empuje seguro. Enfócate en bombear el pecho. Descanso: 90 seg.",
        muscles: { primary: ["chest", "triceps"], secondary: ["shoulders"] },
      },
      {
        name: "Sillón de Cuádriceps (Leg Ext.)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Reemplazo Zancadas. Aguanta 1 seg arriba con piernas rectas. Descanso: 60 seg.",
        muscles: { primary: ["quads"], secondary: [] },
      },
      {
        name: "Patada de Glúteo en Máquina",
        sets: "4",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Nuevo. Empuja con el talón hacia el techo/atrás. Aprieta el glúteo al final. Descanso: 60 seg.",
        muscles: { primary: ["glutes"], secondary: ["hamstrings"] },
      },
      {
        name: "Face Pull (Polea Alta)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 1",
        notes:
          "Salud de hombros y postura. Cuerda a la frente. Descanso: 60 seg.",
        muscles: { primary: ["shoulders", "traps"], secondary: [] },
      },
      {
        name: "Copa Tríceps (Mancuerna a 2 manos)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes: "Cabeza larga del tríceps. Codos cerrados. Descanso: 60 seg.",
        muscles: { primary: ["triceps"], secondary: [] },
      },
      {
        name: "Elevación de Rodillas (Silla Capitana)",
        sets: "4",
        reps: "15-20",
        rir: "RIR 0",
        notes: "Controla la bajada para proteger espalda. Descanso: 60 seg.",
        muscles: { primary: ["abs"], secondary: ["obliques"] },
      },
    ],
  },
];

// --- STATE ---
let activeTab = 0;

// Auto-reset daily logic
const todayStr = new Date().toDateString();
const lastVisit = localStorage.getItem("gymLastVisitDate");
if (lastVisit !== todayStr) {
  localStorage.removeItem("gymRoutineSets");
  localStorage.setItem("gymLastVisitDate", todayStr);
}

let completedSets = JSON.parse(localStorage.getItem("gymRoutineSets")) || {};
let timerInterval = null;
let currentTimerSeconds = 0;
let totalTimerSeconds = 0;
let savedScrollY = 0;

// --- CALENDAR STATE ---
let currentView = "routine"; // 'routine' or 'history'
let calendarMonth = new Date().getMonth();
let calendarYear = new Date().getFullYear();
let trainingHistory = {};
let isSyncing = false;

// --- JSONBIN CONFIG ---
// Historial compartido entre Alma y Facu via JSONBin.io
const JSONBIN_API_KEY =
  "$2a$10$ARqbaMZJCBkzpOxFKlDU6.QpRQOwWN.7KMBcx7a7IH/pKOZD5uNye";
const JSONBIN_BIN_ID = "69697104ae596e708fdf28e7";
const JSONBIN_ENABLED = true;

// --- CLOUD SYNC FUNCTIONS ---
async function loadFromCloud() {
  if (!JSONBIN_ENABLED) {
    // Fallback to localStorage
    trainingHistory =
      JSON.parse(localStorage.getItem("gymTrainingHistory")) || {};
    return;
  }

  try {
    isSyncing = true;
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`,
      {
        method: "GET",
        headers: {
          "X-Master-Key": JSONBIN_API_KEY,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      trainingHistory = data.record || {};
      localStorage.setItem(
        "gymTrainingHistory",
        JSON.stringify(trainingHistory)
      );
      console.log("✅ Historial cargado desde la nube");
    }
  } catch (error) {
    console.warn(
      "⚠️ Error cargando desde la nube, usando datos locales:",
      error
    );
    trainingHistory =
      JSON.parse(localStorage.getItem("gymTrainingHistory")) || {};
  } finally {
    isSyncing = false;
  }
}

async function saveToCloud() {
  // Always save locally first
  localStorage.setItem("gymTrainingHistory", JSON.stringify(trainingHistory));

  if (!JSONBIN_ENABLED) return;

  try {
    isSyncing = true;
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_API_KEY,
        },
        body: JSON.stringify(trainingHistory),
      }
    );

    if (response.ok) {
      console.log("✅ Historial guardado en la nube");
    }
  } catch (error) {
    console.warn("⚠️ Error guardando en la nube:", error);
  } finally {
    isSyncing = false;
  }
}

// Load from cloud on startup
loadFromCloud().then(() => {
  if (currentView === "history") {
    renderCalendar();
    updateStats();
  }
});

// --- THEME STATE ---
let currentTheme = localStorage.getItem("gymTheme") || "dark";

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme();
  localStorage.setItem("gymTheme", currentTheme);
}

function applyTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  if (currentTheme === "light") {
    body.classList.add("light");
    icon.setAttribute("data-lucide", "sun");
  } else {
    body.classList.remove("light");
    icon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();
}

// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
});

// --- VIEW FUNCTIONS ---
function setView(view) {
  currentView = view;
  const routineView = document.getElementById("routine-view");
  const historyView = document.getElementById("history-view");
  const routineBtn = document.getElementById("view-routine-btn");
  const historyBtn = document.getElementById("view-history-btn");

  if (view === "routine") {
    routineView.classList.remove("hidden");
    historyView.classList.add("hidden");
    routineBtn.className =
      "px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 bg-emerald-500 text-white";
    historyBtn.className =
      "px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 text-slate-400 hover:text-white";
  } else {
    routineView.classList.add("hidden");
    historyView.classList.remove("hidden");
    historyBtn.className =
      "px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 bg-emerald-500 text-white";
    routineBtn.className =
      "px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 text-slate-400 hover:text-white";
    renderCalendar();
    updateStats();
  }
  lucide.createIcons();
}

// --- CALENDAR FUNCTIONS ---
function getDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

function markDayCompleted(who) {
  const today = getDateKey(new Date());

  if (!trainingHistory[today]) {
    trainingHistory[today] = { alma: false, facu: false };
  }

  if (who === "alma") {
    trainingHistory[today].alma = true;
  } else if (who === "facu") {
    trainingHistory[today].facu = true;
  } else if (who === "both") {
    trainingHistory[today].alma = true;
    trainingHistory[today].facu = true;
  }

  saveToCloud();

  // Show toast notification
  const iconType = who === "both" ? "users" : "user";
  const iconColor =
    who === "both"
      ? "text-emerald-400"
      : who === "alma"
      ? "text-pink-400"
      : "text-blue-400";
  const name =
    who === "both" ? "Alma y Facu" : who === "alma" ? "Alma" : "Facu";
  showToast(iconType, iconColor, `¡Día registrado para ${name}!`);

  if (currentView === "history") {
    renderCalendar();
    updateStats();
  }
}

function showToast(iconType, iconColor, message) {
  const toast = document.getElementById("toast");
  const iconEl = document.getElementById("toast-icon");
  iconEl.setAttribute("data-lucide", iconType);
  iconEl.className = `w-6 h-6 ${iconColor}`;
  document.getElementById("toast-message").textContent = message;
  toast.classList.remove("hidden");
  lucide.createIcons();
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

function changeMonth(delta) {
  calendarMonth += delta;
  if (calendarMonth > 11) {
    calendarMonth = 0;
    calendarYear++;
  } else if (calendarMonth < 0) {
    calendarMonth = 11;
    calendarYear--;
  }
  renderCalendar();
  updateStats();
}

function renderCalendar() {
  const grid = document.getElementById("calendar-grid");
  const monthLabel = document.getElementById("calendar-month");

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  monthLabel.textContent = `${monthNames[calendarMonth]} ${calendarYear}`;

  grid.innerHTML = "";

  const firstDay = new Date(calendarYear, calendarMonth, 1);
  const lastDay = new Date(calendarYear, calendarMonth + 1, 0);
  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const today = new Date();
  const todayKey = getDateKey(today);

  // Empty cells for days before month starts
  for (let i = 0; i < startDayOfWeek; i++) {
    grid.innerHTML += `<div class="p-2"></div>`;
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(calendarYear, calendarMonth, day);
    const dateKey = getDateKey(date);
    const isToday = dateKey === todayKey;
    const history = trainingHistory[dateKey];

    let bgClass = "bg-slate-800/50 hover:bg-slate-800";
    let borderClass = "border-transparent";
    let icon = "";

    if (history) {
      if (history.alma && history.facu) {
        bgClass = "bg-emerald-500/20";
        borderClass = "border-emerald-500";
        icon = '<i data-lucide="users" class="w-3 h-3 text-emerald-400"></i>';
      } else if (history.alma) {
        bgClass = "bg-pink-500/20";
        borderClass = "border-pink-500";
        icon = '<i data-lucide="user" class="w-3 h-3 text-pink-400"></i>';
      } else if (history.facu) {
        bgClass = "bg-blue-500/20";
        borderClass = "border-blue-500";
        icon = '<i data-lucide="user" class="w-3 h-3 text-blue-400"></i>';
      }
    }

    const todayRing = isToday
      ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-900"
      : "";

    grid.innerHTML += `
                    <div class="aspect-square p-1 ${bgClass} border ${borderClass} rounded-lg flex flex-col items-center justify-center ${todayRing} transition-colors cursor-pointer" 
                         onclick="toggleDayModal('${dateKey}')">
                        <span class="text-sm font-medium ${
                          isToday ? "text-emerald-400" : "text-slate-300"
                        }">${day}</span>
                        ${icon}
                    </div>
                `;
  }
}

function toggleDayModal(dateKey) {
  const history = trainingHistory[dateKey];
  const [year, month, day] = dateKey.split("-");
  const dateStr = `${day}/${month}/${year}`;

  let status = "Sin registro";
  if (history) {
    if (history.alma && history.facu) status = "Ambos entrenaron";
    else if (history.alma) status = "Solo Alma";
    else if (history.facu) status = "Solo Facu";
  }

  // Show custom modal
  document.getElementById("day-modal-title").textContent = dateStr;
  document.getElementById("day-modal-status").textContent = status;
  selectedDateKey = dateKey;

  const modal = document.getElementById("day-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  lucide.createIcons();
}

let selectedDateKey = null;

function setDayTraining(who) {
  if (!selectedDateKey) return;

  if (who === "clear") {
    delete trainingHistory[selectedDateKey];
    showToast("trash-2", "text-red-400", "¡Registro eliminado!");
  } else if (who === "alma") {
    trainingHistory[selectedDateKey] = { alma: true, facu: false };
    showToast("user", "text-pink-400", "¡Día registrado para Alma!");
  } else if (who === "facu") {
    trainingHistory[selectedDateKey] = { alma: false, facu: true };
    showToast("user", "text-blue-400", "¡Día registrado para Facu!");
  } else if (who === "both") {
    trainingHistory[selectedDateKey] = { alma: true, facu: true };
    showToast("users", "text-emerald-400", "¡Día registrado para ambos!");
  }

  saveToCloud();
  closeDayModal();
  renderCalendar();
  updateStats();
}

function closeDayModal() {
  const modal = document.getElementById("day-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  selectedDateKey = null;
}

function updateStats() {
  let almaCount = 0;
  let facuCount = 0;
  let bothCount = 0;
  let totalDays = 0;

  // Count for current month only
  Object.keys(trainingHistory).forEach((dateKey) => {
    const [year, month] = dateKey.split("-").map(Number);
    if (year === calendarYear && month === calendarMonth + 1) {
      const h = trainingHistory[dateKey];
      if (h.alma) almaCount++;
      if (h.facu) facuCount++;
      if (h.alma && h.facu) bothCount++;
      if (h.alma || h.facu) totalDays++;
    }
  });

  document.getElementById(
    "stat-alma"
  ).innerHTML = `${almaCount} <span class="text-sm text-slate-500">días</span>`;
  document.getElementById(
    "stat-facu"
  ).innerHTML = `${facuCount} <span class="text-sm text-slate-500">días</span>`;
  document.getElementById(
    "stat-both"
  ).innerHTML = `${bothCount} <span class="text-sm text-slate-500">días</span>`;
  document.getElementById(
    "stat-total"
  ).innerHTML = `${totalDays} <span class="text-sm text-slate-500">días</span>`;
}

// --- HELPER: Parse rest time from notes ---
function parseRestTime(notes) {
  const match = notes.match(/Descanso:\s*(\d+)(?:-\d+)?\s*(min|seg)/i);
  if (match) {
    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();
    return unit === "min" ? value * 60 : value;
  }
  return 90; // Default 90 seconds
}

// --- TIMER FUNCTIONS ---
let timerEndTime = null;
let wakeLock = null;

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("Wake Lock active");
    }
  } catch (err) {
    console.error(`Wake Lock error: ${err.name}, ${err.message}`);
  }
}

async function releaseWakeLock() {
  if (wakeLock !== null) {
    await wakeLock.release();
    wakeLock = null;
    console.log("Wake Lock released");
  }
}

function showTimer(exerciseName, seconds) {
  const modal = document.getElementById("timer-modal");
  const display = document.getElementById("timer-display");
  const ring = document.getElementById("timer-ring");
  const secondsLeft = document.getElementById("timer-seconds-left");
  const exerciseNameEl = document.getElementById("timer-exercise-name");

  exerciseNameEl.textContent = exerciseName;
  currentTimerSeconds = seconds;
  totalTimerSeconds = seconds;

  // Use timestamps for accuracy
  timerEndTime = Date.now() + seconds * 1000;

  savedScrollY = window.scrollY; // Guardar posición actual
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden"; // Bloquear scroll
  document.body.style.position = "fixed"; // Fijar posición
  document.body.style.top = `-${savedScrollY}px`; // Mantener posición visual
  document.body.style.width = "100%"; // Mantener ancho
  document.body.style.touchAction = "none"; // Bloquear touch scroll
  lucide.createIcons();

  updateTimerDisplay();

  // Activate Wake Lock
  requestWakeLock();

  timerInterval = setInterval(() => {
    // Calculate remaining based on system time
    const now = Date.now();
    const diff = timerEndTime - now;

    currentTimerSeconds = Math.ceil(diff / 1000);

    updateTimerDisplay();

    if (currentTimerSeconds <= 0) {
      clearInterval(timerInterval);
      currentTimerSeconds = 0;
      updateTimerDisplay();
      playTimerEnd();

      // Try to send notification if possible
      if (Notification.permission === "granted") {
        new Notification("¡Tiempo Terminado!", {
          body: `Descanso finalizado para ${exerciseName}`,
          icon: "favicon.svg",
        });
      }

      setTimeout(hideTimer, 1500);
    }
  }, 200); // Check more frequently for smooth UI, but logic relies on Time
}

function updateTimerDisplay() {
  const display = document.getElementById("timer-display");
  const ring = document.getElementById("timer-ring");
  const secondsLeft = document.getElementById("timer-seconds-left");

  // Prevent negative display
  const displaySeconds = Math.max(0, currentTimerSeconds);

  const mins = Math.floor(displaySeconds / 60);
  const secs = displaySeconds % 60;
  display.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
  secondsLeft.textContent = displaySeconds;

  // Update ring progress
  const circumference = 364.42;
  const progress = Math.max(0, displaySeconds / totalTimerSeconds); // Clamp 0-1
  ring.style.strokeDashoffset = circumference * (1 - progress);

  // Change color when low
  if (displaySeconds <= 10) {
    ring.style.stroke = "#ef4444";
    display.classList.remove("text-emerald-400");
    display.classList.add("text-red-400");
  } else {
    ring.style.stroke = "#10b981";
    display.classList.remove("text-red-400");
    display.classList.add("text-emerald-400");
  }
}

function hideTimer() {
  const modal = document.getElementById("timer-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = ""; // Restaurar scroll
  document.body.style.position = ""; // Restaurar posición
  document.body.style.top = ""; // Restaurar top
  document.body.style.width = ""; // Restaurar ancho
  document.body.style.touchAction = ""; // Restaurar touch
  window.scrollTo(0, savedScrollY); // Restaurar posición de scroll

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  releaseWakeLock();
}

// --- CUSTOM MODAL FUNCTIONS ---
let confirmCallback = null;

function showConfirmModal(title, message, callback) {
  const modal = document.getElementById("confirm-modal");
  document.getElementById("confirm-title").textContent = title;
  document.getElementById("confirm-message").textContent = message;

  confirmCallback = callback;

  modal.classList.remove("hidden");
  // Small timeout for animation
  setTimeout(() => {
    modal.classList.remove("opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100");
  }, 10);
}

function hideConfirmModal() {
  const modal = document.getElementById("confirm-modal");
  modal.classList.add("opacity-0", "scale-95");
  modal.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    modal.classList.add("hidden");
    confirmCallback = null;
  }, 300);
}

function playTimerEnd() {
  // Vibrate if supported
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200, 100, 200]);
  }
  // Play beep sound
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.frequency.value = 880;
    oscillator.type = "sine";
    gainNode.gain.value = 0.3;
    oscillator.start();
    setTimeout(() => oscillator.stop(), 300);
  } catch (e) {}
}

// Timer event listeners
document
  .getElementById("confirm-cancel-btn")
  .addEventListener("click", hideConfirmModal);
document.getElementById("confirm-ok-btn").addEventListener("click", () => {
  if (confirmCallback) confirmCallback();
  hideConfirmModal();
});
document.getElementById("timer-skip-btn").addEventListener("click", hideTimer);
document.getElementById("timer-add-btn").addEventListener("click", () => {
  if (timerEndTime) {
    timerEndTime += 30000; // Add 30 seconds to the target timestamp
    totalTimerSeconds += 30; // Update total for progress ring calculation
    // Force immediate update
    const diff = timerEndTime - Date.now();
    currentTimerSeconds = Math.ceil(diff / 1000);
    updateTimerDisplay();
  }
});

// --- MUSCLE MAP GENERATOR ---
const getMuscleMapSVG = (primary = [], secondary = []) => {
  const getColor = (muscleId) => {
    if (primary.includes(muscleId)) return "#ef4444"; // Red-500
    if (secondary.includes(muscleId)) return "#eab308"; // Yellow-500
    return "#334155"; // Slate-700
  };

  // SVG Content (Same paths as React component)
  return `
            <div class="flex gap-2 h-32 w-full justify-center opacity-90 transition-opacity duration-500 hover:opacity-100">
                <svg viewBox="0 0 100 200" class="h-full w-auto drop-shadow-lg">
                    <circle cx="50" cy="20" r="12" fill="#1e293b" />
                    <path d="M38,32 Q50,40 62,32 L65,35 L35,35 Z" fill="${getColor(
                      "traps"
                    )}" />
                    <path d="M25,35 Q30,30 38,32 L38,45 Q25,50 22,40 Z" fill="${getColor(
                      "shoulders"
                    )}" />
                    <path d="M75,35 Q70,30 62,32 L62,45 Q75,50 78,40 Z" fill="${getColor(
                      "shoulders"
                    )}" />
                    <path d="M38,32 Q50,45 62,32 L62,55 Q50,65 38,55 Z" fill="${getColor(
                      "chest"
                    )}" />
                    <path d="M22,40 Q25,50 20,60 L28,60 Q30,50 38,45 Z" fill="${getColor(
                      "biceps"
                    )}" />
                    <path d="M78,40 Q75,50 80,60 L72,60 Q70,50 62,45 Z" fill="${getColor(
                      "biceps"
                    )}" />
                    <path d="M20,60 L18,80 L26,80 L28,60 Z" fill="${getColor(
                      "forearms"
                    )}" />
                    <path d="M80,60 L82,80 L74,80 L72,60 Z" fill="${getColor(
                      "forearms"
                    )}" />
                    <path d="M38,55 Q50,65 62,55 L60,85 Q50,90 40,85 Z" fill="${getColor(
                      "abs"
                    )}" />
                    <path d="M38,55 L35,80 L40,85 L38,55 Z" fill="${getColor(
                      "obliques"
                    )}" />
                    <path d="M62,55 L65,80 L60,85 L62,55 Z" fill="${getColor(
                      "obliques"
                    )}" />
                    <path d="M35,85 Q25,100 30,135 L48,135 Q50,100 45,85 Z" fill="${getColor(
                      "quads"
                    )}" />
                    <path d="M65,85 Q75,100 70,135 L52,135 Q50,100 55,85 Z" fill="${getColor(
                      "quads"
                    )}" />
                    <path d="M32,140 Q28,155 32,170 L46,170 Q48,155 46,140 Z" fill="${getColor(
                      "calves"
                    )}" />
                    <path d="M68,140 Q72,155 68,170 L54,170 Q52,155 54,140 Z" fill="${getColor(
                      "calves"
                    )}" />
                </svg>
                <svg viewBox="0 0 100 200" class="h-full w-auto drop-shadow-lg">
                    <circle cx="50" cy="20" r="12" fill="#1e293b" />
                    <path d="M35,32 L65,32 L50,55 Z" fill="${getColor(
                      "traps"
                    )}" />
                    <path d="M25,35 Q30,30 35,32 L35,45 Q25,50 22,40 Z" fill="${getColor(
                      "shoulders"
                    )}" />
                    <path d="M75,35 Q70,30 65,32 L65,45 Q75,50 78,40 Z" fill="${getColor(
                      "shoulders"
                    )}" />
                    <path d="M35,45 L28,65 Q35,75 50,85 Q65,75 72,65 L65,45 L50,55 Z" fill="${getColor(
                      "lats"
                    )}" />
                    <path d="M42,85 L58,85 L55,95 L45,95 Z" fill="${getColor(
                      "lower_back"
                    )}" />
                    <path d="M22,40 Q18,50 20,60 L28,60 Q30,50 35,45 Z" fill="${getColor(
                      "triceps"
                    )}" />
                    <path d="M78,40 Q82,50 80,60 L72,60 Q70,50 65,45 Z" fill="${getColor(
                      "triceps"
                    )}" />
                    <path d="M35,95 Q25,105 35,120 L50,120 L50,95 Z" fill="${getColor(
                      "glutes"
                    )}" />
                    <path d="M65,95 Q75,105 65,120 L50,120 L50,95 Z" fill="${getColor(
                      "glutes"
                    )}" />
                    <path d="M35,120 Q30,135 32,150 L48,150 Q48,135 45,120 Z" fill="${getColor(
                      "hamstrings"
                    )}" />
                    <path d="M65,120 Q70,135 68,150 L52,150 Q52,135 55,120 Z" fill="${getColor(
                      "hamstrings"
                    )}" />
                    <path d="M32,152 Q25,165 34,180 L46,180 Q48,165 46,152 Z" fill="${getColor(
                      "calves"
                    )}" />
                    <path d="M68,152 Q75,165 66,180 L54,180 Q52,165 54,152 Z" fill="${getColor(
                      "calves"
                    )}" />
                </svg>
            </div>
            `;
};

// --- INIT & RENDER FUNCTIONS ---

function init() {
  // Set Date
  const options = { weekday: "long", day: "numeric", month: "long" };
  document.getElementById("current-date").textContent =
    new Date().toLocaleDateString("es-AR", options);

  renderTabs();
  renderContent();
  lucide.createIcons();
}

function renderTabs() {
  const container = document.getElementById("tabs-container");
  container.innerHTML = "";

  routineData.forEach((day, index) => {
    const isActive = index === activeTab;
    const btn = document.createElement("button");

    // Determine color theme based on index
    const dayColors = ["emerald", "blue", "violet", "cyan", "rose"]; // Lunes, Martes, Miércoles, Jueves, Viernes
    const activeColor = dayColors[index] || "emerald";

    // Tailwind classes for buttons
    let classes =
      "flex-shrink-0 md:w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group border relative overflow-hidden ";

    if (isActive) {
      // Active State - Add specific class for CSS styling
      classes += `active-tab-${activeColor} translate-x-1 shadow-[0_0_20px_rgba(0,0,0,0.1)]`;
    } else {
      // Inactive State
      classes +=
        "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:border-slate-700";
    }
    btn.className = classes;

    btn.onclick = () => {
      activeTab = index;
      renderTabs();
      renderContent();
    };

    // Inner HTML
    // Inner HTML
    const activeGradient = `from-${activeColor}-500/10`;
    const activeTextLight = `text-${activeColor}-300`; // for dark mode text
    const activeTextMain = `text-${activeColor}-500`; // for icon

    btn.innerHTML = `
                    ${
                      isActive
                        ? `<div class="absolute inset-0 bg-gradient-to-r ${activeGradient} to-transparent opacity-50"></div>`
                        : ""
                    }
                    <div class="flex flex-col relative z-10">
                        <span class="text-xs font-bold uppercase tracking-wider mb-1 transition-colors ${
                          isActive ? activeTextLight : "text-slate-500"
                        } ${isActive ? "active-tab-label" : ""}">${
      day.day
    }</span>
                        <span class="font-medium text-sm truncate w-32 md:w-auto">${
                          day.title
                        }</span>
                    </div>
                    <i data-lucide="chevron-right" class="w-4 h-4 transition-all duration-300 relative z-10 ${
                      isActive
                        ? activeTextMain + " translate-x-0 active-tab-icon"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }"></i>
                `;

    container.appendChild(btn);
  });
  lucide.createIcons();
}

function renderContent() {
  const dayData = routineData[activeTab];

  // Determine active color theme
  const dayColors = ["emerald", "blue", "violet", "cyan", "rose"];
  const activeColor = dayColors[activeTab] || "emerald";

  // Update Headers & Progress
  document.getElementById("day-title").textContent = dayData.title;
  document.getElementById(
    "exercise-count"
  ).textContent = `${dayData.exercises.length} Ejercicios`;

  // Calculate total sets and completed sets for progress
  let totalSets = 0;
  let completedSetsCount = 0;
  dayData.exercises.forEach((exercise, idx) => {
    const numSets = parseInt(exercise.sets) || 3;
    totalSets += numSets * 2; // Multiplicado por 2 (Facu + Alma)
    for (let s = 0; s < numSets; s++) {
      const setKey = `${activeTab}-${idx}-${s}`;
      const setData = completedSets[setKey] || { facu: false, alma: false };
      if (setData.facu) completedSetsCount++;
      if (setData.alma) completedSetsCount++;
    }
  });

  const progress =
    totalSets === 0 ? 0 : Math.round((completedSetsCount / totalSets) * 100);

  const progressContainer = document.getElementById("progress-container");
  progressContainer.classList.remove("hidden");

  // Progress Bar Animation
  const progressBar = document.getElementById("progress-bar");
  document.getElementById("progress-text").textContent = `${progress}%`;

  // Update progress bar color
  progressBar.className = `h-full rounded-full transition-all duration-1000 ease-out bg-${activeColor}-500 shadow-[0_0_10px_rgba(0,0,0,0.3)]`;

  progressBar.style.width = "0%";
  setTimeout(() => {
    progressBar.style.width = `${progress}%`;
  }, 50);

  // Completion Message
  const completionMsg = document.getElementById("completion-message");
  if (progress === 100) {
    completionMsg.classList.remove("hidden");
  } else {
    completionMsg.classList.add("hidden");
  }

  // Render Exercises
  const listContainer = document.getElementById("exercises-list");
  listContainer.innerHTML = "";

  // BLOQUE 0: ACTIVACIÓN (Mantener estilo específico o usar tema?)
  // User requested distinctive style for block 0. Let's keep it amber/warm but maybe subtle tweak not needed.
  // Keeping existing Warmup Block logic as it has specific semantic meaning (Warmup = Fire/Energy).

  const warmupBlock = document.createElement("div");
  warmupBlock.className =
    "warmup-block mb-6 p-4 bg-amber-900/20 rounded-xl border border-amber-700/50";
  warmupBlock.innerHTML = `
                <div class="flex items-center gap-2 mb-3">
                    <i data-lucide="flame" class="w-5 h-5 text-amber-400"></i>
                    <h3 class="text-lg font-bold text-amber-400">BLOQUE 0: ACTIVACIÓN</h3>
                    <span class="text-xs text-slate-400 ml-2">(Antes de empezar)</span>
                </div>
                <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2 text-slate-300">
                        <i data-lucide="bike" class="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"></i>
                        <span><strong>Bicicleta Estática:</strong> 10 Minutos (Ritmo medio)</span>
                    </li>
                    <li class="flex items-start gap-2 text-slate-300">
                        <i data-lucide="rotate-3d" class="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"></i>
                        <span><strong>Movilidad Articular:</strong> 2-3 min moviendo hombros y caderas (opcional pero recomendado)</span>
                    </li>
                </ul>
            `;
  listContainer.appendChild(warmupBlock);

  dayData.exercises.forEach((exercise, idx) => {
    const numSets = parseInt(exercise.sets) || 3;
    const restTime = parseRestTime(exercise.notes || "");

    // Count completed sets for this exercise (Total checks / Total required)
    let exerciseCompletedChecks = 0;
    for (let s = 0; s < numSets; s++) {
      const setKey = `${activeTab}-${idx}-${s}`;
      const setData = completedSets[setKey] || { facu: false, alma: false };
      if (setData.facu) exerciseCompletedChecks++;
      if (setData.alma) exerciseCompletedChecks++;
    }
    const isExerciseCompleted = exerciseCompletedChecks === numSets * 2;

    const card = document.createElement("div");
    const staggerClass = idx < 6 ? `stagger-${idx + 1}` : "";

    // Add active-theme class for CSS targeting
    let cardClasses = `animate-slide-up ${staggerClass} relative group p-0 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col md:flex-row active-theme-${activeColor} `;

    if (isExerciseCompleted) {
      cardClasses += `bg-${activeColor}-900/10 border-${activeColor}-900/20 opacity-80 scale-[0.99]`;
    } else {
      // Use standard slate for inactive to avoid rainbow vomit, OR use subtle tint of active color?
      // "cuadrito de cada dia y su contenido tengan el mismo color" -> implies tint.
      cardClasses += `bg-slate-900 border-slate-800 hover:border-${activeColor}-500/50 hover:shadow-xl hover:shadow-${activeColor}-900/10`;
    }
    card.className = cardClasses;

    const muscleMapHTML = getMuscleMapSVG(
      exercise.muscles.primary,
      exercise.muscles.secondary
    );

    // Generate set buttons HTML
    let setButtonsHTML = "";
    for (let s = 0; s < numSets; s++) {
      const setKey = `${activeTab}-${idx}-${s}`;
      // Ensure object structure
      if (typeof completedSets[setKey] !== "object") {
        completedSets[setKey] = { facu: false, alma: false };
      }
      const setData = completedSets[setKey];

      // Dynamic button colors
      setButtonsHTML += `
          <div class="flex flex-col items-center gap-1.5 bg-slate-950/30 p-2 rounded-xl border border-slate-800/50">
              <span class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Set ${
                s + 1
              }</span>
              <div class="flex gap-2">
                  <!-- Facu Button -->
                  <button data-set-key="${setKey}" data-user="facu" data-exercise-name="${
        exercise.name
      }" data-rest-time="${restTime}"
                      class="set-btn w-9 h-9 rounded-lg font-bold text-xs transition-all duration-200 flex items-center justify-center border
                      ${
                        setData.facu
                          ? `bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20`
                          : `bg-slate-800 text-slate-500 border-slate-700 hover:border-blue-500/50 hover:text-blue-400`
                      }" title="Facu">
                      ${
                        setData.facu
                          ? '<i data-lucide="check" class="w-4 h-4"></i>'
                          : "F"
                      }
                  </button>
                  
                  <!-- Alma Button -->
                  <button data-set-key="${setKey}" data-user="alma" data-exercise-name="${
        exercise.name
      }" data-rest-time="${restTime}"
                      class="set-btn w-9 h-9 rounded-lg font-bold text-xs transition-all duration-200 flex items-center justify-center border
                      ${
                        setData.alma
                          ? `bg-pink-600 text-white border-pink-500 shadow-lg shadow-pink-500/20`
                          : `bg-slate-800 text-slate-500 border-slate-700 hover:border-pink-500/50 hover:text-pink-400`
                      }" title="Alma">
                      ${
                        setData.alma
                          ? '<i data-lucide="check" class="w-4 h-4"></i>'
                          : "A"
                      }
                  </button>
              </div>
          </div>
      `;
    }

    card.innerHTML = `
                    <!-- Completion Strip -->
                    <div class="absolute left-0 top-0 bottom-0 w-1 z-10 transition-colors duration-300 ${
                      isExerciseCompleted
                        ? `bg-${activeColor}-500`
                        : `bg-transparent group-hover:bg-${activeColor}-500/50`
                    }"></div>

                    <!-- Left Info -->
                    <div class="flex-1 p-5">
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex-1">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 rounded-lg transition-colors duration-300 ${
                                      isExerciseCompleted
                                        ? "bg-emerald-500/20 text-emerald-400"
                                        : "bg-slate-800 text-slate-300 group-hover:bg-slate-700"
                                    }">
                                        <i data-lucide="dumbbell" class="w-5 h-5 ${
                                          isExerciseCompleted
                                            ? "animate-pulse"
                                            : ""
                                        }"></i>
                                    </div>
                                    <h3 class="font-bold text-lg transition-all duration-300 ${
                                      isExerciseCompleted
                                        ? "text-slate-500 line-through decoration-slate-600 decoration-2"
                                        : "text-slate-100 group-hover:text-emerald-300"
                                    }">
                                        ${exercise.name}
                                    </h3>
                                </div>
                                
                                <!-- Sets Row -->
                                <div class="mt-4 mb-3">
                                    <div class="flex items-center gap-2 mb-2">
                                        <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Progreso</span>
                                        <div class="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden ml-2">
                                            <div class="h-full bg-emerald-500 transition-all duration-300" style="width: ${
                                              (exerciseCompletedChecks /
                                                (numSets * 2)) *
                                              100
                                            }%"></div>
                                        </div>
                                    </div>
                                    <div class="flex gap-2 flex-wrap items-end">
                                        ${setButtonsHTML}
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-x-4 gap-y-2 text-sm transition-opacity duration-300 ${
                                  isExerciseCompleted
                                    ? "opacity-50"
                                    : "opacity-100"
                                }">
                                    <div class="flex flex-col">
                                        <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Reps</span>
                                        <span class="font-mono text-white font-medium">${
                                          exercise.reps
                                        }</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Intensidad</span>
                                        <span class="text-orange-400 font-medium">${
                                          exercise.rir
                                        }</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Descanso</span>
                                        <span class="text-cyan-400 font-medium">${
                                          restTime >= 60
                                            ? Math.floor(restTime / 60) + " min"
                                            : restTime + "s"
                                        }</span>
                                    </div>
                                </div>

                                ${
                                  exercise.notes
                                    ? `
                                <div class="mt-3 pt-3 border-t border-slate-800/50 transition-opacity duration-300 ${
                                  isExerciseCompleted
                                    ? "opacity-40"
                                    : "opacity-100"
                                }">
                                    <p class="text-slate-400 text-sm italic flex items-start gap-1.5">
                                        <span class="text-emerald-500 not-italic font-bold">Tip:</span> 
                                        ${exercise.notes
                                          .replace(
                                            /Descanso:.*?(min|seg)\.?/gi,
                                            ""
                                          )
                                          .trim()}
                                    </p>
                                </div>`
                                    : ""
                                }
                            </div>

                            <div class="mt-1">
                                ${
                                  isExerciseCompleted
                                    ? `<i data-lucide="check-circle-2" class="w-8 h-8 text-emerald-500 fill-emerald-500/20 animate-pop drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"></i>`
                                    : `<i data-lucide="circle" class="w-8 h-8 text-slate-700 group-hover:text-emerald-500/50 transition-all duration-300 transform group-hover:scale-110"></i>`
                                }
                            </div>
                        </div>
                    </div>

                    <!-- Muscle Map -->
                    <div class="w-full md:w-32 bg-slate-950/50 border-t md:border-t-0 md:border-l border-slate-800 p-2 flex flex-col items-center justify-center transition-opacity duration-300 ${
                      isExerciseCompleted ? "opacity-50 grayscale" : ""
                    }">
                        <span class="text-[10px] uppercase text-slate-500 font-bold mb-1 tracking-wider text-center">Impacto Muscular</span>
                        ${muscleMapHTML}
                        <div class="flex gap-2 mt-2 justify-center">
                            <div class="flex items-center gap-1">
                                <div class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                                <span class="text-[9px] text-slate-400">1º</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <div class="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                                <span class="text-[9px] text-slate-400">2º</span>
                            </div>
                        </div>
                    </div>
                `;
    listContainer.appendChild(card);
  });

  // BLOQUE FINAL: CORE
  const coreBlock = document.createElement("div");
  coreBlock.className =
    "core-block mt-6 mb-8 p-4 bg-gradient-to-r from-indigo-900/20 to-slate-900 rounded-xl border border-indigo-700/50";
  coreBlock.innerHTML = `
                <div class="flex items-center gap-2 mb-3">
                    <i data-lucide="zap" class="w-5 h-5 text-indigo-400"></i>
                    <h3 class="text-lg font-bold text-indigo-400">BLOQUE FINAL: CORE</h3>
                    <span class="text-xs text-slate-400 ml-2">(Opcional si sobra energía)</span>
                </div>
                <ul class="space-y-3 text-sm mb-4">
                    <li class="flex items-start gap-2 text-slate-300">
                        <i data-lucide="target" class="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0"></i>
                        <span><strong>Crunch Abdominal o Elevación de Piernas:</strong> 3 series x 15 repes.</span>
                    </li>
                    <li class="flex items-start gap-2 text-slate-300">
                        <i data-lucide="target" class="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0"></i>
                        <span><strong>Espinales (Superman o Máquina):</strong> 3 series x 12 repes.</span>
                    </li>
                </ul>
                
                <!-- Advertencia Coach -->
                <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3 flex gap-3">
                    <i data-lucide="triangle-alert" class="w-5 h-5 text-yellow-500 flex-shrink-0"></i>
                    <div class="text-xs text-yellow-200/90 leading-relaxed">
                        <strong>⚠️ Advertencia Coach:</strong> Facundo, con tus espinales ten mucho cuidado. No hagas movimientos bruscos. Prefiero que hagas "Bird-Dog" (cuadrupedia levantando mano y pierna contraria) para fortalecer la zona sin comprimir las vértebras.
                    </div>
                </div>
            `;
  listContainer.appendChild(coreBlock);

  // RESET BUTTON
  const resetBtnContainer = document.createElement("div");
  resetBtnContainer.className =
    "mt-8 mb-12 flex justify-center opacity-80 hover:opacity-100 transition-opacity";
  resetBtnContainer.innerHTML = `
                <button id="reset-progress-btn" class="flex items-center gap-2 px-6 py-3 bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-xl hover:bg-red-900/20 hover:text-red-400 hover:border-red-900/50 transition-all duration-300 shadow-sm hover:shadow-red-500/10 active:scale-95 touch-manipulation">
                    <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
                    <span class="font-medium">Reiniciar Entrenamiento</span>
                </button>
            `;
  listContainer.appendChild(resetBtnContainer);

  // Listener for reset
  setTimeout(() => {
    const btn = document.getElementById("reset-progress-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        showConfirmModal(
          "¿Reiniciar Progreso?",
          "Se borrará todo lo que hiciste hoy. ¿Estás seguro?",
          () => {
            completedSets = {};
            localStorage.removeItem("gymRoutineSets");
            renderContent();
          }
        );
      });
    }
  }, 0);

  // Add event listeners to set buttons (UPDATED)
  document.querySelectorAll(".set-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const setKey = btn.dataset.setKey;
      const user = btn.dataset.user; // 'facu' or 'alma'
      const exerciseName = btn.dataset.exerciseName;
      const restTime = parseInt(btn.dataset.restTime);

      // Initialize if missing
      if (!completedSets[setKey] || typeof completedSets[setKey] !== "object") {
        completedSets[setKey] = { facu: false, alma: false };
      }

      // Handle Logic
      const currentState = completedSets[setKey][user];

      if (!currentState) {
        // TURN ON
        completedSets[setKey][user] = true;
        // Sólo mostrar timer si se activa (no si se desactiva)
        showTimer(
          `${exerciseName} (${user === "facu" ? "Facu" : "Alma"})`,
          restTime
        );
      } else {
        // TURN OFF
        completedSets[setKey][user] = false;
      }

      localStorage.setItem("gymRoutineSets", JSON.stringify(completedSets));
      renderContent();
    });
  });

  // Request Notification Permission
  if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  // Re-init icons for newly added elements
  lucide.createIcons();
}

// Init App
init();
