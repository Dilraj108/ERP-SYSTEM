const Edit = ({ item, Arr, setArr, setupdateData }) => {
  const handleInputChange = (e) => {
    // Handle input changes without updating the array immediately
    // Store the changes in the local state
    setArr((prevArr) =>
      prevArr.map((li) =>
        li.id === item.id ? { ...li, [e.target.name]: e.target.value } : li
      )
    );
  };

  const handleUpdate = () => {
    // Handle the actual update when the "Update" button is clicked
    setupdateData(-1); // Reset the updateData state
  };

  return (
    <tr key={item.id}>
      <td className="p-2">
        <input
        id="editinput"
          type="text"
          onChange={handleInputChange}
          name="name"
          value={item.name}
          className="border border-gray-300 p-0"
        />
      </td>
      <td className="p-2">
        <input
        id="editinput"
          type="text"
          onChange={handleInputChange}
          name="category"
          value={item.category}
          className="border border-gray-300 p-0"
        />
      </td>
      <td className="p-2">
        <input
        id="editinput"
          type="text"
          onChange={handleInputChange}
          name="price"
          value={item.price}
          className="border border-gray-300 p-0"
        />
      </td>
      <td className="p-2">
        <input
        id="editinput"
          type="text"
          onChange={handleInputChange}
          name="stockQuantity"
          value={item.stockQuantity}
          className="border border-gray-300 p-0"
        />
      </td>
      <td className="p-2">
        <button
          type="button"
          onClick={handleUpdate}
          className="Upadtebtn"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default Edit;
