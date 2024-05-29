import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { Spinner } from 'flowbite-react';
import axios from 'axios'
import useUserRole from '../hooks/useUserRole';



const AdminPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const {role} = useUserRole();

    if (loading) {
        return <div>Loading...</div>
    }

    if (user && role === 'admin') {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivateRoute;