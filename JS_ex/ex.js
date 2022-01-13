const num = document.getElementById('num-text').value;

let btn = document.getElementById('btn');

btn.addEventListener('click', takeValue);

function takeValue(){
  const numValue = document.getElementById('num-text').value;    
  document.getElementById('result').innerText = numValue;
}