function tournerImage() {
    let temp = document.getElementById("oranj-drol-1").src;
    document.getElementById("oranj-drol-1").src = document.getElementById("oranj-drol-4").src;
    document.getElementById("oranj-drol-4").src = document.getElementById("oranj-drol-3").src;
    document.getElementById("oranj-drol-3").src = document.getElementById("oranj-drol-2").src;
    document.getElementById("oranj-drol-2").src = temp;
}