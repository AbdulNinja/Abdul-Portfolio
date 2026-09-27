const skills = ["Html", "CSS", "javascript"];
const skillsList = document.getElementById("skills-list");

for (let skill of skills) {
    skillsList.innerHTML += <li>${skill}</li>;
}
const Projects = [
    {
        title: "Project 1",
        description: "my store",
        design:"Html , CSS, javascript"
    },
    {
        title: "project 2",
        description: "CloudMart",
        design:"Html, CSS, Javascript"
    }
];
const projectContainer = document.getElementById("projects-container");



