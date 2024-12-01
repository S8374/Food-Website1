/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { AuthContext } from "../Providers/AuthProviders"; // Adjust import path
import { Button } from "@nextui-org/button";

export const MyFood = () => {
  const { user } = useContext(AuthContext); // Get the current user from context
  const [myFood, setMyFood] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to delete a food item
  const handleDelete = (foodId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, delete the item
        fetch(`https://food-sharing-web-server-nine.vercel.app/deletefood/${foodId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Your food item has been deleted.", "success");
              // Remove the deleted food from the list
              setMyFood((prev) => prev.filter((food) => food._id !== foodId));
            } else {
              Swal.fire("Error", "There was an issue deleting the item.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting food:", error);
            Swal.fire("Error", "There was an issue deleting the item.", "error");
          });
      }
    });
  };
  
  useEffect(() => {
    if (user?.email) { // Check if the user is logged in
      setLoading(true);
      fetch(`https://food-sharing-web-server-nine.vercel.app/addfood`)
        .then((res) => res.json())
        .then((data) => {
          // Filter products added by the logged-in user
          const userProducts = data.filter(
            (product) => product.UserEmail === user.email
          );
          setMyFood(userProducts);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching food data:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (!user) {
    return <p className="text-center text-lg">Please log in to see your food items.</p>;
  }

  return (
    <div>
       <div className="flex justify-start">
      <Button
                    onClick={() => navigate("/")} // Navigate to the home route
                    color="primary" variant="bordered" className='mt-5'
                >
                    Back to Home
                </Button>
      </div>
      <h1 className="text-center text-3xl font1 font-bold">My Added Foods</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader">
          <span className="loading loading-spinner loading-lg"></span>
            </div> 
        </div>
      ) : myFood.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myFood.map((food) => (
            <div
              key={food._id}
              className="border border-gray-200 p-4 rounded-lg shadow"
            >
              <img
                src={
                  food.img ||
                  "https://via.placeholder.com/150"
                }
                alt={food.foodName || "Food Item"}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font1 font-semibold">{food.foodName}</h2>
              <p className="text-gray-600 font4">{food.notes}</p>
              <p className="text-gray-800 font1 font-bold mt-2">
                Category: {food.category || "N/A"}
              </p>
              <button
                onClick={() => handleDelete(food._id)}
                className="mt-4 text-white bg-red-500 font1 hover:bg-red-700 py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg ">No food items added by you.</p>
      )}
    </div>
  );
};
