'use client';
import { useActionState, useState, useEffect } from 'react';
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
  return memory;
};

export default function MemForm() {
  const [state, formAction, isPending] = useActionState(
    updateDB,
    null
  );
  const [messageClass, setMessageClass] = useState('');
  const textAreaHeight = useScrollHeight();

  // Hide (fade out) the 'Memory Saved' message
  useEffect(() => {
    if (state && !isPending) {
      setMessageClass('');
      setTimeout(() => setMessageClass('hidden'), 3000);
    }
  }, [state, isPending]);

  return (
    <form action={formAction} className={styles.memForm}>
      <section className={styles.memFormInputs}>
        <div className={styles.memFormInput}>
          <label htmlFor="title">Subject: </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Fi's first easter..."
          />
        </div>
        <div className={styles.memFormInput}>
          <label htmlFor="year">When: </label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="1975.."
          />
        </div>
        <div className={styles.memFormInput}>
          <label htmlFor="tagged">Who: </label>
          <input
            type="text"
            id="tagged"
            name="tagged"
            placeholder="Kath, Gran Ren..."
          />
        </div>
        <label htmlFor="text-area"></label>
      </section>
      <textarea
        id="text-area"
        name="text-area"
        placeholder="Share your memory here..."
        style={{ height: textAreaHeight }}
        required
      />
      <p className={`${styles.submitMsg} ${styles[messageClass]}`}>
        {state && !isPending && 'Memory Saved'}
      </p>
      <button
        type="submit"
        className={styles.memFormBtn}
        disabled={isPending}
      >
        {isPending ? 'Saving memory' : 'Save memory'}
      </button>
    </form>
  );
}
