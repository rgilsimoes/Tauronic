import {
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './IntegrationsPage.scss';

const IntegrationsPage: React.FC = () => (
  <IonPage className='ui-components-page'>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Native Integrations</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>Native Integrations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonText className='ion-text-center' color='secondary'>
        <h2>Native Tauri Integrations</h2>
      </IonText>
      <IonList>
        <IonItem detail routerLink='/tabs/integrations/barcode-scanner'>
          BarCode Scanner Plugin
        </IonItem>
      </IonList>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonTitle onClick={() => window.open('https://v2.tauri.app', '_blank')}>
          Visit @tauri.app
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  </IonPage>
);

export default IntegrationsPage;
