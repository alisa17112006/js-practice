let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr_chet = [];
for (let i = 0; i < arr.length; i++){ 
  if(arr[i] % 2 == 0){
    arr_chet.push(arr[i]);
  }
}
console.log(arr_chet)

