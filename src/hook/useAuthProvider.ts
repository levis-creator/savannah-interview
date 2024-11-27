import { AuthContext } from "@/context/AuthProvider"
import { useContext } from "react"

const useAuthProvider = () => {
  const context= useContext(AuthContext);
  if (!context) {
    throw Error("should be used in the correct environment");
  }
  return context;
}

export default useAuthProvider