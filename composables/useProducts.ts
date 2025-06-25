import type { Category, ProductListResponse } from "~/types/products.env";

export const useProducts = () => {
  const products = useState<ProductListResponse>("products", () => {
    return {
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
  });
  const getCategories = () => {
    const { data: category } = useFetch<Category[]>(
      "https://dummyjson.com/products/categories"
    );
    return category;
  };
  const getProducts = async () => {
    const { data: response } = await useFetch<ProductListResponse>(
      "https://dummyjson.com/products?limit=9"
    );
    if (response.value) {
      products.value = response.value;
    }
  };
  const onPagination = (page: number) => {
    const { data: response } = useFetch<ProductListResponse>(
      `https://dummyjson.com/products?limit=9&skip=${page * 9}`
    );
    if (response.value) {
      products.value = response.value;
      console.log(products.value);
    }
  };
  const onFiltering = (url: string) => {
    const { data: response } = useFetch<ProductListResponse>(url);
    if (response.value) {
      products.value = response.value;
    }
  };

  return {
    getCategories,
    onFiltering,
    getProducts,
    onPagination,
    products,
  };
};
