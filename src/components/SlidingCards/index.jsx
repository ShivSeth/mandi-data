import { IonGrid, IonRow, IonCol,IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContentss} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const SlidingCards = ({ lists = [] }) => {
    const slideOpts = {
        initialSlide: 1,
        speed: 100
    };
    return (
        <IonSlides pager={true} options={slideOpts} className="my-5">
            <IonSlide>
              <IonCard>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                    <img src="./assets/images/7.jpeg" />
                    </IonCol>
                    <IonCol>
                    <IonCardSubtitle>
                       Keep close to Nature's heart... and break clear away, once in awhile.
                       </IonCardSubtitle>
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
                     <IonCardSubtitle>
                       Provides a web directory of more than 100 land-grant colleges
                       </IonCardSubtitle>
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
                     <IonCardSubtitle>
                       Gathers and compiles a broad range of empirical data related.
                       </IonCardSubtitle>
                    </IonCol>
                  </IonRow>
              </IonGrid>
            </IonCard>
            </IonSlide>
          </IonSlides>
    );
};

export default SlidingCards;