let root = document.querySelector(':root');

function getCubeAngle(axis) {
    return parseFloat(root.style.getPropertyValue(`--cube-${axis}-angle`));
}

function setCubeAngle(axis, angle) {
    root.style.setProperty(`--cube-${axis}-angle`, angle + 'deg');
}

function rotateCubeAngle(axis, angle) {
    setCubeAngle(axis, getCubeAngle(axis) + angle);
}

function getCubePos(axis) {
    return parseFloat(root.style.getPropertyValue(`--cube-${axis}`));
}

function setCubePos(axis, value) {
    root.style.setProperty(`--cube-${axis}`, value + 'px');
}

function translateCube(axis, value) {
    setCubePos(axis, getCubePos(axis) + value);
}

(function () {
    //Esta função configura as propriedades iniciais do cubo
    
    //ângulos iniciais
    setCubeAngle('x', 0);
    setCubeAngle('y', 0);
    setCubeAngle('z', 0);

    //posições iniciais
    setCubePos('x', 0);
    setCubePos('y', 0);
    setCubePos('z', 0);
})();