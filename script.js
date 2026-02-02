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
        notes:
          "El rey. Facu: pies ancho de hombros. Alma: un pelín más abierto. Prioricen profundidad. Descanso: 3 min.",
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
        notes:
          "Contracción máxima de glúteo arriba (1 seg). Mentón pegado al pecho. Descanso: 2 min.",
        muscles: { primary: ["glutes"], secondary: ["hamstrings"] },
      },
      {
        name: "Prensa de Piernas",
        sets: "3",
        reps: "12-15",
        rir: "RIR 1",
        notes:
          "Enfoque cuádriceps. Pies zona media. Bajar controlado (3 seg). Descanso: 90 seg.",
        muscles: { primary: ["quads"], secondary: ["glutes", "hamstrings"] },
      },
      {
        name: "Sillón de Aductores (Máquina)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 1",
        notes:
          "Facu: Rango medio (no abras todo por el pubis). Alma: Rango completo. Sostengan 1 seg al cerrar. Descanso: 60 seg.",
        muscles: { primary: ["adductors"], secondary: [] },
      },
      {
        name: "Sillón de Cuádriceps (Extensiones)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Bombeo final. Aguanta 1 seg arriba con piernas rectas. Descanso: 60 seg.",
        muscles: { primary: ["quads"], secondary: [] },
      },
      {
        name: "Curl Femoral (Máquina)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Isquios. No despeguen la cadera del asiento. Controlen la bajada. Descanso: 60 seg.",
        muscles: { primary: ["hamstrings"], secondary: ["calves"] },
      },
      {
        name: "Gemelos en Máquina (Pantorrillas)",
        sets: "4",
        reps: "15-20",
        rir: "RIR 0",
        notes: "Talón bien abajo, punta bien arriba. Descanso: 45 seg.",
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
          "Cadera atrás. Rodillas semi-rígidas. La barra baja pegada a las piernas. Descanso: 2 min.",
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
        notes:
          "Empuje seguro. Enfócate en el pecho, no en los hombros. Descanso: 90 seg.",
        muscles: { primary: ["chest", "triceps"], secondary: ["shoulders"] },
      },
      {
        name: "Sillón de Cuádriceps (Leg Ext.)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 0",
        notes: "Aguanta 1 seg arriba. Quema, pero sirve. Descanso: 60 seg.",
        muscles: { primary: ["quads"], secondary: [] },
      },
      {
        name: "Sillón de Aductores (Máquina)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 2",
        notes:
          "Facu: Peso liviano (bombeo), altas repes. ¡Cuida el pubis! Alma: Dale intensidad normal. Descanso: 60 seg.",
        muscles: { primary: ["adductors"], secondary: [] },
      },
      {
        name: "Patada de Glúteo en Máquina",
        sets: "4",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Pecho apoyado. Empuja con el talón. Sin arquear la espalda baja. Descanso: 60 seg.",
        muscles: { primary: ["glutes"], secondary: ["hamstrings"] },
      },
      {
        name: "Face Pull (Polea Alta)",
        sets: "3",
        reps: "15-20",
        rir: "RIR 1",
        notes:
          "Salud de hombros. Cuerda a la frente, codos arriba y atrás. Descanso: 60 seg.",
        muscles: { primary: ["shoulders", "traps"], secondary: [] },
      },
      {
        name: "Copa Tríceps (Mancuerna a 2 manos)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Sentado. Cabeza larga del tríceps. Codos cerrados apuntando al techo. Descanso: 60 seg.",
        muscles: { primary: ["triceps"], secondary: [] },
      },
      {
        name: "Elevación de Rodillas (Silla Capitana)",
        sets: "4",
        reps: "15-20",
        rir: "RIR 0",
        notes:
          "Controla la bajada para proteger la espalda baja. Descanso: 60 seg.",
        muscles: { primary: ["abs"], secondary: ["obliques"] },
      },
      {
        name: "BONUS A ELECCIÓN (Ver abajo)",
        sets: "3",
        reps: "12-15",
        rir: "RIR 0",
        notes:
          "Alma: Curl Manc. Alternado (Bíceps). Facu: Press Inclinado Manc. (Pecho Superior). Descanso: 60 seg.",
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
      const cloudHistory = data.record || {};

      // 1. Extract and Sync Gamification
      if (cloudHistory.gamificationState) {
        // Simple strategy: Cloud wins for gamification state (to prevent infinite point glitches)
        if (
          JSON.stringify(gamification) !==
          JSON.stringify(cloudHistory.gamificationState)
        ) {
          gamification = cloudHistory.gamificationState;
          localStorage.setItem("gymGamification", JSON.stringify(gamification));
          if (typeof updateGamificationUI === "function") {
            updateGamificationUI();
          }
        }
        delete cloudHistory.gamificationState; // Remove so it doesn't pollute history iteration
      }

      // 2. Sync Exercise Weights from cloud
      if (cloudHistory.weightsState) {
        // Merge with local weights (preserve local if newer)
        const localWeights = JSON.parse(
          localStorage.getItem("gymRoutineWeights") || "{}",
        );
        const mergedWeights = { ...cloudHistory.weightsState, ...localWeights };

        // Check if data actually changed before re-rendering to avoid flicker
        if (JSON.stringify(setWeights) !== JSON.stringify(mergedWeights)) {
          setWeights = mergedWeights;
          localStorage.setItem(
            "gymRoutineWeights",
            JSON.stringify(mergedWeights),
          );
          console.log("⚖️ Pesos sincronizados desde la nube");

          // Refresh UI to show loaded weights
          if (typeof renderContent === "function") {
            renderContent();
            lucide.createIcons();
          }
        }
        delete cloudHistory.weightsState;
      }

      // 3. Merge Training History (Preserve local keys that aren't in cloud)
      // This prevents losing today's offline workout if we sync with yesterday's cloud data.
      const mergedHistory = { ...trainingHistory, ...cloudHistory };

      if (JSON.stringify(trainingHistory) !== JSON.stringify(mergedHistory)) {
        trainingHistory = mergedHistory;
        localStorage.setItem(
          "gymTrainingHistory",
          JSON.stringify(trainingHistory),
        );
        console.log("✅ Historial cargado desde la nube");
      }

      // --- SYNC HYDRATION FROM CLOUD TO LOCAL ---
      const todayKey = getDateKey(new Date());
      if (trainingHistory[todayKey] && trainingHistory[todayKey].water) {
        // We found water data for today in cloud
        const cloudWater = trainingHistory[todayKey].water;

        // Merge logic: Trust cloud if it seems valid/newer.
        // FIX: User reported local progress (1500ml) being overwritten by 0 from cloud.
        // To prevent this data loss, we will use a MAX strategy for now.
        // This means we can't "reset" via cloud sync easily, but we won't lose progress.

        let changed = false;
        if (cloudWater.facu !== undefined) {
          const newVal = Math.max(waterState.facu || 0, cloudWater.facu);
          if (newVal !== waterState.facu) {
            waterState.facu = newVal;
            changed = true;
          }
        }
        if (cloudWater.alma !== undefined) {
          const newVal = Math.max(waterState.alma || 0, cloudWater.alma);
          if (newVal !== waterState.alma) {
            waterState.alma = newVal;
            changed = true;
          }
        }

        if (changed) {
          saveWaterState(); // Save to local storage
          if (typeof renderAquaFlow === "function") renderAquaFlow(); // Update UI
          console.log("💧 Hidratación sincronizada desde la nube");
        }
      }
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
  facu: {
    points: 0,
    streak: 0,
    freezes: 0,
    frozenDays: [],
    achievements: [],
    lastReset: 0,
  },
  alma: {
    points: 0,
    streak: 0,
    freezes: 0,
    frozenDays: [],
    achievements: [],
    lastReset: 0,
  },
};

// Ensure structure integrity if updating from older version
["facu", "alma"].forEach((u) => {
  if (!gamification[u])
    gamification[u] = {
      points: 0,
      streak: 0,
      freezes: 0,
      frozenDays: [],
      achievements: [],
      lastReset: 0,
    };
  // Migrar de frozenWeeks a frozenDays si existe
  if (gamification[u].frozenWeeks && !gamification[u].frozenDays) {
    gamification[u].frozenDays = gamification[u].frozenWeeks;
    delete gamification[u].frozenWeeks;
  }
  if (!gamification[u].frozenDays) gamification[u].frozenDays = [];
  if (gamification[u].lastReset === undefined) gamification[u].lastReset = 0;
  if (!gamification[u].achievements) gamification[u].achievements = [];
  if (gamification[u].streak === undefined) gamification[u].streak = 0;
});

// Optimization: Update Render immediately with local data (don't wait for cloud/init)
if (typeof updateGamificationUI === "function") {
  updateGamificationUI();
}

async function saveToCloud() {
  // Check Achievements before saving (to include any new unlocks in this sync)
  // Avoid recursion if this function is called FROM checkAchievements
  // We can pass a flag or just assume checks act on local state which settles.
  // Actually, let's call it here safely.
  try {
    // Only check if function exists (safeguard)
    if (typeof checkAchievements === "function") {
      // We won't await it, just run it.
      // But wait, checkAchievements calls saveToCloud() on unlock.
      // If we call checkAchievements here, we might double-save.
      // Better to NOT call it here, but call it where state changes (addWater, addSet).
    }
  } catch (e) {}

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

  // Also sync exercise weights (setWeights)
  const savedWeights = localStorage.getItem("gymRoutineWeights");
  if (savedWeights) {
    trainingHistory.weightsState = JSON.parse(savedWeights);
  }

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
  // Refresh Gamification UI (Streaks, Points)
  if (typeof updateGamificationUI === "function") {
    updateGamificationUI();
  }

  // Refresh Achievements Logic
  if (typeof checkAchievements === "function") {
    checkAchievements();
  }

  // Refresh Charts/Achievements Views if active
  if (currentView === "stats" && typeof renderCharts === "function")
    renderCharts();
  if (
    currentView === "achievements" &&
    typeof renderAchievements === "function"
  )
    renderAchievements();
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
  const html = document.documentElement; // Tailwind looks here by default
  const icon = document.getElementById("theme-icon");

  if (currentTheme === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
    html.classList.remove("dark"); // Remove from HTML
    if (icon) icon.setAttribute("data-lucide", "sun");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    html.classList.add("dark"); // Add to HTML for Tailwind
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
let scrollPosition = 0;

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const isOpen = !sidebar.classList.contains("-translate-x-full");

  if (isOpen) {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.remove("opacity-100");
    setTimeout(() => overlay.classList.add("hidden"), 300);
    // Unlock body scroll (restore position)
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
  } else {
    // Save scroll position before locking
    scrollPosition = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.add("opacity-100"), 10);
    sidebar.classList.remove("-translate-x-full");
  }
}

