import {renderPage} from "./src/components/page/page";
import {renderMobilNavbar, renderNavigation, setMenuToggler} from "./src/components/navigation/navigation";
import styles from './style.css';
import {renderCartAccordion} from "./src/components/accordion/accordion";

renderPage();
renderNavigation();
setMenuToggler();
renderMobilNavbar();
renderCartAccordion();
