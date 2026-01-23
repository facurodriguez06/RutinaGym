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
    title: "Juntos - Full Body - VERSIÓN FINAL CON BONUS",
    exercises: [
      {
        name: "Peso Muerto Rumano (Manc/Barra)",
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
          "Aguanta 1 seg arriba con piernas rectas. Quema, pero sirve. Descanso: 60 seg.",
        muscles: { primary: ["quads"], secondary: [] },
      },
      {
        name: "Patada de Glúteo en Máquina",
        sets: "4",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Pecho apoyado. Empuja con el talón. Sin arquear lumbar. Descanso: 60 seg.",
        muscles: { primary: ["glutes"], secondary: ["hamstrings"] },
      },
      {
        name: "Face Pull (Polea Alta)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 1",
        notes: "Salud de hombros. Cuerda a la frente. Descanso: 60 seg.",
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
      {
        name: "BONUS A ELECCIÓN (Ver abajo)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "El 'postre' de la rutina. Disfrútenlo. Descanso: 60 seg. ALMA: Curl Manc. Alternado (palmas al techo). FACU: Press Inclinado Manc. (banco 30-45°, profundo).",
        muscles: { primary: ["biceps", "chest"], secondary: [] },
      },
    ],
  },
];

// --- STATE ---
// Auto-select Day
const currentDayOfWeek = new Date().getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
// Mon(1) -> 0, Fri(5) -> 4. Saturday(6)/Sunday(0) -> 0 (Monday)
let activeTab =
  currentDayOfWeek >= 1 && currentDayOfWeek <= 5 ? currentDayOfWeek - 1 : 0;

// Auto-reset daily logic
const todayStr = new Date().toDateString();
const lastVisit = localStorage.getItem("gymLastVisitDate");
if (lastVisit !== todayStr) {
  localStorage.removeItem("gymRoutineSets");
  localStorage.setItem("gymLastVisitDate", todayStr);
}

let completedSets = JSON.parse(localStorage.getItem("gymRoutineSets")) || {};

// --- TIMER STATE ---
const timerState = {
  facu: {
    endTime: null,
    totalSeconds: 0,
    currentSeconds: 0,
    exerciseName: "",
    minimized: false,
    active: false,
  },
  alma: {
    endTime: null,
    totalSeconds: 0,
    currentSeconds: 0,
    exerciseName: "",
    minimized: false,
    active: false,
  },
};

let globalTimerInterval = null;
let activeFullModalUser = null; // 'facu', 'alma', or null
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
      },
    );

    if (response.ok) {
      const data = await response.json();
      trainingHistory = data.record || {};

      // Load Gamification from Cloud
      if (trainingHistory.gamificationState) {
        gamification = trainingHistory.gamificationState;
        delete trainingHistory.gamificationState; // Clean up logic so it doesn't pollute history iteration
        localStorage.setItem("gymGamification", JSON.stringify(gamification));
      }

      localStorage.setItem(
        "gymTrainingHistory",
        JSON.stringify(trainingHistory),
      );
      console.log("✅ Historial cargado desde la nube");
    }
  } catch (error) {
    console.warn(
      "⚠️ Error cargando desde la nube, usando datos locales:",
      error,
    );
    trainingHistory =
      JSON.parse(localStorage.getItem("gymTrainingHistory")) || {};
  } finally {
    isSyncing = false;
  }
}

// --- GAMIFICATION STATE ---
let gamification = JSON.parse(localStorage.getItem("gymGamification")) || {
  facu: { points: 0, freezes: 0, frozenWeeks: [] },
  alma: { points: 0, freezes: 0, frozenWeeks: [] },
};

// Ensure structure integrity if updating from older version
["facu", "alma"].forEach((u) => {
  if (!gamification[u])
    gamification[u] = { points: 0, freezes: 0, frozenWeeks: [] };
  if (!gamification[u].frozenWeeks) gamification[u].frozenWeeks = [];
});

// Optimization: Update Render immediately with local data (don't wait for cloud/init)
if (typeof updateGamificationUI === "function") {
  updateGamificationUI();
}

async function saveToCloud() {
  // Always save locally first
  localStorage.setItem("gymTrainingHistory", JSON.stringify(trainingHistory));
  localStorage.setItem("gymGamification", JSON.stringify(gamification)); // Save Gamification

  if (!JSONBIN_ENABLED) return;
  // ... rest of saveToCloud functionality wraps gamification too?
  // Since we are using JSONBIN, we should structure the payload to include both or have a separate bin.
  // Current implementation saves `trainingHistory` directly as the body.
  // To avoid breaking changes or complex migration of the bin structure,
  // I will attach gamification to the trainingHistory object TEMPORARILY as a hidden field `_gamification`.
  // Or better, I'll update the structure if I can.
  // User said "trainingHistory = data.record".
  // Let's attach it to trainingHistory as a special key "gamificationState".

  trainingHistory.gamificationState = gamification;

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
      },
    );

    if (response.ok) {
      console.log("✅ Datos guardados en la nube");
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
  updateStreak();
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
    if (icon) icon.setAttribute("data-lucide", "sun");
  } else {
    body.classList.remove("light");
    if (icon) icon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();
}

// Apply saved theme on load
// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();

  // Format Date for Header and Sidebar
  const dateResult = document.getElementById("header-full-date");
  const sidebarDate = document.getElementById("sidebar-date");
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formatted = now.toLocaleDateString("es-ES", options);
  const formattedUpper = formatted.toUpperCase();

  if (dateResult) dateResult.textContent = formattedUpper;
  if (sidebarDate) sidebarDate.textContent = formatted;
});

// --- VIEW FUNCTIONS ---
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const isOpen = !sidebar.classList.contains("-translate-x-full");

  if (isOpen) {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.remove("opacity-100");
    setTimeout(() => overlay.classList.add("hidden"), 300);
    // Unlock body scroll
    document.body.style.overflow = "";
  } else {
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.add("opacity-100"), 10);
    sidebar.classList.remove("-translate-x-full");
    // Lock body scroll to prevent background scrolling
    document.body.style.overflow = "hidden";
  }
}

function navigateTo(view) {
  currentView = view;
  const routineView = document.getElementById("routine-view");
  const historyView = document.getElementById("history-view");
  const waterView = document.getElementById("view-water"); // New dedicated view

  // Hide all
  routineView.classList.add("hidden");
  historyView.classList.add("hidden");
  if (waterView) waterView.classList.add("hidden");

  // Show selected
  if (view === "routine") {
    routineView.classList.remove("hidden");
  } else if (view === "history") {
    historyView.classList.remove("hidden");
    renderCalendar();
    updateStats();
  } else if (view === "water") {
    if (waterView) {
      waterView.classList.remove("hidden");
      calculateAndRenderWaterGoal(); // Ensure fresh data
    }
  }

  // Update Sidebar Active State
  const navItems = document.querySelectorAll("#sidebar nav button");
  navItems.forEach((btn) => {
    if (btn.onclick && btn.onclick.toString().includes(`'${view}'`)) {
      btn.classList.add("bg-slate-800", "text-white");
      btn.classList.remove("text-slate-300");
      // Add marker or highlight icon color if needed
    } else {
      btn.classList.remove("bg-slate-800", "text-white");
      btn.classList.add("text-slate-300");
    }
  });

  // Close Sidebar on Mobile
  const sidebar = document.getElementById("sidebar");
  if (!sidebar.classList.contains("-translate-x-full")) {
    toggleSidebar();
  }

  lucide.createIcons();
}

// --- CALENDAR FUNCTIONS ---
function getDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

