import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SearchBar from '../components/SearchBar';
import { APIService } from '../Services/api';
// import { isEmpty } from "lodash";
import './Tab1.css';

const Tab1: React.FC = () => {

  const [searchData, setSearchData] = React.useState("");
  const [dataList, setDataList] = React.useState(null);

  const searchDataCallback = (res:any) => {
    setSearchData(res);
  };

  const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
    }
  ]

  const getList = () => {
  //   APIService.axiosCall(`https://jsonplaceholder.typicode.com/users`, {
  //     method: "GET",
  //     successCallBack: (resp:any) => handleResponse(resp),
  //   });
  // };

  // const handleResponse = (response:any) => {
    // setDataList(response.data);
    setDataList(data);
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
        {dataList &&
        dataList.map((data:Object, i:any) => (
          <div key={i}>
            {data.name} {data.email}
          </div>
        ))}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
