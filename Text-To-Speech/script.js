const textArea = document.querySelector('textarea'),
voiceList = document.querySelector('select'),
speechBtn = document.querySelector('button');

let synth = speechSynthesis,
isSpeaking = true;

voices();

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === 'Google US English' ? 'selected' : '';
        let option = `<option value='${voice.name}' ${selected}>${voice.name}
        (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML('beforeend', option);
    }
} 

synth.addEventListener('voiceschanged', voices);

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

speechBtn.addEventListener('click', ev =>{
    ev.preventDefault();
    if(textArea.value !== ''){
        //Chech if no speaking, speack textarea text
    
        if(!synth.speaking){
            textToSpeech(textArea.value);
        }
        //If text is was long, Add resume and pause function 
        if(textArea.value.length > 80){
            setInterval(() =>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerText = 'Convert to Speech';
                }else{ }
            }, 500);
            if(isSpeaking) {
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = 'Pause Speech';
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = 'Resume Speech';
            }
        }else{
            speechBtn.innerText ='Convert to Speech';
        }
    }
});