function markDayCompleted(who) {
  const today = getDateKey(new Date());

  if (!trainingHistory[today]) {
    trainingHistory[today] = { alma: false, facu: false, weights: {} };
  }

  // Ensure weights object exists if migrating from old data
  if (!trainingHistory[today].weights) {
    trainingHistory[today].weights = {};
  }

  // Snapshot current weights into history for today
  // We merge to avoid overwriting if they check one person then the other
  trainingHistory[today].weights = {
    ...trainingHistory[today].weights,
    ...setWeights,
  };

  // AWARD POINTS
  const POINTS_PER_WORKOUT = 100;
  let pointsMsg = "";

  if (who === "alma") {
    trainingHistory[today].alma = true;
    gamification.alma.points += POINTS_PER_WORKOUT;
    pointsMsg = ` (+${POINTS_PER_WORKOUT} pts)`;
  } else if (who === "facu") {
    trainingHistory[today].facu = true;
    gamification.facu.points += POINTS_PER_WORKOUT;
    pointsMsg = ` (+${POINTS_PER_WORKOUT} pts)`;
  } else if (who === "both") {
    trainingHistory[today].alma = true;
    trainingHistory[today].facu = true;
    gamification.alma.points += POINTS_PER_WORKOUT;
    gamification.facu.points += POINTS_PER_WORKOUT;
    pointsMsg = ` (+${POINTS_PER_WORKOUT} pts c/u)`;
  }

  saveToCloud();
  updateGamificationUI();

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
  showToast(iconType, iconColor, `¡Día registrado para ${name}!${pointsMsg}`);

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

    // Water icon if water was logged
    let waterIcon = "";
    if (
      history &&
      history.water &&
      (history.water.facu > 0 || history.water.alma > 0)
    ) {
      waterIcon = '<i data-lucide="droplets" class="w-3 h-3 text-sky-400"></i>';
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
                        <div class="flex gap-0.5">${icon}${waterIcon}</div>
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

  // Water status
  let waterStatus = "";
  if (history && history.water) {
    const facuWater = history.water.facu || 0;
    const almaWater = history.water.alma || 0;

    if (facuWater > 0 || almaWater > 0) {
      waterStatus = `<div class="mt-3 pt-3 border-t border-slate-700">
        <div class="flex items-center gap-2 mb-2">
          <i data-lucide="droplets" class="w-4 h-4 text-sky-400"></i>
          <span class="text-xs font-bold text-slate-400">HIDRATACIÓN</span>
        </div>
        <div class="flex gap-4 text-sm">
          ${
            facuWater > 0
              ? `<div class="flex items-center gap-1">
            <span>🙎🏽‍♂️</span>
            <span class="${facuWater >= 2500 ? "text-emerald-400" : "text-sky-300"}">${facuWater >= 2500 ? "✅ Meta" : facuWater + "ml"}</span>
          </div>`
              : ""
          }
          ${
            almaWater > 0
              ? `<div class="flex items-center gap-1">
            <span>🙎🏻‍♀️</span>
            <span class="${almaWater >= 2000 ? "text-emerald-400" : "text-pink-300"}">${almaWater >= 2000 ? "✅ Meta" : almaWater + "ml"}</span>
          </div>`
              : ""
          }
        </div>
      </div>`;
    }
  }

  // Show custom modal
  document.getElementById("day-modal-title").textContent = dateStr;
  document.getElementById("day-modal-status").innerHTML = status + waterStatus;
  selectedDateKey = dateKey;

  const modal = document.getElementById("day-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  lucide.createIcons();
}

let selectedDateKey = null;

// --- WEATHER & WATER LOGIC ---

// Persistent User Data (Weights, Heights, Ages)
let userProfile = JSON.parse(localStorage.getItem("gymUserProfile")) || {
  facu: { weight: 80, height: 175, age: 23 },
  alma: { weight: 60, height: 165, age: 23 },
};

// Ensure fields exist (migration from old data)
if (!userProfile.facu.height) userProfile.facu.height = 175;
if (!userProfile.alma.height) userProfile.alma.height = 165;
if (!userProfile.facu.age) userProfile.facu.age = 23;
if (!userProfile.alma.age) userProfile.alma.age = 23;

// Water State
let waterState = JSON.parse(localStorage.getItem("water_tracker_state")) || {
  facu: 0,
  alma: 0,
  facuGoal: 2500,
  almaGoal: 2000,
  history: [],
  date: new Date().toDateString(),
};

// Reset if new day
if (waterState.date !== new Date().toDateString()) {
  waterState.facu = 0;
  waterState.alma = 0;
  waterState.history = [];
  waterState.date = new Date().toDateString();
  saveWaterState(); // Safe to call if defined, or we define it below
}

let currentTemp = parseInt(localStorage.getItem("cachedTemp")) || 25; // Load cached or default

// Show cached temp immediately on load
if (localStorage.getItem("cachedTemp")) {
  setTimeout(() => updateWeatherUI(), 0);
}

async function fetchWeather() {
  try {
    const res = await fetch("https://wttr.in/Mendoza?format=j1");
    if (res.ok) {
      const data = await res.json();
      if (data.current_condition && data.current_condition.length > 0) {
        currentTemp = parseInt(data.current_condition[0].temp_C);
        localStorage.setItem("cachedTemp", currentTemp); // Cache for next load
        updateWeatherUI();
      }
    }
  } catch (e) {
    console.warn("Weather fetch failed", e);
  }
}

function updateWeatherUI() {
  // Header (desktop)
  const el = document.getElementById("weather-temp-header");
  const container = document.getElementById("header-weather");

  if (el) {
    el.textContent = `${currentTemp}°C`;
    if (container) container.classList.remove("hidden");
  }

  // Sidebar (mobile)
  const sidebarTemp = document.getElementById("sidebar-temp");
  const sidebarWeatherContainer = document.getElementById("sidebar-weather");

  if (sidebarTemp) {
    sidebarTemp.textContent = `${currentTemp}°C`;
    if (sidebarWeatherContainer)
      sidebarWeatherContainer.classList.remove("hidden");
  }
}

// --- AQUAFLOW LOGIC ---

const TANK_HEIGHT_SVG = 605; // Matches SVG ViewBox Height

// Smart Water Goal Calculator
function calculateSmartWaterGoal(user) {
  const profile = userProfile[user];
  const weight = profile.weight || 70;
  const height = profile.height || 170;
  const age = profile.age || 25;

  // Base: 35ml per kg of body weight
  let goal = weight * 35;

  // Height adjustment: +100ml if taller than 170cm
  if (height > 170) {
    goal += 100;
  }

  // Age adjustment: +100ml if under 30 (more active metabolism)
  if (age < 30) {
    goal += 100;
  } else if (age > 50) {
    goal -= 100;
  }

  // Temperature bonus
  if (currentTemp > 30) {
    goal += 500;
  } else if (currentTemp > 25) {
    goal += 300;
  }

  // Training day bonus: check if today is a training day
  const today = getDateKey(new Date());
  const history = trainingHistory[today];
  if (history && history[user]) {
    goal += 400;
  }

  // Round to nearest 50
  goal = Math.round(goal / 50) * 50;

  // Clamp between 1500 and 4500
  return Math.max(1500, Math.min(4500, goal));
}

function initAquaFlow() {
  // Calculate smart goals based on profile and conditions
  waterState.facuGoal = calculateSmartWaterGoal("facu");
  waterState.almaGoal = calculateSmartWaterGoal("alma");
  saveWaterState();

  renderAquaFlow();
  startBubbleEngine("facu");
  startBubbleEngine("alma");

  // Set Slider Values
  const sliderFacu = document.getElementById("goal-input-facu");
  const sliderAlma = document.getElementById("goal-input-alma");
  if (sliderFacu) {
    sliderFacu.value = waterState.facuGoal;
    sliderFacu.addEventListener("input", (e) => {
      waterState.facuGoal = parseInt(e.target.value);
      saveWaterState();
      renderAquaFlow();
    });
  }
  if (sliderAlma) {
    sliderAlma.value = waterState.almaGoal;
    sliderAlma.addEventListener("input", (e) => {
      waterState.almaGoal = parseInt(e.target.value);
      saveWaterState();
      renderAquaFlow();
    });
  }
}

function calculateAndRenderWaterGoal() {
  // Redirect to new renderer
  renderAquaFlow();
  renderWaterHistory();
}

function renderAquaFlow() {
  renderUserWater("facu");
  renderUserWater("alma");
}

function renderUserWater(user) {
  console.log(`[DEBUG] renderUserWater called for ${user}`);
  const current = waterState[user] || 0;
  const goal = waterState[`${user}Goal`] || 2500;
  console.log(`[DEBUG] Code State: current=${current}, goal=${goal}`);

  // Update Text
  const percent = Math.min(100, Math.floor((current / goal) * 100));
  const percentEl = document.getElementById(`percent-${user}`);
  const amountEl = document.getElementById(`amount-${user}`);
  const goalTextEl = document.getElementById(`goal-text-${user}`);

  console.log(
    `[DEBUG] Elements found? percent=${!!percentEl}, amount=${!!amountEl}`,
  );

  if (percentEl) percentEl.textContent = `${percent}%`;
  if (amountEl) amountEl.textContent = `${current} / ${goal} ml`;
  if (goalTextEl) goalTextEl.textContent = `${goal} ml`;

  // Update SVG Water Level
  // visualPercent clamped to 1 (100%) so it doesn't overflow visually
  const visualPercent = Math.min(1, current / goal);
  const newY = TANK_HEIGHT_SVG - visualPercent * TANK_HEIGHT_SVG;
  console.log(`[DEBUG] NewY: ${newY}`);

  const rect = document.getElementById(`water-rect-${user}`);
  console.log(`[DEBUG] Rect found? ${!!rect}`);
  if (rect) {
    rect.setAttribute("y", newY);
  }
}

// Override addWater to handle new signature
// Old: addWater(amount) -> implied Facu? No, original app didn't specify user clearly in addWater,
// actually the previous code had specific buttons? Let's check.
// The new HTML uses addWater('facu', 250).

// We need to keep a compatible signature or update all calls.
// The HTML calls `addWater('facu', 250)`, so we update global addWater.

// Override addWater to handle new signature
// Override addWater to handle new signature
function addWater(user, amount) {
  console.log(`[DEBUG] addWater called for ${user}, amount: ${amount}`);
  if (!amount || amount === 0) return;

  const current = waterState[user] || 0;
  const goal = waterState[`${user}Goal`] || 2500;
  const oldPercent = current / goal;

  // Update State
  waterState[user] = Math.max(0, current + amount);

  // Add to History
  if (!waterState.history) waterState.history = [];
  waterState.history.unshift({
    user: user,
    amount: amount,
    time: new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  // Keep last 20 entries
  if (waterState.history.length > 20) waterState.history.pop();

  saveWaterState();

  // SYNC WITH TRAINING HISTORY (for calendar display)
  const todayKey = getDateKey(new Date());
  if (!trainingHistory[todayKey]) {
    trainingHistory[todayKey] = { alma: false, facu: false, weights: {} };
  }
  if (!trainingHistory[todayKey].water) {
    trainingHistory[todayKey].water = {};
  }
  trainingHistory[todayKey].water.facu = waterState.facu;
  trainingHistory[todayKey].water.alma = waterState.alma;
  localStorage.setItem("gymTrainingHistory", JSON.stringify(trainingHistory));

  // Visuals
  if (amount > 0) {
    animateShake(user);

    // Check Goal
    const newPercent = waterState[user] / goal;
    if (oldPercent < 1 && newPercent >= 1) {
      triggerConfetti();
    }
  }

  console.log(`[DEBUG] Calling renderAquaFlow from addWater`);
  renderAquaFlow();
  renderWaterHistory();
}

function renderWaterHistory() {
  const container = document.getElementById("water-history-list");
  if (!container) return; // Need to create this in HTML first

  container.innerHTML = "";
  const history = waterState.history || [];

  if (history.length === 0) {
    container.innerHTML =
      '<p class="text-slate-500 text-xs italic text-center">Sin registros hoy</p>';
    return;
  }

  history.forEach((entry) => {
    const item = document.createElement("div");
    item.className =
      "flex justify-between items-center bg-slate-800/50 p-2 rounded-lg text-xs";
    const color = entry.user === "facu" ? "text-blue-400" : "text-pink-400";
    const icon = entry.user === "facu" ? "🙎🏽‍♂️" : "🙎🏻‍♀️";
    item.innerHTML = `
            <span class="flex items-center gap-2 ${color}">
                <span>${icon}</span>
                <span class="font-bold">${entry.user === "facu" ? "Facu" : "Alma"}</span>
            </span>
            <span class="text-white font-mono">${entry.amount > 0 ? "+" : ""}${entry.amount}ml</span>
            <span class="text-slate-500">${entry.time}</span>
        `;
    container.appendChild(item);
  });
}

function saveWaterState() {
  localStorage.setItem("water_tracker_state", JSON.stringify(waterState));
}

function resetDay(user) {
  // Reset water for this user
  waterState[user] = 0;

  // Also clear history entries for this user
  if (waterState.history) {
    waterState.history = waterState.history.filter(
      (entry) => entry.user !== user,
    );
  }

  saveWaterState();
  renderAquaFlow();
  renderWaterHistory();

  // Show friendly toast instead of browser alert
  const userName = user === "facu" ? "Facu" : "Alma";
  const iconColor = user === "facu" ? "text-blue-400" : "text-pink-400";
  showToast("rotate-ccw", iconColor, `Consumo de ${userName} reiniciado`);
}

// Animations
function animateStream(user) {
  const stream = document.getElementById(`water-stream-${user}`);
  const bottle = document.getElementById(`bottle-container-${user}`);
  if (!stream || !bottle) return;

  // Approx height logic
  const goal = waterState[`${user}Goal`] || 2500;
  const current = waterState[user] || 0;
  const percent = Math.min(1, current / goal);

  const waterHeightPx = bottle.offsetHeight * percent;
  const dropDistance = bottle.offsetHeight - waterHeightPx + 15;

  stream.style.height = `${dropDistance}px`;
  stream.classList.add("active");

  setTimeout(() => {
    stream.classList.remove("active");
    stream.style.height = "0";
  }, 600);
}

function animateShake(user) {
  const b = document.getElementById(`bottle-container-${user}`);
  if (b) {
    b.classList.remove("shaking");
    void b.offsetWidth; // trigger reflow
    b.classList.add("shaking");
  }
}

function startBubbleEngine(user) {
  const group = document.getElementById(`bubbles-group-${user}`);
  if (!group) return;

  setInterval(
    () => {
      // Only if water exists
      if ((waterState[user] || 0) > 0) {
        const bubble = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
        const x = Math.random() * 100 + 40;
        const r = Math.random() * 5 + 2;
        const startY = 600;

        bubble.setAttribute("cx", x);
        bubble.setAttribute("cy", startY);
        bubble.setAttribute("r", r);
        bubble.classList.add("svg-bubble");

        group.appendChild(bubble);
        setTimeout(() => bubble.remove(), 4000);
      }
    },
    1500 + Math.random() * 1000,
  ); // Randomize
}

function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Simple confetti
  let particles = [];
  const colors = ["#0ea5e9", "#ec4899", "#fcd34d"];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 0.5) * 15 - 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100,
    });
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach((p) => {
      if (p.life > 0) {
        active = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    if (active) requestAnimationFrame(tick);
  }
  tick();
}

// --- PROFILE MODAL FUNCTIONS ---
function openProfileModal() {
  document.getElementById("profile-weight-facu").value =
    userProfile.facu.weight;
  document.getElementById("profile-weight-alma").value =
    userProfile.alma.weight;
  document.getElementById("profile-height-facu").value =
    userProfile.facu.height;
  document.getElementById("profile-height-alma").value =
    userProfile.alma.height;
  document.getElementById("profile-age-facu").value = userProfile.facu.age;
  document.getElementById("profile-age-alma").value = userProfile.alma.age;

  const modal = document.getElementById("profile-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.querySelector("div").classList.remove("scale-95");
  }, 10);

  lucide.createIcons();
}

function closeProfileModal() {
  const modal = document.getElementById("profile-modal");
  modal.classList.add("opacity-0");
  modal.querySelector("div").classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300);
}

