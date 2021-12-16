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
const innerHTML = (dataCategory) =>{
    console.log(dataCategory)
}

const pathCategories = '../js/json/categories.json'
async function main(){
    await innerHTML( await category(await json(pathCategories)))
}
main()