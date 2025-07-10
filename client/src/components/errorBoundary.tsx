import {
  Component,
  type ErrorInfo,
  type PropsWithChildren,
} from 'react';
import styles from './errorBoundary.module.css';

interface StateType {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  PropsWithChildren,
  StateType
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(`Breaking Error: ${error} ${errorInfo}`);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
    }
    
    render() {
    function reload() {
        window.location.reload();
    }
    if (this.state.hasError) {
      return (
        <section className={styles.errorWrap}>
          <h1 className={styles.errorHero}>Sorry, something went wrong</h1>
          <button onClick={reload}>Reload Remnis</button>
        </section>
      );
    }
    return this.props.children;
  }
}
