/* =========================================================
   FRIENDSHIP DEBUGGER
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   CONFIG
   ========================================================= */

const WORKER_URL =
  "https://friendship-debugger.daffaarrazy2007.workers.dev/";


/* =========================================================
   GLOBAL
   ========================================================= */

let currentScreen = 1;

let musicPlaying = false;


/* =========================================================
   NAVIGATION
   ========================================================= */

function goTo(number) {

  const current =
    document.getElementById(
      `screen${currentScreen}`
    );

  const next =
    document.getElementById(
      `screen${number}`
    );

  if (!next) {
    console.error(
      "Screen tidak ditemukan:",
      number
    );

    return;
  }


  if (current) {
    current.classList.remove("active");
  }


  next.classList.add("active");

  currentScreen = number;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  initializeScreen(number);
}


/* =========================================================
   SCREEN INITIALIZER
   ========================================================= */

function initializeScreen(number) {

  if (number === 3) {
    initQuiz();
  }


  if (number === 6) {
    initHeartGame();
  }


  if (number === 9) {
    initStarGame();
  }


  if (number === 10) {
    initMemoryGame();
  }


  if (number === 11) {
    initSentenceGame();
  }


  if (number === 14) {
    resetTrust();
  }

}


/* =========================================================
   START
   ========================================================= */

function startExperience() {

  playMusic();

  goTo(2);

}


/* =========================================================
   MUSIC
   ========================================================= */

const music =
  document.getElementById(
    "backgroundMusic"
  );

const musicButton =
  document.getElementById(
    "musicToggle"
  );


function playMusic() {

  if (!music) {
    return;
  }


  music.volume = 0.35;


  music.play()
    .then(() => {

      musicPlaying = true;

      updateMusicButton();

    })
    .catch(() => {

      musicPlaying = false;

      updateMusicButton();

    });

}


function toggleMusic() {

  if (!music) {
    return;
  }


  if (music.paused) {

    music.play()
      .then(() => {

        musicPlaying = true;

        updateMusicButton();

      })
      .catch(() => {

        showToast(
          "Browser memblokir musik. Klik lagi ya 🎵"
        );

      });

  } else {

    music.pause();

    musicPlaying = false;

    updateMusicButton();

  }

}


function updateMusicButton() {

  if (!musicButton) {
    return;
  }


  musicButton.textContent =
    musicPlaying
      ? "🔊 Musik ON"
      : "🔇 Musik OFF";

}


/* =========================================================
   QUIZ
   ========================================================= */

