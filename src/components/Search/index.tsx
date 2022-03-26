import React, {useState, useEffect } from 'react';
import {IonSearchbar} from '@ionic/react';
import { IonItem, IonLabel, IonIcon, IonModal } from '@ionic/react';
import PostList from '../PostList';
import Pagination from '../Pagination';
import FilterLayout from '../FilterLayout';
import { APIService } from '../../Services/api';
import {round } from 'lodash';
import './search.css';

const Search: React.FC = () => {
  const resultLimit = 10;
  const [dataList, setDataList] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [totalPage, setTotalPage] = useState(1);

  useEffect(()=>{
       getList();
    },[]);
    

    useEffect(()=>{
       getList();
    },[currentPage]);
    
  const getList = () => {
      APIService.axiosCall(`./mock-data/PostList.json`, {
        method: "GET",
        params: {q: searchText, limit:resultLimit, currentPage},
        successCallBack: (resp:any) => handleResponse(resp),
      });
  };
  const handleResponse = (response:any) => {
    setDataList(response.data);
    const len = response.data.length || 1;
    const tPage = (round(len/resultLimit) + (len%resultLimit>0?1:0));
    setTotalPage(tPage);

  };
  const userSearch = (text:string) => {
    setSearchText(text);
    if(text.length >= 3) {
      getList();
    }
  };

  const filterProps = {
    filterClose: (e: any)=>{
      !!e && e.preventDefault();
      setFilterOpen(false);
    }
  }

  const paginationProps = {
    currentPage,
    totalPage,
    pageChange: (cPage: any) => setCurrentPage(cPage)
  }

  const startListNumber = (resultLimit * currentPage) - resultLimit || 1,
    endListNumber = (dataList.length > resultLimit) ? resultLimit * currentPage : dataList.length + (resultLimit * (currentPage - 1));


  return (
    <div className="f-search">
      <IonSearchbar onIonChange={e => userSearch(e.detail.value!)}/>
      <div className="filter-section">
        <div className="result-count left">{`Results ${startListNumber} - ${endListNumber} of ${dataList.length}`}</div>
        <div className="filter right" onClick={()=>setFilterOpen(true)} >Filter</div>
      </div>
      
      <PostList lists={dataList} />
      <IonModal isOpen={filterOpen} >
         <FilterLayout {...filterProps} />
      </IonModal>
      <Pagination {...paginationProps} />
    </div>
  );
};

export default Search;
