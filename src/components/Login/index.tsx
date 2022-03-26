import React, { useState, useEffect } from 'react';
import { IonItem, IonLabel, IonInput, IonButton, IonCheckbox } from '@ionic/react';
import { useForm } from 'react-hook-form';
import { APIService } from '../../Services/api';

const Login: React.FC = () => {


    return (
        <div>
	     <form className="ion-padding">
		  <IonItem>
		    <IonLabel position="floating">Username</IonLabel>
		    <IonInput />
		  </IonItem>
		  <IonItem>
		    <IonLabel position="floating">Password</IonLabel>
		    <IonInput type="password" />
		  </IonItem>
		  <IonItem lines="none">
		    <IonLabel>Remember me</IonLabel>
		    <IonCheckbox defaultChecked={true} slot="start" />
		  </IonItem>
		  <IonButton type="submit" expand="block">
		    Login
		  </IonButton>
		</form>
    </div>
    );
};

export default Login;