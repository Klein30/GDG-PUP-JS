let buttonAdd = document.getElementById('button-add');
let buttonSubtract = document.getElementById('button-subtract');

buttonAdd.addEventListener('click', () => {
    let result = document.getElementById('counter-text');
    let x = Number(result.innerHTML);
    x += 1;
    result.textContent = x;
});

buttonSubtract.addEventListener('click', () => {
    let result = document.getElementById('counter-text');
    let x = Number(result.innerHTML);
    if (x != 0){
    x -= 1;
    }
    result.textContent = x;
});