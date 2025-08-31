"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModelBtn = document.querySelector(".close-modal");
let buttons = [
  document.querySelector(".btn1"),
  document.querySelector(".btn2"),
  document.querySelector(".btn3"),
];

let allQuotas = {
  motivational: [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "The harder you work, the luckier you get.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream big, start small, act now.",
    "Do something today that your future self will thank you for.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Believe you can and you’re halfway there.",
    "Difficult roads often lead to beautiful destinations.",
    "Stay positive, work hard, make it happen.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes later becomes never. Do it now.",
    "Don’t be afraid to fail. Be afraid not to try.",
    "Work hard in silence, let success make the noise.",
    "Doubt kills more dreams than failure ever will.",
    "Your limitation—it’s only your imagination.",
    "Push harder than yesterday if you want a different tomorrow.",
    "A little progress each day adds up to big results.",
    "If it doesn’t challenge you, it won’t change you.",
    "The key to success is to focus on goals, not obstacles.",
  ],

  funny: [
    "I'm on a seafood diet. I see food and I eat it.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I told my computer I needed a break, and it froze.",
    "Why don’t programmers like nature? Too many bugs.",
    "My bed and I love each other, only the alarm clock is against us.",
    "I would tell you a construction joke, but I’m still working on it.",
    "Why can’t your nose be 12 inches long? Because then it’d be a foot.",
    "I told my WiFi we should have a talk… now it’s giving me the silent treatment.",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "Why don’t skeletons fight each other? Because they don’t have the guts.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "What do you call fake spaghetti? An impasta.",
    "Why was the math book sad? It had too many problems.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why can’t you trust atoms? They make up everything.",
    "What did one wall say to the other wall? “I’ll meet you at the corner.”",
    "Why was the broom late? It swept in.",
    "What do you call a belt made of watches? A waist of time.",
    "Why did the computer go to the doctor? It caught a virus.",
    "Why can’t you play hide and seek with mountains? Because they always peak.",
    "What do you call a sleeping bull? A bulldozer.",
    "Why was 6 afraid of 7? Because 7 8 9.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why don’t scientists trust stairs? They’re always up to something.",
    "What do you call cheese that isn’t yours? Nacho cheese.",
    "Why don’t oysters donate to charity? Because they’re shellfish.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why can’t your hand be 12 inches? Because then it would be a foot.",
  ],

  dark: [
    "Why don’t graveyards ever get overcrowded? Because people are dying to get in.",
    "I told my doctor I broke my arm in two places. He told me to stop going to those places.",
    "Why don’t grave diggers get stressed? They just let it sink in.",
    "I started a band called 1023MB — we haven’t got a gig yet.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I asked the librarian if the library had books on paranoia… she whispered, 'They’re right behind you.'",
    "My boss told me to have a good day… so I went home.",
    "I have a step-ladder because my real ladder left when I was a kid.",
    "I told my boss I needed a raise; he said the only way I'd go up is in the elevator.",
    "I wish my wallet came with a life alert: 'Help, I’ve fallen and I can’t get up!'",
    "Why don’t skeletons ever use cell phones? They don’t have the hands for it.",
    "I asked my therapist if I was crazy… she said, 'No, you’re just paying me to listen.'",
    "My phone battery lasts longer than most of my New Year’s resolutions.",
    "They say laughter is the best medicine… unless you have cancer, then it’s chemotherapy.",
    "I sleep like a baby… wake up crying every two hours.",
    "I used to think I had commitment issues, but now I’m not so sure.",
    "Life is short. Smile while you still have teeth.",
    "Why don’t graveyards ever get overcrowded? Because people are dying to get in.",
    "Why don’t cannibals eat clowns? Because they taste funny.",
    "What’s the last thing that goes through a bug’s mind when it hits a windshield? Its butt.",
    "Why don’t zombies eat comedians? They taste too funny.",
    "Why did the skeleton go alone to the party? Because he had no body to go with.",
    "Why don’t ghosts like rain? It dampens their spirits.",
    "Why do graveyards have fences? Because everyone is just dying to get out.",
    "Why did Dracula become a vegetarian? Because biting necks was just a pain in the neck.",
    "Why don’t coffins have WiFi? Because they’re a dead zone.",
    "Why did the grim reaper go to school? To brush up on his dead-ucation.",
    "Why don’t mummies take vacations? They’re afraid they’ll unwind.",
    "What do you call a skeleton who won’t work? Lazy bones.",
    "Why did the ghost get detention? Because he was acting “boo-dly.”",
    "Why did the zombie go to therapy? He had a dead-end job.",
    "Why are graveyards so noisy? Because of all the coffin.",
    "Why did the ghost go into the bar? For the boos.",
    "What do you call a cemetery that’s too expensive? A grave mistake.",
    "Why did the skeleton break up with his girlfriend? She wasn’t his type.",
    "Why do vampires always look sick? Because they’re always coffin.",
    "Why was the dead body bad at stand-up comedy? Because it couldn’t deliver.",
  ],
};

function getRandomQuote(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttons[0].addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".quotas").textContent = getRandomQuote(
    allQuotas.motivational
  );
});

buttons[1].addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".quotas").textContent = getRandomQuote(
    allQuotas.funny
  );
});

buttons[2].addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".quotas").textContent = getRandomQuote(
    allQuotas.dark
  );
});

// for (let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// } )
// }

closeModelBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
