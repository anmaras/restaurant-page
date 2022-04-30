import "../css/shared-style.css";
import "../css/header-style.css";
import "../css/footer-style.css";
import "../css/about-style.css";
import "../css/menu-style.css";
import "../css/home.css";
import headerComponent from "./components/header";
import mainComponent from "./pageLoad";
import footerComponent from "./components/footer";

document.body.append(headerComponent(), mainComponent(), footerComponent());
