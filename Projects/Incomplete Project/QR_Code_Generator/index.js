// import qr from 'qr-image';
// import inquirer from 'inquirer';
// import fs from 'fs';


var qr = require('qr-image');
var inquirer = require('inquirer');
var fs = require('fs');

// inquirer
// .prompt([  /* Pass your questions in here but it work only with object*/
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

let userURL = $("input").val();
const url = "https:/" + userURL;
console.log(url);


function generateQR(){
  var qr_svg = qr.image(url);
  var imgURL = qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  var imgElement = `<img src= ${imgURL} alt = "Qr-Image" />`;
  $(".qr-image").append(imgElement);

  fs.writeFile("qr_generate.txt",(err)=>{
    if(err) throw err;
    console.log("Filve save!");
  });

}
$(".generate-btn").Click(()=>{
  generateQR()
  $("qr-image").text(userURL);
  console.log(userURL);
  
})