export type MealSlot = "Breakfast" | "Lunch" | "Dinner";

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
      },
      {
        slot: "Dinner",
        recipe: "Dill Salmon With Sweet Potato Mash And Green Beans",
        ingredients: [
          "Salmon fillet",
          "Fresh dill",
          "Lemon slices",
          "Sweet potatoes",
          "Plain yogurt",
          "Green beans",
          "Olive oil",
          "Black pepper",
        ],
      },
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
      },
      {
        slot: "Dinner",
        recipe: "Beef And Broccoli Stir Fry With Brown Rice",
        ingredients: [
          "Lean beef strips",
          "Broccoli florets",
          "Bell peppers",
          "Ginger",
          "Garlic",
          "Low sodium soy sauce",
          "Brown rice",
          "Sesame oil",
        ],
      },
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
      },
      {
        slot: "Dinner",
        recipe: "Lemon Garlic Cod With Roasted Vegetables",
        ingredients: [
          "Cod fillet",
          "Lemon juice",
          "Garlic",
          "Zucchini",
          "Carrots",
          "Cauliflower",
          "Olive oil",
          "Oregano",
        ],
      },
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
      },
      {
        slot: "Dinner",
        recipe: "Vegetable Lasagna With Cottage Cheese",
        ingredients: [
          "Whole wheat lasagna sheets",
          "Cottage cheese",
          "Spinach",
          "Mushrooms",
          "Marinara sauce",
          "Mozzarella",
          "Onion",
          "Garlic",
        ],
      },
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
      },
      {
        slot: "Dinner",
        recipe: "Light Chicken And Vegetable Biryani",
        ingredients: [
          "Basmati and brown rice blend",
          "Chicken breast",
          "Onion",
          "Tomatoes",
          "Green peas",
          "Carrots",
          "Turmeric",
          "Cumin",
          "Low sodium broth",
        ],
      },
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
      },
      {
        slot: "Dinner",
        recipe: "Beef Meatballs In Tomato Basil Sauce With Polenta",
        ingredients: [
          "Lean ground beef",
          "Rolled oats",
          "Egg",
          "Garlic",
          "Parsley",
          "Tomato basil sauce",
          "Cornmeal",
          "Parmesan",
        ],
      },
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
      },
      {
        slot: "Dinner",
        recipe: "Vegetable Chickpea Curry With Brown Rice",
        ingredients: [
          "Chickpeas",
          "Cauliflower",
          "Potatoes",
          "Spinach",
          "Light coconut milk",
          "Onion",
          "Garlic",
          "Ginger",
          "Curry powder",
          "Brown rice",
        ],
      },
    ],
  },
];
