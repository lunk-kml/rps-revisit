const playerText=document.querySelector('#playerText');
const computerText=document.querySelector('#computerText');
const resultText=document.querySelector('#resultText');
const reloadText=document.querySelector('#reload');

const playerButtons=document.querySelectorAll('.playerButton');


playerButtons.forEach(button => button.addEventListener('click', () => {
  player=button.id;
  computer=getComputerChoice();

  playerText.textContent=`🧑 Your Choice: ${player}`;
  computerText.textContent=`🤖 Computer Choice: ${computer}`;
  resultText.textContent=game();
  reloadText.textContent='Reload the page to restart game!';
}));

function getComputerChoice(){
  const randomNumber=Math.floor(Math.random()*3);
  if(randomNumber===0){
    return 'Rock';
  } else if(randomNumber===1){
    return 'Paper';
  } else if(randomNumber===2){
    return 'Scissor';
  }
};

function game(){
  if(player===computer){
    return 'Tie!';
  } else if (
    (player==='Rock' && computer==='Scissor') ||
    (player==='Paper' && computer==='Rock') ||
    (player==='Scissor' && computer==='Paper')
  ){
    return '🏆 You Win!';
  } else{
    return '😜 You Lost!';
  }
};