import { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./FoodMenu.css";
import { NavLink } from "react-router-dom";

export const FoodMenu = ({ AllI }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Menu");
  const [showAll, setShowAll] = useState(false); // State to control showing all cards
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a delay for loading data (e.g., API fetch)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  // Filter items based on the selected category
  const filteredItems =
    selectedCategory === "All Menu"
      ? AllI
      : AllI.filter((item) => item.category === selectedCategory);

  // Show only first 6 items unless showAll is true
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 lg:px-14">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <h2 className="font4 text-2xl lg:text-3xl text-[#3586FF]">
              Food Menu
            </h2>
            <img
              className="w-8 h-8 lg:w-10 lg:h-10"
              src="https://th.bing.com/th/id/OIP.-V4_d9DQhwRqR0U2ukQ6LwHaHa?pid=ImgDet&w=191&h=191&c=7"
              alt="Daily Offer"
            />
          </div>
          <h2 className="font1 text-2xl lg:text-4xl mt-2">
            Popular Delicious Foods
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {["All Menu", "Burger", "Chicken", "Pizza", "Dessert"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border-2 font1 px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base font-semibold shadow-md transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#3586FF] text-white border-[#3586FF]"
                    : "bg-white text-[#3586FF] border-[#3586FF] hover:bg-[#3586FF] hover:text-white"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Food Items Section */}
      {isLoading ? (
        <div className="flex justify-center items-center py-16">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <TransitionGroup className="grid py-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {displayedItems.map((it) => (
            <CSSTransition key={it._id} timeout={300} classNames="fade">
              <div className="Food-con">
                <img
                  src={
                    it.img ||
                    "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZlZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="vegan"
                />
                <div id="card" className="p-4">
                  <div className="text-center">
                    <h1 className="text-2xl font1 lg:text-3xl font-bold text-white flex items-center justify-center">
                      {it.category} <span className="ml-2">👍</span>
                    </h1>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font4 lg:text-base text-white">
                      {it.notes}
                    </p>
                  </div>
                  <NavLink
                    to={`/details/${it._id}`}
                    className="w-full font1 text-center mt-4 border-2 border-white px-3 py-2 bg-white text-black font-semibold shadow-md hover:bg-[#3586FF] hover:text-white transition-all duration-200"
                  >
                    See Details
                  </NavLink>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}

      {/* Show All Button */}
      {filteredItems.length > 6 && !showAll && !isLoading && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="border-2 px-4 py-2 bg-[#3586FF] text-white font1 font-semibold shadow-md hover:bg-[#3586FF] hover:text-white transition-all duration-200"
          >
            Show All
          </button>
        </div>
      )}
      {showAll && !isLoading && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(false)}
            className="border-2 px-4 py-2 bg-[#3586FF] text-white font-semibold shadow-md hover:bg-[#3586FF] hover:text-white transition-all duration-200"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};
