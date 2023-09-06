import {renderPage} from "./src/components/page/page";
import {renderMobilNavbar, renderNavigation, setMenuToggler} from "./src/components/navigation/navigation";
import styles from './style.css';
import {renderCartAccordion} from "./src/components/accordion/accordion";
import {cardSetLictenner} from "./src/components/itemcard/itemcard";

renderPage();
renderNavigation();
setMenuToggler();
renderMobilNavbar();
renderCartAccordion();
cardSetLictenner();