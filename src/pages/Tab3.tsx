import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Registration from '../components/Registration';
import Header from '../components/Header';
import Profile from './Profile';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
       <Header />
      <IonContent fullscreen>
        <IonHeader className="my-10">
          <IonToolbar>
            <IonTitle size="large">Sign Up</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Registration/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;