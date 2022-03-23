
// class Gaji  {
//     // nik
//     // nama
//     // jns_klm
//     // jabatan
//     // total

//     getNIK() {
//         throw new Error("Method not implemented")
//     }
//     getNama() {
//         throw new Error("Method not implemented")
//     }
//     totalGaji() {
//         throw new Error("Method not implemented")
//     }
//     getInfo() {
//         throw new Error("Method not implemented")
//     }
// }

// const gaji = new Gaji()

// class ClassifierGaji extends Gaji {
//     // golongan
//     // gapok
//     // tunjangan
//     // potongan
//     // constructor(golongan, gapok, tunjangan, potongan) {
//     //     super()
//     //     this.golongan = golongan
//     //     this.gapok = gapok
//     //     this.tunjangan = tunjangan
//     //     this.potongan = potongan
//     // }

//     getGolongan() {
//         throw new Error("Method not implemented")
//     }
//     getGapok() {
//         throw new Error("Method not implemented")
//     }
//     getTunjangan() {
//         throw new Error("Method not implemented")
//     }
// }

// class Worker extends ClassifierGaji{
//     constructor(name, username, role,salaryClass, basicSalary, password, allowance, workHours, attendance, dataPerformance) {
//         super()
//         this.name = name;
//         this.username = username;
//         this.role = role;
//         this.salaryClass = salaryClass;
//         this.basicSalary = basicSalary;
//         this.password = password;
//         this.allowance = allowance;
//         this.workHours = workHours;
//         this.attendance = attendance;
//         this.dataPerformance = dataPerformance;
//     }
   
//     getGolongan() {
//         if (salaryClass === "Manager"){
//             return 'Golongan 1'
//         }
//     }
// }

// const worker1 = new Worker("Jon Cena", "joncena", "Staff Gudang","Manager",3000000,1234,500000);

// const worker2 = new Worker("Jon Cena", "joncena", "Staff Gudang",3000000);

// const workers = [worker1, worker2];


// class GajiManajer extends ClassifierGaji {
//     #golongan = 4
//     #gapok = 6000000
//     #tunjangan = 1500000
//     #jabatan = "Manajer"
//     #potongan = 200000
//     constructor(nik, nama, jns_klm) {
//         super()
//         this.nik = nik;
//         this.nama = nama;
//         this.jns_klm = jns_klm;
//     }

//     getGolongan() {
//         return "Gaji Golongan 4"
//     }

//     getGapok() {
//         return `Gaji Pokok : ${this.#gapok}`
//     }

//     getTunjangan() {
//         return `Tunjangan: ${this.#tunjangan}`
//     }

//     getNIK() {
//         return "NIK"
//     }
//     getNama() {
//     }
//     totalGaji() {
//         return this.total = (this.#gapok + this.#tunjangan) - this.#potongan
//     }
//     getInfo() {
//         return (`NIK : ${this.nik}, Nama: ${this.nama}, Gender: ${this.jns_klm}, Jabatan: ${this.#jabatan}, Golongan: ${this.#golongan}, Total Gaji: Rp${this.totalGaji()}`)
//     }

// }

// const manajer = new GajiManajer(200, "Rony", "Laki")

// class GajiDepartemen extends ClassifierGaji {
//     #golongan = 3
//     #gapok = 4500000
//     #tunjangan = 1000000
//     #jabatan = "Departemen"
//     #potongan = 150000
//     constructor(nik, nama, jns_klm) {
//         super()
//         this.nik = nik;
//         this.nama = nama;
//         this.jns_klm = jns_klm;
//     }

//     getGolongan() {
//         return "Gaji Golongan " + this.#golongan
//     }

//     getGapok() {
//         return `Gaji Pokok : ${this.#gapok}`
//     }

//     getTunjangan() {
//         return `Tunjangan: ${this.#tunjangan}`
//     }

//     getNIK() {
//         return "NIK"
//     }
//     getNama() {
//     }
//     totalGaji() {
//         return this.total = (this.#gapok + this.#tunjangan) - this.#potongan
//     }
//     getInfo() {
//         return (`NIK : ${this.nik}, Nama: ${this.nama}, Gender: ${this.jns_klm}, Jabatan: ${this.#jabatan}, Golongan: ${this.#golongan}, Total Gaji: Rp${this.totalGaji()}`)
//     }

// }

// const department = new GajiDepartemen(1, "Wahyu", "Laki")

// class GajiAdminGudang extends ClassifierGaji {
//     #golongan = 2
//     #gapok = 3000000
//     #tunjangan = 1000000
//     #jabatan = "Admin & Gudang"
//     #potongan = 100000
//     constructor(nik, nama, jns_klm) {
//         super()
//         this.nik = nik;
//         this.nama = nama;
//         this.jns_klm = jns_klm;
//     }

//     getGolongan() {
//         return "Gaji Golongan " + this.#golongan;
//     }

//     getGapok() {
//         return `Gaji Pokok : ${this.#gapok}`
//     }

//     getTunjangan() {
//         return `Tunjangan: ${this.#tunjangan}`
//     }

//     getNIK() {
//         return "NIK"
//     }
//     getNama() {
//     }
//     totalGaji() {
//         return this.total = (this.#gapok + this.#tunjangan) - this.#potongan
//     }
//     getInfo() {
//         return (`NIK : ${this.nik}, Nama: ${this.nama}, Gender: ${this.jns_klm}, Jabatan: ${this.#jabatan}, Golongan: ${this.#golongan}, Total Gaji: Rp${this.totalGaji()}`)
//     }
// }

// const gudang = new GajiAdminGudang(2, "Wahyuu", "Laki juga")

