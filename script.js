let form = document.getElementById('form1')
let random1 = document.getElementById('firstimput')
let random2 = document.getElementById('secondimput')
let random3 = document.getElementById('thirdimput')
let random4 = document.getElementById('submit')
// let displayrand = document.getElementById('displayrand')
// let displayinput = document.getElementById('displayinput')


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const Numbers = []
  Numbers[0] = random1.value
  Numbers[1] = random2.value
  if(random3.value != "")
  Numbers[2] = random3.value
  displayinput.innerHTML = Numbers
  

const numberspusharray = []
for(let m = 0; m < 6; m++){
  let numbersgen = Math.ceil(Math.random()*10)
  numberspusharray[m] = numbersgen
  displayrand.innerHTML =  numberspusharray
  }
if(random1.value.length > 2 || random2.value.length > 2 || random3.value.length > 2){
//  erroroccur1.innerHTML = 'Please Check Your Inputs'
 alert("Please Check Your Input") 
  displayrand.style.display = "none"
  displayinput.style.display = "none"
}





if(numberspusharray.includes(random1.length = 2) && numberspusharray.includes(random2.length = 2) && numberspusharray.includes(random3.length = 2)){
  alert('you win')
}
else if(numberspusharray.includes(random1.length = 3) && numberspusharray.includes(random2.length = 3) && numberspusharray.includes(random3.length = 3)){
  alert('you win')
}
else{
  alert('Loose')
}
// else if(!(numberspusharray.includes(random1.length = 2) && numberspusharray.includes(random2.length = 2) && numberspusharray.includes(random3.length = 2))){
//   alert('loose')
// }

// else if(!(numberspusharray.includes(random1.length = 3) && numberspusharray.includes(random2.length = 3) && numberspusharray.includes(random3.length = 3))){
//   alert('loose')
// }
if(displayinput.innerHTML.length == 2 || displayinput.innerHTML.length == 3){
  const correctscore =[];
  let sn=0
  for(let m =0; m < displayinput.innerHTML.length; m++){

  if(displayinput.innerHTML.includes(parseInt(numberspusharray[m]))){
    correctscore[sn] = numberspusharray[m];
    sn++
  }
  }
  console.log(correctscore)
}


})




  //   const number = [];
  // number[0] = random1.value
  // number[1] = random2.value
  // number[2] = random3.value
  // // displayimput.innerHTML = numbers
  // console.log(number);









// function numbersgen(){
// for(let m = 0; m < 6; m++){
// let numbersgen = Math.ceil(Math.random()*101)
// console.log(numbersgen)
// }
// }
// let form = document.getElementById['form']

// let predictedvalue = []


// predictedvalue[0] = document.getElementById('firstinput').value
// predictedvalue[1] = document.querySelector('#secondinput').value
// predictedvalue[2] = document.querySelector('#thirdinput').value 
// const numbersgen=[];
//    for(let m=0; m<6; m++){
//   let randNum= Math.ceil(Math.random() *101)
//   numbersgen[m] = randNum
//   }
  

//   // console.log(numbersgen);
//   numbersgen = document.getElementById('displayrand').innerHTML




  



















































// let form1 = document.forms[0]
// form1.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let predictednumbers = form1['text'].value;
//     const newpredict=  predictednumbers.split(",")
//    //  console.log(newpredict)
//    document.getElementById('text').innerHTML
//      const randNums=[];
// })
// console.log('form1')
// const randNums = []
// for(let m = 0; i < 8; i++){
//     let randNum= Math.floor(Math.random() *200)
//     randNums[m] = randNum
    
//   }
//   console.log(randNums)
//   let predictednumbers = form1['text'].value;
//    const newpredict=  predictednumbers.split(",")
//   if(newpredict.length == 2 || newpredict.length == 3){
//     const correctscore =[];
//     let sn=0
//     for(let M =0; m < newpredict.length; m++){

    






























































// let inputnums = [3, 8];

// let generatedNums = [];
// let i = 0
// do {
//     // console.log(i)
//     generatedNums[i] = Math.floor(Math.random() * 100)
//     i++
// }
// while (i < 6)

// let sn = 0;
// let correctscore = [];
// let ci = 0;
// while (sn < inputnums.length) {
//     if (generatedNums.includes(inputnums[sn])) {
//         correctscore[ci] = inputnums[sn];
//         ci++
//     }
//     sn++
// }
// if (correctscore.length == 2) {
//     console.log('WIN');
// } else {
//     console.log("you Loose");
// }
