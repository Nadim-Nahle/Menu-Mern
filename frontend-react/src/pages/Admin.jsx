import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../api/axios";

const Admin = () => {
  const [update, setUpdate] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get("/products");
    console.log("a", data);
    setProducts(data);
  };
  const getCategories = async () => {
    const { data } = await axios.get("/categories");
    console.log("a", data);
    setCategories(data);
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="admin">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <div className="center">Name</div>
              </th>
              <th>
                <div className="center">Price</div>
              </th>
              <th>
                <div className="center">Category</div>
              </th>
              <th>
                <div className="center">Description</div>
              </th>
              <th>
                <div className="center">Delete</div>
              </th>
              <th>
                <div className="center">Update</div>
              </th>
              <th>
                <div className="center">Save</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr>
                <td>
                  <div className="center">{p?.name}</div>
                  {update ? (
                    <div className="center">
                      <input type="text" />
                    </div>
                  ) : null}
                </td>
                <td>
                  <div className="center">{p?.price}</div>
                  {update ? (
                    <div className="center">
                      <input type="text" />
                    </div>
                  ) : null}
                </td>
                <td>
                  <div className="center">{p?.categoryName}</div>
                  {update ? (
                    <div className="center">
                      <select name="" id="">
                        {categories.map((c) => (
                          <option key={c?._id} value={c?.slug}>
                            {c?.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}
                </td>
                <td>
                  <div className="center desc">
                    {p?.description.substring(0, 150)}
                    ...
                  </div>
                  {update ? (
                    <div className="center">
                      <textarea type="text" />
                    </div>
                  ) : null}
                </td>
                <td>
                  <div className="center">
                    <button className="delete-btn">Delete</button>
                  </div>
                </td>
                <td>
                  <div className="center">
                    <button
                      className="delete-btn"
                      onClick={() => {
                        setUpdate(!update);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </td>
                <td>
                  <div className="center">
                    <button className="delete-btn">Save</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
