import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Image",
    key: "image",
    render: (text, record) => (
      <Link to={`/cat/${record.id}`}>
        <img
          src={record.url}
          alt={`Cat ${record.id}`}
          width={200}
          height={200}
        />
      </Link>
    ),
  },
  {
    title: "width",
    dataIndex: "width",
    key: "width",
  },
  {
    title: "height",
    key: "height",
    dataIndex: "height",
  },
];

const CustomTable = ({
  data,
  loading,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}) => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      showSizeChanger: true,
      showQuickJumper: true,
      position: ["topRight", "bottomRight"],
      current: currentPage,
      pageSize: pageSize,
      onChange: (current, size) => {
        if (pageSize !== size) {
          setCurrentPage(1);
        } else {
          setPageSize(current);
        }
        setCurrentPage(size);
      },
    }}
    loading={loading}
  />
);
export default CustomTable;
