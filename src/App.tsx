'use client';

import MemForm from './components/memoryForm';
import styles from './App.module.css';

function App() {
  // const memFormData = new FormData('memForm');
  return (
    <section className={styles.content}>
      <header>
        <nav></nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.heroTitle}>Remnis</h1>
        <MemForm />
      </main>
    </section>
  );
}

export default App;