function saveProfile() {
  const wFacu = document.getElementById("profile-weight-facu").value;
  const wAlma = document.getElementById("profile-weight-alma").value;
  const hFacu = document.getElementById("profile-height-facu").value;
  const hAlma = document.getElementById("profile-height-alma").value;
  const aFacu = document.getElementById("profile-age-facu").value;
  const aAlma = document.getElementById("profile-age-alma").value;

  if (wFacu) userProfile.facu.weight = parseInt(wFacu);
  if (wAlma) userProfile.alma.weight = parseInt(wAlma);
  if (hFacu) userProfile.facu.height = parseInt(hFacu);
  if (hAlma) userProfile.alma.height = parseInt(hAlma);
  if (aFacu) userProfile.facu.age = parseInt(aFacu);
  if (aAlma) userProfile.alma.age = parseInt(aAlma);

  localStorage.setItem("gymUserProfile", JSON.stringify(userProfile));

  // Recalculate water goals based on new profile
  waterState.facuGoal = calculateSmartWaterGoal("facu");
  waterState.almaGoal = calculateSmartWaterGoal("alma");
  saveWaterState();

  renderAquaFlow();
  closeProfileModal();
  showToast(
    "user-cog",
    "text-violet-400",
    "Perfil actualizado - metas de agua recalculadas",
  );
}

// --- ADVANCED STATS LOGIC ---
function renderAdvancedStats() {
  const now = new Date();

  // 1. Weekly Progress (Mon-Sun) - KEPT AS FREQUENCY (Goal: Facu 5, Alma 3)
  const day = now.getDay(); // 0 (Sun) - 6 (Sat)
  const diff = now.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  const monday = new Date(now.setDate(diff));

  let almaWeekCount = 0;
  let facuWeekCount = 0;

  // Iterate 7 days from Monday
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const k = getDateKey(d);
    if (trainingHistory[k]) {
      if (trainingHistory[k].alma) almaWeekCount++;
      if (trainingHistory[k].facu) facuWeekCount++;
    }
  }

  // Update Week UI
  const weekAlmaEl = document.getElementById("week-alma-current");
  const weekFacuEl = document.getElementById("week-facu-current");
  if (weekAlmaEl) weekAlmaEl.textContent = almaWeekCount;
  if (weekFacuEl) weekFacuEl.textContent = facuWeekCount;

  const almaPct = Math.min(100, (almaWeekCount / 3) * 100);
  const facuPct = Math.min(100, (facuWeekCount / 5) * 100);

  const weekAlmaBar = document.getElementById("week-alma-bar");
  const weekFacuBar = document.getElementById("week-facu-bar");
  if (weekAlmaBar) weekAlmaBar.style.width = `${almaPct}%`;
  if (weekFacuBar) weekFacuBar.style.width = `${facuPct}%`;

  // Badge status
  const weekBadge = document.getElementById("week-status-badge");
  if (weekBadge) {
    if (almaWeekCount >= 3 && facuWeekCount >= 5) {
      weekBadge.textContent = "¡Objetivo Cumplido!";
      weekBadge.className =
        "px-2 py-1 rounded-md bg-emerald-500/20 text-xs font-bold text-emerald-400 border border-emerald-500/50";
    } else {
      weekBadge.textContent = "En Progreso";
      weekBadge.className =
        "px-2 py-1 rounded-md bg-slate-800 text-xs font-bold text-slate-500 border border-slate-700";
    }
  }

  // 2. Month & Year Totals - VOLUME BASED (Kg)
  let monthVolume = 0;
  let yearVolume = 0; // In Tonnes likely, or High Kg
  let totalAlmaYearVol = 0;
  let totalFacuYearVol = 0;

  const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const currentYearKey = `${now.getFullYear()}`;
  const AVG_REPS = 10; // Placeholder for volume calc

  Object.keys(trainingHistory).forEach((key) => {
    // Check if entry belongs to current month/year
    const isMonth = key.startsWith(currentMonthKey);
    const isYear = key.startsWith(currentYearKey);

    if (!isYear) return; // optimization: stats are only for this year currently

    const dayWeights = trainingHistory[key].weights || {};

    // Sum volume for this day
    let dayVolAlma = 0;
    let dayVolFacu = 0;

    Object.values(dayWeights).forEach((val) => {
      // val might be string or number? currently stored as string from input
      /* 
           Structure check: setWeights[key] = {facu: '20', alma: '10'} 
           Actually look at how it's stored: trainingHistory[today].weights = { '0-1-0': {facu: '20', alma: '15'} }
           Wait, setWeights structure is flat: key -> {facu: val, alma: val} ? No.
           Let's re-verify setWeights structure.
           Code viewed earlier: setWeights[setKey][user] = val. 
           So weights object is { "0-0-0": {facu: "10", alma: "5"}, "0-0-1": ... }
        */
      if (val.facu) dayVolFacu += (parseFloat(val.facu) || 0) * AVG_REPS;
      if (val.alma) dayVolAlma += (parseFloat(val.alma) || 0) * AVG_REPS;
    });

    // Add to aggregators
    if (isMonth) {
      monthVolume += dayVolAlma + dayVolFacu;
    }
    if (isYear) {
      yearVolume += dayVolAlma + dayVolFacu;
      totalAlmaYearVol += dayVolAlma;
      totalFacuYearVol += dayVolFacu;
    }
  });

  // Render Volume Stats
  // Month: Kg
  const monthEl = document.getElementById("month-volume");
  if (monthEl) monthEl.textContent = monthVolume.toLocaleString("es-AR");

  // Year: Tonnes (divide by 1000)
  const yearEl = document.getElementById("year-volume");
  if (yearEl) yearEl.textContent = (yearVolume / 1000).toFixed(1);

  // Individual Year Totals: Tonnes
  const almaYearEl = document.getElementById("total-alma-volume");
  if (almaYearEl)
    almaYearEl.textContent = (totalAlmaYearVol / 1000).toFixed(1) + " t";

  const facuYearEl = document.getElementById("total-facu-volume");
  if (facuYearEl)
    facuYearEl.textContent = (totalFacuYearVol / 1000).toFixed(1) + " t";
}

// Hook into existing updateStats
const originalUpdateStats = updateStats;
updateStats = function () {
  originalUpdateStats(); // Call original
  renderAdvancedStats(); // Update new stats
  fetchWeather(); // Ensure weather is refreshing
};

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  fetchWeather(); // Get weather immediately
  calculateAndRenderWaterGoal(); // Render water based on stored/default
});
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

  document.getElementById("stat-alma").innerHTML =
    `${almaCount} <span class="text-sm text-slate-500">días</span>`;
  document.getElementById("stat-facu").innerHTML =
    `${facuCount} <span class="text-sm text-slate-500">días</span>`;
  document.getElementById("stat-both").innerHTML =
    `${bothCount} <span class="text-sm text-slate-500">días</span>`;
  document.getElementById("stat-total").innerHTML =
    `${totalDays} <span class="text-sm text-slate-500">días</span>`;
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

// --- SILENT AUDIO FOR BACKGROUND & LOCK SCREEN ---
// 1 second of silence mp3
const SILENT_AUDIO_URI =
  "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//OEAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAAAAAAAAAAAAACCAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA";
let bgAudio = new Audio(SILENT_AUDIO_URI);
bgAudio.loop = true;

function enableBackgroundMode(exerciseName, duration) {
  // Play silent audio to keep background active
  bgAudio
    .play()
    .then(() => {
      logToScreen("🔊 Audio Silencioso ACTIVO (Lock Screen Mode)", "success");
      // Setup Lock Screen Media Controls
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: `Descanso: ${exerciseName}`,
          artist: "GymRutina",
          artwork: [
            { src: "favicon.svg", sizes: "96x96", type: "image/svg+xml" },
            { src: "favicon.svg", sizes: "128x128", type: "image/svg+xml" },
          ],
        });
        navigator.mediaSession.playbackState = "playing";

        // Attempt to show progress bar
        try {
          navigator.mediaSession.setPositionState({
            duration: duration,
            playbackRate: 1,
            position: 0,
          });
        } catch (e) {
          logToScreen("Media Session Position Error: " + e, "error");
        }
      }
    })
    .catch((e) => logToScreen("❌ Audio Silencioso FALLÓ: " + e, "error"));
}

