import * as React from 'react';
import './FoodDetails.css';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { AuthContext } from '../../Providers/AuthProviders';

export const FoodDetails = () => {
    const { id } = useParams(); // Get the clicked food ID
const {user} = React.useContext(AuthContext)
    const clickedIdDetails = useLoaderData(); // Fetch details using useLoaderData
    // console.log('Clicked Id details', clickedIdDetails);
    // console.log('clicked id', id);
    const { foodName, available } = clickedIdDetails; // Destructure details

    const handelOrderService = () => {
        if (available !== "Available") {
            Swal.fire({
                icon: 'error',
                title: 'Out of Stock',
                text: 'This item is out of stock and cannot be ordered.',
            });
            return;
        }
        const orderInfo = {
            img: clickedIdDetails?.img,
            foodName: clickedIdDetails?.foodName,
            UserEmail: clickedIdDetails?.UserEmail,
            location: clickedIdDetails?.location,
            mainFoodId: clickedIdDetails?._id,
            category: clickedIdDetails.category,
            status: 'pending' ,
            userEmail: user?.email
        }
        // console.log(orderInfo)
        fetch('https://food-sharing-web-server-nine.vercel.app/orderFood', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log('Order placed successfully', data);
                Swal.fire({
                    icon: 'success',
                    title: 'Order Placed',
                    text: 'Your order has been placed successfully!',
                });
            })
            .catch((error) => {
                console.error('Error placing order:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Order Failed',
                    text: 'There was an issue placing your order. Please try again.',
                });
            });
    };

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
            <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
         
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                {<img src={clickedIdDetails.img || ''} alt="" />}
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10 space-y-3">
                                <h1 className="font-bold uppercase text-2xl mb-5">{foodName}</h1>
                                <p className="text-sm">
                                    {clickedIdDetails.notes}
                                    <a
                                        href="#"
                                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                                    >
                                        MORE <i className="mdi mdi-arrow-right"></i>
                                    </a>
                                </p>
                                <p className="text-xl">Location : {clickedIdDetails.location}</p>
                                <p className="text-xl">
                                    Discount : <span>{clickedIdDetails.discount}</span>{' '}
                                </p>
                                <p>
                                    Expire Date : <span>{clickedIdDetails.expiryDate}</span>{' '}
                                </p>
                                <p
                                    className={`border ${available === "Available"
                                            ? "border-green-500"
                                            : "border-red-500"
                                        } flex justify-center font3`}
                                >
                                    {available}
                                </p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">
                                        59
                                    </span>
                                    <span className="text-2xl leading-none align-baseline">.99</span>
                                </div>
                                <div className="inline-block align-bottom">
                                    <button
                                        onClick={handelOrderService}
                                        className={`bg-[#3586ff] ${available !== "Available"
                                                ? "opacity-50 cursor-not-allowed"
                                                : "opacity-75"
                                            } text-white rounded-full px-10 py-2 font-semibold`}
                                        disabled={available !== "Available"}
                                    >
                                        <i className="mdi mdi-cart -ml-2 mr-2"></i> Order NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
