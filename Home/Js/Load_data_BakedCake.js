const getProducts = async () => {
    const res = await fetch("data//cate-4.json");
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
//lọc sp trang 4
const trang4 = document.querySelector(".trang4");
trang4.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 4);

    displayProducts(menuCat, row);
});
//lọc sp trang 5
const trang5 = document.querySelector(".trang5");
trang5.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 5);

    displayProducts(menuCat, row);
});
//lọc sp trang 6
const trang6 = document.querySelector(".trang6");
trang6.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 6);

    displayProducts(menuCat, row);
});
//lọc sp trang 7
const trang7 = document.querySelector(".trang7");
trang7.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 7);

    displayProducts(menuCat, row);
});
//lọc sp trang 8
const trang8 = document.querySelector(".trang8");
trang8.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 8);

    displayProducts(menuCat, row);
});
//lọc sp trang 9
const trang9 = document.querySelector(".trang9");
trang9.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 9);

    displayProducts(menuCat, row);
});
//lọc sp trang 10
const trang10 = document.querySelector(".trang10");
trang10.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 10);

    displayProducts(menuCat, row);
});
//lọc sp trang 11
const trang11 = document.querySelector(".trang11");
trang11.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 11);

    displayProducts(menuCat, row);
});
//lọc sp trang 12
const trang12 = document.querySelector(".trang12");
trang12.addEventListener("click", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 12);

    displayProducts(menuCat, row);
});

const row = document.querySelector(".rowmenu");
//mặc định hiện list sản phẩm mặc định
window.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts();
    const menuCat = products.filter(product => product.category === 1);

    displayProducts(menuCat, row);
});





