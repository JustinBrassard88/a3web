
function imageOn(id,img){
  
  document.getElementById(id).src= img
  document.getElementById(id).style.display = 'block';

}

function imageOff(id){
  
  document.getElementById(id).style.display = 'none';

}