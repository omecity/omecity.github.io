
const div = document.getElementById("typewriter-text");
const text = "Lifelong Learner, Sport Aficionado, Teacher at Heart.";

function typeWriter(element, text, i = 0) {

if (i === 0){
  element.textContent = "";
}

element.textContent += text[i];

if (i === text.length - 1) {
  return;
}
  setTimeout(() => typeWriter(element, text, i + 1), 100); 

}

typeWriter(div, text);