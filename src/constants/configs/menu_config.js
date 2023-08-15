// menu_config.js
import { Components } from "../importComponents";
import ContextTypes from "../context_types";
// ToDo:  add import for Icons.  Note: Similar to the way Components was done

const menuConfig = [
  {
    label: "Dashboard",
    icon: "icon1",
    dataType: ContextTypes.Dashboard,
    route: '/',
    component: <Components.Dashboard />,
  },
  {
    label: "Hardware",
    icon: "icon2",
    dataType: ContextTypes.Hardware,
    route: '/hadrware',
    component: <Components.Hardware />,
  },
  {
    label: "Software",
    icon: "icon3",
    dataType: ContextTypes.Software,
    route: '/software',
    component: <Components.Software />,
  },
  {
    label: "Network",
    icon: "icon4",
    dataType: ContextTypes.Network,
    route: '/network',
    component: <Components.Network />,
  },
  {
    label: "User",
    icon: "icon5",
    dataType: ContextTypes.User,
    route: '/user',
    component: <User />,
  },
  {
    label: "Log In",
    icon: "icon6",
    dataType: null,
    route: '/login',
    component: <Components.Authentication />,
  },
  {
    label: "About",
    icon: "icon7",
    dataType: null,
    route: '/about',
    component: <Components.About /> ,
  },

  // Add more menu items as needed
];

export default menuConfig;
