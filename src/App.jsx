
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import AddTask from './components/AddTask'
import Header from './components/header'
import TasksList from './components/TasksList'

function App() {

  return (
    <Container>
     <Header/>
     <Row className="justify-content-md-center">
        <Col lg="6">
        <AddTask/>
        </Col>
    </Row>
    <TasksList/>
     
    </Container>
  )
}

export default App;
