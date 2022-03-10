import { IonCard, IonCardContent, IonCardSubtitle, IonContent, IonHeader, IonItem, IonList, IonListHeader } from "@ionic/react"
import { useRedirect } from "../utils/redirect"
import { routes } from "../utils/config"

export const WeekContainer = () => {
    const { redirect } = useRedirect()
    return (
        <IonCard button onClick={() => redirect(`${routes.program.workout}`)}>
            <IonCardContent>
                <IonCardSubtitle>
                    Trainingmax
                </IonCardSubtitle>
                <IonList>
                    <IonItem>
                        Press 5x3
                    </IonItem>
                    <IonItem>
                        Press 5x10
                    </IonItem>
                    <IonItem>
                        Assistence works
                    </IonItem>
                </IonList>
            </IonCardContent>
        </IonCard>
    )
}