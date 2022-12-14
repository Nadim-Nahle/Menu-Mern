import axios from "../api/axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [click, setClick] = useState(false);

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
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };

  return (
    <div className="home">
      <>
        <div className="menu-items-container">
          <div className="menu-items">
            <div className="items">
              {categories?.map((c) => (
                <div
                  className="menu-scroll title"
                  key={c?._id}
                  onClick={() => scrollTo(`${c?.slug}`)}
                >
                  {c?.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="categories">
          {categories?.map((c) => (
            <div className="category" key={c?._id} id={c?.slug}>
              <div className="category-name title">{c?.name}</div>
              <div className="items">
                {c?.products?.map((p) => (
                  <div className="item" key={p?._id}>
                    <div className="pic-container">
                      <img className="pic" src={p.img} alt="" />
                    </div>
                    <div className="title-container">
                      <div className="title">{p?.name}</div>
                      <div className="price-container">
                        <div>Price: </div>
                        <div className="price">{`${p?.price}`} </div>
                        <div>$ </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Home;
