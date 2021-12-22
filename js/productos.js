const json = (path) =>{
    return new Promise(resolve => {
        fetch(path)
            .then(response => response.json())
            .then(data =>{
                resolve(data)
            })
            .catch(err => console.log(err))
    });
}
const category = (dataJsonCategory) =>{
    const category = sessionStorage.getItem('category')
    if(category){
        return new Promise(resolve => {
            const dataCategory = dataJsonCategory.filter(cat => cat.nameEs === category)
            resolve(dataCategory[0])
        });
    }else{
        location.href="../secciones/categorias.html";
    }
}
const products = (dataJsonProducts, dataCategory) =>{
    return new Promise(resolve => {
        const dataProducts = dataJsonProducts.filter(product => product.category === dataCategory.nameEs)
        resolve(dataProducts)
    });
}
const estructureProducts = (dataProducts) =>{
    return new Promise(resolve => {
        let tableProducts = ""
        for (const products of dataProducts) {
            console.log(products)
            tableProducts = `${tableProducts}
            <div class="product">
                <img src=${products.thumbnail[1]} alt="">
                <p>${products.name}</p>
                <p>$${products.price}</p>
            </div>
            `
        }
        resolve(tableProducts)
    });
}
const innerHTML = (dataCategory, tableProducts) =>{
    const div = document.querySelector("#body-products");
    //${dataCategory.nameEs.toLowerCase()}
    div.innerHTML = `
        <div id="banner-category" style="background-image: url('../media/img/categories/banners/accesorios.jpg');">
            <p>${dataCategory.nameEs}</p>
            <p id="en">${dataCategory.name}</p>
        </div>
        <div id="box-products">
            ${tableProducts}
        </div>
    `
}
const pathCategories = '../js/json/categories.json'
const pathProducts = '../js/json/products.json'
async function main(){
    const dataCategory = await category(await json(pathCategories))
    const dataProducts = await products(await json(pathProducts), dataCategory)
    const tableProducts = await estructureProducts(dataProducts)
    await innerHTML(dataCategory, tableProducts)
}
main()