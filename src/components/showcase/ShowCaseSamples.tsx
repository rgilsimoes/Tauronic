import {
  IonButton,
  IonAlert,
  IonActionSheet,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from '@ionic/react';
import {
  chevronBackCircle,
  colorPalette,
  documentsOutline,
  globe,
} from 'ionicons/icons';

function AlertSample(): JSX.Element {
  return (
    <>
      <IonButton id='present-alert'>Alert</IonButton>
      <IonAlert
        trigger='present-alert'
        header='A Short Title Is Best'
        subHeader='A Sub Header Is Optional'
        message='A message should be a short, complete sentence.'
        buttons={['Action']}
      />
    </>
  );
}

function ActionSheetSample(): JSX.Element {
  return (
    <>
      <IonButton id='open-action-sheet'>Open</IonButton>
      <IonActionSheet
        trigger='open-action-sheet'
        header='Actions'
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      />
    </>
  );
}

function FabSample(): JSX.Element {
  return (
    <IonFab vertical='bottom' horizontal='end'>
      <IonFabButton size='small'>
        <IonIcon icon={chevronBackCircle} />
      </IonFabButton>
      <IonFabList side='start'>
        <IonFabButton>
          <IonIcon icon={documentsOutline} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={colorPalette} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={globe} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}

export { ActionSheetSample, AlertSample, FabSample };
