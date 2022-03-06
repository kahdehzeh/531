import { IonButton } from "@ionic/react";
import { useState } from "react";

interface config {
    exersize: string
}

export const TrainingmaxCalculator: React.FC<config> = ({ exersize }) => {
    const [reps, setReps] = useState(1)
    const [weight, setWeight] = useState(20)
    const [oneRep, setOneRep] = useState(0)
    const [plates, setPlates] = useState(1.25)

    const oneRepCalc = (rep: number, kg: number) => {
        return setOneRep(kg * (36 / (37 - rep)))
    }

    function round4plates(x: number, m: number) {
        return (x % m) >= (m / 2) ? m * Math.round((x + (m / 2)) / m) : m * Math.round(x / m);
    }

    return (
        <div>
            <form>
                <p>
                    {exersize}
                    <input type="number" min={1} max={10} defaultValue={1} onChange={e => setReps(Number(e.target.value))}></input>
                    reps x
                    <input type="number" min={20} defaultValue={20} onChange={e => setWeight(Number(e.target.value))}></input>
                    kg
                </p>
                <p>
                    Smallest available plates
                    <input type="number" min={0.5} max={5} step={0.25} defaultValue={1.25} onChange={e => setPlates(Number(e.target.value))} />
                </p>
                <IonButton onClick={() => oneRepCalc(reps, weight)}>Calculate Training Max</IonButton>
            </form>
            {round4plates(oneRep * 0.9, plates * 2)}
        </div >
    )
}