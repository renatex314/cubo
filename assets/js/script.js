var angleIncrement = 1;
var posIncrement = 10;
var pressedKeys = {};

var keyBindFunctions = {
    'q': () => translateCube('z', -posIncrement),
    'e': () => translateCube('z', posIncrement),
    'a': () => translateCube('x', -posIncrement),
    'd': () => translateCube('x', posIncrement),
    's': () => translateCube('y', posIncrement),
    'w': () => translateCube('y', -posIncrement),
    'o': () => rotateCubeAngle('x', angleIncrement),
    'l': () => rotateCubeAngle('x', -angleIncrement),
    'k': () => rotateCubeAngle('y', -angleIncrement),
    'ç': () => rotateCubeAngle('y', angleIncrement)
};
var validKeys = Object.keys(keyBindFunctions);

addEventListener('keydown', e => pressedKeys[e.key] = true);
addEventListener('keyup', e => pressedKeys[e.key] = false);

function updateCube() {
    Object.keys(pressedKeys)
    .filter(key => pressedKeys[key] === true && validKeys.includes(key))
    .forEach(key => keyBindFunctions[key]());  
    
    requestAnimationFrame(updateCube);
}

updateCube();