const gridContainerLength = 480; 
let sideLength = 16;

const container = document.querySelector('.body-container'); 

function changeSquareColour(e, colour) {
    if(colour === "rainbow") {
        e.style.backgroundColor = "black";
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
            gridSquare.addEventListener('mouseenter', function(e) {
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
            createGrid("grey"); 
            break; 
        }
    }
});

const blackBtn = document.querySelector('.black-squares');
blackBtn.addEventListener('click', () => {
    removeGrid();
    createGrid("black")
});





    