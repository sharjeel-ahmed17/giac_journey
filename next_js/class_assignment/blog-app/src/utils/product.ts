import { productApi } from "@/lib/product";

const getAllProducts = async () => {
  try {
    const response = await fetch(productApi);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default getAllProducts;
