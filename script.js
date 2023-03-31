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


const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItens = items.length;

controls.forEach((control) =>{
    control.addEventListener('click', (e) =>{
        const isLeft = e.target.classList.contains("arrow-left");
            if (isLeft){
                currentItem -= 1;
            }else{
                currentItem += 1;
            }

            if (currentItem >= maxItens){
                currentItem = 0;
            }

            if (currentItem < 0){
                currentItem = maxItens - 1;
            }
        console.log('control clicked', isLeft, currentItem)


items.forEach((item) =>{
    item.classList.remove('current-item');
})

items[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
});

items[currentItem].classList.add("current-item")

})
})