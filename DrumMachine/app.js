const btnDrumPad = document.querySelectorAll('.drum-pad');
const powerBtn = document.querySelector('.power');
const volumeSlider = document.querySelector('.slider');
const display = document.getElementById('display');
const btnBank = document.querySelector('.bank');
let isPower = false;
let currentBank = bankOne;

const audioElement = document.createElement('audio');

btnDrumPad.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

powerBtn.addEventListener('click',
    () => !isPower ? isPower = true : isPower = false);

volumeSlider.addEventListener('input', handleVolume);

btnBank.addEventListener('click',
    () => currentBank === bankOne
        ? currentBank = bankTwo
        : currentBank = bankOne);

function handleClick(e) {

  if (!isPower) return;

  audioElement.classList.add('clip');
  let drumPad = e.currentTarget;

  let index = currentBank.findIndex(
      x => x.keyTrigger === drumPad.textContent.trim());
  let sound = currentBank[index];

  audioElement.id = currentBank[index].keyTrigger;

  console.log(currentBank);

  drumPad.appendChild(audioElement);

  // audioElement.volume = parseFloat(currentVolume / 100);
  audioElement.src = sound.url;
  audioElement.cloneNode().play();

  toScreen(sound.id);
  console.log('Elment volume: ' + audioElement.volume);
}

function toScreen(soundName) {
  display.textContent = soundName;
}

function handleVolume() {
  currentVolume = parseFloat(volumeSlider.value);
  display.textContent = `Volume : ${volumeSlider.value}`;
}

// function changeBankSound() {
//
//   if (isBankOne){
//     currentBank  = bankOne
//   }
//
// }