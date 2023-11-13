var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL("BirthdayImage.jpg", function (img) {
        block_image_object = img;  // Corregir el nombre de la variable
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);  // Corregir el nombre del método
        block_image_object.set({  // Corregir el nombre del método
            top: 0,
            left: 0
        });
        canvas.add(block_image_object);
    });
}

function playSound() {
    x.play();
}
