const HTMLBox = document.getElementById("HTMLBox");
const HTMLBtn = document.getElementById("HTMLBtn");

HTMLBtn.onclick = function() {
    HTMLBox.select();
    document.execCommand("copy");
    HTMLBtn.textContent = "Copied";
    HTMLBtn.style.backgroundColor = "#6585a5";
}

const CSSBox = document.getElementById("CSSBox");
const CSSBtn = document.getElementById("CSSBtn");

CSSBtn.onclick = function() {
    CSSBox.select();
    document.execCommand("copy");
    CSSBtn.textContent = "Copied";
    CSSBtn.style.backgroundColor = "#6585a5";
}

const JSBox = document.getElementById("JSBox");
const JSBtn = document.getElementById("JSBtn");

JSBtn.onclick = function() {
    JSBox.select();
    document.execCommand("copy");
    JSBtn.textContent = "Copied";
    JSBtn.style.backgroundColor = "#6585a5";
}

// add codes 

HTMLBox.textContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Preview</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c8db5d00c1.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <figure class="image-container">
            <img id="chosen-image">
            <figcaption id="file-name"></figcaption>
        </figure>
        <input type="file" id="upload-button" accept="image/*">
        <label for="upload-button"><i class="fas fa-upload"></i>&nbsp;Choose a Pic</label>
    </div>

    <script src="script.js"></script>
</body>
</html>`;

CSSBox.textContent = `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Verdana, sans-serif;
}

body {
    background-color: #f5fcf8;
}

.container {
    width: 60%;
    min-width: 320px;
    padding: 50px 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
}

.image-container {
    width: 90%;
    margin: 0 auto 30px;
}

.image-container img {
    margin: auto;
    display: block;
    position: relative;
    max-width: 100%;
    max-height: 400px;
}

figcaption {
    margin: 20px 0 30px;
    text-align: center;
    color: #2a292a;
}

input[type="file"] {
    display: none;
}

label {
    width: 300px;
    margin: auto;
    padding: 18px 0;
    display: block;
    position: relative;
    background-color: #025bee;
    color: #fff;
    font-size: 18px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}`;

JSBox.textContent = `const uploadButton = document.getElementById("upload-button");
const chosenImage = document.getElementById("chosen-image");
const fileName = document.getElementById("file-name");

uploadButton.onchange = () => {
    let reader = new FileReader();

    reader.readAsDataURL(uploadButton.files[0]);

    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
        fileName.textContent = uploadButton.files[0].name;
    }
}`;