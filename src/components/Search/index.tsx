import React, {useState, useEffect } from 'react';
import {IonSearchbar} from '@ionic/react';
import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { chevronBack, chevronForward } from "ionicons/icons";
import PostList from '../PostList';
import { APIService } from '../../Services/api';
import './search.css';

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
    <div className="f-search">
      <IonSearchbar onIonChange={e => userSearch(e.detail.value!)}/>
      <div className="filter-section">
        <div className="result-count left">{`Results ${dataList.length}`}</div>
        <div className="filter-section right">Filter</div>
      </div>
      <PostList lists={dataList} />
      <div className="number-of-page">
          <IonIcon icon={chevronBack} slot="start"></IonIcon>
          <div className="page-number">
           <span className="selected">1</span>
           <span>2</span>
           <span>3</span>
           <span>4</span>
          </div>
          <IonIcon icon={chevronForward} slot="end"></IonIcon>
      </div>
    </div>
  );
};

export default Search;
