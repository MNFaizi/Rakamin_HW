// Creatte random array
function randomArray(min,max){
    // Create Array
    const numbRand = [];
    const evenNumber =[];
    const oddNumber = [];
    for(i = min; i < max; i++){
        let num = Math.floor(Math.random()*((max - min)+min));
        numbRand.push(num);
        if(num % 2 == 0){
            evenNumber.push(num);
        }
        else{
            oddNumber.push(num);
        }
    }
    console.log(numbRand);
    console.log(evenNumber);
    console.log(oddNumber);
    // nilai maximum dan minimum angka genap

    let nilaiTerbesarEven = evenNumber[0];
    let nilaiTerkecilEven = evenNumber[0];
    for(i = 0; i < evenNumber.length; i++){
        if(evenNumber[i] > nilaiTerbesarEven){
            nilaiTerbesarEven = evenNumber[i];
        }
        else if(evenNumber[i] < nilaiTerkecilEven){
            nilaiTerkecilEven = evenNumber[i];
        }
    }
    console.log(nilaiTerbesarEven,nilaiTerkecilEven);

    // nilai totalEven
    let nilaiTotalEven = evenNumber[0];
    let nilaiRataEven = evenNumber[0];
    for(let i in evenNumber){
        nilaiTotalEven += evenNumber[i];
        nilaiRataEven = nilaiTotalEven/evenNumber.length;
    }
    console.log("Nilai Total Genap "+nilaiTotalEven);
    console.log("Nilai Rata-Rata Genap "+nilaiRataEven);
    console.log("panjang array "+ evenNumber.length)

    // nilai maximum dan minimum angka ganjil
    let nilaiTerbesarOdd = oddNumber[0];
    let nilaiTerkecilOdd = oddNumber[0];
    for(i = 0; i < oddNumber.length; i++){
        if(oddNumber[i] > nilaiTerbesarOdd){
            nilaiTerbesarOdd = oddNumber[i];
        }
        else if(oddNumber[i] < nilaiTerkecilOdd){
            nilaiTerkecilOdd = oddNumber[i];
        }
    }
    console.log(nilaiTerbesarOdd, nilaiTerkecilOdd);

     // nilai totalOdd
     let nilaiTotalOdd = oddNumber[0];
     let nilaiRataOdd = oddNumber[0];
     for(let i in oddNumber){
         nilaiTotalOdd += oddNumber[i];
         nilaiRataOdd = nilaiTotalOdd/oddNumber.length;
     }
     console.log("nilai Total Ganjil "+ nilaiTotalOdd);
     console.log("Nilai Rata-Rata Ganjil "+ nilaiRataOdd);
     console.log("panjang array " + oddNumber.length)
    //  Perbandingan Rata-Rata
    if(nilaiRataEven>nilaiRataOdd){
        console.log("Nilai Rata genap lebih besar dari ganjil");       
    }
    else{
        console.log("Nilai rata ganjil lebih besar dari genap");
    };
    // Perbandingan Total 
    if(nilaiTotalEven>nilaiTotalOdd){
        console.log("nilai total genap lebih besar dari ganjil");
    }
    else{
        console.log("nilai total ganjil lebih besar dari genap");
    }
    // perbandingan max
    if(nilaiTerbesarEven>nilaiTerbesarOdd){
        console.log("nilai maximum genap lebih besar dari ganjil");
    }
    else{
        console.log("nilai maximum ganjil lebih besar dari genap");
    }
    // perbandingan min
    if(nilaiTerkecilEven>nilaiTerkecilOdd){
        console.log("nilai minimum genap lebih besar dari ganjil");
    }
    else{
        console.log("nilai manimum ganjil lebih besar dari genap");
    }
};

// myGithub("https://github.com/MNFaizi/Rakamin_HW/blob/master/algoritmaAnalisisData.js")

// Solution perfunction
const randArr = [];
const evenArr = [];
const oddArr = [];
// function create Array
const createArr = (min,max) =>{
    for(let i = 0; i < max; i++){
        let num = Math.round(Math.random()*((max-min)+min));
        randArr.push(num);
    }
    return randArr;
};
// function membagi array menjadi ganjil dan genap
const splitArr = (value) =>{
    for(let i = 0; i < value.length;i++){
        if(value[i] % 2 == 0){
            evenArr.push(value[i]);
        }
        else{
            oddArr.push(value[i]);
        }
    }
    return [evenArr,oddArr]
};
// funciton menjumlahkan array genap
let sumEven = 0;
let aveEven = 0;
const sumAvEven = (arr) =>{
    for(let i in arr){
        sumEven+= arr[i];
        aveEven = sumEven/arr.length;
    }
    console.log(sumEven,aveEven);
    return [sumEven,aveEven];
};
// function menjumlahkan array ganjil
let sumOdd = 0;
let aveOdd = 0;
const sumAvOdd = (arr) =>{
    for(let i in arr){
        sumOdd+= arr[i];
        aveOdd = sumOdd/arr.length;
    }
    console.log(sumOdd,aveOdd);
    return [sumOdd,aveOdd];
};
// fungsi mendapatkan nilai terbesar dan terkecil genap
const compareEven = (arr) =>{
    let valGreatEven = evenArr[0];
    let valSmallEven = evenArr[0];
    for(let i of arr){
        if(arr[i] > valGreatEven){
            valGreatEven = arr[i];
        }
        else if(arr[i] < valGreatEven){
            valSmallEven = arr[i];
        }
    };
    console.log(valGreatEven,valSmallEven);
    return [valGreatEven,valSmallEven]
};

createArr(1,100);
console.log(randArr);
splitArr(randArr);
console.log(evenArr,oddArr);
sumAvEven(evenArr);
sumAvOdd(oddArr);
compareEven(evenArr);