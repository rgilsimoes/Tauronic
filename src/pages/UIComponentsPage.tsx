import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './UIComponentsPage.scss';
import Showcase from '@components/showcase/Showcase';

const UIComponentsPage: React.FC = () => (
  <IonPage className='ui-components-page'>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Ionic Components</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>Ionic Components</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonText className='ion-text-center' color='secondary'>
        <h2>Showcase</h2>
      </IonText>
      <Showcase />
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonTitle
          onClick={() => window.open('https://ionicframework.com', '_blank')}
        >
          Visit @ionicframework
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  </IonPage>
);

export default UIComponentsPage;
