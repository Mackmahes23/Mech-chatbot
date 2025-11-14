const responses = {
  "first law of thermodynamics":
    "The First Law of Thermodynamics states that energy cannot be created or destroyed. ΔU = Q - W.",
    
  "reynolds number":
    "Reynolds number predicts flow type. Re < 2300 = laminar, > 4000 = turbulent.",
    
  "entropy":
    "Entropy measures disorder. For reversible processes, ΔS = Qrev / T.",
    
  "difference between heat and temperature":
    "Heat = energy transfer due to temperature difference. Temperature = measure of particle motion.",
    
  "bernoulli":
    "Bernoulli’s Equation: P + ½ρV² + ρgh = constant along a streamline.",
    
  "stress":
    "Stress in a beam: σ = My/I. Axial stress: σ = F/A.",
    
  "heat transfer":
    "Three modes: Conduction, Convection, Radiation.",
    
  "factor of safety":
    "FoS = Ultimate strength / Working stress.",
    
  "default":
    "I can help with Thermodynamics, Fluids, Heat Transfer, Manufacturing, Dynamics, and more!"
};

function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  if (userInput.trim() === "") return;

  addMessage(userInput, "user");
  document.getElementById("userInput").value = "";

  const lower = userInput.toLowerCase();
  let reply = responses["default"];

  for (let key in responses) {
    if (lower.includes(key)) {
      reply = responses[key];
      break;
    }
  }

  setTimeout(() => {
    addMessage(reply, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const box = document.getElementById("chatbox");
  const msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.innerText = text;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}
