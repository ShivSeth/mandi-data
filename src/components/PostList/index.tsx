import {  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonAccordion, IonItem, IonLabel, IonList, IonAccordionGroup, IonIcon } from '@ionic/react';
import { pin, wifi, wine, warning, walk, heartOutline, heart } from 'ionicons/icons';
import { useState } from 'react';
import './post.css';

export const PostList = ({ lists = [] }) => {
  const [favList, setFavList] = useState({});

  const makeFavourite = (flag: any, index: number) => {
    Object.assign(lists[index], {fav: flag});
    setFavList({ [index]: flag });
  }

    return (
      <div>
      {lists.length > 0 && lists.map((list:any, i) => {
      	return <IonCard key={`index-${i}`}>
          <IonCardHeader>
            <IonCardSubtitle>{list.product} <IonIcon className="fav-icon" icon={list.fav ? heart : heartOutline} size="large" onClick={() => makeFavourite(!list.fav, i )}/></IonCardSubtitle>

            <IonCardTitle >{list.category} - {list.variety} </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className='card-content'>
              <IonLabel>Crop Year: {list.cropYear}</IonLabel>
      	  </IonCardContent>
          <IonAccordionGroup>
          <IonAccordion value="colors">
            <IonItem slot="header">
            <IonLabel>Quatity: {list.weight}</IonLabel>
            </IonItem>
            <IonList slot="content">
              <IonItem>
                <IonLabel>{list.description}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Quatity: {list.weight}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Price: {list.pricePerWeight}/{list.weightUnit}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Produced By:  {list.farmer?.name}</IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          </IonAccordionGroup>
        </IonCard>
      })}
      </div>
    );
};

export default PostList;