import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import useTauriApi from '@services/useTauriApi';
import TauriAPI from '@services/TauriAPI';
import { getName, getTauriVersion } from '@tauri-apps/api/app';
import './AboutPage.scss';

const About: React.FC = () => {

  const { result: appName } = useTauriApi(getName, [])
  const { result: tauriVersion } = useTauriApi(getTauriVersion, []);
  const { result: platformName } = useTauriApi(TauriAPI.getPlatformName, []);

  return (
    <IonPage className="about-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              This App Name is {appName}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <h2>Tauri version: {tauriVersion || 'N/A'}</h2>
            <h2>Platform: {platformName}</h2>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default About;

