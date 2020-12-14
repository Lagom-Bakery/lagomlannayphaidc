const getProducts = async () => {
    const res = await fetch("data//home.json");
    const data = await res.json();
    const products = data.products;
    return products;
};

const displayProducts = (products, place) => {
    let display = products.map(
        ({ title, image, price }) => `<div class="columnmenu">

                
                    <div class="thumb" style="        background-image: url(${image})"></div>
                    <div class="titlecake">
                        <div style="width:280px;height:40px">
                            <div style="float:left;width:220px">
                                <font style="float:left">${title}</font>
                            </div>
                            <div style="float:right">
                                <img class="iconheart" style="margin-bottom:10px" src="https://img.icons8.com/ios/26/0f4c81/like--v2.png" />
                                <a href="Addtocart.html" target="_self"><img style="margin-bottom:12px" src="https://img.icons8.com/ios/27/0f4c81/shopping-bag.png" /></a>
                            </div>
                        </div>
                        <div style="margin-top:8px;" >
                            ${price}
                        </div>

                    </div>
            
        
           
        </div>`
    );

    display = display.join("");
    place.innerHTML = display;

};



const row = document.querySelector(".rowmenu");


window.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts();
    displayProducts(products, row);
});
