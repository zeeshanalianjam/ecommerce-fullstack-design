const baseUrl = import.meta.env.VITE_API_URL;

const summaryApi = {
  register: {
    url: `/api/v1/user/register`,
    method: "POST",
  },
  login: {
    url: `/api/v1/user/login`,
    method: "POST",
  },
  verifyEmail: {
    url: `/api/v1/user/verify-email`,
    method: "POST",
  },
  fetchUserDetails: {
    url: `/api/v1/user/get-user-details`,
    method: "GET",
  },
  refreshToken: {
    url: `/api/v1/user/refresh-token`,
    method: "POST",
  },
  logout: {
    url: `/api/v1/user/logout`,
    method: "POST",
  },
  avatarUpload: {
    url: `/api/v1/user/avatar-upload`,
    method: "POST",
  },
  updateUserDetails: {
    url: `/api/v1/user/update-user-details`,
    method: "PUT",
  },
  fetchCetegories: {
    url: `/api/v1/categories/get-categories`,
    method: "GET",
  },
  addCategory: {
    url: `/api/v1/categories/add-category`,
    method: "POST",
  },
  deleteCategory: {
    url: `/api/v1/categories/delete-category`,
    method: "DELETE",
  },
  updateCategory: {
    url: `/api/v1/categories/update-category`,
    method: "PUT",
  },
  uploadImageFile: {
    url: `/api/v1/image/upload-image-file`,
    method: "POST",
  },
  fetchAllBrands: {
    url: `/api/v1/brands/get-all-brands`,
    method: "GET",
  },
  addBrand: {
    url: `/api/v1/brands/add-brand`,
    method: "POST",
  },
  deleteBrand: {
    url: `/api/v1/brands/delete-brand`,
    method: "DELETE",
  },
  updateBrand: {
    url: `/api/v1/brands/update-brand`,
    method: "PUT",
  },
  fetchAllFeatures: {
    url: `/api/v1/features/get-all-features`,
    method: "GET",
  },
  addFeature: {
    url: `/api/v1/features/add-feature`,
    method: "POST",
  },
  deleteFeature: {
    url: `/api/v1/features/delete-feature`,
    method: "DELETE",
  },
  updateFeature: {
    url: `/api/v1/features/update-feature`,
    method: "PUT",
  },
  addProduct: {
    url: `/api/v1/products/add-product`,
    method: "POST",
  },
  fetchAllProdutcs: {
    url: `/api/v1/products/get-all-products`,
    method: "POST",
  },
  fetchAllProductsFilter: {
    url: `/api/v1/products/get-products-by-filter`,
    method: "GET",
  }
};

export { summaryApi, baseUrl };
