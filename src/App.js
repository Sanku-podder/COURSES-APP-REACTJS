import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';
import Course from './component/Course';
import Allcourses from './component/Allcourses';
import Addcourse from './component/Addcourse';
import Header from './component/Header';
import Menu from './component/Menu';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';

function App() {
  const btnhandle =()=>{
    toast.success("done",{position:'top-center'});
  };
  return (
    <div>
        {/* <ToastContainer/> */}
      {/* <h1>sanku podder</h1>
      <Button color='primary' onClick={btnhandle}> click me</Button>  */}

      <Router>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
            <Menu/>
          </Col>
          <Col md={8}>
            <Routes>
            <Route path='/' Component={Home} exact/>
            <Route path='/add-course' Component={Addcourse} exact/>
            <Route path='/view-courses' Component={Allcourses} exact/>
            <Route path='/about-us' Component={About} exact/>
            <Route path='/contact-us' Component={Contact} exact/>
            </Routes>
          </Col>
        </Row>
      </Container>

      </Router>
    </div>
  );
}

export default App;
