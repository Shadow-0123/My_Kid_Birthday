document.addEventListener('DOMContentLoaded', function () {
    // Handle the start button click event
    document.getElementById("startBtn").addEventListener("click", function () {
      // Hide the start button and show the message container
      document.getElementById("startBtn").style.display = "none";
      document.getElementById("messageContainer").style.display = "block";
      // Start displaying messages with a delay
      displayMessages();
    });
  });
  
  // Function to display messages one by one
  function displayMessages() {
    const messages = [
      "Time to level up! Happy Birthday, Idiot!", // Awakening
      "Like Jinwoo, you’ve faced challenges, and you’ve conquered them all. Keep slaying!", // Challenge
      "You’re not just growing older, you’re leveling up. Power up, it’s your day!", // Power Surge
      "Just like Jinwoo’s Shadows, I’m always here for you, no matter what!", // Shadows
      "Today is your victory! Go ahead and conquer the world!!", // Victory
      "On your special day, may you gain the strength of a thousand shadows. Happy Birthday!" // Special Strength
    ];
  
    const gifs = [
      "gif1.gif", // Awakening
      "gif2.gif", // Challenge
      "gif4.gif", // Power Surge
      "gif3.gif", // Shadows
      "gif6.gif",  // Victory
      "gif5.gif" // Special Strength
    ];
  
    let messageIndex = 0;
  
    // Show the first message and gif
    setMessageAndGif(messages[messageIndex], gifs[messageIndex]);
  
    // Handle next button click event
    document.getElementById("nextBtn").addEventListener("click", function () {
      messageIndex++;
      if (messageIndex < messages.length) {
        // Fade out the current message and gif, then show the next one
        fadeOutIn(messages[messageIndex], gifs[messageIndex]);
      } else {
        // Show final happy birthday message
        document.getElementById("message").innerHTML = "🎉 Once again Happy Birthday to my favorite person! 🎉";
        document.getElementById("gifContainer").innerHTML = `<img src="final.gif" alt="Happy Birthday GIF" class="img-fluid">`;
        
        // Hide the next button once the last message is displayed
        document.getElementById("nextBtn").style.display = "none"; // Hide the next button on the last message
      }
    });
  }
  
  // Function to display message and GIF
  function setMessageAndGif(message, gifUrl) {
    document.getElementById("message").innerHTML = message;
    document.getElementById("gifContainer").innerHTML = `<img src="${gifUrl}" alt="gif" class="img-fluid" style="max-width: 100%; height: auto;">`;
  }
  
  // Function to handle fade-out and fade-in effect for smooth transition
  function fadeOutIn(message, gifUrl) {
    const messageElement = document.getElementById("message");
    const gifContainer = document.getElementById("gifContainer");
  
    // Add fade-out effect
    messageElement.classList.add("fade-out");
    gifContainer.classList.add("fade-out");
  
    setTimeout(function () {
      // Update message and gif after fade-out
      setMessageAndGif(message, gifUrl);
  
      // Add fade-in effect
      messageElement.classList.remove("fade-out");
      gifContainer.classList.remove("fade-out");
  
      messageElement.classList.add("fade-in");
      gifContainer.classList.add("fade-in");
    }, 500); // Wait for 500ms before switching content
  }
  