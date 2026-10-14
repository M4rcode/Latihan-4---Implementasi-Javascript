const daftarJenis = ["Desktop", "Laptop", "Smartphone"];
const daftarMerk = ["Acer", "Apple", "Asus", "Dell", "HP", "Lenovo", "MSI", "Oppo", "Realme", "Samsung", "Vivo", "Xiaomi"];
const merkSelect = document.getElementById("merk");
daftarMerk.forEach(function(merk) {
    const option = document.createElement("option");
    option.textContent = merk;
    option.value = merk;
    merkSelect.appendChild(option);
});
const jenisSelect = document.getElementById("jenis_produk");
daftarJenis.forEach(function(jenis_produk) {
    const option = document.createElement("option");
    option.textContent = jenis_produk;
    option.value = jenis_produk;
    jenisSelect.appendChild(option);
});

function Show(){
    const jenis = document.getElementById("jenis_produk").value;
    const merk = document.getElementById("merk").value;

    if (jenis === "" || jenis === "Pilih Jenis Produk" || merk === "" || merk === "Pilih Merk") {
        alert("Silakan pilih Jenis Produk dan Merk terlebih dahulu!");
    } else {
        alert("Kombinasi pilihan:\nJenis Produk: " + jenis + "\nMerk: " + merk);
    }

}