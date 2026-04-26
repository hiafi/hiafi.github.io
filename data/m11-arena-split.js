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
var DANGER_COLOR = {r: 255, g:80, b:0, a:0.85}

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

// --- All 4 tower drawings (shown on every tower node) ---
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

// Danger zone lines — thick vertical lines marking the UNSAFE sub-side within each platform
// West platform: spots are at x=75 (west) and x=125 (east); boundary ~x=100
var DANGER_WEST_WEST  = { type: 'line', points: [{x:50,  y:0}, {x:50,  y:500}], color: DANGER_COLOR, width: 10 };
var DANGER_WEST_EAST  = { type: 'line', points: [{x:150, y:0}, {x:150, y:500}], color: DANGER_COLOR, width: 10 };
// East platform: spots are at x=375 (west) and x=425 (east); boundary ~x=400
var DANGER_EAST_WEST  = { type: 'line', points: [{x:350, y:0}, {x:350, y:500}], color: DANGER_COLOR, width: 10 };
var DANGER_EAST_EAST  = { type: 'line', points: [{x:450, y:0}, {x:450, y:500}], color: DANGER_COLOR, width: 10 };

// Edge spot lists — all 6 spots near each marker shown as clickable options (red herrings included)
// Index layout: [0]=edge-L, [1]=edge-R, [2]=NW, [3]=NE, [4]=SW, [5]=SE
// Tether answer uses edge spots (0 or 1); non-tether answer uses corner spots (2/3 north, 4/5 south)
var EDGE_W_N_SPOTS = [SPOT_NORTH_1L, SPOT_NORTH_1R, SPOT_1_NW, SPOT_1_NE, SPOT_1_SW, SPOT_1_SE];
var EDGE_W_S_SPOTS = [SPOT_SOUTH_4L, SPOT_SOUTH_4R, SPOT_4_NW, SPOT_4_NE, SPOT_4_SW, SPOT_4_SE];
var EDGE_E_N_SPOTS = [SPOT_NORTH_2L, SPOT_NORTH_2R, SPOT_2_NW, SPOT_2_NE, SPOT_2_SW, SPOT_2_SE];
var EDGE_E_S_SPOTS = [SPOT_SOUTH_3L, SPOT_SOUTH_3R, SPOT_3_NW, SPOT_3_NE, SPOT_3_SW, SPOT_3_SE];

