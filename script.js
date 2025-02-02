document.getElementById("checkDate").addEventListener("click", function() {
    const inputDate = document.getElementById("dateInput").value;
    const correctDate = "2025-01-09"; 
    const message = document.getElementById("message");
    if (inputDate === correctDate) {
        window.location.href = "true.html";
    } else {
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = 'voice/chemodan.mp3';
        audio.play();
    }
});