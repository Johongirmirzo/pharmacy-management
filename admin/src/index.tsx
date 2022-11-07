import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./styles/index.css";
import App from "./App";
import Loader from "./components/Loader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
/**
 *    Make custom hooks for the following cases
 * 1. Alert
 * 2. create and edit company, medicine,
 *
 */

/**
 *  1. Create the folder structure - DONE
 *
 *  2. Install all the packages - DONE
 *
 *  3. Create files with starter code
 *
 *  4. Setup routes - DONE
 *
 *  5. Set up global styles - DONE
 *
 *  6. Create apis
 *    1. pharmacist - DONE
 *    2. company - DONE
 *    3. medicine - DONE
 *    4. orders - DONE
 *    5. customer - DONE
 *    6. report
 *    7. pharmacist -> profile and password
 *
 *  7. Set up redux store
 *    0. admin - DONE
 *    1. pharmacist - DONE
 *    2. company - DONE
 *    3. medicine - DONE
 *    4. orders - DONE
 *
 *
 *  9. Steps
 *    1. View Pharmacist - DONE
 *    2. Add Pharmacist - DONE
 *    3. Edit Pharmacist - DONE
 *
 *    4. View Company - DONE
 *    5. Add Company - DONE
 *    6. Edit Company - DONE
 *
 *    7. View Medicine - DONE
 *    8. Add Medicine - DONE
 *    9. Edit Medicine - DONE
 *
 *    10. View Orders - DONE
 *
 *    11. Dashboard - DONE
 *
 *    12. Medicine Inventory - DONE
 *
 *    13. Invoice Search - DONE
 *
 *    14. Stock Report - DONE
 *    15. Pharmacist Sales Report
 *    16. Sales Report
 *
 *
 *    17. Change Profile Info
 *
 *    18. Change Password
 *
 *    19. Logout
 */
