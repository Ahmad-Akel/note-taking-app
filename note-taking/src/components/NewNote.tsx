import { NoteForm } from "./NoteForm";

export function NewNote() {
  //TODO add logic to this function
  function handleSubmit() {
    return;
  }
  return (
    <>
      <h1>New Note</h1>
      <NoteForm onSubmit={handleSubmit} />
    </>
  );
}
