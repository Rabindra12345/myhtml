// console.dir(document);
// console.log(document.title);

// //selectors
// //1.select by id 

// var footerEl = document.getElementById("my-footer");
// console.log(footerEl);

// // console.log(footerEl.textContent);
// console.log(footerEl.innerText);
//getelementbyid returns an object
// var aboutEl = document.getElementById("about-title-text");
// aboutEl.innerText = "About us";//it changes the title i.e About to about us 
// console.dir(aboutEl);
// console.log(aboutEl.innterText);

// var aboutEl =document.getElementsByClassName("about-section");


// console.dir(aboutEl);
// //getelementbyclass name returns an array of objects
// var testDivEl =document.getElementsByClassName("test-div");
// console.dir(testDivEl);

// // console.log(testDivEl[2].innerText);

// for(let i =0; i<testDivEl.length;i++){
//     // console.log(testDivEl[i].innerText);
//     testDivEl[i].style.color ="red"
//     testDivEl[i].style.borderBottom ="1px blue solid";
//     console.dir(testDivEl[i])
// }

// //3.querySelector(),querySelectorAll()


// // var cardsEl =document.querySelector('.card');
// // console.dir(cardsEl);

// var cardsEl =document.querySelector('.card:last-child');
// console.dir(cardsEl);
//date 13 1:50
    // var childEl =document.getElementById("one");
    // console.dir(childEl);
    // var parentEl =childEl.parentNode;
    // // console.log(parentEl.childNodes);
    // console.log(parentEl.children);
//Events 1:50+
// function handleBtnClick(el){
//     el.innerText ="clicked";
//     console.dir(el);
// }


// var clickBtn =document.getElementById("clickBtn");
// var childEl =document.getElementById("one");
//yaha var click btn id ko name jastei smae rakhiyo but yaha var name j rakhda ni hunxa 
// clickBtn.onclick = function(){
//     childEl.style.color ="red";
//     childEl.style.fontWeight='bold';
//     childEl.style.fontSize='35px';
//     console.log("clickeddd");
//     clickBtn.innerText ="click me harder";
// }


//create new html element using .createElement()
//p,div,span,basically any html element
//     var newP = document.createElement("p");

//     //assign new class name to newly created paragraph element
//     newP.className ="normal";
//     //setting inner text of paragraph element
//     newP.innerText= "this is appended paragraph";
//     console.dir(newP);
    
// //setting up new attribute and its value
//     newP.setAttribute("id","newID");
//     //we can give the name as class in place of id and can give the name of class in the place of newID
//     console.log(newP);

    // var newEl =document.getElementById("new-element");
    // newEl.appendChild(newP);
// var textGeneratorBtn = document.getElementById("text-generator");
// var generatedTextDiv = document.getElementById("generated-text");
// textGeneratorBtn.onclick = function() {
//     var newTextPara =document.createElement('p');
//     newTextPara.innerText = "this is new paragraph haha";
//     generatedTextDiv.append(newTextPara);
// }
// var textGeneratorBtn =document.getElementById("doubleClick");
// textGeneratorBtn.ondblclick =function(){
//     console.log("u just double clicked");
// }
// var typedValue =document.querySelector('#typedValue');
// var rabinsInput = document.getElementById("id_name");
// rabinsInput.onkeydown =function(e){
//     //e = our event fired
//     //target is one of the property of event=object
//     //target is also an object 
//        // console.log(e);
//     // console.log(e.target.value);
//     // typedValue.innerText=e.target.value;
//     var result =e.target.value;
//     var integerResult= parseInt(result);
//     if(isNaN(integerResult)){
//         typedValue.innerText="Please Enter the valid no.";
//     }else{
//         typedValue.innerText=result;
//     }
//     console.log(integerResult);
//     // console.log(typedValue.innerText);
//     // // console.log(result);
//     // // console.log(typeof result);
//     // typedValue.innerText =result;

// }

// fucntion handleChange(event){
//     //do stuffs here
// }
// myInput.onchange =handleChange(e);
// myInput.onkeydown = handleChange(e);

//till 2 :43
//after 2 :43


var students=[
    {
    name:'ram',
    college:'swastik',
    dob :'2055'
    },

    {
    name:'bibek',
    college:'swastik2',
    dob :'2056'
    },

    {
    name:'hari',
    college:'swastik3',
    dob :'2053'
    }

];
//array.map()
//first argument =current element
//second = current index,third =array under evaluation
// students.map(function(student,index,array){
//         console.log(index + "" + student.name);
       
// });

// var mappedData =students.map(function(student){
//     return student.dob;
// });

// var arrayOne =[1,2,3,4];
// var square =arrayOne.map(function(arr){
//     return arr*2;
// });
// console.log(square);
// console.log(mappedData);


// var studentList =document.querySelector("#student-data");

// console.log(studentList);
// //looping through each array element
// students.forEach(function(student){

//     //creating li for each student
//     var listEl =document.createElement("li");

//     //setting text of list = studnet name
//         listEl.innerText= student.name;

//         //add the newly created list to ul element
//         studentList.appendChild(listEl);
// });

//inner html
    // var forInnerHTML = document.querySelector('#forInnerHTML');
    // forInnerHTML.innerHTML = '<h3>This is inserted HTML</h3>';


// var studentList =document.querySelector("#student-list");
// var studentTable =document.querySelector("#student-table");
// console.log(studentList);


// students.forEach(function(student,index){
//     studentTable.innerHTML +=`
//     <tr>
//         <td>${index+1}</td>
//         <td>${student.name}</td>
//         <td>${student.college}</td>
//         <td>${student.dob}</td>
//     </tr>`
// });
