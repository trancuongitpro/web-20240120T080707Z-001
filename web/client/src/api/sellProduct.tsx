
export type sellProductRequest = {
    id: number,
    quantity: number,
}

export const addProduct = async (request: sellProductRequest) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_HOST}/products`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          producId: request.id,
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
