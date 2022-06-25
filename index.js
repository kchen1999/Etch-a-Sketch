const gridContainerLength = 480; 
const DEFAULT_COLOUR = 'grey'; 
const sideLength = 16;

const container = document.querySelector('.body-container'); 

function changeSquareColour(e, colour) {
    if(colour === "rainbow") {
        let randomRValue = Math.floor(Math.random() * 256);  
        let randomGValue = Math.floor(Math.random() * 256); 
        let randomBValue = Math.floor(Math.random() * 256); 
        e.style.backgroundColor = `rgb(${randomRValue}, ${randomGValue}, ${randomBValue})`;
    }
    else {
        e.style.backgroundColor = colour;
    }
    
}

function createGrid(colour) {
    for(let i = 0; i < sideLength; i++) {
        const row = document.createElement('div');
        row.classList.add('row-container');
        row.style.height = gridContainerLength/sideLength + "px"; 
        container.appendChild(row);
    
        for(let j = 0; j < sideLength; j++) {
            const gridSquare = document.createElement('div'); 
            gridSquare.classList.add('grid-square'); 
            gridSquare.style.width = gridContainerLength/sideLength + "px"; 
            gridSquare.addEventListener('mouseenter', e => {
                changeSquareColour(e.target, colour);
            });
            row.appendChild(gridSquare); 
        }
    }
}

function removeGrid() {
    const rows = container.querySelectorAll('.row-container'); 
    rows.forEach(row => container.removeChild(row));
}

createGrid("grey"); 

const squareBtn = document.querySelector('.square-number'); 
squareBtn.addEventListener('click', () => {
    while(true) {
        sideLength = prompt("Please enter number of squares per side (max 100)");
        if(sideLength < 0 || sideLength > 100) {
            alert("Invalid side length. Please try again!")
        }
        else {
            removeGrid();
            createGrid(DE); 
            break; 
        }
    }
});

const blackBtn = document.querySelector('.black-squares');
blackBtn.addEventListener('click', () => {
    removeGrid();
    createGrid("black"); 
});

const rainbowBtn = document.querySelector('.rainbow-squares');
rainbowBtn.addEventListener('click', () => {
    removeGrid();
    createGrid("rainbow");
});

const clearBtn = document.querySelector('.clear'); 
clearBtn.addEventListener('click', () => {
    removeGrid();
    createGrid("grey");
});






    