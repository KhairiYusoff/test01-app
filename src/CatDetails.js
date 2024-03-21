import React, { useEffect, useState } from "react";
import { getCatDetails } from "./requests";
import { useParams } from "react-router-dom";

function CatDetails() {
  const { catId } = useParams();
  const [catDetails, setCatDetails] = useState(null);
  console.log(catDetails);

  useEffect(() => {
    const fetchCatDetails = async () => {
      const res = await getCatDetails(catId);
      setCatDetails(res);
    };

    fetchCatDetails();
  }, [catId]);

  if (!catDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cat-details">
      <h1>{catDetails.breeds[0].name} Details</h1>
      <img src={catDetails.url} alt={`Cat ${catId}`} />
      <p>Description: {catDetails.breeds[0].description}</p>
      <p>Origin: {catDetails.breeds[0].origin}</p>
      <p>Life Span: {catDetails.breeds[0].life_span}</p>
    </div>
  );
}

export default CatDetails;
