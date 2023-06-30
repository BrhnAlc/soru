// // //?JavaScript let : blok kapsamında bir değişken tanımlamak için kullanılır.
// // //!örnek
// // let x=5;
// // if(true){
// //   let x=10;
// //   console.log(x);
// // }
// // console.log(x);
// // //*Bu örnekte, let anahtar kelimesi kullanılarak x adında iki farklı değişken tanımlanır. İlk console.log ifadesi, iç içe geçmiş blokta tanımlanan x değişkeninin değerini gösterir. İkinci console.log ifadesi ise daha genel kapsamdaki x değişkeninin değerini gösterir.



// // //!örnek
// // function sayHello(){
// //   let message ="merhaba";
// //   console.log(message);
// // }
// // sayHello();
// // console.log(message);

// // //!örnek

// // let i=0;
// // for(let i=1; i<=5; i++){
// //   console.log(i);
// // }

// // console.log(i);

// // //?Düğmeye her tıklandığında çalıştırılacak olan geri arama işlevine sahip bir "tıklama" olay dinleyicisine bir örnek:

// // //*HTML (button class="btn">Click Me</button>)

// // //*JavaScript
// // const btn = document.querySelector('.btn');

// //  btn.addEventListener('click', () => {
// //   let name = 'John doe';
// //   console.log(name.toUpperCase())
// // })
















// //!1- İç içe for döngüsü kurarak çarpım tablosunu yazdırma
// // for (var i = 1; i <= 10; i++) {
// //     var row = "";
// //     for (var j = 1; j <= 10; j++) {
// //       var carpim = i * j;
// //       row += i + " x " + j + " = " + carpim + "\t";
// //     }
// //     console.log(row);
// //   }
// //   //*(Bu kodda, dıştaki for döngüsü i değişkenini 1'den 10'a kadar dolaştırırken, içteki for döngüsü j değişkenini 1'den 10'a kadar dolaştırır. Her bir içteki döngü adımında, carpim adlı bir değişkene çarpım sonucunu atar ve row adlı bir stringe çarpım tablosunun bir satırını ekler.İçteki döngü tamamlandığında, row stringi bir satırı temsil eder ve console.log(row) ifadesi ile konsola yazdırılır. Bu şekilde, her i değeri için bir satır oluşur ve çarpım tablosu tamamlanır.)

// //!2- Armstrong sayı hesaplama (Basamaklarının küpleri toplamı kendisine eşit olan sayılara Armstrong sayı denir .)
// //!3-Promp ile kullanıcıdan sayı istenecek. Daha sonra while döngüsüyle bu sayının 0'dan küçük olması veya 100'den büyük olması durumunda yeniden sayı istenecek. Kullanıcı 0-100 arasında sayı girene kadar döngü devam edecek.
// //!4-Klavyeden Q vey q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde 0 ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.
// //!5- Döngüler ile login check yapma. (Kullanıcı önce id girer, id yanlış ise tekrar id girilmesi istenir, id doğru ise parola istenir, parola için de aynı döngü devam eder. doğru bilmek için 3 hakkı vardır)

//             //!DİZİLER
// //!soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu  yazınız?

// // function grades(numbers){
// //   if(numbers.length==0){
// //     return 0;
// //   }
// // }
// // const sum =numbers.reduce((total,number)=>total+number, 0);
// // const average=sum/numbers.length


// //!soru
// console.log(5=="5")
// console.log(5==="5")

// // !!soru =>(Display inline özelliğine sahip bir elementin width değeri ne olabilir?)
// //?Doğru cevap, "Display inline özelliği, width özelliği ile birlikte kullanılamaz." şeklindedir. Display inline özelliğine sahip bir element, genellikle içerik boyutu kadar genişlik alır ve width özelliği bu durumda etkisizdir. Display inline özelliği, öğenin diğer içerikle aynı satırda yer almasını sağlar ve genişlik özelliğini içeriğe bağlı olarak otomatik olarak ayarlar. Width özelliği genellikle display:inline-block veya display:block özelliği ile birlikte kullanılan elementlerde daha etkili olur.