const quizData = [

  {
    question:
      "Kamu tiba-tiba menjauh dan terlihat tidak seceria biasanya. Apa yang sebaiknya dilakukan programmer?",

    options: [

      "Mencari tahu apakah programmer melakukan sesuatu yang membuatmu tidak nyaman.",

      "Langsung menyimpulkan bahwa kamu sedang berlebihan.",

      "Mengabaikannya karena nanti juga selesai sendiri.",

      "Menyalahkan keadaan."

    ],

    correct: 0,

    feedback:
      "Benar. Programmer perlu introspeksi dulu, bukan mencari alasan."
  },


  {
    question:
      "Setelah programmer sadar ucapannya menyakitkan, apa langkah pertama?",

    options: [

      "Mencari alasan.",

      "Mengakui kesalahan dan meminta maaf dengan tulus.",

      "Menunggu sampai orang lain meminta maaf.",

      "Berpura-pura tidak terjadi apa-apa."

    ],

    correct: 1,

    feedback:
      "Benar. Kesalahan perlu diakui sebelum bisa diperbaiki."
  },


  {
    question:
      "Programmer ingin memperbaiki keadaan. Apa yang tidak boleh dilakukan?",

    options: [

      "Mendengarkan.",

      "Memberikan ruang.",

      "Memaksa dan mengejar terus-menerus.",

      "Belajar dari kesalahan."

    ],

    correct: 2,

    feedback:
      "Benar. Memaksa hanya membuat keadaan semakin tidak nyaman."
  },


  {
    question:
      "Kalau kamu membutuhkan waktu, programmer sebaiknya?",

    options: [

      "Tetap menghargai ruang yang kamu butuhkan.",

      "Spam chat sampai dibalas.",

      "Menyuruh orang lain ikut membujuk.",

      "Marah karena belum dimaafkan."

    ],

    correct: 0,

    feedback:
      "Benar. Waktu dan ruang perlu dihargai."
  },


  {
    question:
      "Kalau programmer merasa sedih karena dijauhi, apakah itu alasan untuk menyalahkanmu?",

    options: [

      "Iya.",

      "Tergantung.",

      "Tidak. Perasaan programmer boleh sedih, tetapi tanggung jawab tetap ada pada programmer.",

      "Mencari orang lain untuk disalahkan."

    ],

    correct: 2,

    feedback:
      "Benar. Sedih itu wajar, tetapi bukan alasan untuk menyalahkan orang lain."
  },


  {
    question:
      "Apa yang perlu diperbaiki programmer setelah meminta maaf?",

    options: [

      "Hanya kata-katanya.",

      "Perilaku dan cara berkomunikasinya.",

      "Profil media sosial.",

      "Tidak ada."

    ],

    correct: 1,

    feedback:
      "Benar. Perubahan perilaku lebih penting daripada sekadar kata-kata."
  },


  {
    question:
      "Debugging hubungan artinya?",

    options: [

      "Mencari siapa yang salah.",

      "Menghindari masalah.",

      "Belajar dari kesalahan dan berusaha tidak mengulanginya.",

      "Menghapus semua error tanpa memahami penyebabnya."

    ],

    correct: 2,

    feedback:
      "Benar. Debugging bukan sekadar menghilangkan error, tetapi memahami penyebabnya."
  },


  {
    question:
      "Kalau belum langsung dimaafkan?",

    options: [

      "Memaksa.",

      "Marah.",

      "Sabar dan menghargai prosesnya.",

      "Mencari alasan."

    ],

    correct: 2,

    feedback:
      "Benar. Tidak semua hal punya tombol fast-forward."
  },


  {
    question:
      "Diagnostic report: server normal, internet normal, compiler normal. Siapa yang perlu introspeksi?",

    options: [

      "Internet.",

      "Server.",

      "Compiler.",

      "Programmer."

    ],

    correct: 3,

    feedback:
      "SYSTEM FOUND: Programmer.exe membutuhkan update sikap."
  },


  {
    question:
      "Final fix untuk masalah ini adalah?",

    options: [

      "Mengakui kesalahan, meminta maaf, memperbaiki diri, dan memberikan waktu.",

      "Menyalahkan keadaan.",

      "Memaksa semuanya kembali seperti dulu.",

      "Berpura-pura tidak terjadi apa-apa."

    ],

    correct: 0,

    feedback:
      "Diagnostic complete. Programmer harus belajar, bukan mencari alasan."
  }

];


let quizIndex = 0;


function initQuiz() {

  quizIndex = 0;

  showQuiz();

}


function showQuiz() {

  const data =
    quizData[quizIndex];


  const question =
    document.getElementById(
      "quizQuestion"
    );


  const options =
    document.getElementById(
      "quizOptions"
    );


  const feedback =
    document.getElementById(
      "quizFeedback"
    );


  const next =
    document.getElementById(
      "quizNext"
    );


  const progress =
    document.getElementById(
      "quizProgress"
    );


  question.textContent =
    data.question;


  options.innerHTML = "";


  feedback.className =
    "feedback hidden";


  feedback.innerHTML = "";


  next.classList.add(
    "hidden"
  );


  const percent =
    ((quizIndex + 1) /
      quizData.length) *
    100;


  progress.style
    .setProperty(
      "--progress",
      `${percent}%`
    );


  data.options.forEach(
    (option, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.textContent =
        option;


      button.onclick =
        () => answerQuiz(
          index
        );


      options.appendChild(
        button
      );

    }
  );

}


