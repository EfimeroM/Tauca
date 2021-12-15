class Products{
    async category(){
        const category = sessionStorage.getItem('category')
        if(category){
            fetch('../js/json/productos.json')
            .then(response => response.json())
            .then(data =>{
                const dataCategory = data.filter(cat => cat.nameEs === category)
                return dataCategory
            })
            .catch(err => console.log(err))
        }else{
            location.href="../secciones/categorias.html";
        }
    }
    async list(){
        
    }
}