//  ============== services toggle 

const servicesButtons = document.querySelectorAll('.services__item');
const serviceDetails = document.querySelector('.services__right');
// console.log(servicesButtons);  returns a nodelist of three li items 

  const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
    <h3>${details.title}</h3>
    ${details.description.map(paragraph => "p" + paragraph + "</p>").join('')} `
  }

const removeActiveClass =() =>{
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    })
}

servicesButtons.forEach(item => {
    item.addEventListener('click',()=>{
        removeActiveClass();
        const serviceClass = item.classList[1];
        getService(serviceClass);
        item.classList.add('active');
    })
})



// Dark Theme
// const themeBtn=document.querySelector('.nav__toggle-theme-btn');
// themeBtn.addEventListener('click',()=>{
//   let bodyClass=document.body.className;
//   if(!bodyClass){
//     bodyClass='dark';
//     document.body.className=bodyClass;
//   }
//   else{
 
//     bodyClass='';
//     document.body.className=bodyClass;
//   }
// })

const themeBtn = document.querySelector('.nav__toggle-theme-btn');
const icon = themeBtn.querySelector('.theme-icon');

themeBtn.addEventListener('click', () => {
  let bodyClass = document.body.className;

  if (!bodyClass) {
    bodyClass = 'dark';
    icon.classList.replace('uil-moon', 'uil-sun');
  } else {
    bodyClass = '';
    icon.classList.replace('uil-sun', 'uil-moon');
  }

  document.body.className = bodyClass;
});