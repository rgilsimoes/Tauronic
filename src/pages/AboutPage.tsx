import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  getPlatforms,
} from '@ionic/react';
import useTauriApi from '@services/useTauriApi';
import TauriAPI from '@services/TauriAPI';
import { getName, getTauriVersion } from '@tauri-apps/api/app';
import './AboutPage.scss';
import Sponsor from '@components/sponsor/Sponsor';

const AboutPage: React.FC = () => {
  const { result: appName } = useTauriApi(getName, []);
  const { result: tauriVersion } = useTauriApi(getTauriVersion, []);
  const { result: platformName } = useTauriApi(TauriAPI.getPlatformName, []);

  const ionicVersion = '8.2.6';
  const viteVersion = '5.3.5';
  const reactVersion = '18.3.1';

  return (
    <IonPage className='about-page'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Sponsor />
        <IonCard className='ion-padding-horizontal ion-no-margin ion-margin-horizontal'>
          <IonCardHeader className='ion-no-padding ion-padding-vertical'>
            <IonCardSubtitle>
              <h3>App Name: &apos;{appName || 'N/A'}&apos;</h3>
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className='ion-no-padding'>
            <h2>Tauri information:</h2>
            <ul>
              <li>Version: {tauriVersion || 'N/A'}</li>
              <li>Platform: {platformName || 'N/A'}</li>
            </ul>
            <h2>Ionic information:</h2>
            <ul>
              <li>Version: {ionicVersion}</li>
              <li>Platform: {getPlatforms().join(' / ')}</li>
            </ul>
            <h2>Others:</h2>
            <ul>
              <li>Vite: {viteVersion}</li>
              <li>React: {reactVersion}</li>
            </ul>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;
