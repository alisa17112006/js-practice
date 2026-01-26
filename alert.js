let size = 8;

for (let i = 1; i <= size; i++) {
    let row = '';
    for (let j = 1; j <= size; j++) {
        if((i + j) % 2 == 0){
            row += '#';
        }
        else {
            row += ' ';
        }
        
    }
    console.log(row);
}

