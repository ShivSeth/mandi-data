import {
  IonIcon,
  IonHeader,
  IonImg,
  IonModal,
  IonList
} from '@ionic/react';
import { menuController } from "@ionic/core";
import { menuOutline, homeOutline, closeOutline } from "ionicons/icons";
import './header.css'
import { useState } from 'react';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const onClickHandler = () => {
    setMenuOpen(true);
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
      <IonModal isOpen={menuOpen} >
            <div className="f-close" onClick={(e)=>setMenuOpen(false)}>
	       			<IonIcon icon={closeOutline} size="large"></IonIcon>
	       		</div>
         <IonList>Menu 1</IonList>
         <IonList>Menu 2</IonList>
         <IonList>Menu 3</IonList>
      </IonModal>
    </>
  );
};

export default Header;