function disableBackgroundMode() {
  bgAudio.pause();
  bgAudio.currentTime = 0;
  if ("mediaSession" in navigator) {
    navigator.mediaSession.playbackState = "paused";
    if (navigator.mediaSession.metadata) {
      navigator.mediaSession.metadata.title = "Rutina Pausada";
    }
  }
}

// --- TIMER FUNCTIONS ---
let wakeLock = null;
let lastNotificationSeconds = null;

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

function showTimer(user, exerciseName, seconds) {
  // 1. Set State for this user
  timerState[user] = {
    endTime: Date.now() + seconds * 1000,
    totalSeconds: seconds,
    currentSeconds: seconds,
    exerciseName: exerciseName,
    minimized: false,
    active: true,
  };

  // 2. Logic to determine display
  // If another user is already Full Screen, minimize them?
  // OR just force this new one to be Full Screen and minimize the other.
  // We'll force this one to Full Screen.

  if (activeFullModalUser && activeFullModalUser !== user) {
    // Minimize the currently active user
    timerState[activeFullModalUser].minimized = true;
  }

  activeFullModalUser = user;
  timerState[user].minimized = false;
  savedScrollY = window.scrollY; // Update scroll position

  // 3. Render and Start
  renderTimerUI();
  startGlobalTimerIfNeeded();

  // 4. System controls
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.width = "100%";
  document.body.style.touchAction = "none";

  // Audio & Lock
  requestWakeLock();
  enableBackgroundMode(exerciseName, seconds);
}

function startGlobalTimerIfNeeded() {
  if (globalTimerInterval) return;

  globalTimerInterval = setInterval(() => {
    const now = Date.now();
    let anyoneActive = false;

    ["facu", "alma"].forEach((user) => {
      const state = timerState[user];
      if (!state.active) return;
      anyoneActive = true;

      const diff = state.endTime - now;
      state.currentSeconds = Math.ceil(diff / 1000);

      if (state.currentSeconds <= 0) {
        state.currentSeconds = 0;
        // Timer Finished Logic
        handleTimerComplete(user);
      }
    });

    if (!anyoneActive) {
      clearInterval(globalTimerInterval);
      globalTimerInterval = null;
      releaseWakeLock();
      disableBackgroundMode();
    } else {
      updateTimerDisplay(); // Updates values only

      // Update Lock Screen Media Player position (live countdown)
      if (
        "mediaSession" in navigator &&
        activeFullModalUser &&
        timerState[activeFullModalUser].active
      ) {
        const state = timerState[activeFullModalUser];
        // Ensure strictly positive for setPositionState validation
        if (
          state.currentSeconds >= 0 &&
          state.totalSeconds >= state.currentSeconds
        ) {
          try {
            navigator.mediaSession.setPositionState({
              duration: state.totalSeconds,
              playbackRate: 1,
              position: state.totalSeconds - state.currentSeconds,
            });
          } catch (e) {
            // Ignore position errors
          }
        }
      }

      // Notification Logic checks
      handleNotifications();
    }
  }, 200);
}

function handleTimerComplete(user) {
  const state = timerState[user];
  state.active = false;

  // Sound
  playTimerEnd();

  // Notifications
  if (Notification.permission === "granted") {
    const title = "¡Tiempo Terminado!";
    const options = {
      body: `Descanso finalizado para ${state.exerciseName} (${user === "facu" ? "Facu" : "Alma"})`,
      icon: "favicon.svg",
      vibrate: [200, 100, 200, 100, 200],
      tag: `timer-end-${user}`,
      renotify: true,
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then((reg) =>
        reg.showNotification(title, options),
      );
    } else {
      new Notification(title, options);
    }
  }

  // Auto-hide UI after delay
  // If this user was Full Screen, hide modal.
  // If this user was Minimized, remove bubble.
  setTimeout(() => {
    hideTimer(user);
  }, 1500);

  // Force UI update immediately to show 0:00
  renderTimerUI();
}

function handleNotifications() {
  // Simple logic: If in backgound, update notification for the user with LEAST time remaining?
  // Or just update the one that is Full Screen (most relevant).
  if (
    document.visibilityState === "hidden" &&
    Notification.permission === "granted"
  ) {
    // Find the most urgent timer
    let urgentUser = null;
    let minTime = Infinity;

    ["facu", "alma"].forEach((user) => {
      if (
        timerState[user].active &&
        timerState[user].currentSeconds < minTime
      ) {
        minTime = timerState[user].currentSeconds;
        urgentUser = user;
      }
    });

    if (urgentUser) {
      const state = timerState[urgentUser];
      if (state.currentSeconds !== lastNotificationSeconds) {
        lastNotificationSeconds = state.currentSeconds;
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
          navigator.serviceWorker.ready.then((reg) => {
            const mins = Math.floor(state.currentSeconds / 60);
            const secs = state.currentSeconds % 60;
            reg.showNotification(
              `Descansando (${urgentUser === "facu" ? "Facu" : "Alma"}): ${mins}:${secs.toString().padStart(2, "0")}`,
              {
                body: state.exerciseName,
                icon: "favicon.svg",
                tag: "timer-progress",
                silent: true,
                renotify: false,
                visibility: "public",
              },
            );
          });
        }
      }
    }
  }
}

function renderTimerUI() {
  const modal = document.getElementById("timer-modal");
  const fullContainer = document.getElementById("timer-full");
  const miniContainer = document.getElementById("mini-timers-container");

  // Clear Mini Container
  miniContainer.innerHTML = "";

  // Check if anyone is active
  const anyActive = timerState.facu.active || timerState.alma.active;

  if (!anyActive) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    return;
  }

  // Show Modal Wrapper
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Render Full Modal?
  if (
    activeFullModalUser &&
    timerState[activeFullModalUser].active &&
    !timerState[activeFullModalUser].minimized
  ) {
    // Show Full Modal
    fullContainer.classList.remove("hidden");
    modal.classList.add("bg-black/80", "backdrop-blur-sm");
    modal.classList.remove("bg-transparent", "pointer-events-none");

    // SETUP FULL MODAL CONTENT
    const user = activeFullModalUser;
    const state = timerState[user];

    // Colors based on user
    const colorClass = user === "facu" ? "text-blue-400" : "text-pink-400";
    const borderClass = user === "facu" ? "border-blue-500" : "border-pink-500";

    // Update static elements of modal if needed (titles, colors)
    // We'll update dynamic values in updateTimerDisplay
    document.getElementById("timer-exercise-name").textContent =
      `${state.exerciseName} (${user === "facu" ? "Facu" : "Alma"})`;

    // Just ensure the container looks right for the user?
    // Optionally trigger a color update or just keep it emerald/neutral.
    // Let's keep existing emerald theme BUT maybe adding a user badge?
  } else {
    // No one in Full Screen (all minimized)
    fullContainer.classList.add("hidden");
    modal.classList.remove("bg-black/80", "backdrop-blur-sm");
    modal.classList.add("bg-transparent", "pointer-events-none");
  }

  // Render Bubbles (for anyone minimized or NOT the active full screen)
  ["facu", "alma"].forEach((user) => {
    const state = timerState[user];
    if (state.active && (state.minimized || user !== activeFullModalUser)) {
      // Render Bubble
      const bubble = createMiniTimerBubble(user, state);
      miniContainer.appendChild(bubble);
    }
  });

  lucide.createIcons();
}

function createMiniTimerBubble(user, state) {
  const div = document.createElement("div");
  const color = user === "facu" ? "blue" : "pink";
  const borderColor = user === "facu" ? "border-blue-500" : "border-pink-500";
  const textColor = user === "facu" ? "text-blue-400" : "text-pink-400";
  const shadowColor =
    user === "facu" ? "shadow-blue-500/30" : "shadow-pink-500/30";

  div.className = `bg-slate-900 border-2 ${borderColor} rounded-2xl p-3 shadow-xl ${shadowColor} cursor-pointer hover:scale-105 transition-all duration-200 pointer-events-auto flex items-center gap-3`;
  div.onclick = () => expandTimer(user);

  div.innerHTML = `
        <div class="relative w-10 h-10">
             <svg class="w-10 h-10 transform -rotate-90">
                <circle cx="20" cy="20" r="16" stroke="#1e293b" stroke-width="3" fill="none" />
                <circle id="mini-ring-${user}" cx="20" cy="20" r="16" stroke="currentColor" stroke-width="3"
                    fill="none" stroke-linecap="round" stroke-dasharray="100.53" stroke-dashoffset="0"
                    class="${textColor} transition-all duration-1000 ease-linear" />
            </svg>
             <div class="absolute inset-0 flex items-center justify-center">
                 <span class="text-[10px] font-bold uppercase text-slate-500">${user === "facu" ? "F" : "A"}</span>
             </div>
        </div>
        <div class="text-left">
            <div id="mini-display-${user}" class="text-xl font-mono font-bold ${textColor} tabular-nums leading-tight">0:00</div>
            <p class="text-[10px] text-slate-500 max-w-[100px] truncate">${state.exerciseName}</p>
        </div>
    `;
  return div;
}

