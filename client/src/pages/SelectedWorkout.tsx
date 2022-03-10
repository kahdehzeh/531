import { IonContent, IonList, IonListHeader, IonPage } from "@ionic/react"

export const SelectedWorkOut = () =>{
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <IonListHeader>
                        WORKOUT!
                    </IonListHeader>
                </IonList>
            </IonContent>
        </IonPage>
    )
}