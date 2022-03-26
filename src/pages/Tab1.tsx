import React, { useState, useEffect } from 'react';
import { IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import Header from '../components/Header';
import MyCarousel from '../components/MyCarousel';
import Search from '../components/Search';
import SlidingCards from '../components/SlidingCards';
import SocialShare from '../components/SocialShare';
import { isEmpty } from "lodash";
import './Tab1.css';
import Profile from './Profile';
const Tab1: React.FC = () => {
    return (
        <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MyCarousel/>
        <SlidingCards />
        <Search />
        <Profile/>
        <SocialShare />
      </IonContent>
    </IonPage>
    );
};
export default Tab1;