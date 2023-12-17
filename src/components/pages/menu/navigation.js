async function header(){
    const template = document.createElement('template')

template.innerHTML=`
<div class="main_menu">
    <div class="categories">
        <ul>
            <li><a href='file:///D:/working%20table/Study/Project_Cookbook/src/components/pages/main/main.html'><p>Главная</p></a></li>
            <li><a href="/*тут будет ссылка на завтраки*/">Завтраки</a></li>
            <li><a href="/*тут будет ссылка на обеды*/">Обеды</a></li>
            <li><a href="/*тут будет ссылка на ужины*/">Ужины</a></li>
            <li><a href="/*тут будет ссылка на десерты*/">Десерты</a></li>
            <li><a href="/*тут будет ссылка на напитки*/">Напитки</a></li>
        </ul>
    </div>
    <div class="account">
        <ul>
            <li><a href='file:///D:/working%20table/Study/Project_Cookbook/src/components/pages/registration/signIn.html' class="sign_in_menu">Войти</a></li>
        </ul>
        <ul>
            <li><a href='file:///D:/working%20table/Study/Project_Cookbook/src/components/pages/registration/signIn.html' class="registration_menu">Регистрация</a></li>
        </ul>
    </div>
</div>
    <style>
        .main_menu{
            height: 79px;
            width: 100%;
            background-color: #40B145;
        }
        .categories{
            padding: 16px;
        }

        .account{
            position: absolute;
            top: -5px;
        }
        
        .categories ul, .account ul{
            list-style-type: none;
            padding: 0;
            margin: 0;
            text-align: center;
        }
        
        .categories ul li, .account ul li{
            display: inline-block;
            margin-left: 10px;
            text-transform: uppercase;
        }
        
        .categories ul li :first-child, .account ul li :first-child{
            margin-left: 0px;
        }
        
        a{
            color: #FFF3D4;
            vertical-align: middle;
            font-family: Montserrat, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 19.026px;
            letter-spacing: 0.49px;
            text-decoration: none;
        }
        .sign_in_menu{
            position: absolute;
            color: #FFF3D4;
            font-family: Montserrat, sans-serif;
            font-size: 14px;
            font-style: normal;
            line-height: 19.026px;
            letter-spacing: 0.49px;
            top: 20px;
            padding-left: 1036px;
        }
        .registration_menu{
            position: absolute;
            color: #FFF3D4;
            font-family: Montserrat, sans-serif;
            font-size: 14px;
            font-style: normal;
            line-height: 19.026px;
            letter-spacing: 0.49px;
            padding-left: 1108px;
            top: 20px;
        }
    </style>
`

document.getElementById("header").innerHTML = template.innerHTML
}

header()