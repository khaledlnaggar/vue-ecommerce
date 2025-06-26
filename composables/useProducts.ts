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
      "https://dummyjson.com/products?limit=9",
      {
        key: "products",
      }
    );
    if (response.value) {
      products.value = response.value;
    }
  };
  const onPagination = (page: number) => {
    try {
      const response = $fetch<ProductListResponse>(
        `https://dummyjson.com/products?limit=9&skip=${page * 9}`
      );
      response.then((res) => {
        products.value = res;
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onFiltering = (url: string) => {
    try {
      const response = $fetch<ProductListResponse>(url);
      response.then((res) => {
        products.value = res;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = (search: string) => {
    try {
      const response = $fetch<ProductListResponse>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      response.then((res) => {
        products.value = res;
      });
    } catch (error) {
      console.log(error);
    }
  };
  const debounce = (callback: Function, delay: number) => {
    let timeoutId: number;
    return (...args: any) => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  return {
    getCategories,
    onFiltering,
    getProducts,
    onPagination,
    products,
    debounce,
  };
};
