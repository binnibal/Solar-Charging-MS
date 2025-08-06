const container = document.querySelector('.container');
const main = document.querySelector('.main');
const btn = document.getElementById('btn');
let rowCount =0;
const maxRows= 10;

btn.addEventListener('click',(e)=>{
     if (rowCount >= maxRows) {
    alert("You can only add up to 10 rows.");
    
    return; 
  }
  else{

  rowCount++;
  console.log(rowCount);
    const row = document.createElement('div');
row.className = "row";

     const txtBox = document.createElement('input')
txtBox.setAttribute('type','text');
txtBox.required = true;
txtBox.className='txtBox'
const placehold = document.createElement('label');
placehold.className = 'placehold'
placehold.setAttribute('for','txtBox');
placehold.textContent= 'Enter the name here'
const selector = document.createElement('select');
selector.required = true;
selector.className ='selector'
const option1 = document.createElement('option');
  option1.value = 'Phone';
  option1.textContent = 'Phone';

  const option2 = document.createElement('option');
  option2.value = 'Laptop';
  option2.textContent = 'Laptop';
  const option3 = document.createElement('option');
  option3.value ='Battery';
  selector.appendChild(option1);
  selector.appendChild(option2);
  selector.appendChild(option3);


const numInput = document.createElement('input');
numInput.className = 'numInput';
numInput.required = true;
numInput.setAttribute('min','1');
numInput.setAttribute('max','10');
numInput.setAttribute('name', 'numInput');
     row.appendChild(txtBox);
  row.appendChild(placehold);
  row.appendChild(selector);
  row.appendChild(numInput);

    main.appendChild(row);}
});


