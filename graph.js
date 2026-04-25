var ZONE_RADIUS = 20;

function getNode(mechanic, id) {
  for (var i = 0; i < mechanic.nodes.length; i++) {
    if (mechanic.nodes[i].id === id) return mechanic.nodes[i];
  }
  return null;
}

function pickRandomStart(mechanic, role) {
  var candidates = [];
  for (var i = 0; i < mechanic.nodes.length; i++) {
    var node = mechanic.nodes[i];
    if (node.isStart && node.validRoles.indexOf(role) !== -1) {
      candidates.push(node);
    }
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function isCorrectClick(clickX, clickY, node) {
  var correct = node.spots[node.answer];
  var dx = clickX - correct.x;
  var dy = clickY - correct.y;
  return Math.sqrt(dx * dx + dy * dy) <= ZONE_RADIUS;
}
