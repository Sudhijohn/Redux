const Base_URL = "http://localhost:3001";

export const fetchData = async () => {
  try {
    const response = await fetch(Base_URL + "/products");
    if (response.ok !== true) throw new Error();
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error in fetching data`);
  }
};
