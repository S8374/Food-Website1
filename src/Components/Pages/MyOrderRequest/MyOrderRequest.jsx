import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";


export const MyOrderRequest = () => {
    const initialOrderData = useLoaderData(); // Assume this is an array of orders
    const [orders, setOrders] = useState(initialOrderData); // Local state for real-time updates
    const navigate = useNavigate(); // Hook for navigation
    const { user } = useContext(AuthContext);

    // Filter orders to show only those that match the logged-in user's email
    const filteredOrders = orders.filter(order => order.userEmail === user.email);

    const handelOrderConfirm = async (clickedID) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to confirm this order?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, confirm it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-sharing-web-server-nine.vercel.app/orderFood/${clickedID}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status: "Confirmed" }),
                })
                    .then((res) => res.json())
                    .then(() => {
                        Swal.fire("Confirmed!", "Order has been confirmed.", "success");
                        setOrders((prevOrders) =>
                            prevOrders.map((order) =>
                                order._id === clickedID ? { ...order, status: "Confirmed" } : order
                            )
                        );
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        Swal.fire("Error!", "Failed to confirm order.", "error");
                    });
            }
        });
    };

    const handleDeleteOrder = async (clickedID) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this order?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-sharing-web-server-nine.vercel.app/orderFood/${clickedID}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {
                        Swal.fire("Deleted!", "Order has been deleted.", "success");
                        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== clickedID));
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        Swal.fire("Error!", "Failed to delete order.", "error");
                    });
            }
        });
    };

    return (
        <div className="p-4">
            {/* Back to Home Button */}
            <div className="flex justify-start mb-4">
                <Button
                    onClick={() => navigate("/")}
                    color="primary"
                    variant="bordered"
                >
                    Back to Home
                </Button>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="table-auto w-full text-left border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-gray-600">#</th>
                            <th className="p-4 text-gray-600">Name</th>
                            <th className="p-4 text-gray-600">Category</th>
                            <th className="p-4 text-gray-600">Status</th>
                            <th className="p-4 text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((orderData, index) => (
                            <tr
                                key={orderData._id || index}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={
                                                        orderData.img ||
                                                        "https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    }
                                                    alt={orderData.foodName || "Avatar"}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{orderData.foodName || "Unknown Name"}</div>
                                            <div className="text-sm text-gray-500">
                                                {orderData.location || "Unknown Location"}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">{orderData.category || "Unknown Category"}</td>
                                <td className="p-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            orderData.status === "Confirmed"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-yellow-100 text-yellow-600"
                                        }`}
                                    >
                                        {orderData.status || "Pending"}
                                    </span>
                                </td>
                                <td className="p-4 flex flex-col lg:flex-row items-start lg:items-center gap-3">
                                    {orderData.status === "Confirmed" ? (
                                        <Button disabled color="success" variant="bordered">
                                            Confirmed
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() => handelOrderConfirm(orderData._id)}
                                            color="primary"
                                            variant="bordered"
                                        >
                                            Confirm
                                        </Button>
                                    )}
                                    <Button
                                        onClick={() => handleDeleteOrder(orderData._id)}
                                        color="error"
                                        variant="bordered"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
