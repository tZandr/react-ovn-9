import { create } from "zustand";
import type { Exercise } from "../types/Exercise";
import { exerciseData } from "../data/ExerciseData";

type ExerciseStore = {
  exercises: Exercise[];
  addExercise: (ex: Omit<Exercise, "id">) => void;
};

export const useExerciseStore = create<ExerciseStore>((set) => ({
  exercises: exerciseData, 

  addExercise: (ex) =>
    set((state) => ({
      exercises: [
        ...state.exercises,
        {
          id: crypto.randomUUID(),
          ...ex,
        },
      ],
    })),
}));