function navigateTo(view) {
  currentView = view;

  // Hide all main views
  const viewIds = [
    "routine-view",
    "history-view",
    "view-water",
    "view-stats",
    "view-achievements",
  ];
  viewIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  // Show selected view and trigger render
  if (view === "routine") {
    document.getElementById("routine-view").classList.remove("hidden");
  } else if (view === "history") {
    const historyView = document.getElementById("history-view");
    if (historyView) historyView.classList.remove("hidden");
    renderCalendar();
    updateStats();
  } else if (view === "water") {
    const waterView = document.getElementById("view-water");
    if (waterView) {
      waterView.classList.remove("hidden");
      calculateAndRenderWaterGoal();
    }
  } else if (view === "stats") {
    const statsView = document.getElementById("view-stats");
    if (statsView) {
      statsView.classList.remove("hidden");
      renderCharts();
    }
  } else if (view === "achievements") {
    const achievementsView = document.getElementById("view-achievements");
    if (achievementsView) {
      achievementsView.classList.remove("hidden");
      renderAchievements();
    }
  }

  // Update Sidebar Active State
  const navItems = document.querySelectorAll("#sidebar nav button");
  navItems.forEach((btn) => {
    if (btn.onclick && btn.onclick.toString().includes(`'${view}'`)) {
      btn.classList.add("bg-slate-800", "text-white");
      btn.classList.remove("text-slate-300");
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

  if (typeof checkAchievements === "function") {
    checkAchievements();
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

// --- CALENDAR RENDERER ---
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

    // Legacy support
    const legacyKey = date.toDateString();

    const isToday = dateKey === todayKey;

    // Check both
    const history = trainingHistory[dateKey] || trainingHistory[legacyKey];

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

    // Water indicators
    let waterIndicators = "";
    if (history && history.water) {
      // Facu Water Dot
      if (history.water.facu >= (history.water.facuGoal || 3500)) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-blue-500" title="Facu: Meta cumplida"></div>';
      } else if (history.water.facu > 0) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-slate-600" title="Facu: ' +
          history.water.facu +
          'ml"></div>';
      }

      // Alma Water Dot
      if (history.water.alma >= (history.water.almaGoal || 2700)) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-pink-500" title="Alma: Meta cumplida"></div>';
      } else if (history.water.alma > 0) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-slate-600" title="Alma: ' +
          history.water.alma +
          'ml"></div>';
      }
    }

    // Check if we have hydration data in waterState (for TODAY live update)
    if (isToday && waterState) {
      // Reset to re-calc based on live waterState if it's today
      waterIndicators = "";
      if (waterState.facu >= (waterState.facuGoal || 3500)) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-blue-500" title="Facu: Meta cumplida"></div>';
      } else if (waterState.facu > 0) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-slate-600" title="Facu: ' +
          waterState.facu +
          'ml"></div>';
      }

      if (waterState.alma >= (waterState.almaGoal || 2700)) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-pink-500" title="Alma: Meta cumplida"></div>';
      } else if (waterState.alma > 0) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-slate-600" title="Alma: ' +
          waterState.alma +
          'ml"></div>';
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
                        <div class="flex gap-1 items-center justify-center mt-1">
                            ${icon}
                            ${waterIndicators ? `<div class="flex gap-0.5">${waterIndicators}</div>` : ""}
                        </div>
                    </div>
                `;
  }
}

function getVolumeHistory(user, days) {
  const history = [];
  const date = new Date();

  // Go back 'days' amount
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(date.getDate() - i);
    const key = getDateKey(d);

    // Legacy mapping
    const legacyKey = d.toDateString();

    // Calculate volume for that day
    let vol = 0;

    // Check both keys
    const record = trainingHistory[key] || trainingHistory[legacyKey];

    if (record && record.weights) {
      // Iterate all keys in weights
      Object.values(record.weights).forEach((pair) => {
        // pair = {facu: 50, alma: 30}
        // Use 10 reps as volume proxy
        if (pair[user]) vol += (parseInt(pair[user]) || 0) * 10;
      });
    }
    // Correct format for new chart logic {date, value}
    history.push({ date: key, value: vol });
  }
  return history;
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
  try {
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

    // TRIGGER CLOUD SYNC IMMEDIATELY
    saveToCloud();
  } catch (e) {
    console.error("Error syncing water:", e);
  }

  // Visuals
  try {
    if (amount > 0) {
      animateShake(user);

      // Check Goal
      const newPercent = waterState[user] / goal;
      const oldPercent = Math.max(0, waterState[user] - amount) / goal; // Approx existing logic
      if (oldPercent < 1 && newPercent >= 1) {
        triggerConfetti();
      }
    }
  } catch (e) {
    console.warn("Anim error", e);
  }

  console.log(`[DEBUG] Calling renderAquaFlow from addWater`);
  renderAquaFlow();
  renderWaterHistory();
}

// --- HELPERS ---
function getDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
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
  setInterval(fetchWeather, 30 * 60 * 1000); // Refresh every 30 minutes
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

// --- Note: navigateTo is defined earlier in the file ---

// --- CHARTS LOGIC ---
function renderCharts() {
  const container = document.getElementById("charts-container");
  container.innerHTML = "";

  // We will generate 4 main charts:
  // 1. Facu's Max Volume Day
  // 2. Alma's Max Volume Day
  // 3. Facu's Streak Evolution (?)
  // 4. Exercise Progress (Squat?)

  // Let's simplify: 1 Chart per user showing "Daily Volume" over last 30 days.

  ["facu", "alma"].forEach((user) => {
    const dataPoints = getVolumeHistory(user, 14); // Last 14 days
    const chartHTML = generateSVGLineChart(
      dataPoints,
      user === "facu" ? "#60a5fa" : "#f472b6",
      user,
    );

    const card = document.createElement("div");
    card.className = "bg-slate-900 border border-slate-800 p-4 rounded-2xl";
    card.innerHTML = `
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
            ${user === "facu" ? "🙎🏽‍♂️ Volumen de Facu" : "🙎🏻‍♀️ Volumen de Alma"}
            <span class="text-xs text-slate-500 font-normal">(Últimos 14 días)</span>
        </h3>
        ${chartHTML}
      `;
    container.appendChild(card);
  });
}

function getVolumeHistory(user, days) {
  const history = [];
  const date = new Date();
  // Go back 'days' amount
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(date.getDate() - i);
    const key = getDateKey(d);

    // Legacy Key Support (toDateString)
    // Some data might be saved as "Mon Jan 22 2026"
    const legacyKey = d.toDateString();

    // Calculate volume for that day
    let vol = 0;

    // Check both keys
    const record = trainingHistory[key] || trainingHistory[legacyKey];

    if (record && record.weights) {
      // Iterate all keys in weights
      Object.values(record.weights).forEach((pair) => {
        // pair = {facu: 50, alma: 30}
        // Sum roughly: Weight * 10 reps (Approximation for Volume)
        if (pair[user]) vol += (parseInt(pair[user]) || 0) * 10;
      });
    }
    // Expected format for new SVG chart: { date: "YYYY-MM-DD", value: 123 }
    history.push({ date: key, value: vol });
  }
  return history;
}

function generateSVGLineChart(data, color, user) {
  const width = 600;
  const height = 250; // Increased height for labels
  const padding = 40; // Increased padding for axis text

  if (data.every((d) => d.value === 0)) {
    return `<div class="h-64 flex flex-col items-center justify-center text-slate-500 gap-2">
                <i data-lucide="bar-chart-2" class="w-8 h-8 opacity-50"></i>
                <span class="text-sm font-medium">Sin datos recientes</span>
            </div>`;
  }

  const maxValue = Math.max(...data.map((d) => d.value)) || 100;
  const roundedMax = Math.ceil(maxValue / 100) * 100; // Round up to nearest 100 for cleaner scale

  // Helper to map Value to Y
  const getY = (val) =>
    height - padding - (val / roundedMax) * (height - padding * 2);

  // Helper to map Index to X
  const getX = (i) => padding + (i / (data.length - 1)) * (width - padding * 2);

  // Grid Lines & Labels (0, 50%, 100%)
  const gridLines = [0, roundedMax / 2, roundedMax]
    .map((val) => {
      const y = getY(val);
      return `
      <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#334155" stroke-width="1" stroke-dasharray="4" opacity="0.5" />
      <text x="${padding - 10}" y="${y + 4}" fill="#94a3b8" font-size="10" text-anchor="end">${Math.round(val)}</text>
    `;
    })
    .join("");

  // X Axis Labels (Show approx 5 dates)
  const xLabels = data
    .map((d, i) => {
      // Show label only for specific indices to avoid clutter
      if (i % 3 === 0 || i === data.length - 1) {
        const dateStr = d.date.split("-").slice(1).join("/"); // MM/DD
        const x = getX(i);
        return `<text x="${x}" y="${height - 10}" fill="#94a3b8" font-size="10" text-anchor="middle">${dateStr}</text>`;
      }
      return "";
    })
    .join("");

  const points = data.map((d, i) => `${getX(i)},${getY(d.value)}`).join(" ");

  // Gradient area below the line
  const areaPoints = `${getX(0)},${getY(0)} ${points} ${getX(data.length - 1)},${getY(0)}`;
  const gradientId = `grad-${user}`;

  return `
      <svg viewBox="0 0 ${width} ${height}" class="w-full h-auto drop-shadow-xl font-mono" style="overflow: visible;">
         <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" style="stop-color:${color};stop-opacity:0.2" />
               <stop offset="100%" style="stop-color:${color};stop-opacity:0" />
            </linearGradient>
         </defs>

         <!-- Grid & Axis Labels -->
         ${gridLines}
         ${xLabels}
         
         <!-- Axis Lines -->
         <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#475569" stroke-width="1" />
         <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#475569" stroke-width="1" />
         
         <!-- Area Fill -->
         <polygon points="${areaPoints}" fill="url(#${gradientId})" stroke="none" />

         <!-- Path -->
         <polyline fill="none" stroke="${color}" stroke-width="3" points="${points}" 
                   stroke-linecap="round" stroke-linejoin="round"
                   class="animate-draw-line" />
                   
         <!-- Inteactive Points -->
         ${data
           .map((d, i) => {
             const x = getX(i);
             const y = getY(d.value);
             return `
               <g class="group">
                 <circle cx="${x}" cy="${y}" r="4" fill="${color}" stroke="#0f172a" stroke-width="2" 
                         class="group-hover:scale-125 transition-transform cursor-pointer" 
                         style="transform-box: fill-box; transform-origin: center;" />
                 <!-- Tooltip (Simulated via title, usually handled via JS for HTML tooltips, but SVG title works on hover) -->
                 <title>${d.date}: ${d.value} kg</title>
               </g>
             `;
           })
           .join("")}
      </svg>
    `;
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

// --- GAMIFICATION V2 (LOGROS) ---
const achievementsConfig = [
  // --- TIER 1: COMÚN (Fácil / Inicio) ---
  {
    id: "first_workout",
    title: "Primer Paso",
    icon: "footprints",
    desc: "Completa tu primer entrenamiento",
    tier: "Común",
    condition: (u) => gamification[u].points > 0,
  },
  {
    id: "hydrated",
    title: "Hidratado",
    icon: "droplets",
    desc: "Alcanza tu meta diaria de agua",
    tier: "Común",
    condition: (u) => waterState[u] >= (waterState[u + "Goal"] || 2000),
  },
  {
    id: "streak_3",
    title: "Constancia",
    icon: "flame",
    desc: "Racha de 3 días",
    tier: "Común",
    condition: (u) => calculateUserStreak(u) >= 3,
  },
  {
    id: "active_5",
    title: "Iniciado",
    icon: "play",
    desc: "Completa 5 entrenamientos",
    tier: "Común",
    condition: (u) => getTotalWorkouts(u) >= 5,
  },
  {
    id: "active_10",
    title: "Aprendiz",
    icon: "activity",
    desc: "Completa 10 entrenamientos",
    tier: "Común",
    condition: (u) => getTotalWorkouts(u) >= 10,
  },
  {
    id: "duo_workout",
    title: "Compañeros",
    icon: "users",
    desc: "Entrena con tu pareja por primera vez",
    tier: "Común",
    condition: (u) => getDuoWorkouts() >= 1,
  },
  {
    id: "hydrated_3_days",
    title: "Agua x3",
    icon: "droplet",
    desc: "Cumple meta de agua 3 días seguidos",
    tier: "Común",
    condition: (u) => getHydrationStreak(u) >= 3,
  },
  {
    id: "first_points_50",
    title: "Primeros Puntos",
    icon: "coins",
    desc: "Acumula 50 puntos",
    tier: "Común",
    condition: (u) => gamification[u].points >= 50,
  },
  // --- NEW COMMON ACHIEVEMENTS ---
  {
    id: "streak_2",
    title: "El Dúo",
    icon: "flame",
    desc: "Racha de 2 días seguidos",
    tier: "Común",
    condition: (u) => calculateUserStreak(u) >= 2,
  },
  {
    id: "points_100",
    title: "Centenario",
    icon: "piggy-bank",
    desc: "Acumula 100 puntos",
    tier: "Común",
    condition: (u) => gamification[u].points >= 100,
  },
  {
    id: "active_2",
    title: "Calentando",
    icon: "play",
    desc: "Completa 2 entrenamientos",
    tier: "Común",
    condition: (u) => getTotalWorkouts(u) >= 2,
  },
  {
    id: "active_8",
    title: "En Marcha",
    icon: "fast-forward",
    desc: "Completa 8 entrenamientos",
    tier: "Común",
    condition: (u) => getTotalWorkouts(u) >= 8,
  },
  {
    id: "duo_3",
    title: "Trio Dinámico",
    icon: "users",
    desc: "Entrena 3 veces con tu pareja",
    tier: "Común",
    condition: (u) => getDuoWorkouts() >= 3,
  },
  {
    id: "duo_5",
    title: "Equipo",
    icon: "users",
    desc: "Entrena 5 veces con tu pareja",
    tier: "Común",
    condition: (u) => getDuoWorkouts() >= 5,
  },
  {
    id: "volume_1k",
    title: "Kilo a Kilo",
    icon: "dumbbell",
    desc: "Levanta 1,000kg en total (histórico)",
    tier: "Común",
    condition: (u) => getTotalLiftedVolume(u) >= 1000,
  },
  {
    id: "volume_3k",
    title: "Tres Mil",
    icon: "dumbbell",
    desc: "Levanta 3,000kg en total (histórico)",
    tier: "Común",
    condition: (u) => getTotalLiftedVolume(u) >= 3000,
  },
  {
    id: "volume_day_1k",
    title: "Tonelada Diaria",
    icon: "weight",
    desc: "Levanta 1,000kg en un solo día",
    tier: "Común",
    condition: (u) => getDailyVolume(u) >= 1000,
  },
  {
    id: "volume_day_2k",
    title: "Fuerza Diaria",
    icon: "weight",
    desc: "Levanta 2,000kg en un solo día",
    tier: "Común",
    condition: (u) => getDailyVolume(u) >= 2000,
  },
  {
    id: "monday_motivation",
    title: "Odio los Lunes",
    icon: "calendar-check",
    desc: "Entrena un Lunes",
    tier: "Común",
    condition: (u) =>
      new Date().getDay() === 1 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "hump_day",
    title: "Ombligo",
    icon: "calendar",
    desc: "Entrena un Miércoles",
    tier: "Común",
    condition: (u) =>
      new Date().getDay() === 3 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "weekend_warrior_easy",
    title: "Finde Activo",
    icon: "sun",
    desc: "Entrena un Sábado o Domingo",
    tier: "Común",
    condition: (u) =>
      (new Date().getDay() === 6 || new Date().getDay() === 0) &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "early_bird_easy",
    title: "Mañanero",
    icon: "sunrise",
    desc: "Entrena antes de las 11 AM",
    tier: "Común",
    condition: (u) =>
      new Date().getHours() < 11 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "night_owl",
    title: "Búho",
    icon: "moon",
    desc: "Entrena después de las 20:00",
    tier: "Común",
    condition: (u) =>
      new Date().getHours() >= 20 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "water_500",
    title: "Sediento",
    icon: "glass-water",
    desc: "Registra 500ml de agua",
    tier: "Común",
    condition: (u) => (waterState[u] || 0) >= 500,
  },
  {
    id: "water_1000",
    title: "Litro",
    icon: "glass-water",
    desc: "Registra 1 Litro de agua",
    tier: "Común",
    condition: (u) => (waterState[u] || 0) >= 1000,
  },
  {
    id: "water_streak_2",
    title: "Hidratado x2",
    icon: "droplet",
    desc: "Meta de agua 2 días seguidos",
    tier: "Común",
    condition: (u) => getHydrationStreak(u) >= 2,
  },
  {
    id: "first_freeze",
    title: "Protegido",
    icon: "shield",
    desc: "Ten al menos 1 protector de racha",
    tier: "Común",
    condition: (u) => gamification[u].freezes >= 1,
  },
  {
    id: "perfect_week_start",
    title: "Buen Inicio",
    icon: "calendar-check-2",
    desc: "Completa el Lunes y Martes seguidos",
    tier: "Común",
    condition: (u) => {
      const today = new Date();
      const yest = new Date();
      yest.setDate(today.getDate() - 1);
      const k1 = getDateKey(today);
      const k2 = getDateKey(yest);
      return (
        today.getDay() === 2 &&
        trainingHistory[k1] &&
        trainingHistory[k1][u] &&
        trainingHistory[k2] &&
        trainingHistory[k2][u]
      );
    },
  },

  // --- TIER 2: RARO (Intermedio) ---
  {
    id: "streak_7",
    title: "Imparable",
    icon: "zap",
    desc: "Racha de 7 días",
    tier: "Raro",
    condition: (u) => calculateUserStreak(u) >= 7,
  },
  {
    id: "streak_14",
    title: "Quincena",
    icon: "calendar",
    desc: "Racha de 14 días",
    tier: "Raro",
    condition: (u) => calculateUserStreak(u) >= 14,
  },
  {
    id: "volume_10k",
    title: "Levantador",
    icon: "dumbbell",
    desc: "Levanta 10,000kg en total",
    tier: "Raro",
    condition: (u) => getTotalLiftedVolume(u) >= 10000,
  },
  {
    id: "volume_25k",
    title: "Máquina",
    icon: "cog",
    desc: "Levanta 25,000kg en total",
    tier: "Raro",
    condition: (u) => getTotalLiftedVolume(u) >= 25000,
  },
  {
    id: "weekend_warrior",
    title: "Finde Warrior",
    icon: "calendar-check",
    desc: "Entrena un Sábado o Domingo",
    tier: "Raro",
    condition: (u) => {
      const d = new Date().getDay();
      return (
        (d === 0 || d === 6) &&
        trainingHistory[getDateKey(new Date())] &&
        trainingHistory[getDateKey(new Date())][u]
      );
    },
  },
  {
    id: "active_25",
    title: "Regular",
    icon: "repeat",
    desc: "Completa 25 entrenamientos",
    tier: "Raro",
    condition: (u) => getTotalWorkouts(u) >= 25,
  },
  {
    id: "active_50",
    title: "Veterano",
    icon: "medal",
    desc: "Completa 50 entrenamientos",
    tier: "Raro",
    condition: (u) => getTotalWorkouts(u) >= 50,
  },
  {
    id: "early_bird",
    title: "Madrugador",
    icon: "sunrise",
    desc: "Entrena antes de las 9 AM",
    tier: "Raro",
    condition: (u) => {
      const h = new Date().getHours();
      return (
        h < 9 &&
        trainingHistory[getDateKey(new Date())] &&
        trainingHistory[getDateKey(new Date())][u]
      );
    },
  },
  {
    id: "night_owl",
    title: "Noctámbulo",
    icon: "moon",
    desc: "Entrena después de las 9 PM",
    tier: "Raro",
    condition: (u) => {
      const h = new Date().getHours();
      return (
        h >= 21 &&
        trainingHistory[getDateKey(new Date())] &&
        trainingHistory[getDateKey(new Date())][u]
      );
    },
  },
  {
    id: "duo_10",
    title: "Dúo Dinámico",
    icon: "heart-handshake",
    desc: "Entrena 10 veces con tu pareja",
    tier: "Raro",
    condition: (u) => getDuoWorkouts() >= 10,
  },
  {
    id: "hydrated_7_days",
    title: "Fuente Natural",
    icon: "glass-water",
    desc: "Cumple meta de agua 7 días seguidos",
    tier: "Raro",
    condition: (u) => getHydrationStreak(u) >= 7,
  },
  {
    id: "volume_single_day_5k",
    title: "Día Pesado",
    icon: "arrow-up-circle",
    desc: "Levanta 5,000kg en un solo día",
    tier: "Raro",
    condition: (u) => getDailyVolume(u) >= 5000,
  },
  {
    id: "points_200",
    title: "Coleccionista",
    icon: "piggy-bank",
    desc: "Acumula 200 puntos",
    tier: "Raro",
    condition: (u) => gamification[u].points >= 200,
  },

  // --- NEW RARE ACHIEVEMENTS ---
  {
    id: "streak_10",
    title: "Decatleta",
    icon: "medal",
    desc: "Racha de 10 días seguidos",
    tier: "Raro",
    condition: (u) => calculateUserStreak(u) >= 10,
  },
  {
    id: "active_15",
    title: "Iniciado Pro",
    icon: "star",
    desc: "Completa 15 entrenamientos",
    tier: "Raro",
    condition: (u) => getTotalWorkouts(u) >= 15,
  },
  {
    id: "active_30",
    title: "Hábito Mensual",
    icon: "calendar-days",
    desc: "Completa 30 entrenamientos",
    tier: "Raro",
    condition: (u) => getTotalWorkouts(u) >= 30,
  },
  {
    id: "duo_15",
    title: "Pareja Fitness",
    icon: "heart-handshake",
    desc: "Entrena 15 veces con tu pareja",
    tier: "Raro",
    condition: (u) => getDuoWorkouts() >= 15,
  },
  {
    id: "volume_15k",
    title: "Peso Medio",
    icon: "dumbbell",
    desc: "Levanta 15,000kg en total",
    tier: "Raro",
    condition: (u) => getTotalLiftedVolume(u) >= 15000,
  },
  {
    id: "volume_day_3k",
    title: "Día de Furia",
    icon: "biceps-flexed",
    desc: "Levanta 3,000kg en un solo día",
    tier: "Raro",
    condition: (u) => getDailyVolume(u) >= 3000,
  },
  {
    id: "points_300",
    title: "Ahorrador Pro",
    icon: "wallet",
    desc: "Acumula 300 puntos",
    tier: "Raro",
    condition: (u) => gamification[u].points >= 300,
  },
  {
    id: "four_days_week",
    title: "Intenso",
    icon: "zap",
    desc: "Entrena 4 veces en los últimos 7 días",
    tier: "Raro",
    condition: (u) => {
      let count = 0;
      for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const k = getDateKey(d);
        if (trainingHistory[k] && trainingHistory[k][u]) count++;
      }
      return count >= 4;
    },
  },
  {
    id: "night_owl_hard",
    title: "Turno Noche",
    icon: "moon-star",
    desc: "Entrena después de las 22:00",
    tier: "Raro",
    condition: (u) =>
      new Date().getHours() >= 22 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "water_streak_5",
    title: "Oasis",
    icon: "droplets",
    desc: "Meta de agua 5 días seguidos",
    tier: "Raro",
    condition: (u) => getHydrationStreak(u) >= 5,
  },

  // --- TIER 3: ÉPICO (Difícil) ---
  {
    id: "streak_21",
    title: "Hábito Forjado",
    icon: "hammer",
    desc: "Racha de 21 días (se forma un hábito)",
    tier: "Épico",
    condition: (u) => calculateUserStreak(u) >= 21,
  },
  {
    id: "streak_30",
    title: "Leyenda",
    icon: "crown",
    desc: "Racha de 30 días",
    tier: "Épico",
    condition: (u) => calculateUserStreak(u) >= 30,
  },
  {
    id: "volume_50k",
    title: "Hércules",
    icon: "biceps-flexed",
    desc: "Levanta 50,000kg en total",
    tier: "Épico",
    condition: (u) => getTotalLiftedVolume(u) >= 50000,
  },
  {
    id: "volume_75k",
    title: "Coloso",
    icon: "mountain",
    desc: "Levanta 75,000kg en total",
    tier: "Épico",
    condition: (u) => getTotalLiftedVolume(u) >= 75000,
  },
  {
    id: "hydrated_master",
    title: "Poseidón",
    icon: "waves",
    desc: "Bebe 4 litros en un día",
    tier: "Épico",
    condition: (u) => waterState[u] >= 4000,
  },
  {
    id: "active_75",
    title: "Atleta",
    icon: "user-check",
    desc: "Completa 75 entrenamientos",
    tier: "Épico",
    condition: (u) => getTotalWorkouts(u) >= 75,
  },
  {
    id: "active_100",
    title: "Centurión",
    icon: "shield-check",
    desc: "Completa 100 entrenamientos",
    tier: "Épico",
    condition: (u) => getTotalWorkouts(u) >= 100,
  },
  {
    id: "duo_25",
    title: "Alma Gemela",
    icon: "heart",
    desc: "Entrena 25 veces con tu pareja",
    tier: "Épico",
    condition: (u) => getDuoWorkouts() >= 25,
  },
  {
    id: "hydrated_14_days",
    title: "Océano",
    icon: "anchor",
    desc: "Cumple meta de agua 14 días seguidos",
    tier: "Épico",
    condition: (u) => getHydrationStreak(u) >= 14,
  },
  {
    id: "volume_single_day_8k",
    title: "Bestia",
    icon: "skull",
    desc: "Levanta 8,000kg en un solo día",
    tier: "Épico",
    condition: (u) => getDailyVolume(u) >= 8000,
  },
  {
    id: "points_500",
    title: "Banquero",
    icon: "landmark",
    desc: "Acumula 500 puntos",
    tier: "Épico",
    condition: (u) => gamification[u].points >= 500,
  },

  // --- TIER 4: LEGENDARIO (Muy Difícil) ---
  {
    id: "streak_60",
    title: "Dios del Gym",
    icon: "award",
    desc: "Racha de 60 días",
    tier: "Legendario",
    condition: (u) => calculateUserStreak(u) >= 60,
  },
  {
    id: "streak_90",
    title: "Imbatible",
    icon: "shield",
    desc: "Racha de 90 días",
    tier: "Legendario",
    condition: (u) => calculateUserStreak(u) >= 90,
  },
  {
    id: "streak_180",
    title: "Semidiós",
    icon: "star",
    desc: "Racha de 180 días (6 meses)",
    tier: "Legendario",
    condition: (u) => calculateUserStreak(u) >= 180,
  },
  {
    id: "volume_100k",
    title: "Titán",
    icon: "weight",
    desc: "Levanta 100,000kg en total",
    tier: "Legendario",
    condition: (u) => getTotalLiftedVolume(u) >= 100000,
  },
  {
    id: "volume_200k",
    title: "Atlas",
    icon: "globe",
    desc: "Levanta 200,000kg en total",
    tier: "Legendario",
    condition: (u) => getTotalLiftedVolume(u) >= 200000,
  },
  {
    id: "active_200",
    title: "Espartano",
    icon: "swords",
    desc: "Completa 200 entrenamientos",
    tier: "Legendario",
    condition: (u) => getTotalWorkouts(u) >= 200,
  },
  {
    id: "year_warrior",
    title: "Inmortal",
    icon: "infinity",
    desc: "Entrena durante un año entero",
    tier: "Legendario",
    condition: (u) => getTotalWorkouts(u) >= 300,
  },
  {
    id: "year_complete",
    title: "Año Dorado",
    icon: "trophy",
    desc: "Completa 365 entrenamientos",
    tier: "Legendario",
    condition: (u) => getTotalWorkouts(u) >= 365,
  },
  {
    id: "duo_50",
    title: "Eternos",
    icon: "gem",
    desc: "Entrena 50 veces con tu pareja",
    tier: "Legendario",
    condition: (u) => getDuoWorkouts() >= 50,
  },
  {
    id: "hydrated_30_days",
    title: "Neptuno",
    icon: "ship",
    desc: "Cumple meta de agua 30 días seguidos",
    tier: "Legendario",
    condition: (u) => getHydrationStreak(u) >= 30,
  },
  {
    id: "points_1000",
    title: "Magnate",
    icon: "crown",
    desc: "Acumula 1000 puntos",
    tier: "Legendario",
    condition: (u) => gamification[u].points >= 1000,
  },
];

// --- ACHIEVEMENT HELPERS ---
function getTotalWorkouts(user) {
  let count = 0;
  Object.values(trainingHistory).forEach((day) => {
    if (day[user]) count++;
  });
  return count;
}

function getTotalLiftedVolume(user) {
  let total = 0;
  Object.values(trainingHistory).forEach((day) => {
    if (day.weights) {
      // weights keys are "dayIndex-exIndex-setIndex"
      // values are like { facu: 50, alma: 30 }
      Object.values(day.weights).forEach((weightObj) => {
        if (weightObj[user]) {
          // We need reps to calculate volume!
          // Currently history only stores WEIGHT used.
          // To acturately calculate TOTAL volume we need Sets x Reps x Weight.
          // But we don't store exact Reps done per historical set, only the default "10" or "8-10" in routine data.
          // APPROXIMATION: Use 10 reps as standard for volume calc, or just sum "Kg Lifted" as a "Max Effort Accumulator".
          // Let's assume 10 reps per set for gamification purposes.
          total += (parseInt(weightObj[user]) || 0) * 10;
        }
      });
    }
  });
  return total;
}

// Count days where BOTH Facu and Alma trained together
function getDuoWorkouts() {
  let count = 0;
  Object.values(trainingHistory).forEach((day) => {
    if (day.facu && day.alma) count++;
  });
  return count;
}

// Count consecutive days meeting water goal
function getHydrationStreak(user) {
  const goal = waterState[user + "Goal"] || 2000;
  let streak = 0;
  const today = new Date();

  for (let i = 0; i < 365; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const key = getDateKey(date);
    const dayData = trainingHistory[key];

    if (dayData && dayData.water && dayData.water[user] >= goal) {
      streak++;
    } else if (i === 0) {
      // Today might not be saved yet, check waterState
      if (waterState[user] >= goal) {
        streak++;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  return streak;
}

// Get volume lifted on a specific day
function getDailyVolume(user, date = new Date()) {
  const key = getDateKey(date);
  const dayData = trainingHistory[key];
  if (!dayData || !dayData.weights) return 0;

  let total = 0;
  Object.values(dayData.weights).forEach((weightObj) => {
    if (weightObj[user]) {
      total += (parseInt(weightObj[user]) || 0) * 10; // Assume 10 reps
    }
  });
  return total;
}

const appStartTime = Date.now();

function checkAchievements() {
  // Guard: Don't check on initial load (requested by user)
  // Only check when triggered by explicit actions (which happen usually > 2s after load)
  if (Date.now() - appStartTime < 5000) {
    console.log("🚫 Skipping achievement check on startup");
    return;
  }

  // Logic to unlock achievements
  // We store unlocked IDs in gamification[user].achievements = ["id1", "id2"]
  ["facu", "alma"].forEach((user) => {
    if (!gamification[user].achievements) gamification[user].achievements = [];

    let newUnlock = false;
    achievementsConfig.forEach((ach) => {
      if (!gamification[user].achievements.includes(ach.id)) {
        // Safety check for condition
        try {
          if (ach.condition(user)) {
            gamification[user].achievements.push(ach.id);
            newUnlock = true;
            // Use the new enhanced modal instead of simple toast
            showAchievementModal(ach, user);
            triggerConfetti();
          }
        } catch (e) {
          console.warn("Achievement check error", e);
        }
      }
    });

    if (newUnlock) {
      localStorage.setItem("gymGamification", JSON.stringify(gamification));
      saveToCloud(); // Sync achievements
    }
  });
}

// --- ACHIEVEMENT MODAL FUNCTIONS ---
function showAchievementModal(achievement, user) {
  const modal = document.getElementById("achievement-modal");
  const content = document.getElementById("achievement-modal-content");
  const card = document.getElementById("achievement-modal-card");
  const glow = document.getElementById("achievement-modal-glow");
  const iconBg = document.getElementById("achievement-modal-icon-bg");
  const icon = document.getElementById("achievement-modal-icon");
  const tier = document.getElementById("achievement-modal-tier");
  const title = document.getElementById("achievement-modal-title");
  const desc = document.getElementById("achievement-modal-desc");
  const userName = document.getElementById("achievement-modal-user");
  const btn = document.getElementById("achievement-modal-btn");

  if (!modal) return;

  // Tier-based styling
  const tierStyles = {
    Común: {
      card: "border-slate-500 bg-slate-900",
      glow: "bg-gradient-to-br from-slate-400/20 to-slate-600/10",
      iconBg: "bg-slate-700",
      tier: "bg-slate-700 text-slate-300",
      btn: "bg-slate-600 hover:bg-slate-500",
    },
    Raro: {
      card: "border-blue-500 bg-slate-900",
      glow: "bg-gradient-to-br from-blue-500/30 to-cyan-500/10",
      iconBg: "bg-blue-600",
      tier: "bg-blue-600 text-white",
      btn: "bg-blue-600 hover:bg-blue-500",
    },
    Épico: {
      card: "border-purple-500 bg-slate-900",
      glow: "bg-gradient-to-br from-purple-500/40 to-pink-500/20",
      iconBg: "bg-purple-600",
      tier: "bg-purple-600 text-white",
      btn: "bg-purple-600 hover:bg-purple-500",
    },
    Legendario: {
      card: "border-amber-400 bg-slate-900",
      glow: "bg-gradient-to-br from-amber-400/50 to-orange-500/30",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      tier: "bg-gradient-to-r from-amber-400 to-orange-500 text-black",
      btn: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400",
    },
  };

  const style = tierStyles[achievement.tier] || tierStyles["Común"];

  // Apply styles
  card.className = `relative overflow-hidden rounded-3xl border-2 p-6 text-center ${style.card}`;
  glow.className = `absolute inset-0 opacity-30 ${style.glow}`;
  iconBg.className = `mx-auto w-20 h-20 rounded-full flex items-center justify-center text-4xl animate-bounce ${style.iconBg}`;
  tier.className = `px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${style.tier}`;
  btn.className = `relative z-10 w-full py-3 rounded-xl font-bold text-white transition-all active:scale-95 ${style.btn}`;

  // Set content
  icon.setAttribute("data-lucide", achievement.icon);
  tier.textContent = achievement.tier || "Común";
  title.textContent = achievement.title;
  desc.textContent = achievement.desc;
  userName.textContent = user === "facu" ? "🙎🏽‍♂️ Facu" : "🙎🏻‍♀️ Alma";
  userName.className = `font-bold ${user === "facu" ? "text-blue-400" : "text-pink-400"}`;

  // Show modal with animation
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Trigger animation
  setTimeout(() => {
    content.classList.remove("scale-0");
    content.classList.add("scale-100");
  }, 50);

  lucide.createIcons();
}

function closeAchievementModal() {
  const modal = document.getElementById("achievement-modal");
  const content = document.getElementById("achievement-modal-content");

  content.classList.remove("scale-100");
  content.classList.add("scale-0");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300);
}

// --- ACHIEVEMENTS RENDERER ---
function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;

  container.innerHTML = "";

  const TIER_COLORS = {
    Común: "border-slate-700 bg-slate-800/50",
    Raro: "border-blue-500/50 bg-blue-900/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    Épico:
      "border-purple-500/50 bg-purple-900/20 shadow-[0_0_20px_rgba(168,85,247,0.4)]",
    Legendario:
      "border-amber-400/50 bg-amber-900/20 shadow-[0_0_25px_rgba(251,191,36,0.5)]",
  };

  const TIER_TEXT_COLORS = {
    Común: "text-slate-400",
    Raro: "text-blue-400",
    Épico: "text-purple-400",
    Legendario: "text-amber-400",
  };

  achievementsConfig.forEach((ach) => {
    // Ensure data integrity
    if (!gamification.facu.achievements) gamification.facu.achievements = [];
    if (!gamification.alma.achievements) gamification.alma.achievements = [];

    const facuHas = gamification.facu.achievements.includes(ach.id);
    const almaHas = gamification.alma.achievements.includes(ach.id);
    const isUnlocked = facuHas || almaHas;

    const tierAttr = ach.tier || "Común";
    const tierClass = TIER_COLORS[tierAttr];
    const tierTextClass = TIER_TEXT_COLORS[tierAttr];

    const card = document.createElement("div");
    // Opacity logic: if unlocked simple opacity. If locked, dim.
    const opacityClass = isUnlocked ? "opacity-100" : "opacity-40 grayscale";

    card.className = `relative p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-300 group hover:scale-105 ${tierClass} ${opacityClass}`;

    card.innerHTML = `
            <div class="absolute top-2 right-2 text-[10px] uppercase font-bold tracking-wider ${tierTextClass}">${tierAttr}</div>
            
            <div class="p-3 rounded-full bg-slate-950/50 mb-3 ${isUnlocked ? "shadow-inner" : ""}">
                <i data-lucide="${ach.icon}" class="w-8 h-8 ${isUnlocked ? tierTextClass : "text-slate-600"}"></i>
            </div>
            
            <h4 class="text-sm font-bold text-white mb-1 leading-tight">${ach.title}</h4>
            <p class="text-[10px] text-slate-400 leading-snug mb-3 min-h-[2.5em] flex items-center justify-center">${ach.desc}</p>
            
            <div class="mt-auto w-full flex justify-center gap-3 border-t border-slate-700/50 pt-2">
                 <div class="flex items-center gap-1 ${facuHas ? "opacity-100" : "opacity-30"}" title="Facu">
                    <span class="text-xs">🙍🏽‍♂️</span>
                    ${facuHas ? '<i data-lucide="check" class="w-3 h-3 text-emerald-400"></i>' : '<i data-lucide="lock" class="w-3 h-3 text-slate-600"></i>'}
                 </div>
                 <div class="flex items-center gap-1 ${almaHas ? "opacity-100" : "opacity-30"}" title="Alma">
                    <span class="text-xs">🙍🏻‍♀️</span>
                    ${almaHas ? '<i data-lucide="check" class="w-3 h-3 text-emerald-400"></i>' : '<i data-lucide="lock" class="w-3 h-3 text-slate-600"></i>'}
                 </div>
            </div>
        `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();

  // Update Counts header (Unique badges unlocked)
  const totalCount = document.getElementById("achievements-count");
  if (totalCount) {
    const unlockedUnique = achievementsConfig.filter(
      (a) =>
        gamification.facu.achievements.includes(a.id) ||
        gamification.alma.achievements.includes(a.id),
    ).length;
    totalCount.textContent = `${unlockedUnique} / ${achievementsConfig.length}`;
  }
}

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

// --- HISTORY STATE ---
// (trainingHistory is already defined globally at the top)

// DATA MIGRATION: Check for old 'gymTrainingHistory' vs 'gymRoutineHistory' mismatch if needed
// (If trainingHistory is empty, try to see if there's other data? No, just ensure variable exists)
if (Object.keys(trainingHistory).length === 0) {
  const s = localStorage.getItem("gymTrainingHistory");
  if (s) trainingHistory = JSON.parse(s);

  const oldKeys = Object.keys(localStorage).filter((k) =>
    k.startsWith("gym_history_"),
  );
  if (oldKeys.length > 0) {
    console.log("Found separated history keys, consider migrating if needed.");
  }
}

// --- STATE (Weights) ---
let setWeights = JSON.parse(localStorage.getItem("gymRoutineWeights")) || {};

// --- SMART AUTOFILL HELPER ---
function getLastWeight(exerciseName, user, dayIndex) {
  // Scans trainingHistory backwards to find the last weight for this exercise
  const dates = Object.keys(trainingHistory).sort(
    (a, b) => new Date(b) - new Date(a),
  ); // Newest first

  // We need to iterate over days to find matching exercise name.
  // This is expensive if history is huge, but it's local string comparisons.
  // We don't have a direct map of "Exercise Name" -> "Last Weight".
  // So we have to infer from the structure.

  // Strategy:
  // 1. We know the current dayIndex (e.g. 0 for Monday).
  // 2. We know the exerciseName.
  // 3. We iterate history.
  //    If history[date] exists...
  //    We need to know which setKey corresponds to exerciseName?
  //    We can't rely on index if user changes routine.
  //    BUT, `setWeights` is saved by setKey "day-ex-set".
  //    Wait, `trainingHistory` stores `weights` object which matches `setWeights` structure.

  //    If we assume the routine structure (order of exercises) hasn't changed dramatically:
  //    We can look for keys starting with `${dayIndex}-`.
  //    But we need to match the specific exercise index.
  //    We don't know the exercise index for `exerciseName` unless we scan `routineData`?
  //    Yes, we can find the index of `exerciseName` in `routineData[dayIndex]`.

  // Find exIndex
  const dayRoutine = routineData[dayIndex];
  if (!dayRoutine) return "";

  const exIndex = dayRoutine.exercises.findIndex(
    (e) => e.name === exerciseName,
  );
  if (exIndex === -1) return "";

  for (const date of dates) {
    const dayData = trainingHistory[date];
    if (dayData && dayData.weights) {
      // Look for any set of this exercise (0, 1, 2, 3...)
      // We want the MAX weight or the LAST set weight? Usually "working set" weight.
      // Let's take the first non-empty value we find (newest set).

      // Check sets 0 to 5
      for (let s = 0; s < 6; s++) {
        const key = `${dayIndex}-${exIndex}-${s}`;
        if (dayData.weights[key] && dayData.weights[key][user]) {
          return dayData.weights[key][user];
        }
      }
    }
  }
  return "";
}

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

  // Check Achievements on startup
  if (typeof checkAchievements === "function") checkAchievements();

  // --- POLLING FOR LIVE SYNC ---
  // Check cloud every 30 seconds
  setInterval(() => {
    if (!document.hidden) {
      loadFromCloud();
    }
  }, 30000);

  // Also check when tab becomes visible
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      loadFromCloud();
    }
  });

  // Global Event Listener for Weight Inputs (Delegation)
  document.body.addEventListener("input", (e) => {
    if (e.target.classList.contains("weight-input")) {
      const key = e.target.getAttribute("data-set-key");
      const user = e.target.getAttribute("data-user");
      const value = e.target.value;

      if (key && user) {
        if (!setWeights[key]) setWeights[key] = {};
        setWeights[key][user] = value;
        localStorage.setItem("gymRoutineWeights", JSON.stringify(setWeights));
      }
    }
  });
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
                        <span class="font-medium text-sm whitespace-normal break-words leading-tight md:w-auto">${
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

// --- WARMUP TIMER LOGIC ---
const warmupTimers = {}; // Stores intervals and state: { id: { time: N, interval: ID, isRunning: bool, original: N } }

function renderTimerCard(ex) {
  // Init state if new
  if (!warmupTimers[ex.id]) {
    warmupTimers[ex.id] = {
      time: ex.duration,
      original: ex.duration,
      isRunning: false,
      interval: null,
    };
  }

  const state = warmupTimers[ex.id];
  const mins = Math.floor(state.time / 60)
    .toString()
    .padStart(2, "0");
  const secs = (state.time % 60).toString().padStart(2, "0");
  const progressPercent =
    ((state.original - state.time) / state.original) * 100;

  const card = document.createElement("div");
  // Applying 'premium' styling similar to main cards but specific for timers
  let borderClass = `border-${ex.color}-500/30`;
  let bgClass = "bg-slate-900";
  let opacityClass = "";

  if (state.isSkipped) {
    borderClass = "border-slate-800";
    bgClass = "bg-slate-900/50";
    opacityClass = "opacity-50 grayscale";
  }

  card.className = `relative overflow-hidden ${bgClass} border ${borderClass} rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 group hover:border-${ex.color}-500/30 transition-all ${opacityClass}`;

  // Render HTML
  card.innerHTML = `
      <!-- Background Progress Bar (Subtle) -->
      ${
        !state.isSkipped
          ? `
      <div class="absolute bottom-0 left-0 h-1 bg-${ex.color}-900/30 w-full">
          <div class="h-full bg-${ex.color}-500 shadow-[0_0_10px_currentColor] transition-all duration-1000 ease-linear" style="width: ${progressPercent}%"></div>
      </div>`
          : ""
      }

      <!-- Icon & Info -->
      <div class="flex items-center gap-4 w-full md:w-auto">
          <div class="w-12 h-12 rounded-xl bg-${ex.color}-500/10 flex items-center justify-center border border-${ex.color}-500/20 group-hover:scale-110 transition-transform">
              <i data-lucide="${ex.icon}" class="w-6 h-6 text-${ex.color}-400"></i>
          </div>
          <div>
              <h4 class="font-bold text-slate-200 text-lg leading-tight md:mb-1">
                  ${ex.title}
                  ${state.isSkipped ? '<span class="text-xs text-red-400 ml-2 font-bold uppercase">(Saltado)</span>' : ""}
              </h4>
              <p class="text-xs text-slate-500 font-medium">${ex.desc}</p>
          </div>
      </div>

      <!-- Timer Controls -->
      <div class="flex items-center gap-4 ml-auto w-full md:w-auto justify-between md:justify-end bg-slate-950/50 p-2 rounded-xl border border-slate-800/50">
          <!-- Digital Display -->
          <div class="font-mono text-2xl font-bold tracking-widest ${state.isRunning ? `text-${ex.color}-400` : "text-slate-400"} w-24 text-center">
              ${mins}:${secs}
          </div>

          <div class="flex gap-2">
              <button onclick="toggleWarmupTimer('${ex.id}')" ${state.isSkipped ? "disabled" : ""} class="p-2 rounded-lg ${state.isRunning ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30" : "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"} transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                  <i data-lucide="${state.isRunning ? "pause" : "play"}" class="w-5 h-5 fill-current"></i>
              </button>
              <button onclick="resetWarmupTimer('${ex.id}')" class="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all active:scale-95">
                  <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
              </button>
               <button onclick="skipWarmupTimer('${ex.id}')" class="p-2 rounded-lg bg-red-900/20 text-red-400 hover:bg-red-900/40 transition-all active:scale-95" title="Saltar">
                  <i data-lucide="skip-forward" class="w-5 h-5"></i>
              </button>
          </div>
      </div>
  `;

  return card;
}

function toggleWarmupTimer(id) {
  const state = warmupTimers[id];
  if (!state) return;

  if (state.isRunning) {
    // Pause
    clearInterval(state.interval);
    state.isRunning = false;
  } else {
    // Start
    if (state.time <= 0) return; // Finished
    state.isRunning = true;
    state.interval = setInterval(() => {
      state.time--;
      if (state.time <= 0) {
        // Finished
        clearInterval(state.interval);
        state.isRunning = false;
        state.time = 0;
        // Play sound? or visual cue
        try {
          // Simple notification if possible
          showToast("check-circle", "text-emerald-400", "¡Tiempo completado!");
        } catch (e) {}
      }
      // Force Re-render of Content to update timers
      // Warning: This re-renders EVERYTHING which might be heavy.
      // Improvement: Just update the specific DOM elements?
      // Given the app structure, re-rendering renderContent() is the pattern,
      // but it might reset scroll or inputs if not careful.
      // HOWEVER, renderContent() re-builds the list.
      // Let's see if we can just update the specific timer card to avoid full re-render flicker.
      // Ideally we would select the card by ID.
      // For now, let's call renderContent() but be mindful of cursor focus.
      // Actually, re-rendering the whole content while a timer ticks every second is bad performance.
      // Let's do a targeted update.
      updateTimerDOM(id);
    }, 1000);
  }

  // Initial UI update for button state
  renderContent();
}

function resetWarmupTimer(id) {
  const state = warmupTimers[id];
  if (!state) return;
  clearInterval(state.interval);
  state.isRunning = false;
  state.isSkipped = false;
  state.time = state.original;
  renderContent();
}

function skipWarmupTimer(id) {
  const state = warmupTimers[id];
  if (!state) return;

  // Stop if running
  clearInterval(state.interval);
  state.isRunning = false;

  // Mark as skipped (toggle or set?)
  // If already skipped, maybe unskip? User just said "option to skip".
  // Let's assume toggle is better UI UX or just Set Skip.
  // Standard logic: if skipped, stay skipped. Reset clears it.
  state.isSkipped = true;

  renderContent();
}

// Helper to update DOM without full re-render
function updateTimerDOM(id) {
  // We need to find the specific elements.
  // Since we don't have unique IDs on elements easily without looking messy,
  // we called renderContent() on toggle which re-rendered the list.
  // If we want smooth ticking, we should just call renderContent() or
  // improve renderTimerCard to add unique IDs.
  // Let's modify renderContent() strategy later if needed.
  // For now, re-rendering `renderContent()` is safe enough as it's fast,
  // BUT it will kill input focus if user is typing weights elsewhere.
  // CRITICAL: DO NOT BREAK WEIGHT INPUTS.
  // Solution: Only re-render the Warmup Block? Or simpler:
  // Let's re-render content. If the user is typing weights, they are doing it AFTER warmup.
  renderContent();
}

window.toggleWarmupTimer = toggleWarmupTimer;
window.resetWarmupTimer = resetWarmupTimer;
window.skipWarmupTimer = skipWarmupTimer;

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

  // BLOQUE 0: ACTIVACIÓN (Interactive Timers)
  const warmupContainer = document.createElement("div");
  warmupContainer.className = "mb-8 space-y-4";

  // Header Bloque 0
  warmupContainer.innerHTML = `
      <div class="flex items-center gap-2 mb-4 px-1">
          <i data-lucide="flame" class="w-6 h-6 text-amber-500 animate-pulse"></i>
          <h3 class="text-xl font-black text-amber-500 tracking-tight">BLOQUE 0: ACTIVACIÓN</h3>
          <span class="text-xs text-amber-500/50 font-bold uppercase tracking-wider ml-auto">Pre-Workout</span>
      </div>
  `;

  // Define Warmup Exercises
  const warmupExercises = [
    {
      id: "bike",
      title: "Bicicleta Estática",
      icon: "bike",
      duration: 600, // 10 minutes
      desc: "Ritmo medio constante",
      color: "amber",
    },
    {
      id: "mobility",
      title: "Movilidad Articular",
      icon: "rotate-3d",
      duration: 180, // 3 minutes
      desc: "Hombros, caderas y muñecas",
      color: "orange",
    },
  ];

  warmupExercises.forEach((ex) => {
    warmupContainer.appendChild(renderTimerCard(ex));
  });

  listContainer.appendChild(warmupContainer);

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
      // SMART AUTOFILL LOGIC
      // 1. Check current set data (priority)
      // 2. If empty, check last recorded weight for this exercise (Smart Fill)

      let weightFacu =
        setWeights[setKey] && setWeights[setKey].facu
          ? setWeights[setKey].facu
          : "";

      let weightAlma =
        setWeights[setKey] && setWeights[setKey].alma
          ? setWeights[setKey].alma
          : "";

      // Auto-fill placeholders (or values if desired, user said "autofill" so likely values)
      // We will use PLACEHOLDER for now to be less invasive, or VALUE if user insists.
      // User said: "inputs deb weight ya vengan precargados". So VALUE.

      // Only autofill if strictly empty and we have history
      if (!weightFacu) {
        const last = getLastWeight(exercise.name, "facu", activeTab); // activeTab helps context matching if same exercise name used differently?
        // Actually exercise name is unique enough usually.
        if (last) weightFacu = last;
      }
      if (!weightAlma) {
        const last = getLastWeight(exercise.name, "alma", activeTab);
        if (last) weightAlma = last;
      }

      setButtonsHTML += `
          <div class="flex flex-col items-center gap-2 bg-white dark:bg-slate-950/30 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
              <span class="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Set ${
                s + 1
              }</span>
              <div class="flex gap-2">
                  <!-- Facu Column -->
                  <div class="flex flex-col items-center gap-1.5">
                    <button data-set-key="${setKey}" data-user="facu" data-exercise-name="${
                      exercise.name
                    }" data-rest-time="${restTime}"
                          class="set-btn w-10 h-10 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center border
                          ${
                            setData.facu
                              ? `bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20`
                              : `bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-blue-500/50 hover:text-blue-500`
                          }" title="Facu">
                          ${
                            setData.facu
                              ? '<i data-lucide="check" class="w-5 h-5"></i>'
                              : "F"
                          }
                      </button>
                      <input type="number" 
                             value="${weightFacu}" 
                             placeholder="kg" 
                             data-set-key="${setKey}" 
                             data-user="facu"
                             class="weight-input w-10 h-7 bg-slate-50 dark:bg-slate-900/50 text-center text-xs font-medium text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none p-0 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
                             onclick="event.stopPropagation()">
                  </div>
                  
                  <!-- Alma Column -->
                  <div class="flex flex-col items-center gap-1.5">
                    <button data-set-key="${setKey}" data-user="alma" data-exercise-name="${
                      exercise.name
                    }" data-rest-time="${restTime}"
                          class="set-btn w-10 h-10 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center border
                          ${
                            setData.alma
                              ? `bg-pink-600 text-white border-pink-500 shadow-md shadow-pink-500/20`
                              : `bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-pink-500/50 hover:text-pink-500`
                          }" title="Alma">
                          ${
                            setData.alma
                              ? '<i data-lucide="check" class="w-5 h-5"></i>'
                              : "A"
                          }
                      </button>
                      <input type="number" 
                             value="${weightAlma}" 
                             placeholder="kg" 
                             data-set-key="${setKey}" 
                             data-user="alma"
                             class="weight-input w-10 h-7 bg-slate-50 dark:bg-slate-900/50 text-center text-xs font-medium text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 outline-none p-0 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
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
  calculateUserStreak("facu");
  calculateUserStreak("alma");

  // Verificar oportunidades de rescate
  setTimeout(() => {
    checkForStreakRescue("facu");
    checkForStreakRescue("alma");
  }, 1000);

  // Update Header UI
  const container = document.getElementById("streak-display");
  if (container) {
    container.classList.remove("hidden");
    container.classList.add("flex", "gap-3", "justify-start", "flex-nowrap"); // Force horizontal layout
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
                <div class="flex items-center">
                    <i data-lucide="shield-check" class="w-3 h-3 ml-1 ${gamification.facu.freezes > 0 ? "text-cyan-400" : "text-slate-400 opacity-50"}"></i>
                    <span class="text-[10px] font-bold ml-0.5 ${gamification.facu.freezes > 0 ? "text-cyan-400" : "text-slate-400 opacity-50"}">${gamification.facu.freezes}</span>
                </div>
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
                <div class="flex items-center">
                    <i data-lucide="shield-check" class="w-3 h-3 ml-1 ${gamification.alma.freezes > 0 ? "text-cyan-400" : "text-slate-400 opacity-50"}"></i>
                    <span class="text-[10px] font-bold ml-0.5 ${gamification.alma.freezes > 0 ? "text-cyan-400" : "text-slate-400 opacity-50"}">${gamification.alma.freezes}</span>
                </div>
            </div>
        `;
    lucide.createIcons();
  }
}

function calculateUserStreak(user) {
  // Asegurar estructura de datos
  if (!gamification[user].frozenDays) gamification[user].frozenDays = [];
  if (!gamification[user].lastReset) gamification[user].lastReset = 0;

  // SCHEDULE de días requeridos por usuario
  // Facu: Lunes(1) a Viernes(5)
  // Alma: Lunes(1), Miércoles(3), Viernes(5)
  const SCHEDULE = {
    facu: [1, 2, 3, 4, 5], // L-M-M-J-V
    alma: [1, 3, 5], // L-M-V
  };

  // HOTFIX: Corregir freeze erróneo del 22/01 para Facu
  if (user === "facu") {
    const badDate = "2026-01-22";
    const idx = gamification.facu.frozenDays.indexOf(badDate);
    if (idx > -1) {
      gamification.facu.frozenDays.splice(idx, 1);
      // No guardamos inmediatamente para no saturar, se guardará al final si cambió algo más
      // o la próxima vez que se persista.
    }
  }

  // 1. NORMALIZAR FECHAS DEL HISTORIAL
  const userDates = new Set();
  const lastReset = gamification[user].lastReset || 0;

  Object.keys(trainingHistory).forEach((key) => {
    // Verificar que el usuario entrenó y no está borrado
    if (trainingHistory[key][user] && !trainingHistory[key].deleted) {
      // Parsear fecha
      const ymdRegex = /^\d{4}-\d{2}-\d{2}$/;
      let dateObj;
      let normalizedKey;

      if (ymdRegex.test(key)) {
        normalizedKey = key;
        const [y, m, d] = key.split("-").map(Number);
        dateObj = new Date(y, m - 1, d);
      } else {
        dateObj = new Date(key);
        if (!isNaN(dateObj)) {
          normalizedKey = getDateKey(dateObj);
        }
      }

      // Verificar que la fecha es posterior al último reset
      if (normalizedKey && dateObj && dateObj.getTime() >= lastReset) {
        userDates.add(normalizedKey);
      }
    }
  });

  // 2. INICIALIZAR CONTADOR
  let streak = 0;
  let stateChanged = false;

  // 3. VERIFICAR SI ENTRENÓ HOY
  const today = new Date();
  const todayKey = getDateKey(today);

  if (userDates.has(todayKey)) {
    streak++; // Si entrenó hoy, la racha empieza en 1
  }

  // 4. ITERAR HACIA ATRÁS (365 días máximo)
  for (let i = 1; i < 365; i++) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const key = getDateKey(d);
    const dayOfWeek = d.getDay(); // 0=Dom, 6=Sáb

    // 4a. SI ENTRENÓ: Sumar 1 a la racha
    if (userDates.has(key)) {
      streak++;
      continue;
    }

    // 4b. NO ENTRENÓ - Verificar si es fin de semana (Sáb/Dom)
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    if (isWeekend) {
      // ✅ FIN DE SEMANA: No rompe la racha, continuar
      continue;
    }

    // 4c. NO ENTRENÓ - Verificar si es día requerido según SCHEDULE
    const isRequired = SCHEDULE[user].includes(dayOfWeek);

    if (!isRequired) {
      // ✅ DÍA NO REQUERIDO para este usuario: No rompe la racha
      continue;
    }

    // 4d. ES DÍA REQUERIDO SIN ENTRENAMIENTO - Verificar freezes
    const alreadyFrozen = gamification[user].frozenDays.includes(key);

    if (alreadyFrozen) {
      // ✅ YA ESTABA CONGELADO: continuar sin romper racha
      continue;
    }

    // 4d. MODIFICADO: NO USAR FREEZE AUTOMÁTICAMENTE
    // Si llegamos acá, es un día requerido, no entrenado y no congelado.
    // La racha se rompe. El usuario deberá "rescatarla" manualmente si quiere.
    // La función checkForStreakRescue se encargará de ofrecer la opción.

    // ❌ ROMPER LA RACHA
    break;
  }

  // 5. GUARDAR RESULTADO
  gamification[user].streak = streak;

  if (stateChanged) {
    saveToCloud();
  }
}

// STREAK RESCUE LOGIC
let rescueTargetUser = null;
let rescueTargetDate = null;

function checkForStreakRescue(user) {
  // Solo si tiene freezes disponibles
  if (gamification[user].freezes <= 0) return;

  // Analizar si perdió la racha ayer o hoy por falta
  const today = new Date();
  const SCHEDULE = {
    facu: [1, 2, 3, 4, 5],
    alma: [1, 3, 5],
  };

  // Buscar un día perdido RECIENTE (ayer o hoy)
  for (let i = 1; i <= 1; i++) {
    // Solo miramos ayer (i=1)
    const d = new Date();
    d.setDate(today.getDate() - i);
    const key = getDateKey(d);
    const dayOfWeek = d.getDay();

    // Si ya entrenó o es finde o no es requerido, seguir
    // (Lógica simplificada, idealmente reutilizaríamos userDates pero acá lo hacemos rápido)
    // Para simplificar: asumimos que si la racha actual es baja (0 o 1) y hay un hueco ayer, ofrecemos.

    // Verificamos "alreadyFrozen"
    if (gamification[user].frozenDays.includes(key)) continue;

    const isRequired = SCHEDULE[user].includes(dayOfWeek);
    if (!isRequired) continue;

    // Verificar si entrenó: miramos trainingHistory
    // Esto es costoso iterar todo, mejor ver si NO entrenó
    // Reutilizamos la lógica de "si streak rompió ayer"

    let trained = false;
    Object.keys(trainingHistory).forEach((hKey) => {
      if (hKey === key || new Date(hKey).toDateString() === d.toDateString()) {
        if (trainingHistory[hKey][user] && !trainingHistory[hKey].deleted)
          trained = true;
      }
    });

    if (!trained) {
      // ¡CANDIDATO A RESCATE!
      // Mostramos modal
      openRescueModal(user, key);
      return; // Solo un rescate a la vez
    }
  }
}

function openRescueModal(user, dateKey) {
  // Evitar abrir si ya está abierto o si ya declinó (podríamos guardar estado de sesión)
  if (!document.getElementById("rescue-modal").classList.contains("hidden"))
    return;

  // Si el usuario ya dijo "no" en esta sesión, no molestar (opcional, por ahora molestamos)

  rescueTargetUser = user;
  rescueTargetDate = dateKey;

  const modal = document.getElementById("rescue-modal");
  const content = document.getElementById("rescue-modal-content");
  const dateSpan = document.getElementById("rescue-date");
  const streakSpan = document.getElementById("rescue-streak-val");
  const remainingSpan = document.getElementById("rescue-remaining");

  // Formatear fecha
  const parts = dateKey.split("-");
  const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
  const options = { weekday: "long", day: "numeric", month: "long" };
  dateSpan.innerText = dateObj.toLocaleDateString("es-AR", options);

  // Deducir cuánto salvaría (Racha potencial)
  // Esto es complejo calcular sin simular. Pondremos "tu racha" genérico o el valor actual + lo perdido.
  // Simplificación: Mostramos "tu racha".
  streakSpan.innerText = "tu racha";

  remainingSpan.innerText = gamification[user].freezes;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    content.classList.remove("scale-95", "opacity-0");
    content.classList.add("scale-100", "opacity-100");
  }, 10);

  // Event listener para confirmar
  const btn = document.getElementById("btn-confirm-rescue");
  btn.onclick = confirmRescue;
}

function closeRescueModal() {
  const modal = document.getElementById("rescue-modal");
  const content = document.getElementById("rescue-modal-content");

  content.classList.remove("scale-100", "opacity-100");
  content.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    rescueTargetUser = null;
    rescueTargetDate = null;
  }, 300);
}

function confirmRescue() {
  if (!rescueTargetUser || !rescueTargetDate) return;

  // 1. Descontar Freeze
  if (gamification[rescueTargetUser].freezes > 0) {
    gamification[rescueTargetUser].freezes--;

    // 2. Agregar a FrozenDays
    gamification[rescueTargetUser].frozenDays.push(rescueTargetDate);

    // 3. Guardar, Cerrar y Actualizar
    saveToCloud();

    showToast("shield-check", "text-cyan-400", "¡Racha salvada con éxito!");
    closeRescueModal();
    updateGamificationUI(); // Esto recalculará la racha considerando el nuevo frozen day
  }
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

// --- MANUAL HISTORICAL DATA ENTRY ---
// Use this function from the browser console to add past training days
// It uses the weights you currently have in the routine inputs!
// Example: addHistoricalTraining("2026-01-14", "both")
// Parameters:
//   date: "YYYY-MM-DD" format
//   who: "facu", "alma", or "both"
function addHistoricalTraining(date, who) {
  if (!date || !who) {
    console.error(
      "Usage: addHistoricalTraining('2026-01-14', 'facu'|'alma'|'both')",
    );
    return;
  }

  // Get current weights from localStorage (the ones you've filled in today)
  const currentWeights =
    JSON.parse(localStorage.getItem("gymRoutineWeights")) || {};

  if (Object.keys(currentWeights).length === 0) {
    console.warn(
      "⚠️ No hay pesos guardados. Primero cargá tus pesos en la rutina de hoy y volvé a ejecutar.",
    );
    return;
  }

  if (!trainingHistory[date]) {
    trainingHistory[date] = { alma: false, facu: false, weights: {} };
  }

  if (who === "facu" || who === "both") {
    trainingHistory[date].facu = true;
  }
  if (who === "alma" || who === "both") {
    trainingHistory[date].alma = true;
  }

  // Copy current weights to this historical date
  Object.keys(currentWeights).forEach((key) => {
    if (!trainingHistory[date].weights[key]) {
      trainingHistory[date].weights[key] = {};
    }

    if ((who === "facu" || who === "both") && currentWeights[key].facu) {
      trainingHistory[date].weights[key].facu = currentWeights[key].facu;
    }
    if ((who === "alma" || who === "both") && currentWeights[key].alma) {
      trainingHistory[date].weights[key].alma = currentWeights[key].alma;
    }
  });

  localStorage.setItem("gymTrainingHistory", JSON.stringify(trainingHistory));

  // Calculate volume for confirmation
  let volFacu = 0,
    volAlma = 0;
  Object.values(trainingHistory[date].weights).forEach((w) => {
    volFacu += (parseInt(w.facu) || 0) * 10;
    volAlma += (parseInt(w.alma) || 0) * 10;
  });

  const volMsg =
    who === "both"
      ? `Facu: ${volFacu}kg, Alma: ${volAlma}kg`
      : who === "facu"
        ? `${volFacu}kg`
        : `${volAlma}kg`;
  console.log(
    `✅ Entrenamiento añadido: ${date} (${who}) - Volumen: ${volMsg}`,
  );

  // Refresh UI if on relevant views
  if (currentView === "history") renderCalendar();
  if (currentView === "stats") renderCharts();
}

// Bulk add helper - adds multiple days at once using current weights
// Example: addBulkHistory(["2026-01-08", "2026-01-09", "2026-01-12"], "both")
function addBulkHistory(dates, who) {
  if (!Array.isArray(dates)) {
    console.error(
      "Usage: addBulkHistory(['2026-01-08', '2026-01-09'], 'both')",
    );
    return;
  }
  dates.forEach((date) => addHistoricalTraining(date, who));
  console.log(`\n✅ ${dates.length} entrenamientos añadidos para ${who}`);
}

window.addHistoricalTraining = addHistoricalTraining;
window.addBulkHistory = addBulkHistory;

// Init App

// --- ACHIEVEMENTS RENDER & LOGIC ---

let currentAchievementFilter = "Todos";

function filterAchievements(tier) {
  currentAchievementFilter = tier;

  // Update Buttons UI
  const buttons = document.querySelectorAll("#achievements-filter-tabs button");
  buttons.forEach((btn) => {
    if (btn.textContent.trim() === tier) {
      btn.className =
        "px-4 py-2 rounded-xl bg-slate-800 text-white border border-slate-700 font-bold text-sm whitespace-nowrap active-filter shadow-md shadow-slate-900/50";
      // Tint based on tier
      if (tier === "Común") btn.classList.add("text-slate-200");
      if (tier === "Raro")
        btn.classList.add("text-blue-400", "border-blue-500/30");
      if (tier === "Épico")
        btn.classList.add("text-purple-400", "border-purple-500/30");
      if (tier === "Legendario")
        btn.classList.add("text-amber-400", "border-amber-500/30");
    } else {
      btn.className =
        "px-4 py-2 rounded-xl bg-slate-900 text-slate-500 border border-slate-800 font-medium text-sm whitespace-nowrap hover:bg-slate-800 transition-colors";
    }
  });

  renderAchievements();
}

function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;
  container.innerHTML = "";

  const countBadge = document.getElementById("total-achievements-count");

  // Get combined unlocked achievements for counting
  const unlockedFacu = gamification.facu.achievements || [];
  const unlockedAlma = gamification.alma.achievements || [];
  const allUnlockedIDs = new Set([...unlockedFacu, ...unlockedAlma]);

  if (countBadge) {
    countBadge.textContent = `${allUnlockedIDs.size} / ${achievementsConfig.length}`;
  }

  // Filter
  let filtered = achievementsConfig;
  if (currentAchievementFilter !== "Todos") {
    filtered = achievementsConfig.filter(
      (a) => a.tier === currentAchievementFilter,
    );
  }

  filtered.forEach((ach) => {
    // Check status
    const facuHas = unlockedFacu.includes(ach.id);
    const almaHas = unlockedAlma.includes(ach.id);
    const isUnlocked = facuHas || almaHas;

    // Define Styles based on Tier
    let borderClass = "border-slate-800";
    let bgClass = "bg-slate-900";
    let iconColor = "text-slate-600";
    let opacity = "opacity-50 grayscale"; // Locked state default

    if (isUnlocked) {
      opacity = "opacity-100";
      switch (ach.tier) {
        case "Común":
          borderClass = "border-slate-600";
          iconColor = "text-slate-400";
          break;
        case "Raro":
          borderClass = "border-blue-500/50";
          bgClass = "bg-blue-900/10";
          iconColor = "text-blue-400";
          break;
        case "Épico":
          borderClass = "border-purple-500/50";
          bgClass = "bg-purple-900/10";
          iconColor = "text-purple-400";
          break;
        case "Legendario":
          borderClass = "border-amber-500/50";
          bgClass = "bg-amber-900/10";
          iconColor = "text-amber-400";
          break;
      }
    }

    // Determine badging who has it
    let whoHasHTML = "";
    if (isUnlocked) {
      whoHasHTML = '<div class="flex items-center gap-1 mt-3 justify-center">';
      if (facuHas)
        whoHasHTML += '<span title="Facu lo tiene" class="text-xs">🙎🏽‍♂️</span>';
      if (almaHas)
        whoHasHTML += '<span title="Alma lo tiene" class="text-xs">🙎🏻‍♀️</span>';
      whoHasHTML += "</div>";
    } else {
      whoHasHTML = '<div class="h-4 mt-3 opacity-0">.</div>'; // Spacer
    }

    const html = `
      <div class="relative p-4 rounded-2xl border ${borderClass} ${bgClass} flex flex-col items-center text-center transition-all duration-300 ${opacity} hover:scale-[1.02]">
          ${isUnlocked ? `<div class="absolute top-2 right-2 text-[10px] uppercase font-bold tracking-wider ${iconColor}">${ach.tier}</div>` : ""}
          
          <div class="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center mb-3 border border-slate-800">
             <i data-lucide="${ach.icon}" class="w-6 h-6 ${isUnlocked ? iconColor : "text-slate-700"}"></i>
          </div>
          
          <h3 class="font-bold text-white text-sm mb-1 line-clamp-1" title="${ach.title}">${ach.title}</h3>
          <p class="text-xs text-slate-500 line-clamp-2 leading-tight">${ach.desc}</p>
          
          ${whoHasHTML}
      </div>
    `;
    container.innerHTML += html;
  });

  lucide.createIcons();
}

window.filterAchievements = filterAchievements;
window.renderAchievements = renderAchievements;

// Init App (Modified)
document.addEventListener("DOMContentLoaded", () => {
  // Assuming init() is defined elsewhere or we just attach handlers here
  // If init exists, it will run.

  // We add the click handler for "Logros" tab to render achievements on demand
  const achievementsBtn = Array.from(document.querySelectorAll("button")).find(
    (b) => b.textContent.includes("Logros"),
  );
  if (achievementsBtn) {
    achievementsBtn.addEventListener("click", () => {
      setTimeout(renderAchievements, 100); // Small delay to ensure view visible
    });
  }
});

document.addEventListener("DOMContentLoaded", init);

// --- FIX V6: CORRECT STREAK (SAFE MODE) ---
setTimeout(() => {
  try {
    console.log("🛡️ Running Fix V6...");
    const interval = setInterval(() => {
      attemptFix();
    }, 3000); // Check every 3 seconds

    // Stop checking after 15 seconds
    setTimeout(() => clearInterval(interval), 15000);
  } catch (e) {
    console.error("Fix v6 error:", e);
  }
}, 2000);

// --- REAL WEATHER IMPLEMENTATION ---

function initWeather() {
  const weatherElements = {
    headerTemp: document.getElementById("weather-temp-header"),
    sidebarTemp: document.getElementById("sidebar-temp"),
    headerContainer: document.getElementById("header-weather"),
    sidebarContainer: document.getElementById("sidebar-weather"),
  };

  if (!navigator.geolocation) {
    console.log("Geolocalización no soportada por el navegador.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude, weatherElements);
    },
    (error) => {
      console.warn("Permiso de ubicación denegado o error:", error);
      // Fallback opcional o dejar oculto
    },
    { timeout: 10000 },
  );
}

async function fetchWeather(lat, lon, elements) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
    );

    if (!response.ok) throw new Error("Error en API de clima");

    const data = await response.json();
    const temp = Math.round(data.current_weather.temperature);

    updateWeatherUI(`${temp}°C`, elements);
    console.log(`🌤️ Clima actualizado: ${temp}°C (${lat}, ${lon})`);
  } catch (error) {
    console.error("Error obteniendo datos del clima:", error);
  }
}

function updateWeatherUI(tempText, elements) {
  // Actualizar Header
  if (elements.headerTemp) elements.headerTemp.textContent = tempText;
  if (elements.headerContainer) {
    elements.headerContainer.classList.remove("hidden");
    elements.headerContainer.classList.add("flex");
  }

  // Actualizar Sidebar
  if (elements.sidebarTemp) elements.sidebarTemp.textContent = tempText;
  if (elements.sidebarContainer) {
    elements.sidebarContainer.classList.remove("hidden");
    elements.sidebarContainer.classList.add("flex");
  }
}

// Iniciar clima al cargar
document.addEventListener("DOMContentLoaded", initWeather);
