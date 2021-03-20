const slider = document.querySelector('#slider');
const selector = document.querySelector('.selector');
const progressBar = document.querySelector('.progress-bar');
const views = document.querySelector('.page-views');
const value = document.querySelector('.value');
const discount = document.querySelector('.discount');
const tenureName = document.querySelector('.tenure');

let ten = ()=>{
  views.innerHTML = '10K PAGEVIEWS';
  value.innerHTML = '$8.00';
}
let fifty = () =>{
  views.innerHTML = '50K PAGEVIEWS';
  value.innerHTML = '$12.00';
}
let hundred = () =>{
  views.innerHTML = '100K PAGEVIEWS';
  value.innerHTML = '$16.00';
}
let fiveHundred = () => {
  views.innerHTML = '500K PAGEVIEWS';
  value.innerHTML = '$24.00';
}
let million = () => {
  views.innerHTML = '1M PAGEVIEWS';
  value.innerHTML = '$36.00';
}
tenure.addEventListener('change',()=>{
    if(tenure.checked){
      ten = ()=>{
        views.innerHTML = '10K PAGEVIEWS';
        value.innerHTML = '$72.00';
      }
      fifty = () =>{
        views.innerHTML = '50K PAGEVIEWS';
        value.innerHTML = '$108.00';
      }
      hundred = () =>{
        views.innerHTML = '100K PAGEVIEWS';
        value.innerHTML = '$144.00';
      }
      fiveHundred = () => {
        views.innerHTML = '500K PAGEVIEWS';
        value.innerHTML = '$216.00';
      }
      million = () => {
        views.innerHTML = '1M PAGEVIEWS';
        value.innerHTML = '$324.00';
      }
      tenureName.innerHTML = '/ year';
    }
    else{
      ten = ()=>{
        views.innerHTML = '10K PAGEVIEWS';
        value.innerHTML = '$8.00';
      }
      fifty = () =>{
        views.innerHTML = '50K PAGEVIEWS';
        value.innerHTML = '$12.00';
      }
      hundred = () =>{
        views.innerHTML = '100K PAGEVIEWS';
        value.innerHTML = '$16.00';
      }
      fiveHundred = () => {
        views.innerHTML = '500K PAGEVIEWS';
        value.innerHTML = '$24.00';
      }
      million = () => {
        views.innerHTML = '1M PAGEVIEWS';
        value.innerHTML = '$36.00';
      }
      tenureName.innerHTML = '/ month';
    }
    Number(slider.value) === 0 ? ten() : (Number(slider.value) === 25 ? fifty() : (Number(slider.value) === 50 ? hundred() : (Number(slider.value) === 75 ? fiveHundred() : million())));
  });
slider.oninput = function (){
  selector.style.left = this.value + '%';
  progressBar.style.width = this.value + '%';
  const tenure = document.querySelector("#checkbox");
  Number(slider.value) === 0 ? ten() : (Number(slider.value) === 25 ? fifty() : (Number(slider.value) === 50 ? hundred() : (Number(slider.value) === 75 ? fiveHundred() : million())));
}