function updateTimerDisplay() {
  if (
    activeFullModalUser &&
    timerState[activeFullModalUser].active &&
    !timerState[activeFullModalUser].minimized
  ) {
    const user = activeFullModalUser;
    const state = timerState[user];

    const display = document.getElementById("timer-display");
    const ring = document.getElementById("timer-ring");
    const secondsLeft = document.getElementById("timer-seconds-left");

    const displaySeconds = Math.max(0, state.currentSeconds);
    const mins = Math.floor(displaySeconds / 60);
    const secs = displaySeconds % 60;
    const timeStr = `${mins}:${secs.toString().padStart(2, "0")}`;

    display.textContent = timeStr;
    secondsLeft.textContent = displaySeconds;

    const circumference = 364.42;
    const progress = Math.max(0, displaySeconds / state.totalSeconds);
    ring.style.strokeDashoffset = circumference * (1 - progress);

    // Low time warning colors
    const timerIcon = document.querySelector("#timer-full .lucide-timer");
    const addBtn = document.getElementById("timer-add-btn");

    if (displaySeconds <= 10) {
      ring.style.stroke = "#ef4444";
      display.className =
        "text-7xl font-mono font-bold text-red-400 mb-6 tabular-nums";

      const modal = document.getElementById("timer-full");
      if (modal) {
        modal.classList.remove("border-slate-700", "shadow-emerald-500/10");
        modal.classList.add("border-red-500", "shadow-red-500/20");
      }

      // Icon Red
      if (timerIcon) {
        timerIcon.classList.remove("text-emerald-400");
        timerIcon.classList.add("text-red-400");
      }

      // Add Button Red
      if (addBtn) {
        addBtn.classList.remove("bg-emerald-600", "hover:bg-emerald-500");
        addBtn.classList.add("bg-red-600", "hover:bg-red-500");
      }
    } else {
      ring.style.stroke = "#10b981";
      display.className =
        "text-7xl font-mono font-bold text-emerald-400 mb-6 tabular-nums";

      const modal = document.getElementById("timer-full");
      if (modal) {
        modal.classList.add("border-slate-700", "shadow-emerald-500/10");
        modal.classList.remove("border-red-500", "shadow-red-500/20");
      }

      // Icon Revert
      if (timerIcon) {
        timerIcon.classList.add("text-emerald-400");
        timerIcon.classList.remove("text-red-400");
      }

      // Add Button Revert
      if (addBtn) {
        addBtn.classList.add("bg-emerald-600", "hover:bg-emerald-500");
        addBtn.classList.remove("bg-red-600", "hover:bg-red-500");
      }
    }
  }

  // Update Minis
  ["facu", "alma"].forEach((user) => {
    const displayMini = document.getElementById(`mini-display-${user}`);
    const ringMini = document.getElementById(`mini-ring-${user}`);
    const container = displayMini?.closest("div.bg-slate-900"); // Get the bubble container

    if (displayMini && ringMini && timerState[user].active) {
      const state = timerState[user];
      const displaySeconds = Math.max(0, state.currentSeconds);
      const mins = Math.floor(displaySeconds / 60);
      const secs = displaySeconds % 60;
      displayMini.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

      const progress = Math.max(0, displaySeconds / state.totalSeconds);
      const circumference = 100.53;
      ringMini.style.strokeDashoffset = circumference * (1 - progress);

      // Color logic for mini
      if (displaySeconds <= 10) {
        ringMini.style.stroke = "#ef4444";
        displayMini.classList.remove("text-blue-400", "text-pink-400");
        displayMini.classList.add("text-red-400");
        if (container) {
          container.classList.add("border-red-500", "shadow-red-500/30");
          container.classList.remove(
            "border-blue-500",
            "shadow-blue-500/30",
            "border-pink-500",
            "shadow-pink-500/30",
          );
        }
      } else {
        // Restore default colors
        const defaultColor = user === "facu" ? "blue" : "pink";
        ringMini.style.stroke = user === "facu" ? "#60a5fa" : "#f472b6"; // tailwind blue-400 / pink-400 hex approx
        // Re-add correct text color
        displayMini.classList.remove("text-red-400");
        displayMini.classList.add(`text-${defaultColor}-400`);

        if (container) {
          container.classList.remove("border-red-500", "shadow-red-500/30");
          container.classList.add(
            `border-${defaultColor}-500`,
            `shadow-${defaultColor}-500/30`,
          );
        }
      }
    }
  });
}

function hideTimer(user) {
  if (user) {
    // Hide specific user
    timerState[user].active = false;

    // Logic: If the user being hidden was the Active Full Screen one...
    if (activeFullModalUser === user) {
      const otherUser = user === "facu" ? "alma" : "facu";

      // Check if other user is active AND NOT minimized
      // If the other user is active but minimized, we should probably keep them minimized
      // unless the user explicitly expands them.

      if (timerState[otherUser].active && !timerState[otherUser].minimized) {
        expandTimer(otherUser);
      } else if (
        timerState[otherUser].active &&
        timerState[otherUser].minimized
      ) {
        // Other user is active but chose to be minimized.
        // We do NOT expand them automatically. We just clear the full screen slot.
        activeFullModalUser = null;
      } else {
        // No one else is active
        activeFullModalUser = null;
      }
    }
  } else {
    // Force Hide ALL (e.g. skip button if we want it to close current)
    if (activeFullModalUser) {
      hideTimer(activeFullModalUser);
      return;
    }
  }

  renderTimerUI();

  // Cleanup if nobody active handled by startGlobalTimerIfNeeded loop,
  // but we should explicit cleanup layout if empty.
  if (!timerState.facu.active && !timerState.alma.active) {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.touchAction = "";
    window.scrollTo(0, savedScrollY);
  }
}

// --- TIMER MINIMIZE/EXPAND FUNCTIONS ---
function minimizeTimer() {
  if (activeFullModalUser) {
    timerState[activeFullModalUser].minimized = true;
    renderTimerUI();

    // Restore body scroll since we are minimized
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.touchAction = "";
    window.scrollTo(0, savedScrollY);
  }
}

function expandTimer(user) {
  if (timerState[user].active) {
    // Restore scroll lock
    savedScrollY = window.scrollY; // Update position

    activeFullModalUser = user;
    timerState[user].minimized = false;
    renderTimerUI();

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = "100%";
    document.body.style.touchAction = "none";
  }
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

// --- AUDIO UNLOCKER ---
let audioCtx = null;

function unlockAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

// Attach unlock to all interactive elements if possible, or just global click once
document.addEventListener("click", unlockAudio, { once: true });
document.addEventListener("touchstart", unlockAudio, { once: true });

function playTimerEnd() {
  // Vibrate if supported
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200, 100, 200]);
  }
  // Play beep sound
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.frequency.value = 880;
    oscillator.type = "sine";
    gainNode.gain.value = 0.5; // Slightly louder
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500); // Longer beep
  } catch (e) {
    console.error("Audio play error", e);
  }
}

// Timer event listeners
// Timer event listeners
document
  .getElementById("confirm-cancel-btn")
  .addEventListener("click", hideConfirmModal);
document.getElementById("confirm-ok-btn").addEventListener("click", () => {
  if (confirmCallback) confirmCallback();
  hideConfirmModal();
});
document
  .getElementById("timer-skip-btn")
  .addEventListener("click", () => hideTimer(activeFullModalUser));
document.getElementById("timer-add-btn").addEventListener("click", () => {
  if (activeFullModalUser && timerState[activeFullModalUser].active) {
    const user = activeFullModalUser;
    const state = timerState[user];

    state.endTime += 30000; // Add 30 seconds
    state.totalSeconds += 30;

    // Force immediate update
    const diff = state.endTime - Date.now();
    state.currentSeconds = Math.ceil(diff / 1000);
    updateTimerDisplay();
  }
});

// Timer minimize/expand event listeners
document
  .getElementById("timer-minimize-btn")
  .addEventListener("click", minimizeTimer);

// --- MUSCLE MAP GENERATOR ---
const getMuscleMapSVG = (primary = [], secondary = []) => {
  const getColor = (muscleId) => {
    if (primary.includes(muscleId)) return "#ef4444"; // Red-500
    if (secondary.includes(muscleId)) return "#eab308"; // Yellow-500
    return "#e2e8f0"; // Slate-200 (Atlas Base Color)
  };

  const strokeColor = "#94a3b8";
  const strokeWidth = "2";

  // SVG Content - Atlas Style
  return `
    <div class="flex gap-2 h-56 w-full justify-center opacity-90 transition-opacity duration-500 hover:opacity-100 py-2">
        <!-- FRONT VIEW -->
        <svg viewBox="0 0 400 780" class="h-full w-auto drop-shadow-md">
             <!-- Head -->
            <ellipse cx="200" cy="60" rx="35" ry="45" fill="#f1f5f9" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <rect x="185" y="100" width="30" height="25" fill="#f1f5f9" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Traps -->
            <path d="M185,105 L150,115 L140,125 L185,120 Z" fill="${getColor("traps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M215,105 L250,115 L260,125 L215,120 Z" fill="${getColor("traps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Shoulders -->
            <path d="M140,125 Q115,130 110,160 Q120,185 140,170 Q150,150 140,125 Z" fill="${getColor("shoulders")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M260,125 Q285,130 290,160 Q280,185 260,170 Q250,150 260,125 Z" fill="${getColor("shoulders")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

             <!-- Chest -->
            <path d="M200,130 L160,130 Q140,135 140,160 Q160,190 200,190 L200,130 Z" fill="${getColor("chest")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M200,130 L240,130 Q260,135 260,160 Q240,190 200,190 L200,130 Z" fill="${getColor("chest")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Abs -->
            <path d="M170,195 H230 V280 Q200,290 170,280 Z" fill="${getColor("abs")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            
            <!-- Obliques -->
            <path d="M170,195 L155,200 Q150,240 160,270 L170,280 V195 Z" fill="${getColor("obliques")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M230,195 L245,200 Q250,240 240,270 L230,280 V195 Z" fill="${getColor("obliques")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Biceps -->
            <path d="M110,160 Q100,190 110,210 Q130,205 140,170 Z" fill="${getColor("biceps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M290,160 Q300,190 290,210 Q270,205 260,170 Z" fill="${getColor("biceps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Forearms -->
            <path d="M110,210 Q95,250 100,290 L120,285 Q125,240 130,210 Z" fill="${getColor("forearms")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M290,210 Q305,250 300,290 L280,285 Q275,240 270,210 Z" fill="${getColor("forearms")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Quads -->
            <path d="M160,285 Q140,350 150,450 L195,450 Q195,350 195,290 Z" fill="${getColor("quads")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M240,285 Q260,350 250,450 L205,450 Q205,350 205,290 Z" fill="${getColor("quads")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            
            <!-- Tibials (Using Calves color for completeness) -->
             <path d="M155,480 Q150,530 160,580 L175,580 Q170,530 170,480 Z" fill="${getColor("calves")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
             <path d="M245,480 Q250,530 240,580 L225,580 Q230,530 230,480 Z" fill="${getColor("calves")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

             <!-- Knees -->
             <circle cx="172" cy="465" r="12" fill="#e2e8f0" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
             <circle cx="228" cy="465" r="12" fill="#e2e8f0" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
        </svg>

        <!-- BACK VIEW -->
        <svg viewBox="0 0 400 780" class="h-full w-auto drop-shadow-md">
            <!-- Head -->
            <ellipse cx="200" cy="60" rx="35" ry="45" fill="#f1f5f9" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <rect x="185" y="100" width="30" height="20" fill="#f1f5f9" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Traps (Back) -->
            <path d="M200,100 L160,120 L180,180 L200,230 L220,180 L240,120 Z" fill="${getColor("traps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Shoulders (Rear) -->
            <path d="M140,125 Q115,135 110,160 L130,170 Q145,150 160,120 Z" fill="${getColor("shoulders")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M260,125 Q285,135 290,160 L270,170 Q255,150 240,120 Z" fill="${getColor("shoulders")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Lats -->
            <path d="M180,180 L150,200 L160,260 L200,280 L240,260 L250,200 L220,180 L200,230 Z" fill="${getColor("lats")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Lower Back -->
            <path d="M185,280 V300 Q185,310 200,310 Q215,310 215,300 V280 Z" fill="${getColor("lower_back")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Triceps -->
            <path d="M110,160 Q100,180 110,210 L130,205 Q135,170 130,170 Z" fill="${getColor("triceps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M290,160 Q300,180 290,210 L270,205 Q265,170 270,170 Z" fill="${getColor("triceps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Forearms (Rear) -->
            <path d="M110,210 Q95,250 100,290 L120,285 Q125,240 130,210 Z" fill="${getColor("forearms")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M290,210 Q305,250 300,290 L280,285 Q275,240 270,210 Z" fill="${getColor("forearms")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

             <!-- Glutes -->
            <path d="M160,280 Q140,300 145,340 Q170,360 200,340 Q230,360 255,340 Q260,300 240,280 Q200,300 160,280 Z" fill="${getColor("glutes")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Hamstrings -->
            <path d="M150,350 Q145,400 155,460 L190,460 Q195,400 190,350 Z" fill="${getColor("hamstrings")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M250,350 Q255,400 245,460 L210,460 Q205,400 210,350 Z" fill="${getColor("hamstrings")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            
            <!-- Popliteal -->
            <rect x="160" y="460" width="30" height="15" fill="#f1f5f9" stroke="none" />
            <rect x="210" y="460" width="30" height="15" fill="#f1f5f9" stroke="none" />

            <!-- Calves -->
            <path d="M155,475 Q140,500 160,560 L185,550 Q195,500 185,475 Z" fill="${getColor("calves")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M245,475 Q260,500 240,560 L215,550 Q205,500 215,475 Z" fill="${getColor("calves")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
        </svg>
    </div>
  `;
};

