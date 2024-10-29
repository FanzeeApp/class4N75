// // 1 & 2 topshiriq

// class Odam {
//   constructor(ism, yosh) {
//     this.name = ism;
//     this.age = yosh;
//   }
//   salomBer() {
//     console.log(`Ismi: ${this.name}, yoshi: ${this.age} da`);
//   }
//   ismniOl() {
//     console.log(`Ismi: ${this.name}`);
//   }
//   ismniOzgartir(yangiIsm) {
//     this.name = yangiIsm;
//   }
// }

// vali = new Odam("Valijon", 23);

// vali.salomBer();
// vali.ismniOl();

// vali.ismniOzgartir("Durdimurod");

// vali.salomBer();
// vali.ismniOl();

// // 3-topshiriq

// class Hisob {
//   #balans;
//   constructor(summa) {
//     this.#balans = summa;
//   }
//   hisobniToldir(pay) {
//     this.#balans += pay;
//     console.log(`Hisob: ${pay} so'mga to'ldirildi.`);
//   }
//   hisobniOl() {
//     console.log(`Hisobingizda: ${this.#balans} so'm mavjud.`);
//   }
//   yechibOl(chiqarish) {
//     if (chiqarish < this.#balans) {
//       this.#balans -= chiqarish;
//       console.log(`${chiqarish} so'm chiqarib olindi.`);
//     } else {
//       console.log("Hisobingizda mablag' yetarli emas!");
//     }
//   }
// }

// ichidagiSumma = new Hisob(125000);

// ichidagiSumma.hisobniOl();
// ichidagiSumma.hisobniToldir(12000);
// ichidagiSumma.hisobniOl();
// ichidagiSumma.yechibOl(19000);
// ichidagiSumma.hisobniOl();

// // 4-topshiriq

// class Hayvon {
//   constructor(ism, ovoz) {
//     this.ism = ism;
//     this.ovoz = ovoz;
//   }
// }

// class It extends Hayvon {
//   ovozBer() {
//     console.log(this.ovoz);
//   }
// }
// class Mushuk extends Hayvon {
//   ovozBer() {
//     console.log(this.ovoz);
//   }
// }

// let it = new It("It", "Vov!");
// let mushuk = new Mushuk("Mushuk", "Miyov!");

// it.ovozBer();
// mushuk.ovozBer();

// // 5-topshiriq

// class Mashina {
//   #motorHolati;
//   constructor() {
//     this.#motorHolati = false;
//   }
//   motorniYoq() {
//     this.#motorHolati = true;
//   }
//   motorniOchir() {
//     this.#motorHolati = false;
//   }
//   motorniYoqilganmi() {
//     if (this.#motorHolati === true) {
//       console.log("Ha yoqilgan");
//     } else {
//       console.log("Yo'q yoqilmigan");
//     }
//   }
// }

// cobalt = new Mashina("O'chiq");

// // cobalt.motorniYoqilganmi();
// // cobalt.motorniYoq();
// // cobalt.motorniYoqilganmi();
// // cobalt.motorniOchir();
// // cobalt.motorniYoqilganmi();

// // 6-topshiriq

// class Transport {
//   constructor(tur, tezlik) {
//     this.tur = tur;
//     this.tezlik = tezlik;
//   }
// }

// class Mashina extends Transport {
//   constructor(tur, tezlik) {
//     super(tur, tezlik);
//   }

//   eshikniOch() {
//     console.log("Eshik ochildi.");
//   }

//   eshikniYop() {
//     console.log("Eshik yopildi.");
//   }
// }

// class Velosiped extends Transport {
//   constructor(tur, tezlik) {
//     super(tur, tezlik);
//   }

//   savatniOrnat() {
//     console.log("Savat o'rnatildi.");
//   }

//   savatniOlibTashla() {
//     console.log("Savat olib tashlandi.");
//   }
// }
// const mercedez = new Mashina("S200", 260);
// mercedez.eshikniOch();
// mercedez.eshikniYop();

// const velosiped = new Velosiped("Aist", 60);
// velosiped.savatniOrnat();
// velosiped.savatniOlibTashla();

// // 7-toshiriq

// class Shakl {
//     constructor(nom, rang) {
//         this.nom = nom;
//         this.rang = rang;
//     }

//     maydonniOl() {
//         console.log("Amal bajarmaydi");
//     }
// }

// class Aylana extends Shakl {
//     constructor(nom, rang, radius) {
//         super(nom, rang);
//         this.radius = radius;
//     }

//     maydonniOl() {
//         const maydon = Math.PI * this.radius ** 2;
//         console.log(`${this.nom} shaklining rangi ${this.rang}, maydoni: ${maydon}`);
//     }
// }

// class tortburchak extends Shakl {
//     constructor(nom, rang, kenglik, balandlik) {
//         super(nom, rang);
//         this.kenglik = kenglik;
//         this.balandlik = balandlik;
//     }

//     maydonniOl() {
//         const maydon = this.kenglik * this.balandlik;
//         console.log(`${this.nom} shaklining rangi ${this.rang}, maydoni: ${maydon}`);
//     }
// }

// const ay = new Aylana("Aylana", "qizil", 5);
// ay.maydonniOl();

// const tortburchak = new tortburchak("To'g'ri To'rtburchak", "ko'k", 4, 6);
// tortburchak.maydonniOl();

// // qiyin 1

// class Hayvon {
//   constructor(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   }

//   static qariyaptimi(yosh) {
//     return yosh > 10;
//   }
// }

// class It extends Hayvon {
//   constructor(ism, yosh) {
//     super(ism, yosh);
//   }
//   ovozBer() {
//     console.log("Vov-vov!");
//   }
// }

// let myDog = new It("Mani", 12);
// console.log(It.qariyaptimi(myDog.yosh));
// myDog.ovozBer();

// // qiyin 2

// class Hayvon {
//     constructor(ism) {
//         this.ism = ism;
//     }
//     speak() {
//         console.log(`${this.ism} ovoz bermoqda...`);
//     }
// }

// class It extends Hayvon {
//     constructor(ism) {
//         super(ism);
//     }

//     speak() {
//         console.log("Vov-vov!");
//         super.speak();
//     }
// }

// class Mushuk extends Hayvon {
//     constructor(ism) {
//         super(ism); 
//     }

//     speak() {
//         console.log("Miyov!");
//         super.speak(); 
//     }
// }

// let myDog = new It("Rex");
// myDog.speak(); 

// let myCat = new Mushuk("Kitty");
// myCat.speak();