// //!soru=>"null" ve "undefined" değerleri arasındaki fark nedir?

// //*"null" bir değeri temsil eder ve genellikle bir değişkenin bilinçli olarak boş olduğunu veya atanmamış olduğunu belirtmek için kullanılır. Yani, bir değişkenin değeri "null" ise, bu değişkenin bilerek boş olduğunu gösterir. "null", özel bir değerdir ve var olan bir değeri ifade eder.Öte yandan, "undefined" bir değişkenin değerini ifade ederken, bu değişkenin henüz değer atanmadığını veya tanımlanmadığını belirtir. Yani, bir değişkenin değeri "undefined" ise, bu değişkenin henüz bir değer almadığını veya tanımlanmadığını gösterir. "undefined" değişkenin varsayılan değeridir ve atama yapılmadığında otomatik olarak atanır.İki değer arasındaki fark şu şekildedir:"null", bir değeri ifade ederken "undefined", bir değerin olmadığını ifade eder."null" değeri bilinçli olarak atanırken, "undefined" değeri otomatik olarak atanır."null", bir nesnenin veya değişkenin mevcut olduğunu gösterirken, "undefined", henüz oluşturulmamış veya tanımlanmamış olduğunu belirtir.Özet olarak, "null" bir değeri ifade ederken "undefined" bir değerin olmadığını ifade eder.


// //!soru=>console.log("" ? "Merhaba" : "Güle güle!"
// //*console.log("" ? "Merhaba" : "Güle güle!") ifadesi JavaScript dilinde bir koşullu (ternary) operatör kullanılarak yazılmış bir kod parçacığıdır. Bu ifadede boş bir dize ("") koşul olarak verilmiştir. JavaScript'te boş bir dize, false olarak değerlendirilir Koşullu operatörün yapısı şu şekildedir koşul ? ifade1 : ifade2 . Eğer koşul true ise, ifade1 değeri kullanılır. Eğer koşul false ise, ifade2 değeri kullanılır Bu durumda, boş bir dize ("") false olarak değerlendirilir. Dolayısıyla koşul false olduğu için ifade2 olan "Güle güle!" değeri kullanılacak Sonuç olarak, console.log("" ? "Merhaba" : "Güle güle!") ifadesi konsola "Güle güle!" yazdıracaktır.
// //?ternary ifadesi =>JavaScript'te ternary operatörü, bir koşulu değerlendirmek ve buna göre farklı ifadeleri döndürmek için kullanılır. Ternary operatörün genel yapısı şu şekildedir: koşul ? ifade1 : ifade2Burada, "koşul" değeri true veya false olan bir ifade veyadeğişkeni temsil eder. Eğer koşul true ise, "ifade1" değeri döndürülür. Eğer koşul false ise, "ifade2" değeri döndürülür.Örnek olarak, bir sayının pozitif veya negatif olduğunu kontroletmek için ternary operatörünü kullanabiliriz:Bu örnekte, "num" değişkeninin değeri 5'dir. Ternary operatörü kullanarak "num" değişkeninin pozitif mi yoksa negatif mi olduğunu kontrol ediyoruz. Eğer "num" değeri 0'dan büyükse, "Sayı pozitif." ifadesi döndürülür. Aksi takdirde, "Sayı negatif veya sıfır." ifadesi döndürülür. Sonuç olarak, bu kod parçacığı konsola "Sayı pozitif." yazdıracaktır Ternary operatörü, koşula dayalı ifadeleri daha kısa ve okunabilir bir şekilde yazmak için kullanışlıdır. Ancak, çok karmaşık ifadelerde kullanmak, kodun anlaşılabilirliğini azaltabilir 

// const num = 5;
// const message = num > 0 ? "Sayı pozitif." : "Sayı negatif veya sıfır.";
// console.log(message);

