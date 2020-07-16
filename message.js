let myPosition = 0;
//click event calling the message then delayed response
document.querySelector(".message-button").addEventListener("click", function() {
    //addImage();
    messageDiv();
    delay();
    clear();
  })
  const innerContainer = document.querySelector(".inner-message-container")
/************This is the message div ************** */
  function messageDiv () {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'upper-message';
    const img = document.createElement("img");
        img.src = "assets/am.jpg";
        img.alt = "avatar";
        img.className = 'avatar small'
    const nameContainer = document.createElement('div');
    nameContainer.className = 'message-name-time';
    const name = document.createElement('div');
    name.innerHTML = "Jon Fletcher";
    name.className = 'message-name'
    const time = document.createElement('div');
    time.innerHTML = "• 11:24AM";
    time.className = 'message-time'
    const input = document.querySelector('textarea.message');
    const text = document.createElement('div');
    text.innerHTML = input.value;
    text.className = 'message-text'
    innerContainer.appendChild(img);
    messageContainer.appendChild(nameContainer);
    messageContainer.appendChild(text);
    nameContainer.appendChild(name);
    nameContainer.appendChild(time);
    innerContainer.appendChild(messageContainer);
    const currentDiv = document.getElementById("div1");
   innerContainer.insertBefore(messageContainer, currentDiv);
   //scroll message into view
   messageContainer.scrollIntoView(true);
  }
  /************This is the delayed response div ************** */
  function responseDiv () {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'upper-message';
    const img = document.createElement("img");
        img.src = document.querySelector(".avatar.small").src //feeding in current src rather than set "assets/avatar.png". allows change potential
        img.alt = "avatar";
        img.className = 'avatar small'
    const nameContainer = document.createElement('div');
    nameContainer.className = 'message-name-time';
    const name = document.createElement('div');
    name.innerHTML = "Gillian Vanderbilt";
    name.className = 'message-name'
    const time = document.createElement('div');
    time.innerHTML = "• 11:25AM";
    time.className = 'message-time'
    const randomText = [
        "Great, I can absolutely get you an offer by then. Any other details I should know?",
        "Perfect. I'll talk to you early next week.",
        "Ut id velit a metus porta sagittis. Integer lacus nulla, tincidunt ut felis in, viverra commodo est. Duis ultrices consequat risus ac interdum. ",
        "Etiam ac ante sem. Nam nec sem vestibulum, vehicula ipsum consectetur, sollicitudin nisi. Ut varius, sem quis tempus elementum, mauris enim vulputate ante, in dignissim tortor dui eu augue.",
        "Maecenas sodales scelerisque magna ac laoreet. Sed molestie felis est, sed auctor ipsum suscipit non. Donec interdum auctor fringilla. Mauris fermentum dapibus porta. Integer id dolor lacinia."
      ];
    const store = randomText[myPosition];
    myPosition++
    if (myPosition >= randomText.length) {
      myPosition = 0;
    }
    /********************************* */
    /******************************** */
    const text = document.createElement('div');
    text.innerHTML = store;
    text.className = 'message-text'
    innerContainer.appendChild(img);
    messageContainer.appendChild(nameContainer);
    messageContainer.appendChild(text);
    nameContainer.appendChild(name);
    nameContainer.appendChild(time);
    innerContainer.appendChild(messageContainer);
    const currentDiv = document.getElementById("div1");
   innerContainer.insertBefore(messageContainer, currentDiv);
   //scroll message into view
   messageContainer.scrollIntoView(true);
  }
/************This is creates the delayed response ************** */
  function delay (myPosition) {
    setTimeout(function(){responseDiv(myPosition);}, 2500);
  }
  function clear () {
    const input = document.querySelector('textarea.message');
    input.value = "";
  }
//if the key being pressed is enter in the textarea.message space
document.querySelector("textarea.message").addEventListener('keyup', function(event) {
  console.log(myPosition);
  if (event.key == "Enter") {
    messageDiv();
    delay(myPosition);
    clear();
    }
})
  //Original avatar function
 /*function addImage () {
     const img = document.createElement("img");
        img.src = "assets/avatar.png";
        img.alt = "avatar";
    img.classList.add("avatar");
    innerContainer.appendChild(img);
    const currentDiv = document.getElementById("div1");
    innerContainer.insertBefore(img, currentDiv);
  }*/
  /**** Original append Function */
/*
  function addElement () {
    // create a new div element
    const newDiv = document.createElement("div");
      //generates random text
    const randomText = [
    "First paragraph text",
    "Second paragraph text",
    "Third paragraph text",
    "Fourth paragraph text",
    "Fifth paragraph text"
  ];
    const store = randomText[Math.floor(Math.random() * randomText.length)];
    //specific text use this
    //const text = "Hi there and greetings!"
    // and give it some content
    const newContent = document.createTextNode(store);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    //add class
    newDiv.classList.add("message-text");
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    innerContainer.insertBefore(newDiv, currentDiv);
    //scroll message into view
    newDiv.scrollIntoView(true);
  }
  */

