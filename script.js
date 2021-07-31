var canvas = document.getElementById("canvas");
var context  = canvas.getContext('2d');

const nameInput = document.getElementById("name");
var course = document.getElementById("course");
var date = document.getElementById("date");

var download = document.getElementById("btn");
var reset = document.querySelector(".btn1")

var image_base = new Image()
image_base.src = 'images/img1.png'

image_base.onload = function(){
    drawImage()
}

function drawImage(){
    context.drawImage(image_base,0,0,canvas.width,canvas.height);
    drawName();
    drawCourse();
}


nameInput.addEventListener('input', function () {
	drawImage();
})

course.addEventListener('input', function(){
    drawImage();
})

date.addEventListener('change', function(){
    drawDate()
})

function drawName(){
    context.font = '800 50px sans-serif'
	context.fillStyle = '#27275d'
    var textString = nameInput.value,
    textWidth = context.measureText(textString).width;
    context.fillText(textString.toUpperCase(), (canvas.width/2) - (textWidth/2),250)
}

function drawCourse(){
    context.font = '700 20px sans-serif'
	context.fillStyle = '#27275d'
    var textString = course.value,
    textWidth = context.measureText(textString).width;
    context.fillText(textString.toUpperCase(), (canvas.width/2) - (textWidth/2),370)
    
}

function drawDate(){
    context.font = '600 20px sans-serif'
	context.fillStyle = '#27275d'
    var textString = date.value
    context.fillText(textString,500,495)
}

download.addEventListener('click', function(){
    downloadPDF();
})

function downloadPDF(){

    var pdf = new jsPDF("l", "mm", "a4");
    var imgData = canvas.toDataURL('image/jpeg', 1.0);
    pdf.addImage(imgData, 'JPEG',10,10);
    pdf.save("certificate.pdf");
}

reset.addEventListener('click',function(){
    nameInput.value = "";
    course.value = "";
    date.value=""
    drawImage()
})