// //! soru=>"display: none" ve "visibility: hidden" arasındaki fark nedir?
// //****"display****: none" ve "visibility: hidden" CSS özellikleri, bir elementin görünürlüğünü değiştirmek için kullanılır, ancak aralarında bazı farklar vardır: "display: none": Bu özellik, bir elementi tamamen gizler ve yer kaplamasını da kaldırır. Yani, "display: none" uygulandığında, element sayfada hiçbir şekilde yer almaz. Element, hem görünmez olur hem de yer kaplamaz. Diğer elementler bu elementin yerini doldurmaz.
// //****"visibility***: hidden": Bu özellik, bir elementi görünmez yapar, ancak yer kaplamasını korur. Yani, "visibility: hidden" uygulandığında, element sayfada yer almaya devam eder, ancak görüntülenmez. Diğer elementler hala bu elementin yerini kaplar.Yani, temel fark şudur: "display: none" uygulandığında element tamamen kaldırılırken, "visibility: hidden" uygulandığında element yerinde kalır ve sadece görünmez hale gelir. Hangi özelliği kullanmanız gerektiği, kullanım senaryonuza ve beklentilerinize bağlıdır. Eğer elementi tamamen kaldırmak ve yer kaplamasını ortadan kaldırmak istiyorsanız "display: none" kullanabilirsiniz. Eğer elementin yerinde kalmasını ve yer kaplamasının korunmasını istiyorsanız "visibility: hidden" kullanabilirsiniz.

// //!soru=>JavaScript'te "Array.map()" methodu ne işe yarar?
// //*JavaScript'te "Array.map()" yöntemi, bir dizi içindeki her bir öğe için belirli bir işlemi gerçekleştirmek ve sonuçlarını yeni bir dizi olarak döndürmek için kullanılır. Bu yöntem, orijinal diziyi değiştirmek yerine yeni bir dizi döndürür. "Array.map()" yöntemi, her öğe için belirtilen işlemi uygulayarak döngü yapar ve işlemin sonucunu yeni bir diziye ekler. Bu yeni dizi, her bir öğenin işlenmiş haliyle aynı sırayla oluşur 
// //?Örnek olarak, bir dizi içindeki her bir sayının karesini almak için "Array.map()" yöntemini kullanabiliriz:

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);

// //*Bu örnekte, "numbers" adında bir dizi tanımladık ve bu dizideki her bir sayının karesini almak için "Array.map()" yöntemini kullandık. Arrow function ((num) => num * num) ile her öğenin karesini hesapladık. Sonuç olarak, "squaredNumbers" adında yeni bir dizi elde ettik ve bu dizi, orijinal dizideki her sayının karesini içerir. Sonuç olarak, "Array.map()" yöntemi, bir dizi üzerinde döngü yapmak ve her bir öğe için belirli bir işlemi uygulamak için kullanılır. Bu yöntem, orijinal diziyi değiştirmeden yeni bir dizi döndürür.
// //!soru=>"Media query" terimi ne anlama gelir?
// //*"Media query" terimi, CSS'de kullanılan bir kavramdır ve web sayfalarının belirli özelliklerini, özellikle ekran boyutu, cihaz türü veya ekran çözünürlüğü gibi medya özelliklerine dayalı olarak değiştirmek için kullanılır. Media query'ler, CSS'de belirli bir medya tipi ve medya özelliklerine göre stil kurallarını uygulamak için kullanılır. Medya tipi, ekran, baskı, ses, vb. gibi farklı çıktı cihazlarını temsil eder. Medya özellikleri ise, ekran boyutu, ekran çözünürlüğü, cihaz yönlendirmesi (portrait/landscape), tarayıcı viewport genişliği gibi özelliklere dayanır Media query'ler, CSS'in responsive (duyarlı) tasarım için önemli bir aracıdır. Bu sayede web sayfaları, farklı cihazlarda ve ekran boyutlarında uyumlu bir şekilde görüntülenebilir. Örneğin, bir media query kullanarak, belirli bir ekran genişliğinde farklı düzenler ve stil kuralları uygulanabilir veya belirli bir cihazda belirli bir öğenin görünürlüğü kontrol edilebilir 
// //?Örnek olarak, aşağıdaki CSS kodu, ekran genişliği 600 pikselin altında olduğunda bir div'in arka plan rengini değiştirir:
// //*@media screen and (max-width: 600px) {.my-div {  background-color: blue; }} Bu media query, "screen" medya tipine (ekran) ve "max-width: 600px" medya özelliğine dayalı olarak stil kurallarını uygular. Böylece, 600 pikselin altındaki ekran genişliklerinde .my-div sınıfına sahip bir div'in arka plan rengi mavi olarak değiştirilir. Sonuç olarak, "media query" terimi, CSS'de belirli medya tipi ve medya özelliklerine göre stil kurallarını uygulamak için kullanılan bir kavramdır. Bu sayede web sayfaları, farklı medya koşullarına göre uyumlu ve duyarlı bir şekilde görüntülenebilir. 

