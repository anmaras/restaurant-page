import "../css/shared-style.css";
import "../css/header-style.css";
import "../css/footer-style.css";
import "../css/home.css";
import headerComponent from "./components/header";
import mainComponent from "./components/main";
import footerComponent from "./components/footer";

document.body.append(headerComponent(), mainComponent(), footerComponent());
