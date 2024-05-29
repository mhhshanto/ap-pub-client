import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";

const useUserRole = () => {
  const {user, loading} = useContext(AuthContext);
  
  const {data: userRole} = useQuery({
      queryKey: [user?.email,'userRole'],
      enabled: !loading,
      queryFn: async () => {
           const res = await axios.get(`https://hasib-vai-backend.vercel.app/user-role/${user?.email}`)
           return res.data;
      }
  })



  return {userRole}
};

export default useUserRole;
