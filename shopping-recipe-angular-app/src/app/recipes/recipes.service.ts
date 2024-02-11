import {Recipe} from "./recipe-list/recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel',
      'https://upload.wikipedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else do you need to say?',
      'https://upload.wikipedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Bun', 2),
        new Ingredient('Meat', 1)
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
