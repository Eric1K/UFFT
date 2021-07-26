/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");




function Find(){
  var username = "";
  username = document.getElementById('username').value;
  console.log("Username: " + username);
  
  if(username != "")
  {
    var link = "https://fortnitetracker.com/profile/all/";
    link = link.concat('', username);
    link = link.concat('', "/events");
    
    console.log("Link: " + link);
     window.open(link, '_blank').focus();

  }else
  {
    console.log("empty username");
  }
}

function AddFindListener(){
  var input = document.getElementById("username");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("findbtn").click();
              console.log("Find Button Clicked");

      }
    });
}