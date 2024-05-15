type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  category: string;
  image: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Pecorino Cheese",
      "Guanciale",
      "Black Pepper",
    ],
    instructions:
      "Cook spaghetti. In a separate pan, cook guanciale until crisp. Beat eggs with cheese and pepper. Combine everything with cooked spaghetti off the heat. Serve immediately.",
    category: "Italian",
    image: "/recipes/spaghetti-carbonara.jpg",
  },
  {
    id: 2,
    name: "Chicken Curry",
    ingredients: [
      "Chicken",
      "Onions",
      "Tomatoes",
      "Curry Powder",
      "Coconut Milk",
    ],
    instructions:
      "Fry onions, add chicken and brown. Add tomatoes and curry powder, cook for 20 minutes. Add coconut milk and simmer until chicken is tender.",
    category: "Indian",
    image: "/recipes/chicken-curry.jpg",
  },
  {
    id: 3,
    name: "Beef Tacos",
    ingredients: [
      "Beef",
      "Taco Shells",
      "Lettuce",
      "Tomato",
      "Cheese",
      "Sour Cream",
    ],
    instructions:
      "Cook beef with seasonings. Assemble tacos with beef, lettuce, tomato, cheese, and sour cream.",
    category: "Mexican",
    image: "/recipes/beef-tacos.jpg",
  },
  {
    id: 4,
    name: "Vegan Lasagna",
    ingredients: [
      "Lasagna Noodles",
      "Tomato Sauce",
      "Ricotta (Vegan)",
      "Spinach",
      "Mushrooms",
      "Zucchini",
    ],
    instructions:
      "Layer noodles with sauce, vegan ricotta, and vegetables. Bake until golden.",
    category: "Vegan",
    image: "/recipes/vegan-lasagna.jpg",
  },
  {
    id: 5,
    name: "Tom Yum Soup",
    ingredients: [
      "Shrimp",
      "Lemongrass",
      "Kaffir Lime Leaves",
      "Galangal",
      "Chili",
      "Mushrooms",
    ],
    instructions:
      "Boil water with lemongrass, lime leaves, and galangal. Add shrimp and mushrooms. Season with fish sauce, lime juice, and chili.",
    category: "Thai",
    image: "/recipes/tom-yum-soup.jpg",
  },
  {
    id: 6,
    name: "Sushi Rolls",
    ingredients: ["Sushi Rice", "Nori", "Salmon/Tuna", "Avocado", "Cucumber"],
    instructions:
      "Spread rice on nori, add fillings, and roll tightly. Slice into pieces.",
    category: "Japanese",
    image: "/recipes/sushi-rolls.jpg",
  },
];

export const team = [
  {
    name: "Ahmed Yasser",
    job: "Frontend Developer",
  },
  {
    name: "Abdelrahman hossam",
    job: "Ui/UX Designer",
  },
];
