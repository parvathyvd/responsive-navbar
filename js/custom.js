
document.querySelector('.ham-burger').addEventListener('click', openSlide);

document.getElementById('open-side').style.display = 'none';


function openSlide(){

    document.getElementById('open-side').style.display = 'block';
    document.querySelector('.close').addEventListener('click',closeSlide)


}
function closeSlide(){

    document.getElementById('open-side').style.display = 'none';
}
