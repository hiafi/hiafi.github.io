// --- Marker positions ---
var M_A = { x: 250, y: 130 };
var M_B = { x: 400, y: 250 };
var M_C = { x: 250, y: 380 };
var M_D = { x: 100, y: 250 };
var M_1 = { x: 100, y: 130 };
var M_2 = { x: 400, y: 130 };
var M_3 = { x: 400, y: 380 };
var M_4 = { x: 100, y: 380 };

var TETHER_COLOR = {r: 255, g:50, b:50, a:1.0}
var TOWER_LINE_COLOR = {r: 255, g:255, b:255, a:1.0}

// --- Spot registry ---
// North edge — left and right of markers 1 and 2
var SPOT_NORTH_1L = { x: M_1.x - 25, y: M_1.y - 80 };
var SPOT_NORTH_1R = { x: M_1.x + 25, y: M_1.y - 80 };
var SPOT_NORTH_2L = { x: M_2.x - 25, y: M_2.y - 80 };
var SPOT_NORTH_2R = { x: M_2.x + 25, y: M_2.y - 80 };

// South edge — left and right of markers 3 and 4
var SPOT_SOUTH_3L = { x: M_3.x - 25, y: M_3.y + 80 };
var SPOT_SOUTH_3R = { x: M_3.x + 25, y: M_3.y + 80 };
var SPOT_SOUTH_4L = { x: M_4.x - 25, y: M_4.y + 80 };
var SPOT_SOUTH_4R = { x: M_4.x + 25, y: M_4.y + 80 };

// Corners of marker 1
var SPOT_1_NW = { x: M_1.x - 25, y: M_1.y - 25 };
var SPOT_1_NE = { x: M_1.x + 25, y: M_1.y - 25 };
var SPOT_1_SW = { x: M_1.x - 25, y: M_1.y + 25 };
var SPOT_1_SE = { x: M_1.x + 25, y: M_1.y + 25 };

// Corners of marker 2
var SPOT_2_NW = { x: M_2.x - 25, y: M_2.y - 25 };
var SPOT_2_NE = { x: M_2.x + 25, y: M_2.y - 25 };
var SPOT_2_SW = { x: M_2.x - 25, y: M_2.y + 25 };
var SPOT_2_SE = { x: M_2.x + 25, y: M_2.y + 25 };

// Corners of marker 3
var SPOT_3_NW = { x: M_3.x - 25, y: M_3.y - 25 };
var SPOT_3_NE = { x: M_3.x + 25, y: M_3.y - 25 };
var SPOT_3_SW = { x: M_3.x - 25, y: M_3.y + 25 };
var SPOT_3_SE = { x: M_3.x + 25, y: M_3.y + 25 };

// Corners of marker 4
var SPOT_4_NW = { x: M_4.x - 25, y: M_4.y - 25 };
var SPOT_4_NE = { x: M_4.x + 25, y: M_4.y - 25 };
var SPOT_4_SW = { x: M_4.x - 25, y: M_4.y + 25 };
var SPOT_4_SE = { x: M_4.x + 25, y: M_4.y + 25 };

// Tower spots — each marker has two, pointing inward toward the arena center
var SPOT_TOWER_1E = { x: M_1.x + 25, y: M_1.y };
var SPOT_TOWER_1S = { x: M_1.x,      y: M_1.y + 25 };
var SPOT_TOWER_2S = { x: M_2.x,      y: M_2.y + 25 };
var SPOT_TOWER_2W = { x: M_2.x - 25, y: M_2.y };
var SPOT_TOWER_3N = { x: M_3.x,      y: M_3.y - 25 };
var SPOT_TOWER_3W = { x: M_3.x - 25, y: M_3.y };
var SPOT_TOWER_4N = { x: M_4.x,      y: M_4.y - 25 };
var SPOT_TOWER_4E = { x: M_4.x + 25, y: M_4.y };

// Bait spots near D
var SPOT_BAIT_D_N  = { x: M_D.x + 30,      y: M_D.y - 40 };
var SPOT_BAIT_D_S  = { x: M_D.x + 30,      y: M_D.y + 40 };
var SPOT_BAIT_D_EN = { x: M_D.x + 60, y: M_D.y - 25 };
var SPOT_BAIT_D_ES = { x: M_D.x + 60, y: M_D.y + 25 };

