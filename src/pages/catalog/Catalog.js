import React from "react";
import { useEffect, useState } from "react";
import ProductItem from "../../components/productitem/ProductItem";
import "./style.css";

const Catalog = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://645bc1cd99b618d5f324f70f.mockapi.io/tasks", {
      method: "GET",
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        setTasks(data);
      });
  }, []);

  return (
    <div className="catalog-page">
      {tasks.map(item => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Catalog;
