import {Recipe} from "./recipe-list/recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else do you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/Five_Guys_Burgers_and_Fries_%287025300923%29.jpg',
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
