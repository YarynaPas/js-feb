// -взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
 fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res =>{
        console.log(res);
        let {products} = res;
        for (const product of products) {
            let d1= document.createElement('div');
            d1.style.background ='lightyellow';
            let h2 = document.createElement('h2')
            h2.innerHTML = `Title: ${product.title}<br><br> Brand: ${product.brand}<br><br>`;
            let h3 = document.createElement('h3');
            h3.style.color = 'red';
            h3.innerHTML = `Price: ${product.price}<br><br>`
            img= document.createElement('img');
            img.src = product.thumbnail;
            p=document.createElement('p');
            p.innerHTML=`Description: ${product.description}`
            d1.appendChild(h2);
            d1.appendChild(h3);
            d1.appendChild(p);
            d1.appendChild(img);
            document.body.appendChild(d1);

        }
    });
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(res =>{
        console.log(res)
        let {recipes} = res;
        for (const recipe of recipes) {
            let recipeD = document.createElement('div');
            recipeD.style.background ='lightblue';
            let h2 = document.createElement('h2');
            h2.innerHTML = `<i>${recipe.name}</i>`;
            h3 = document.createElement('h3');
            h3.innerHTML = `Ingridiens:<br>`
            let ingredients = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                let ingredientItem = document.createElement('li');
                ingredientItem.innerText = ingredient;
                ingredients.appendChild(ingredientItem);
            }
            let P = document.createElement('p');
            P.innerHTML = `Instructions: ${recipe.instructions}<br><br>`;
            img = document.createElement('img')
            img.src = recipe.image;
            recipeD.appendChild(h2);
            recipeD.appendChild(h3);
            recipeD.appendChild(ingredients);
            recipeD.appendChild(P);
            recipeD.appendChild(img)

            document.body.appendChild(recipeD);
        }
    });


//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
