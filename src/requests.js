export const getCatsLists = async (params) => {
  const { page, limit } = params;
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`
  );

  const data = await res.json();

  return data;
};

export const getCatDetails = async () => {
  const res = await fetch(`https://api.thecatapi.com/v1/images/0XYvRd7oD`);

  const data = await res.json();

  return data;
};