function answerQuiz(answer) {

  const data =
    quizData[quizIndex];


  const buttons =
    document.querySelectorAll(
      "#quizOptions button"
    );


  buttons.forEach(
    button => {
      button.disabled = true;
    }
  );


  const feedback =
    document.getElementById(
      "quizFeedback"
    );


  feedback.classList.remove(
    "hidden"
  );


  if (
    answer ===
    data.correct
  ) {

    feedback.className =
      "feedback success";

    feedback.innerHTML =
      `
        💙 <strong>Benar.</strong><br><br>
        ${data.feedback}
      `;

  } else {

    feedback.className =
      "feedback wrong";

    feedback.innerHTML =
      `
        🧑‍💻 Hmm... belum tepat.<br><br>
        Tapi programmer tetap yang perlu
        introspeksi. Responsibility: 100%.<br><br>
        ${data.feedback}
      `;

  }


  const next =
    document.getElementById(
      "quizNext"
    );


  next.classList.remove(
    "hidden"
  );


  next.textContent =
    quizIndex ===
    quizData.length - 1
      ? "Selesai →"
      : "Lanjut →";

}


function nextQuiz() {

  quizIndex++;


  if (
    quizIndex >=
    quizData.length
  ) {

    goTo(4);

    return;
  }


  showQuiz();

}


/* =========================================================
   RESPONSE GAME
   ========================================================= */

function chooseResponse(choice) {

  const result =
    document.getElementById(
      "responseResult"
    );


  const next =
    document.getElementById(
      "responseNext"
    );


  let message = "";


  if (
    choice === 1
  ) {

    message =
      `
      💙 Pilihan yang baik.<br><br>
      Mendengarkan berarti programmer
      mencoba memahami, bukan membela diri.
      `;

  }


  else if (
    choice === 2
  ) {

    message =
      `
      😅 Programmer mode panik terdeteksi.<br><br>
      Tapi mengejar terus bukan solusi.
      Kalau seseorang membutuhkan ruang,
      ruang itu perlu dihargai.
      `;

  }


  else if (
    choice === 3
  ) {

    message =
      `
      🧑‍💻 ERROR: Alasan.exe detected.<br><br>
      Programmer seharusnya mengakui kesalahan,
      bukan sibuk membuktikan dirinya benar.
      `;

  }


  else {

    message =
      `
      ⏳ Good choice.<br><br>
      Memberikan waktu bukan berarti menyerah.
      Itu berarti menghargai perasaan orang lain.
      `;

  }


  result.className =
    "feedback success";

  result.innerHTML =
    message;


  next.classList.remove(
    "hidden"
  );

}


/* =========================================================
   GIFT GAME
   ========================================================= */

const giftData = {

  chocolate: {

    emoji: "🍫",

    title: "Chocolate delivered!",

    message:
      "nom nom... Mood +25. Ternyata cokelat punya power khusus.",

    secret:
      "🔐 Secret: Programmer berharap rasa manisnya bisa membuat hari terasa sedikit lebih ringan. 💙"

  },


  flower: {

    emoji: "💐",

    title: "Flower accepted!",

    message:
      "Bunganya diterima. 🌷 Programmer ternyata masih punya sedikit bakat memilih sesuatu yang cantik. Mood +35.",

    secret:
      "🔐 Secret: Bunga memang cantik, tapi programmer merasa senyummu tetap punya tempat sendiri."

  },


  teddy: {

    emoji: "🧸",

    title: "Teddy Bear activated!",

    message:
      "*hug* ... Mood +35. Teddy bear menjalankan tugasnya dengan baik.",

    secret:
      "🔐 Secret: Kalau teddy bear bisa membantu membuat suasana sedikit nyaman, programmer ikut senang."

  },


  cake: {

    emoji: "🍰",

    title: "Strawberry Cake unlocked!",

    message:
      "*nyom nyom...* 🍓 Mood naik. Programmer mulai curiga kalau strawberry cake punya kemampuan khusus. +30.",

    secret:
      "🔐 Secret: Programmer memilih strawberry karena menurutnya hal kecil seperti ini layak dibuat spesial."

  },


  boba: {

    emoji: "🧋",

    title: "Boba detected!",

    message:
      "*sip...* Oke, ini pilihan yang sangat masuk akal. Mood naik drastis. Sistem mendeteksi: boba = comfort item. +45.",

    secret:
      "🔐 Secret: Programmer tahu kamu suka boba, jadi untuk yang satu ini dia nggak perlu debugging lama-lama. Semoga satu tegukan bisa bikin hari terasa sedikit lebih ringan. 💙"

  },


  letter: {

    emoji: "💌",

    title: "A little letter.",

    message:
      "Surat kecil diterima. Tidak mahal, tapi dibuat dengan niat baik. Mood +40.",

    secret:
      "🔐 Secret: Kadang pesan sederhana yang benar-benar tulus lebih berarti daripada sesuatu yang mahal."

  }

};


