/*This is a function that returns the sum of all even numbers
in the Fibonacci sequence between two given numbers*/


function sumEvenFib(start, end) {
    let fibbArr = [1, 2]
    let n = end;

    for(let i = 2; i < n; i++){ //loop to populate fibbArr sequence
        fibbArr[i] = fibbArr[i-1] + fibbArr[i-2]
        if(fibbArr[i] >= end){
            n = 0 //breaking out of loop
        }
    }

    let sum = 0
    for(let i = 0; i < fibbArr.length; i++){
        if(fibbArr[i] >= start && fibbArr[i] <= end){ //checking to see if number if after start and before end
            if(fibbArr[i] % 2 === 0){ //checking for evens
                sum += fibbArr[i]
            }
        }
    }

    return sum
}

