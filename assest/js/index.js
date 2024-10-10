let body = document.querySelector("body");
const counterDisplay = document.querySelector("h3");
const play = document.querySelector("button");
let counter = 0;

//pour integrer le tactile
let hammertime = new Hammer(body);

play.addEventListener('click', function () {
  bubbleMaker();
  play.remove();
  setInterval(bubbleMaker, 800);
}
);

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const bubbleBlack = document.createElement("span");
  bubbleBlack.classList.add("bubbleBlack");
  document.body.appendChild(bubbleBlack);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubbleBlack.style.height = size;
  bubbleBlack.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubbleBlack.style.top = Math.random() * 100 + 50 + "%";
  bubbleBlack.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  })

  bubbleBlack.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
    bubbleBlack.remove();
  })

    setTimeout(() => {
      bubble.remove();
      bubbleBlack.remove();
    }, 8000);
  };



  ///gestion tactile
  hammertime.get('press').set({ enable: true });

  // listen to events...
  hammertime.on("press pressup", function (ev) {
    console.dir(ev.type);
    switch (ev.type) {
      case "press pressup":
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
        break;
      default:
        break;
    }
  });