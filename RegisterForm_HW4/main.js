class listPendaftar{
    constructor(formData, tableData){
        this.formData = formData;
        this.tableData = tableData;
        this.dataTable = document.getElementById("tbody", [0]);
        this.data = [];
    }
    async submitData(event){
        event.preventDefault();

        const nama = this.formData.element.nama.value;
        const umur = this.formData.element.umur.value;
        const uangSaku = this.formData.element.uangsaku.value;

        this.data.push({nama, umur, uangSaku});
        this.tampilkanData();
    }
    tampilkanData(){
        this.tampilkanData.innerHTML = "";
        
        this.data.forEach((item) =>{
            const baris = document.createElement("tr");
            const kolomNama = document.createElement("td");
            const kolomUmur = document.createElement("td");
            const kolomUangSaku = document.createElement("td");

            kolomNama.textContent = item.nama;
            kolomUmur.textContent = item.umur;
            kolomUangSaku.textContent = item.UangSaku;

            baris.appendChild(kolomNama);
            baris.appendChild(kolomUmur);
            baris.appendChild(kolomUangSaku);

            this.tableData.appendChild(baris);
        });
    }
    init() {
        this.formData.addEventListener("submit", this.submitData.bind(this));
    }
}

const formInitData = document.getElementById("formInitdata");
const tableData = document.getElementById("dataTable");

const data = new listPendaftar(formInitData,tableData);
data.init();