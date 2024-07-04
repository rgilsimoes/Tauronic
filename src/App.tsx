import { IonReactRouter } from '@ionic/react-router';
import { IonApp, setupIonicReact } from '@ionic/react';
import Tabs from '@components/tabs/Tabs';

// Stylings
import './global.scss';
import TauriAPI from '@services/TauriAPI';

let platformMode;

TauriAPI.getPlatformName().then((name) => {
  // Supported platforms "linux" | "macos" | "ios" | "freebsd" | "dragonfly" | "netbsd" | "openbsd" | "solaris" | "android" | "windows";
  switch (name) {
    case 'macos':
    case 'ios':
      platformMode = 'ios';
      break;
    default:
      platformMode = 'md';
      break;
  }
});

setupIonicReact({
  mode: platformMode,
  rippleEffect: true,
  animated: true,
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Tabs />
    </IonReactRouter>
  </IonApp>
);

export default App;
