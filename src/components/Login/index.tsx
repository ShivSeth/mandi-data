import React, { useState, useEffect } from 'react';
import { IonItem, IonLabel, IonInput, IonButton, IonCheckbox, IonIcon } from '@ionic/react';
import { personCircleOutline } from "ionicons/icons";
import { useForm } from 'react-hook-form';
import { APIService } from '../../Services/api';
import './login.css';

const Login: React.FC = () => {


    return (
        <div className="user-login">
         <h2 className="login-heading">
         	<IonIcon icon={personCircleOutline} size="large"></IonIcon>&nbsp;<span>Login</span>
         </h2>
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