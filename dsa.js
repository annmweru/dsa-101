
// function checkAge(age){
//     if (age > 18) {
//         return true;
//     } else {
//         return console.log('consult your friends kindly')
//     }

// }
// checkAge()


// using ?? or || []
//  function checkAge(age){
//  return (age > 18) ? true : console.log('consult your friends kindly')
//  }
//  checkAge()

//  Function min(a, b)

// function checkPow(x,n){
//    let result = x;
//     for(let i =1 ; i<n; i++){
//         result  *= x
//     }
//     return result
// }

// let n = ('n','')
// let x = ('x','')

//  if (n < 1){
//     console.log(`power ${n} is not supported`)
    
//  } else{
//     console.log(pow(x,n))
//  }



//  function reverseString(str) {
//     let reversed = ''
//      for (let i = str.length - 1; i >=0 ; i--){
//         reversed += str[i]
//      console.log(reversed); // "hanna"

//      }
//      return reversed
//  }
//  console.log(reverseString("annah")); // "hanna"

// function reverseString(str) {
//     const reversed = str.split("").reverse().join("")
//         console.log(reversed); // "hanna"

//  }
//  reverseString( "annah"); // "hanna"


// function reverseName(str){
//     let reversed = " ";
//     for ( let i = str.length - 1; i >= 0; i--){
//         reversed += str[i]

//     }
//     return reversed

// }


//   function reverseIfLong(str) {
//     if (str.length <= 5){
//         return str
//     }
//     let reversed = " ";
//     for ( let i = str.length - 1; i >= 0; i--){
//         reversed += str[i]

//     } 
//     return reversed
//   }
//   console.log(reverseIfLong("annah")); 
//   console.log(reverseIfLong("mweru")); 
//   console.log(reverseIfLong("javascript")); 


// const myFuction = () => 2+2 
//  myFuction()
// const myYction  = parameters =>{

// }



/*closure*/ 
function createIncrement(){
    let count = 0;

    function incremement (){
        count ++;
return count;
    }
    return incremement

}

const counter1 = createIncrement()
console.log(counter1())