function chooseGift(type) {

  const data =
    giftData[type];


  const result =
    document.getElementById(
      "giftResult"
    );


  const next =
    document.getElementById(
      "giftNext"
    );


  result.className =
    "feedback success";


  result.innerHTML =
    `
      <div style="font-size:42px">
        ${data.emoji}
      </div>

      <h3>
        ${data.title}
      </h3>

      <p>
        ${data.message}
      </p>

      <p>
        ${data.secret}
      </p>
    `;


  next.classList.remove(
    "hidden"
  );

}


/* =========================================================
   HEART GAME
   ========================================================= */

let heartsCaught = 0;


function initHeartGame() {

  heartsCaught = 0;


  const area =
    document.getElementById(
      "heartGame"
    );


  const status =
    document.getElementById(
      "heartStatus"
    );


  const next =
    document.getElementById(
      "heartNext"
    );


  area.innerHTML = "";


  status.textContent =
    "💙 0 / 3";


  next.classList.add(
    "hidden"
  );


  createHeart();

  createHeart();

  createHeart();

}


function createHeart() {

  const area =
    document.getElementById(
      "heartGame"
    );


  const heart =
    document.createElement(
      "button"
    );


  heart.className =
    "heart";


  heart.textContent =
    "💙";


  const left =
    Math.random() * 88;


  const top =
    Math.random() * 78;


  heart.style.left =
    `${left}%`;


  heart.style.top =
    `${top}%`;


  heart.onclick =
    () => {

      heart.remove();

      heartsCaught++;


      document.getElementById(
        "heartStatus"
      ).textContent =
        `💙 ${heartsCaught} / 3`;


      if (
        heartsCaught >= 3
      ) {

        document.getElementById(
          "heartNext"
        ).classList.remove(
          "hidden"
        );

      }

    };


  area.appendChild(
    heart
  );

}


/* =========================================================
   MYSTERY BOX
   ========================================================= */

let openedBox = false;


function openBox(index) {

  const result =
    document.getElementById(
      "boxResult"
    );


  const next =
    document.getElementById(
      "boxNext"
    );


  if (openedBox) {
    return;
  }


  openedBox = true;


  const messages = [

    "📦 Kotak ini berisi... harapan kecil agar semuanya bisa perlahan menjadi lebih baik.",

    "📦 Programmer ditemukan sedang debugging hati sendiri. 🧑‍💻🥲",

    "📦 Secret item: satu alasan untuk tetap berharap tanpa memaksa."

  ];


  result.className =
    "feedback success";


  result.innerHTML =
    messages[index];


  next.classList.remove(
    "hidden"
  );

}


/* =========================================================
   STAR GAME
   ========================================================= */

let starsFound = 0;


function initStarGame() {

  starsFound = 0;


  const area =
    document.getElementById(
      "starGame"
    );


  const status =
    document.getElementById(
      "starStatus"
    );


  const next =
    document.getElementById(
      "starNext"
    );


  area.innerHTML = "";


  status.textContent =
    "⭐ 0 / 5";


  next.classList.add(
    "hidden"
  );


  for (
    let i = 0;
    i < 5;
    i++
  ) {

    createStar();

  }

}


