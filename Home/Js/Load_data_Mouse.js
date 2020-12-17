const getProducts = async () => {
    const res = await fetch("data//cate-1.json");
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
//lọc sp trang 1

const trang1 = document.querySelector(".trang1");
trang1.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 1);

    displayProducts(menuCat, row);
});
//lọc sp trang 2
const trang2 = document.querySelector(".trang2");
trang2.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 2);

    displayProducts(menuCat, row);
});
//lọc sp trang 3
const trang3 = document.querySelector(".trang3");
trang3.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 3);

    displayProducts(menuCat, row);
});


const row = document.querySelector(".rowmenu");
//mặc định hiện list sản phẩm mặc định
window.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 1);

    displayProducts(menuCat, row);
});





