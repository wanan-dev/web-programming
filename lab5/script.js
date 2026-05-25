function startGame() {
    let difficulty = document.getElementById("difficulty").value;
    let color = document.getElementById("color").value;

    if (difficulty === "" || color === "") {
        alert("Please choose difficulty and color!");
        return;
    }

    alert("Game started!");
}