function createStar() {

  const area =
    document.getElementById(
      "starGame"
    );


  const star =
    document.createElement(
      "button"
    );


  star.className =
    "star";


  star.textContent =
    "⭐";


  star.style.left =
    `${Math.random() * 90}%`;


  star.style.top =
    `${Math.random() * 80}%`;


  star.onclick =
    () => {

      star.remove();

      starsFound++;


      document.getElementById(
        "starStatus"
      ).textContent =
        `⭐ ${starsFound} / 5`;


      if (
        starsFound >= 5
      ) {

        document.getElementById(
          "starNext"
        ).classList.remove(
          "hidden"
        );

      }

    };


  area.appendChild(
    star
  );

}


/* =========================================================
   MEMORY GAME
   ========================================================= */

let memoryFirst = null;

let memorySecond = null;

let memoryLock = false;

let memoryMatches = 0;


function initMemoryGame() {

  const area =
    document.getElementById(
      "memoryGame"
    );


  area.innerHTML = "";


  memoryFirst = null;

  memorySecond = null;

  memoryLock = false;

  memoryMatches = 0;


  document.getElementById(
    "memoryStatus"
  ).textContent =
    "Pasangan: 0 / 4";


  document.getElementById(
    "memoryNext"
  ).classList.add(
    "hidden"
  );


  const values = [

    "🐱",
    "💙",
    "⭐",
    "🧋",

    "🐱",
    "💙",
    "⭐",
    "🧋"

  ];


  values.sort(
    () =>
      Math.random() - .5
  );


  values.forEach(
    value => {

      const card =
        document.createElement(
          "button"
        );


      card.className =
        "memory-card";


      card.dataset.value =
        value;


      card.textContent =
        "❓";


      card.onclick =
        () => flipMemory(card);


      area.appendChild(
        card
      );

    }
  );

}


function flipMemory(card) {

  if (
    memoryLock ||
    card.classList.contains(
      "flipped"
    ) ||
    card.classList.contains(
      "matched"
    )
  ) {
    return;
  }


  card.classList.add(
    "flipped"
  );


  card.textContent =
    card.dataset.value;


  if (!memoryFirst) {

    memoryFirst =
      card;

    return;
  }


  memorySecond =
    card;


  memoryLock = true;


  if (
    memoryFirst.dataset.value ===
    memorySecond.dataset.value
  ) {

    memoryFirst.classList.add(
      "matched"
    );

    memorySecond.classList.add(
      "matched"
    );


    memoryMatches++;


    document.getElementById(
      "memoryStatus"
    ).textContent =
      `Pasangan: ${memoryMatches} / 4`;


    memoryFirst = null;

    memorySecond = null;

    memoryLock = false;


    if (
      memoryMatches >= 4
    ) {

      document.getElementById(
        "memoryNext"
      ).classList.remove(
        "hidden"
      );

    }

  } else {

    setTimeout(
      () => {

        memoryFirst.classList.remove(
          "flipped"
        );

        memorySecond.classList.remove(
          "flipped"
        );


        memoryFirst.textContent =
          "❓";

        memorySecond.textContent =
          "❓";


        memoryFirst = null;

        memorySecond = null;

        memoryLock = false;

      },

      800
    );

  }

}


/* =========================================================
   SENTENCE GAME
   ========================================================= */

let sentenceWords = [];

let sentenceAnswer = [];


function initSentenceGame() {

  const words = [

    "Aku",

    "mau",

    "belajar",

    "memperbaiki",

    "kesalahanku",

    "pelan-pelan"

  ];


  sentenceWords =
    [...words];


  sentenceAnswer =
    [];


  const container =
    document.getElementById(
      "sentenceWords"
    );


  const answer =
    document.getElementById(
      "sentenceAnswer"
    );


  const result =
    document.getElementById(
      "sentenceResult"
    );


  const next =
    document.getElementById(
      "sentenceNext"
    );


  container.innerHTML = "";

  answer.innerHTML = "";

  result.className =
    "feedback hidden";

  next.classList.add(
    "hidden"
  );


  sentenceWords.sort(
    () =>
      Math.random() - .5
  );


  renderSentenceWords();

}


