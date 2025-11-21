const parentDiv = document.querySelector(".carousel");
let lastIndex = parentDiv.children.length - 1;

let temp; 
setInterval(() => {
   
   let insertRef = parentDiv.children[0];
   temp = parentDiv.children[lastIndex];
   parentDiv.removeChild(temp);
   parentDiv.insertBefore(temp, insertRef);
    parentDiv.children[3].classList.remove("main-item");
     parentDiv.children[2].classList.add("main-item");

   
},3500);

// Dropdown menu

const dropdownMenu = document.querySelector(".dropdown-menu");
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("drop-down")){
        dropdownMenu.classList.toggle("show");
    }else if(!e.target.classList.contains("drop-down")){
        dropdownMenu.classList.remove("show");
    }
    
   
    
});
