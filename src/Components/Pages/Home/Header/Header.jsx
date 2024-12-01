import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import "./Header.css";
import logo from "../../../../Img/time.png";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  DropdownTrigger,
  Avatar,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In
  const { createUser, logIn, user ,logOut ,googleSignIn  } = useContext(AuthContext);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    confirmPassword: "",
    photoUrl: "", // To store the photo URL
  });

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Available Foods", path: "/available" },
    { name: "Add Food", path: "/addfood" },
    { name: "My Foods", path: "/myfoods" },
    { name: "My Order Request", path: "/myfoodrequest" },
  ];

  // Handle changes for Sign In fields
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle changes for Sign Up fields
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle photo input for Sign Up
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setSignUpData((prevData) => ({ ...prevData, photoUrl: objectUrl }));
    }
  };

  // Handle Sign In
  const handleSignIn = (e) => {
    e.preventDefault();
    // console.log("Sign In form", signInData.email);
    // const form = e.target ;
    // const email = form.email.target ;
    // const password = form.password.target  ;
    logIn( signInData.email, signInData.password)
      .then((result) => {
          if(result.user){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Sign In Successful",
              showConfirmButton: false,
              timer: 1500,
            });
         
            setIsSignUp(false); // Set to false if you want to switch to sign-in form
            setIsModalOpen(false);
            form.reset(); // Reset form after success
          }
      })
      .catch((error) => {
        console.error("Error signing in user", error);
      });
  };

  // Handle Sign Up
  const handleSignUp = (e) => {
    e.preventDefault();
    // console.log("Sign Up form", signUpData);

    createUser(signUpData.email, signUpData.confirmPassword)
      .then((result) => {
        const user = result.user;
        // console.log("User created:", user); // Check if user is created

        // Ensure user is valid before updating profile
        if (user) {
          updateProfile(user, {
            displayName: signUpData.name,
            photoURL: signUpData.photoUrl, // Ensure photo URL is set correctly
          }).then(() => {
            // console.log("User profile updated"); // Ensure profile update happens

            // SweetAlert2 for success
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Account Create Succsessfully",
              showConfirmButton: false,
              timer: 1500,
            });

            // Close modal and reset form
            setIsSignUp(false); // Set to false if you want to switch to sign-in form
            setIsModalOpen(false);
            form.reset(); // Reset form after success
          });
        }
      })
      .catch((error) => {
        console.error("Error creating user", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "User creation failed!",
        });
      });
  };


  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      // console.log("Google Sign-In Successful:", result.user);
  
      // Close the signup modal
      setIsModalOpen(false);
  
      // Show success alert
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign In Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
  
      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };
  

  const handelLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut(); // Perform the logout action
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  
  return (
    <>
      {/* Navbar */}
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="w-full bg-white"
      >
        {/* Mobile Menu Toggle */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* Centered Brand and Navigation Links */}
        <NavbarContent className="sm:flex lg:gap-28">
          <NavbarContent className="hidden sm:flex items-center">
            <div className="py-4 header-logo">
              <img src={logo} alt="Logo" />
            </div>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex  font1 gap-8 text-xl">
            {menuItems.map((item) => (
              <NavbarItem key={item.name} className="text-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-700"
                  }
                >
                  {item.name}
                </NavLink>
              </NavbarItem>
            ))}
          </NavbarContent>

          {/* Right-Aligned Items */}
          <NavbarContent justify="end">
            {user ? (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color=""
                    name={user?.displayName || "User"}
                    size="sm"
                    src={
                      user?.photoURL ||
                      "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    } // Fallback to a default avatar if no photoURL
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{user?.email}</p>{" "}
                    {/* Display dynamic user email */}
                  </DropdownItem>

                  <DropdownItem key="logout" color="danger" onClick={handelLogOut}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem className="border-[1px] px-4 bg-[#3586FF]">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  color="warning"
                  variant="flat"
                  className="bg-[#3586FF] text-white"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            )}
          </NavbarContent>
        </NavbarContent>

        {/* Mobile Dropdown Menu */}
        <NavbarMenu className="navbar-menu">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index} className="navbar-menu-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-700"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-xl text-gray-500"
            >
              &times; {/* Close button at the top-right */}
            </button>
            <h3 className="font-bold text-2xl mb-2 font1 text-center">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h3>
            <p className="py-2 text-gray-600 text-center">
              {isSignUp
                ? "Create an account to access exclusive features."
                : "Log in to your account."}
            </p>
            <div className="space-y-4">
              {/* Sign In Fields */}
              {!isSignUp && (
                <form className="space-y-6" onSubmit={handleSignIn}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signInData.email}
                    onChange={handleSignInChange}
                    className="input input-bordered w-full"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signInData.password}
                    onChange={handleSignInChange}
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-primary w-full" type="submit">
                    Sign In
                  </button>
                </form>
              )}

              {/* Sign Up Fields */}
              {isSignUp && (
                <form className="space-y-6" onSubmit={handleSignUp}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={signUpData.name}
                    onChange={handleSignUpChange}
                    className="input input-bordered w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    className="input input-bordered w-full"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Password"
                    value={signUpData.confirmPassword}
                    onChange={handleSignUpChange}
                    className="input input-bordered w-full"
                  />

                  {/* File Input with Label */}
                  <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="input input-bordered w-full"
                  />

                  {/* Display Photo URL in Input Field */}
                  {signUpData.photoUrl && (
                    <input
                      type="text"
                      value={signUpData.photoUrl}
                      readOnly
                      className="input input-bordered w-full"
                      placeholder="Photo URL"
                    />
                  )}

                  <button className="btn btn-primary w-full" type="submit">
                    Sign Up
                  </button>
                </form>
              )}

              {/* Google Login Button */}
              <button onClick={handleGoogleSignIn} className="btn w-full bg-blue-500 text-white hover:bg-blue-700 flex items-center justify-center space-x-2 mt-4">
                <FcGoogle className="text-2xl" />
                <span>Sign In with Google</span>
              </button>

              {/* Toggle between Sign In and Sign Up */}
              <div className="text-center mt-4">
                <p>
                  {isSignUp ? (
                    <span>
                      Already have an account?{" "}
                      <button
                        className="text-blue-500"
                        onClick={() => setIsSignUp(false)}
                      >
                        Sign In
                      </button>
                    </span>
                  ) : (
                    <span>
                      Don't have an account?{" "}
                      <button
                        className="text-blue-500"
                        onClick={() => setIsSignUp(true)}
                      >
                        Sign Up
                      </button>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
