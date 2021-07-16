const list = document.querySelector("#list");

fetch("data.json")
    .then(data => data.json())
    .then(projects => projects.forEach(project => renderProject(project)));

function renderProject({ date, name, url, stack }) {
    const item = document.createElement("LI")
    const project = document.createElement("A");
    project.textContent = name;
    project.href = url;

    item.appendChild(project);
    list.appendChild(item);
}