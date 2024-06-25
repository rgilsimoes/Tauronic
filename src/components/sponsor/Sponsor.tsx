import { IonGrid, IonRow, IonCol } from '@ionic/react';

const Sponsor: React.FC = () => (
  <IonGrid className='ion-padding'>
    <IonRow className='ion-align-items-center'>
      <IonCol className='ion-text-center'>
        <a
          href='https://www.buymeacoffee.com/rgilsimoes'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            src='https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png'
            alt='Buy Me A Coffee'
            className='buymeacoffee'
          />
        </a>
      </IonCol>
      <IonCol className='ion-text-center'>
        <form
          action='https://www.paypal.com/donate'
          method='post'
          target='_blank'
        >
          <input type='hidden' name='business' value='UP72LSUN9V5YY' />
          <input
            type='hidden'
            name='item_name'
            value='Suportar o Site Super Raffler'
          />
          <input type='hidden' name='currency_code' value='EUR' />
          <input
            type='image'
            src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif'
            name='submit'
            title='PayPal - The safer, easier way to pay online!'
            alt='Donate with PayPal button'
            width='70%'
          />
          <img
            alt='Paypal'
            src='https://www.paypal.com/pt_PT/i/scr/pixel.gif'
            width='1'
            height='1'
          />
        </form>
      </IonCol>
    </IonRow>
  </IonGrid>
);

export default Sponsor;
