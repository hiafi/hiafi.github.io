var MECHANICS = [M11_ARENA_SPLIT, M11_STAMPEDE];

var state = {
  role: null,
  mechanic: null,
  currentNode: null,
  scoring: null,
  arenaImage: null,
  phase: 'idle',
};

function showScreen(id) {
  var screens = document.querySelectorAll('.screen');
  for (var i = 0; i < screens.length; i++) {
    screens[i].classList.remove('active');
  }
  document.getElementById(id).classList.add('active');
}

function selectRole(role) {
  state.role = role;
  buildMechanicList();
  showScreen('screen-mechanic');
}

function buildMechanicList() {
  var list = document.getElementById('mechanic-list');
  list.innerHTML = '';
  MECHANICS.forEach(function(mechanic) {
    var btn = document.createElement('button');
    btn.className = 'mechanic-btn';
    btn.textContent = mechanic.label;
    btn.addEventListener('click', function() { selectMechanic(mechanic); });
    list.appendChild(btn);
  });
}

function selectMechanic(mechanic) {
  state.mechanic = mechanic;
  state.scoring = initScoring();
  var img = new Image();
  img.onload = function() {
    state.arenaImage = img;
    showScreen('screen-game');
    startRun();
  };
  img.onerror = function() {
    state.arenaImage = null;
    showScreen('screen-game');
    startRun();
  };
  img.src = mechanic.arenaImage;
}

function startRun() {
  state.currentNode = pickRandomStart(state.mechanic, state.role);
  state.phase = 'playing';
  renderGame();
}

function renderGame() {
  var canvas = document.getElementById('arena');
  var ctx = canvas.getContext('2d');
  drawArena(ctx, state.arenaImage);
  if (state.phase === 'playing' && state.currentNode) {
    var node = state.currentNode;
    if (state.mechanic.markers) {
      drawMarkers(ctx, state.mechanic.markers);
    }
    drawAdditionalDrawings(ctx, node.additionalDrawings, node.playerLoc);
    var spots = state.mechanic.debugAllSpots || node.spots;
    drawSpots(ctx, spots);
    drawQuestion(ctx, node.question);
    drawScoring(ctx, state.scoring.streak, getSuccessRate(state.scoring));
  }
}

function handleClick(event) {
  if (state.phase !== 'playing') return;

  var canvas = document.getElementById('arena');
  var rect = canvas.getBoundingClientRect();
  var scaleX = CANVAS_WIDTH / rect.width;
  var scaleY = CANVAS_HEIGHT / rect.height;
  var clickX = (event.clientX - rect.left) * scaleX;
  var clickY = (event.clientY - rect.top) * scaleY;

  var correct = isCorrectClick(clickX, clickY, state.currentNode);
  state.scoring = recordAttempt(state.scoring, correct);

  if (correct) {
    advanceNode();
  } else {
    showFeedback(state.currentNode.spots[state.currentNode.answer]);
  }
}

function advanceNode() {
  var children = state.currentNode.children;
  if (children.length === 0) {
    endSequence();
    return;
  }
  state.currentNode = getNode(state.mechanic, children[0]);
  state.phase = 'playing';
  renderGame();
}

function showFeedback(correctAnswer) {
  state.phase = 'feedback';
  var canvas = document.getElementById('arena');
  var ctx = canvas.getContext('2d');
  drawArena(ctx, state.arenaImage);
  drawFeedback(ctx, 'Wrong! The correct position is shown in green.', correctAnswer);
  drawScoring(ctx, state.scoring.streak, getSuccessRate(state.scoring));
  setTimeout(function() { startRun(); }, 2000);
}

function endSequence() {
  state.phase = 'feedback';
  var canvas = document.getElementById('arena');
  var ctx = canvas.getContext('2d');
  drawArena(ctx, state.arenaImage);
  drawQuestion(ctx, 'Sequence complete!');
  drawScoring(ctx, state.scoring.streak, getSuccessRate(state.scoring));
  setTimeout(function() { startRun(); }, 2000);
}

function initGame() {
  var roleBtns = document.querySelectorAll('.role-btn');
  for (var i = 0; i < roleBtns.length; i++) {
    (function(btn) {
      btn.addEventListener('click', function() { selectRole(btn.dataset.role); });
    })(roleBtns[i]);
  }

  document.getElementById('btn-back-role').addEventListener('click', function() {
    showScreen('screen-role');
  });

  document.getElementById('btn-back-mechanic').addEventListener('click', function() {
    state.phase = 'idle';
    showScreen('screen-mechanic');
  });

  document.getElementById('arena').addEventListener('click', handleClick);
}

document.addEventListener('DOMContentLoaded', initGame);
