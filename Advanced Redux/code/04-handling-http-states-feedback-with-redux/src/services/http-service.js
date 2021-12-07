const base_url = `http://localhost:3001`;
export const fetchData = async () => {
  const response = await fetch(`${base_url}/cartitems`);

  if (!response.ok) {
    throw new Error("Sending cart data failed.");
  }
  return response.json();
};

export const updateData = async (method, data) => {
  const response = await fetch(`${base_url}/cartitems`, {
    method: method,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Sending cart data failed.");
  }
  return response;
};
