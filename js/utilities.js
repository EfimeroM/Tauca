const redirectProducts = (category) =>{
    sessionStorage.setItem('categoryTauca', category)
    location.href="../secciones/productos.html";
}
const redirectProduct = (idProduct) =>{
    location.href="../secciones/producto?id="+idProduct;
}
