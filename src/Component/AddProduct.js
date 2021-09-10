import React from 'react'
import "./Style.css"
const AddProduct = () => {
    return (
        
        <div className="field">
            <h2>Add Product</h2>
            <label htmlFor="">Product name</label>
            <input type="text" />
            <label htmlFor="">quantity</label>
            <input type="number" />
            <label htmlFor="">Categories</label>
            <input type="text" />
            <label htmlFor="">price</label>
            <input type="number" />
            <label htmlFor="">pic</label>
          <input type="file" name="" id="" />
          <button>Add</button>
        </div>
    )
}

export default AddProduct
