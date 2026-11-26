export type MealSlot = "Breakfast" | "Lunch";

export interface MealEntry {
  slot: MealSlot;
  recipe: string;
  ingredients: string[];
}

export interface DayMenu {
  day: string;
  theme: string;
  meals: MealEntry[];
}

export const weeklyMealPlan: DayMenu[] = [
  {
    day: "Monday",
    theme: "Heart healthy start",
    meals: [
      {
        slot: "Breakfast",
        recipe: "Cinnamon Apple Oatmeal With Greek Yogurt",
        ingredients: [
          "Rolled oats",
          "Low fat milk",
          "Diced apple",
          "Ground cinnamon",
          "Plain Greek yogurt",
          "Chopped walnuts",
          "Honey",
        ],
      },
      {
        slot: "Lunch",
        recipe: "Herb Baked Chicken With Quinoa Pilaf",
        ingredients: [
          "Chicken breast",
          "Quinoa",
          "Carrots",
          "Green peas",
          "Garlic",
          "Parsley",
          "Lemon juice",
          "Low sodium vegetable broth",
          "Olive oil",
        ],
      }
    ],
  },
  {
    day: "Tuesday",
    theme: "Protein and fiber balance",
    meals: [
      {
        slot: "Breakfast",
        recipe: "Spinach Tomato Egg Scramble With Whole Grain Toast",
        ingredients: [
          "Eggs",
          "Fresh spinach",
          "Diced tomatoes",
          "Onion",
          "Olive oil",
          "Whole grain bread",
          "Avocado slices",
        ],
      },
      {
        slot: "Lunch",
        recipe: "Turkey Vegetable Soup With Barley",
        ingredients: [
          "Lean turkey pieces",
          "Pearl barley",
          "Celery",
          "Carrots",
          "Zucchini",
          "Onion",
          "Garlic",
          "Low sodium broth",
          "Thyme",
        ],
      }
    ],
  },
  {
    day: "Wednesday",
    theme: "Mediterranean inspired day",
    meals: [
      {
        slot: "Breakfast",
        recipe: "Berry Chia Yogurt Parfait",
        ingredients: [
          "Plain yogurt",
          "Chia seeds",
          "Strawberries",
          "Blueberries",
          "Low sugar granola",
          "Ground flaxseed",
        ],
      },
      {
        slot: "Lunch",
        recipe: "Lentil Spinach Stew With Garden Salad",
        ingredients: [
          "Green lentils",
          "Fresh spinach",
          "Crushed tomatoes",
          "Carrots",
          "Onion",
          "Garlic",
          "Cumin",
          "Olive oil",
          "Mixed greens",
        ],
      }
    ],
  },
  {
    day: "Thursday",
    theme: "Comfort meals with smart carbs",
    meals: [
      {
        slot: "Breakfast",
        recipe: "Banana Peanut Butter Overnight Oats",
        ingredients: [
          "Rolled oats",
          "Low fat milk",
          "Banana",
          "Natural peanut butter",
          "Chia seeds",
          "Ground cinnamon",
        ],
      },
      {
        slot: "Lunch",
        recipe: "Chicken Shawarma Bowl",
        ingredients: [
          "Chicken thigh trimmed",
          "Brown rice",
          "Cucumber",
          "Tomatoes",
          "Romaine lettuce",
          "Chickpeas",
          "Plain yogurt",
          "Lemon tahini dressing",
        ],
      }
    ],
  },
  {
    day: "Friday",
    theme: "End of week family favorites",
    meals: [
      {
        slot: "Breakfast",
        recipe: "Whole Wheat Pancakes With Fruit Compote",
        ingredients: [
          "Whole wheat flour",
          "Eggs",
          "Low fat milk",
          "Baking powder",
          "Vanilla extract",
          "Strawberries",
          "Blueberries",
          "Maple drizzle",
        ],
      },
      {
        slot: "Lunch",
        recipe: "Tuna Salad Stuffed Whole Wheat Pita",
        ingredients: [
          "Tuna in water",
          "Plain Greek yogurt",
          "Celery",
          "Red onion",
          "Fresh dill",
          "Lemon juice",
          "Whole wheat pita",
          "Lettuce",
        ],
      }
    ],
  },
  {
    day: "Saturday",
    theme: "Weekend social menu",
    meals: [
      {
        slot: "Breakfast",
        recipe: "Veggie Frittata With Roasted Potatoes",
        ingredients: [
          "Eggs",
          "Bell peppers",
          "Spinach",
          "Mushrooms",
          "Onion",
          "Olive oil",
          "Baby potatoes",
          "Paprika",
        ],
      },
      {
        slot: "Lunch",
        recipe: "Grilled Tilapia Tacos",
        ingredients: [
          "Tilapia fillets",
          "Corn tortillas",
          "Cabbage slaw",
          "Yogurt lime sauce",
          "Fresh cilantro",
          "Diced tomatoes",
          "Avocado",
        ],
      }
    ],
  },
  {
    day: "Sunday",
    theme: "Gentle finish and reset",
    meals: [
      {
        slot: "Breakfast",
        recipe: "Date Almond Porridge",
        ingredients: [
          "Steel cut oats",
          "Low fat milk",
          "Chopped dates",
          "Sliced almonds",
          "Cardamom",
          "Cinnamon",
        ],
      },
      {
        slot: "Lunch",
        recipe: "Roast Chicken With Herbed Couscous And Carrots",
        ingredients: [
          "Skinless chicken pieces",
          "Olive oil",
          "Rosemary",
          "Garlic",
          "Whole wheat couscous",
          "Carrots",
          "Green peas",
          "Parsley",
        ],
      }
    ],
  },
];
