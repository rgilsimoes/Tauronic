import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonModal,
  IonNote,
  IonProgressBar,
  IonReorder,
  IonReorderGroup,
  IonSearchbar,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToast,
  IonToolbar,
  ItemReorderEventDetail,
} from '@ionic/react';
import { ActionSheetSample, AlertSample, FabSample } from './ShowCaseSamples';
import {
  ellipsisHorizontal,
  ellipsisVertical,
  logoIonic,
  personCircle,
  warning,
} from 'ionicons/icons';
import { useState } from 'react';

const Showcase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleReorder(event: CustomEvent<ItemReorderEventDetail>): void {
    event.detail.complete();
  }

  return (
    <>
      <IonToolbar>
        <IonButtons slot='secondary'>
          <IonButton>
            <IonIcon slot='icon-only' icon={personCircle} />
          </IonButton>
        </IonButtons>
        <IonTitle>Toolbar Buttons</IonTitle>
        <IonButtons slot='primary'>
          <IonButton>Delete</IonButton>
          <IonButton>
            <IonIcon
              slot='icon-only'
              ios={ellipsisHorizontal}
              md={ellipsisVertical}
            />
          </IonButton>
        </IonButtons>
      </IonToolbar>
      <IonList>
        <IonSearchbar placeholder='Search lists or content' />
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
          ion-avatar
          <IonAvatar slot='end'>
            <img
              alt="Silhouette of a person's head"
              src='https://ionicframework.com/docs/img/demos/avatar.svg'
            />
          </IonAvatar>
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
          <IonCheckbox slot='end'>Approve</IonCheckbox>
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
          ion-modal
          <IonNote slot='end'>
            <IonButton expand='block' onClick={() => setIsModalOpen(true)}>
              Modal
            </IonButton>
            <IonModal isOpen={isModalOpen}>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Modal</IonTitle>
                  <IonButtons slot='end'>
                    <IonButton onClick={() => setIsModalOpen(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className='ion-padding'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  illum quidem recusandae ducimus quos reprehenderit. Veniam,
                  molestias quos, dolorum consequuntur nisi deserunt omnis id
                  illo sit cum qui. Eaque, dicta.
                </p>
              </IonContent>
            </IonModal>
          </IonNote>
        </IonItem>
        <IonItem>
          ion-loading
          <IonNote slot='end'>
            <IonButton id='open-loading'>Show Loading</IonButton>
            <IonLoading
              trigger='open-loading'
              message='Dismissing after 3 seconds...'
              duration={3000}
            />
          </IonNote>
        </IonItem>
        <IonItem>
          ion-progress-bar
          <IonProgressBar type='indeterminate' />
        </IonItem>
        <IonItem>
          ion-skeleton-text
          <IonNote slot='end'>
            <IonSkeletonText animated={true} style={{ width: '100px' }} />
          </IonNote>
        </IonItem>
        <IonItem>ion-reorder</IonItem>
        <IonList>
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            <IonItem>
              <IonLabel>Item 1</IonLabel>
              <IonReorder slot='end' />
            </IonItem>

            <IonItem>
              <IonLabel>Item 2</IonLabel>
              <IonReorder slot='end' />
            </IonItem>

            <IonItem>
              <IonLabel>Item 3</IonLabel>
              <IonReorder slot='end' />
            </IonItem>

            <IonItem>
              <IonLabel>Item 4</IonLabel>
              <IonReorder slot='end' />
            </IonItem>

            <IonItem>
              <IonLabel>Item 5</IonLabel>
              <IonReorder slot='end' />
            </IonItem>
          </IonReorderGroup>
        </IonList>
        <IonItem lines='none'>ion-card</IonItem>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card</IonCardTitle>
            <IonCardSubtitle>Subtitle</IonCardSubtitle>
            <IonCardSubtitle>Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              illum quidem recusandae ducimus quos reprehenderit. Veniam,
              molestias quos, dolorum consequuntur nisi deserunt omnis id illo
              sit cum qui. Eaque, dicta.
            </p>
          </IonCardContent>
        </IonCard>
        <IonItem>ion-text</IonItem>
        <IonCard>
          <IonCardContent>
            <IonText color='primary'>
              <h1>H1: The quick brown fox jumps over the lazy dog</h1>
            </IonText>

            <IonText color='secondary'>
              <h2>H2: The quick brown fox jumps over the lazy dog</h2>
            </IonText>

            <IonText color='tertiary'>
              <h3>H3: The quick brown fox jumps over the lazy dog</h3>
            </IonText>

            <p className='ion-padding'>
              <IonText color='warning'>
                <IonIcon icon={warning} />
              </IonText>
              I saw a werewolf with a Chinese menu in his hand. Walking through
              the{' '}
              <IonText color='success'>
                <sub>streets</sub>
              </IonText>{' '}
              of Soho in the rain. He{' '}
              <IonText color='medium'>
                <i>was</i>
              </IonText>{' '}
              looking for a place called Lee Ho Fook&aposs. Gonna get a
              <IonText color='danger'>big dish of beef chow mein.</IonText>
            </p>
          </IonCardContent>
        </IonCard>
        <IonItem>
          ion-toast
          <IonNote slot='end'>
            <IonButton id='open-toast' expand='block'>
              Show Toast
            </IonButton>
            <IonToast
              trigger='open-toast'
              message='This toast will disappear after 5 seconds'
              duration={5000}
            />
          </IonNote>
        </IonItem>
      </IonList>
    </>
  );
};

export default Showcase;
