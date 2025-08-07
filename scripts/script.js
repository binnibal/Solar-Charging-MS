const container = document.querySelector('.container');
const main = document.querySelector('.main');
const rowsContainer = document.querySelector('.rowsContainer');
const btn = document.getElementById('btn');
let rowCount =0;
const maxRows= 4;

btn.addEventListener('click',(e)=>{
     if (rowCount >= maxRows) {
    alert("You can only add up to 4 rows.");
    
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
txtBox.id = `txtBox-${rowCount}`; 




const placehold = document.createElement('label');
placehold.className = 'placehold'
placehold.setAttribute('for',txtBox.id);
placehold.textContent= 'Enter the name here';



const selector = document.createElement('select');
selector.required = true;
selector.className ='selector'

const phone = document.createElement('option');
  phone.value = 'Phone';
  phone.textContent = 'Phone';

  const laptop = document.createElement('option');
  laptop.value = 'Laptop';
  laptop.textContent = 'Laptop';

  const powerBank = document.createElement('option');
  powerBank.value ='Power Bank';
  powerBank.textContent ='Power Bank';

  const battery = document.createElement('option');
  battery.value = ('Battery');
  battery.textContent = ('Battery');
  
  selector.appendChild(phone);
  selector.appendChild(laptop);
  selector.appendChild(powerBank);
  selector.appendChild(battery);




const numInput = document.createElement('input');
numInput.type = 'number';
numInput.className = 'numInput';
numInput.value = '1';
numInput.required = true;
numInput.setAttribute('min','1');
numInput.setAttribute('max','10');
numInput.setAttribute('name', 'numInput');


     row.appendChild(txtBox);
  row.appendChild(placehold);
  row.appendChild(selector);
  row.appendChild(numInput);
    rowsContainer.appendChild(row);
    
    
}});


