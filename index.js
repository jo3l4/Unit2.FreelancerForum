const names = ["Alice", "Bob", "Carol"];
const occupations = ["writer", "teacher", "programmer"];


let freelancers = [];

// function to render
function renderFreelancers() {
  const freelancerInfo = document.getElementById("freelancer-info");
  freelancerInfo.innerHTML = ""; 

  freelancers.forEach(freelancer => {
    const div = document.createElement("div");
    div.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.startingPrice}`;
    freelancerInfo.appendChild(div);
  });
}

// generate a new random freelancer
function generateRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const startingPrice = Math.floor(Math.random() * 50) + 40; 

  freelancers.push({ name, occupation, startingPrice });
  renderFreelancers();
  updateAveragePrice();
}


setInterval(generateRandomFreelancer, 3000); 


