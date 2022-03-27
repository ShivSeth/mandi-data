import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Login from '../components/Login';
import Header from '../components/Header';
import './Tab2.css';
import Profile from './Profile';

const islogin = !!localStorage.getItem('isLogin');
const Tab2: React.FC = () => {
  return (
    <IonPage>
        <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{islogin ? 'My Profile' : 'Login'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {!islogin && <Login />}
        {!!islogin && <Profile />}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
