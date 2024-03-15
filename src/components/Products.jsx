import { useState, useEffect } from "react";
import Edit from "./Edit";
import Sidebar from "./Sidebar";

const Products = ({Arr,setArr}) => {
  const [showAddBtn, setShowAddBtn] = useState(false);

  
  const [inputdata, setinputdata] = useState({
    id: 0,
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  });
  const [updateData, setupdateData] = useState(-1);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(Arr));
  }, [Arr]);

  const handleButtonClick = () => {
    setShowAddBtn((prevShowAddBtn) => !prevShowAddBtn);
  };

  const ChangeHandle = (e) => {
    setinputdata({
      ...inputdata,
      [e.target.name]: e.target.value,
      id: Arr.length + 1,
    });
  };

  let { id, name, category, price, stockQuantity } = inputdata;



  const AddArr = () => {
    if (!name || !category || !price || !stockQuantity) {
      alert("Please fill out all required fields");
      return; 
    }
  
    setArr([...Arr, { id, name, category, price, stockQuantity }]);
    setinputdata({
      id: 0,
      name: "",
      category: "",
      price:"" ,
      stockQuantity: "",
    });
  };


  const update = (id) => {
    setupdateData(id);
  };

  const DeleteData = (curridx) => {
    setArr(Arr.filter((list) => list.id !== curridx));
  };

  return (
    <>
    
      <div className="flex">
        <div className="sidebar-product">
          <Sidebar></Sidebar>
        </div>
        <div className="product-table ">
        <h2 className="flex justify-center bg-gray-50 font-bold w-full"> Products List</h2>

        <div className="">
          <table className="Table" >
            <thead>
              <tr className="bg-gray-200">
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead">Product Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}id="tablehead">Category</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead">Price</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead">Stock Quantity</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead"></th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead"></th>
              </tr>
            </thead>
            <tbody>
              {Arr.map((item, idx) =>
                updateData === item.id ? (
                  <Edit
                    key={item.id}
                    item={item}
                    Arr={Arr}
                    setArr={setArr}
                    setupdateData={setupdateData}
                  />
                ) : (
                  <tr key={item.id} className="tableRow">
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} id="tableData">{item.name}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}id="tableData">{item.category}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}id="tableData">{item.price} $</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}id="tableData">{item.stockQuantity}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}id="tableData">
                      <button
                        onClick={() => update(item.id)}
                        className="Upadtebtn"
                      >
                        Update
                      </button>
                    </td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} className="p-2 w-40" id="tableData">
                      <button
                        onClick={() => DeleteData(item.id)}
                        className="deletebtn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        {showAddBtn && (
          <div className="flex gap-5 mt-5 justify-center adnewdiv">
            <input
              id="addnewinput"
              type="text"
              name="name"
              placeholder="Enter Product Name"
              value={inputdata.name}
              onChange={ChangeHandle}
              className="border border-red-600 border-2px-solid p-2"
              required="name"
            />
            <input
              id="addnewinput"
              type="text"
              name="category"
              placeholder="Enter Category"
              value={inputdata.category}
              onChange={ChangeHandle}
              className="border border-red-600 p-2"
              required
              
              
            />
            <input
              id="addnewinput"
              type="text"
              name="price"
              placeholder="enter price"
              value={inputdata.price}
              onChange={ChangeHandle}
              className="border border-red-600 p-2"
              required
            />
            <input
              id="addnewinput"
              type="text"
              name="stockQuantity"
              placeholder="Enter Stock Quantity"
              value={inputdata.stockQuantity}
              onChange={ChangeHandle}
              className="border border-red-600 p-2"
              required
            />
            <button
              onClick={AddArr}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add
            </button>
            <button onClick={handleButtonClick} className="cnlbtn">
              Cancel
            </button>
          </div>
        )}
        {!showAddBtn && (
          <div>
            <button className="addnew" onClick={handleButtonClick}>
              Add new Product
            </button>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Products;
