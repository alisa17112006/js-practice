let rows = 5;

for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let s = 1; s <= rows - i; s++) {
        row += ' ';
    }
    for (let h = 1; h <= 2 * i - 1; h++) {
        row += '#';
    }    
    console.log(row);
}

for (let i = rows - 1; i >= 1; i--){
    let row = '';
    for (let s = 1; s <= rows - i; s++) {
        row += ' ';
    }
    for (let h = 1; h <= 2 * i - 1; h++) {
        row += '#';
    }    
    console.log(row);
}

