# ecommerce-fullstack-design

![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white)

## 📝 Description

Dive into the world of full-stack e-commerce development with ecommerce-fullstack-design, my inaugural project at DHC (Developers Hub corporation). This project showcases my journey into building a complete e-commerce solution, leveraging the power of React for a dynamic and responsive web interface. The application integrates a robust database to manage product catalogs, user accounts, and order information. Explore the features that bring this e-commerce platform to life, including a seamless user experience for browsing, purchasing, and managing orders.

## ✨ Features

- 🗄️ Database
- 🕸️ Web


## 🛠️ Tech Stack

- ⚛️ React


## 📦 Key Dependencies

```
@reduxjs/toolkit: ^2.8.2
axios: ^1.11.0
jwt-decode: ^4.0.0
react: ^19.1.0
react-dom: ^19.1.0
react-hot-toast: ^2.5.2
react-icons: ^5.5.0
react-redux: ^9.2.0
react-router-dom: ^7.6.3
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **lint**: `npm run lint`
- **preview**: `npm run preview`


## 📁 Project Structure

```
.
├── client
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── Admin
│   │   │   ├── AdminPermission.jsx
│   │   │   └── isAdmin.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── Avatar.png
│   │   │   ├── backgrounds
│   │   │   │   ├── banner.png
│   │   │   │   ├── cottons.png
│   │   │   │   ├── customPro.png
│   │   │   │   ├── gadgets.png
│   │   │   │   ├── monitoring.png
│   │   │   │   ├── outdoor.png
│   │   │   │   ├── requestBG.png
│   │   │   │   └── shipping.png
│   │   │   ├── cloth
│   │   │   │   ├── bag.png
│   │   │   │   ├── coat.png
│   │   │   │   ├── half.png
│   │   │   │   ├── jeans.png
│   │   │   │   ├── tshirt-gray.png
│   │   │   │   ├── tshirt.png
│   │   │   │   └── wallet.png
│   │   │   ├── flags
│   │   │   │   ├── AE.png
│   │   │   │   ├── Aus.png
│   │   │   │   ├── CN.png
│   │   │   │   ├── DE.png
│   │   │   │   ├── DK.png
│   │   │   │   ├── FR.png
│   │   │   │   ├── GB.png
│   │   │   │   ├── IT.png
│   │   │   │   ├── RU.png
│   │   │   │   └── US.png
│   │   │   ├── interior
│   │   │   │   ├── 1.png
│   │   │   │   ├── 2.png
│   │   │   │   ├── 3.png
│   │   │   │   ├── 4.png
│   │   │   │   ├── 5.png
│   │   │   │   ├── 6.png
│   │   │   │   ├── 7.png
│   │   │   │   └── 8.png
│   │   │   ├── logo-colored.png
│   │   │   ├── nothing here yet.webp
│   │   │   ├── paymentMethods
│   │   │   │   ├── american.png
│   │   │   │   ├── pay.png
│   │   │   │   ├── paypal.png
│   │   │   │   ├── razor.png
│   │   │   │   └── visa.png
│   │   │   ├── react.svg
│   │   │   ├── relatedProducts
│   │   │   │   ├── bag.png
│   │   │   │   ├── headphones.png
│   │   │   │   └── smartWatch.png
│   │   │   ├── savedForLaterProduct
│   │   │   │   ├── ipad.png
│   │   │   │   ├── laptop.png
│   │   │   │   ├── phone.png
│   │   │   │   └── smartWatch.png
│   │   │   └── tech
│   │   │       ├── 1.jpg
│   │   │       ├── 10.jpg
│   │   │       ├── 2.jpg
│   │   │       ├── 3.jpg
│   │   │       ├── 4.jpg
│   │   │       ├── 5.jpg
│   │   │       ├── 6.jpg
│   │   │       ├── 7.jpg
│   │   │       ├── 8.jpg
│   │   │       └── 9.jpg
│   │   ├── common
│   │   │   └── summaryApi.js
│   │   ├── components
│   │   │   ├── Brands
│   │   │   │   ├── EditBrandModel.jsx
│   │   │   │   └── UploadBrandModel.jsx
│   │   │   ├── Cart
│   │   │   │   ├── SavedForLaterProductCard.jsx
│   │   │   │   ├── SavedForLaterProducts.jsx
│   │   │   │   ├── ShoppingCart.jsx
│   │   │   │   └── WhyChooseUs.jsx
│   │   │   ├── Category
│   │   │   │   ├── DeleteConfirmBox.jsx
│   │   │   │   ├── EditCategoryModel.jsx
│   │   │   │   ├── NoData.jsx
│   │   │   │   └── UploadCategoryModel.jsx
│   │   │   ├── Details
│   │   │   │   ├── AsideItems.jsx
│   │   │   │   ├── ProductDetailsCard.jsx
│   │   │   │   ├── ProductDetailsTabs
│   │   │   │   │   └── Description.jsx
│   │   │   │   ├── ProductDetailsTabs.jsx
│   │   │   │   ├── ProductsTabsMenus.jsx
│   │   │   │   ├── RelatedProductCard.jsx
│   │   │   │   ├── RelatedProducts.jsx
│   │   │   │   └── ShopNowWithSuperDiscount.jsx
│   │   │   ├── Features
│   │   │   │   ├── EditFeatureModel.jsx
│   │   │   │   └── UploadFeatureModel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home
│   │   │   │   ├── AnimalAndParts.jsx
│   │   │   │   ├── Automobiles.jsx
│   │   │   │   ├── ClothesAndWear.jsx
│   │   │   │   ├── ComputerAndTech.jsx
│   │   │   │   ├── ConsumerElectronicsAndGadgetsShowCase.jsx
│   │   │   │   ├── DealsAndOffersShowCase.jsx
│   │   │   │   ├── ExtraServices.jsx
│   │   │   │   ├── HeroSectionMenus.jsx
│   │   │   │   ├── HomeAndOutdoorShowCase.jsx
│   │   │   │   ├── HomeInteriors.jsx
│   │   │   │   ├── MoreCategory.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── NewsLetterSubsciption.jsx
│   │   │   │   ├── RecomendedItems.jsx
│   │   │   │   ├── Regions.jsx
│   │   │   │   ├── RequestQuote.jsx
│   │   │   │   ├── SportsAndOutdoor.jsx
│   │   │   │   └── ToolsEquipments.jsx
│   │   │   ├── ListView
│   │   │   │   ├── Card
│   │   │   │   │   ├── ProductCard.jsx
│   │   │   │   │   └── ProductCardGrid.jsx
│   │   │   │   ├── FilterHeader.jsx
│   │   │   │   ├── ListViewMenus.jsx
│   │   │   │   ├── ListViewMenusTabs
│   │   │   │   │   ├── Brands.jsx
│   │   │   │   │   ├── Category.jsx
│   │   │   │   │   ├── Condition.jsx
│   │   │   │   │   ├── Features.jsx
│   │   │   │   │   ├── PriceRange.jsx
│   │   │   │   │   └── Ratings.jsx
│   │   │   │   ├── MobileAccessories.jsx
│   │   │   │   ├── Paginiation.jsx
│   │   │   │   └── Tabs.jsx
│   │   │   ├── MobileSearchBar.jsx
│   │   │   ├── ProductCardAdmin.jsx
│   │   │   ├── Products
│   │   │   │   └── ViewImage.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── User
│   │   │   │   ├── UserMenu.jsx
│   │   │   │   └── UserProfileAvatarEdit.jsx
│   │   │   └── export.js
│   │   ├── index.css
│   │   ├── layouts
│   │   │   ├── Dashobard
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Details
│   │   │   │   └── ProductDetailsInTabsLayout.jsx
│   │   │   ├── Home
│   │   │   │   └── HeroSectionLayouts.jsx
│   │   │   └── ListView
│   │   │       └── ListViewLayout.jsx
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── Brands.jsx
│   │   │   ├── Category.jsx
│   │   │   ├── Details.jsx
│   │   │   ├── EmailVerification.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ListView.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MyCart.jsx
│   │   │   ├── PageNotFound.jsx
│   │   │   ├── ProductsAdmin.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── UploadProduct.jsx
│   │   │   └── exportPages.js
│   │   ├── redux
│   │   │   ├── prodcutLayoutSlice.js
│   │   │   ├── productSlice.js
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── routes
│   │   │   └── Routes.jsx
│   │   └── utils
│   │       ├── Spinner.jsx
│   │       ├── axios.js
│   │       ├── fetchUserDetails.js
│   │       ├── handleApiError.js
│   │       └── uploadImage.js
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── vite.config.js
└── server
    ├── package.json
    └── src
        ├── app.js
        ├── controllers
        │   ├── brand.controller.js
        │   ├── category.controller.js
        │   ├── feature.controller.js
        │   ├── product.controller.js
        │   ├── uploadImage.controller.js
        │   └── user.controller.js
        ├── db
        │   └── dbConnection.js
        ├── index.js
        ├── middlewares
        │   ├── auth.middleware.js
        │   └── multer.middelware.js
        ├── models
        │   ├── address.models.js
        │   ├── brand.mdoels.js
        │   ├── cartProduct.models.js
        │   ├── category.models.js
        │   ├── feature.models.js
        │   ├── order.models.js
        │   ├── product.models.js
        │   └── user.models.js
        ├── routes
        │   ├── brand.routes.js
        │   ├── category.routes.js
        │   ├── feature.routes.js
        │   ├── product.routes.js
        │   ├── uploadImage.routes.js
        │   └── user.routes.js
        ├── services
        │   ├── cloudinary.js
        │   └── verifyEmail.js
        └── utils
            ├── apiError.js
            ├── apiResponse.js
            ├── asyncHandler.js
            └── verifyEmailTemplate.js
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/zeeshanalianjam/ecommerce-fullstack-design.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

---
*This README was generated with ❤️ by ReadmeBuddy*
