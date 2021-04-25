let item = document.querySelectorAll('.banner-item')
let itemIndex = 1
showSlide(itemIndex)

function showSlide(n){
    var i;
    if(n> item.length){
        itemIndex = 1;      
    }
    if(n<1){
        itemIndex = item.length;
    }
    for(i=0;i<item.length;i++){
        item[i].style.display = "none";
    }
    item[itemIndex-1].style.display="contents";
}

function changeSlide(n) {
    showSlide(itemIndex += n);
}
  