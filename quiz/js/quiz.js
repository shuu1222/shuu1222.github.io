'use strict';
{
  const question = document.getElementById('question');
  const btn = document.getElementById('btn');
  const choices = document.getElementById('choices');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const quizSet = [
    {q: 'ビールの原料にならないものはどれ', c:['オリーブオイル','イースト','魚の浮袋']},
    {q: 'ビールの苦みに影響しないものは', c:['ビールの色','グラスの薄さ','ホップの量']},
    {q: '国民一人当たりのビール消費が一番多いのは', c:['チェコ','イギリス','ドイツ']}
  ];

  let currentNum = 0;
  let isAnswered;
  let score = 0;

function shuffle(arr){
for(let i = arr.length - 1; i>0; i--) {
  const j = Math.floor(Math.random()*(i+1)); //floorで少数点以下をバッサリ
    [arr[j],arr[i]] = [arr[i],arr[j]];
}
  return arr;
}

function checkAnswer(li){
  // if(isAnswered === true){
  if(isAnswered){
    return;
  }
  isAnswered = true;
  if (li.textContent === quizSet[currentNum].c[0]){
    // console.log('correct');
    li.classList.add('correct')
    score ++;
  }else{
    // console.log('wrong');
    li.classList.add('wrong')
  }
btn.classList.remove('disabled');

}

function setQuiz(){
  isAnswered = false;
  question.textContent = quizSet[currentNum].q;

  while(choices.firstChild){
    choices.removeChild(choices.firstChild);
  }

  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice =>{
    const li = document.createElement('li');
    li.textContent=choice;
    li.addEventListener('click',()=>{
      checkAnswer(li);
    })
    choices.appendChild(li);
  });
  if (currentNum === quizSet.length -1){
    btn.textContent="SHOW SCORE";
  }
}
setQuiz();

btn.addEventListener('click',()=>{
  if(btn.classList.contains('disabled')){
    return;
  }
  btn.classList.add('disabled');
  if(currentNum === quizSet.length -1){
    // console.log(`${quizSet.length}問中${score}問正解！ `);
    scoreLabel.textContent = `${quizSet.length}問中${score}問正解！ `;

    result.classList.add('show');
  }else{
  currentNum++;
  setQuiz();
}
});
}
