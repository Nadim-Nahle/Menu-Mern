import React from "react";
import { useState } from "react";

const Admin = () => {
  const [update, setUpdate] = useState(false);

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
            <tr>
              <td>
                <div className="center">1</div>
                {update ? (
                  <div className="center">
                    <input type="text" />
                  </div>
                ) : null}
              </td>
              <td>
                <div className="center">1</div>
                {update ? (
                  <div className="center">
                    <input type="text" />
                  </div>
                ) : null}
              </td>
              <td>
                <div className="center">1</div>
                {update ? (
                  <div className="center">
                    <select name="" id="">
                      <option value="1">Burger</option>
                    </select>
                  </div>
                ) : null}
              </td>
              <td>
                <div className="center">1</div>
                {update ? (
                  <div className="center">
                    <input type="text" />
                  </div>
                ) : null}
              </td>
              <td className="update">
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
