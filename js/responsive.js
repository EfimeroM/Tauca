const responsive = () =>{
    console.log(screen.width)
    if(screen.width <= 600){
        $('#body-categories').empty()
        $('#body-categories').append(`
        <div id="grid-left">
                <div id="marroquineria-m" onclick="redirectProducts('Marroquineria')"><div id="marroquineria-text-m"><p>Marroquineria</p><p class="letter-category-m">Leather Goods</p></div></div>
                <div id="cinturones-m" onclick="redirectProducts('Cinturones')"><div id="cinturones-text-m"><p>Cinturones</p><p class="letter-category-m">Belts</p></div></div>
        </div>
        <div id="grid-rigth">
                <div id="gorras-m" onclick="redirectProducts('Gorras')"><div id="gorras-text-m"><p>Gorras</p><p class="letter-category-m">Caps</p></div></div>
                <div id="medias-m" onclick="redirectProducts('Medias')"><div id="medias-text-m"><p>Medias</p><p class="letter-category-m">Socks</p></div></div>
        </div>             
        <div id="grid-bottom">
                <div id="accesorios-m" onclick="redirectProducts('Accesorios')"><div id="accesorios-text-m"><p>Accesorios</p><p class="letter-category-m">Accesories</p></div></div>
        </div>            
        `)
    }
}
responsive()