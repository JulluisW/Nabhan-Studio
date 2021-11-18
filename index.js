const kumpulanFilm = [
  {
    "Venom: Let There Be Carnage": {
      img: "https://media.21cineplex.com/webcontent/gallery/pictures/163307229284629_287x421.jpg",
      sinopsis: "Eddie (Tom Hardy) yang kini sudah berteman dengan Venom berusaha hidup normal, namun masalah datang saat ia bertemu dengan Cletus Kasady (Woody Harrelson) yang diketahui sebagai inang dari symbiote dengan sebutan Carnage.",
      bioskop: [
        { theater: "Mall Paris Van Surabaya", jam: ["12:15", "15:20", "17:00"] },
        { theater: "Gren Indonesia", jam: ["13:15", "15:25", "17:35"] },
        { theater: "Artha Moro", jam: ["12:55", "15:00", "18:35"] },
        { theater: "Armadilo Town Square", jam: ["13:00", "16:25", "19:35"] },
      ],
    },
  },
  {
    "Superman: The Movie": {
      img: "https://flxt.tmsimg.com/NowShowing/10286/10286_aa.jpg",
      sinopsis: "Ilmuwan Jor-El meluncurkan bayinya Kal-El, ke Bumi. Kal tumbuh menjadi Clark Kent, memiliki kemampuan tak biasa dan kekuatan untuk menjadi Superman, yang memperjuangkan kebenaran dan keadilan.",
      bioskop: [
        { theater: "Mall Paris Van Surabaya", jam: ["12:15", "15:20", "17:00"] },
        { theater: "Gren Indonesia", jam: ["13:15", "15:25", "17:35"] },
        { theater: "Artha Moro", jam: ["12:55", "15:00", "18:35"] },
        { theater: "Armadilo Town Square", jam: ["13:00", "16:25", "19:35"] },
      ],
    },
  },
  {
    "No Time To Die": {
      img: "https://media.21cineplex.com/webcontent/gallery/pictures/163188974336814_287x421.jpg",
      sinopsis:
        "Sejenak menikmati kehidupannya setelah pensiun, Bond harus kembali beraksi demi menyelamatkan seorang teman. Kali ini, Bond harus menelusuri jejak seorang penjahat misterius yang telah dipersenjatai dengan teknologi baru berbahaya.",
      bioskop: [
        { theater: "Mall Paris Van Surabaya", jam: ["12:15", "15:20", "17:00"] },
        { theater: "Gren Indonesia", jam: ["13:15", "15:25", "17:35"] },
        { theater: "Artha Moro", jam: ["12:55", "15:00", "18:35"] },
        { theater: "Armadilo Town Square", jam: ["13:00", "16:25", "19:35"] },
      ],
    },
  },
  {
    "Dilan Kembali ke Bandung": {
      img: "https://media.21cineplex.com/webcontent/gallery/pictures/163307229284629_287x421.jpg",
      sinopsis: "Eddie (Tom Hardy) yang kini sudah berteman dengan Venom berusaha hidup normal, namun masalah datang saat ia bertemu dengan Cletus Kasady (Woody Harrelson) yang diketahui sebagai inang dari symbiote dengan sebutan Carnage.",
      bioskop: [
        { theater: "Mall Paris Van Surabaya", jam: ["12:15", "15:20", "17:00"] },
        { theater: "Gren Indonesia", jam: ["13:15", "15:25", "17:35"] },
        { theater: "Artha Moro", jam: ["12:55", "15:00", "18:35"] },
        { theater: "Armadilo Town Square", jam: ["13:00", "16:25", "19:35"] },
      ],
    },
  },
];

let inputFilm = document.getElementById("input_film");

function pilihFilm() {
  for (const movie of kumpulanFilm) {
    for (const judul in movie) {
      var option = document.createElement("option");
      option.text = judul;
      option.value = judul;
      // var select = document.getElementById("id-to-my-select-box");
      inputFilm.appendChild(option);
      // let inputFilm = document.createElement("#input_film")
      // inputFilm.appendChild(option).innerHTML = judul;
      // if (a.options[a.selectedIndex].value == judul) {
      //   return judul;
      // }
    }
  }
  // return 'test'
}

inputFilm.addEventListener("change", function () {
  const inputTheater = document.getElementById("input_theater");
  inputTheater.classList.remove("d-none");
  // let dataFilm = inputFilm.options[inputFilm.selectedIndex].value;
  // // pilihTheater(dataFilm)
  // let teater = kumpulanFilm[dataFilm].bioskop
  // for(const id of teater) {
  //   var option = document.createElement("option");
  //   option.text = teater[id].theater;
  //   option.value = teater[id].theater;
  //   var select = document.getElementById("input_theater");
  //   select.appendChild(option);
  // }
});

function pilihTheater() {
  let dataFilm = inputFilm.options[inputFilm.selectedIndex].value;
  // pilihTheater(dataFilm)
  let teater = kumpulanFilm[dataFilm].bioskop;
  for (const id of teater) {
    var option = document.createElement("option");
    option.text = teater[id].theater;
    option.value = teater[id].theater;
    var select = document.getElementById("input_theater");
    select.appendChild(option);
  }
  // let inputFilm = document.createElement("#input_film")
  // inputFilm.appendChild(option).innerHTML = judul;
  // if (a.options[a.selectedIndex].value == judul) {
  //   return judul;
  // }
}

console.log(pilihFilm());
// console.log(pilihTheater);
