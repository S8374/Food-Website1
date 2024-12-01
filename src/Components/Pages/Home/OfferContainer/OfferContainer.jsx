import React, { useRef } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./OfferContainer.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const OfferContainer = () => {
  // Ref for Swiper instance
  const swiperRef = useRef(null);

  return (
    <div className="mt-14 font4 ">
      <div className="py-8">
        <div className="flex justify-between px-14">
          <div className="">
            <div className="flex items-center">
              <h2 className="font4 text-3xl text-[#3586FF]">Daily offer</h2>
              <img
                className="w-10 h-10"
                src="https://th.bing.com/th/id/OIP.-V4_d9DQhwRqR0U2ukQ6LwHaHa?pid=ImgDet&w=191&h=191&c=7"
                alt="Daily Offer"
              />
            </div>
            <h2 className="font1 text-4xl">up to 75% off for this day</h2>
          </div>
          <div className="flex justify-center items-center  ">
            {/* Left Arrow */}
            <FaArrowCircleLeft
              className="cursor-pointer text-3xl text-[#3586FF]"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            {/* Right Arrow */}
            <FaArrowCircleRight
              className="cursor-pointer text-3xl text-[#3586FF] ml-10"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>

   <div className="mt-7">
   <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Set Swiper instance
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false} // Disable default navigation (we use custom icons)
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide className=" ">
            <div className="flex gap-8">
              <div className="flex flex-col justify-center ">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                  {/* Image Section */}
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img
                      src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
                      alt="Vacation"
                      className="rounded-xl"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 font-medium hidden md:block">
                        Vacations
                      </p>
                      <div className="flex items-center">
                        {/* Star Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-gray-600 font-bold text-sm ml-1">
                          4.96{" "}
                          <span className="text-gray-500 font-normal">
                            (76 reviews)
                          </span>
                        </p>
                      </div>
                      {/* Heart Icon */}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-pink-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                        Superhost
                      </div>
                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                      The Majestic and Wonderful Bahamas
                    </h3>
                    <p className="md:text-lg text-gray-500 text-base">
                      The best kept secret of The Bahamas is the country’s sheer
                      size and diversity. With 16 major islands, The Bahamas is
                      an unmatched destination
                    </p>
                    <p className="text-xl font-black text-gray-800">
                      $110{" "}
                      <span className="font-normal text-gray-600 text-base">
                        /night
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center ">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                  {/* Image Section */}
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img
                      src="https://media.istockphoto.com/id/1051820324/photo/beef-burger-for-hamburger-on-barbecue-flame-grill.jpg?s=612x612&w=0&k=20&c=8H2sf5qfU-MEMnNybYp2R3vbTZRjiP1VKvQf1RHT0t8="
                      className="rounded-xl"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 font-medium hidden md:block">
                        Vacations
                      </p>
                      <div className="flex items-center">
                        {/* Star Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-gray-600 font-bold text-sm ml-1">
                          4.96{" "}
                          <span className="text-gray-500 font-normal">
                            (76 reviews)
                          </span>
                        </p>
                      </div>
                      {/* Heart Icon */}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-pink-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                        Superhost
                      </div>
                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                      The Majestic and Wonderful Bahamas
                    </h3>
                    <p className="md:text-lg text-gray-500 text-base">
                      The best kept secret of The Bahamas is the country’s sheer
                      size and diversity. With 16 major islands, The Bahamas is
                      an unmatched destination
                    </p>
                    <p className="text-xl font-black text-gray-800">
                      $110{" "}
                      <span className="font-normal text-gray-600 text-base">
                        /night
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-8">
              <div className="flex flex-col justify-center ">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                  {/* Image Section */}
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img
                      src="https://media.istockphoto.com/id/104704117/photo/restaurant-plates.jpg?s=612x612&w=0&k=20&c=MhFdN_qVgzoHov-kgFx0qWSW0nZht4lZV1zinC3Ea44="
                      alt="Vacation"
                      className="rounded-xl"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 font-medium hidden md:block">
                        Vacations
                      </p>
                      <div className="flex items-center">
                        {/* Star Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-gray-600 font-bold text-sm ml-1">
                          4.96{" "}
                          <span className="text-gray-500 font-normal">
                            (76 reviews)
                          </span>
                        </p>
                      </div>
                      {/* Heart Icon */}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-pink-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                        Superhost
                      </div>
                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                      The Majestic and Wonderful Bahamas
                    </h3>
                    <p className="md:text-lg text-gray-500 text-base">
                      The best kept secret of The Bahamas is the country’s sheer
                      size and diversity. With 16 major islands, The Bahamas is
                      an unmatched destination
                    </p>
                    <p className="text-xl font-black text-gray-800">
                      $110{" "}
                      <span className="font-normal text-gray-600 text-base">
                        /night
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center ">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                  {/* Image Section */}
                  <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img
                      src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=5ro7Cvwx79tWpyN1r2hy3DwplFi5FuPrD_4DYD8tZpg="
                      alt="Vacation"
                      className="rounded-xl"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 font-medium hidden md:block">
                        Vacations
                      </p>
                      <div className="flex items-center">
                        {/* Star Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-gray-600 font-bold text-sm ml-1">
                          4.96{" "}
                          <span className="text-gray-500 font-normal">
                            (76 reviews)
                          </span>
                        </p>
                      </div>
                      {/* Heart Icon */}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-pink-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                        Superhost
                      </div>
                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                      The Majestic and Wonderful Bahamas
                    </h3>
                    <p className="md:text-lg text-gray-500 text-base">
                      The best kept secret of The Bahamas is the country’s sheer
                      size and diversity. With 16 major islands, The Bahamas is
                      an unmatched destination
                    </p>
                    <p className="text-xl font-black text-gray-800">
                      $110{" "}
                      <span className="font-normal text-gray-600 text-base">
                        /night
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
   </div>
      </div>
    </div>
  );
};
