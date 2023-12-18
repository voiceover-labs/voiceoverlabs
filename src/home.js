document.addEventListener("DOMContentLoaded", function() {
    const doors = document.querySelectorAll(".door");
    let audio = null;

    function playAudio(fileName) {
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the beginning
        }

        audio = new Audio(fileName);
        audio.play();
    }

    function stopAudio() {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    function toggleDoor(door) {
        const frontDoor = door.querySelector('.door-front');
        frontDoor.classList.toggle("open");

        const doorNumber = door.id.replace("door", ""); // Extract the door number from the door ID
        const audioFileName = doorNumber + '.mp3';

        if (frontDoor.classList.contains("open")) {
            playAudio(audioFileName);
        } else {
            stopAudio();
        }
    }

    doors.forEach(door => {
        door.addEventListener("click", function() {
            toggleDoor(door);
        });
    });
});
