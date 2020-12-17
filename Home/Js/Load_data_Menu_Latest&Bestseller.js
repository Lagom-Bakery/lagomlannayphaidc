const getProducts = async () => {
    const res = await fetch("data//filter.json");
    const data = await res.json();
    const products = data.products;
    return products;
};



const displayProducts = (products, place) => {
    let display = products.map(
        ({ title, image, price }) => `<div class="columnmenu">

        
                            <div class="thumb" style="background-image: url(${image})"></div>
                            <div style="margin-top:5px; height:40px">
                                ${title}
                            </div>
                            <div style="margin-top:1px;">
                                ${price}
                            </div>
                            <div style="margin-top:5px;height:50px">
                                <button style="float:left;background-color:#0f4c81;
                                        text-align:center;width:80%;color:white;
                                        border:none;
                                        cursor: pointer;
                                        padding:10px;
                                        font-size:16px;
                                        font-family:Lora;"
                                        id="addtocart" class="addtocart" name="addtocart" onclick=" window.open('Addtocart.html','_parent')">
                                    Add to cart
                                </button>
                                <img class="iconheart" src="https://img.icons8.com/ios/35/0f4c81/like--v2.png" />

                            </div>
                     

               
        </div>`
    );

    display = display.join("");
    place.innerHTML = display;

};
//lọc sp mới nhất

const latestCake = document.querySelector(".latestCake");
latestCake.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === "moinhat");

    displayProducts(menuCat, row);
});
//lọc sp bán chạy
const bestSeller_trangMenu = document.querySelector(".bestSeller_trangMenu");
bestSeller_trangMenu.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === "banchay");

    displayProducts(menuCat, row);
});

const row = document.querySelector(".rowmenu");
//mặc định hiện list sản phẩm mặc định