// --- INIT & RENDER FUNCTIONS ---

// --- STATE (Weights) ---
let setWeights = JSON.parse(localStorage.getItem("gymRoutineWeights")) || {};

function init() {
  // Set Date (Legacy removed)

  // Initialize Gamification / Streak Display Immediately
  if (typeof updateGamificationUI === "function") {
    updateGamificationUI();
  }

  // Initialize AquaFlow
  if (typeof initAquaFlow === "function") {
    initAquaFlow();
  }

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
  document.getElementById("exercise-count").textContent =
    `${dayData.exercises.length} Ejercicios`;

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
      exercise.muscles.secondary,
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

      // Dynamic button colors and Weight Inputs
      const weightFacu =
        setWeights[setKey] && setWeights[setKey].facu
          ? setWeights[setKey].facu
          : "";
      const weightAlma =
        setWeights[setKey] && setWeights[setKey].alma
          ? setWeights[setKey].alma
          : "";

      setButtonsHTML += `
          <div class="flex flex-col items-center gap-1.5 bg-slate-950/30 p-2 rounded-xl border border-slate-800/50">
              <span class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Set ${
                s + 1
              }</span>
              <div class="flex gap-3">
                  <!-- Facu Column -->
                  <div class="flex flex-col items-center gap-1">
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
                      <input type="number" 
                             value="${weightFacu}" 
                             placeholder="kg" 
                             data-set-key="${setKey}" 
                             data-user="facu"
                             class="weight-input w-10 bg-transparent text-center text-[10px] text-slate-300 border-b border-slate-700 focus:border-blue-500 outline-none p-0.5 placeholder:text-slate-700"
                             onclick="event.stopPropagation()">
                  </div>
                  
                  <!-- Alma Column -->
                  <div class="flex flex-col items-center gap-1">
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
                      <input type="number" 
                             value="${weightAlma}" 
                             placeholder="kg" 
                             data-set-key="${setKey}" 
                             data-user="alma"
                             class="weight-input w-10 bg-transparent text-center text-[10px] text-slate-300 border-b border-slate-700 focus:border-pink-500 outline-none p-0.5 placeholder:text-slate-700"
                             onclick="event.stopPropagation()">
                  </div>
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
                                    <h3 class="font-bold text-lg transition-all duration-300 flex-1 ${
                                      isExerciseCompleted
                                        ? "text-slate-500 line-through decoration-slate-600 decoration-2"
                                        : "text-slate-100 group-hover:text-emerald-300"
                                    }">
                                        ${exercise.name}
                                    </h3>
                                    <!-- History Button -->
                                    <button onclick="event.stopPropagation(); showExerciseHistory('${exercise.name}')"
                                        class="p-2 rounded-full hover:bg-slate-800 text-slate-500 hover:text-blue-400 transition-colors"
                                        title="Ver Historial">
                                        <i data-lucide="trending-up" class="w-4 h-4"></i>
                                    </button>
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
                                            "",
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
                    <div onclick='openMuscleMapModal(${JSON.stringify(exercise.muscles.primary)}, ${JSON.stringify(exercise.muscles.secondary)})' 
                        class="w-full md:w-32 bg-slate-950/50 border-t md:border-t-0 md:border-l border-slate-800 p-2 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:bg-slate-900 group/map ${
                          isExerciseCompleted ? "opacity-50 grayscale" : ""
                        }">
                        <span class="text-[10px] uppercase text-slate-500 font-bold mb-1 tracking-wider text-center group-hover/map:text-emerald-400 transition-colors">Impacto Muscular <i data-lucide="zoom-in" class="inline w-3 h-3 ml-1"></i></span>
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
          },
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

      // Request Notification if needed
      if ("Notification" in window && Notification.permission !== "granted") {
        Notification.requestPermission();
      }

      // Handle Logic
      const currentState = completedSets[setKey][user];

      if (!currentState) {
        // TURN ON
        completedSets[setKey][user] = true;
        // Sólo mostrar timer si se activa
        showTimer(user, exerciseName, restTime);
      } else {
        // TURN OFF
        completedSets[setKey][user] = false;
      }

      localStorage.setItem("gymRoutineSets", JSON.stringify(completedSets));
      renderContent();
    });
  });

  // Handle Weight Inputs
  document.querySelectorAll(".weight-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const setKey = e.target.dataset.setKey;
      const user = e.target.dataset.user;
      const val = e.target.value;

      if (!setWeights[setKey]) {
        setWeights[setKey] = { facu: "", alma: "" };
      }
      setWeights[setKey][user] = val;

      localStorage.setItem("gymRoutineWeights", JSON.stringify(setWeights));
    });

    // Auto-select on focus
    input.addEventListener("focus", (e) => e.target.select());
    // Stop propagation of clicks to prevent triggering exercise completion or other bubbling
    input.addEventListener("click", (e) => e.stopPropagation());
  });

  // Re-init icons for newly added elements
  lucide.createIcons();
}

// --- VISIBILITY HANDLER ---
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // Resume audio context if suspended
    unlockAudio();

    // Check if any timer expired while in background
    let needsUpdate = false;
    const now = Date.now();

    ["facu", "alma"].forEach((user) => {
      const state = timerState[user];
      if (state.active) {
        const diff = state.endTime - now;
        if (diff <= -1000) {
          // Expired significantly ago
          state.currentSeconds = 0;
          handleTimerComplete(user);
          needsUpdate = true;
        } else {
          state.currentSeconds = Math.ceil(diff / 1000);
          needsUpdate = true;
        }
      }
    });

    if (needsUpdate) {
      updateTimerDisplay();
    }
  } else if (document.visibilityState === "hidden") {
    // Immediate notification update
    handleNotifications();
  }
});

// --- SERVICE WORKER REGISTRATION WITH AUTO-UPDATE ---
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    // Limpiar todos los cachés viejos automáticamente
    if ("caches" in window) {
      const cacheNames = await caches.keys();
      const currentCacheVersion = "gym-rutina-v2";
      for (const cacheName of cacheNames) {
        if (cacheName !== currentCacheVersion) {
          console.log("Limpiando caché viejo:", cacheName);
          await caches.delete(cacheName);
        }
      }
    }

    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        console.log("ServiceWorker registered with scope:", registration.scope);

        // Forzar verificación de actualizaciones
        registration.update();

        // Verificar actualizaciones automáticamente
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          console.log("Nueva versión del Service Worker encontrada...");

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // Hay una nueva versión lista, recargar automáticamente
              console.log("Nueva versión instalada, recargando...");
              window.location.reload();
            }
          });
        });
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed:", error);
      });

    // Si el Service Worker toma control, recargar para aplicar cambios
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        console.log("Service Worker actualizado, recargando página...");
        window.location.reload();
      }
    });
  });
}

// Debug
// Debug Click Handler (Global)
function handleTestClick() {
  logToScreen("--- DIAGNÓSTICO INICIADO ---");
  logToScreen(`🔒 Estado Crudo: '${Notification.permission}'`);
  logToScreen(`🔐 Seguro (HTTPS): ${window.isSecureContext}`);
  logToScreen(`📱 ServiceWorker Reg: ${!!navigator.serviceWorker.controller}`);

  if (Notification.permission === "denied") {
    logToScreen("❌ El navegador reporta 'DENIED'.", "error");
    logToScreen(
      "⚠️ Esto significa que el BLOQUEO es del SITIO WEB, no del celular.",
      "error",
    );
    showPermissionModal();
  } else if (Notification.permission !== "granted") {
    logToScreen("⚠️ Permisos 'default'. Solicitando...", "info");
    Notification.requestPermission().then((res) => {
      logToScreen(`📝 Respuesta solicitud: '${res}'`);
      if (res === "granted") {
        logToScreen("✅ Permiso ACEPTADO.", "success");
        sendTestNotif();
      } else {
        logToScreen("❌ Solicitud Rechazada/Ignorada.", "error");
        showPermissionModal();
      }
    });
  } else {
    logToScreen("✅ Permisos OK. Enviando test...", "success");
    sendTestNotif();
  }
}

// Ensure function is global
window.handleTestClick = handleTestClick;

function sendTestNotif() {
  logToScreen("Iniciando Test de Notificación...", "info");

  if (Notification.permission !== "granted") {
    logToScreen("❌ Permiso NO concedido: " + Notification.permission, "error");
    return;
  }

  if (!navigator.serviceWorker) {
    logToScreen("⚠️ Service Worker no soportado en este navegador.", "error");
    try {
      new Notification("Test Fallback", { body: "Prueba sin SW" });
      logToScreen("✅ Notificación Fallback enviada.", "success");
    } catch (e) {
      logToScreen("❌ Error Fallback: " + e, "error");
    }
    return;
  }

  navigator.serviceWorker
    .getRegistration()
    .then((reg) => {
      if (!reg) {
        logToScreen(
          "❌ Service Worker NO registrado (scope undefined).",
          "error",
        );
        return;
      }

      logToScreen("✅ SW Encontrado. Scope: " + reg.scope, "success");

      reg
        .showNotification("Test Gym SW", {
          body: "Si ves esto, funciona el SW.",
          icon: "favicon.svg",
          vibrate: [100, 50, 100],
          tag: "test-" + Date.now(), // Unique tag to ensure it always fires
        })
        .then(() => {
          logToScreen("🚀 SW: Promesa resuelta (Enviado al OS).", "success");
        })
        .catch((err) => {
          logToScreen("❌ SW Error al enviar: " + err, "error");
        });
    })
    .catch((err) => {
      logToScreen("❌ Error obteniendo registro SW: " + err, "error");
    });
}

// --- PERMISSION MODAL ---
function showPermissionModal() {
  const modal = document.getElementById("permission-modal");
  if (modal) {
    modal.classList.remove("hidden");
    // Animation trigger
    requestAnimationFrame(() => {
      modal.classList.remove("opacity-0", "scale-95");
      modal.classList.add("opacity-100", "scale-100");
    });
    lucide.createIcons();
  }
}

function closePermissionModal() {
  const modal = document.getElementById("permission-modal");
  if (modal) {
    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-95");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }
}

function switchPermTab(tabName) {
  const tabs = ["android-chrome", "android-app", "ios"];

  tabs.forEach((t) => {
    const content = document.getElementById(`perm-content-${t}`);
    const btn = document.getElementById(`perm-tab-${t}`);

    if (t === tabName) {
      if (content) content.classList.remove("hidden");
      if (btn) {
        btn.classList.remove("text-slate-400", "hover:bg-slate-700/50");
        btn.classList.add("bg-indigo-500", "text-white", "shadow-sm");
      }
    } else {
      if (content) content.classList.add("hidden");
      if (btn) {
        btn.classList.add("text-slate-400", "hover:bg-slate-700/50");
        btn.classList.remove("bg-indigo-500", "text-white", "shadow-sm");
      }
    }
  });
}

// Make functions global
window.closePermissionModal = closePermissionModal;
window.switchPermTab = switchPermTab;

// --- DEBUG CONSOLE LGOIC ---
function logToScreen(msg, type = "info") {
  const debugContent = document.getElementById("debug-content");
  if (!debugContent) return;

  const entry = document.createElement("div");
  const time = new Date().toLocaleTimeString();
  entry.textContent = `[${time}] ${msg}`;

  if (type === "error") entry.className = "text-red-400";
  else if (type === "success") entry.className = "text-emerald-400";
  else entry.className = "text-slate-300";

  debugContent.prepend(entry); // Newest top
}

function toggleDebug() {
  const consoleEl = document.getElementById("debug-console");
  if (consoleEl) consoleEl.classList.toggle("hidden");
}

// Override console
const originalLog = console.log;
const originalError = console.error;

console.log = function (...args) {
  originalLog.apply(console, args);
  logToScreen(args.join(" "));
};

console.error = function (...args) {
  originalError.apply(console, args);
  logToScreen(args.join(" "), "error");
};

// Make global
window.toggleDebug = toggleDebug;
window.logToScreen = logToScreen;

// Log startup
setTimeout(
  () => logToScreen("🚀 Sistema v2.1 Cargado. Listo para tests.", "success"),
  500,
);

// --- EXPORT DATA ---
const exportBtn = document.getElementById("export-data-btn");
if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    const dataStr = JSON.stringify(
      {
        gymRoutineSets: JSON.parse(localStorage.getItem("gymRoutineSets")),
        gymRoutineWeights: JSON.parse(
          localStorage.getItem("gymRoutineWeights"),
        ),
        gymRoutineHistory: JSON.parse(
          localStorage.getItem("gymRoutineHistory"),
        ),
      },
      null,
      2,
    );
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `backup_gym_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
  });
}

