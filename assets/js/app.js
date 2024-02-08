const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high')) {
        body.style.background ='white';
        body.style.background ='black';
    }
    else{
        body.style.background ='black';
        body.style.background ='white';
    }
})