function renderSentenceWords() {

  const container =
    document.getElementById(
      "sentenceWords"
    );


  const answer =
    document.getElementById(
      "sentenceAnswer"
    );


  container.innerHTML = "";

  answer.innerHTML = "";


  sentenceWords.forEach(
    (word, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "sentence-word";


      button.textContent =
        word;


      button.onclick =
        () => selectSentenceWord(
          index
        );


      container.appendChild(
        button
      );

    }
  );


  sentenceAnswer.forEach(
    word => {

      const span =
        document.createElement(
          "span"
        );


      span.className =
        "answer-word";


      span.textContent =
        word;


      answer.appendChild(
        span
      );

    }
  );

}


function selectSentenceWord(index) {

  const word =
    sentenceWords[index];


  sentenceAnswer.push(
    word
  );


  sentenceWords.splice(
    index,
    1
  );


  renderSentenceWords();


  if (
    sentenceWords.length === 0
  ) {

    checkSentence();

  }

}


function checkSentence() {

  const correct = [

    "Aku",

    "mau",

    "belajar",

    "memperbaiki",

    "kesalahanku",

    "pelan-pelan"

  ];


  const result =
    document.getElementById(
      "sentenceResult"
    );


  const next =
    document.getElementById(
      "sentenceNext"
    );


  const isCorrect =
    sentenceAnswer.join(" ") ===
    correct.join(" ");


  if (isCorrect) {

    result.className =
      "feedback success";

    result.innerHTML =
      `
        💙 <strong>Kalimat berhasil diperbaiki.</strong><br><br>
        “Aku mau belajar memperbaiki kesalahanku
        pelan-pelan.”
      `;

  } else {

    result.className =
      "feedback success";

    result.innerHTML =
      `
        🧑‍💻 Susunannya belum sempurna,
        tapi programmer tetap harus belajar.
        Debugging lanjut. 💙
      `;

  }


  next.classList.remove(
    "hidden"
  );

}


/* =========================================================
   DEBUG GAME
   ========================================================= */

let debugAnswered = false;


function debugChoice(
  correct,
  button
) {

  if (debugAnswered) {
    return;
  }


  debugAnswered = true;


  const result =
    document.getElementById(
      "debugResult"
    );


  const next =
    document.getElementById(
      "debugNext"
    );


  if (correct) {

    result.className =
      "feedback success";

    result.innerHTML =
      `
        💙 <strong>Good debugging!</strong><br><br>
        Itu perilaku yang perlu dipertahankan.
        Programmer belajar untuk lebih hati-hati.
      `;

  } else {

    result.className =
      "feedback wrong";

    result.innerHTML =
      `
        🧑‍💻 ERROR BEHAVIOR DETECTED.<br><br>
        Menyalahkan atau memaksa orang lain
        bukan cara memperbaiki hubungan.
        Programmer yang perlu memperbaiki diri.
      `;

  }


  button.style.transform =
    "scale(1.03)";


  next.classList.remove(
    "hidden"
  );

}


/* =========================================================
   FIND CAT
   ========================================================= */

let correctCatDoor = 2;

let catFound = false;


function findCat(index) {

  const result =
    document.getElementById(
      "catResult"
    );


  const next =
    document.getElementById(
      "catNext"
    );


  if (catFound) {
    return;
  }


  if (
    index ===
    correctCatDoor
  ) {

    catFound = true;


    result.className =
      "feedback success";


    result.innerHTML =
      `
        🐱✨ Ketemu!<br><br>
        Kucingnya ternyata memilih tempat
        yang terasa aman dan nyaman.<br><br>
        Programmer belajar satu hal:
        jangan memaksa kucing keluar
        sebelum dia siap.
      `;


    next.classList.remove(
      "hidden"
    );

  } else {

    result.className =
      "feedback wrong";


    result.innerHTML =
      `
        🚪 Bukan di sini.<br><br>
        Programmer jangan panik.
        Pelan-pelan saja. 🐱
      `;

  }

}


/* =========================================================
   TRUST
   ========================================================= */

let trust = 0;


function resetTrust() {

  trust = 0;


  document.getElementById(
    "trustBar"
  ).style.width =
    "0%";


  document.getElementById(
    "trustText"
  ).textContent =
    "0%";


  document.getElementById(
    "trustResult"
  ).className =
    "feedback hidden";

}


