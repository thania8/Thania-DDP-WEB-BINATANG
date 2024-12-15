function sound(animal) {
    const sound = document.getElementById("sound");
    sound.scr = 'sound/$(animal).mp3';
    sound.play();
}