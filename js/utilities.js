const redirectProducts = (category) =>{
    sessionStorage.setItem('categoryTauca', category)
    location.href="../secciones/productos.html";
}
const redirectProduct = (idProduct) =>{
    sessionStorage.setItem('idProductTauca', idProduct)
    location.href="../secciones/producto.html";
}
