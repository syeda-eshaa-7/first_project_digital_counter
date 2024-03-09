// Project by Syeda Esha

const count = document.getElementById('tital');
const add = document.getElementById('increment');
const reset = document.getElementById('reset');
const sub = document.getElementById('decrement');

//to increse the value
add .addEventListener('click', () => {
   count.innerHTML++;
})
//to dicrese the value
sub.addEventListener('click', () => {
   count.innerHTML--;
});
//to reset the value
reset.addEventListener('click', () => {
   count.innerHTML=0;
});