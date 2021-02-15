const area = document.querySelector('#area');
let move = 0;
let result = '';
const content = document.querySelector('.content');
const modalResult = document.querySelector('.modal-result');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');


area.addEventListener('click', e => {
    if(e.target.className == 'box'){
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
    }
})

const check = () => {
    const boxes = document.querySelectorAll('.box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]
    for(let i = 0; i < arr.length; i++){
        if(
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
            ){
                result = 'X wins!';
                showResult(result);
            } else if( 
                boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0'
            ){
                result = '0 wins!';
                showResult(result);
            } 
    }
}

const showResult = winner => {
    content.innerHTML = `Congratulations! ${winner}`;
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);