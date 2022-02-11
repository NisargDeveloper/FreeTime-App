let hodName = document.getElementById("hod");
let form = document.getElementById("form");
let submitBtn = document.getElementById("submit");
let calcTimeBtn = document.getElementById("calcFreeTimeNew");
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let header = document.getElementById("heading");
let unordered = document.getElementById("unordered");

let time9to10 = document.getElementById("time9to10");
let time10to11 = document.getElementById("time10to11");
let time11to12 = document.getElementById("time11to12");
let time12to1 = document.getElementById("time12to1");
let time1to2 = document.getElementById("time1to2");
let time2to3 = document.getElementById("time2to3");
let time3to4 = document.getElementById("time3to4");


let arrayObj = [];
let finalTestingArray = [];
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(hodName.value == '') {
    return;
  }else {
    let objectOfTime = {};
    let testingArray = [];
    getData(objectOfTime, testingArray);
    hodName.value = '';
    combinedFreeTime();
    //console.log("its coming down")
    
  }
})

function getData(objectOfTime, testingArray) {
  //console.log(objectOfTime);
  objectOfTime.name = hodName.value;
  
  testingArray.push(hodName.value);

  timeCalculation1(objectOfTime, testingArray);
  timeCalculation2(objectOfTime, testingArray);
  timeCalculation3(objectOfTime, testingArray);
  timeCalculation4(objectOfTime, testingArray);
  timeCalculation5(objectOfTime, testingArray);
  timeCalculation6(objectOfTime, testingArray);
  timeCalculation7(objectOfTime, testingArray);


  finalTestingArray.push(testingArray);
  settingUp();
  //console.log("FInal testing array",finalTestingArray);
  arrayObj.push(objectOfTime);
  //console.log(objectOfTime);
  
}
  
function timeCalculation1(objectOfTime, testingArray) {

  if(time9to10.checked == false) {
    //console.log('This time is free', time9to10.value);
    objectOfTime.time9to10 = time9to10.value;
    testingArray.push(time9to10.value);
    
  }
  else {
    return
  }
}

function timeCalculation2(objectOfTime, testingArray) {

  if(time10to11.checked == false) {
    //console.log('This time is free', time10to11.value)
    objectOfTime.time10to11 = time10to11.value;
    testingArray.push(time10to11.value); 

  }
  else {
    return
  }
}

function timeCalculation3(objectOfTime, testingArray) {
  if(time11to12.checked == false) {
    //console.log('This time is free', time11to12.value)
    objectOfTime.time11to12 = time11to12.value;
    testingArray.push(time11to12.value);
  }
  else {
    return
  }
}

function timeCalculation4(objectOfTime, testingArray) {

  if(time12to1.checked == false) {
    //console.log('This time is free', time12to1.value)
    objectOfTime.time12to1 = time12to1.value;
    testingArray.push(time12to1.value);
  }
  else {
    return
  }
}

function timeCalculation5(objectOfTime, testingArray) {

  if(time1to2.checked == false) {
    //console.log('This time is free', time1to2.value)
    objectOfTime.time1to2 = time1to2.value;
    testingArray.push(time1to2.value);
  }
  else {
    return
  }
}

function timeCalculation6(objectOfTime, testingArray) {

  if(time2to3.checked == false) {
    //console.log('This time is free', time2to3.value)
    objectOfTime.time2to3 = time2to3.value;
    testingArray.push(time2to3.value);
  }
  else {
    return
  }
}

function timeCalculation7(objectOfTime, testingArray) {

  if(time3to4.checked == false) {
    //console.log('This time is free', time3to4.value)
    objectOfTime.time3to4 = time3to4.value;
    testingArray.push(time3to4.value);
  }
  else {
    return;
  }
}
let demoArray = [];
let commonFreeTimeArray = [];
function combinedFreeTime() {
  for(let k=0; k< finalTestingArray.length; k++) {//0
    for(let i=0; i < finalTestingArray[k].length; i++) {
      for(let j=0; j < finalTestingArray[k+1].length; j++) {
        //console.log(finalTestingArray[k][i], finalTestingArray[k+1][j]);
        if(finalTestingArray[k][i] === finalTestingArray[k+1][j]) {
          commonFreeTimeArray.push(finalTestingArray[k][i]);
          //console.log("THe matched time is ",finalTestingArray[k][i], finalTestingArray[k+1][j], commonFreeTimeArray);
        }
        else {
          console.log("Non matched Time")
        }
      } 
      }
      demoArray.push(commonFreeTimeArray);
      commonFreeTimeArray = [];
  }
}

calcTimeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(demoArray.length != 0){
    int = demoArray.reduce((p,c) => p.filter(e => c.includes(e)));
  }if(int.length!=0) {
    header.innerText = `Common Free Time is ${int} o'clock`;
    console.log(int);
  }else {
    header.innerText = `No free time available sorry`;
  }
});

function settingUp() {
  const li = document.createElement("li");
  li.innerText = hodName.value;
  unordered.appendChild(li);
}








