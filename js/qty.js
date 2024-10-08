
let words = ['Lifelong Learner', 'Sport Aficionado', 'Teacher at Heart'];

// Get the output element by its ID
const outputDiv = document.getElementById('quality');

function printQualities() {
  words.forEach((word, index) => {
    setTimeout(() => {
      if (outputDiv) {
        outputDiv.innerHTML += `<p class="word">${word}</p>`;
      }
    }, (index+1) * 1000);  // 1000ms delay between each word
  });
}

// function call
printQualities();