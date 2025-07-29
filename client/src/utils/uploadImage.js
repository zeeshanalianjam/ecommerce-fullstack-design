import { summaryApi } from "../common/summaryApi";
import { Axios } from "./axios";
import { handleApiError } from "./handleApiError";


const uploadImage = async ({file }) => {
  try {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);

    const response = await Axios({
      ...summaryApi.uploadImageFile,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data.imageUrl;
  } catch (error) {
    handleApiError(error);
  } 
};

export { uploadImage };