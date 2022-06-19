

//--------------biggest number----------------------------------------


const input = 123;
const maxRedigit = function(input) {
   if(input < 100 || input > 999)
      return null
   return +input
   .toString()
   .split('')
   .sort((a, b) => b - a)
   .join('')
};
console.log(maxRedigit(input));

//----------------------biggest number end--------------------------------

//----------------------product map arraystart--------------------------------



function productMap(arrayku, n)
    {
  
        
        if (n == 1) {
            console.log(0);
            return;
        }
         
      
        let l = new Array(n);
        let r = new Array(n);
        let product = new Array(n);
  
        let i, j;
  
        r[n - 1] = 1;
        l[0] = 1;
  
  
       
        for (j = n - 2; j >= 0; j--)
        r[j] = arrayku[j + 1] * r[j + 1];
  
        for (i = 1; i < n; i++)
            l[i] = arrayku[i - 1] * l[i - 1];
  
 
  
        for (i = 0; i < n; i++)
        product[i] = l[i] * r[i];
  
     
        for (i = 0; i < n; i++)
           
            console.log(product[i] + " ")
  
        return;
    }
     
  
    let arrayku = [ 3, 27, 4, 2];
    let n = arrayku.length;
    console.log("Produk Array :");
    productMap(arrayku, n);





//----------------------map array end--------------------------------






//----------------------alternate case start--------------------------------

var switchCase = function(string){
    var newString = "";
    for(var i = 0; i<string.length; i++){
        if(string[i] === string[i].toLowerCase()){
            newString += string[i].toUpperCase();
        }else {
            newString += string[i].toLowerCase();
        }
    }
   
    return newString;
}

var arr = ['abc','ABC','Hello World'];

for (let i = 0; i < arr.length; i++) {
   console.log(swappedText = switchCase(arr[i]))
    
}


//----------------------------- alternate case end-------------------------


//----------------------Multiple 3 and 5 start--------------------------------


function multiple(value) {
    var j = 0;
for (let i = 0; i < value; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
        j=i+j;
    }
    
}

//total dari penjumlahan kelipatan 3 dan 5
console.log('SUM : '+j);
}

//masukkan nilai disini
value=20;

//memanggil fungsi multiple dengan memberi parameter
multiple(value);


//----------------------Multiple 3 and 5 end--------------------------------



//----------------------Nearest FIbonacci start--------------------------------




function sum(arr) {
    
    var nilai=arr.reduce( (x,y) => x+y, 0);
    let num = nilai;
    nearestFibonacci(num);
  }
  
  sum([15,1,3]); 



  function nearestFibonacci(num)
{
   
    if (num == 0) {
        console.log(0)
        return;
    }
 
    
    let number = 0, numberTwo = 1;
 
   
    let result = number + numberTwo;
 

    while (result <= num) {
 
     
        number = numberTwo;
 
 
        numberTwo = result;
 
     
        result = number + numberTwo;
    }
 
  
    let ans = (Math.abs(result - num)
               >= Math.abs(numberTwo - num))
                  ? numberTwo
                  : result;
 
 
  
    console.log(ans)
}


//----------------------Nearest Fibonnaci End--------------------------------
 

  
//----------------------Reverse Words start--------------------------------



function myFunction(string) {
    var rev= string.split("").reverse().join("").split(" ").reverse().join(" ");
    console.log('Original : ' +string);

convertCapital(rev);

};

function convertCapital(rev) {
    const arr = rev.split(" ");
   
    for (var i = 0; i < arr.length; i++) {
       

       if (arr[i].toLowerCase() != arr[i]) { //mendeteksi apakah string mengandung huruf kapital, mengembalikan nilai true/false dan value tersimpan ke Array
         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().slice(1);
       } else{
       arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);

       }

    }
    

    const stringTwo = arr.join(" ");
    console.log('Result : ' +stringTwo);


}

var string = 'I am A Great human';
myFunction(string);


//----------------------Reverse Words  end--------------------------------




//----------------------Find Middle Alphabet start--------------------------------

var Abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function findMid(a, b) {

    let stringOne = Abjad.indexOf(a);
    let stringTwo = Abjad.indexOf(b);
    let center = (stringOne + stringTwo) / 2;
    let length;

    if (center % 2 == 0.5) {
        length = 2;
    } else {
        length = 1;
    }

    return Abjad.substring(center, center + length);
}

console.log(findMid("Q", "U"));
console.log(findMid("R", "U"));
console.log(findMid("T", "Z"));
console.log(findMid("Q", "Z"));

//----------------------Find Middle Alphabet end--------------------------------