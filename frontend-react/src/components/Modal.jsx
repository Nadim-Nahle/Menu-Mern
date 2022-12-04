import React, { useState } from "react";
import axios from "../api/axios";

const Modal = ({ close, categories, setData }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState();
  const [img, setImg] = useState("");

  const addProduct = async () => {
    try {
      const { data } = await axios.post(`/add/product/`, {
        name,
        price,
        description,
        category,
        img,
      });
      console.log(data);
      console.log(img);
      setData(data);
      close(false);
    } catch (error) {
      console.log(img);
      console.log(error);
    }
  };

  const uploadimg = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBased64(file);
  };

  const onLoad = (fileString) => {
    setImg(fileString);
  };

  const getBased64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal">
          <div className="name">
            <div className="label-container">
              <label className="label" htmlFor="name">
                Name
              </label>
            </div>
            <input
              className="input"
              type="text"
              name=""
              id=""
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>

          <div className="name">
            <div className="label-container">
              <label className="label" htmlFor="name">
                Price
              </label>
            </div>
            <input
              className="input"
              type="number"
              name=""
              id=""
              onChange={(e) => setPrice(e.currentTarget.value)}
            />
          </div>
          <div className="name">
            <div className="label-container">
              <label className="label" htmlFor="name">
                Picture
              </label>
            </div>
            <input
              className="input"
              type="file"
              name=""
              id=""
              onChange={uploadimg}
            />
          </div>
          <div className="name">
            <div className="label-container">
              <label className="label" htmlFor="name">
                Category
              </label>
            </div>
            <select
              className="option"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Please Select A Category</option>
              {categories?.map((c) => (
                <option key={c?._id} value={c?._id}>
                  {c?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="name">
            <div className="label-container">
              <label className="label" htmlFor="name">
                Description
              </label>
            </div>
            <textarea
              className="input"
              type="text"
              name=""
              id=""
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
        </div>
        <button className="close" onClick={() => addProduct()}>
          Save
        </button>
        <div className="x" onClick={() => close(false)}>
          X
        </div>
      </div>
    </div>
  );
};

export default Modal;
