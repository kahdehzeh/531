import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { TrainingmaxCalculator } from '../components/TrainingMax';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculate Your Training Max</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TrainingmaxCalculator exersize='Press' />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
