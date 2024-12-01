import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
export const Availavlefood = () => {
  const [allFood, setAllFood] = useState([]); // Initialize with an empty array
  const [filteredFood, setFilteredFood] = useState([]); // Filtered results for search
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [loading, setLoading] = useState(false); // Loader state
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    setLoading(true);
    fetch(`https://food-sharing-web-server-nine.vercel.app/addfood`)
      .then((res) => res.json())
      .then((data) => {
        setAllFood(data);
        setFilteredFood(data); // Initialize filtered food with all data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching food data:", err);
        setLoading(false);
      });
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim()) {
      setLoading(true);
      setTimeout(() => {
        const results = allFood.filter((food) =>
          food.foodName.toLowerCase().includes(query)
        );
        setFilteredFood(results);
        setLoading(false);
      }, 500); // Simulate loader delay for search
    } else {
      setFilteredFood(allFood);
    }
  };

  return (
    <div className="space-y-8 px-4 md:px-8 lg:px-12">
      {/* Back to Home Button */}
      <div className="flex justify-start">
      <Button
                    onClick={() => navigate("/")} // Navigate to the home route
                    color="primary" variant="bordered" className='mt-5'
                >
                    Back to Home
                </Button>
      </div>

      <div className="text-center">
        <h1 className="font-bold font1 text-4xl text-gray-800">Available Food</h1>
        <p className="text-lg font4 text-gray-600 mt-2">
          You can see all food and make an order to find delicious food.
        </p>
      </div>

      {/* Search Input */}
      <div>
        <div className="relative bg-gray-100 rounded border border-blue-500 flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search Items"
            className="bg-transparent text-gray-600 px-4 py-2 w-full focus:outline-none"
          />
          <button className="py-2 px-6 bg-blue-500 text-white rounded-r hover:bg-blue-600">
            Submit
          </button>
        </div>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFood.map((Food) => (
            <div key={Food._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={
                    Food.img ||
                    "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  }
                  alt={Food.foodName || "Food Image"}
                  className="w-full font1 h-48 object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font1 text-lg font-bold text-gray-800">
                  {Food.foodName}
                </h2>
                <p className="text-sm font4 text-lg text-gray-600">
                  {Food.notes || "Delicious food available for ordering."}
                </p>
                <p className="text-gray-700 font1 font-medium">
                  Category: {Food.category || "N/A"}
                </p>
                <div className="card-actions justify-end">
                  <NavLink
                    to={`/details/${Food._id}`}
                    className="btn font1 btn-primary"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
