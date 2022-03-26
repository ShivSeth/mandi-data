import React, {useState, useEffect } from 'react';
import { IonItem, IonLabel, IonInput, IonButton, IonCheckbox } from '@ionic/react';
import { APIService } from '../../Services/api';

const Registration: React.FC = () => {
  
  return (
     <div>
       <form className="ion-padding">
      <IonItem>
        <IonLabel position="floating">First Name</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Last Name</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="email" />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Mobile</IonLabel>
        <IonInput />
      </IonItem>
     
      <IonButton type="submit" expand="block">
        Sign UP
      </IonButton>
    </form>
    </div>
  );
};

export default Registration;
