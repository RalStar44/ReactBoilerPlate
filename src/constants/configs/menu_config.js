/**
 * @file menu_config.js
 * @description Configuration file for defining menu items in the application.
 */

import { Components } from "../importComponents";
import ContextTypes from "../context_types";
import AlignLeftIcon from '../../assests/icons/align-left';

/**
 * @description Pseudo object for representing a menu item configuration.
 * @typedef {Object} MenuItem - Represents a menu item configuration.
 * @property {string} label - The label for the menu item.
 * @property {string} icon - The icon for the menu item.
 * @property {string} dataType - The data type associated with the menu item.
 * @property {string} route - The route for the menu item.
 * @property {JSX.Element} component - The React component to render when this menu item is selected.
 * @property {boolean} isSecure - Indicates if the menu item requires authentication.
 */

/**
 * @description Configuration array for defining menu items in the application.
 * @type {MenuItem[]}
 */
const menuConfig = [
  {
    label: "Dashboard",
    icon: AlignLeftIcon,
    dataType: ContextTypes.Dashboard,
    route: '/',
    component: <Components.Dashboard />,
    isSecure: false,
  },
  {
    label: "Hardware",
    icon: AlignLeftIcon,
    dataType: ContextTypes.Hardware,
    route: '/hadrware',
    component: <Components.Hardware />,
    isSecure: false,
  },
  {
    label: "Software",
    icon: AlignLeftIcon,
    dataType: ContextTypes.Software,
    route: '/software',
    component: <Components.Software />,
    isSecure: false,
  },
  {
    label: "Network",
    icon: AlignLeftIcon,
    dataType: ContextTypes.Network,
    route: '/network',
    component: <Components.Network />,
    isSecure: false,
  },
  {
    label: "User",
    icon: AlignLeftIcon,
    dataType: ContextTypes.User,
    route: '/user',
    component: <User />,
    isSecure: false,
  },
  {
    label: "Log In",
    icon: AlignLeftIcon,
    dataType: null,
    route: '/login',
    component: <Components.Authentication />,
    isSecure: false,
  },
  {
    label: "About",
    icon: AlignLeftIcon,
    dataType: null,
    route: '/about',
    component: <Components.About />,
    isSecure: false,
  },


  // Add more menu items as needed
];

export default menuConfig;
