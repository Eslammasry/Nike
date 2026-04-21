
function changeMainColor(colorName) {
    let html = document.querySelector("html");
    let newColor = getComputedStyle(html).getPropertyValue(`--${colorName}`);
    let currentName = colorName.split("-") [0]

    changeMainImg( currentName , logo , 'logo');
    correctImgs.forEach(function(correctImgs){
        changeMainImg(  currentName , correctImgs , "correct")
    })

    html.style.setProperty("--main-color", newColor);
}


function changeMainImg(imgName , imgEle , commonName){
    let currentImgSrc = imgEle.src;
    imgEle.src = changeSrc(currentImgSrc , `${imgName}-${commonName}.png`);
}

function openPopup(popupName){
    let popupEle = document.querySelector(`.popup[data-popup-name= "${popupName}"]`);
    popupEle.classList.add("active")
    setTimeout(function(){
        popupEle.classList.add("show")
    },100)
}
function closePopup(){
    let currentPopupEle = document.querySelector(".popup.active");
    currentPopupEle.classList.remove("show");
    setTimeout(function(){
        currentPopupEle.classList.remove("active");
    },1000);
}

function showListImgs(listImages){
    let imagesLi = ``;
    listImages.forEach(function(productImg){
        imagesLi += `<li onclick = "changeSelectedImg(this , '${productImg}')" ><img src="Images/${productImg}" alt="" class="img-fluid mb-3 mainBorder rounded-3 p-2"></li>`
    })
    return imagesLi ;
}
function showPrice(price , discount){
    return `<span class="mainColor text-decoration-line-through ${(discount == 0)?'d-none' : ''}">${price}<sup>$</sup></span>
            <span>${(price * (1-discount)).toFixed(2)}<sup>$</sup></span>`;
}

function showListSizes(listSizes){
    let sizesLi = ``;
    listSizes.forEach(function(productSize, i){
        sizesLi += `<li class="me-3 mainButton ${(i == 0)?'active':''}">${productSize}</li>`;
    });
    return sizesLi;
}
//
function showListImgsLi(listImages){
    let imagesLi = ``;
    listImages.forEach(function(productImg, i){
        imagesLi+= `<li onclick = "changeSelectedImg(this ,'${productImg}')" class="mainButton rounded-circle me-2 active"></li>`;
        
    });
    return imagesLi;
}
function changeSrc(mainSrc , newImg){
    let mainSrcArr = mainSrc.split('/');
    mainSrcArr[mainSrcArr.length - 1] = newImg;
    return mainSrcArr.join('/');
}
function changeSelectedImg(that , selectedImg){
    let productEle = that.closest('.product'),
        selectedImgEle = productEle.querySelector(".selectedImg img");
        selectedImgEle.src = changeSrc(selectedImgEle.src , selectedImg )
}
function changeActive(that , ){

}


