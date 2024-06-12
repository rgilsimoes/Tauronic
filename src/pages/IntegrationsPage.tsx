import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './IntegrationsPage.scss';

const IntegrationsPage: React.FC = () => (
  <IonPage className="ui-components-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Integrations</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Integrations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <h1>UI Components</h1>
      TBD
    </IonContent>
  </IonPage>
);


export default IntegrationsPage;
