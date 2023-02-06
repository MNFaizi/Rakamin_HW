// class listPendaftar{
//     constructor(formData, tableData){
//         this.formData = formData;
//         this.tableData = tableData;
//         this.dataTable = document.getElementById("tbody", [0]);
//         this.data = [];
//     }
//     async submitData(event){
//         event.preventDefault();

//         const nama = this.formData.element.nama.value;
//         const umur = this.formData.element.umur.value;
//         const uangSaku = this.formData.element.uangsaku.value;

//         this.data.push({nama, umur, uangSaku});
//         this.tampilkanData();
//     }
//     tampilkanData(){
//         this.tampilkanData.innerHTML = "";
        
//         this.data.forEach((item) =>{
//             const baris = document.createElement("tr");
//             const kolomNama = document.createElement("td");
//             const kolomUmur = document.createElement("td");
//             const kolomUangSaku = document.createElement("td");

//             kolomNama.textContent = item.nama;
//             kolomUmur.textContent = item.umur;
//             kolomUangSaku.textContent = item.UangSaku;

//             baris.appendChild(kolomNama);
//             baris.appendChild(kolomUmur);
//             baris.appendChild(kolomUangSaku);

//             this.tableData.appendChild(baris);
//         });
//     }
//     init() {
//         this.formData.addEventListener("submit", this.submitData.bind(this));
//     }
// }

// const formInitData = document.getElementById("formInitdata");
// const tableData = document.getElementById("dataTable");

// const data = new listPendaftar(formInitData,tableData);
// data.init();

// Fixing
class DaftarList{
    constructor(nama, umur, uangSaku){
        this.data = [];
        this.nama = nama;
        this.umur = umur;
        this.uangSaku = uangSaku;
    }
    filter(nama,umur, uangSaku){
        if(nama.length < 10 ){
            alert("Nama harus lebih dari atau sama dengan 10 karakter");
            return false
        }
        if(umur < 25 ){
            alert("Minimal umur 25 tahun");
            return false
        }
        if(uangSaku < 100000 || uangSaku >1000000){
            alert("Uang Sakumu harus 100000 - 1000000, kami tidak menerima orang miskin");
            return false
        }
        else{
            this.data.push({
                nama : nama,
                umur : parseInt(umur),
                uangSaku : parseInt(uangSaku),
        });
        }
        return true
    }
    createTable(nama, umur, uangSaku){
        const tbody = document.getElementById("dataTable");
        const tr = document.createElement("tr");
        const colNama = document.createElement("td");
        colNama.innerHTML = nama;
        const colUmur = document.createElement("td");
        colUmur.innerHTML = umur;
        const colUangSaku = document.createElement("td");
        colUangSaku.innerHTML = uangSaku;

        tr.appendChild(colNama);
        tr.appendChild(colUmur);
        tr.appendChild(colUangSaku);

        tbody.appendChild(tr);
        return true
    }
    averageResume(){
        let newUmur = 0;
        let newUangSaku = 0;
        for(let i = 0; i < this.data.length; i++){
            newUmur += this.data[i].umur;
            newUangSaku += this.data[i].uangSaku
        }
        let avgUmur = Math.round(newUmur/this.data.length);
        let avgUangSaku = Math.round(newUangSaku/this.data.length);
        return {
            umur : avgUmur,
            uangSaku : avgUangSaku,
        }
    }
    createResume(){
        const resume = document.getElementById("resume");
        const resumeContent = 
        `<div class="row">
            <div class="text-center">
                <p>Rata-rata pendaftar berumur ${this.averageResume().umur} dengan rata-rata uang saku yang mereka bawa sebesar ${this.averageResume().uangSaku}</p>
            </div>
        </div>`;
        resume.innerHTML = resumeContent;
    }
}

let pendaftar = new DaftarList;
const daftar = document.getElementById("formInitData");

daftar.onsubmit = async function (event){
    event.preventDefault()

    const nama = document.getElementById("formNama");
    const umur = document.getElementById("formUmur");
    const uangSaku = document.getElementById("formUangSaku");

    let filter = await pendaftar.filter(nama.value, umur.value, uangSaku.value);
    pendaftar.createTable(nama.value, umur.value, uangSaku.value );
    pendaftar.createResume()
}


