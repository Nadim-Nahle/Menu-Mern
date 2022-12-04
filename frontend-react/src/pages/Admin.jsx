import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../api/axios";
import Modal from "../components/Modal";

const Admin = () => {
  const [update, setUpdate] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState();

  const getProducts = async () => {
    const { data } = await axios.get("/products");
    console.log("a", data);
    setProducts(data);
  };
  const getCategories = async () => {
    const { data } = await axios.get("/categories");
    setCategories(data);
  };

  const deleteProduct = async (p) => {
    const { data } = await axios.delete(`/delete/product/${p?._id}`);
    console.log("a", data);
    setData(data);
  };

  const updateProducts = async (p) => {
    try {
      const { data } = await axios.patch(`/product/update/${p?._id}`, {
        name: name ? name : p?.name,
        price: price ? price : p?.price,
        description: description ? description : p?.description,
        category: category ? category : p?.category,
      });
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, [data]);

  return (
    <div className="admin">
      <div className="add" onClick={() => setOpenModal(true)}>
        Add A Product
      </div>
      {openModal ? (
        <Modal close={setOpenModal} categories={categories} setData={setData} />
      ) : null}

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
            {products?.map((p) => (
              <tr key={p?._id}>
                <td>
                  <div className="center">{p?.name}</div>
                  {update ? (
                    <div className="center">
                      <input
                        type="text"
                        onChange={(e) => setName(e.currentTarget.value)}
                      />
                    </div>
                  ) : null}
                </td>
                <td>
                  <div className="center">{p?.price}</div>
                  {update ? (
                    <div className="center">
                      <input
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  ) : null}
                </td>
                <td>
                  <div className="center">{p?.categoryName}</div>
                  {update ? (
                    <div className="center">
                      <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select A Category</option>

                        {categories?.map((c) => (
                          <option key={c?._id} value={c?._id}>
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
                      <textarea
                        type="text"
                        onChange={(e) => setDescription(e.currentTarget.value)}
                      />
                    </div>
                  ) : null}
                </td>
                <td>
                  <div className="center">
                    <button
                      className="delete-btn"
                      onClick={() => deleteProduct(p)}
                    >
                      Delete
                    </button>
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
                    <button
                      className="update-btn"
                      onClick={() => updateProducts(p)}
                    >
                      Save
                    </button>
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
