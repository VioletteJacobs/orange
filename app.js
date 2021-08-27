const spanContainer = document.querySelectorAll('.title div')

spanContainer.forEach(item => {

    const letters = item.children[0].textContent.split('');
    item.innerHTML="";

    letters.forEach((el, index) => {
        item.innerHTML += `<span style="transition-delay : ${ 0.09 * index}s">${el}</span>`
    })
})