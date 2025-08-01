import React from "react";
import { isAdmin } from "./isAdmin";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdminPermission = ({ children }) => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <>
      {isAdmin(user.role) ? 
        children
       : (
        <p className="text-red-600 bg-red-50 p-4">
          You have no permission to access this source!
        </p>
      )}
    </>
  );
};

export default AdminPermission;
