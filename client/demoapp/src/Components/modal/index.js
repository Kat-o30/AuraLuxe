import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ closeModal }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ email: "", password: "" });

  const url = ('http://localhost:5000')
    
  useEffect(() => {
    // axios.get(`${url}/test`)  
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error("Error fetching data:", error));

    const getData = () => {
      axios.get(`${url}/items`)
      .then(response => setItems(response.data))
      .catch(error => console.error("Error fetching data:", error));
    }

    getData();

  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
    console.log('Updated newItem:', newItem);
  }

  const handleAddItem = () => {
    if (newItem.email && newItem.password) {
      axios.post(`${url}/items`, newItem)
        .then(response => {
          setItems([...items, response.data]);
          console.log('Item added:', response.data);
          closeModal();
        })
        .catch(error => console.error('Error adding item:', error));
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className='modal'>
      <form>
        <ul>
          <li className='modal__header'>
            <h1>Sign up to continue</h1>
            <button type="button" onClick={closeModal}><b>&#10005;</b></button>
          </li>
          <li>
            <input
              type="email"
              name="email"
              value={newItem.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              value={newItem.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </li>
          <li>
            <button type="button" onClick={handleAddItem} id='submitButton'>Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Modal;
