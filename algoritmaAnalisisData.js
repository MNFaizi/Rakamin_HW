// array random
function randomArray(min,max){
    // Create Array
    const numbRand = [];
    const evenNumber =[];
    const oddNumber = [];
    for(i = min; i < max; i++){
        let num = Math.floor(Math.random()*((max - min)+1));
        numbRand.push(num);
        if(num % 2 == 0){
            evenNumber.push(num);
        }
        else{
            oddNumber.push(num);
        }
    }
    console.log(numbRand);
    console.log(oddNumber);
    console.log(evenNumber);
    // nilai maximum dan minimum angka genap
    let nilaiTerbesarEven = min;
    let nilaiTerkecilEven = max;
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
    let nilaiTotalEven = 0;
    let nilaiRataEven = 0;
    for(let i in evenNumber){
        nilaiTotalEven += evenNumber[1];
        nilaiRataEven = nilaiTotalEven/evenNumber.length;
    }
    console.log("Nilai Total Genap "+nilaiTotalEven);
    console.log("Nilai Rata-Rata Genap "+nilaiRataEven);
    // nilai maximum dan minimum angka ganjil
    let nilaiTerbesarOdd = min;
    let nilaiTerkecilOdd = max;
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
     let nilaiTotalOdd = 0;
     let nilaiRataOdd = 0;
     for(let i in oddNumber){
         nilaiTotalOdd += oddNumber[1];
         nilaiRataOdd = nilaiTotalOdd/oddNumber.length;
     }
     console.log("nilai Total Ganjil "+ nilaiTotalOdd);
     console.log("Nilai Rata-Rata Ganjil "+ nilaiRataOdd);
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

randomArray(1,100);

myGithub("https://github.com/MNFaizi/Rakamin_HW/blob/master/algoritmaAnalisisData.js")