// //!soru=>HTML "alt" özelliği ne işe yarar?
// //*HTML'de "alt" özelliği, "img" (resim) etiketi için kullanılan bir özelliktir. "alt" (alternative) özelliği, resimlerin görüntülenemediği durumlarda veya okuyucu cihazlar tarafından sesli olarak okunduğunda kullanıcılara alternatif bir metin sağlar."alt" özelliği, resimlerin erişilebilirliğini, kullanıcı deneyimini ve arama motoru optimizasyonunu iyileştirmek için önemlidir. Bu nedenle, web sayfalarında "alt" özelliğini doğru ve açıklayıcı bir şekilde kullanmak iyi bir uygulamadır.

// //!soru=>“let” ve “const” değişken tanımlamaları ile ilgili verilen bilgilerden hangisi doğrudur ?
// //*"let" ve "const" değişken tanımlamalarıyla ilgili doğru bilgiler şunlardır: 1-"let" ve "const", ECMAScript 6 (ES6) ile birlikte JavaScript'eklenen değişken tanımlama anahtar kelimeleridir.2-"let" ve "const" ile tanımlanan değişkenler, blok kapsamınasahiptir. Yani, bir blok içinde tanımlanan bir değişken, sadece o blok içinde erişilebilir olacaktır. 3-"let" ile tanımlanan değişkenlerin değeri sonradan değiştirilebili(mutable)ken, "const" ile tanımlanan değişkenlerin değeri değiştirilemez (immutable)dir. 4-Bir "let" değişkeni, aynı kapsam içinde birden fazla ketanımlanabilirken, bir "const" değişkeni sadece bir kez tanımlanabilir. 5-"const" ile tanımlanan bir değişkenin değeri başlangıçta atanmalıdır ve sonradan değiştirilemez. Bu nedenle, "const" ile tanımlanan bir değişkenin değeri atandıktan sonra sabit kalacaktır. 6-"let" ve "const" değişkenleri, hoisting kavramına tabidir. Bu, değişkenlerin tanımlanmadan önce kullanılabileceği anlamına gelir. Ancak, tanımlamadan önce değişkenlere erişmeye çalışmak, "undefined" değerini döndürecektir.
// //!örnek
// let count = 5;
// count = 10; // count değeri değiştirilebilir

// const pi = 3.14;
// // pi = 3.14159; // Hatalı! const değişkeni değeri değiştirilemez

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // console.log(i); // Hatalı! i sadece for döngüsü kapsamında erişilebili
// //!soru=>


// const input =document.querySelector(`#input`);

// input.addEventListener(`paste`, run);

// function run(e){

//   console.log(e.type);
// }


//! örnek
let isim ="burhan";
isim ="ayşe";

console.log(isim);



//!  örnek
const isim1="can garip";

console.log(isim1);

//! örnek

let number=50;

console.log(number++);
console.log(number);
console.log(++number);
console.log(number);


//!örnek 
let ornekNumber =1.123;
let örnekString="burhan";
 const örnekBoolean=true;

 let ornekUndefind= undefined;
 let ornekNull=null;

 console.log(ornekNumber);

 ornekNumber =12.3;

 console.log(ornekNumber);

 console.log(örnekString);

 örnekString="ayşe";
 console.log(örnekString);

 //! array 

 const isimler = ["burhan","ayşe","abdullah","zinnet",1,false];

 console.log(isimler);
 console.log(isimler.length);

