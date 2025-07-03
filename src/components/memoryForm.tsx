'use client';
import { useActionState } from 'react';
import { useScrollHeight } from '../hooks/useScrollHeight';
import styles from './memoryForm.module.css';

interface Memory {
  title?: string;
  year?: string;
  who?: string;
  memoryText?: string;
}

const updateDB = (_prevMem: Memory | null, formData: FormData) => {
  const memory: Memory = Object.fromEntries(formData.entries());
  console.log(memory);
  return  memory;
};

export default function MemForm() {
  const [state, formAction, isPending] = useActionState(
    updateDB,
    null
  );
  const textAreaHeight = useScrollHeight();

  return (
    <form action={formAction} className={styles.memForm}>
      <label htmlFor="title">Subject: </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Fi's first easter..."
      />
      <label htmlFor="year">When: </label>
      <input type="text" id="year" name="year" placeholder="1975.." />
      <label htmlFor="tagged">Who: </label>
      <input
        type="text"
        id="tagged"
        name="tagged"
        placeholder="Kath, Gran Ren..."
      />
      <label htmlFor="text-area"></label>
      <textarea
        id="text-area"
        name="text-area"
        placeholder="Share your memory here..."
        style={{ height: textAreaHeight }}
        required
      />

      <button
        type="submit"
        className={styles.memFormBtn}
        disabled={isPending}
      >
        {isPending ? 'Saving memory' : 'Save memory'}
      </button>
      {!!state && !isPending && <p>Memory Saved</p>}
    </form>
  );
}
