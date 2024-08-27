const BASE_URL = "https://swapi.dev/api/starships";

const index = async () => {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const search = async (ev = '') => {
  try {
    const query = `/?search=${ev}`;

    const res = await fetch(BASE_URL + query);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default { index, search };
