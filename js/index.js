
let nextSliderBtn = document.querySelector("#SC-carousel button.next"),
    prevSliderBtn = document.querySelector("#SC-carousel button.prev"),
    carouselSliders = document.querySelectorAll(".sc-carousel-item");

let currentIndex = 0;

function showSlide(index) {
    carouselSliders.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            let currentColorName = slide.dataset.colorName;
            console.log(currentColorName);
            changeMainColor(currentColorName);
        }
    });
}

nextSliderBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= carouselSliders.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

prevSliderBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselSliders.length - 1;
    }
    showSlide(currentIndex);
});

window.addEventListener("DOMContentLoaded", function() {
    showSlide(0);
});

let navEle = document.querySelector("nav"),
    heightOfNav = navEle.clientHeight;

window.addEventListener("scroll", function(e) {
    if (window.scrollY > heightOfNav) {
        navEle.classList.add("scrolled");
    } else {
        navEle.classList.remove("scrolled");
    }
});

let correctImgs = document.querySelectorAll("section .title img");

let navLinks = navEle.querySelectorAll(".nav-link");

navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(e) {
        let oldLinkEle = navEle.querySelector(".nav-link.active");
        oldLinkEle.classList.remove("active");
        navLink.classList.add("active");
    });
});




let popupBoxes = document.querySelectorAll(".popup .box");
popupBoxes.forEach(function(popupBoxes){
    popupBoxes.addEventListener("click" , function(e){
        e.stopPropagation();
    })
})

let latestContentEle  = document.querySelector("#Latest .content");
latest.forEach(function(product){
    latestContentEle.innerHTML += ` <div class="product mainBorder mb-3" data-product-id = "${product.id}">
                        <div class="row">
                            <div class="col-lg-6 part1">
                                <div class="item">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <div class="item">
                                                <ul class="list-unstyled d-flex d-lg-block"> 
                                                    ${showListImgs(product.images)}
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-10">
                                            <div class="item">
                                                <div class="selectedImg">
                                                    <img src="Images/${product.images[0]}" alt="" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 part2">
                                <div class="item">
                                    <h2 class="mainColor">${product.name}</h2>
                                    <p>${product.description}</p>
                                    <div class="d-flex price fw-bold">
                                        <div class="label me-2">
                                            <h5>Price : </h5>
                                        </div>
                                        <div class="value">
                                            ${showPrice(product.price , product.discount)}
                                        </div>
                                    </div>
                                    <div class="d-flex price fw-bold size ">
                                        <div class="label me-2">
                                            <h5>Size : </h5>
                                        </div>
                                        <div class="value">
                                            <ul class="list-unstyled d-flex">
                                                ${showListSizes(product.sizes)}
                                            </ul>
                                        </div>
                                    </div>
                                    <button class="btn mainButton">
                                        Add To Card
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`;
})
let featuresContentEle = document.querySelector("#Featured .content .row");
features.forEach(function(product){
    featuresContentEle.innerHTML += ` 
    <div class="col-lg-3 product text-center">
        <div class="item py-4 mb-4">
            <p class="discount">-16%</p>
            <div class="img mb-4 seletedImg">
                <img src="Images/${product.images[0]}" alt="" class="img-fluid">
            </div>
            <i class="fa-solid fa-magnifying-glass mb-3"></i>
            <ul class="list-unstyled d-flex justify-content-center mt-2">
                <li onclick = "changeSelectedImg(this ,'${product.images[0]}')" class="mainButton rounded-circle me-2 active"></li>
                <li onclick = "changeSelectedImg(this,'${product.images[1]}')" class="mainButton rounded-circle me-2"></li>
                <li onclick = "changeSelectedImg(this,'${product.images[2]}')" class="mainButton rounded-circle me-2"></li>
                <li onclick = "changeSelectedImg(this,'${product.images[3]}')" class="mainButton rounded-circle"></li>
            </ul>
            <h6>${product.name}</h6>
            <div class = "value">
                ${showPrice(product.price , product.discount)}
            </div>
        </div>
    </div>`
})

