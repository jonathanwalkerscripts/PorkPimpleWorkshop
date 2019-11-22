var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
var yername;
var houses = ['Lionsnoop', 'Sneezlewheeze', 'Hummingtalon', 'Wigglesnake',];
var housename = houses[Math.floor(Math.random() * houses.length)];
var score = 0;









input.onkeypress = function(event) {
  if (event.key == "Enter" || event.keyCode == 13) {
    yername =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)




    
    
  }
};




function fadeOut() {
  document.getElementById("text").style.opacity = "0";
  document.getElementById("images").style.opacity = "0";
  document.getElementById("buttonBox").style.opacity = "0";
  document.getElementById("body").style.opacity = "0";
}

function fadeIn() {
  document.getElementById("text").style.opacity = "1";
  document.getElementById("images").style.opacity = "1";
  document.getElementById("buttonBox").style.opacity = "1";
  document.getElementById("body").style.opacity = "1";
  
  
}



var changeText = function(words) {
  
  text.innerHTML = words.replace("yourname", yername).replace("yoname",yername)
 .replace("housename", housename).replace("yohouse", housename).replace("playerhouse", housename);


  
 if (housename == "Wigglesnake")
 {
 document.body.style.background = "#0D6217";
 document.body.style.border = "thick ridge #AAAAAA";
 document.getElementById("text").style.color = '#AAAAAA';



 }
 else if (housename == "Hummingtalon")
 {
   document.body.style.background = "#000A90";
   document.body.style.border = "thick ridge #946b2d";
   document.getElementById("text").style.color = '#946b2d';
  //  document.getElementById("button").style.color = '#946b2d';
  //  document.getElementById("button").style.background = '##000A90';
   
 }
 else if (housename == "Sneezlewheeze")
 {
   document.body.style.background = "#EEE117";
   document.body.style.border = "thick ridge black";
   document.getElementById("text").style.color = 'black';
 }
 else if (housename == "Lionsnoop")
 {
   document.body.style.background = "#7f0909";
   document.body.style.border = "thick ridge #ffc500";
   document.getElementById("text").style.color = '#ffc500';
   
 }

 


  console.log (changeText);
  
  
};



var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};

var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "<b>";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};



var advanceTo = function(s) {
  fadeOut () 
 
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
  setTimeout(fadeIn, 500);
  
  
  
};

var advancePointsTo = function(s) {
  fadeOut () 
  // addPoints()
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
  setTimeout(fadeIn, 500);
  
  
  
};




