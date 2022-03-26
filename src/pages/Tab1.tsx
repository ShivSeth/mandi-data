import React, { useState, useEffect } from 'react';
import { IonGrid, IonRow, IonCol,IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import Header from '../components/Header';
import MyCarousel from '../components/MyCarousel';
import Search from '../components/Search';
import { isEmpty } from "lodash";
import './Tab1.css';
const Tab1: React.FC = () => {
    const slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    return (
        <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MyCarousel></MyCarousel>
        <IonSlides pager={false} options={slideOpts} className="my-5">
            <IonSlide>
              <IonCard>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                    <img src="./assets/images/7.jpeg" />
                    </IonCol>
                    <IonCol>
                    <IonCardTitle>
                       Keep close to Nature's heart... and break clear away, once in awhile.
                       </IonCardTitle>
                    </IonCol>
                  </IonRow>
              </IonGrid>
            </IonCard>
            </IonSlide>
            <IonSlide>
             <IonCard>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                    <img src="./assets/images/7.jpeg" />
                    </IonCol>
                    <IonCol>
                     <IonCardTitle>
                       Provides a web directory of more than 100 land-grant colleges
                       </IonCardTitle>
                    </IonCol>
                  </IonRow>
              </IonGrid>
            </IonCard>
            </IonSlide>
            <IonSlide>
              <IonCard>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                    <img src="./assets/images/7.jpeg" />
                    </IonCol>
                    <IonCol>
                     <IonCardTitle>
                       Gathers and compiles a broad range of empirical data related.
                       </IonCardTitle>
                    </IonCol>
                  </IonRow>
              </IonGrid>
            </IonCard>
            </IonSlide>
          </IonSlides>
        <Search></Search>
      </IonContent>
    </IonPage>
    );
};
export default Tab1;