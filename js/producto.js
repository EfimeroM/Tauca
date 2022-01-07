const jsonProduct = (path) =>{
    const prodId = getParameterByName('id');
    if(prodId){
        return new Promise(resolve => {
                fetch(path)
                    .then(response => response.json())
                    .then(data =>{
                        const dataProduct = data.filter(producto => producto.id === Number(prodId))
                        resolve(dataProduct[0])
                    })
                    .catch(err => console.log(err))
            });
    }else{
        location.href="../secciones/categorias.html";
    }
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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
    if(screen.width > 800){
        $('#body-product').append(`
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
        `)
    }else if(screen.width <= 800){
        $('#body-product').append(`
            <div id="description">
                <p>${dataProduct.name}</p>
                <p>$${dataProduct.price}</p>
            </div>
            <div id="product">
                <div id="img-content">
                    <img id="img-product" src="${dataProduct.thumbnail[1]}" alt="">
                </div>
                <div id="colors">
                    ${tableColors}
                </div>
            </div>
            <div id="button-comprar">
                <div id="buttonComprar">!Comprar!</div>
            </div>
        `)
    }
}

const pathProductsProduct = '../js/json/products.json'
let dataProduct = []
async function main(){
    dataProduct = await jsonProduct(pathProductsProduct)
    tableColors = await getColors(dataProduct)
    await innerHTMLProduct(dataProduct, tableColors)
}
main()