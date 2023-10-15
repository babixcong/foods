import {useState} from "react";
import foodApi from "../apis/foodApi";

type FoodType = {
  name: string|null,
};

interface useFoodType {
  getFood: () => FoodType,
  getFoodFromUrl: () => any,
};

const useFoodHook = (): useFoodType => {
  const [food, setFood] = useState<FoodType>({
    name: null,
  });

  const getFood = (): FoodType => {
    return food;
  };

  const getFoodFromUrl = async () => {
    try {
      const response = await foodApi.getFood();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getFood,
    getFoodFromUrl,
  }
};

export default useFoodHook;
