var autorithed_id = -1;

let current_recipe_id = "";



function createUser() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "POST", "http://127.0.0.1:8000/create-user", false
    )

    xhr.setRequestHeader('Content-Type', 'application/json');

      var inputName = "";
      var inputEmail = "";
      var inputPassword = "";

      inputName = document.getElementById("name").value;
      inputEmail = document.getElementById("email").value;
      inputPassword = document.getElementById("password").value; 

    const json = {

        name: inputName,
        email: inputEmail,
        password: inputPassword

    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          if(xhr.responseText == "'user_status':'user with this email is already exists'"){
            console.log(xhr.responseText)
            alert(xhr.responseText);  
          }
          else{
            console.log(xhr.responseText)
            alert(xhr.responseText);
          }
        }
      };
      
    xhr.send(JSON.stringify(json));
}

const api_url =
      "http://127.0.0.1:8000/"

async function getRecipesData() {
    const response = await fetch("http://127.0.0.1:8000/allrecipes")

    let data = await response.json()
    let data1 = data.get_recipes[0]
    let HTMLData = `<p class="pecipe_name">
   ${data1.name}
   </p>`
   document.getElementById("data_0").innerHTML = HTMLData
    return HTMLData
}

getRecipesData();

async function getRecipesData2() {
    const response = await fetch("http://127.0.0.1:8000/allrecipes")

    let data = await response.json()
    let data1 = data.get_recipes[1]
    let HTMLData = `<p class="pecipe_name">
   ${data1.name}
   </p>`
   document.getElementById("data_1").innerHTML = HTMLData
    return HTMLData
}

getRecipesData2();

async function getRecipesData3() {
  const response = await fetch("http://127.0.0.1:8000/allrecipes")

  let data = await response.json()
  let data1 = data.get_recipes[2]
  let data2 = data.get_recipes[2].id
  let HTMLData = `<p class="pecipe_name">
 ${data1.name}
 </p>`
 document.getElementById("data_2").innerHTML = HTMLData
  return HTMLData
}

getRecipesData3();

async function getRecipeImage() {
  const response = await fetch("http://127.0.0.1:8000/allrecipes")

    let data = await response.json()
    let data1 = data.get_recipes[0]
    let HTMLData = `<img src=${data1.image} alt="Фото рецепта 1" class="recipe_img">
   </img>`
   document.getElementById("recipe_image_0").innerHTML = HTMLData
    return HTMLData
}

getRecipeImage();

async function getRecipeImage1() {
  const response = await fetch("http://127.0.0.1:8000/allrecipes")

    let data = await response.json()
    let data1 = data.get_recipes[1]
    console.log(data1)
    let HTMLData = `<img src=${data1.image} alt="Фото рецепта 3" class="recipe_img">
   </img>`
   document.getElementById("recipe_image_1").innerHTML = HTMLData
    return HTMLData
}

getRecipeImage1();

async function getRecipeImage2() {
  const response = await fetch("http://127.0.0.1:8000/allrecipes")

    let data = await response.json()
    let data1 = data.get_recipes[2]
    console.log(data1)
    let HTMLData = `<img src=${data1.image} alt="Фото рецепта 2" class="recipe_img">
   </img>`
   document.getElementById("recipe_image_2").innerHTML = HTMLData
    return HTMLData
}

getRecipeImage2();

async function signIn() {
  let xhr = new XMLHttpRequest();
    xhr.open(
        "POST", "http://127.0.0.1:8000/sign-in", false
    )

    xhr.setRequestHeader('Content-Type', 'application/json');
    var inputEmail = "";
    var inputPassword = "";

    inputEmail = document.getElementById("email").value;
    inputPassword = document.getElementById("password").value; 

  const json = {

      email: inputEmail,
      password: inputPassword

  }

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText);
    }
  };
  
xhr.send(JSON.stringify(json));

var responseText = xhr.responseText;

var responseData = JSON.parse(responseText);

console.log(responseData);

autorithed_id = responseData.user_id;
console.log(autorithed_id);

return autorithed_id;
}

async function getRecipeIngredients2() {
    let path = api_url+"recipe-info/"+2;

    const response = await fetch(path)
    let data = await response.json()
    let id = data.id
    current_recipe_id = id
    let HTMLIngredients = `<p class="pecipe_ingredients">${data.ingredients}</p>`

    document.getElementById("ingredients_1").innerHTML = HTMLIngredients
    return HTMLIngredients
  }

  //   let process = data.process;
  //   let image = data.image;
  //   let HTMLName = `<p class="pecipe_name">${data.name}</p>`
  //  let HTMLType = `<p class="pecipe_type">${data.type}</p>`

  //  let HTMLProcess = `<p class="pecipe_process">${data.process}</p>`
  //  let HTMLImage = `<p class="pecipe_image">${data.image}</p>`



  //   console.log(ingredients)
  //   console.log(type)


getRecipeIngredients2(2);

async function getRecipeImage2() {
  let path = api_url+"recipe-info/"+2;

    const response = await fetch(path)
    let data = await response.json()
    let HTMLImages = `<img src=${data.image} alt="Фото рецепта 2" class="pecipe_image">
   </img>`

    document.getElementById("recipe_image_4").innerHTML = HTMLImages
    return HTMLImages
}

getRecipeImage2(2);


function createComment() {
  let xhr = new XMLHttpRequest();
  xhr.open(
      "POST", "http://127.0.0.1:8000/create-comment", false
  )

  xhr.setRequestHeader('Content-Type', 'application/json');

    var inputText = "";

    inputText = document.getElementById("comment").value;

  const json = {

  writer_id: autorithed_id,
  content: inputText,
  id_recipe: current_recipe_id,

  }

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if(autorithed_id === -1){
          alert("Чтобы оставить комментарий, нужно авторизоваться!")
        }
          console.log(xhr.responseText)
      }
    };
    
  xhr.send(JSON.stringify(json));
}