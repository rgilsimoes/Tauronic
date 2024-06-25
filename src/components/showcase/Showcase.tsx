import {
  IonBadge,
  IonButton,
  IonCheckbox,
  IonChip,
  IonIcon,
  IonItem,
  IonList,
  IonNote,
} from '@ionic/react';
import { ActionSheetSample, AlertSample, FabSample } from './ShowCaseSamples';
import { logoIonic } from 'ionicons/icons';

const Showcase: React.FC = () => (
  <IonList>
    <IonItem>
      ion-action-sheet
      <IonNote slot='end'>
        <ActionSheetSample />
      </IonNote>
    </IonItem>
    <IonItem>
      ion-alert
      <IonNote slot='end'>
        <AlertSample />
      </IonNote>
    </IonItem>
    <IonItem>
      ion-badge
      <IonBadge slot='end' color={'tertiary'}>
        22
      </IonBadge>
    </IonItem>
    <IonItem>
      ion-button
      <IonNote slot='end'>
        <IonButton>Default</IonButton>
        <IonButton disabled={true}>Disabled</IonButton>
      </IonNote>
    </IonItem>
    <IonItem>
      ion-checkbox
      <IonNote slot='end'>
        <IonCheckbox>Approve</IonCheckbox>
      </IonNote>
    </IonItem>
    <IonItem>
      ion-chip
      <IonNote slot='end'>
        <IonChip>Default</IonChip>
        <IonChip disabled={true}>Disabled</IonChip>
        <IonChip outline={true}>Outline</IonChip>
      </IonNote>
    </IonItem>
    <IonItem>
      ion-fab
      <FabSample />
    </IonItem>
    <IonItem>
      ion-icon
      <IonNote slot='end'>
        <IonIcon icon={logoIonic} />
        <IonIcon icon={logoIonic} size='large' />
        <IonIcon icon={logoIonic} color='primary' />
        <IonIcon icon={logoIonic} size='large' color='primary' />
      </IonNote>
    </IonItem>
    <IonItem>
      ion-checkbox
      <IonNote slot='end'>
        <IonCheckbox>Approve</IonCheckbox>
      </IonNote>
    </IonItem>
  </IonList>
);

export default Showcase;
