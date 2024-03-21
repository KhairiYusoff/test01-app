import React, { useEffect, useState } from "react";
import { getCatsLists } from "./requests";
import { Link } from "react-router-dom";
import CustomTable from "./CustomTable";

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const params = {
        limit: pageSize,
        page: currentPage,
      };
      const res = await getCatsLists(params);
      setCats(res);
      setLoading(false);
    };

    fetchData();
  }, [currentPage, pageSize]);
  return (
    <div className="cats">
      <h1>Table of Cats</h1>
      {/* <div className="cat-grid">
        {cats.map((cat) => (
          <Link to={`/cat/0XYvRd7oD`} key={cat.id}>
            <img src={cat.url} alt={`Cat ${cat.id}`} width={300} height={250} />
          </Link>
        ))}
      </div> */}
      <CustomTable
        data={cats}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default Cats;
