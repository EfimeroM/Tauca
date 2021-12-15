[1mdiff --git a/css/main.css b/css/main.css[m
[1mindex e69de29..8bdf04f 100644[m
[1m--- a/css/main.css[m
[1m+++ b/css/main.css[m
[36m@@ -0,0 +1,54 @@[m
[32m+[m[32m* {[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  font-family: 'Comfortaa', cursive;[m
[32m+[m[32m  box-sizing: border-box; }[m
[32m+[m
[32m+[m[32mbody {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 100%; }[m
[32m+[m
[32m+[m[32mheader {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m  height: 15vh;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  justify-content: center; }[m
[32m+[m
[32m+[m[32mheader #logo-tauca {[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  top: 0;[m
[32m+[m[32m  padding-left: 30px; }[m
[32m+[m[32m  header #logo-tauca img {[m
[32m+[m[32m    width: 120px;[m
[32m+[m[32m    height: 15vh; }[m
[32m+[m
[32m+[m[32mheader nav ul {[m
[32m+[m[32m  display: flex; }[m
[32m+[m[32m  header nav ul li {[m
[32m+[m[32m    list-style: none;[m
[32m+[m[32m    padding: 10px 20px; }[m
[32m+[m[32m    header nav ul li a {[m
[32m+[m[32m      text-decoration: none;[m
[32m+[m[32m      color: black; }[m
[32m+[m[32m  header nav ul li:hover {[m
[32m+[m[32m    border-bottom: 1px solid #dadada; }[m
[32m+[m
[32m+[m[32m#body {[m
[32m+[m[32m  background-image: url("../media/img/banners/index.jpg");[m
[32m+[m[32m  background-repeat: no-repeat;[m
[32m+[m[32m  background-size: 100%;[m
[32m+[m[32m  height: 100vh;[m
[32m+[m[32m  width: 100%; }[m
[32m+[m
[32m+[m[32mfooter {[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  background-color: #1b1b1b;[m
[32m+[m[32m  height: 15vh;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-direction: column;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  justify-content: center; }[m
[1mdiff --git a/index.html b/index.html[m
[1mindex c54a721..9922055 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -4,10 +4,30 @@[m
     <meta charset="UTF-8">[m
     <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
     <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m    <link rel="preconnect" href="https://fonts.googleapis.com">[m
[32m+[m[32m    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>[m
[32m+[m[32m    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet">[m
     <link rel = "stylesheet" href = "css/main.css">[m
     <title>Home Tauca</title>[m
 </head>[m
 <body>[m
[31m-    <h1> Bienvenido a Tauca </h1>[m
[32m+[m[32m    <header>[m
[32m+[m[32m        <div id="logo-tauca"><img src="media/icons/tauca/logo-light.jpg" alt=""></div>[m
[32m+[m[32m        <nav>[m
[32m+[m[32m            <ul>[m
[32m+[m[32m                <li><a href="">Productos</a></li>[m
[32m+[m[32m                <li><a href="">Preguntas frecuentes</a></li>[m
[32m+[m[32m                <li><a href="">Contacto</a></li>[m
[32m+[m[32m                <li><a href="">Sobre nosotres</a></li>[m
[32m+[m[32m            </ul>[m
[32m+[m[32m        </nav>[m
[32m+[m[32m    </header>[m
[32m+[m[32m    <div id="body">[m
[32m+[m[32m    </div>[m
[32m+[m[32m    <footer>[m
[32m+[m[32m        <h3>Tauca</h3>[m
[32m+[m[32m        <h4>Palermo, CABA | Pto. Madryn, CHUBUT</h4>[m
[32m+[m[32m        <h4>Celular: +541169637384</h4>[m
[32m+[m[32m    </footer>[m
 </body>[m
 </html>[m
\ No newline at end of file[m
[1mdiff --git a/media/img/banners/index.jpg b/media/img/banners/index.jpg[m
[1mnew file mode 100644[m
[1mindex 0000000..f65c2e2[m
Binary files /dev/null and b/media/img/banners/index.jpg differ
[1mdiff --git a/scss/_base.scss b/scss/_base.scss[m
[1mindex e69de29..e70da8b 100644[m
[1m--- a/scss/_base.scss[m
[1m+++ b/scss/_base.scss[m
[36m@@ -0,0 +1,19 @@[m
[32m+[m[32m*{[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    font-family: 'Comfortaa', cursive;[m
[32m+[m[32m    box-sizing: border-box;[m
[32m+[m[32m}[m
[32m+[m[32mbody{[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    flex-direction: column;[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    height: 100%;[m
[32m+[m[32m}[m
[32m+[m[32mheader{[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m    height: 15vh;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/scss/_layout.scss b/scss/_layout.scss[m
[1mindex e69de29..76f4557 100644[m
[1m--- a/scss/_layout.scss[m
[1m+++ b/scss/_layout.scss[m
[36m@@ -0,0 +1,44 @@[m
[32m+[m[32mheader{[m
[32m+[m[32m    #logo-tauca{[m
[32m+[m[32m        position: absolute;[m
[32m+[m[32m        left: 0;[m
[32m+[m[32m        top: 0;[m
[32m+[m[32m        padding-left: 30px;[m
[32m+[m[32m        img{[m
[32m+[m[32m            width: 120px;[m
[32m+[m[32m            height: 15vh;[m
[32m+[m[32m        }[m
[32m+[m[32m    }[m
[32m+[m[32m    nav{[m
[32m+[m[32m        ul{[m
[32m+[m[32m            display: flex;[m
[32m+[m[32m            li{[m
[32m+[m[32m                list-style: none;[m
[32m+[m[32m                padding: 10px 20px;[m
[32m+[m[32m                a{[m
[32m+[m[32m                    text-decoration: none;[m
[32m+[m[32m                    color: black;[m
[32m+[m[32m                }[m
[32m+[m[32m            }[m
[32m+[m[32m            li:hover{[m
[32m+[m[32m                border-bottom: 1px solid rgb(218, 218, 218);[m
[32m+[m[32m            }[m
[32m+[m[32m        }[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m[32m#body{[m
[32m+[m[32m    background-image: url('../media/img/banners/index.jpg');[m
[32m+[m[32m    background-repeat: no-repeat;[m
[32m+[m[32m    background-size: 100%;[m
[32m+[m[32m    height: 100vh;[m
[32m+[m[32m    width: 100%;[m
[32m+[m[32m}[m
[32m+[m[32mfooter{[m
[32m+[m[32m    color: white;[m
[32m+[m[32m    background-color: rgb(27, 27, 27);[m
[32m+[m[32m    height: 15vh;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    flex-direction: column;[m
[32m+[m[32m    align-items: center;[m
[32m+[m[32m    justify-content: center;[m
[32m+[m[32m}[m
\ No newline at end of file[m