// --- PLATE CALCULATOR ---
function openCalculatorModal() {
  savedScrollY = window.scrollY; // Capture current scroll position
  const modal = document.getElementById("calculator-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Robust Mobile Scroll Lock
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.width = "100%";
  document.body.classList.add("overflow-hidden");

  document.getElementById("calc-weight-input").focus();
}

function closeCalculatorModal() {
  const modal = document.getElementById("calculator-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // Release Scroll Lock & Restore Position
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.classList.remove("overflow-hidden");
  window.scrollTo(0, savedScrollY);
}

function calculatePlates(val) {
  const weight = parseFloat(val);
  const input = document.getElementById("calc-weight-input");

  // Update input value if called via button
  if (input.value != weight) input.value = weight;

  const display = document.getElementById("plate-display");
  const text = document.getElementById("plate-text");

  // Reset Display
  display.innerHTML =
    '<div class="h-4 w-full bg-slate-600 absolute z-0 rounded-full"></div><span class="text-slate-600 text-xs font-bold absolute -top-4">LADO ÚNICO</span>'; // Keep bar
  text.textContent = "Barra vacía (20kg)";

  if (!weight || weight <= 20) {
    if (weight < 20 && weight > 0) text.textContent = "Menos de la barra...";
    return;
  }

  const weightPerSide = (weight - 20) / 2;
  let remaining = weightPerSide;

  const plates = [
    { w: 25, color: "bg-red-600", h: "h-32" }, // Rojo
    { w: 20, color: "bg-blue-600", h: "h-32" }, // Azul
    { w: 15, color: "bg-yellow-500", h: "h-24" }, // Amarillo
    { w: 10, color: "bg-green-600", h: "h-20" }, // Verde
    { w: 5, color: "bg-white", h: "h-14" }, // Blanco
    { w: 2.5, color: "bg-slate-400", h: "h-10" }, // Gris
    { w: 1.25, color: "bg-slate-600", h: "h-8" }, // Negro chico
  ];

  const needed = [];

  plates.forEach((p) => {
    while (remaining >= p.w) {
      needed.push(p);
      remaining -= p.w;
    }
  });

  // Render Plates
  let html =
    '<div class="h-4 w-full bg-slate-600 absolute z-0 rounded-full"></div><span class="text-slate-600 text-xs font-bold absolute -top-4">LADO ÚNICO</span>'; // Reset again to be safe

  // Center alignment wrapper
  html += '<div class="flex items-center gap-1 z-10">';

  // Bumper/Inside Collar
  html += '<div class="w-2 h-10 bg-slate-400 rounded-sm"></div>';

  needed.forEach((p) => {
    html += `<div class="${p.h} w-4 ${p.color} rounded-sm border-x border-black/20 shadow-sm" title="${p.w}kg"></div>`;
  });

  html += "</div>";

  display.innerHTML = html;

  // Update Text
  const plateText = needed.map((p) => p.w).join(" + ");
  text.innerHTML = `<span class="text-blue-400 font-bold">${weightPerSide}kg</span> por lado: [ ${plateText} ]`;
}

// Global
window.openCalculatorModal = openCalculatorModal;
window.closeCalculatorModal = closeCalculatorModal;
window.calculatePlates = calculatePlates;

// --- 1RM CALCULATOR ---
function calculate1RM() {
  const w = parseFloat(document.getElementById("rm-weight").value) || 0;
  const r = parseFloat(document.getElementById("rm-reps").value) || 0;
  const resultDisplay = document.getElementById("rm-result");

  if (w > 0 && r > 0) {
    // Epley Formula
    const oneRM = Math.round(w * (1 + r / 30));
    resultDisplay.innerHTML = `${oneRM} <span class="text-sm text-emerald-600">kg</span>`;
  } else {
    resultDisplay.innerHTML = `0 <span class="text-sm text-emerald-600">kg</span>`;
  }
}
window.calculate1RM = calculate1RM;

// --- STREAK LOGIC ---
// --- GAMIFICATION SYSTEM ---
function updateGamificationUI() {
  calculateUserStreak("facu", 5);
  calculateUserStreak("alma", 3);

  // Update Header UI
  // We need to inject or update the streak display container
  const container = document.getElementById("streak-display");
  if (container) {
    container.classList.remove("hidden");
    container.classList.add("flex", "gap-4", "justify-start", "flex-wrap"); // Use flex-wrap just in case
    // NOTE: We do NOT overwrite className to avoid breaking HTML structure

    container.innerHTML = `
            <div class="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-blue-500/30 shadow-sm transition-transform active:scale-95 cursor-pointer" onclick="openShopModal('facu')">
                <span class="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Facu</span>
                <div class="flex items-center gap-1">
                    <i data-lucide="flame" class="w-3 h-3 ${gamification.facu.streak > 0 ? "text-orange-500 fill-orange-500" : "text-slate-600"}"></i>
                    <span class="text-xs font-bold text-slate-200">${gamification.facu.streak}</span>
                </div>
                <div class="w-px h-3 bg-slate-600 mx-1"></div>
                <div class="flex items-center gap-1">
                    <i data-lucide="gem" class="w-3 h-3 text-emerald-400"></i>
                    <span class="text-xs font-bold text-slate-200">${gamification.facu.points}</span>
                </div>
                ${gamification.facu.freezes > 0 ? `<div class="flex items-center"><i data-lucide="shield-check" class="w-3 h-3 text-cyan-400 ml-1"></i><span class="text-[10px] text-cyan-400 font-bold ml-0.5">${gamification.facu.freezes}</span></div>` : ""}
            </div>

            <div class="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-pink-500/30 shadow-sm transition-transform active:scale-95 cursor-pointer" onclick="openShopModal('alma')">
                <span class="text-[10px] font-bold text-pink-400 uppercase tracking-wider">Alma</span>
                <div class="flex items-center gap-1">
                    <i data-lucide="flame" class="w-3 h-3 ${gamification.alma.streak > 0 ? "text-orange-500 fill-orange-500" : "text-slate-600"}"></i>
                    <span class="text-xs font-bold text-slate-200">${gamification.alma.streak}</span>
                </div>
                <div class="w-px h-3 bg-slate-600 mx-1"></div>
                <div class="flex items-center gap-1">
                    <i data-lucide="gem" class="w-3 h-3 text-emerald-400"></i>
                    <span class="text-xs font-bold text-slate-200">${gamification.alma.points}</span>
                </div>
                ${gamification.alma.freezes > 0 ? `<div class="flex items-center"><i data-lucide="shield-check" class="w-3 h-3 text-cyan-400 ml-1"></i><span class="text-[10px] text-cyan-400 font-bold ml-0.5">${gamification.alma.freezes}</span></div>` : ""}
            </div>
        `;
    lucide.createIcons();
  }
}

function calculateUserStreak(user, targetDays) {
  const dates = Object.keys(trainingHistory);
  // Group by weeks
  const weeksMap = {};
  const getWeek = (d) => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
  };

  dates.forEach((date) => {
    if (trainingHistory[date][user]) {
      // Fix: Parse manually to avoid UTC timezone shift issues (e.g. 2026-01-19 becoming Jan 18 in Argentina)
      const [y, m, d] = date.split("-").map(Number);
      const dateObj = new Date(y, m - 1, d);
      const w = getWeek(dateObj);
      weeksMap[w] = (weeksMap[w] || 0) + 1;
    }
  });

  let streakDays = 0;
  let stateChanged = false;

  // START FROM THIS WEEK (2026-W04)
  // We treat weeks before this as non-existent for streak purposes
  const START_WEEK = "2026-W04"; // Hardcoded start
  const currentWeekKey = getWeek(new Date());

  // 1. Add days from Current Week (if >= START_WEEK)
  if (currentWeekKey >= START_WEEK) {
    streakDays += weeksMap[currentWeekKey] || 0;
  }

  // If current week is START_WEEK, we are done checking backwards from it.
  if (currentWeekKey <= START_WEEK) {
    gamification[user].streak = streakDays;
    return;
  }

  // 2. Go backwards from previous week
  for (let i = 1; i <= 52; i++) {
    let d = new Date();
    d.setDate(d.getDate() - i * 7);
    const weekKey = getWeek(d);

    // Stop if we went past start date
    if (weekKey < START_WEEK) break;

    const count = weeksMap[weekKey] || 0;
    const isFrozen = gamification[user].frozenWeeks.includes(weekKey);

    // Check compliance
    if (count >= targetDays || isFrozen) {
      streakDays += count;
    } else {
      // Missed this week! Check Freezes available?
      if (gamification[user].freezes > 0) {
        gamification[user].freezes--;
        gamification[user].frozenWeeks.push(weekKey);
        stateChanged = true;
        streakDays += count;
      } else {
        break;
      }
    }

    if (weekKey === START_WEEK) break;
  }

  gamification[user].streak = streakDays;
  if (stateChanged) saveToCloud();
}

function buyFreeze(user) {
  const COST = 500;
  if (gamification[user].points >= COST) {
    gamification[user].points -= COST;
    gamification[user].freezes++;
    saveToCloud();
    updateGamificationUI();
    // Update Shop UI if open
    openShopModal(user);
    showToast("shield-check", "text-cyan-400", "¡Protector de Racha comprado!");
  } else {
    showToast("ban", "text-red-400", "Puntos insuficientes (Req: 500)");
  }
}

window.updateGamificationUI = updateGamificationUI;
window.buyFreeze = buyFreeze;
// Call on init
window.updateStreak = updateGamificationUI;

// --- SHOP MODAL ---
function openShopModal(user) {
  const modal = document.getElementById("shop-modal");
  const title = document.getElementById("shop-user-title");
  const btn = document.getElementById("shop-buy-btn");

  const points = gamification[user].points;
  title.textContent = `${user.toUpperCase()} - ${points} GEMAS`;

  btn.onclick = () => buyFreeze(user);

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  lucide.createIcons();
}

function closeShopModal() {
  const modal = document.getElementById("shop-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
window.openShopModal = openShopModal;
window.closeShopModal = closeShopModal;
function closeHistoryDetailsModal() {
  const modal = document.getElementById("history-details-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function showExerciseHistory(exerciseName) {
  const modal = document.getElementById("history-details-modal");
  const title = document.getElementById("hist-modal-title");
  const content = document.getElementById("hist-modal-content");

  title.textContent = exerciseName;
  content.innerHTML =
    '<div class="flex justify-center p-4"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div></div>';

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Logic to find history
  setTimeout(() => {
    let historyItems = [];

    // 1. Find the Indices for this exercise to generate keys
    let targetTab = -1;
    let targetExIdx = -1;
    let setsCount = 0;

    routineData.forEach((day, tIdx) => {
      day.exercises.forEach((ex, eIdx) => {
        if (ex.name === exerciseName) {
          targetTab = tIdx;
          targetExIdx = eIdx;
          setsCount = parseInt(ex.sets) || 3;
        }
      });
    });

    if (targetTab === -1) {
      content.innerHTML =
        '<div class="text-center text-slate-500">No se encontró el ejercicio.</div>';
      return;
    }

    // 1.5 CHECK CURRENT SESSION (TODAY/NOW)
    let todayHasData = false;
    let todayFacuWeights = [];
    let todayAlmaWeights = [];
    for (let s = 0; s < setsCount; s++) {
      const key = `${targetTab}-${targetExIdx}-${s}`;
      const w = setWeights[key];
      if (w) {
        if (w.facu) {
          todayFacuWeights.push(w.facu);
          todayHasData = true;
        }
        if (w.alma) {
          todayAlmaWeights.push(w.alma);
          todayHasData = true;
        }
      }
    }

    if (todayHasData) {
      historyItems.push({
        date: "Hoy (Progreso)",
        facu: todayFacuWeights.join(" - "),
        alma: todayAlmaWeights.join(" - "),
        isToday: true, // Optional flag for styling
      });
    }

    // 2. Scan History
    // Sort dates descending
    const dates = Object.keys(trainingHistory).sort(
      (a, b) => new Date(b) - new Date(a),
    );

    dates.forEach((date) => {
      const dayRecord = trainingHistory[date];
      if (!dayRecord || !dayRecord.weights) return;

      // Check if we have data for this exercise
      let hasData = false;
      let facuWeights = [];
      let almaWeights = [];

      for (let s = 0; s < setsCount; s++) {
        const key = `${targetTab}-${targetExIdx}-${s}`;
        const w = dayRecord.weights[key];
        if (w) {
          if (w.facu) {
            facuWeights.push(w.facu);
            hasData = true;
          }
          if (w.alma) {
            almaWeights.push(w.alma);
            hasData = true;
          }
        }
      }

      if (hasData) {
        // Format Date
        // Fix: Parse manually to avoid timezone shift
        const [y, m, d] = date.split("-").map(Number);
        const dateObj = new Date(y, m - 1, d);

        const dateStr = dateObj.toLocaleDateString("es-AR", {
          day: "numeric",
          month: "short",
        });

        historyItems.push({
          date: dateStr,
          facu: facuWeights.join(" - "),
          alma: almaWeights.join(" - "),
        });
      }
    });

    // 3. Render
    if (historyItems.length === 0) {
      content.innerHTML =
        '<div class="text-center text-slate-500 py-8">No hay registros de peso anteriores para este ejercicio.</div>';
    } else {
      let html = `<div class="space-y-3">`; // Add container with spacing
      historyItems.forEach((item) => {
        // Highlight "Today" item
        const borderClass = item.isToday
          ? "border-emerald-500/50 bg-emerald-900/10"
          : "border-slate-800 bg-slate-950/50";
        const dateColor = item.isToday ? "text-emerald-400" : "text-slate-400";

        html += `
                <div class="${borderClass} p-4 rounded-xl border flex items-center justify-between transition-all">
                    <div class="${dateColor} font-bold text-sm w-20">${item.date}</div>
                    <div class="flex-1 px-2 border-l border-slate-700 ml-2 grid grid-cols-2 gap-2">
                        <div class="flex flex-col">
                            <span class="text-[10px] text-blue-500 font-bold uppercase">Facu</span>
                            <span class="text-slate-200 font-mono text-sm">${item.facu || "-"}</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[10px] text-pink-500 font-bold uppercase">Alma</span>
                            <span class="text-slate-200 font-mono text-sm">${item.alma || "-"}</span>
                        </div>
                    </div>
                </div>
            `;
      });
      html += `</div>`;
      content.innerHTML = html;
    }
  }, 100); // Small delay for rendering
}

// Global
window.closeHistoryDetailsModal = closeHistoryDetailsModal;
window.showExerciseHistory = showExerciseHistory;

// --- MUSCLE MAP MODAL ---
function openMuscleMapModal(primary, secondary) {
  const modal = document.getElementById("muscle-map-modal");
  const container = document.getElementById("muscle-map-large-container");

  if (!modal || !container) return;

  // Fix Mobile Scrolling Clipping:
  // Remove vertical centering on mobile so tall content starts at top and flows down.
  // Keep centering on desktop where it fits side-by-side.
  container.classList.remove("items-center");
  container.classList.add("items-start", "md:items-center");

  // Reuse the SVG generation Logic
  const svgHTML = getMuscleMapSVG(primary, secondary);

  // Inject
  container.innerHTML = svgHTML;

  // Tweak styles for full size inside modal
  // We need to target the container div returned by getMuscleMapSVG
  const wrapper = container.firstElementChild;
  if (wrapper) {
    // Remove the restrictive height classes from the small view
    wrapper.classList.remove("h-56", "gap-2", "py-2");

    // Add classes for the large view: Responsive Layout
    // Mobile: Flex-col (stacked), nice and wide
    // Desktop: Flex-row (side-by-side), constrained by height
    wrapper.classList.add(
      "flex-col",
      "md:flex-row",
      "gap-6",
      "items-center",
      "justify-center",
      "p-0",
      "w-full",
      "h-auto",
      "md:h-full",
    );

    // Target the SVGs inside to ensure they scale
    const svgs = wrapper.querySelectorAll("svg");
    svgs.forEach((svg) => {
      svg.classList.remove("drop-shadow-md");

      // Responsive constraints
      svg.classList.remove("h-full", "w-auto"); // clean old style
      svg.classList.add(
        "drop-shadow-2xl",
        "w-[85%]", // Mobile: 85% width
        "md:w-auto", // Desktop: Width auto
        "h-auto", // Mobile: Height auto
        "md:h-[95%]", // Desktop: almost full height
      );

      svg.removeAttribute("viewBox");
      svg.setAttribute("viewBox", "0 0 400 780"); // Match the Atlas coordinate system
    });
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeMuscleMapModal() {
  const modal = document.getElementById("muscle-map-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Ensure global scope access
window.openMuscleMapModal = openMuscleMapModal;
window.closeMuscleMapModal = closeMuscleMapModal;

// Init App
// Init App
try {
  init();
} catch (e) {
  console.error("CRITICAL INIT ERROR:", e);
  logToScreen("❌ ERROR CRÍTICO AL INICIAR: " + e.message, "error");
  alert("Error crítico: " + e.message); // Emergency alert
}
