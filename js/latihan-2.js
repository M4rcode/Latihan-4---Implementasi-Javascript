const dataWilayah = [
    { provinsi: "Jawa Timur", kota: "Surabaya", kecamatan: "Sukolilo", kelurahan: "Keputih", kodepos: "60111" },
    { provinsi: "Jawa Timur", kota: "Surabaya", kecamatan: "Sukolilo", kelurahan: "Gebang Putih", kodepos: "60117" },
    { provinsi: "Jawa Timur", kota: "Surabaya", kecamatan: "Gubeng", kelurahan: "Airlangga", kodepos: "60286" }
];

const formPencarian = document.querySelector('.form');
const divHasil = document.getElementById('hasil_pencarian');

formPencarian.addEventListener('submit', function(event) {
    event.preventDefault();

    const provinsi = document.getElementById('provinsi').value;
    const kota = document.getElementById('kota-kabupaten').value;
    const kecamatan = document.getElementById('kecamatan').value;
    const kodePos = document.getElementById('kode').value.trim();

    const hasilCari = dataWilayah.filter(function(data) {
        const cekProv = (provinsi === "Pilih Provinsi" || provinsi === "") ? true : data.provinsi === provinsi;
        const cekKota = (kota === "Pilih Kota/Kab" || kota === "") ? true : data.kota === kota;
        const cekKec = (kecamatan === "Pilih Kecamatan" || kecamatan === "") ? true : data.kecamatan === kecamatan;
        const cekKode = data.kodepos === kodePos;

        return cekProv && cekKota && cekKec && cekKode;
    });

    divHasil.style.display = "flex";

    if (hasilCari.length > 0) {
        let htmlOutput = `
            <h2 style="color: #A1D890; margin-top: 0; margin-bottom: 10px; font-size: 22px;">Hasil Pencarian</h2>
            <p style="color: #555; font-size: 14px; margin-bottom: 20px;">Hasil pencarian kode pos dengan kata kunci "<strong>${kodePos}</strong>" ditemukan sebanyak ${hasilCari.length} buah.</p>
            <div style="display: flex; flex-direction: column; gap: 15px; width: 100%;">
        `;
        hasilCari.forEach(function(item) {
            htmlOutput += `
                <div style="border: 1px solid #A1D890; border-radius: 8px; overflow: hidden; width: 100%;">
                    <div style="background-color: #A1D890; color: white; padding: 10px 15px; font-weight: bold;">
                        ${item.kelurahan}
                    </div>
                    <div style="padding: 15px; font-size: 14px; color: #555; background-color: #f9fdfa;">
                        Kode pos <strong>${item.kodepos}</strong> untuk daerah Kelurahan ${item.kelurahan}, Kecamatan ${item.kecamatan}.
                    </div>
                </div>
            `;
        });

        htmlOutput += `</div>`;
        divHasil.innerHTML = htmlOutput;

    } else {
        divHasil.innerHTML = `
            <h2 style="color: #A1D890; margin-top: 0; margin-bottom: 10px; font-size: 22px;">Hasil Pencarian</h2>
            <p style="color: red; font-size: 14px;">Data dengan kata kunci "<strong>${kodePos}</strong>" tidak ditemukan pada wilayah yang dipilih.</p>
        `;
    }
});