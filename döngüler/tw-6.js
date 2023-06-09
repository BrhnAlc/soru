//!  1. Sass is a _____.
//! 1. Sass bir _____.

//?  A. Scripting language 
//?  B. Markup language
//?  C. CSS pre-processor
//?  D. Programming Language



//! 2. Sass stands for ______.
//! 2. Sass, ______ anlamına gelir.

//? A. Anlamsal Olarak Harika Stil Sayfası
//? B. Sözdizimsel Olarak Harika Stil Sayfası
//? C. Basit Harika Stil Sayfası
//? D. Sözdizimine Dayalı Müthiş Stil Sayfası


//! 3. What are the benefits of using SASS?
//! 3. SASS kullanmanın faydaları nelerdir?

//? A. CSS için kendi sözdizimini sağlayan bir ön işleme dilidir.
//? B. CSS'nin tüm özelliklerini içeren ve açık kaynaklı bir ön işlemci olan, kodlanmış bir CSS üst kümesidir.
//? C. Daha kararlı ve güçlü CSS uzantısı ve stil belgeleri daha net ve yapısal olarak
//? D. Yukarıdakilerin hepsi

//! 4. In which year was SASS introduced?
//! 4. SASS hangi yılda tanıtıldı?

//? A. 2005 
//? B. 2006 
//? C. 2008
//? D. 2009


//!5. Which of the following directive displays the SassScript expression value as fatal error?
//!5. Aşağıdaki yönergelerden hangisi SassScript ifade değerini önemli hata olarak görüntüler?
//? A. @error
//? B. @warn
//? C. @at-root
//? D. None of the above


//! 6. SASS was created by...
//! 6. SASS tarafından oluşturuldu..

//?  A. Linus Torvalds 
//?  B. Brendan Eich 
//?  C. Hampton Catlin
//?  D. Guido van Rossum

//! 7. In Sass, which of the following is the correct way to define a variable?
//! 7. Sass'ta, bir değişkeni tanımlamanın doğru yolu aşağıdakilerden hangisidir?

//?  A. #primary-color: #888;
//?  B. @primary-color: #888;
//?  C. %primary-color: #888;
//?  D. $primary-color: #888;

//! 8. Which is the correct syntax to declare a variable "myfonts" assigning the two font names?
//! 8. İki yazı tipi adını atayan bir "myfonts" değişkenini bildirmek için doğru sözdizimi hangisidir?

//? A. $myfonts: Helvetica, and sans-serif;
//? B. $myfonts: Helvetica, sans-serif;
//? C. $myfonts: "Helvetica, sans-serif";
//? D. $myfonts: "Helvetica+sans-serif";


//! 9. Which directive is used to create CSS code that is to be reused throughout the website?
//! 9. Web sitesinde yeniden kullanılacak CSS kodunu oluşturmak için hangi yönerge kullanılır?


//?  A. @import
//?  B. @define
//?  C. @mixin
//?  D. All of the above

//! 10. Which directive is used to share a set of CSS properties from one selector to another?
//! 10. Bir CSS özelliği kümesini bir seçiciden diğerine paylaşmak için hangi yönerge kullanılır?
//?  A. @share 
//?  B. @import 
//?  C. @transfer
//?  D. @extend

//! 11. What is the output of this code block?
//! 11. Bu kod bloğunun çıktısı nedir?

let daltones = ['joe', 'Jack', 'Willam', 'Averell']
daltones.shift()
daltones.pop()
console.log(daltones)

//? A. ['joe', Jack']
//? B. []
//? C. ['Jack', 'Willam']
//? D. ['joe','Averell']


//! 12. What is the output of this code block?
//! 12. Bu kod bloğunun çıktısı nedir?

 
// let daltones = ['joe','Jack', 'Willam', 'Averell']

//  for(let i =0; i< daltones.length; i++){
//   if(i == 1){
//   continue;
//   }
//   console.log(daltones[i]);
//  }
//? A. Jack
//? B. joe, Jack
//? C. joe, Jack, Willam
//? D. joe, Willam, Averell


//!13. What is the new avengers array after this code block?
//!13. Bu kod bloğundan sonraki yeni avengers dizisi nedir?

let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk']
avengers.splice(2,1,'Thor', 'Hawkeye');

//? A. ['Black Widow'] 
//? B. index error
//? C. ['Iron Man', 'Captain America', 'Thor', 'Hawkeye', 'Hulk']



//! 14. Write a for loop for iterate languages?
//! 14. Yinelenen diller için bir for döngüsü yaz?

// let fullStack = {
//     languages: ["JavaScript", "React", "HTML"],
//     jira: true,
//     gitHub: true,
//     difficulty: 8,
//    }
//    for(){
//    write your code here
//    }

   //! 15. Write a code for get fullStack object's keys
//! 15. fullStack nesnesinin anahtarlarını almak için bir kod yazın

// let fullStack = {
//     languages: ["JavaScript", "React", "HTML"],
//     jira: true,
//     gitHub: true,
//     difficulty: 8,
// }




//! 16. Write a method to get myCar's age
//! 16. myCar'ın yaşını öğrenmek için bir yöntem yazın
// const myCar = {
//     make : 'ford',
//     model : 'Mustang',
//     year : 1965,
//     color : 'Black'
//     }

//     myCar.age = 
//    myCar.age(2023)







