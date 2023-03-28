type TCategoryGridTile = {
  title: string;
  color: string;
  handlePress: () => void;
};

type TMeal = {
  id: string;
  categoryIds: string;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: string;
  ingredients: string;
  steps: string;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
};


export { TCategoryGridTile, TMeal };
