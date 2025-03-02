let button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    let num1 = Math.floor(Math.random() * 256) ;
    let num2 = Math.floor(Math.random() * 256) ;
    let num3 = Math.floor(Math.random() * 256) ;
    let color = `rgb(${num1}, ${num2}, ${num3})`;
    document.body.style.backgroundColor = color;
});







