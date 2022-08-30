// TO DO:
// Complete the shifting function
// Takes in an array
// shift all contents to the left by 1 index
// Returns the shifted array
// the last element will be moved to the beginning of the array
// e.g. [1, 2, 3, 4, 5] -> [5, 1, 2, 3, 4]
function shift(arr){
    temp =[];
    for(let i=1;i<arr.length;i++){
        temp[i]=arr[i-1];
    }
    temp[0]=arr[arr.length-1]
    return temp;
}
console.log(shift([1,2,3,45]))


// ------------- STOP --------------------
// Do not make any edits in this section
// ------------- STOP --------------------

const SIZE = 10;

function shiftClick(){
    // store inputs in array
    let arr = [];
    const inputs = document.getElementsByName("input");
    for (let i = 0; i < SIZE; ++i){
        arr[i] = inputs[i].value;
    }

    //shift
    arr = shift(arr);

    // replace values
    for (let i = 0; i < SIZE; ++i){
        inputs[i].value = arr[i];
    }
}

function clearClick(){
    const inputs = document.getElementsByName("input");
    for (let i = 1; i < SIZE; ++i){
        inputs[i].value = "";
    }
}