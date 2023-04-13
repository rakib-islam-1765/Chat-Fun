const email = document.querySelector("#email");
const para = document.querySelector(".para");

email.onchange = function (r) {
  para.innerText = r.target.value;
};

const toggler = document.querySelector("#toggler");
const nav = document.querySelector(".nav-menu");


let count = 0;

toggler.addEventListener('click' , function(e) {
    if(count === 0){
        nav.style.display = "flex";
        e.target.innerHTML = '&#x2715;';
        count++;
    }else{
        nav.style.display = 'none';
        e.target.innerHTML = "&#x2630;";
        count = 0;
    }
    console.log(count);
})


