const searchButtom = document.querySelector('.search-icon-content');
const input = document.querySelector('.header-input input');


searchButtom.addEventListener('click', () => {
    const inputValue = input.value;
    alert(inputValue);

})


