import styles from './App.module.scss'
import AppRouter from './components/app-router/AppRouter'

function App() {
  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  )
}

export default App
