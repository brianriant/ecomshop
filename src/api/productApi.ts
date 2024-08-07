import { ProductProps } from "../components/productcard/Productcard";

export async function fetchProducts(): Promise<{
  products: ProductProps[];
  categories: string[];
}> {
  try {
    //https://fakestoreapi.com/products
    // https://fake-store-api.mock.beeceptor.com/api/products
    const response = await fetch(
      "https://ecomshopendpoint.vercel.app/products"
    );
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const productsData: ProductProps[] = await response.json();

    // Extract categories from products
    const categoriesData: string[] = Array.from(
      new Set(productsData.map((product) => product.category))
    ).slice(0, 20);

    return { products: productsData, categories: categoriesData };
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}
