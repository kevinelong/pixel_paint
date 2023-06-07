// import COLORS from "./colors.js";

    // const perLine = 100 / 37;
    function getPallette(){
        return COLORS.map((color) => {
        return `<div class="swatch" style="background:${color.name}" onclick="selectedColor=this.style.backgroundColor"></div>`;
    }).join('');
}

console.log(getPallette());
   