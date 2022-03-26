import {  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const PostList = ({ lists = [] }) => {

    return (
        <div>
      {lists.length > 0 && lists.map(list => {
      	return <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
             Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      	  </IonCardContent>
        </IonCard>
      })}
      </div>
    );
};

export default PostList;