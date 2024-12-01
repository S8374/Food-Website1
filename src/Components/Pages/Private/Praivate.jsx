import { useContext } from "react";

import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";

const Private = ({ children }) => {
    const { user } = useContext(AuthContext);


 

    if (user) {
        return children;
    }

    // Trigger SweetAlert if user is not logged in
    Swal.fire({
        title: "Access Denied",
        text: "Please log in to continue or create a new account.",
        icon: "warning",
        confirmButtonText: "Okay",
    });

    return <Navigate to="/" />;
};

export default Private;
