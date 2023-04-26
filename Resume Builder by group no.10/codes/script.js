// alert("preview")

                      // WORK EXPERIENCE FIELD
function addNewWeField(){
// console.log("mmmmmmm");
let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add ('weField');
newNode.classList.add ("mt-2");

newNode.setAttribute("placeholder" , "enter here");
newNode.setAttribute("rows" , 2);

let weOb = document.getElementById('we');
let weAddButtonOb = document.getElementById('weAddButton');

weOb.insertBefore(newNode,weAddButtonOb);
}

                       //  EDUCATION FIELD
function addNewEduField(){
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add ('eduField');
newNode.classList.add ("mt-2");
newNode.setAttribute("placeholder" , "enter here");
newNode.setAttribute("rows" , 2);

let eduOb = document.getElementById('edu');
let eduAddButtonOb = document.getElementById('eduAddButton');

eduOb.insertBefore(newNode,eduAddButtonOb);

}


                       // projects
function addNewPjField(){
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add ('pjField');
newNode.classList.add ("mt-2");
newNode.setAttribute("placeholder" , "enter here");
newNode.setAttribute("rows" , 2);

let pjOb = document.getElementById('pj');
let pjAddButtonOb = document.getElementById('pjAddButton');

pjOb.insertBefore(newNode,pjAddButtonOb);
}


                         // skills
function addNewSkField(){
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add ('skField');
newNode.classList.add ("mt-2");
newNode.setAttribute("placeholder" , "enter here");
newNode.setAttribute("rows" , 1);

let skOb = document.getElementById('sk');
let skAddButtonOb = document.getElementById('skAddButton');

skOb.insertBefore(newNode,skAddButtonOb);
}

                            // languages
function addNewlgField(){
    let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add ('lgField');
newNode.classList.add ("mt-2");
newNode.setAttribute("placeholder" , "enter here");
newNode.setAttribute("rows" , 1);

let lgOb = document.getElementById('lg');
let lgAddButtonOb = document.getElementById('lgAddButton');

lgOb.insertBefore(newNode,lgAddButtonOb);
}

///////////////////////////////////////
document.getElementById("download").style.display = "none";



                      // generating cv function
function generateCV(){
    // console.log("generating....");

    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
   nameT.innerHTML = nameField;

   document.getElementById("addressT").innerHTML =  document.getElementById("addressField").value;

   document.getElementById("contactT").innerHTML =  document.getElementById("contactField").value;

   document.getElementById("emailT").innerHTML =  document.getElementById("emailField").value;

   document.getElementById("lkT").innerHTML =  document.getElementById("lkField").value;
   document.getElementById("ttT").innerHTML =  document.getElementById("ttField").value;
   document.getElementById("wbT").innerHTML =  document.getElementById("wbField").value;
   document.getElementById("gtT").innerHTML =  document.getElementById("wbField").value;
   document.getElementById("pfT").innerHTML =  document.getElementById("pfField").value;
   document.getElementById("psT").innerHTML =  document.getElementById("psField").value;



                          //  work experience
  let wes = document.getElementsByClassName("weField");
  let str = '';
  for(let e of wes){
      str= str + `<div class="education_content">>  <div class="education_time" id="time">
      <span class="education_rounder"></span>
      <span class="education_line" ></span>
  </div>${e.value} </div>`;
  }
  document.getElementById("weT").innerHTML = str;

                                 //eductaion string
  let edus = document.getElementsByClassName("eduField");
  let str1 = '';
  for(let e of edus){
      str1= str1 + `<div class="education_content"> <div class="education_time" id="time">
      <span class="education_rounder"></span>
      <span class="education_line" ></span>
  </div> ${e.value} </div>`;
  }
  document.getElementById("eduT").innerHTML = str1;
  

                                      //projects string
  let pjs = document.getElementsByClassName("pjField");
  let str2 = '';
  for(let e of pjs){
      str2= str2 + `<div class="education_content"> <div class="education_time" id="time">
      <span class="education_rounder"></span>
      <span class="education_line" ></span>
  </div> ${e.value} </div>`;
  }
  document.getElementById("pjT").innerHTML = str2;


                                             // skills
  let sks = document.getElementsByClassName("skField");
  let str3 = '';
  for(let e of sks){
      str3= str3 + `<li> <span class="skills_circle" id="c"></span>${e.value} </li>`;
  }
  document.getElementById("skT").innerHTML = str3;


                                      // languages
let lgs = document.getElementsByClassName("lgField");
let str4 = '';
for(let e of lgs){
    str4= str4 + `<li> ${e.value} </li>`;
}
document.getElementById("lgT").innerHTML = str4;
  //image field
let file=document.getElementById("imageField").files[0]; 
  console.log(file);
  let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

                                        //set image to template

reader.onloadend =function(){
    document.getElementById("imageT").src= reader.result; 
}


document.getElementById("goback").style.display = "block";
document.getElementById("download").style.display = "block";
 document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "grid";
}

                                              // goback
function formCV(){
    document.getElementById("goback").style.display = "none";
    document.getElementById("cv-form").style.display = "block";
   document.getElementById("cv-template").style.display = "none";

  document.getElementById("download").style.display = "none";
}


const areaCv = document.getElementById("cv-template");
    let resumeButton =document.getElementById("download");

    let opt = {
        margin:       0,
        filename:     'myResume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { format: 'a4', orientation: 'portrait' }
      };

function printCV(){
    html2pdf(areaCv,opt)
}
resumeButton.addEventListener('click', ()=>{

    generateResume()
})
 