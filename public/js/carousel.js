const TIEMPO_INTERVALO_MILESIMAS_SEG = 4000;
let slides = document.getElementsByClassName("slide");
let n = 1
for (i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
}
function pasarFoto(){
    let i;
    let slides = document.getElementsByClassName("slide");
            
    if (n > slides.length) { n = 1 };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
    
    n = n + 1
    setTimeout(pasarFoto, 2000)
}

pasarFoto()
// let intervalo = 0
// intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);