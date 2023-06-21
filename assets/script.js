const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// selection des éléments

const arrowLeft = document.querySelector("#arrow_left");
const arrowRight = document.querySelector("#arrow_right");
const bannerImage = document.querySelector(".banner-img");
const tagline = document.querySelector("p");
const bulletParent = document.querySelector(".dots");

let currentSlide = 0;

//pour afficher les images du tableau et le tagline
function showSlide(index) {
	 // Récupérer l'image et la tagline  correspondante à l'index dans le tableau
	const slide = slides[index];
	bannerImage.src = `./assets/images/slideshow/${slide.image}`;
	tagline.innerHTML = slide.tagLine; 
}

function updateBullet(index) {
	const bullets = document.querySelectorAll(".dots .dot");
	bullets.forEach((bullet) => {
	  bullet.classList.remove("dot_selected");
	});
	bullets[index].classList.add("dot_selected");
  }

// Sélection du point en fonction de la position du slider
 // let bulletPoint = positionbullet();
// bulletPoint.classList.add("dot_selected"); 
		// Changement de point lors du changement de slide

 /*    bulletPoint.classList.remove("dot_selected");
    bulletPoint = positionbullet();
    bulletPoint.classList.add("dot_selected");
*/


 // changer de slide vers la gauche et la droite à l'infini
 function nextSlide() {
	//mise à jour de la variable currentSlide en ajoutant 1 au slide actuel 

	 currentSlide = (currentSlide + 1) ;
	 if (currentSlide > slides.length -1 )  {
		currentSlide = 0 
	 }
	
	 showSlide(currentSlide);
}
function previousSlide() {
	currentSlide = (currentSlide - 1 ) ;
	if (currentSlide  < 0 ) {
		 currentSlide = slides.length - 1
	}

	showSlide(currentSlide); 
}


// écouteurs d'événements pour les clics sur les flèches gauche et droite
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);


// créer les bullets points pour chaque slide dans le tableau
slides.forEach(function (slide, index) {
	const bulletChild = document.createElement("div");
	bulletChild.classList.add("dot");
	bulletParent.appendChild(bulletChild);

	// pour Ajouter un écouteur d'événement au bullet point
	bulletChild.addEventListener("click", function () {
		showSlide(index);
		currentSlide = index;
	});
});

//met à jour le slide actuel

showSlide(currentSlide);









//intégrer les images au slide

// slides.forEach(function (image){

// slideImg = document.createElement ('img');
// slideImg.classList.add("banner-img");

// const imageBanner = document.querySelector ("#banner");
// imageBanner.appendChild(slideImg);


//let numero = 0
// function (sens) {
 //   numero = numero + sens;
 //   if (numero < 0)
 //       numero = slides.length - 1;
 //   if (numero > slides.length - 1)
  //      numero = 0;
 //   document.getElementById("banner").src = slides[numero];
// }

// });





//-------------------------------------------------------------------

