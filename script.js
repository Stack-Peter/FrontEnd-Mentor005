const drop = document.querySelector('.background-share');
const dropFlex = document.querySelector('.drop');
function handleClick() {
    dropFlex.classList.toggle('ativo')
}
drop.addEventListener('click', handleClick);