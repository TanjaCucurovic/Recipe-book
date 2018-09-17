import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
 

 private  recipes: Recipe[] = [
   
    new Recipe(
    'The Classic Burger',
    'Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.', 
    'https://media-cdn.tripadvisor.com/media/photo-s/0c/57/e7/8b/the-classic-burger.jpg',
    [
      new Ingredient('Beef', 1, 'kg'),
      new Ingredient('Egg', 1, 'piece'),
      new Ingredient('Onion', 1, 'piece'),
      new Ingredient('Tomato', 1, 'piece'),
      new Ingredient('Hamburger buns', 4, 'piece')
    ]),
   
    new Recipe(
    'Hot Baked Nutella & Cream Cheese Sandwich',
    'I put the word dessert in the title of this recipe to make sure that this crisp, gooey temptation did not accidentally find its way into your lunch', 
    'http://www.pamelasproducts.com/wp-content/uploads/2015/12/Banana-Nutella-Crepes-1024x685.jpg',
    [
      new Ingredient('Crusty Italian bread', 8,'piece'),
      new Ingredient('Cheese cubes', 4, 'piece'),

      new Ingredient('Nutella', 1, 'kg'),
      new Ingredient('Melted chocolate', 1, 'kg'),
      new Ingredient('Fresh berries', 20, 'piece')
    ]),

    new Recipe(
      'Spicy Pepperoni Pizza',
      'This recipe is a hearty, zesty main dish with a crisp, golden crust. Feel free to use whatever toppings your family enjoys on these homemade pizzas', 
      'https://jikoniyetu.com/wp-content/uploads/2017/10/pepperoni-pizza-1170x780.jpg',
      [
        new Ingredient('Flour', 1, 'kg'),
        new Ingredient('Tomatoes', 5,'piece'),
        new Ingredient('Mozzarella cheese', 1,'kg'),
        new Ingredient('Pepperoni sausage', 2,'kg'),
        new Ingredient('Bacon', 1,'kg')
      ]),

     new Recipe(
         'Mongolian Beef Recipe',
         'Mongolian beef is a dish served in Chinese-American and Chinese-Australian restaurants consisting of sliced beef, typically flank steak, and stir-fried with vegetables in a savory brown sauce, usually made with hoisin sauce, soy sauce, and chili peppers. The beef is commonly paired with scallions or mixed vegetables and is often not spicy. The dish is often served over steamed rice, or in the US, over crispy fried cellophane noodles.Mongolian beef is among the meat dishes developed in Taiwan where Mongolian barbecue restaurants first appeared. Thus, none of the ingredients or the preparation methods are drawn from traditional Mongolian cuisine', 
         'https://thewoksoflife.com/wp-content/uploads/2015/06/mongolian-beef-11.jpg',
         [
           new Ingredient('Beef', 1, 'kg')
          
         ]),

     new Recipe(
           'Easter Chocolate Cupcakes',
           'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake) is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup. As with larger cakes, icing and other cake decorations such as fruit and candy may be applied.', 
         'https://www.bakewithstork.com/assets/Recipes/Easter-Chocolate-Cupcakes.jpg',
           [
             new Ingredient('Butter', 1, 'kg'),
             new Ingredient('Sugar', 1, 'kg'),
             new Ingredient('Egg', 2, 'piece'),
             new Ingredient('Flour', 1, 'kg'),
             new Ingredient('Milk', 1, 'l'),
             new Ingredient('Cocoa', 1, 'kg'),
             new Ingredient('Chocolate', 1, 'kg')
           ]),
];
  constructor(private slService: ShoppingListService){}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
