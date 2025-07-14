
function checkAge(age){
    if (age > 18) {
        return true;
    } else {
        return console.log('consult your friends kindly')
    }

}
// checkAge()


// using ?? or || []
 function checkAge(age){
 return (age > 18) ? true : console.log('consult your friends kindly')
 }
 checkAge()


function checkPow(x,n){
   let result = x;
    for(let i =1 ; i<n; i++){
        result  *= x
    }
    return result
}

let n = ('n','')
let x = ('x','')

 if (n < 1){
    console.log(`power ${n} is not supported`)
    
 } else{
    console.log(pow(x,n))
 }



 function reverseString(str) {
    let reversed = ''
     for (let i = str.length - 1; i >=0 ; i--){
        reversed += str[i]
     console.log(reversed); // "hanna"

     }
     return reversed
 }
 console.log(reverseString("annah")); // "hanna"

function reverseString(str) {
    const reversed = str.split("").reverse().join("")
        console.log(reversed); // "hanna"

 }
 reverseString( "annah"); // "hanna"


function reverseName(str){
    let reversed = " ";
    for ( let i = str.length - 1; i >= 0; i--){
        reversed += str[i]

    }
    return reversed

}


  function reverseIfLong(str) {
    if (str.length <= 5){
        return str
    }
    let reversed = " ";
    for ( let i = str.length - 1; i >= 0; i--){
        reversed += str[i]

    } 
    return reversed
  }
  console.log(reverseIfLong("annah")); 
  console.log(reverseIfLong("mweru")); 
  console.log(reverseIfLong("javascript")); 


const myFuction = () => 2+2 
 myFuction()
const myYction  = parameters =>{

}



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

// sumEven and Odd plus count
function getSumEven(arr){
    let sumEven = 0
    let sumOdd= 0
    let evenCount= 0
    let oddCount = 0
    
    for (const num of arr){
      if (num % 2 === 0){    
        sumEven += num
         evenCount++
  }
     else{
      sumOdd += num
       oddCount++
    }
  }
      return {odd : sumOdd ,even : sumEven,eveCount:evenCount,odCount:oddCount,}
  }
  const number = [1,2,3,4]
  const allSum = getSumEven(number)
  console.log(`even is ${allSum.even},odd is ${allSum.odd},evenCount is ${allSum.eveCount},oddCount is ${allSum.odCount},`)



//   closure
  function privateCounter (){
    let counter = 0
    return  {
      increment:function(){
      counter ++;
      return counter
    },
     getCount: function(){
      return counter
    },
       reset: function(){
        return counter = 0
    },
    }
   
  }
  const count = privateCounter()

//   encapsulated object

  function createProduct(name, stock) {
    return {
      getDetails: () => {
        return { name, stock };
      },
      purchase: (quantity) => {
        if (quantity <= stock) {
          stock -= quantity;
          return `Purchased ${quantity}`;
        } else {
          return `Insufficient stock`;
        }
      },
      restock: (amount) => {
        stock += amount;
        return `Restocked ${amount}`;
      }
    };
  }
//    library status

  function createBook(title,author){
    let status = 'available'
    
    return {
      getInfo: () => {
      return `Title:${title},Author:${author} ,Status:${status}`
  
    }, borrow:() => {
          if (status !== 'available'){
          return "Book already borrowed";
  
        }
      status = 'borrowed'
      return 'Book borrowed'
      
    },
      returnBook: ()=> {
        if (status === 'available'){
            return `Book is already in the library`
  
        }
        statu = 'availble'
        return 'book returned'
  
        
      }
    }
    
  }
  const book = createBook("The Alchemist", "Paulo Coelho")
  console.log(book.getInfo())
  

//   array map,filter and reduce
  const students = [
    { name: "Ali", score: 45 },
    { name: "Achieng", score: 78 },
    { name: "Mutiso", score: 59 },
    { name: "Wairimu", score: 88 },
  ];
   const results = students.map(p =>   {
     return {
     ...p,
     grade : p.score >= 60 ? "pass" : "fail"
   };
   })
  const passed = results.filter(p => p.grade === 'pass')
  const totalSum = results.reduce((sum, student) => sum + student.score,0)
  const totalAverage = totalSum / results.length