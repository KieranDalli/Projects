window.addEventListener('load', showRecipe);
window.addEventListener('load', checkLocalStorage);
import { toastController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';
window.toastController = toastController;

var card = document.getElementById("recipeContainer");

function showRecipe() {
    var savedRecipe = JSON.parse(localStorage.getItem("allRecipes"));

    for (var i = 0; i < savedRecipe.length; i++) {
        card.innerHTML += "<ion-item id =\ " + i + "\"> <ion-card-header" + savedRecipe[i].recipeName + " <ion-card-subtitle>" + savedRecipe[i].ingredientList + "</ion-card-subtitle></ion-card-header> </ion-item>";
    }
}

document.getElementById("deleteAll").addEventListener('click', confirmDeletion);

function confirmDeletion() {
    var alertElement = document.createElement("ion-alert");

    alertElement.Header = "Delete All Recipes?";
    alertElement.message = "Are you sure you want to delete all recipes?";

    alertElement.buttons = [
        {
            text: "NO"
        },

        {
            text: 'YES',
            handler: () => { deleteRecipes() }
        }
    ];

    document.body.appendChild(alertElement);
    return alertElement.present();
}

function deleteRecipes() {
    localStorage.removeItem("allRecipes");

    card.innerHTML = " ";

    const button = document.getElementById("deleteAll")
    button.addEventListener('click', clearedMessage);

    async function clearedMessage() {
        const toast = await toastController.create({
            color: 'dark',
            duration: 2000,
            message: 'all reciped were cleared',
            showCloseButton: true,
        });

        await toast.present();
    }

}

function checkLocalStorage() {
    var empty = document.getElementById("whenEmpty").innerHTML;
    if (localStorage !== null) {
        empty.innerHTML = " ";
    }
}