import logo from './logo.svg'
import './App.css'
import UserList from './components/UserList'
import { ThemeProvider } from 'styled-components'

const theme = {
  textColor: "#5c5c5c",
  mainColor: "#33c9ff",
  highlightColor: "#fff",

  fontSize: "16px",
  fontFamily: "Roboto"
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserList />
      </ThemeProvider>
    </div>
  )
}

export default App
