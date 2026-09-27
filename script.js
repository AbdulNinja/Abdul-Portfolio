const skills = ["Html", "CSS", "javascript"];
const skillsList = document.getElementById("skills-list");

for (let skill of skills){
    skillsList.innerHTML += <li>${skill}</li>;
}
