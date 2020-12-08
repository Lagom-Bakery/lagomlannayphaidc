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
                        <div style="width:280px;height:40px">
                            <div style="float:left;width:220px">
                                <font style="float:left">${title}</font>
                            </div>
                            <div style="float:right">
                                <a style="font-size:25px; cursor:pointer">
                                    <i class="heart fa fa-heart-o" aria-hidden="true" style="color:red"></i>
                                </a>
                                <a href="Addtocart.html" target="_self"><img style="margin-bottom:12px" src="https://img.icons8.com/ios/25/000000/shopping-bag.png" /></a>
                            </div>
                        </div>
                        <div>
                            ${price}
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
