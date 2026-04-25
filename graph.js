var ZONE_RADIUS = 8;

function getNode(mechanic, id) {
  for (var i = 0; i < mechanic.nodes.length; i++) {
    if (mechanic.nodes[i].id === id) return mechanic.nodes[i];
  }
  return null;
}

function pickRandomStart(mechanic) {
  var starts = [];
  for (var i = 0; i < mechanic.nodes.length; i++) {
    if (mechanic.nodes[i].isStart) starts.push(mechanic.nodes[i]);
  }
  return starts[Math.floor(Math.random() * starts.length)];
}

function getAnswer(node, role) {
  return node.answers[role] || null;
}

function isCorrectClick(clickX, clickY, answer) {
  var dx = clickX - answer.x;
  var dy = clickY - answer.y;
  return Math.sqrt(dx * dx + dy * dy) <= ZONE_RADIUS;
}
