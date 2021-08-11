const container = document.getElementById("projects");

fetch("data.json")
    .then(data => data.json())
    .then(projects => projects.forEach(project => renderProject(project)));

function renderProject({ date, name, url, stack }) {
    // create a new project row
    let row = document.createElement("A");
    row.setAttribute("href", `projects/${url}`);
    row.setAttribute("target", "_blank");
    row.classList.add("row");
    container.appendChild(row);

    // create the title column
    let titleColumn = document.createElement("DIV");
    titleColumn.classList.add("col");
    let title = document.createElement("SPAN");
    title.textContent = name;
    title.classList.add("title");
    titleColumn.appendChild(title);
    row.appendChild(titleColumn);

    // create the date column
    let dateColumn = document.createElement("DIV");
    dateColumn.classList.add("col");
    let dateSpan = document.createElement("SPAN");
    dateSpan.textContent = date;
    dateSpan.classList.add("date");
    dateColumn.appendChild(dateSpan);
    row.appendChild(dateColumn);

    // create the stack column
    let stackColumn = document.createElement("DIV");
    stackColumn.classList.add("col");
    stack.forEach(item => {
        let img = document.createElement("IMG");
        img.classList.add("tech");
        img.setAttribute("src", `img/${item}.png`);
        img.setAttribute("alt", item);
        stackColumn.appendChild(img);
    });
    row.appendChild(stackColumn);
}