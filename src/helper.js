function genticket(n){
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
        
    }
    return arr;
}


function sum(arr) {
    if (!Array.isArray(arr)) {
        console.error("sum() expected an array but got:", arr);
        return 0;
    }
    return arr.reduce((sum, curr) => sum + curr, 0);
}




export{genticket,sum};