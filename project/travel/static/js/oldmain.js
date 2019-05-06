// var a=2;
// var b="6";
// b =parseInt(b);
// var c ;
// c= a+b;
// console.log("sum is :" +c);

// var number = "ramesh";
// var toNumber = parseInt(number,10);
// console.log(typeof toNumber);//NaN = Not a number

// var a =5;
// var a =6;
// console.log(a);

//  const z =6;
// a =7;
// console.log(z);

// var arr=[1,2,3]
// console.log(arr);
// //console.log(typeof typeof arr[6]);
// // arr[3] = "new";
// // console.log(arr);
// //  console.log(typeof arr[6]);

// // console.log(arr.length);

// arr.push("ram","shyam");
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr =[1,2,3];
// arr1 ="ram";

// console.log(arr);

// // console.log(Array.isArray(arr1));

// arr.shift()
// console.log(arr)

// arr.unshift("ram","hari");
// console.log("after unshift " + arr);

// var new_array = arr.pop();
// console.log(new_array);

// var newArray = arr.unshift("hero");
// console.log(newArray);

// var arrayFirst =[1,2,3];
// var arraySecond = ["a","b","c","d"];
// var arrayThird = ["e","f"];

// var arrayFinal = arrayFirst.concat(arraySecond,arrayThird);
// // console.log(arrayFinal);

// // console.log(arrayFinal.slice(1,3));

// //splice
// // console.log(arrayFinal.splice(1,3))
// // console.log(arrayFinal.splice(1,3,"ramesh"));

// console.log(arrayFinal.splice(-1));
// console.log(arrayFinal); 

// var testArray =[1,2,3,4,5];
// var one =1;
// var strOne = '1';

// if(one ===strOne){
// 	console.log("equal");

// }else {
// 	console.log("notequal");
// }
// if(testArray.length ==10){
// 	console.log("length is 10");
// } else if (testArray.length >10){
// 	console.log("length is gt 10");

// }else {
// 	console.log("lenth is not knowmn")
// }

//switch
// let hero = "Superman";
// switch(hero.toLowerCase()){
// 	case 'superman':
// 		console.log("super powered and god ");
// 		break;
// 	case 'batman':
// 		console.log("fighter and bat");
// 		break;
// 	default :
// 		console.log("hero");
// 		break;


// function sayHello(fname, lname){
// 	console.log("hello programmer !" + fname + " " +lname);
// }
// sayHello("Rabindra","Dahal");

// function calculation(num1,num2,action){
// 	if (action ==="addition" ||"add") {
// 		num3 = num1 +num2
// 		console.log(num3);
// 	}else if(action ==="subtraction"){
// 		num3 ===num1 -num2
// 		console.log(num3);
// 	}
// 	else if(action ==="multiplication"){
// 		num3 = num1* num2;
// 		console.log(num3)
// 	}else {
// 		console.log("please learn some more about function argument")
// 	}
// }
// calculation(2,3,"add");

// *absent day's .........................................................................
//strict
// arr = [1,2,3];
// arr2 = "ram"
// console.log("orginal array:"+ arr);
// arr.shift()
// console.log(arr)
// arr.unshift("ram", "shyam");
// console.log("After unshift:\t" + arr);

/* var arrayFirst = ["a", "b" , "c"];
var arraySecond = ["d", "e" , "f"];
var arrayThird = ["g", "h" , "i"];

var arrayFinal = arrayFirst.concat(arraySecond, arrayThird);

// console.log(arrayFinal);

// Slice
// console.log(arrayFinal.slice(1,3));

// Splice
arrayFinal.splice(-2,2 ,"ramesh");
// console.log(arrayFinal);
lastElement= arrayFinal.splice(-1);
console.log(lastElement);

arrayFinal.splice(-3,-1 ,"ramesh");
console.log(arrayFinal);
// console.log(arrayFinal.splice(1,4));

*/
// Decision Statement
	


	/*var testArray = [1,2,3,4,5];

	var one =1;
	var strOne='1';

		if(one===strOne){
			console.log("Equal");
			}else {
				console.log("NOt");
			}	

// Strictly usee === 
		
/*
	if(testArray.length ==10){
		console.log("length is 10");
	} else if(testArray.length >10){
		console.log("length is greater 10");
	} else {
		console.log("length is not known");
	}

	*/



	/* Switch
var hero ='Superman';

switch(hero.toLowerCase()){
		case 'superman':
			console.log("super powerd");
			break;
		case 'batman':
			console.log("susfdasfaf");
			break;
		default:
				console.log("Hero");
			
			}

*/
//Function

/*Concept
function sayHello(fName, lName){
	console.log("Hello world"+ fName +"" + lName);
}


sayHello("samip", "Mbshd");
sayHello("stupid", "gadb");
sayHello("ajsd", "bsjc");
sayHello("Bibek","");
*/
// Workk

/*function solveNumber(n1 , n2 , action){
	if(action==="add")  {
		console.log(n1+n2);
	}
		else if(action==="sub")  {
			console.log(n1-n2);

		}
		else if(action==="mul") {
				console.log(n1*n2);
			}
		else{
				console.log("Error");
			}
	} 


	solveNumber(2,5,"sub");
	solveNumber(2,5,"add");
	solveNumber(2,5,"mul");
	solveNumber(2,4,"ssabdja");	
	


	// LOOP
	// For loop

	// while loop


	//Terrnary operator


	var a=5;
	a>2?console.log("greater"):console.log("false");
	// condition?if true do this :else do this;
	

// SCOPE


	var a=20;
	function checkScope(){
		console.log(a+4);
		a=28;
		// console.log(a);
	}


	checkScope();
	console.log(a);




	// FUNCTION EXPRESSION function which have no name::::syntax function()


//    This detremines the time counter. Its has function followed by time

var string="Waited for 5 second"
console.log("Execution starts");
setTimeout(function(){
	console.log(string);
},5000)

	*/


	//Creating a counter that counts 10 9 8 7...
/*
	var counter = 10;
	function countTo(){
			setTimeout(function(){
				if(counter>=0){
					console.log("Count::"+ counter--);
					countTo();
				}else{
					console.log("End");
				}
		},1000)

	}

countTo();
*/