// Bait spots near B — horizontally mirrored from D
var SPOT_BAIT_B_N  = { x: M_B.x - 30,      y: M_B.y - 40 };
var SPOT_BAIT_B_S  = { x: M_B.x - 30,      y: M_B.y + 40 };
var SPOT_BAIT_B_WN = { x: M_B.x - 60, y: M_B.y - 25 };
var SPOT_BAIT_B_WS = { x: M_B.x - 60, y: M_B.y + 25 };

// --- Portal positions ---
var PORTAL_WEST_N = { x: 0, y: 50 };
var PORTAL_WEST_S = { x: 0, y: 450 };
var PORTAL_EAST_N = { x: 500, y: 200 };
var PORTAL_EAST_S = { x: 500, y: 300 };

// --- All 4 tower drawings (shown on every node) ---
var ALL_TOWER_DRAWINGS = [
  { type: 'circle',      center: M_1, radius: 30 },
  { type: 'line',        points: [{x: M_1.x + 10, y: M_1.y}, {x: M_1.x + 10, y: M_1.y - 20}], color: TOWER_LINE_COLOR },
  { type: 'line',        points: [{x: M_1.x - 10, y: M_1.y}, {x: M_1.x - 10, y: M_1.y - 20}], color: TOWER_LINE_COLOR },
  { type: 'circle',      center: M_2, radius: 30 },
  { type: 'line',        points: [{x: M_2.x + 10, y: M_2.y}, {x: M_2.x + 10, y: M_2.y - 20}], color: TOWER_LINE_COLOR },
  { type: 'line',        points: [{x: M_2.x - 10, y: M_2.y}, {x: M_2.x - 10, y: M_2.y - 20}], color: TOWER_LINE_COLOR },
  { type: 'circle',      center: M_3, radius: 30 },
  { type: 'line',        points: [{x: M_3.x + 10, y: M_3.y}, {x: M_3.x + 10, y: M_3.y - 20}], color: TOWER_LINE_COLOR },
  { type: 'line',        points: [{x: M_3.x - 10, y: M_3.y}, {x: M_3.x - 10, y: M_3.y - 20}], color: TOWER_LINE_COLOR },
  { type: 'circle',      center: M_4, radius: 30 },
  { type: 'line',        points: [{x: M_4.x + 10, y: M_4.y}, {x: M_4.x + 10, y: M_4.y - 20}], color: TOWER_LINE_COLOR },
  { type: 'line',        points: [{x: M_4.x - 10, y: M_4.y}, {x: M_4.x - 10, y: M_4.y - 20}], color: TOWER_LINE_COLOR },
];

// --- Tower spot lists ---
var TOWER_1_SPOTS = [SPOT_TOWER_1E, SPOT_TOWER_1S]; // [0]=East, [1]=South
var TOWER_2_SPOTS = [SPOT_TOWER_2S, SPOT_TOWER_2W]; // [0]=South, [1]=West
var TOWER_3_SPOTS = [SPOT_TOWER_3N, SPOT_TOWER_3W]; // [0]=North, [1]=West
var TOWER_4_SPOTS = [SPOT_TOWER_4N, SPOT_TOWER_4E]; // [0]=North, [1]=East

