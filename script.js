function linkedIn() {
  window.open(
    "https://www.linkedin.com/in/nicholas-saltkill-713946113/",
    "_blank"
  );
}

function Yugioh() {
  window.open("yugioh/index.html", "_blank");
}
function WoT() {
  var w_name = "The Wheel of Time Character Array";
  var w_about = "I wanted to make a array of character from my favorite book series that lists character and their associations in the book. I want to make several arrays and buttons that can be clicked to get names that are associated with that area, group, race, and or military. It is a very long book with a lot of characters so I plan to just do the main cast at this time and adding more when I can.";
  var w_link = w_name.link("https://WoTcharacters.ninjanick15.repl.co");

  document.getElementById("Name").innerHTML = w_name;
  document.getElementById("Info").innerHTML = w_about;
  document.getElementById("Link").innerHTML = w_link;

}

function Space() {
  var s_name = "Space Invaders";
  var s_about = "This was my final project in computing principles. I wanted to make the space invaders game. it involved loading images, creating different arrays, as well as player and enemy movement. I was unable to get the enemy to move together and i had issues with the collision between the players bullets and the enemy. I never got to the enemy bullets due to this so I am not sure if i could have made those easily or not.";
  var s_link = s_name.link("https://editor.p5js.org/Ninjanick/sketches/STBUH1_xN");

  document.getElementById("Name").innerHTML = s_name;
  document.getElementById("Info").innerHTML = s_about;
  document.getElementById("Link").innerHTML = s_link;

}