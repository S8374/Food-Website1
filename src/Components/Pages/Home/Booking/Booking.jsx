import * as React from "react";

export const Booking = () => {
  return (
    <div className="mt-12">
      <div className="relative font4 bg-[#3586FF] flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://media.istockphoto.com/id/1248298359/photo/luxury-restaurant-interior-at-night.jpg?s=612x612&w=0&k=20&c=Uy2slhNJFTcHdQfRG5bSsOsFfl7J10a5ub5ZVofk-6c="
            alt=""
          />
        </div>
        <div className="relative h-[450px] flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="flex justify-center text-center mt-6 ml-10">
            <h1 className="font1 text-white text-3xl">Book A Table</h1>
          </div>

          <hr className="text-black" />
          <form className="px-7 mt-6 grid justify-center items-center">
            <div className="grid gap-6" id="form">
              <div className="w-full flex gap-3">
                <input
                  className="capitalize shadow-2xl p-2 md:p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                  type="text"
                  placeholder="Your Name"
                  id="First-Name"
                  name="First-Name"
                  required
                />
                <input
                  className="p-2 md:p-3 capitalize shadow-2xl bg-white glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                  type="number"
                  placeholder="Phone Number"
                  id="Last-Name"
                  name="Last-Name"
                />
              </div>
              <div className="grid gap-6 w-full">
                <input
                  className="p-2 md:p-3 shadow-2xl bg-white glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                  type="email"
                  placeholder="Email"
                  id="Email"
                  name="email"
                />
                <input
                  className="p-2 md:p-3 shadow-2xl bg-white glass w-full text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                  type="date"
                  required
                />
              </div>
              <div className="flex gap-3">
                <div className="w-full">
                  <select
                    className="p-2 md:p-3 shadow-2xl bg-white glass w-full text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    name="securityQuestion"
                    id="securityQuestion"
                    required
                  >
                    <option value="" disabled selected>
                      Select a Time
                    </option>
                    <option value="pet">10Am-11Am</option>
                    <option value="school">11Am-12AM</option>
                    <option value="school">1Pm-2Pm</option>
                    <option value="school">3Pm-4Pm</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    className="p-2 md:p-3 shadow-2xl bg-white glass w-full text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    name="securityQuestion"
                    id="securityQuestion"
                    required
                  >
                    <option value="" disabled selected>
                      Select a Person
                    </option>
                    <option value="pet">1People</option>
                    <option value="school">2People</option>
                    <option value="school">3People</option>
                    <option value="school">4People</option>
                  </select>
                </div>
              </div>
              <button
                className="outline-none glass shadow-2xl w-full p-2 md:p-3 bg-black hover:border-[#fff] hover:border-solid hover:border-[1px] text-white font-bold"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
