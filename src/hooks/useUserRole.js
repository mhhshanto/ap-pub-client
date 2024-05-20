import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";

const useUserRole = () => {
  const { user, loading } = useContext(AuthContext);

 

//   const { data: userRole } = useQuery({
//     queryKey: [user?.email, "userRole"],
//     enabled: !loading && !!user,
//     queryFn: async () => {
//       const res = await `
//       );
//       console.log(res.data)
//       return res.data.role;
//     },
//   });

console.log(userRole)   
  return { userRole };
};

export default useUserRole;