// const myCar = {
//     make: 'ford',
//     model: 'Mustang',
//     year: 1965,
//     color: 'Black',
//     age: function(currentYear) {
//       return currentYear - this.year;
//     }
//   };
  
//   console.log(myCar.age(2023));





//!   Interview Questions 15m
//!  Mülakat Soruları 15dk

//!   1. What Are The Number Methods in javaScript?
//!   1. JavaScript'teki Sayı Yöntemleri Nelerdir?
//*  1- toFixed(): Bir sayının ondalık basamaklarını belirtilen sayıda yuvarlar ve bir dize olarak döndürür.
const number1 = 3.14159;
console.log(number1.toFixed(2));

//* 2- toPrecision(): Bir sayının belirtilen toplam basamak sayısına göre yuvarlanmasını sağlar ve bir dize olarak döndürür.

const number2 = 123.456789;
console.log(number2.toPrecision(5));

// * 3- parseInt(): Bir dizeyi tamsayıya dönüştürür.
const numberString = "42";
const number3 = parseInt(numberString);
console.log(number3);

//*  4- Math.round(): Bir sayıyı en yakın tam sayıya yuvarlar.

const number4 = 4.5;
console.log(Math.round(number4));

//* 5-Math.floor(): Bir sayıyı aşağı doğru en yakın tam sayıya yuvarlar.

const number5 = 4.9;
console.log(Math.floor(number5));

//* 6-Math.ceil(): Bir sayıyı yukarı doğru en yakın tam sayıya yuvarlar.

const number6 = 4.1;
console.log(Math.ceil(number6)); 

//* 7-Math.random(): 0 (dahil) ile 1 (hariç) arasında rastgele bir ondalık sayı döndürür.

const randomNumber7 = Math.random();
console.log(randomNumber7);

//!   2. What Is Javascript Date Object?
//!   2. Javascript Tarih Nesnesi Nedir?

 //*Date Nesnesi Oluşturma:new Date() ifadesini kullanarak mevcut tarih ve saat bilgisini temsil eden bir Date nesnesi oluşturuyoruz
      const currentDate = new Date();
      console.log(currentDate);
        

//!   3. What Are Date Methods?
//!   3. Tarih Yöntemleri Nelerdir?

      const date = new Date();

const year = date.getFullYear();
console.log("Yıl:", year);

const month = date.getMonth();
console.log("Ay:", month);

const day = date.getDate();
console.log("Gün:", day);

const hours = date.getHours();
console.log("Saat:", hours);

const minutes = date.getMinutes();
console.log("Dakika:", minutes);

const seconds = date.getSeconds();
console.log("Saniye:", seconds);

 
//!   4. Explain how to define a variable in Sass?
//!   4. Sass'ta bir değişkenin nasıl tanımlanacağını açıklayın?

//*Değişkenin başına $ sembolünü koyarak tanımlama yapılır.

        // $color: red;
//*Yukarıdaki örnekte, $color adında bir değişken tanımlanmış ve red değeri atanmıştır.

//*Değişkeni kullanmak için $ sembolü olmadan adını yazmanız yeterlidir.

//  body {
//   color: $color;
// }
//*Değişkenler üzerinde değerleri güncellenebilir.

// $color: blue;

// body {
//   color: $color;
// }

//!   5. Explain what is the difference between Sass and SCSS?
//!   5. Sass ve SCSS arasındaki farkın ne olduğunu açıklayınız?

//* 1-Sözdizimi: Sass, orijinal olarak daha basit bir sözdizimine sahipken, SCSS, CSS sözdizimine daha benzer bir şekilde geliştirilmiştir. Sass dosyaları .sass uzantısına sahipken, SCSS dosyaları .scss uzantısına sahiptir.

//* 2-Yazım Kuralları: Sass, süslü parantezler ({}) ve noktalı virgüller (;) kullanmadan CSS kodunu düzenler. Bunun yerine, girintileri ve satır atlama işaretlerini kullanır. 

//! Örneğin:

// //* Sass Syntax
// .container
//   width: 100%
//   margin-top: 20px

// //* SCSS Syntax
// .container {
//   width: 100%;
//   margin-top: 20px;
// }

//*3-Geriye Dönük Uyumluluk: SCSS, CSS yazımına daha yakın olduğu için mevcut CSS dosyaları SCSS dosyalarına kolayca dönüştürülebilir. Sass sözdizimiyle yazılmış bir dosyayı SCSS sözdizimine dönüştürmek için bazı değişiklikler yapmanız gerekebilir.

//*4-İç İçe Geçmiş Kurallar: Hem Sass hem de SCSS, CSS içinde iç içe geçmiş kuralları destekler. Bu, bir öğenin alt öğelerine kolaylıkla erişim sağlar. 

//* 5-Erişilebilirlik: SCSS, Sass'a kıyasla daha yaygın kullanılan bir sözdizimi olduğu için daha fazla kaynak ve topluluk desteğine sahiptir. SCSS, daha fazla geliştirici tarafından benimsenmiş ve daha fazla proje tarafından kullanılmaktadır.

//*Sonuç olarak, Sass ve SCSS, stil sayfalarınızı daha düzenli ve modüler hale getirmek için kullanılan CSS ön işleyicileridir. Seçim yaparken, mevcut CSS kodunuza ne kadar uyumlu olmasını istediğiniz ve kişisel tercihleriniz göz önünde bulundurulmalıdır.