// Bait spot list — index is used as answer on bait nodes
var ALL_BAIT_SPOTS = [
  SPOT_BAIT_D_N,   // 0 — tether opposite of east-s portal
  SPOT_BAIT_D_S,   // 1 — tether opposite of east-n portal
  SPOT_BAIT_D_EN,  // 2 — non-tether at tower 4
  SPOT_BAIT_D_ES,  // 3 — non-tether at tower 1
  SPOT_BAIT_B_N,   // 4 — tether opposite of west-s portal
  SPOT_BAIT_B_S,   // 5 — tether opposite of west-n portal
  SPOT_BAIT_B_WN,  // 6 — non-tether at tower 3
  SPOT_BAIT_B_WS,  // 7 — non-tether at tower 2
];

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
    // =====================================================================
    // TOWER PHASE — pick a spot in your assigned tower
    // =====================================================================

    // --- Tower 1 (T1, R1 — West side) ---
    // Same-side = West portal → East spot [0]. Opposite/none → South spot [1].
    { id: 'tower-1-none',   label: 'Tower', question: 'Towers: No tether — where do you go?',                 spots: TOWER_1_SPOTS, answer: 1, validRoles: ['T1', 'R1'], isStart: true, children: ['bait-1-none'],   playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS },
    { id: 'tower-1-east-n', label: 'Tower', question: 'Towers: East portal, north tether — where do you go?', spots: TOWER_1_SPOTS, answer: 1, validRoles: ['T1', 'R1'], isStart: true, children: ['bait-1-east-n'], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }]) },
    { id: 'tower-1-east-s', label: 'Tower', question: 'Towers: East portal, south tether — where do you go?', spots: TOWER_1_SPOTS, answer: 1, validRoles: ['T1', 'R1'], isStart: true, children: ['bait-1-east-s'], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }]) },
    { id: 'tower-1-west-n', label: 'Tower', question: 'Towers: West portal, north tether — where do you go?', spots: TOWER_1_SPOTS, answer: 0, validRoles: ['T1', 'R1'], isStart: true, children: ['bait-1-west-n'], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }]) },
    { id: 'tower-1-west-s', label: 'Tower', question: 'Towers: West portal, south tether — where do you go?', spots: TOWER_1_SPOTS, answer: 0, validRoles: ['T1', 'R1'], isStart: true, children: ['bait-1-west-s'], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }]) },

    // --- Tower 2 (T2, R2 — East side) ---
    // Same-side = East portal → West spot [1]. Opposite/none → South spot [0].
    { id: 'tower-2-none',   label: 'Tower', question: 'Towers: No tether — where do you go?',                 spots: TOWER_2_SPOTS, answer: 0, validRoles: ['T2', 'R2'], isStart: true, children: ['bait-2-none'],   playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS },
    { id: 'tower-2-east-n', label: 'Tower', question: 'Towers: East portal, north tether — where do you go?', spots: TOWER_2_SPOTS, answer: 1, validRoles: ['T2', 'R2'], isStart: true, children: ['bait-2-east-n'], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }]) },
    { id: 'tower-2-east-s', label: 'Tower', question: 'Towers: East portal, south tether — where do you go?', spots: TOWER_2_SPOTS, answer: 1, validRoles: ['T2', 'R2'], isStart: true, children: ['bait-2-east-s'], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }]) },
    { id: 'tower-2-west-n', label: 'Tower', question: 'Towers: West portal, north tether — where do you go?', spots: TOWER_2_SPOTS, answer: 0, validRoles: ['T2', 'R2'], isStart: true, children: ['bait-2-west-n'], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }]) },
    { id: 'tower-2-west-s', label: 'Tower', question: 'Towers: West portal, south tether — where do you go?', spots: TOWER_2_SPOTS, answer: 0, validRoles: ['T2', 'R2'], isStart: true, children: ['bait-2-west-s'], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }]) },

    // --- Tower 3 (M2, H2 — East side) ---
    // Same-side = East portal → West spot [1]. Opposite/none → North spot [0].
    { id: 'tower-3-none',   label: 'Tower', question: 'Towers: No tether — where do you go?',                 spots: TOWER_3_SPOTS, answer: 0, validRoles: ['M2', 'H2'], isStart: true, children: ['bait-3-none'],   playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS },
    { id: 'tower-3-east-n', label: 'Tower', question: 'Towers: East portal, north tether — where do you go?', spots: TOWER_3_SPOTS, answer: 1, validRoles: ['M2', 'H2'], isStart: true, children: ['bait-3-east-n'], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }]) },
    { id: 'tower-3-east-s', label: 'Tower', question: 'Towers: East portal, south tether — where do you go?', spots: TOWER_3_SPOTS, answer: 1, validRoles: ['M2', 'H2'], isStart: true, children: ['bait-3-east-s'], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }]) },
    { id: 'tower-3-west-n', label: 'Tower', question: 'Towers: West portal, north tether — where do you go?', spots: TOWER_3_SPOTS, answer: 0, validRoles: ['M2', 'H2'], isStart: true, children: ['bait-3-west-n'], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }]) },
    { id: 'tower-3-west-s', label: 'Tower', question: 'Towers: West portal, south tether — where do you go?', spots: TOWER_3_SPOTS, answer: 0, validRoles: ['M2', 'H2'], isStart: true, children: ['bait-3-west-s'], playerLoc: M_B, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }]) },

    // --- Tower 4 (M1, H1 — West side) ---
    // Same-side = West portal → East spot [1]. Opposite/none → North spot [0].
    { id: 'tower-4-none',   label: 'Tower', question: 'Towers: No tether — where do you go?',                 spots: TOWER_4_SPOTS, answer: 0, validRoles: ['M1', 'H1'], isStart: true, children: ['bait-4-none'],   playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS },
    { id: 'tower-4-east-n', label: 'Tower', question: 'Towers: East portal, north tether — where do you go?', spots: TOWER_4_SPOTS, answer: 0, validRoles: ['M1', 'H1'], isStart: true, children: ['bait-4-east-n'], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }]) },
    { id: 'tower-4-east-s', label: 'Tower', question: 'Towers: East portal, south tether — where do you go?', spots: TOWER_4_SPOTS, answer: 0, validRoles: ['M1', 'H1'], isStart: true, children: ['bait-4-east-s'], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }]) },
    { id: 'tower-4-west-n', label: 'Tower', question: 'Towers: West portal, north tether — where do you go?', spots: TOWER_4_SPOTS, answer: 1, validRoles: ['M1', 'H1'], isStart: true, children: ['bait-4-west-n'], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }]) },
    { id: 'tower-4-west-s', label: 'Tower', question: 'Towers: West portal, south tether — where do you go?', spots: TOWER_4_SPOTS, answer: 1, validRoles: ['M1', 'H1'], isStart: true, children: ['bait-4-west-s'], playerLoc: M_D, additionalDrawings: ALL_TOWER_DRAWINGS.concat([{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }]) },

    // =====================================================================
    // BAIT PHASE — stand in your bait spot after the launch
    // playerLoc reflects which platform you landed on after the tower launch
    // Tether line is still shown (same portal connection as tower phase)
    // =====================================================================

    // --- Bait: Tower 1 (T1, R1) ---
    // none/east tethers: South spot → stays West platform (near D)
    // west tethers: East spot → crosses to East platform (near B)
    { id: 'bait-1-none',   label: 'Bait', question: 'Bait: No tether — where do you stand?',                 spots: ALL_BAIT_SPOTS, answer: 3, validRoles: ['T1', 'R1'], isStart: false, children: ['edge-west-south-notether-west', 'edge-west-south-notether-east'], playerLoc: M_D, additionalDrawings: [] },
    { id: 'bait-1-east-n', label: 'Bait', question: 'Bait: East portal, north tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 1, validRoles: ['T1', 'R1'], isStart: false, children: ['edge-west-south-tether-west', 'edge-west-south-tether-east'],    playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }] },
    { id: 'bait-1-east-s', label: 'Bait', question: 'Bait: East portal, south tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 0, validRoles: ['T1', 'R1'], isStart: false, children: ['edge-west-north-tether-west', 'edge-west-north-tether-east'],    playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }] },
    { id: 'bait-1-west-n', label: 'Bait', question: 'Bait: West portal, north tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 5, validRoles: ['T1', 'R1'], isStart: false, children: ['edge-east-south-tether-west', 'edge-east-south-tether-east'],    playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }] },
    { id: 'bait-1-west-s', label: 'Bait', question: 'Bait: West portal, south tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 4, validRoles: ['T1', 'R1'], isStart: false, children: ['edge-east-north-tether-west', 'edge-east-north-tether-east'],    playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }] },

    // --- Bait: Tower 2 (T2, R2) ---
    // none/west tethers: South spot → stays East platform (near B)
    // east tethers: West spot → crosses to West platform (near D)
    { id: 'bait-2-none',   label: 'Bait', question: 'Bait: No tether — where do you stand?',                 spots: ALL_BAIT_SPOTS, answer: 7, validRoles: ['T2', 'R2'], isStart: false, children: ['edge-east-south-notether-west', 'edge-east-south-notether-east'], playerLoc: M_B, additionalDrawings: [] },
    { id: 'bait-2-east-n', label: 'Bait', question: 'Bait: East portal, north tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 1, validRoles: ['T2', 'R2'], isStart: false, children: ['edge-west-south-tether-west', 'edge-west-south-tether-east'],    playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }] },
    { id: 'bait-2-east-s', label: 'Bait', question: 'Bait: East portal, south tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 0, validRoles: ['T2', 'R2'], isStart: false, children: ['edge-west-north-tether-west', 'edge-west-north-tether-east'],    playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }] },
    { id: 'bait-2-west-n', label: 'Bait', question: 'Bait: West portal, north tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 5, validRoles: ['T2', 'R2'], isStart: false, children: ['edge-east-south-tether-west', 'edge-east-south-tether-east'],    playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }] },
    { id: 'bait-2-west-s', label: 'Bait', question: 'Bait: West portal, south tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 4, validRoles: ['T2', 'R2'], isStart: false, children: ['edge-east-north-tether-west', 'edge-east-north-tether-east'],    playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }] },

    // --- Bait: Tower 3 (M2, H2) ---
    // none/west tethers: North spot → stays East platform (near B)
    // east tethers: West spot → crosses to West platform (near D)
    { id: 'bait-3-none',   label: 'Bait', question: 'Bait: No tether — where do you stand?',                 spots: ALL_BAIT_SPOTS, answer: 6, validRoles: ['M2', 'H2'], isStart: false, children: ['edge-east-north-notether-west', 'edge-east-north-notether-east'], playerLoc: M_B, additionalDrawings: [] },
    { id: 'bait-3-east-n', label: 'Bait', question: 'Bait: East portal, north tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 1, validRoles: ['M2', 'H2'], isStart: false, children: ['edge-west-south-tether-west', 'edge-west-south-tether-east'],    playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }] },
    { id: 'bait-3-east-s', label: 'Bait', question: 'Bait: East portal, south tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 0, validRoles: ['M2', 'H2'], isStart: false, children: ['edge-west-north-tether-west', 'edge-west-north-tether-east'],    playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }] },
    { id: 'bait-3-west-n', label: 'Bait', question: 'Bait: West portal, north tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 5, validRoles: ['M2', 'H2'], isStart: false, children: ['edge-east-south-tether-west', 'edge-east-south-tether-east'],    playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }] },
    { id: 'bait-3-west-s', label: 'Bait', question: 'Bait: West portal, south tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 4, validRoles: ['M2', 'H2'], isStart: false, children: ['edge-east-north-tether-west', 'edge-east-north-tether-east'],    playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }] },

    // --- Bait: Tower 4 (M1, H1) ---
    // none/east tethers: North spot → stays West platform (near D)
    // west tethers: East spot → crosses to East platform (near B)
    { id: 'bait-4-none',   label: 'Bait', question: 'Bait: No tether — where do you stand?',                 spots: ALL_BAIT_SPOTS, answer: 2, validRoles: ['M1', 'H1'], isStart: false, children: ['edge-west-north-notether-west', 'edge-west-north-notether-east'], playerLoc: M_D, additionalDrawings: [] },
    { id: 'bait-4-east-n', label: 'Bait', question: 'Bait: East portal, north tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 1, validRoles: ['M1', 'H1'], isStart: false, children: ['edge-west-south-tether-west', 'edge-west-south-tether-east'],    playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }] },
    { id: 'bait-4-east-s', label: 'Bait', question: 'Bait: East portal, south tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 0, validRoles: ['M1', 'H1'], isStart: false, children: ['edge-west-north-tether-west', 'edge-west-north-tether-east'],    playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }] },
    { id: 'bait-4-west-n', label: 'Bait', question: 'Bait: West portal, north tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 5, validRoles: ['M1', 'H1'], isStart: false, children: ['edge-east-south-tether-west', 'edge-east-south-tether-east'],    playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }] },
    { id: 'bait-4-west-s', label: 'Bait', question: 'Bait: West portal, south tether — where do you stand?', spots: ALL_BAIT_SPOTS, answer: 4, validRoles: ['M1', 'H1'], isStart: false, children: ['edge-east-north-tether-west', 'edge-east-north-tether-east'],    playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }] },

    // =====================================================================
    // EDGE PHASE — move to the safe sub-side of your platform
    // Orange line shows the UNSAFE sub-side. Tether line carried forward where applicable.
    // Spots: [0]=west/left, [1]=east/right — answer matches the safe side.
    // 16 nodes = 8 categories (platform × north/south × tether/non-tether) × 2 safe-side variants
    // =====================================================================

    // --- West platform, north (marker 1) ---
    // Spots [0]=NORTH_1L, [1]=NORTH_1R, [2]=1_NW, [3]=1_NE, [4]=1_SW, [5]=1_SE
    // Tether goes to arena edge (0/1); non-tether goes to north corner (2/3)
    { id: 'edge-west-north-tether-west',   label: 'Edge', question: 'Edge: West side safe — where do you go?', spots: EDGE_W_N_SPOTS, answer: 0, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }, DANGER_WEST_EAST] },
    { id: 'edge-west-north-tether-east',   label: 'Edge', question: 'Edge: East side safe — where do you go?', spots: EDGE_W_N_SPOTS, answer: 1, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_S], color: TETHER_COLOR }, DANGER_WEST_WEST] },
    { id: 'edge-west-north-notether-west', label: 'Edge', question: 'Edge: West side safe — where do you go?', spots: EDGE_W_N_SPOTS, answer: 2, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_D, additionalDrawings: [DANGER_WEST_EAST] },
    { id: 'edge-west-north-notether-east', label: 'Edge', question: 'Edge: East side safe — where do you go?', spots: EDGE_W_N_SPOTS, answer: 3, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_D, additionalDrawings: [DANGER_WEST_WEST] },

    // --- West platform, south (marker 4) ---
    // Spots [0]=SOUTH_4L, [1]=SOUTH_4R, [2]=4_NW, [3]=4_NE, [4]=4_SW, [5]=4_SE
    // Tether goes to arena edge (0/1); non-tether goes to south corner (4/5)
    { id: 'edge-west-south-tether-west',   label: 'Edge', question: 'Edge: West side safe — where do you go?', spots: EDGE_W_S_SPOTS, answer: 0, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }, DANGER_WEST_EAST] },
    { id: 'edge-west-south-tether-east',   label: 'Edge', question: 'Edge: East side safe — where do you go?', spots: EDGE_W_S_SPOTS, answer: 1, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_D, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_EAST_N], color: TETHER_COLOR }, DANGER_WEST_WEST] },
    { id: 'edge-west-south-notether-west', label: 'Edge', question: 'Edge: West side safe — where do you go?', spots: EDGE_W_S_SPOTS, answer: 4, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_D, additionalDrawings: [DANGER_WEST_EAST] },
    { id: 'edge-west-south-notether-east', label: 'Edge', question: 'Edge: East side safe — where do you go?', spots: EDGE_W_S_SPOTS, answer: 5, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_D, additionalDrawings: [DANGER_WEST_WEST] },

    // --- East platform, north (marker 2) ---
    // Spots [0]=NORTH_2L, [1]=NORTH_2R, [2]=2_NW, [3]=2_NE, [4]=2_SW, [5]=2_SE
    // Tether goes to arena edge (0/1); non-tether goes to north corner (2/3)
    { id: 'edge-east-north-tether-west',   label: 'Edge', question: 'Edge: West side safe — where do you go?', spots: EDGE_E_N_SPOTS, answer: 0, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }, DANGER_EAST_EAST] },
    { id: 'edge-east-north-tether-east',   label: 'Edge', question: 'Edge: East side safe — where do you go?', spots: EDGE_E_N_SPOTS, answer: 1, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_S], color: TETHER_COLOR }, DANGER_EAST_WEST] },
    { id: 'edge-east-north-notether-west', label: 'Edge', question: 'Edge: West side safe — where do you go?', spots: EDGE_E_N_SPOTS, answer: 2, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_B, additionalDrawings: [DANGER_EAST_EAST] },
    { id: 'edge-east-north-notether-east', label: 'Edge', question: 'Edge: East side safe — where do you go?', spots: EDGE_E_N_SPOTS, answer: 3, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_B, additionalDrawings: [DANGER_EAST_WEST] },

    // --- East platform, south (marker 3) ---
    // Spots [0]=SOUTH_3L, [1]=SOUTH_3R, [2]=3_NW, [3]=3_NE, [4]=3_SW, [5]=3_SE
    // Tether goes to arena edge (0/1); non-tether goes to south corner (4/5)
    { id: 'edge-east-south-tether-west',   label: 'Edge', question: 'Edge: West side safe — where do you go?', spots: EDGE_E_S_SPOTS, answer: 0, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }, DANGER_EAST_EAST] },
    { id: 'edge-east-south-tether-east',   label: 'Edge', question: 'Edge: East side safe — where do you go?', spots: EDGE_E_S_SPOTS, answer: 1, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_B, additionalDrawings: [{ type: 'line', points: ['player', PORTAL_WEST_N], color: TETHER_COLOR }, DANGER_EAST_WEST] },
    { id: 'edge-east-south-notether-west', label: 'Edge', question: 'Edge: West side safe — where do you go?', spots: EDGE_E_S_SPOTS, answer: 4, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_B, additionalDrawings: [DANGER_EAST_EAST] },
    { id: 'edge-east-south-notether-east', label: 'Edge', question: 'Edge: East side safe — where do you go?', spots: EDGE_E_S_SPOTS, answer: 5, validRoles: ['T1','T2','R1','R2','M1','M2','H1','H2'], isStart: false, children: [], playerLoc: M_B, additionalDrawings: [DANGER_EAST_WEST] },
  ],
};
