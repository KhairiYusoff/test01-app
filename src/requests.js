export const getCatsLists = async () => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );

  const data = await res.json();

  return data;
};

export const getCatDetails = async () => {
  const res = await fetch(`https://api.thecatapi.com/v1/images/0XYvRd7oD`);

  const data = await res.json();

  return data;
};
