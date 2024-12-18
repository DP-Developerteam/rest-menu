### ToDos ###
- Create User while being already signed in. Let's say that an user wants to create another user. From AllUser.jsx there should be a button that redirects to SignUp.jsx
- Start giving styles to the USERs CRUD.


### Folder Structure ###z
rest-menu/
└── public/                           // Static files like favicon and HTML file
│   └── favicon.ico                   // Favicon for the application
│   └── index.html                    // Main HTML file for the React app
└── src/
│   └── assets/                       // Folder for storing all static assets like images
│   │   └── img/                      // Folder containing all image files
│   └── components/                   // Reusable components across the application
│   │   └── pages/                    // Contains Common-Basic pages for the application
│   │   │   └── Home.jsx              // Home page
│   │   │   └── AboutUs.jsx           // About Us page
│   │   │   └── Jobs.jsx              // Jobs page
│   │   └── _components.scss          // Styles for components
│   │   └── Common.jsx                // Shared functions and components
│   │   └── Footer.jsx                // Footer component
│   │   └── Header.jsx                // Header component
│   └── features/                     // Feature-based structure for organizing related components
│   │   └── users/                    // User-related features
│   │   │   └── components/           // Contains user-related reusable components
│   │   │   │   └── SignInForm.jsx    // Sign-in form component
│   │   │   │   └── SignUpForm.jsx    // Sign-up form component
│   │   │   │   └── UserEditForm.jsx  // User edit form component
│   │   │   └── pages/                // Contains user-related page
│   │   │   │   └── AllUsers.jsx      // Page displaying all users
│   │   │   │   └── SignIn.jsx        // Sign-in page
│   │   │   │   └── SignUp.jsx        // Sign-up page
│   │   │   └── userSlice.js          // Redux slice for user state management
│   │   │   └── userService.js        // Service for handling user-related API calls
│   │   └── products/                 // Product-related features
│   │   │   └── components/           // Contains product-related reusable components
│   │   │   │   └── ProductList.jsx   // Component displaying a list of products
│   │   │   └── pages/                // Contains product-related page
│   │   │   │   └── Drinks.jsx        // Drinks page
│   │   │   │   └── Foods.jsx         // Foods page
│   │   │   │   └── Menu.jsx          // Menu page
│   │   │   └── productSlice.js       // Redux slice for product state management
│   │   │   └── productService.js     // Service for handling product-related API calls
│   │   └── orders/                   // Order-related features
│   │       └── components/           // Contains order-related reusable components
│   │       └── pages/                // Contains order-related page
│   │       └── orderSlice.js         // Redux slice for order state management
│   │       └── orderService.js       // Service for handling order-related API calls
│   └── i18n/                         // Internationalization files for language support
│   │   └── locales/                  // Folder store for different languages translations
│   │   │   └── de/                   // German translations
│   │   │   │   └── translation.json  // JSON file containing German translations
│   │   │   └── en/                   // English translations
│   │   │   │   └── translation.json  // JSON file containing English translations
│   │   │   └── es/                   // Spanish translations
│   │   │   │   └── translation.json  // JSON file containing Spanish translations
│   │   └── i18n.json                 // Configuration for i18n
│   └── layout/                       // Layout components for structuring the app
│   │   └── RootLayout.jsx            // Main layout component for the application
│   └── store/                        // Redux store configuration and reducers
│   │   └── reducers.js               // Combines all reducers for the application
│   │   └── store.js                  // Configures the Redux store
│   └── styles/                       // Global and shared styles for the application
│   │   └── _colors.scss              // Color variables
│   │   └── _fonts.scss               // Font styles
│   │   └── _forms.scss               // Form styles
│   │   └── _general.scss             // General styles for the application
│   │   └── _helpers.scss             // Helper styles and utilities
│   └── App.jsx                       // Main application component
│   └── App.scss                      // Main styles for the application
│   └── index.css                     // Global CSS styles
│   └── index.js                      // Entry point for the React application
└── package.json                      // Package configuration file
└── README.md                         // Documentation for the project