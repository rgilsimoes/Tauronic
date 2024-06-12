import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './UIComponentsPage.scss';

const UIComponentsPage: React.FC = () => (
  <IonPage className="ui-components-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>UI Components</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">UI Components</IonTitle>
        </IonToolbar>
      </IonHeader>
      <h1>UI Components</h1>
      TBD
    </IonContent>
  </IonPage>
);


export default UIComponentsPage;
