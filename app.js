let energy = 100;
let money = 50;
let fame = 0;
let day = 1;

function updateUI() {
  document.getElementById("energy").textContent = energy;
  document.getElementById("money").textContent = money;
  document.getElementById("fame").textContent = fame;
  document.getElementById("day").textContent = "Day " + day;
}

function log(msg) {
  const logBox = document.getElementById("log");
  logBox.innerHTML = msg + "<br>" + logBox.innerHTML;
}

function nextDay() {
  day++;
  energy -= 10;
  if (energy <= 0) {
    log("💀 You burned out. Game Over coming soon.");
  }
}

/* Actions */
function sleep() {
  energy = Math.min(100, energy + 40);
  log("😴 Full rest.");
  nextDay();
  updateUI();
}

function eat() {
  if (money >= 10) {
    money -= 10;
    energy += 20;
    log("🍽️ Refueled.");
  } else {
    log("❌ Broke.");
  }
  nextDay();
  updateUI();
}

function record() {
  if (energy >= 20) {
    energy -= 20;
    fame += 8;
    log("🎙️ Track recorded.");
  } else {
    log("❌ No energy.");
  }
  nextDay();
  updateUI();
}

function post() {
  energy -= 10;
  fame += 5;
  log("📱 Content posted.");
  nextDay();
  updateUI();
}

function perform() {
  if (energy >= 30) {
    energy -= 30;
    money += 75;
    fame += 15;
    log("🔥 Live show success.");
  } else {
    log("❌ Too tired.");
  }
  nextDay();
  updateUI();
}

updateUI();
