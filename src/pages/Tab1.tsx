import React, {useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SearchBar from '../components/SearchBar';
import { APIService } from '../Services/api';
import { isEmpty } from "lodash";
import './Tab1.css';

const Tab1: React.FC = () => {

  const [searchData, setSearchData] = useState("");
  const [dataList, setDataList] = useState([{
    name: '',
    email: ''
  }]);

  const searchDataCallback = (res:any) => {
    setSearchData(res);
  };

  const getList = () => {
    APIService.axiosCall(`https://jsonplaceholder.typicode.com/users`, {
      method: "GET",
      successCallBack: (resp:any) => handleResponse(resp),
    });
  };

  const handleResponse = (response:any) => {
    setDataList(response.data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SearchBar inputText={searchDataCallback}
        onClick={getList}
        disabled={searchData.length < 3 ? true : false}
        dataTest = "searchBar" />
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
