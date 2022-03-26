import React, {useState, useEffect } from 'react';
import {IonSearchbar} from '@ionic/react';
import { IonItem, IonLabel } from '@ionic/react';
import PostList from '../PostList';
import { APIService } from '../../Services/api';

const Search: React.FC = () => {
  const [dataList, setDataList] = useState([]);
  useEffect(()=>{
       getList('');
    },[]);
    
  const getList = (text:string) => {
      APIService.axiosCall(`./mock-data/PostList.json`, {
        method: "GET",
        params: {q: text, limit:10},
        successCallBack: (resp:any) => handleResponse(resp),
      });
  };
  const handleResponse = (response:any) => {
    setDataList(response.data);
  };
  const userSearch = (text:string) => {
    if(text.length >= 3) {
      getList(text);
    }
  };

  
  return (
    <div>
      <IonSearchbar onIonChange={e => userSearch(e.detail.value!)}/>
      <IonItem>
          <IonLabel>
            <h3>{`Results ${dataList.length}`}</h3>
          </IonLabel>

        </IonItem>
      <PostList lists={dataList} />

    </div>
  );
};

export default Search;
