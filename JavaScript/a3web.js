
function imageOn(id,img){
  document.getElementById(id).src= img
  document.getElementById(id).style.display = 'block';
}

function imageOff(id){
  document.getElementById(id).style.display = 'none';
}

function priceOn(){
  document.getElementById('price1').innerHTML="$999.99";
}

function priceOn2(){
  document.getElementById('price2').innerHTML="$499.99";
}

function priceOn3(){
  document.getElementById('price3').innerHTML="$1,399.99";
}

function priceOn4(){ 
  document.getElementById('price4').innerHTML="$699.99";
}
function answer(id){ 
  document.getElementById(id).style.display = "block";
}
