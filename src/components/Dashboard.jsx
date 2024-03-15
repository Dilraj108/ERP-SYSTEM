import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = ({Arr,orders}) => {
  return (
    <div className="">
      <div className="flex  justify-between border border-solid border-gray-500 px-6 pt-2 bg-gray-100 w-full">
        <div>
        <Link to="/" className="text-2xl font-semibold mb-4">
          Dashboard
        </Link>
        </div>
        <div className=" hidden sm:flex gap-8">
          <a href="" className="text-2xl font-semibold mb-4">
            About
          </a> 
          <a href="" className="text-2xl font-semibold mb-4">
            Contact
          </a>
          <a href="" className="text-2xl font-semibold mb-4">
            Account
          </a>
        </div>
      </div>
      <div className="flex">
        {/* sidebar */}
        <div className="sidebar-product">
          <Sidebar />
        </div>
        {/* main content */}
        <div className="flex-1 p-6 h-screen ">
          <div className="flex gap-32 justify-center">
            <div id="hover"
             
              className=" p-4 rounded-md shadow-md flex justify-center  items-center bg-gray-300 w-64 h-28 "  >
              <h3 className="text-2xl font-semibold mb-2">
                <Link to="/Products">Products</Link>
              </h3>
            </div>

            <div  id="hover" className=" p-4 rounded-md shadow-md flex justify-center items-center bg-gray-300 w-64 h-28">
              <h3 className="text-2xl font-semibold mb-2">
                <Link to="/Orders">Orders</Link>
              </h3>
            </div>
          </div>

        <div className="flex mt-10 justify-center  gap-32">
          <div id="hover" className="p-4 rounded-md shadow-md flex justify-center items-center bg-gray-300 w-64 h-28 ">
            <h3 className="text-2xl font-semibold mb-2 ml-12">
              <Link to="/Orders">Total No of Products:{Arr.length}</Link>
            </h3>
          </div>

          <div  id="hover" className=" p-4 rounded-md shadow-md flex justify-center items-center bg-gray-300 w-64 h-38">
            <h3 className="text-2xl font-semibold mb-2 ml-12 ">
              <Link to="/Orders">Total No of Orders:{orders.length}</Link>
            </h3>
          </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
