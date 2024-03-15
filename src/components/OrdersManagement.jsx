import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const OrdersManagement = ({orders,setOrders}) => {
 

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isshowupdate, setData] = useState(false);
  const [updatedStatus, setUpdatedStatus] = useState("");

  const setShowUpdate = () => {
    setData(!isshowupdate);
  };

  const viewOrderDetails = (orderId) => {
    const selected = orders.find((order) => order.id === orderId);
    setSelectedOrder(selected);
  };

  const updateOrderStatus = (orderId) => {
    if (updatedStatus.trim() === "") {
      alert("Please provide a valid status");
      return;
    }
    setData(!isshowupdate);
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: updatedStatus } : order
      )
    );
    setUpdatedStatus("");
    setSelectedOrder(null);
  };

  const deleteOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(null);
    }
  };

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <>
      <div className="flex">
        <div className="sidebar-product">
          <Sidebar></Sidebar>
        </div>
        <div className="product-table">
          <div>
            <h2 className="flex justify-center font-bold bg-gray-50 w-full ">Orders Management</h2>
            <table className="Table">
              <thead>
                <tr className="bg-gray-200">
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead">Order ID</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead">Customer Name</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead">Order Date</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead">Status</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead"></th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }} id="tablehead"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="tableRow">
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} id="tableData">{order.id}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} id="tableData">{order.customerName}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} id="tableData">{order.orderDate}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} id="tableData">{order.status}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} id="tableData">
                      <button
                        className="Upadtebtn"
                        onClick={() => viewOrderDetails(order.id)}
                      >
                        View Details
                      </button>
                    </td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }} id="tableData" className="p-2 w-40">
                      <button
                        className="deletebtn"
                        onClick={() => deleteOrder(order.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {selectedOrder && (
              <div className="updateStatus">
                <table className="updatetable">
                  <thead>
                    <tr>
                      <th className="update-tablehead">Order Details</th>
                    </tr>
                  </thead>
                  <tbody className="update-ablebody">
                    <tr>
                      <td className="update-tablerow">Order ID:</td>
                      <td className="update-tablerow">{selectedOrder.id}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="update-tablerow">Customer Name:</td>
                      <td className="update-tablerow">
                        {selectedOrder.customerName}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="update-tablerow">Order Date:</td>
                      <td className="update-tablerow">
                        {selectedOrder.orderDate}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="update-tablerow">Status: </td>
                      <td className="update-tablerow">
                        {selectedOrder.status}
                      </td>
                      <td className="update-tablerow ">
                        <button
                          className="Upadtebtn Upadtebtn"
                          onClick={() => setShowUpdate()}
                        >
                          Update Status
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {isshowupdate && (
                  <div className="ml-8">
                    <button
                      className="save-order"
                      onClick={() => updateOrderStatus(selectedOrder.id)}
                    >
                      Save
                    </button>
                    <input
                      className="statusinput"
                      type="text"
                      placeholder="Enter New Status"
                      value={updatedStatus}
                      onChange={(e) => setUpdatedStatus(e.target.value)}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersManagement;
