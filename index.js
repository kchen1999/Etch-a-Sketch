const gridContainerLength = 480; 
let sideLength = 16;

const container = document.querySelector('.body-container');

function createGrid() {
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
                e.target.style.backgroundColor = "black"; 
            });
            row.appendChild(gridSquare); 
        }
    }
}

function removeGrid() {
    const rows = container.querySelectorAll('.row-container'); 
    rows.forEach(row => container.removeChild(row));
}

createGrid(); 

const btn = document.querySelector('button'); 
btn.addEventListener('click', () => {
    sideLength = prompt("Please enter number of squares per side (max 100)"); 
    removeGrid();
    createGrid(); 
});





    