var M11_ARENA_SPLIT = {
  id: 'm11-arena-split',
  label: 'M11 — Arena Split',
  arenaImage: 'assets/M11-arena-split.png',
  markers: {
    A: M_A,
    B: M_B,
    C: M_C,
    D: M_D,
    1: M_1,
    2: M_2,
    3: M_3,
    4: M_4,
  },
  nodes: [
    // --- Tower 1 (T1, R1 — West side) ---
    // Same-side = West portal → East spot [0]. Opposite/none → South spot [1].
    { id: 'tower-1-none',   label: 'Tower', question: 'Towers: No tether — where do you go?',                 spots: TOWER_1_SPOTS, answer: 1, validRoles: ['T1', 'R1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS },
    { id: 'tower-1-east-n', label: 'Tower', question: 'Towers: East portal, north tether — where do you go?', spots: TOWER_1_SPOTS, answer: 1, validRoles: ['T1', 'R1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR  }]) },
    { id: 'tower-1-east-s', label: 'Tower', question: 'Towers: East portal, south tether — where do you go?', spots: TOWER_1_SPOTS, answer: 1, validRoles: ['T1', 'R1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }]) },
    { id: 'tower-1-west-n', label: 'Tower', question: 'Towers: West portal, north tether — where do you go?', spots: TOWER_1_SPOTS, answer: 0, validRoles: ['T1', 'R1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }]) },
    { id: 'tower-1-west-s', label: 'Tower', question: 'Towers: West portal, south tether — where do you go?', spots: TOWER_1_SPOTS, answer: 0, validRoles: ['T1', 'R1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }]) },

    // --- Tower 2 (T2, R2 — East side) ---
    // Same-side = East portal → West spot [1]. Opposite/none → South spot [0].
    { id: 'tower-2-none',   label: 'Tower', question: 'Towers: No tether — where do you go?',                 spots: TOWER_2_SPOTS, answer: 0, validRoles: ['T2', 'R2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS },
    { id: 'tower-2-east-n', label: 'Tower', question: 'Towers: East portal, north tether — where do you go?', spots: TOWER_2_SPOTS, answer: 1, validRoles: ['T2', 'R2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }]) },
    { id: 'tower-2-east-s', label: 'Tower', question: 'Towers: East portal, south tether — where do you go?', spots: TOWER_2_SPOTS, answer: 1, validRoles: ['T2', 'R2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }]) },
    { id: 'tower-2-west-n', label: 'Tower', question: 'Towers: West portal, north tether — where do you go?', spots: TOWER_2_SPOTS, answer: 0, validRoles: ['T2', 'R2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }]) },
    { id: 'tower-2-west-s', label: 'Tower', question: 'Towers: West portal, south tether — where do you go?', spots: TOWER_2_SPOTS, answer: 0, validRoles: ['T2', 'R2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }]) },

    // --- Tower 3 (M2, H2 — East side) ---
    // Same-side = East portal → West spot [1]. Opposite/none → North spot [0].
    { id: 'tower-3-none',   label: 'Tower', question: 'Towers: No tether — where do you go?',                 spots: TOWER_3_SPOTS, answer: 0, validRoles: ['M2', 'H2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS },
    { id: 'tower-3-east-n', label: 'Tower', question: 'Towers: East portal, north tether — where do you go?', spots: TOWER_3_SPOTS, answer: 1, validRoles: ['M2', 'H2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }]) },
    { id: 'tower-3-east-s', label: 'Tower', question: 'Towers: East portal, south tether — where do you go?', spots: TOWER_3_SPOTS, answer: 1, validRoles: ['M2', 'H2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }]) },
    { id: 'tower-3-west-n', label: 'Tower', question: 'Towers: West portal, north tether — where do you go?', spots: TOWER_3_SPOTS, answer: 0, validRoles: ['M2', 'H2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }]) },
    { id: 'tower-3-west-s', label: 'Tower', question: 'Towers: West portal, south tether — where do you go?', spots: TOWER_3_SPOTS, answer: 0, validRoles: ['M2', 'H2'], isStart: true, children: [], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }]) },

    // --- Tower 4 (M1, H1 — West side) ---
    // Same-side = West portal → East spot [1]. Opposite/none → North spot [0].
    { id: 'tower-4-none',   label: 'Tower', question: 'Towers: No tether — where do you go?',                 spots: TOWER_4_SPOTS, answer: 0, validRoles: ['M1', 'H1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS },
    { id: 'tower-4-east-n', label: 'Tower', question: 'Towers: East portal, north tether — where do you go?', spots: TOWER_4_SPOTS, answer: 0, validRoles: ['M1', 'H1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }]) },
    { id: 'tower-4-east-s', label: 'Tower', question: 'Towers: East portal, south tether — where do you go?', spots: TOWER_4_SPOTS, answer: 0, validRoles: ['M1', 'H1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }]) },
    { id: 'tower-4-west-n', label: 'Tower', question: 'Towers: West portal, north tether — where do you go?', spots: TOWER_4_SPOTS, answer: 1, validRoles: ['M1', 'H1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }]) },
    { id: 'tower-4-west-s', label: 'Tower', question: 'Towers: West portal, south tether — where do you go?', spots: TOWER_4_SPOTS, answer: 1, validRoles: ['M1', 'H1'], isStart: true, children: [], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }]) },
  ],
};
