const daftarMatkul = ["Pemrograman Web", "Struktur Data", "Basis Data", "Kecerdasan Buatan", "Pemrograman Berorientasi Objek", "Jaringan Komputer", "Sistem Operasi", "Rekayasa Perangkat Lunak", "Grafika Komputer", "Analisis dan Desain Algoritma"];
const daftarDosen = ["Prof. Dr. Agus Zainal Arifin", "Prof. Dr. Ir. Riyanarto Sarno", "Dr. Eng. Nanik Suciati", "Dr. Yudhi Purwananto", "Dr. Diana Purwitasari", "Tohari Ahmad, Ph.D.", "Rully Soelaiman, M.Kom.", "Wijayanti Nurul Khotimah, M.Sc.", "Victor Hariadi, M.Kom.", "Rizky Januar Akbar, M.Eng."];
const matkulSelect = document.getElementById("mata_kuliah");
daftarMatkul.forEach(function(mata_kuliah) {
    const option = document.createElement("option");
    option.textContent = mata_kuliah;
    option.value = mata_kuliah;
    matkulSelect.appendChild(option);
});
const dosenSelect = document.getElementById("dosen");
daftarDosen.forEach(function(dosen) {
    const option = document.createElement("option");
    option.textContent = dosen;
    option.value = dosen;
    dosenSelect.appendChild(option);
});