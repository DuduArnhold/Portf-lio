let txtAnimation = document.querySelector('h1');


function animaçãoHome(elemento){
    const txtArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    txtArray.forEach((letra, i) => {
        setTimeout(() =>{
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}

animaçãoHome(txtAnimation);