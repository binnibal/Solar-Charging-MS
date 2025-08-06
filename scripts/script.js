const row = document.createElement('div');
row.className = "my-class";
const txtBox = document.createElement('input')
txtBox.setAttribute('type','text');
txtBox.required = true;
txtBox.className='txtBox'
const selector = document.createElement('select');
selector.required = true;
selector.className ='selector'
const numInput = document.createElement('input');
numInput.className = 'numInput';
numInput.required = true;
numInput.setAttribute('min','1');
numInput.setAttribute('max','10');
