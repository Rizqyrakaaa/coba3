const slides = [
  { text: "", img: "img/opening.png" },
  { text: "Selamat Ulang Tahun Pacarkuu tercintaaa<br>Ayu Rahma Fitri Prameswari🩷", img: null,},
  { text: "🩷 DESEMBER 🩷", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: "img/puzzle.png" },
  { text: "", img: "img/tictactoe.png" },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: "img/hug.png" },
  { text: "", img: null },
  { text: "", img: null },
  { text: "", img: "img/peluk.png" },
  { text: "", img: null },
  { text: "", img: null },
  { text: "makasih<br>udah baca sampai akhir :)<br><br>Sekali lagi aku ucapin<br>selamat ulang tahun cintaku❤️<br>maaf yaa kalo dari tadi kata katanya lebay hehe<br><br>dari raka :)", img: null,},
];

document.getElementById("slide-container").classList.add("slide-in");
const slideContainer = document.getElementById("slide-container");
const nextButton = document.getElementById("next-button");
const bgMusic = document.getElementById("bg-music");

let currentSlide = 0;
let musicStarted = false;

function renderSlide(index) {
  const slide = slides[index];

  slideContainer.innerHTML = "";
  slideContainer.classList.remove("fade-in", "slide-in", "zoom-in");

  if (index === 0) {
    slideContainer.innerHTML = `
            <p class="opening-text">Hai Cantik🩷<br>aku punya amplop buat kamu</p>
            <img src="${slide.img}" alt="Opening Image" class="zoom-in">
            <p class="teks-biasa">isinya dibaca pelan-pelan ya</p>
        `;
    const openingText = slideContainer.querySelector(".opening-text");
    openingText.classList.add("fall-down");
    const teksBiasa = slideContainer.querySelector(".teks-biasa");
    teksBiasa.classList.add("fall-up");
    return;
  }

  if (index === 2) {
    slideContainer.innerHTML = `
            <h2 class="calendar-header">${slide.text}</h2>
            <div id="calendar" class="calendar-content">
                ${generateCalendar()}
            </div>
            <p id="highlight-text" class="transisi">Hari ini tepat tanggal 17 Desember, hari kelahiranmu, hari dimana kekasihku dilahirkan❤️</p>
        `;
    const calendarHeader = slideContainer.querySelector(".calendar-header");
    const calendarContent = slideContainer.querySelector(".calendar-content");
    const transisi = slideContainer.querySelector(".transisi");
    calendarHeader.classList.add("fall-down");
    calendarContent.classList.add("zoom-in");
    transisi.classList.add("fall-up");
    return;
  }

  if (index === 3) {
    slideContainer.innerHTML = `
            <p class="transisi">Seomoga kamu selalu<br><span class="highlight-text">bahagia dan senang</span><br>di setiap harinya 
            <span class="underline-text"><br>kapanpun</span> dan <span class="underline-text">dimanapun</span>!!</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fade-in");
    return;
  }

  if (index === 4) {
    slideContainer.innerHTML = `
            <p class="transisi">Selamat Ulang Tahun yaa sayangkuuu. Terimakasih
            <br><span class="underline-text">telah hadir ke dunia</span><br>dan berbagi <span class="highlight-text">kebahagiaan</span>.</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fade-in");
    return;
  }

  if (index === 5) {
    slideContainer.innerHTML = `
            <p class="transisi"><span class="highlight-text">MAKE A WISH !</span></p>
            <p class="transisi-2">Semoga segala doa dan <span class="underline-text">harapan kamu</span> 
            bisa terkabul pada usia kamu saat ini....<span class="highlight-text">AAMIN</span></p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    transisi.classList.add("fall-down");
    transisi2.classList.add("fall-up");
    return;
  }

  if (index === 6) {
    slideContainer.innerHTML = `
            <div class="wish-container">
                <div class="wish-text">
                    <p class="wish-text">WISH YOU<br><br>ALL<br><br>THE BEST</p>
                </div>
                <div class="heart-background">
                    ${generateHearts(30)}
                </div>
            </div>
        `;
    const heartBackground = slideContainer.querySelector(".heart-background");
    heartBackground.classList.add("zoom-in");
    return;
  }

  if (index === 7) {
    slideContainer.innerHTML = `
            <p class="transisi"><span class="highlight-text">bahagia selalu ya :)</span></p>
            <p class="transisi-2">Jangan dengerin orang jahat! aku <span class="underline-text">bakalan selalu ada disini</span>. 
            Jadi kamu jangan sungkan buat berbagi <span class="highlight-text">cerita</span> ke aku, inget yaaa 
            <span class="underline-text">ke aku!!</span> jadi ke aku dulu terus ke bestimu😭</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    transisi.classList.add("fall-down");
    transisi2.classList.add("zoom-in");
    return;
  }

  if (index === 8) {
    slideContainer.innerHTML = `
            <p class="transisi" style="font-size: 23px; margin-bottom: -20px;"><span class="highlight-text">I LOVE YOU</span></p>
            <ul class="bullet-list">
                <li class="transisi-2">Every Second</li>
                <li class="transisi-3">Every Minute</li>
                <li class="transisi-4">Every Hour</li>
                <li class="transisi-5">Every Day</li>
            </ul>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    const transisi3 = slideContainer.querySelector(".transisi-3");
    const transisi4 = slideContainer.querySelector(".transisi-4");
    const transisi5 = slideContainer.querySelector(".transisi-5");

    const elements = [transisi, transisi2, transisi3, transisi4, transisi5];
    const delay = 500;
    elements.forEach((element) => element.classList.add("hidden"));
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("visible");
        element.classList.add("slide-in");
      }, index * delay);
    });
    transisi.classList.add("fall-down");
    return;
  }

  if (index === 9) {
    slideContainer.innerHTML = `
            <p class="love-text transisi">I LOVE YOU<br>more than<br>all the stars<br>in the sky</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("zoom-in");
    return;
  }

  if (index === 10) {
    slideContainer.innerHTML = `
            <p class="transisi-2">JANGAN LUPA</p>
            <p class="transisi-3">ucapkan <span class="highlight-text">terimakasih</span> pada</p>
            <p class="transisi-4">dirimu sendiri yang sangat</p> 
            <p class="transisi-5">kuat <span class="underline-text">sampai detik ini !!!</span></p>
        `;
    const transisi2 = slideContainer.querySelector(".transisi-2");
    const transisi3 = slideContainer.querySelector(".transisi-3");
    const transisi4 = slideContainer.querySelector(".transisi-4");
    const transisi5 = slideContainer.querySelector(".transisi-5");

    const elements = [transisi2, transisi3, transisi4, transisi5];
    const delay = 600;
    elements.forEach((element) => element.classList.add("hidden"));
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("visible");
        element.classList.add("fall-down");
      }, index * delay);
    });
    return;
  }

  if (index === 11) {
    slideContainer.innerHTML = `
            <p class="transisi-2">Aku ngasih beberapa <span class="highlight-text">hadiah</span></p>
            <p class="transisi-3">buat kamu meskipun ga</p>
            <p class="transisi-4">seberapa <span class="underline-text">tapi kamu wajib<p>
            <p class="transisi-5"><span class="underline-text">nerimanya</span> yaa sayanggkuuu</p>
        `;
    const transisi2 = slideContainer.querySelector(".transisi-2");
    const transisi3 = slideContainer.querySelector(".transisi-3");
    const transisi4 = slideContainer.querySelector(".transisi-4");
    const transisi5 = slideContainer.querySelector(".transisi-5");

    const elements = [transisi2, transisi3, transisi4, transisi5];
    const delay = 700;
    elements.forEach((element) => element.classList.add("hidden"));
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("visible");
        element.classList.add("fall-down");
      }, index * delay);
    });
    return;
  }

  if (index === 12) {
    slideContainer.innerHTML = `
            <p class="transisi">aku <span class="highlight-text">minta maaf</span> ya sayangg soalnya aku 
            ngasihnya beginian <span class="underline-text">bukannya effort</span> tulis tangaan 
            aku malah ngasihnya ketikan buat kamuuu, maaf ya kalo <span class="highlight-text">
            ga sesuai ekspetasi</span> :(</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fade-in");
    return;
  }

  if (index === 13) {
    slideContainer.innerHTML = `
            <p class="transisi"><span class="underline-text">Semangat sayangkuuu</span> ngejalanin harinya yaa tetep 
            <span class="underline-text">jaga kesehatan</span> jugaaa🩷</p>
            <p class="transisi-2"><span class="highlight-text">
            kalo capee</span> boleh ngeluh kok, tapi jangan lama lama yaaa<br>
            <span class="underline-text">AYO BAHAGIA TERUS🩷</span></p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fall-down");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    transisi2.classList.add("fall-up");
    return;
  }

  if (index === 14) {
    slideContainer.innerHTML = `
            <p class="transisi">kalo kamuu lagi sedih, kamu</p>
            <p class="transisi-2">boleh <span class="underline-text">dateng ke akuu</span>, walaupun</p>
            <p class="transisi-3">aku gabisa marahin orang yang</p>
            <p class="transisi-4">jahatin kamuu, tapii aku bisaa</p>
            <p class="transisi-5"><span class="highlight-text">meluk kamuuuu</span>hehehe</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    const transisi3 = slideContainer.querySelector(".transisi-3");
    const transisi4 = slideContainer.querySelector(".transisi-4");
    const transisi5 = slideContainer.querySelector(".transisi-5");

    const elements = [transisi, transisi2, transisi3, transisi4, transisi5];
    const delay = 500;
    elements.forEach((element) => element.classList.add("hidden"));
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("visible");
        element.classList.add("zoom-in");
      }, index * delay);
    });
    return;
  }
  if (index === 15) {
    slideContainer.innerHTML = `
        <p class="transisi">Aku minta maaf yaaa soalnya akuu belum bisa jadii yang kamuuu mau tapi aku akan berusaha jadiii yang terbaik buat kamuu🫶</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("zoom-in");
    return;
  }
  if (index === 16) {
    slideContainer.innerHTML = `
            <p class="transisi"><span class="highlight-text">Kamu tau gaa?</span></p>
            <p class="transisi-2">ketemu kamu ituu salah satu</p>
            <p class="transisi-3">dari <span class="underline-text"> banyaknya hal</span> yang buat</p>
            <p class="transisi-4">aku <span class="highlight-text"> Bersyukur❤️</span></p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    const transisi3 = slideContainer.querySelector(".transisi-3");
    const transisi4 = slideContainer.querySelector(".transisi-4");

    transisi.classList.add("fall-down");
    const elements = [transisi2, transisi3, transisi4];
    const delay = 700;
    elements.forEach((element) => element.classList.add("hidden"));
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("visible");
        element.classList.add("zoom-in");
      }, index * delay);
    });
    return;
  }

  if (index === 17) {
    slideContainer.innerHTML = `
            <p class="transisi">Aku Suka <span class="underline-text">weekend</span></p>
            <p class="transisi-2">tapi lebih suka lagi <span class="highlight-text">with you</span></p>
            <p class="transisi-3"><span class="underline-text">Till the end</span></p>      
        `;
    const transisi = slideContainer.querySelector(".transisi");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    const transisi3 = slideContainer.querySelector(".transisi-3");

    const elements = [transisi, transisi2, transisi3];
    const delay = 500;
    elements.forEach((element) => element.classList.add("hidden"));
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("visible");
        element.classList.add("fade-in");
      }, index * delay);
    });
    return;
  }

  if (index === 18) {
    slideContainer.innerHTML = `
            <img src="${slide.img}" alt="Slide Image" class="zoom-in">
            <p class="transisi"><span class="underline-text">You Complete Me!</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fall-up");
    return;
  }

  if (index === 19) {
    slideContainer.innerHTML = `
            <img src="${slide.img}" alt="Slide Image" class="zoom-in">
            <p class="transisi"><span class="underline-text">You won IN MY HEART</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fall-up");
    return;
  }

  if (index === 20) {
    slideContainer.innerHTML = `
            <p class="transisi"><span class="highlight-text">ONE MORE!</span></p>
            <P class="transisi-2">Jangan pernah bandingkan <span class="underline-text">
            Pencapaian kamu</span> dengan orang lain karena semua
            ada <span class="underline-text">porsinya masing masing</span></p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fall-down");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    transisi2.classList.add("zoom-in");
    return;
  }

  if (index === 21) {
    slideContainer.innerHTML = `
            <p class="transisi"><span class="highlight-text">Bersamamu</span></p>
            <p class="transisi-2">adalah cerita</p>
            <p class="transisi-3">indah yang</p>
            <p class="transisi-4"><span class="underline-text">tak ingin aku AKHIRI</span></p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    const transisi2 = slideContainer.querySelector(".transisi-2");
    const transisi3 = slideContainer.querySelector(".transisi-3");
    const transisi4 = slideContainer.querySelector(".transisi-4");

    const elements = [transisi, transisi2, transisi3, transisi4];
    const delay = 500;
    elements.forEach((element) => element.classList.add("hidden"));
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove("hidden");
        element.classList.add("visible");
        element.classList.add("zoom-in");
      }, index * delay);
    });
    return;
  }

  if (index === 22) {
    slideContainer.innerHTML = `
            <img src="${slide.img}" alt="Slide Image" class="zoom-in">
            <p style="margin-top: -50px;" class="transisi">You are <span class="underline-text">very precious</span>
            so please <span class="underline-text">take care</span>
            yourself❤️</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fall-up");
    return;
  }

  if (index === 23) {
    slideContainer.innerHTML = `
            <p class="transisi">Kamu sangat <span class="underline-text">berwarna</span>. 
            terimakasih telah memberi <span class="highlight-text">warna pada 
            hidupku</span>. hidupku semakin berwarna semenjak <span class="underline-text">
            ada kehadiran dan sosokmu</span> di kehidupanku. maacii yaa sayaanggkuuu lovyuu</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("zoom-in");
    return;
  }

  if (index === 24) {
    slideContainer.innerHTML = `
            <p class="transisi">Aku bangga, aku beruntung,<br>aku 
            <span class="highlight-text">Bersyukur</span><br>
            bisa kenal sama kamu<br>
            dalam <span class="underline-text">hidupkuuu!</span></p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("zoom-in");
    return;
  }

  if (index === 25) {
    slideContainer.innerHTML = `
            <img src="${slide.img}" alt="Slide Image" class="zoom-in">
            <p class="transisi"><span class="underline-text">I LOVE YOU</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fall-up");
    return;
  }

  if (index === 26) {
    slideContainer.innerHTML = `
            <p class="fade-in">Terimakasih<br>telah hadir di hidupku, kamu adalah versi terbaik dari semua yang hadir. beribu kata cinta untukmu🩷</p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fade-in");
    return;
  }

  if (index === 27) {
    slideContainer.innerHTML = `
            <p class="transisi"><span class="underline-text">Dunia</span> itu penuh dengan kebetulan dan kebetulan yang paling aku <span class="highlight-text">
            syukuri</span> adalah <span class="underline-text">bertemu denganmu</span></p>
        `;
    const transisi = slideContainer.querySelector(".transisi");
    transisi.classList.add("fade-in");
    return;
  }

  slideContainer.innerHTML = `
        ${
          slide.img
            ? `<img src="${slide.img}" alt="Slide Image" class="zoom-in">`
            : ""
        }
        <p class="fade-in">${slide.text}</p>
    `;

  if (index === slides.length - 1) {
    nextButton.textContent = "Selesai";
  } else {
    nextButton.textContent = "Lanjut";
  }
}

nextButton.addEventListener("click", () => {
  if (!musicStarted) {
    bgMusic.play();
    musicStarted = true;
  }

  if (currentSlide === slides.length - 1) {
    location.reload();
  } else {
    currentSlide++;
    renderSlide(currentSlide);
  }
});

window.onload = () => {
  renderSlide(0);
};

function generateCalendar() {
  let calendarHTML = '<div class="calendar-grid">';
  const daysInDecember = 31;

  for (let day = 1; day <= daysInDecember; day++) {
    const highlight = day === 17 ? "highlight" : "";
    calendarHTML += `<div class="calendar-cell ${highlight}">${day}</div>`;
  }

  calendarHTML += "</div>";
  return calendarHTML;
}

function generateHearts(count) {
  let heartsHTML = "";
  const heartTypes = ["❤️", "💖"];

  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 1.5 + 1;
    const emoji = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    heartsHTML += `<span class="heart" style="top: ${y}%; left: ${x}%; font-size: ${size}rem;">${emoji}</span>`;
  }

  return heartsHTML;
}