scenario = {}
var scenario = {
  
  one: {
    image: "sockpuppet1.jpg", //dog
    text: "<b>Congratulations! You have been accepted to the Porkpimple School of Wands and Sorcery. Just sign your name below to get started with your magical education.</b>\n",
    
  },
  two: {
    image: "https://media.giphy.com/media/d3NjSIKlYXH2g/giphy.gif", //house
    text: "You slip on the strange, foul-smelling sock and wait. You feel a stirring at your ankle before it turns to you and speaks, \"Ah, yes! I've been waiting for you, yourname. I could smell you from a mile away. You may thrive within any house, in truth, but only one will help you achieve your full potential. You are destined for <b>House housename!</b>\"",
    buttons: [["Leave the Student Hall","advanceTo(scenario.three)"]]
  },
  three: {
    image: "",
    text: "<b>yohouse House Points: 0 </b><br> Before you can exit the hall, a small man hobbles up to you and grasps you by the shoulder. \"yourname, congratulations on your selection to House housename!\" The man flashes a smile through an overgrown grey mustache. You begin to thank him, but he rambles on, \"I am <b>Stumbledwarf</b>, Housemaster of Porkpimple. I just wanted to find a random student to let them know that this is a totally normal magical school. You probably don't need to worry about mysteries, hidden passages, or your life being in peril. Most likely. Anyhow, enjoy the rest of your day! Courses begin tomorrow.\" The man limps away awkwardly.",
    buttons: [["Begin Your Classes", "advanceTo(scenario.four)" ]]
  },
  four: {
    image: "https://images.unsplash.com/photo-1561740855-e9559767addc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    text: "<b>yohouse House Points: 0 </b><br>You climb out of your bed at the housename dormitory the next morning and realize you're running late for Potions, your first class. You grab your things and make your way as quickly as you can-- but stop short of your classroom when you see small, silver snake slithering past you in the hallway. It wriggles past your feet and down a different corridor. ",
    buttons: [["Follow the Snake", "advanceTo(scenario.five)"],["Ignore the snake and go to class", "advancePointsTo(scenario.eightlate)"]]
  },
  five: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. <i>yourname ... come to me yoname.</i>",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eightlate)"]]
  },

  six: {
    image: "https://cdna.artstation.com/p/assets/images/images/010/293/446/original/maxanova-pantano-menu-death-screen-2.gif?1523639111",
    text: "<b>yohouse House Points: 0 </b><br>You approach the section of the wall the voice came from. Peeking down the crevice, you see only darkness. As you lean closer, the wall opens up and you tumble over an edge into the darkness. You hear laughter as you plummet to your doom.",
    buttons: [["Try again", "advanceTo(scenario.two)"],]
  },

  seven: {
    image: "",
    text: "<b>yohouse House Points: 0 </b><br>You stand your ground and call out to the voice, but there is no answer. You turn to head into class and almost slam headfirst into the Housemaster. \"Hello again yourname ! I'm looking for a small snake that's on the loose-- you haven't seen it have you?\" He looks at you expectantly. ",
    buttons: [["Yes, Housemaster Stumbledwarf", "advanceTo(scenario.sevensix)"],["Yes, Housemaster Dumblestore", "advanceTo(scenario.sevenfive)"],["Yes, Housemaster Tumbledwarf", "advanceTo(scenario.sevenfive)"],["Yes, Housemaster Slumbledwarf", "advanceTo(scenario.sevenfive)"],]
  },



  sevenfive: {
    image: "http://loyalnigerianlawyer.com/wp-content/uploads/2018/04/images-300x164.jpeg",
    text: "<b>yohouse House Points: 0 </b><br>The Housemaster squints his eyes. \"Thank you for your help, yourname, but that isn't my name. I'll continue looking here then. You should get to class-- and do try to remember what you learn. ",
    buttons: [["Go to class", "advanceTo(scenario.eightlate)"],] 
  },

  
  sevensix: {
    image: "http://loyalnigerianlawyer.com/wp-content/uploads/2018/04/images-300x164.jpeg",
    text: "<b>yohouse House Points: 200 </b><br>The Housemaster squints his eyes. \"Thank you for your help, yourname, and for remembering my name! I'll continue looking here then. You should get to class-- I'll inform Professor Slugface that your tardiness is excused, as you've helped me a great deal. I'm awarding 200 points to housename as well. Off you go then. ",
    buttons: [["Go to class", "advanceTo(scenario.eightexcused)"],] 
  },

  

  eightlate: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: -100 </b><br>You rush to class, but still arrive late. Your professor, Boris Slugface, glowers as you enter the room. \"You're late, yourname. I'm docking 100 points from housename for your tardiness. And I'll see you after class for detention.\" Not the best start to your magical education.",
    buttons: [["Go to Detention", "advanceTo(scenario.detentionminus100)"],] 
  },

  eightexcused: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 200 </b><br>You rush to class, but still arrive late. Your professor, Boris Slugface, glowers as you enter the room. \"You're late, yourname, but Stumbledwarf has informed me that you were busy assisting him. Since you're so helpful, can you tell me what color a potion of shrinking should be? \" ",
    buttons: [["Blue", "advanceTo(scenario.correctpotion300)"],["Red", "advanceTo(scenario.wrongpotion100)"],["Green", "advanceTo(scenario.wrongpotion100)"],["I don't know", "advanceTo(scenario.idkpotion200)"],] 
  },

  wrongpotion100: {
    image: "",
    text: "<b>yohouse House Points: 100 </b><br>Professor Slugface sneers at you. \"You could have just said you didn't know the answer. This is what happens when you miss class, yourname. You make drink the wrong colored potion, and you probably die. Minus 100 points from housename. I'll see you after class to make up the time that you missed.\" You put your head down and make it through the rest of class.",
    buttons: [["Go to detention", "advanceTo(scenario.detention100)"]] 
  },

  detention100: {
    image: "",
    text: "<b>yohouse House Points: 100 </b><br>You stay after class as Professor Slugface ordered. He asks you to write a 50-page apology essay, explaining the values of not missing Potions class. Slugface leaves and locks you inside. Two hours in, your hand is dead and your mind is halfway to madness.",
    buttons: [["Break out of Detention ", "advanceTo(scenario.breakout)"],["Stay in Detention", "advanceTo(scenario.stay)"],] 
  },

  detention200: {
    image: "",
    text: "<b>yohouse House Points: 200 </b><br>You stay after class as Professor Slugface ordered. He asks you to write a 50-page apology essay, explaining the values of not missing Potions class. Slugface leaves and locks you inside. Two hours in, your hand is dead and your mind is halfway to madness.",
    buttons: [["Break out of Detention ", "advanceTo(scenario.breakout)"],["Stay in Detention", "advanceTo(scenario.stay)"],] 
  },

  detentionminus100: {
    image: "",
    text: "<b>yohouse House Points: -100 </b><br>You stay after class as Professor Slugface ordered. He asks you to write a 50-page apology essay, explaining the values of not missing Potions class. Slugface leaves and locks you inside. Two hours in, your hand is dead and your mind is halfway to madness.",
    buttons: [["Break out of Detention ", "advanceTo(scenario.breakout)"],["Stay in Detention", "advanceTo(scenario.stay)"],] 
  },

  correctpotion300: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 300 </b><br>The professor is impressed by your knowledge and awards yourhouse 100 points. You sit through the rest of class, feeling confident that you're off to the right start here at Porkpimple.",
    buttons: [["Go to your next class", "advanceTo(scenario.nextclass)"],] 
  },

  idkpotion200: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 200 </b><br>Professor Slugface sneers at you. \" This is what happens when you miss class, yourname. You make drink the wrong colored potion, and you probably die. Because of your honesty, I won't subtract points from housename. I'll see you after class to make up the time that you missed.\" You put your head down and make it through the rest of class.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  

  twelve: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. \"yourname ... come to me yoname.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  thirteen: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. \"yourname ... come to me yoname.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  fourteen: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. \"yourname ... come to me yoname.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  fifteen: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. \"yourname ... come to me yoname.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  sixteen: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. \"yourname ... come to me yoname.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  seventeen: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. \"yourname ... come to me yoname.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  eighteen: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. \"yourname ... come to me yoname.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  nineteen: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "<b>yohouse House Points: 0 </b><br>You follow the snake down the halls, jogging to keep up as it slithers around multiple corners. The chase leads you to a dead end, where the snake slithers into a crevice in the wall too small for a human. A voice from the other side of the wall calls your name. \"yourname ... come to me yoname.",
    buttons: [["Approach the crevice", "advanceTo(scenario.six)"],["Call out to the voice", "advanceTo(scenario.seven)"],["Go to class", "advanceTo(scenario.eight)"]] 
  },

  

  
  
};



fadeIn ()
