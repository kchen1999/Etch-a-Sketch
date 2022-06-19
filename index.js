const container = document.querySelector('.container');

for(let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row-container');
    container.appendChild(row);

    for(let j = 0; j < 16; j++) {
        const square = document.createElement('div'); 
        square.classList.add('grid-square'); 
        square.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = "black"; 
        });
        row.appendChild(square); 
    }
}





    