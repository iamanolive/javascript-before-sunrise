function changeColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

function changeCommentID() {
    const commentID = Math.floor(Math.random() * 10);
    return commentID;
}

function changeContent() {
    const commentBody = document.querySelector(".comment-text");
    const commentAuthor = document.querySelector(".comment-signoff");
    const commentImage = document.querySelector(".profile-img");
    const container = document.querySelector(".container");

    fetch("./data/data.json")
        .then(response => response.json())
        .then(json => {
            const currentComment = json[changeCommentID()];
            commentBody.innerText = currentComment["comment-body"];
            commentAuthor.innerText = currentComment["author-name"];
            commentImage.src = currentComment["author-img"];
            container.style.backgroundColor = changeColor();
        })
}

setInterval(() => {
    changeContent();
}, 1000);