import type { Exercise } from '../types/Exercise'
import './ItemCard.css'

type ExerciseCardProps = {
    exercise: Exercise
};

export default function ItemCard({ exercise }: ExerciseCardProps) {
    return (
        <div className="exercise-card">
            <h3>{exercise.name}</h3>
            <p>{exercise.muscleGroup}</p>
        </div>
    )
}
