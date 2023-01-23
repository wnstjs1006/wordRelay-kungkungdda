const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

const playNumber = Number(prompt('몇 명이 참가하나요?'));

let word;       //제시어
let newWord;    //입력한 단어

const onInput = function(event) {
    newWord = event.target.value;
};

$input.addEventListener('input', onInput);

