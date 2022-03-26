import React from 'react'
import { IonButton, IonButtons, IonCard, IonCardContent, IonInput, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonRow, IonText, IonToolbar,  IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonPage  } from '@ionic/react';
import { arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline } from "ionicons/icons";
import {Form} from '../components/Form';
const Profile = () => {
  
  return (
    <IonRow className="ion-justify-content-center">
      <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
        <IonCard>

          <IonCardHeader>

            <IonRow>
              <IonCol>
                <img src="https://raw.githubusercontent.com/alanmontgomery/ionic-react-profile-dashboard-ui/6f364b95bd1140e02174be2694fa0a635dbae31d/public/assets/alan.jpg" alt="avatar" />
              </IonCol>
            </IonRow>
          </IonCardHeader>
        
        <IonCardContent>
              <IonItem className='ion-text-center'>
                <IonLabel>
                  Nand Kishore
                </IonLabel>
              </IonItem>
            </IonCardContent>
            </IonCard>
      </IonCol>
      <IonCol>
      <IonAccordionGroup value="accountInformation">
          <IonAccordion value="accountInformation">
            <IonItem slot="header">
              <IonLabel>ACCOUNT INFORMATION</IonLabel>
            </IonItem>
      
            <IonList slot="content">
            <IonItem>
              <IonLabel>Name: </IonLabel>
              <IonLabel>
              <IonText>Nand Kishore</IonText>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Email: </IonLabel>
              <IonLabel>
              <IonText>nandkishore@gmail.com</IonText>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Phone Number: </IonLabel>
              <IonLabel>
              <IonText>+1 1234567890</IonText>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>I am a: </IonLabel>
              <IonLabel>
              <IonText>Farmer</IonText>
              </IonLabel>
            </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="companyInformation">
            <IonItem slot="header">
              <IonLabel>Company Information</IonLabel>
            </IonItem>
            <IonList slot="content">
              <IonItem>
                <IonLabel>Circle</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="savedList">
            <IonItem slot="header">
              <IonLabel>Saved List</IonLabel>
            </IonItem>
      
            <IonList slot="content">
              <IonItem>
                <IonLabel>List of saved Items</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
        <IonItem>
              <IonLabel>Delete Account</IonLabel>
            </IonItem>
      </IonCol>
    </IonRow>
    
  )
}

export default Profile