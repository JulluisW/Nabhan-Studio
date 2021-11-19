const kumpulanFilm = [
  {
    "Venom: Let There Be Carnage": {
      img: "https://media.21cineplex.com/webcontent/gallery/pictures/163307229284629_287x421.jpg",
      sinopsis: "Eddie (Tom Hardy) yang kini sudah berteman dengan Venom berusaha hidup normal, namun masalah datang saat ia bertemu dengan Cletus Kasady (Woody Harrelson) yang diketahui sebagai inang dari symbiote dengan sebutan Carnage.",
      bioskop: [
        { theater: "Mall Paris Van Surabaya", jam: ["12:15", "15:20", "17:00"] },
        { theater: "Gren Indonesia", jam: ["13:15", "15:25", "17:35"] },
        { theater: "Artha Moro", jam: ["12:55", "15:00", "18:35"] },
        { theater: "Armadilo Town Square", jam: ["13:00", "16:25", "19:35"] }
      ]
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
        { theater: "Armadilo Town Square", jam: ["13:00", "16:25", "19:35"] }
      ]
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
        { theater: "Armadilo Town Square", jam: ["13:00", "16:25", "19:35"] }
      ]
    },
  },
  {
    "Dilan Kembali ke Bandung": {
      img: "https://ultimagz.com/wp-content/uploads/dilan-91-1.png",
      sinopsis: "Eddie (Tom Hardy) yang kini sudah berteman dengan Venom berusaha hidup normal, namun masalah datang saat ia bertemu dengan Cletus Kasady (Woody Harrelson) yang diketahui sebagai inang dari symbiote dengan sebutan Carnage.",
      bioskop: [
        { theater: "Mall Paris Van Surabaya", jam: ["12:15", "15:20", "17:00"] },
        { theater: "Gren Indonesia", jam: ["13:15", "15:25", "17:35"] },
        { theater: "Artha Moro", jam: ["12:55", "15:00", "18:35"] },
        { theater: "Armadilo Town Square", jam: ["13:00", "16:25", "19:35"] }
      ]
    },
  },
  {
    "Kobocan": {
      img: "https://s2.bukalapak.com/img/7720877431/s-330-330/Komik_Kobo_Chan_Vol10_By_Masashi_Ueda___Penerbit_Elex_Media.jpg.webp",
      sinopsis: "Eddie (Tom Hardy) yang kini sudah berteman dengan Venom berusaha hidup normal, namun masalah datang saat ia bertemu dengan Cletus Kasady (Woody Harrelson) yang diketahui sebagai inang dari symbiote dengan sebutan Carnage.",
      bioskop: [
        { theater: "Mall Paris Van Surabaya", jam: ["12:15", "15:20", "17:00"] },
        { theater: "Gren Indonesia", jam: ["13:15", "15:25", "17:35"] },
        { theater: "Artha Moro", jam: ["15:00", "18:35"] }
      ]
    },
  },
];

document.getElementsByClassName("poster-movie-terpilih").src = "./img/venom.jpg"
const inputFilm = document.getElementById("input_film");
const inputTheater = document.getElementById("input_theater");
// const labelTheater = document.getElementById("label_theater");
const inputJam = document.getElementById("input_jam");
// const labelJam = document.getElementById("label_jam");
const inputDataFilm = document.getElementById("input_dataFilm");
const bookingForm = document.getElementById("booking-form")

let dataFilm = '';
let dataTheater = '';
let dataJam = '';

function pilihFilm() {
  for (const movie of kumpulanFilm) {
    for (const judul in movie) {
      const option = document.createElement("option");
      option.text = judul;
      option.value = judul;
      inputFilm.appendChild(option);
    }
  }
}
pilihFilm()

inputFilm.addEventListener("change", function () {
  inputTheater.classList.remove("d-none");
  // labelTheater.classList.remove("d-none");
  const dataFilm = inputFilm.options[inputFilm.selectedIndex].value;
  pilihTheater(dataFilm);
});

inputTheater.addEventListener("change", function () {
  inputJam.classList.remove("d-none");
  // labelJam.classList.remove("d-none");
  const dataTheater = inputTheater.options[inputTheater.selectedIndex].value;
  const dataFilm = inputFilm.options[inputFilm.selectedIndex].value;
  pilihJam(dataTheater, dataFilm);
});

