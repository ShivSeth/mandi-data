import {
  IonIcon,
  IonHeader,
  IonImg,
} from '@ionic/react';
import { menuController } from "@ionic/core";
import { menuOutline, homeOutline } from "ionicons/icons";
import './header.css'

const Header = () => {
  const onClickHandler = () => {
    menuController.open()
  }
  return (
    <>
      <IonHeader>
        <div className = "bar bar-header bar-positive">
          <IonIcon className="bar-header-icons" slot="start" icon={menuOutline} onClick={() => onClickHandler()} size="large" />
          <IonImg className="bar-header-logo-img" src={'/assets/logo.png'} />
          <IonIcon className="bar-header-icons" slot="end" icon={homeOutline} size="large" />
        </div>
      </IonHeader>
    </>
  );
};

export default Header;
