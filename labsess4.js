// Write a JavaScript for loop that iterates from 0 to 15. For each
// iteration, it checks if the current number is odd or even, and displays a
// message on the screen.
// Sample Output :
// &quot;0 is even&quot;
// &quot;1 is odd&quot;
// &quot;2 is even&quot;

for(let i = 0; i <= 15; i++){
    if(i % 2 == 0){
        console.log(i + "  is even");
    }else{
        console.log(i + "is odd");
    }
}