function hitung() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var operator = document.getElementById("operator").value;
    var hasil;

    switch (operator) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            hasil = angka1 / angka2;
            break;
        // case "modulus":
        //     hasil = angka1 % angka2;
        //     break;
        // default:
        //     hasil = "Operasi tidak valid";
    }

    document.getElementById("hasil").innerText = "Hasil: " + hasil;
}