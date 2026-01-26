let rows = 5;
let cols = 5;

for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= cols; j++) {
        if(i == 1 || i == rows || j == 1 || j == cols){
            row += '#';
        }
        else {
            row += ' ';
        }
        
    }
    console.log(row);
}

