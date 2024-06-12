import { IonReactRouter } from '@ionic/react-router';
import TauriAPI from '@services/TauriAPI';
import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import Tabs from '@components/tabs/Tabs';

// Stylings
import './global.scss';

const ios = await TauriAPI.getPlatformName() === 'android' ? 'md' : 'ios';
setupIonicReact({
  mode: ios,
  rippleEffect: true,
  animated: true,
}
);

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Tabs />
    </IonReactRouter>
  </IonApp>
);

export default App;
