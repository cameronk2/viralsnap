// Scroll reveal
const elements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
});

elements.forEach(el => observer.observe(el));


// Pricing toggle
const toggle = document.getElementById("billingToggle");
const title = document.getElementById("priceTitle");
const price = document.getElementById("priceValue");
const desc = document.getElementById("priceDesc");

toggle.addEventListener("change", () => {
    if(toggle.checked){
        title.innerText = "Unlimited Monthly";
        price.innerText = "£29.99";
        desc.innerText = "Unlimited video generation.";
    } else {
        title.innerText = "Pay Per Video";
        price.innerText = "£4.99";
        desc.innerText = "1 credit = 1 full generated video.";
    }
});


// Dark mode
const darkBtn = document.getElementById("darkModeToggle");
const logo = document.getElementById("logo");

let dark = true;

darkBtn.addEventListener("click", () => {
    dark = !dark;
    document.body.classList.toggle("light-mode");

    if(dark){
        logo.src = "assets/logo-light.png";
    } else {
        logo.src = "assets/logo-dark.png";
    }
});
