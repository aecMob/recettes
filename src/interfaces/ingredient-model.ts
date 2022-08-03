
    export interface Ingredient {
        idIngredient: string;
        strIngredient: string;
        strDescription: string;
        strType: string;
    }

    export interface Ingredients {
        meals: Ingredient[];
    }