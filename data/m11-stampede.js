var M11_STAMPEDE_BAIT_SPOTS = [
  { x: 150, y: 250 }, // 0: T1 (W)
  { x: 350, y: 250 }, // 1: T2 (E)
  { x: 250, y: 150 }, // 2: H1 (N)
  { x: 250, y: 350 }, // 3: H2 (S)
  { x: 180, y: 180 }, // 4: M1 (NW)
  { x: 320, y: 180 }, // 5: M2 (NE)
  { x: 180, y: 320 }, // 6: R1 (SW)
  { x: 320, y: 320 }, // 7: R2 (SE)
];

var M11_STAMPEDE_DODGE_SPOTS = [
  { x: 250, y: 150 }, // 0: T1 (N)
  { x: 250, y: 350 }, // 1: T2 (S)
  { x: 150, y: 250 }, // 2: H1 (W)
  { x: 350, y: 250 }, // 3: H2 (E)
  { x: 320, y: 320 }, // 4: M1 (SE)
  { x: 180, y: 320 }, // 5: M2 (SW)
  { x: 320, y: 180 }, // 6: R1 (NE)
  { x: 180, y: 180 }, // 7: R2 (NW)
];

var M11_STAMPEDE = {
  id: 'm11-stampede',
  label: 'M11 — Stampede',
  arenaImage: 'assets/M11.png',
  markers: {
    A: { x: 250, y: 90 },
    B: { x: 410, y: 250 },
    C: { x: 250, y: 410 },
    D: { x: 90, y: 250 },
    1: { x: 110, y: 110 },
    2: { x: 390, y: 110 },
    3: { x: 390, y: 390 },
    4: { x: 110, y: 390 },
  },
  nodes: [
    {
      id: 'stampede-bait-T1',
      label: 'Bait',
      question: 'Stampede: Bait the charge — where do you stand?',
      spots: M11_STAMPEDE_BAIT_SPOTS,
      answer: 0,
      validRoles: ['T1'],
      isStart: true,
      children: ['stampede-dodge-T1'],
    },
    {
      id: 'stampede-bait-T2',
      label: 'Bait',
      question: 'Stampede: Bait the charge — where do you stand?',
      spots: M11_STAMPEDE_BAIT_SPOTS,
      answer: 1,
      validRoles: ['T2'],
      isStart: true,
      children: ['stampede-dodge-T2'],
    },
    {
      id: 'stampede-bait-H1',
      label: 'Bait',
      question: 'Stampede: Bait the charge — where do you stand?',
      spots: M11_STAMPEDE_BAIT_SPOTS,
      answer: 2,
      validRoles: ['H1'],
      isStart: true,
      children: ['stampede-dodge-H1'],
    },
    {
      id: 'stampede-bait-H2',
      label: 'Bait',
      question: 'Stampede: Bait the charge — where do you stand?',
      spots: M11_STAMPEDE_BAIT_SPOTS,
      answer: 3,
      validRoles: ['H2'],
      isStart: true,
      children: ['stampede-dodge-H2'],
    },
    {
      id: 'stampede-bait-M1',
      label: 'Bait',
      question: 'Stampede: Bait the charge — where do you stand?',
      spots: M11_STAMPEDE_BAIT_SPOTS,
      answer: 4,
      validRoles: ['M1'],
      isStart: true,
      children: ['stampede-dodge-M1'],
    },
    {
      id: 'stampede-bait-M2',
      label: 'Bait',
      question: 'Stampede: Bait the charge — where do you stand?',
      spots: M11_STAMPEDE_BAIT_SPOTS,
      answer: 5,
      validRoles: ['M2'],
      isStart: true,
      children: ['stampede-dodge-M2'],
    },
    {
      id: 'stampede-bait-R1',
      label: 'Bait',
      question: 'Stampede: Bait the charge — where do you stand?',
      spots: M11_STAMPEDE_BAIT_SPOTS,
      answer: 6,
      validRoles: ['R1'],
      isStart: true,
      children: ['stampede-dodge-R1'],
    },
    {
      id: 'stampede-bait-R2',
      label: 'Bait',
      question: 'Stampede: Bait the charge — where do you stand?',
      spots: M11_STAMPEDE_BAIT_SPOTS,
      answer: 7,
      validRoles: ['R2'],
      isStart: true,
      children: ['stampede-dodge-R2'],
    },
    {
      id: 'stampede-dodge-T1',
      label: 'Dodge',
      question: 'Stampede: Dodge the cleave — where do you go?',
      spots: M11_STAMPEDE_DODGE_SPOTS,
      answer: 0,
      validRoles: ['T1'],
      isStart: false,
      children: [],
    },
    {
      id: 'stampede-dodge-T2',
      label: 'Dodge',
      question: 'Stampede: Dodge the cleave — where do you go?',
      spots: M11_STAMPEDE_DODGE_SPOTS,
      answer: 1,
      validRoles: ['T2'],
      isStart: false,
      children: [],
    },
    {
      id: 'stampede-dodge-H1',
      label: 'Dodge',
      question: 'Stampede: Dodge the cleave — where do you go?',
      spots: M11_STAMPEDE_DODGE_SPOTS,
      answer: 2,
      validRoles: ['H1'],
      isStart: false,
      children: [],
    },
    {
      id: 'stampede-dodge-H2',
      label: 'Dodge',
      question: 'Stampede: Dodge the cleave — where do you go?',
      spots: M11_STAMPEDE_DODGE_SPOTS,
      answer: 3,
      validRoles: ['H2'],
      isStart: false,
      children: [],
    },
    {
      id: 'stampede-dodge-M1',
      label: 'Dodge',
      question: 'Stampede: Dodge the cleave — where do you go?',
      spots: M11_STAMPEDE_DODGE_SPOTS,
      answer: 4,
      validRoles: ['M1'],
      isStart: false,
      children: [],
    },
    {
      id: 'stampede-dodge-M2',
      label: 'Dodge',
      question: 'Stampede: Dodge the cleave — where do you go?',
      spots: M11_STAMPEDE_DODGE_SPOTS,
      answer: 5,
      validRoles: ['M2'],
      isStart: false,
      children: [],
    },
    {
      id: 'stampede-dodge-R1',
      label: 'Dodge',
      question: 'Stampede: Dodge the cleave — where do you go?',
      spots: M11_STAMPEDE_DODGE_SPOTS,
      answer: 6,
      validRoles: ['R1'],
      isStart: false,
      children: [],
    },
    {
      id: 'stampede-dodge-R2',
      label: 'Dodge',
      question: 'Stampede: Dodge the cleave — where do you go?',
      spots: M11_STAMPEDE_DODGE_SPOTS,
      answer: 7,
      validRoles: ['R2'],
      isStart: false,
      children: [],
    },
  ],
};
