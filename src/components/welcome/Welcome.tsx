import { IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import './Welcome.scss';

const Welcome: React.FC = () => (
  <IonGrid className='welcome ion-text-center'>
    <IonRow className='ion-justify-content-center'>
      <IonCol size='12'>
        <IonText className='ion-text-center' color='secondary'>
          <h2>Welcome to Tauronic!</h2>
        </IonText>
        <IonImg
          src='/src/assets/img/tauronic_logo.png'
          alt='Tauronic logo'
          className='tauronic-logo'
        />
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol className='ion-justify-content-center'>
        <a href='https://tauri.app' target='_blank' rel='noreferrer noopener'>
          <img
            src='/src/assets/img/tauri.svg'
            className='logo tauri'
            alt='Tauri logo'
          />
          Tauri
        </a>
      </IonCol>
      <IonCol className='ion-justify-content-center'>
        <a
          href='https://ionicframework.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            src='/src/assets/img/ionic.svg'
            className='logo ionic'
            alt='Ionic logo'
          />
          Ionic
        </a>
      </IonCol>
      <IonCol className='ion-justify-content-center'>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer noopener'>
          <img
            src='/src/assets/img/react.svg'
            className='logo react'
            alt='React logo'
          />
          React
        </a>
      </IonCol>
      <IonCol className='ion-justify-content-center'>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer noopener'>
          <img
            src='/src/assets/img/vite.svg'
            className='logo vite'
            alt='Vite logo'
          />
          Vite
        </a>
      </IonCol>
    </IonRow>
  </IonGrid>
);

export default Welcome;
