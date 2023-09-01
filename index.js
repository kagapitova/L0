import {renderPage} from "./src/components/page/page";
import {renderMobilNavbar, renderNavigation, setMenuToggler} from "./src/components/navigation/navigation";
import styles from './style.css';

renderPage();
renderNavigation();
setMenuToggler();
renderMobilNavbar();