function repairTrust() {

  trust += 20;


  if (trust > 100) {
    trust = 100;
  }


  document.getElementById(
    "trustBar"
  ).style.width =
    `${trust}%`;


  document.getElementById(
    "trustText"
  ).textContent =
    `${trust}%`;


  const result =
    document.getElementById(
      "trustResult"
    );


  result.className =
    "feedback success";


  if (trust < 100) {

    result.innerHTML =
      `
        🔧 Progress +20%.<br><br>
        Kepercayaan tidak bisa dipaksa
        kembali dalam satu klik.
        Yang bisa dilakukan programmer
        adalah konsisten memperbaiki diri.
      `;

  } else {

    result.innerHTML =
      `
        💙 Trust repair protocol complete.<br><br>
        Tapi di dunia nyata,
        kepercayaan tetap perlu dijaga
        dengan tindakan, bukan hanya kata-kata.
      `;


    setTimeout(
      () => goTo(15),
      1300
    );

  }

}


/* =========================================================
   PATIENCE
   ========================================================= */

function patience() {

  const button =
    document.getElementById(
      "patienceBtn"
    );


  const result =
    document.getElementById(
      "patienceResult"
    );


  const next =
    document.getElementById(
      "patienceNext"
    );


  button.disabled = true;


  result.className =
    "feedback success";


  result.innerHTML =
    `
      🫶 Protocol accepted.<br><br>
      Programmer mengerti bahwa
      perasaan tidak punya tombol fast-forward.
      Kalau butuh waktu, waktu itu akan dihargai.
    `;


  next.classList.remove(
    "hidden"
  );

}


/* =========================================================
   FINAL REACTION
   ========================================================= */

const reactionData = {

  "still-angry": {

    rating:
      "😾😾",

    title:
      "Mood rating: 2 / 5",

    message:
      "😭 Tapi gapapa. Aku ngerti. Kamu nggak harus langsung mau ngobrol. Aku akan menghargai waktumu.",

    secret:
      "🔐 Secret: Kalau jawabanmu masih begini, programmer memang sedih sedikit... tapi dia lebih memilih menghormati daripada memaksa."

  },


  "need-time": {

    rating:
      "🥺🥺🥺",

    title:
      "Mood rating: 2.5 / 5",

    message:
      "Oke... programmer duduk di pojokan sambil debugging diri sendiri. 🧑‍💻🥲 Ambil waktumu. Tidak perlu buru-buru.",

    secret:
      "🔐 Secret: Aku mungkin ingin semuanya cepat baik, tapi aku tahu perasaan nggak punya tombol fast-forward."

  },


  "less-angry": {

    rating:
      "🙂🙂🙂🙂",

    title:
      "Mood rating: 4 / 5",

    message:
      "SYSTEM NOTICE: harapan programmer naik 80%. 😭💙 Pelan-pelan saja, yang penting suasananya mulai lebih ringan.",

    secret:
      "🔐 Secret: Satu senyum kecil saja sudah cukup bikin programmer merasa usahanya tidak sia-sia."

  },


  "talk": {

    rating:
      "🥹💙✨",

    title:
      "Mood rating: 4.5 / 5",

    message:
      "CONNECTION UNSTABLE, BUT HOPE DETECTED. 🥹 Programmer siap ngobrol pelan-pelan dan lebih hati-hati.",

    secret:
      "🔐 Secret: Nggak perlu langsung kembali seperti dulu. Pelan-pelan juga nggak apa-apa."

  },


  "forgive": {

    rating:
      "🥹💙✨🐱",

    title:
      "Mood rating: 5 / 5",

    message:
      "SYSTEM JOY OVERLOAD!!! 😭💙 Programmer hampir restart karena terlalu senang.",

    secret:
      "🔐 Secret: Terima kasih sudah memberi kesempatan. Sekarang tugas programmer adalah membuktikan bahwa kesempatan itu berarti."

  }

};