inputDataFilm.addEventListener("click", function () {
  dataFilm = inputFilm.options[inputFilm.selectedIndex].value;
  dataTheater = inputTheater.options[inputTheater.selectedIndex].value;
  dataJam = inputJam.options[inputJam.selectedIndex].value;
  tampilkanKursi(dataFilm, dataTheater, dataJam)
  // console.log(dataFilm, dataTheater, dataJam);
  bookingForm.classList = "d-none"
});


function pilihTheater(namaFilm) {
  for (let i = 0; i < kumpulanFilm.length; i++) {
    if (kumpulanFilm[i][namaFilm]) {
      const teater = kumpulanFilm[i][namaFilm].bioskop
      for (let j = 0; j < teater.length; j++) {
        const optionTheater = document.createElement("option");
        optionTheater.text = teater[j].theater;
        optionTheater.value = teater[j].theater;
        inputTheater.appendChild(optionTheater);
      }
    }
  }
}

function pilihJam(tempat, namaFilm) {
  for (let i = 0; i < kumpulanFilm.length; i++) {
    if (kumpulanFilm[i][namaFilm]) {
      const teater = kumpulanFilm[i][namaFilm].bioskop
      for (let j = 0; j < teater.length; j++) {
        // tampilkan jam option
        if (teater[j].theater === tempat) {
          for (let k = 0; k < teater[j].jam.length; k++) {
            const optionJam = document.createElement("option");
            optionJam.text = teater[j].jam[k];
            optionJam.value = teater[j].jam[k];
            inputJam.appendChild(optionJam);
          }
        }
      }
    }
  }
}

const kontainerKursi = document.getElementById("kontainerKursi");
function tampilkanKursi() {

  let row = ['A', 'B', 'C', 'D', 'E', 'F']
  for (let i = 0; i < row.length; i++) {
    const divBaris = document.createElement("div");
    divBaris.classList = 'row-kursi';
    divBaris.id = 'kursiBaris' + row[i];
    kontainerKursi.appendChild(divBaris);
    for (let j = 1; j <= 6; j++) {
      const idKursiBaris = "kursiBaris" + row[i];
      const divKursi = document.getElementById(idKursiBaris);
      const buttonKolom = document.createElement("button");
      buttonKolom.classList = 'kursi';
      const namaKursiKolom = 'kursi' + row[i] + j
      buttonKolom.id = namaKursiKolom;
      buttonKolom.innerHTML = row[i] + j;
      buttonKolom.setAttribute('onclick', `fungsiKursi('${namaKursiKolom}')`)
      divKursi.appendChild(buttonKolom);
    }
  }
}
// tampilkanKursi();

let totalHarga = 0;
let jumlahKursi = 0;

function fungsiKursi(namaKolom) {
  console.log(namaKolom)
  if (document.getElementById(namaKolom).classList.contains('bg-light')) {
    document.getElementById(namaKolom).classList.remove("bg-light")
    totalHarga -= 50000
    jumlahKursi--
    // document.getElementById(namaKolom).classList = "kelas"
  } else {
    document.getElementById(namaKolom).classList += " bg-light";
    totalHarga += 50000
    jumlahKursi++
  }
  console.log(totalHarga, jumlahKursi);
}

// function pilihTheater() {
//   let dataFilm = inputFilm.options[inputFilm.selectedIndex].value;
//   // pilihTheater(dataFilm)
//   let teater = kumpulanFilm[dataFilm].bioskop;
//   for (const id of teater) {
//     var option = document.createElement("option");
//     option.text = teater[id].theater;
//     option.value = teater[id].theater;
//     var select = document.getElementById("input_theater");
//     select.appendChild(option);
//   }
//   // let inputFilm = document.createElement("#input_film")
//   // inputFilm.appendChild(option).innerHTML = judul;
//   // if (a.options[a.selectedIndex].value == judul) {
//   //   return judul;
//   // }
// }

// console.log(pilihFilm());
// // console.log(pilihTheater);
