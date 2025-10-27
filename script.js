// Mood tracking functionality
const moodButtons = document.querySelectorAll('.mood-buttons button');

moodButtons.forEach(button => {
    button.addEventListener('click', function() {
        const mood = this.textContent;
        alert(`You selected: ${mood}\nThis mood has been saved!`);
        // Here you can add code to save the mood to local storage
    });
});
