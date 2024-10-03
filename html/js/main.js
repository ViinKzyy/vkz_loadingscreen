// Existing code (you can keep this as is)
var count = 0;
var thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector('.progressBar').style.left = '0%';
        document.querySelector('.progressBar').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;
        document.querySelector('.progressBar').style.left = '0%';
        document.querySelector('.progressBar').style.width = ((thisCount / count) * 100) + '%';
    },
};

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () { })(e.data);
});

// New code to toggle play/pause with the space bar

// Get the audio element
const audio = document.querySelector('#audio audio');

// Add event listener for keydown
window.addEventListener('keydown', function (event) {
    // Check if the space bar (key code 32) is pressed
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent the default behavior (scrolling, etc.)

        // Check if the audio is playing
        if (audio.paused) {
            audio.play(); // Play the audio if it's paused
        } else {
            audio.pause(); // Pause the audio if it's playing
        }
    }
});