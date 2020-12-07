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
                        <table style="width:280px">
                            <tr>
                                <td style="width:220px;text-align:left;height:40px;vertical-align:top" colspan="2">
                                    <font style="float:left">${title}</font><br />
                                    
                                </td>
                                <td style="text-align:right;width:60px;vertical-align:top;height:40px">
                                    <a class="iconheart" href="#"><i class="far fa-heart" id="heart"></i></a>
                                    <a class="iconcart" href="#"><i class="fas fa-cart-plus"></i></a>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <font style="float:left">${price}</font>
                                </td>
                            </tr>

                        </table>

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
