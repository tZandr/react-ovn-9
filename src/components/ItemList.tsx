import { exerciseData } from '../data/ExerciseData';
import ItemCard from './ItemCard';
import './ExerciseList.css';

export default function exerciseList() {
  return (
    <div className="exercise-list">
      <h2>Exercises</h2>
      {exerciseData.map((exercise) => (
        <ItemCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}
