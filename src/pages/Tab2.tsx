import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Login from '../components/Login';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Login />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
