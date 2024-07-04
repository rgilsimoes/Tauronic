import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { home, flask, extensionPuzzle, colorFilter } from 'ionicons/icons';
import { RouteName } from '@utils/RouteName';
import WelcomePage from '@pages/WelcomePage';
import UIComponentsPage from '@pages/UIComponentsPage';
import IntegrationsPage from '@pages/IntegrationsPage';
import AboutPage from '@pages/AboutPage';

import './Tabs.scss';
import BarCodeScannerPage from '@pages/integrations/BarCodeScannerPage';

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path={RouteName.WELCOME}>
        <WelcomePage />
      </Route>
      <Route exact path={RouteName.UI_COMPONENTS}>
        <UIComponentsPage />
      </Route>
      <Route exact path={RouteName.INTEGRATIONS}>
        <IntegrationsPage />
      </Route>
      <Route exact path={RouteName.ABOUT}>
        <AboutPage />
      </Route>
      <Route exact path='/tabs/integrations/barcode-scanner'>
        <BarCodeScannerPage />
      </Route>
      <Route exact path='/'>
        <Redirect to={RouteName.WELCOME} />
      </Route>
    </IonRouterOutlet>
    <IonTabBar slot='bottom'>
      <IonTabButton tab='tab1' href={RouteName.WELCOME}>
        <IonIcon aria-hidden='true' icon={home} />
        <IonLabel>Welcome</IonLabel>
      </IonTabButton>
      <IonTabButton tab='tab2' href={RouteName.UI_COMPONENTS}>
        <IonIcon aria-hidden='true' icon={colorFilter} />
        <IonLabel>UI Components</IonLabel>
      </IonTabButton>
      <IonTabButton tab='tab3' href={RouteName.INTEGRATIONS}>
        <IonIcon aria-hidden='true' icon={extensionPuzzle} />
        <IonLabel>Integrations</IonLabel>
      </IonTabButton>
      <IonTabButton tab='tab4' href={RouteName.ABOUT}>
        <IonIcon aria-hidden='true' icon={flask} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
