// Write a JavaScript program to check whether a given positive number
// is a multiple of 3 or 7.

function multiple(){

    let number = 21;
    //console.log(number)
    if(number > 0){
        if(number % 3 == 0||number % 7 == 0){
            console.log('true');
        }else{
            console.log('false');
        }
    }else{ console.log("false");}
}

multiple();