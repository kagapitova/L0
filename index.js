import {renderPage} from "./src/components/page/page";
import {renderMobilNavbar, renderNavigation, setMenuToggler} from "./src/components/navigation/navigation";
import styles from './style.css';
import {renderCartAccordion} from "./src/components/accordion/accordion";
import {renderDeliveryBlock} from "./src/components/delivery/delivery";
import {renderPaymantBlock} from "./src/components/paymants/paymants";
import {renderRecipientForm} from "./src/components/recipient/recipient";
import { calculate } from "./src/common/calculator";

renderPage();
renderNavigation();
setMenuToggler();
renderMobilNavbar();
renderCartAccordion();
renderDeliveryBlock();
renderPaymantBlock();
renderRecipientForm();
calculate();