//Deklarerar listan och knappen med queryselector
var inputKnapp = document.querySelector(".inputKnapp");
var lista = document.querySelector(".lista");

// sätter 0 i värde på hur många todos man har och har gjort och deklarerar dom med queryselector
AvklaradScore = "0";
AntalScore = "0";
document.querySelector(".scoreA").textContent = AvklaradScore;
document.querySelector(".scoreB").textContent = AntalScore;

//skapar en tom array som vi fyller längre ned med push
var toDoArray = [];

//lägger till en click event listener på knappen med en function
inputKnapp.addEventListener("click", function () {
  //sparar det man skrivit i input rutan i en variabel
  var inputText = document.querySelector(".inputText").value;
  //jag kollar så att inte input rutan är tom med en if sats
  if (!inputText.length < 1) {
    //skapar ett li object som heter nyToDo och sen använder jag appenchild för att lägga till den i en ul som heter lista och sen lägger jag till classen nyToDo med classtlist.add
    const nyToDo = document.createElement("li");
    lista.appendChild(nyToDo).classList.add("nyToDo");
    //skapar en span som heter ToDoBeskrivning som får innehållet av det som skrev i input fönstret och som jag sen lägger till med appendchild i nyTodo listan jag skapade ovanför och som får klassen ToDoBeskrivning
    const ToDoBeskrivning = document.createElement("span");
    ToDoBeskrivning.innerText = inputText;
    nyToDo.appendChild(ToDoBeskrivning).classList.add("ToDoBeskrivning");
    //här lägger jag till papperskorgs symbolen som en span efter todobeskrivningen i listan med appendchild och samtidigt får den klassen papperskorg med classlist.add
    const papperskorg = document.createElement("span");
    papperskorg.innerHTML = "&#x1F5D1;";
    nyToDo.appendChild(papperskorg).classList.add("papperskorg");
    //Här skapar jag ett object med namnet som vi fick ifrån input rutan och som jag nedanför sparar i toDoArray med push
    let aktivitet = {
      namn: inputText,
    };
    toDoArray.push(aktivitet);
    //Här nollställer jag input rutan och felmeddelandet man får om fältet är tomt genom att sätta värdet eller innehållet till ""
    document.querySelector(".inputText").value = "";
    document.querySelector(".meddelande").textContent = "";
    //Här plusar jag på antalScore med 1 eftersom vi skapat en ny todo, samtidigt som jag uppdaterar det i domen så att det nya innehållet syns
    AntalScore++;
    document.querySelector(".scoreB").textContent = AntalScore;

    //Här skapar jag en click eventlistener för papperskorgs symbolen och en function
    papperskorg.addEventListener("click", function () {
      //Här kollar jag om den todo man ska ta bort innehåller klassen färdig och om den gör det så drar jag bort 1 ifrån avklaradscore så att det inte blir fel i totalen och står avklarat 5/1 t.ex.
      if (ToDoBeskrivning.classList.contains("fardig")) {
        AvklaradScore--;
      }
      //Här drar jag bort 1 ifrån antal Todos man har eftersom vi i raden nedanför tar bort den valda todon med remove
      AntalScore--;
      nyToDo.remove();
      //Här uppdaterar jag domen med antalet todos och hur många man gjort klart
      document.querySelector(".scoreA").textContent = AvklaradScore;
      document.querySelector(".scoreB").textContent = AntalScore;
    });

    //Här lägger jag till en click eventlistener med en function på TodoBeskrivning spanen
    ToDoBeskrivning.addEventListener("click", function () {
      //Här kollar jag om spanen har classen fardig med en if sats och isåfall tar jag bort den och därmed stylingen, samtidigt som jag tar bort ett ifrån avklarat scoren och uppdaterar domen
      if (ToDoBeskrivning.classList.contains("fardig")) {
        ToDoBeskrivning.classList.remove("fardig");
        AvklaradScore--;
        document.querySelector(".scoreA").textContent = AvklaradScore;
      } else {
        // om spanen inte har classen fardig så får den klassen fardig vid ett klick och avklarat scoren och domen uppdateras
        ToDoBeskrivning.classList.add("fardig");
        AvklaradScore++;
        document.querySelector(".scoreA").textContent = AvklaradScore;
      }
    });
  } else {
    //Här skriver jag ut felmeddelandet med en else sats om inout fältet är tomt och då sätter jag textcontent i min h4 med klassen meddelande
    document.querySelector(".meddelande").textContent =
      "Du måste skriva något i fältet för att kunna skapa en ToDO";
  }
});
