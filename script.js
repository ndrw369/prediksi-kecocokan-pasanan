// ndrwdev.com
function calculate() {
  // Mengambil value
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;

  // Cek nama kosong
  if (name1 === "" || name2 === "") {
    alert("Nama tidak boleh kosong!");
    return false;
  }

  // Kalkulasi nama
  const number1 = calculateNumber(name1);
  const number2 = calculateNumber(name2);

  // Kalkulasi selisih
  const difference = Math.abs(number1 - number2);

  // Memberi rating
  let rating;
  if (difference === 0) {
    rating = "🥰 SANGAT COCOK 🥰";
  } else if (difference <= 2) {
    rating = "😍 COCOK 😍";
  } else if (difference <= 5) {
    rating = "🤗 CUKUP COCOK 🤗";
  } else if (difference <= 7) {
    rating = "😥 KURANG COCOK 😥";
  } else {
    rating = "😭 TIDAK COCOK 😭";
  }

  // Hasil
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `${name1} & ${name2}: <br> ${rating}`;
}

function calculateNumber(name) {
  // Nama ke lowercase
  const lowerName = name.toLowerCase();

  // Kalkulasi SUM karakter nama
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    const letter = name.charAt(i);
    if (letter === " " || letter === "." || letter === "," || letter === "-")
      continue; // Skip
    const charCode = letter.charCodeAt(0) - 96;
    sum += charCode;
  }

  // Hasil SUM ke satu digit
  while (sum > 9) {
    const digits = String(sum).split("");
    sum = digits.reduce((total, digit) => total + parseInt(digit), 0);
  }

  return sum;
}
