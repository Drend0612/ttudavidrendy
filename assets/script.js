document.getElementById("formPendaftaran").addEventListener("submit", function (event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let tglLahir = document.getElementById("tglLahir").value;
    let alamat = document.getElementById("alamat").value.trim();
    let email = document.getElementById("email").value.trim();
    let telepon = document.getElementById("telepon").value.trim();
    let program = document.getElementById("program").value;

    let pesan = document.getElementById("pesan");

    
    if (nama === "" || tglLahir === "" || alamat === "" || email === "" || telepon === "") {
        pesan.style.color = "red";
        pesan.textContent = "Harap isi semua kolom!";
        return;
    }

    if (!email.includes("@")) {
        pesan.style.color = "red";
        pesan.textContent = "Email tidak valid!";
        return;
    }

    if (telepon.length < 10 || isNaN(telepon)) {
        pesan.style.color = "red";
        pesan.textContent = "Nomor telepon harus angka dan minimal 10 digit!";
        return;
    }


    pesan.style.color = "green";
    pesan.textContent = "Pendaftaran berhasil!";

    this.submit();
});