const mealHunter = (search) =>{
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;        // Search meals by first letter
    // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';        // Search meals by first letter
    // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';        // Search meals by first letter

    // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=beef';     // Search meal by name
    // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';  // Search meal by name
    // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=salad';    // Search meal by name
    // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=dal';      // Search meal by name
    // const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=sweet';    // Search meal by name

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;   // Search meal by Dynamic
    fetch(url)
    .then(res => res.json())
    .then(data => mealDataLoad(data.meals))
}

const mealDataLoad = foods =>{
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';
    //console.log(foods);
    foods.forEach(food =>{
        console.log(food);
        // console.log(food.strCategory);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="onlyMeal(${food.idMeal})" class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0,150)}</p>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);

    })
}

// const searchFood = () =>{
//     const searchField = document.getElementById('search-field');                  // USE Function to Button.
//     const searchText = searchField.value;
//     searchField.value = '';
//     mealHunter(searchText);
// }
    
    const buttonClicked = document.getElementById('search-btn').addEventListener('click',function(){
        const searchField = document.getElementById('search-field');                // USE EventHandelar to Button.
        const searchText = searchField.value;
        searchField.value = '';
        mealHunter(searchText);
    })

    const onlyMeal = (indivitiol) =>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${indivitiol}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
    }

    const displayMealDetails = (modal) =>{
        const modalContainer = document.getElementById('midal-id');
        modalContainer.innerHTML = '';
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML=`
          <img class="img-thumbnail img-fluid rounded mx-auto d-block" src="${modal.strMealThumb}" alt="">
        `;
        modalContainer.appendChild(modalDiv);
    }

    mealHunter('');


