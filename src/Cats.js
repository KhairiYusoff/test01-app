import React, { useEffect, useState } from "react";
import { getCatsLists } from "./requests";
import { Link } from "react-router-dom";

const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCatsLists();
      setCats(res);
    };

    fetchData();
  }, []);
  return (
    <div className="cats">
      <h1>List of Cats</h1>
      <div className="cat-grid">
        {cats.map((cat) => (
          <Link to={`/cat/0XYvRd7oD`} key={cat.id}>
            <img src={cat.url} alt={`Cat ${cat.id}`} width={300} height={250} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cats;
