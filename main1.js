
let h1 = document.createElement ("H1");
let texto = document.createTextNode ("F12");
console.log(h1);
h1.appendChild(texto);




// console.log(h1);

// h1.innerText = "F12"


// let texto = document.createTextNode ("F12")

// console.log(texto);
// document.body.innerHTML=<h1></h1>

// h1.appendChild(texto);

// let texto1 = document.createTextNode ("F12")

// h1.innerText = texto1.nodeValue;

// let texto2 = document.createTextNode ("F12")
// h1.innerHTML = texto2.nodeValue;

// document.body.appendChild(h1);


// for (let i = 0; i < 2; i++) {
//     let h1 = document.createElement('H1');
//     let texto = document.createTextNode(`Titulo ${i}`);
//     h1.appendChild(texto);

//     document.body.appendChild(h1);
//     }



// let fragmen = document 

// let fragmen = new DocumentFragment();
// let h1 = document.createElement('H1');
// let texto = document.createTextNode(`Titulo 1`);
// h1.appendChild(texto);
// fragmen.appendChild(h1);  
// document.body.appendChild(fragmen);

let img = document.createElement ("IMG");
img.src ="https://kia-motors-s3.s3.amazonaws.com/master/public/styles/banner_principal_vehiculo_large/public/2021-07/Image_Seltos_July312021.png?VersionId=X0UnDuFikqofnCY2ocTxGBnDz5J.SBCJ&itok=3oU_LBP3";
img.alt = "Imagen de un vehículo KIA";
document.body.appendChild(img);
console.log(img);

let atributosImg = {
    src : "https://www.elcarrocolombiano.com/wp-content/uploads/2020/08/20200708-KIA-SONET-PORTADA-750x460.jpg",
    alt : "Imagen de un automovil nuevo modelo de Kia"};
let img2 = document.createElement('IMG');
var {alt, ...atributosImgActualizada} = atributosImg;
Object.assign(img, atributosImgActualizada);

document.body.appendChild(img);
console.log(img);

//Seleccionar solo una imagen o etiqueta 
let imgSeleccionar2 = document.getElementsByTagName("img");


//Seleccionar varias imagenes o etiquetas 
addEventListener("load", ()=>{ 
    let imgSeleccionar = document.getElementsByTagName("img");
})

function Imagen1() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "./logo_nuevo.jpg");
  
    document.body.appendChild(x);
  }









// // let img4 = document.createElement ("IMG");
// // img.src ="./";
// // document.body.appendChild(img4);
// // console.log(img4);


// var atributosImg3 = {
//     src : "https://p4.wallpaperbetter.com/wallpaper/135/692/935/sci-fi-astronaut-jellyfish-space-hd-wallpaper-preview.jp",
//     alt : "Imagen de un astronauta con una medusa"};

// var imgSelecionar = document.getElementsByTagName('img');
// Object.assign(imgSelecionar.imgID, atributosImg3);