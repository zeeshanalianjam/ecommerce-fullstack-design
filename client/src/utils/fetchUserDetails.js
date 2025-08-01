import { summaryApi } from "../common/summaryApi";
import { Axios } from "./axios";
import { handleApiError } from "./handleApiError";

const fetchUserDetails = async () => {
  try {
    const response = await Axios({
      ...summaryApi.fetchUserDetails,
    });

    if (response.data.success) {
      return response.data.data;
    }

    return null;
  } catch (error) {
    if (error.response?.status === 401) {
      console.log("User not authorized. Likely not logged in.");
      return null; // return null so login check can skip it
    }

    console.error("Fetch User Error:", error);
    return null;
  }
};

export { fetchUserDetails };
