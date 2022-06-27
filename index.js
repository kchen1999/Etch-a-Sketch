const gridContainerLength = 480; 
const DEFAULT_COLOUR = 'grey'; 
let sideLength = 16;
let currentMode = "grey"; 

const container = document.querySelector('.body-container'); 

//FUNCTIONS
function changeSquareColour(e) {
    if(currentMode === "rainbow") {
        let randomRValue = Math.floor(Math.random() * 256);  
        let randomGValue = Math.floor(Math.random() * 256); 
        let randomBValue = Math.floor(Math.random() * 256); 
        e.target.style.backgroundColor = `rgb(${randomRValue}, ${randomGValue}, ${randomBValue})`;
    }
    else{
        e.target.style.backgroundColor = currentMode;
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
            gridSquare.addEventListener('mouseenter', changeSquareColour);
            row.appendChild(gridSquare); 
        }
    }
}

function removeGrid() {
    const rows = container.querySelectorAll('.row-container'); 
    rows.forEach(row => container.removeChild(row));
}

//BUTTONS
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
    currentMode = "black";    
});

const rainbowBtn = document.querySelector('.rainbow-squares');
rainbowBtn.addEventListener('click', () => {
    currentMode = "rainbow";
})

const clearBtn = document.querySelector('.clear'); 
clearBtn.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.grid-square'); 
    gridSquares.forEach(gridSquare => {
        gridSquare.style.backgroundColor = 'turquoise';
    });
});

createGrid(DEFAULT_COLOUR); 




    