let boxColor1 = $('#div1');
let boxColor2 = $('#div2');
let boxColor3 = $('#div3');
let button = $('button');

function changeColor1() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function changeColor2() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function changeColor3() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
button.click(function () {
  let randomColor1 = changeColor1();
  let randomColor2 = changeColor2();
  let randomColor3 = changeColor3();
  boxColor1.css('background', randomColor1);
  boxColor2.css('background', randomColor2);
  boxColor3.css('background', randomColor3);
});
