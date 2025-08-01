import toast from "react-hot-toast";

const handleApiError = (error) => {
  const ErrorMessage = error.response?.data?.message || error?.message;

  if (error.code === "ERR_NETWORK") {
    toast.error(
      "Network Error: Unable to connect to the server. Please check your internet or server status."
    );
  } else if (error.code === "ECONNABORTED") {
    toast.error("Request Timeout: The server took too long to respond.");
  } else if (error.response) {
    const status = error.response.status;

    if (status >= 500) {
      toast.error(ErrorMessage || "Server error occurred.");
    } else if (status === 404) {
      toast.error(ErrorMessage || "Resource not found.");
    } else if (status === 403) {
      toast.error(
        ErrorMessage || "You are not allowed to perform this action."
      );
    } else if (status === 401) {
      const pathname = window.location.pathname;

      if (["/", "/login", "/register"].includes(pathname)) {
        console.warn("401 ignored on public page.");
        return;
      }
      toast.error("Session expired. Please login again.");
      return;
    } else if (status === 400) {
      toast.error(ErrorMessage || "Bad request.");
    } else {
      toast.error(ErrorMessage || "Something went wrong.");
    }
  } else {
    toast.error(ErrorMessage || "Unexpected error occurred."); // ✅ This was missing
  }

  console.error("Full Error", error);
};

export { handleApiError };
