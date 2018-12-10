const MAX_FISH = 10;
const MAX_BUBBLES = MAX_FISH * 3;
let fishNum = 0;
let bubbleNum = 0;

const getCanvas = () => {
  const FISH_CANVAS = document.getElementById("canvas");
  return FISH_CANVAS;
};

let getFish = fishId => {
  let fish_pos = document.getElementById(fishId);
  return fish_pos;
};

let fishRandom = () => {
  return Math.floor(Math.random() * 280 + 1);
};

function addFish() {
  if (fishNum < MAX_FISH) {
    let fishDiv = document.createElement("div");
    fishDiv.className = "fish";
    fishDiv.id = "fish_" + fishNum;
    fishDiv.style.top += fishRandom() + "px";
    fishDiv.style.zIndex = fishRandom();
    getCanvas().appendChild(fishDiv);
    fishNum++;
  }
}

let makeBubble = () => {
  if (bubbleNum < MAX_BUBBLES) {
    if (fishNum === 0) {
      return;
    } else {
      for (let i = 0; i < fishNum; i++) {
        let bubbleNode = document.createElement("div");
        bubbleNode.classList.add("bubble");
        bubbleNode.id = "bubble_" + bubbleNum;
        bubbleNode.style.left = 100 + "px";
        let fish = getFish("fish_" + i);
        bubbleNode.style.zIndex = fish.style.zIndex;
        fish.appendChild(bubbleNode);
        bubbleNum++;
        setTimeout(function() {
          fish.removeChild(bubbleNode);
          bubbleNum--;
        }, 3000);
      }
    }
  }
};

function touch() {
  getCanvas().addEventListener("touchstart", addFish(), false);
  getCanvas().addEventListener("touchend", makeBubble(), false);
}

