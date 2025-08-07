const container = document.querySelector('.container');
const main = document.querySelector('.main');
const rowsContainer = document.querySelector('.rowsContainer');
const addBtn = document.getElementById('btn');
const Mtab = document.getElementById('mangementTab');
const Ttab = document.getElementById('tables');
const MtabB = document.getElementById('Mtab');
const TtabB =document.getElementById('Ttab');
let rowCount =0;
const maxRows= 4;

addBtn.addEventListener('click',(e)=>{
     if (rowCount >= maxRows) {
    alert("You can only add up to 4 rows.");
    
    return; 
  }
  else{

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

    if(rowCount == 0){
  row.appendChild(txtBox);
  row.appendChild(placehold);
  row.appendChild(selector);
  row.appendChild(numInput);
    rowsContainer.appendChild(row);
  
  rowCount++;
  console.log(rowCount);}
    
    else if (rowCount >0){
      txtBox.disabled = true;
      txtBox.value ='This MS is made by : Mohammed Othman';
      txtBox.style.fontSize = '11px';
  row.appendChild(txtBox);

  row.appendChild(selector);
  row.appendChild(numInput);
  rowsContainer.appendChild(row);
  
  rowCount++;
  console.log(rowCount);
    }
    
    
}});

MtabB.addEventListener('click',(e) => {

  Ttab.style.display ='none';
  addBtn.style.display = 'inline-block';
  Mtab.style.display ='block';
MtabB.className='selected';
TtabB.className='unselected';
});


TtabB.addEventListener('click',(e) => {
  Mtab.style.display ='none';
  addBtn.style.display = 'none';
  Ttab.style.display ='block';
TtabB.className='selected';
MtabB.className='unselected';
});


