const getProducts = async () => {
    const res = await fetch("data//home.json");
    const data = await res.json();
    const products = data.products;
    return products;
};

const displayProducts = (products, place) => {
    let display = products.map(
        ({ title, image, price }) => `<div class="column">
         
               
        <div class="thumb" style="background-image: url(${image})"></div>
        <div class="titlecake">
            <div style="float:right">
                <a class="iconheart" href="#"><i class="far fa-heart" id="heart"></i></a>
                <a class="iconcart" href="#"><i class="fas fa-cart-plus"></i></a>
            </div>
            <div style="float:left">
                <font style="float:left">${title}</font><br />
                <font style="float:left">${price}</font>
            </div>
        </div>

           
        </div>`
    );

    display = display.join("");
    place.innerHTML = display;

};



const row = document.querySelector(".row");


window.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts();
    displayProducts(products, row);
});
