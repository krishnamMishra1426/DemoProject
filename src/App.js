// import AddToCard from "./components//AddToCard/AddToCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Page/Header/Header";
import Footer from './Page/Footer/Footer';
import Main from './Page/Main/Main';
import BlogPage from './Page/BlogPage/BlogPage';
import WhyWePage from './Page/WhyWePage/WhyWePage';
 


function App() {

  return (
    <>
    <Header/>
    <Main/>
    <BlogPage/>
    <WhyWePage/>
    <Footer/>
     {/* <AddToCard/> */}
    </>
  );
}

export default App;
