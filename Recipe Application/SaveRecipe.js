var saveRecipe = document.getElementById("saveBtn");
saveRecipe.addEventListener('click', checkRecipe);

function checkRecipe() {

    var recipeName = document.getElementById("recipe");
    var ingredientList = document.getElementById("ingredients");
    

    if ((recipeName.value == '') || (ingredientList.value == '')) {
        wrongAlert()
    }
    else {
        const alert = document.createElement("ion-alert");
        alert.header = "MyRecipes";
        alert.message = "Are you sure you want to save this recipe?";
        alert.buttons = [
            {
                text: "CANCEL"
            },

            {
                text: "OK",
                handler: () => { addRecipe() }
            }
        ];

        document.body.appendChild(alert);

        return alert.present();

    }

    function wrongAlert() {
        var alertElement = document.createElement("ion-alert");

        alertElement.Header = "MyRecipes";
        alertElement.message = "Please fill in both the recipe name and the ingredients";

        alertElement.buttons = [
            {
                text: "OK"
            }
        ];

        document.body.appendChild(alertElement);
        return alertElement.present();
    }

    function addRecipe() {

        var recipeObject = { 'Recipe Name': recipeName.value, 'Ingredients': ingredientList.value };

        var savedRecipe = JSON.parse(localStorage.getItem("allRecipes"));

        if (savedRecipe === null) {
            savedRecipe = [];
        }

        savedRecipe.push(recipeObject)
        localStorage.setItem("allRecipes", JSON.stringify(savedRecipe));

        location.href = 'index.html';
    }


}