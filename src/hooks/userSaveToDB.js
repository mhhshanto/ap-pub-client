import axios from "axios";
import  toast from 'react-hot-toast'

function userSaveToDB(userEmail) {  
    axios.post("https://hasib-vai-backend.vercel.app/user", {
      email: userEmail,
      
    })
    .then((res) => {
      if (res?.data?.role) {
        toast.success("Login / Sign in successfully!");
        
      }
    
    });
}

export default userSaveToDB;
