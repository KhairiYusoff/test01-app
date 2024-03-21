import React, { useEffect, useState } from "react";
import { getCatDetails } from "./requests";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Link } from "react-router-dom";

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
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="cat-details">
      <br />
      <Link to="/">HOME</Link>
      {catDetails.breeds && catDetails.breeds[0] && (
        <>
          <h1>{catDetails.breeds[0].name} Details</h1>
          <img
            src={catDetails.url}
            alt={`Cat ${catId}`}
            width={500}
            height={500}
          />
          <h3>Description: {catDetails.breeds[0].description}</h3>
          <p>Origin: {catDetails.breeds[0].origin}</p>
          <p>Life Span: {catDetails.breeds[0].life_span}</p>
        </>
      )}
      {catDetails.categories && catDetails.categories[0] && (
        <h1>{catDetails.categories[0].name} Details</h1>
      )}
      <h1>{catDetails.name} Details</h1>
      <img src={catDetails.url} alt={`Cat ${catId}`} width={500} height={500} />
      <p>Width: {catDetails.width}</p>
      <p>Height: {catDetails.height}</p>
    </div>
  );
}

export default CatDetails;
