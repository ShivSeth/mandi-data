import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Registration from '../components/Registration';
import Header from '../components/Header';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
       <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Registration  />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;