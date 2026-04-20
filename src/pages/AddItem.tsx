import AddItemForm from "../components/AddItemForm";
import { useExerciseStore } from "../store/exerciseStore";

export default function AddItem() {
  const addExercise = useExerciseStore((state) => state.addExercise);

  return (
    <div>
      <h1>Add Item</h1>
      <AddItemForm onAddExercise={addExercise} />
    </div>
  );
}
