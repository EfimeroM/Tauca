const jsonProduct = (path) =>{
    const idProduct = sessionStorage.getItem('idProductTauca')
    return new Promise(resolve => {
        fetch(path)
            .then(response => response.json())
            .then(data =>{
                const dataProduct = data.filter(producto => producto.id === Number(idProduct))
                resolve(dataProduct[0])
            })
            .catch(err => console.log(err))
    });
}
const changeImage = (color) =>{
    const urlImage = dataProduct.thumbnail[String(color)]
    $('#img-product').fadeOut(0, function(){
        $('#img-product').remove()
        $('#img-content').prepend(`<img id="img-product" src="${urlImage}" alt="">`)
    })
}
const getColors = (dataProduct) =>{
    return new Promise(resolve => {
        if(dataProduct.color){
            console.log(dataProduct.color)
            let tableColors = ""
            for (const color of Object.entries(dataProduct.color)) {
                tableColors = `${tableColors}
                <div onclick="changeImage('${color[1]}')" class="square" style="background-color: ${color[0]};"></div>
                `
            }
            resolve(tableColors)
        }else{
            resolve('')
        }
    })
}
const innerHTMLProduct = (dataProduct, tableColors) =>{
    console.log(dataProduct)
    const div = document.querySelector("#body-product");
    //${dataCategory.nameEs.toLowerCase()}
    div.innerHTML = `
        <div id="product">
            <div id="img-content">
                <img id="img-product" src="${dataProduct.thumbnail[1]}" alt="">
            </div>
            <div id="colors">
                ${tableColors}
            </div>
        </div>
        <div id="description">
            <p>${dataProduct.name}</p>
            <p>$${dataProduct.price}</p>
            <div id="buttonComprar">!Comprar!</div>
        </div>
    `
}

const pathProductsProduct = '../js/json/products.json'
let dataProduct = []
async function main(){
    dataProduct = await jsonProduct(pathProductsProduct)
    tableColors = await getColors(dataProduct)
    await innerHTMLProduct(dataProduct, tableColors)
}
main()