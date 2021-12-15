const redirect = (category) =>{
    sessionStorage.setItem('category', category)
    location.href="../secciones/productos.html";
}