export const getCatsLists = async (params) => {
  const { page, limit } = params;
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`
  );

  const data = await res.json();

  return data;
};

export const getCatDetails = async (id) => {
  const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);

  const data = await res.json();

  return data;
};