isimler.push("hilal");

console.log(isimler);

isimler.pop();

console.log(isimler);

const result=isimler.splice(0,2);

console.log(isimler);

console.log(result);

const sonuc= isimler.slice(2,4);
console.log(sonuc);

const join= isimler.join("**")
console.log(join);


const indexof=isimler.indexOf(2);
console.log(isimler);

console.log(indexof);

const reverse=isimler.reverse();
console.log(reverse);

const shift=isimler.shift()
console.log(shift);


//! objeler 

const user={
  name:"burhan",
  age:34,
  skills:["html","css","javascript"],
  isSomething:false,

}
console.log(user);
console.log(user.name);
console.log(user.skills);

user.surname="alaca";
console.log(user);

console.log(Object.keys(user));

console.log(Object.keys(user));

console.log(Object.entries(user));

//! function

function selamla(){
  console.log("merhabalar");
}
selamla();


const yasArtır=(x)=>{
  return x + 1;
}; 
console.log(yasArtır(3));


function burhan(x){
  return x * 2;
};
 

console.log(burhan(4));


const alaca = (a)=>{
  return a * 5;
};
 
console.log(alaca(10));



//! koşul

const burhanYas=34;

const ayşeYas=37;

const meslekBurhan="yazılımcı";

const meslekAyşe="öğretmen";


if(burhanYas>ayşeYas){
  console.log("burhan ayşeden büyüktür");
}else{
  console.log("ayşe burhandan büyüktür");
}

if(meslekAyşe==="yazılımcı" && meslekBurhan==="öğretmen"){
  console.log(true);
}else{
  console.log(false);
}


const bool1=true;
const bool2=true;
const bool3=false;


if(bool1==true && bool2 ==true&& bool3 ==false){
  console.log(true);
}else{
  console.log(false);
}




let number1 =5;

while(number1<20){
  console.log(number1);
  number1 =number1 * 2;
}
console.log("dışarda");


const users=[
  {id:0, name:"burhan", age:34},
  {id:1, name:"ayşe", age:32},
  {id:2, name:"hilal", age:20},
  {id:3, name:"bilal", age:18}
]



const otuzdanBüyükolan=[];
const otuzdanKüçükler=[];

for(let i=0; i<users.length; i++){
  if(users[i].age>30){
  otuzdanBüyükolan.push(users[i].name)
  }
  console.log(users[i]);
}
console.log(otuzdanKüçükler);

console.log(otuzdanBüyükolan);




const user1=[
  {id:0, name:"burhan", age:34},
  {id:1, name:"ayşe", age:32},
  {id:2, name:"hilal", age:20},
  {id:3, name:"bilal", age:18}
]

const otuzUçtenBuyuk=[];


user1.forEach(()=>{
  if(user1.age>33){
    otuzUçtenBuyuk.push(user1.name)
  }else{
    console.log(user1);
  }
})
console.log(otuzUçtenBuyuk);




const user2=[
  {id:0, name:"burhan", age:34},
  {id:1, name:"ayşe", age:32},
  {id:2, name:"hilal", age:20},
  {id:3, name:"bilal", age:18}
]


const otuzdanKüçükler1=[];

for(let i=0; i<user2.length; i++){
  console.log(user2);
  if(user2[i].age<30){
    otuzdanKüçükler.push(user2[i].name)
    console.log(otuzdanKüçükler);
  }
}
console.log(otuzdanKüçükler);


for(let i=0; i<user2.length; i++){
  console.log(user2);
}

user2.forEach((user,i,array)=>{
  console.log(user,i,array);
})



const otuzdanKüçükler2=[];

user2.forEach(()=>{
if(user2.age<30){
  otuzdanKüçükler2.push(user2.name);
}else{
  console.log(otuzdanKüçükler);
}
})


