// Case 1
let suhuAir = 12;

if(suhuAir >=-100 && suhuAir <= 0){
    console.log("Beku")
}
else if(suhuAir > 0 && suhuAir <=100){
    console.log("Cair")
}
else if(suhuAir >100 && suhuAir <= 500) {
    console.log("Uap")
}
else{
    return undefined
};

// Case 1 Function Air
let waterTemp = (temp) => {
    if(temp >= -100 && temp <= 0){
        return "Beku";
    }
    else if(temp >0 && temp <=100){
        return "Cair";
    }
    else if(temp >100 && temp <= 500){
        return "Uap"
    }
    else{
        return undefined
    }
}
console.log(waterTemp(-501));

// Case 2

const kendaraan = {
    jenis: "motor",
    warnaPlat: "merah",
    cc: 1600,
};
let jenisBBM = [];
if(kendaraan.jenis === "motor" || kendaraan.warnaPlat === "kuning"){
    jenisBBM.push("subsidi");
    console.log(jenisBBM);
}
else if(kendaraan.jenis === "mobil" && kendaraan.cc < 1500){
    jenisBBM.push('Pertamax');
    console.log(jenisBBM);
}
else if(kendaraan.jenis === "mobil" && kendaraan.cc >= 1500){
    jenisBBM.push("Pertamax Turbo");
    console.log(jenisBBM);
};

//  Case 2 useFunction
function BBMkendaraan(jenisKendaraan,warnaPlat,cckendaraan){
    return (jenisKendaraan === "motor" || warnaPlat === "kuning" ? "BBM Bersubsidi": 
            jenisKendaraan === "mobil" && cckendaraan <= 1500 ? "BBM Pertamax": 
            "BBM Pertamax Turbo")


  /*  if(jenisKendaraan === "motor" || warnaPlat === "kuning" && cckendaraan === 110){
        return "BBM Subsidi";
    }
    else if(jenisKendaraan === "mobil" && warnaPlat === "hitam" && cckendaraan < 1500){
        return "BBM Pertamax";
    }
    else if(jenisKendaraan === "mobil" && warnaPlat === "hitam" && cckendaraan >= 1500){
        return "BBM Pertamax Turbo"
    } */
}

console.log(BBMkendaraan("mobil","hitam",110))

// kang galon
/* const hargaBalon = 50;
const kembalian = 25;
const duitAli = hargaBalon+kembalian;
const diskon = (duitAli - hargaBalon)/50;
const hargaDiskon = hargaBalon*diskon;
const totalKembalian = kembalian +hargaDiskon;

console.log(totalKembalian) */

// tukang keramik
let luasRuangan = 10*30;
let luasKeramik = (40*40)/100;
let bykKeramik = luasRuangan/luasKeramik;

console.log(Math.round(bykKeramik))


// pelari rinothon
const totalJarak = 200;
const wktDanau = (500/60)/60;
const wktTotalDanau = wktDanau * 4;
const trakDanau = 0.5*4;
const trakSepeda = 100;
const wktSepeda = trakSepeda/40;
const trakLari = totalJarak - trakDanau -trakSepeda;
const wktLari = trakLari/20;

const totalWaktu = wktTotalDanau+wktLari+wktSepeda;
const totalWaktuMenit = totalWaktu * 60;

let remed = totalWaktu < 5 ? "Selamat Lolos" : "Remed";

console.log(remed)
console.log(Math.round(totalWaktu));
console.log(Math.round(totalWaktuMenit));