function finalReaction(key) {

  const data =
    reactionData[key];


  const result =
    document.getElementById(
      "reactionResult"
    );


  const next =
    document.getElementById(
      "reactionNext"
    );


  result.className =
    "feedback success";


  result.innerHTML =
    `
      <div style="font-size:30px">
        ${data.rating}
      </div>

      <h3>
        ${data.title}
      </h3>

      <p>
        ${data.message}
      </p>

      <p>
        ${data.secret}
      </p>
    `;


  next.classList.remove(
    "hidden"
  );

}


/* =========================================================
   SEND MESSAGE TO TELEGRAM
   ========================================================= */

async function sendMessage() {

  const messageBox =
    document.getElementById(
      "visitorMessage"
    );


  const result =
    document.getElementById(
      "sendResult"
    );


  const message =
    messageBox.value.trim();


  /* =========================
     EMPTY MESSAGE
     ========================= */

  if (!message) {

    result.className =
      "feedback wrong";


    result.innerHTML =
      `
        💌 <strong>Pesannya masih kosong.</strong><br><br>
        Tulis sesuatu dulu ya. 🐱
      `;


    return;
  }


  /* =========================
     TIME
     ========================= */

  const time =
    new Date()
      .toLocaleString(
        "id-ID"
      );


  /* =========================
     LOADING
     ========================= */

  result.className =
    "feedback";


  result.innerHTML =
    `
      ⏳ <strong>Mengirim pesan...</strong><br><br>
      Tunggu sebentar ya 🐱💙
    `;


  /* =========================
     DATA FORM
     ========================= */

  const data =
    new URLSearchParams();


  data.append(
    "message",
    message
  );


  data.append(
    "time",
    time
  );


  /* =========================
     SEND
     ========================= */

  try {

    const response =
      await fetch(
        WORKER_URL,
        {
          method: "POST",

          body: data
        }
      );


    /* =========================
       CHECK HTTP
       ========================= */

    if (!response.ok) {

      throw new Error(
        `Worker HTTP ${response.status}`
      );

    }


    /* =========================
       READ RESPONSE
       ========================= */

    const responseData =
      await response.json();


    console.log(
      "Worker response:",
      responseData
    );


    /* =========================
       CHECK SUCCESS
       ========================= */

    if (
      !responseData.success
    ) {

      throw new Error(
        responseData.error ||
        "Pesan gagal dikirim."
      );

    }


    /* =========================
       SUCCESS
       ========================= */

    result.className =
      "feedback success";


    result.innerHTML =
      `
        💙 <strong>Pesan sudah dikirim!</strong><br><br>

        Pesan kecilmu sudah sampai. 🐱✨<br><br>

        Terima kasih sudah meninggalkan
        pesan di sini.
      `;


    messageBox.value = "";


  } catch (error) {

    console.error(
      "SEND MESSAGE ERROR:",
      error
    );


    result.className =
      "feedback wrong";


    result.innerHTML =
      `
        ⚠️ <strong>Pesan gagal dikirim.</strong><br><br>

        ${error.message || "Terjadi kesalahan."}<br><br>

        Pastikan Cloudflare Worker sudah
        di-deploy dan bot Telegram sudah
        di-/start.
      `;

  }

}


/* =========================================================
   FINISH
   ========================================================= */

function finishExperience() {

  const screen =
    document.getElementById(
      "screen19"
    );


  screen.innerHTML =
    `
      <div class="card connection-card">

        <div class="connection-icon">
          🐱💙
        </div>

        <h1>
          Debugging Complete
        </h1>

        <p>
          Terima kasih sudah sampai di akhir.
        </p>

        <p>
          Semoga hari kamu menjadi sedikit
          lebih ringan. ✨
        </p>

        <div class="final-gombal">

          Programmer mungkin belum sempurna,
          tapi setidaknya sekarang dia tahu
          satu hal:

          <br><br>

          beberapa bug tidak cukup
          diperbaiki dengan satu kali klik.

          <br><br>

          Mereka perlu kesabaran,
          perubahan,
          dan waktu. 💙

        </div>

      </div>
    `;

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );

    },

    2500
  );

}


/* =========================================================
   INITIAL
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateMusicButton();

  }
);