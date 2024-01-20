
export type addProductRequest = {
    name: string,
    quantity: number,
    price: number
}

export const addProduct = async (request: addProductRequest) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_HOST}/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: request.name,
          price: request.price,
          quantity: request.quantity
        }),
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
