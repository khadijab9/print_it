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

// selection des éléments html dans le dom en fonction de leur sélécteurs css

const arrowLeft = document.querySelector("#arrow_left");
const arrowRight = document.querySelector("#arrow_right");
const bannerImage = document.querySelector(".banner-img");
const tagline = document.querySelector("p");
const bulletParent = document.querySelector(".dots");


//déclare une variable et l'initialise à 0
let currentSlide = 0;

// ajoute des écouteurs d'événements pour les clics sur les flèches gauche et droite avec un id
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);

//  boucle qui itère sur chaque élément du tableau slides
slides.forEach(function (slide, index) {
	const bulletChild = document.createElement("div");
	// Ajoute la classe "dot" à l'élément bulletChild
	bulletChild.classList.add("dot");
	 // Ajoute l'élément bulletChild comme enfant de bulletParent
	bulletParent.appendChild(bulletChild);


	// pour Ajouter un écouteur d'événement au bullet point
	bulletChild.addEventListener("click", function () {
		 // Appelle la fonction showSlide en passant l'index en tant qu'argument pour afficher la slide correspondante
		showSlide(index);
		// Met à jour la valeur de currentSlide avec l'index actuel pour garder une trace de la slide courante
		currentSlide = index;
	});
});


	//met à jour le slide actuel
	showSlide(currentSlide);

//pour afficher les images du tableau et le tagline
function showSlide(index) {
	 // Récupérer le slide correspondant à l'index fourni
	const slide = slides[index];
	// Met à jour la source de la var bannerImage avec le chemin de l'image du slide
	bannerImage.src = "./assets/images/slideshow/" + slide.image;
	// Met à jour le texte de la var tagline avec la valeur de la tagline du slide
	tagline.innerHTML = slide.tagLine; 

	

	// Sélectionner tous les éléments avec la classe "dot" 
	const bullets = document.querySelectorAll(".dots .dot");
	
	console.log(bullets)
	// Supprimer la classe "dot_selected" de tous les éléments "dot"
	
	bullets.forEach((bullet) => {
	  bullet.classList.remove("dot_selected") ;
	});

	// Ajouter la classe "dot_selected" à l'élément "dot" 
	// qui met en évidence le point de navigation actif.
	bullets[index].classList.add("dot_selected");
  }

 // changer de slide vers la gauche et la droite à l'infini
 function nextSlide() {
	//mise à jour de la variable currentSlide en ajoutant 1 au slide actuel 

	 currentSlide = (currentSlide + 1) ;
	 //si currentSlide est supéieur à la longueur du tableau , 
	 if (currentSlide > slides.length -1 )  {
		// on repart à 0
		currentSlide = 0 
	 }
	 showSlide(currentSlide);
}
function previousSlide() {
	// mise à jour de currentslide en enlevant 1 au slide actuel pour retourner au slide précédent
	currentSlide = (currentSlide - 1 ) ;
	// si inférieur à 0 
	if (currentSlide  < 0 ) {
		//currentSlide est défini sur l'index de la dernière image du tabl pour passer à la dernière image.
		 currentSlide = slides.length - 1
	}
	showSlide(currentSlide); 
}















