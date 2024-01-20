export type Product = {
  id: number,
  name: string,
  quantity: number,
  price: number,
}

export const getAllProduct = async(): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_HOST}/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message);
    }
    const { data } = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
