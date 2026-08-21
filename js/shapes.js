const shapesContainer = document.querySelector('.banner .shapes');
const totalShapes = 50;
const shapeTypes = ['circle', 'square'];

for (let i = 0; i < totalShapes; i++) {
    const shape = document.createElement('div');
    const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    shape.classList.add('shape', type);

    const size = Math.random() * 90 + 10;        // entre 10px e 100px
    const top = Math.random() * 100;              // entre 0% e 100%
    const left = Math.random() * 100;             // entre 0% e 100%
    const opacity = Math.random() * 0.18 + 0.06;  // entre 0.06 e 0.24

    shape.style.width = size + "px";
    shape.style.height = size + "px";
    shape.style.top = top + "%";
    shape.style.left = left + "%";
    shape.style.opacity = opacity;

    if (type === "square") {
        const rotation = Math.random() * 60 - 30; // entre -30° e 30°
        shape.style.transform = `rotate(${rotation}deg)`;
    }

    shapesContainer.appendChild(shape);
}