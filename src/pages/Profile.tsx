import React from 'react'
import { IonButton, IonButtons, IonCard, IonCardContent, IonInput, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonRow, IonText, IonToolbar, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import { arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline } from "ionicons/icons";
import { Form } from '../components/Form';
const Profile = () => {

  const data = {
    "_id": "623ef700fcd782439c0156a6",
    "name": "Ramesh Chand",
    "email": "ramesh.chand@farmer.com",
    "address": {
        "pincode": "126112",
        "country": "India",
        "fullAddress": "Anchra Kalan"
    },
    "location": {
        "type": "Point",
        "coordinates": [
            29.27021,
            76.63847
        ],
        "_id": "623ef700fcd782439c0156a7"
    },
    "language": "English",
    "mobile": "9874561235",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2VmNzAwZmNkNzgyNDM5YzAxNTZhNiIsImlhdCI6MTY0ODMzNjc1MywiZXhwIjoxNjUwOTI4NzUzfQ.58MYIWLil970XK9hyGploDl9V0WCpEsy8XVS6KJqfKs"
}

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
                {data.name}
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
                  <IonText>{data.name}</IonText>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Email: </IonLabel>
                <IonLabel>
                  <IonText>{data.email}</IonText>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Phone Number: </IonLabel>
                <IonLabel>
                  <IonText>{data.mobile}</IonText>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>I am a: </IonLabel>
                <IonLabel>
                  <IonText>Farmer</IonText>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Language: </IonLabel>
                <IonLabel>
                  <IonText>{data.language}</IonText>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="companyInformation">
            <IonItem slot="header">
              <IonLabel>COMPANY INFORMATION</IonLabel>
            </IonItem>
            <IonList slot="content">
              <IonItem>
                <IonLabel>Company Address: </IonLabel>
                <IonLabel>
                  <IonText>{data.address.fullAddress}</IonText>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Zip Code: </IonLabel>
                <IonLabel>
                  <IonText>{data.address.pincode}</IonText>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Country: </IonLabel>
                <IonLabel>
                  <IonText>{data.address.country}</IonText>
                </IonLabel>
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