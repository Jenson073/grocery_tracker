import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL + "/api/items";

// Fetch all items
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// Add a new item
export const addItem = createAsyncThunk("items/addItem", async (item) => {
  const res = await axios.post(API_URL, item);
  return res.data;
});

// Delete an item
export const deleteItem = createAsyncThunk("items/deleteItem", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Update an item
export const updateItem = createAsyncThunk("items/updateItem", async (item) => {
  const res = await axios.put(`${API_URL}/${item._id}`, item);
  return res.data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i._id !== action.payload);
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.items.findIndex((i) => i._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export default itemsSlice.reducer;
