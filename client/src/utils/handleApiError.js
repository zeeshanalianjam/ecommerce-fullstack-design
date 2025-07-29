import toast from "react-hot-toast";

const handleApiError = (error) => {
  const ErrorMessage = error.response?.data?.message || error?.message;
  if (error.code === "ERR_NETWORK") {
    toast.error(
      "Network Error: Unable to connect to the server. Please check your internet or server status."
    );
  } 
  else if (error.code === "ECONNABORTED") {
    toast.error("Request Timeout: The server took too long to respond.");
  }
   else if (error.response) {
    const status = error.response.status;

    if (status >= 500) {
      toast.error(
        ErrorMessage
      );
    } else if (status === 404) {
      console.log("Full Error", error);
    } else if (status === 403) {
      toast.error(
        ErrorMessage
      );
    } else if (status === 401) {
      console.log("Full Error", error);
    } else if (status === 400) {
      toast.error(
       ErrorMessage
      );
    } else {
      toast.error(
       ErrorMessage
      );
    }
  } else {
    ErrorMessage
  }

  console.log("Full Error", error);
};

export { handleApiError };