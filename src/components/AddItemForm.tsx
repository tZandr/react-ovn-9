import { useState } from 'react';
import type { Exercise } from '../types/Exercise';
import type { MuscleGroup } from '../types/MuscleGroup';
import { muscleGroups } from '../types/MuscleGroup';
import './AddItemForm.css';

type ExerciseCardProps = {
  onAddExercise: (exercise: Omit<Exercise, 'id'>) => void;
};

export default function AddItemForm({ onAddExercise }: ExerciseCardProps) {
  const [name, setName] = useState<string>('');
  const [muscleGroup, setMuscleGroup] = useState<MuscleGroup | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!muscleGroup) {
      alert('Please select a muscle group.');
      return;
    }

    onAddExercise({ name, muscleGroup });

    setName('');
    setMuscleGroup(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="buttonGroup">
        {muscleGroups.map((group) => (
          <button
            key={group}
            type="button"
            className={muscleGroup === group ? 'selected' : ''}
            onClick={() => setMuscleGroup(group)}
          >
            {group}
          </button>
        ))}
      </div>
      <button id="addExerciseButton" type="submit">
        Add Exercise
      </button>
    </form>
  );
}
