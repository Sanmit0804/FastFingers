// Generate Random quotes using API URL
// const textApiURL = "https://api.qoutable.io/random?minLength=200&maxLength=350";

const paragraphs = [
  "The rapid advancement of technology over the past few decades has profoundly impacted various aspects of society From communication to healthcare and education to entertainment technology has transformed the way we live and interact with each other Smartphones and the internet have made information more accessible than ever before bridging gaps and bringing people closer together despite geographical distances However this technological revolution also presents challenges such as data privacy concerns and the digital divide which need to be addressed to ensure that the benefits of technology are equitably distributed",

  "Environmental conservation is a critical issue that requires immediate and sustained action Human activities such as deforestation pollution and overconsumption of natural resources have led to severe environmental degradation and climate change Protecting natural habitats reducing carbon emissions and promoting sustainable practices are essential to preserving the planet for future generations Individuals communities and governments must work together to implement policies and practices that promote environmental stewardship and mitigate the negative impacts of human activity on the Earth",

  "Education is a fundamental pillar of personal and societal development It empowers individuals with the knowledge and skills necessary to navigate the complexities of the modern world and contributes to economic growth and social stability Quality education fosters critical thinking creativity and innovation preparing students to become active and informed citizens Moreover education promotes equality by providing opportunities for all regardless of background to achieve their full potential Investing in education is investing in the future ensuring that subsequent generations are equipped to face the challenges and seize the opportunities that lie ahead",

  "Art plays a vital role in society by reflecting cultural values fostering empathy and inspiring creativity Through various forms such as music literature painting and theater art communicates human experiences and emotions bridging cultural and linguistic divides It provides a platform for social commentary and can challenge societal norms sparking dialogue and promoting change Moreover engaging with art can have therapeutic benefits offering solace and a means of expression for individuals In an ever-changing world art remains a constant enriching our lives and broadening our perspectives",

  "Maintaining health and wellness is essential for a fulfilling and productive life This involves not only physical health but also mental and emotional well-being Regular exercise a balanced diet sufficient sleep and stress management are key components of a healthy lifestyle Additionally fostering strong social connections and engaging in activities that bring joy and satisfaction contribute to overall wellness In today's fast-paced world it is important to prioritize self-care and seek professional help when needed to address any health concerns By taking proactive steps towards wellness individuals can enhance their quality of life and resilience against life's challenges",
];

const textSelection = document.getElementById("quote");
const userInput = document.querySelector("#quote-input");
const RightKeySound = new Audio("./Sounds/keyPress.mp3");
const WrongKeySound = new Audio("./Sounds/wrongKeyPress.wav");

// Pop-Up
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

closeBtn.addEventListener('click',()=>{
  modal.classList.remove("open");
})

let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

// // -----------Display random Text from API
// const generateText = async () => {
//   const response = await fetch(textApiURL);
//   let data = await response.json();
//   quote = data.content;
//   let arr = quote.split("").map((value) => {
//     return "<span class='quote-chars'>" + value + "</span>";
//   });
//   textSelection.innerHTML += arr.join("");
// };

// Get the Random paragraph from our Array
function getRandomPara(index) {
  if (index >= 0 && index < paragraphs.length) {
    let quote = paragraphs[index];
    let arr = quote.split("").map((value) => {
      // return `<span class='quote-chars'> ${value} </span>`;
      return "<span class='quote-chars'>" + value + "</span>";
    });
    textSelection.innerHTML = arr.join("");
  } else {
    console.error("Index out of bound bro..!");
  }
}

// Logic for typing
userInput.addEventListener("input", () => {
  let quoteChars = document.querySelectorAll(".quote-chars");
  console.log(quoteChars);
  quoteChars = Array.from(quoteChars);
  // console.log(quoteChars);
  let userInputChars = userInput.value.split("");
  // console.log(userInputChars);

  quoteChars.forEach((char, index) => {
    if (char.innerText == userInputChars[index]) {
      char.classList.add("success");
      RightKeySound.currentTime = 0;
      RightKeySound.play();
    } else if (userInputChars[index] == null) {
      if (char.classList.contains("success")) {
        char.classList.remove("success");
      } else {
        char.classList.remove("fail");
      }
    } else {
      if (!char.classList.contains("fail")) {
        mistakes += 1;
        char.classList.add("fail");
        WrongKeySound.currentTime = 0;
        WrongKeySound.play();
      }
      document.getElementById("mistakes").innerText = mistakes;
    }

    let check = quoteChars.every((element) => {
      return element.classList.contains("success");
    });
    if (check) {
      displayResult();
    }
  });
});

// Update timer
function updateTimer() {
  if (time == 0) {
    displayResult();
  } else {
    document.getElementById("timer").innerText = --time + "s";
  }
}

// Set timer
const timeReduce = () => {
  time = 60;
  timer = setInterval(updateTimer, 1000);
};

const displayResult = () => {
  document.querySelector(".result").style.display = "block";
  clearInterval(timer);
  document.getElementById("stop-test").style.display = "none";
  userInput.disabled = true;
  let timeTaken = 1;
  if (time != 0) {
    timeTaken = (60 - time) / 100;
  }
  const wpm = document.getElementById("wpm");
  wpm.innerText = (userInput.value.length / 5 / timeTaken).toFixed(2) + "wpm";

  const accuracy = document.getElementById("accuracy");
  accuracy.innerText = Math.round(
    ((userInput.value.length - mistakes) / userInput.value.length) * 100
  );
};

// Start Test
const startTest = () => {
  mistakes = 0;
  timer = "";
  userInput.disabled = false;
  timeReduce();
  document.querySelector("#start-test").style.display = "none";
  document.querySelector("#stop-test").style.display = "block";
  userInput.focus();
};

window.onload = () => {
  modal.classList.add("open");
  userInput.value = "";
  document.querySelector("#start-test").style.display = "block";
  document.querySelector("#stop-test").style.display = "none";
  userInput.disabled = true;
  getRandomRangedPara = Math.floor(Math.random() * 4);
  // console.log(getRandomRangedPara);
  getRandomPara(getRandomRangedPara);
};

// Restart the game
document.getElementById("restart").addEventListener("click", () => {
  window.location.reload();
});


// dark theme
document.addEventListener('DOMContentLoaded', function () {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggleBtn.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');
      themeToggleBtn.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });

  // Initialize theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark-mode');
      themeToggleBtn.textContent = 'Light Mode';
  } else {
      body.classList.add('light-mode');
      themeToggleBtn.textContent = 'Dark Mode';
  }
});
