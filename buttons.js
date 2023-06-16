var animationId; // Declare the animationId variable outside both functions so that the variable can be used inside each

function start() {
    // Disables the start button and enables the stop button
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;

    var kitty = document.getElementById("kitty"); 
    var position = 0; // starts the image at 0

    function animate() {
        position += 1; // tells the code to add an increment of one to the position of the image

        // Updates the position of the kitty element
        kitty.style.top = position + "px";
        kitty.style.left = position + "px";

        var wwidth = window.innerWidth; // Get the width of the window
        var wheight = window.innerHeight; // Get the height of the window

        // Makes sure the meme aka "kitty" stays inside of the sreen window
        if (position > wwidth || position > wheight) {
           position = 0; // Resets the position to start from the beginning
        }

        // Call the animate function again in the next animation frame
        animationId = requestAnimationFrame(animate); // Assign the return value to animationId
    }

    // Start the animation loop by calling the animate function
    animate();
}

function stop() {
    // Disable the stop button and enable the start button
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;

    cancelAnimationFrame(animationId); // Use the animationId variable to cancel the function that was enabled when pushing start
}
