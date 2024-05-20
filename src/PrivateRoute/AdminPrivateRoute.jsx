import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { Spinner } from 'flowbite-react';
import axios from 'axios'
import { useState } from 'react';
import useUserRole from '../hooks/useUserRole';


const AdminPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const {userRole} = useUserRole();
        console.log(userRole);
    if (loading) {
        return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }

    // if (userRole) {
    //     return children;
    // }
console.log(userRole)

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivateRoute;