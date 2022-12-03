import axios from "../api/axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="home">
      <div className="menu-items-container">
        <div className="menu-items">
          <div className="items">
            {categories?.map((c) => (
              <div key={c?._id}>{c?.name}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="categories">
        {categories?.map((c) => (
          <div className="category" key={c._id}>
            <div className="category-name">{c?.name}</div>
            <div className="items">
              {c?.products?.map((p) => (
                <div className="item">
                  <div className="pic-container">
                    <img className="pic" src={p.img} alt="" />
                  </div>
                  <div className="title-container">
                    <div className="title">{p?.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
