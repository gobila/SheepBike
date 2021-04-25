let screenSize = 780
var cola = document.querySelector("#Menu");
var lis = cola.querySelectorAll("#lis");
var dropBtn = document.querySelector("#btn-dropdown");

window.addEventListener('resize', ()=>{

    if(innerWidth < screenSize){
        collapsedMenu();
    }else{
        normalMenu();
    }
})
window.onload = ()=>{
    if(innerWidth < screenSize){
        collapsedMenu();
    }else{
        normalMenu();
    }
}
function collapsedMenu(){
    cola.classList.remove("menu");
    cola.classList.add("colapseMenu");
    document.querySelector('.btn-drop').innerHTML ="&#9776";
    hide()
}

function normalMenu(){
    cola.classList.remove("colapseMenu")
    cola.classList.add("menu")
    visible()

}
function hide(){
    dropBtn.classList.remove("displayNone")
    var i =0
    cola.classList.add("displayNone")
    // lis.forEach(element => {
    // if(i<lis.length){
    //     // console.log(lis[i])
    //     lis[i].classList.add("displayNone")
    //     i++
    // }
    // });
}
function visible(){
    dropBtn.classList.add("displayNone")
    
    cola.classList.remove("displayNone")
    var i =0
    
    // lis.forEach(element => {
    // if(i<lis.length){
    //     // console.log(lis[i])
    //     lis[i].classList.remove("displayNone")
    //     i++
    // }
    // });
}

function dropdow() {
    cola.classList.toggle("displayNone");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.btn-drop')) {
      var dropdowns = document.getElementsByClassName("menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('displayNone')) {
          openDropdown.classList.remove('displayNone');
        }
      }
    }
  }