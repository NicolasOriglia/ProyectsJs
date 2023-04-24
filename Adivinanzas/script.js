let riddle = document.getElementById('riddle');
let replyValue = document.getElementById('riddle__reply');
let btnSubmit = document.querySelector('.btn');


const riddles = [
    { question: 'Que quieren decir las siglas HTML en inglés?',
      answer: 'HyperText Markup Language' 
    },
    { question: 'Qué es lo que imprime el siguiente código en la consola? :  console.log("1" + 2 + 3);',
      answer: "123" 
    },
    { question: 'Cómo se llama el proceso de convertir código fuente en código ejecutable?',
      answer: "Compilación" 
    }
];

let currentQuestion = 0;
let countError = 0;
let foundQuestion = false;
riddle.innerHTML = riddles[currentQuestion].question;


function showError(){
  let divError = document.querySelectorAll('.error');

  if(!foundQuestion){
    countError ++;
    console.log('Resply incorrect');
  
    if (countError <= divError.length) {
      console.log("Adding icon...");
      let iconError = document.createElement('i');
      iconError.classList.add('fas', 'fa-times');
      divError[countError - 1].appendChild(iconError);
      console.log("Icon added!");
    }
  
    if (countError >= divError.length) {
      let gameOver = document.querySelector('.final__sms-lose');
      gameOver.style.display = 'block'; 
    }
  }
};

function showWin(){
  let win = document.querySelector('.final__sms-win');
  let totalErrors = document.querySelector('.total-errors');

  win.style.display = 'block';
  totalErrors.textContent= `Errores totales : ${countError}`
}

const checkAnswer = (answerUser) =>{
  const answerValue = answerUser.trim().toLowerCase();

  for(let i = 0; i < riddles.length; i++){

    if(riddles[i].question === riddle.innerHTML){
      let answer = riddles[i].answer.toLowerCase();
      if(answerValue === answer && currentQuestion === riddles.length-1){
        showWin(); 
        break;
      }
      if(answerValue === answer){
        currentQuestion ++;
        riddle.innerHTML = riddles[currentQuestion].question;
        replyValue.value = '';
        foundQuestion = true;
        titleLvl= document.getElementById('title').innerHTML = `Level - ${currentQuestion+1} :`;
        
      }else if(!foundQuestion){
        foundQuestion = false;  
        showError();
      }
    }
  }
  foundQuestion = false;  
};

btnSubmit.addEventListener('click', function(ev){
  ev.preventDefault();

  const answerUser = replyValue.value;
  checkAnswer(answerUser);
});

