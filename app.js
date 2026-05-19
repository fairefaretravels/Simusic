let energy = 100;
let money = 50;
let fame = 0;

function updateUI() {
  document.getElementById("energy").textContent = energy;
  document.getElementById("money").textContent = money;
  document.getElementById("fame").textContent = fame;
}

function log(msg) {
  const logBox = document.getElementById("log");
  logBox.innerHTML = msg + "<br>" + logBox.innerHTML;
}

// Actions
function sleep() {
  energy = Math.min(100, energy + 30);
  log("😴 You slept and restored energy.");
  updateUI();
}

function eat() {
  if (money >= 10) {
    money -= 10;
    energy += 15;
    log("🍔 You ate food.");
  } else {
    log("❌ Not enough money to eat.");
  }
  updateUI();
}

function record() {
  if (energy >= 20) {
    energy -= 20;
    fame += 5;
    log("🎙️ You recorded music. Fame increased!");
  } else {
    log("❌ Too tired to record.");
  }
  updateUI();
}

function post() {
  if (energy >= 10) {
    energy -= 10;
    fame += 3;
    log("📱 You posted content.");
  } else {
    log("❌ Too tired to post.");
  }
  updateUI();
}

function perform() {
  if (energy >= 30) {
    energy -= 30;
    money += 50;
    fame += 10;
    log("🔥 You performed live! Big gains.");
  } else {
    log("❌ Not enough energy to perform.");
  }
  updateUI();
}

updateUI();
