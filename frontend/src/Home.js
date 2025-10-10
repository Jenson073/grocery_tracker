import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, addItem, deleteItem, updateItem } from "./itemsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    if (editId) {
      dispatch(updateItem({ _id: editId, name, quantity }));
      setEditId(null);
    } else {
      dispatch(addItem({ name, quantity }));
    }
    setName("");
    setQuantity("");
  };

  return (
    <div className="home-container">
      <h2>🛒 Manage Your Groceries</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">{editId ? "Update" : "Add"} Item</button>
      </form>

      <ul className="grocery-list">
        {items.map((item) => (
          <li key={item._id} className="list-item">
            <span>
              <b>{item.name}</b> — {item.quantity}
            </span>
            <div className="actions">
              <button
                className="edit"
                onClick={() => {
                  setName(item.name);
                  setQuantity(item.quantity);
                  setEditId(item._id);
                }}
              >
                ✏️
              </button>
              <button className="delete" onClick={() => dispatch(deleteItem(item._id))}>
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
