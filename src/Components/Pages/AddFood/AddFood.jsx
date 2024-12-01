import * as React from "react";
import { FaMapMarkerAlt, FaUpload } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

export const AddFood = () => {
  const [location, setLocation] = React.useState("");
  const [photoUrl, setPhotoUrl] = React.useState("");
  const navigate = useNavigate(); // Hook for navigation
const {user} = React.useContext(AuthContext)
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        () => {
          alert("Unable to retrieve location. Please try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };


  const handelAddFood = (e) => {
    e.preventDefault();

    // Collect form data
    const form = e.target;
    const email = form.email.value;
    const foodName = form.foodname.value;
    const img = form.img.value;
    const category = form.category.value;
    const available = form.available.value ;
    const expiryDate = form.querySelector("input[type='date']").value;
    const discount = form.discount.value;
    const notes = form.notes.value;

    // Validate inputs
    if (!email || !foodName || !img || !category || !expiryDate) {
      alert("Please fill in all required fields.");
      return;
    }

    // Prepare data object
    const foodData = {
      email,
      foodName,
      img,
      category,
      expiryDate,
      discount,
      notes,
      location,
      available,
      UserEmail:user.email
    };

    // console.log("Food data to be submitted:", foodData);

    // Example: Send data to server
    fetch("https://food-sharing-web-server-nine.vercel.app/addfood", {
    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset(); // Reset the form
          setPhotoUrl(""); // Clear photo URL state
          setLocation(""); // Clear location state
        } else {
          return response.json().then((data) => {
            throw new Error(data.message || "Failed to add food.");
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(error.message);
      });
 
  };

  return (
    <div className="flex flex-col items-center justify-center h-[140vh] ">
       <div className="flex justify-start">
   
      </div>
      <div className="text-center mb-6">
        <h1 className="text-2xl font1 text-5xl font-bold">
          Add Your Delicious Food
        </h1>
        <p className="text-gray-600 font4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          aspernatur debitis minus ad, voluptates tempore.
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handelAddFood}
        className="w-full max-w-4xl font4 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {/* Email Input */}
        <input
          type="email"
          name="email"
         required
          placeholder="Your Email"
          className="input input-bordered w-full"
        />

        {/* Food Name Input */}
        <input
          type="text"
          required
          placeholder="Food Name"
          name="foodname"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          required
          placeholder="image URL"
          name="img"
          className="input input-bordered w-full"
        />

     
        {/* Category Select */}
        <select name="category" required className="select select-bordered w-full">
          <option disabled >
            Select Category
          </option>
          <option>Burger</option>
          <option>Chicken</option>
          <option>Pizza</option>
          <option>Dessert</option>
        </select>

        {/* Expiry Date Input */}
        <input
          type="date"
          required
          placeholder="Enter Expiry Date & Time"
          className="input input-bordered w-full"
        />

        {/* Discount Select */}
        <select name="discount" required className="select select-bordered w-full">
          <option disabled selected>
            Give Discount
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        {/* Discount Select */}
        <select name="available" required className="select select-bordered w-full">
          <option disabled selected>
            Available
          </option>
          <option>Available</option>
          <option>Out Of Stock</option>
        </select>

        {/* Location Input with Location Icon */}
        <div className="relative w-full">
          <input
            type="text"
            required
            placeholder="Your Location"
            name="location"
            value={location}
            className="input input-bordered w-full pl-10 pr-12"
            readOnly
          />
          <button
            type="button"
            onClick={handleLocationClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer pl-3"
          >
            <FaMapMarkerAlt size={18} />
          </button>
        </div>

        {/* Additional Notes Input */}
        <input
          type="text"
          placeholder="Additional Notes"
          name="notes"
          className="input input-bordered w-full"
        />
        {/* Add Food Button */}
        <button className="btn font1 btn-primary  w-full py-3 mt-4 max-w-md">
          Add Food
        </button>
        <Button
                    onClick={() => navigate("/")} // Navigate to the home route
                    color="primary" variant="bordered" className='mt-5'
                >
                    Back to Home
                </Button>
      </form>
    </div>
  );
};
