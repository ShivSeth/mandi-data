import React, {useState, useEffect } from 'react';
import {IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import { APIService } from '../Services/api';
import { isEmpty } from "lodash";
import './Tab1.css';

const Tab1: React.FC = () => {
  const [dataList, setDataList] = useState([{
    name: '',
    email: ''
  }]);


  const getList = (text:string) => {
    if(text.length >= 3) {
      APIService.axiosCall(`https://jsonplaceholder.typicode.com/users`, {
        method: "GET",
        successCallBack: (resp:any) => handleResponse(resp),
      });
    }
  };

  const handleResponse = (response:any) => {
    setDataList(response.data);
  };

  return (
    <IonPage>
      <Header  />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar onIonChange={e => getList(e.detail.value!)}/>
        <IonContent>
        {!isEmpty(dataList) &&
          dataList.map((data, i) => (
            <div key={i}>
              {data.name} {data.email}
            </div>
          ))
        }
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
