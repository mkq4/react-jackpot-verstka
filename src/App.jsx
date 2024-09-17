import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import cl from "./App.module.css";
function App() {

  return (
    <div className={cl.wrapper}>
      <img className={cl.bgc} src="./images/bgc.png" alt="" />
      <Header/>
      <Main/>
      <Footer />
    </div>
  )
}

export default App
