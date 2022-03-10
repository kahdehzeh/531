import { IonContent, IonGrid, IonHeader, IonItem, IonPage, IonText, IonTitle, IonToolbar, IonRow } from '@ionic/react';
import { WeekContainer } from '../components/WeekContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow style={{display:"flex",justifyContent:"space-between"}}>
            <IonText>
              Cycle: 1
            </IonText>
            <IonText>
              Week: 1
            </IonText>
          </IonRow>
        </IonGrid>
        <WeekContainer />
        <WeekContainer />
        <WeekContainer />
        <WeekContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
