import './ExerciseList.css';
import { useExerciseStore } from '../store/exerciseStore';
import ItemCard from './ItemCard';

export default function ItemList() {
  const exercises = useExerciseStore((state) => state.exercises);

  return (
    <div className="exercise-list">
      {exercises.map((exercise) => (
        <ItemCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}
