import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';
import { Form, FormControl, Button, Carousel, CarouselItem } from 'react-bootstrap';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: ''
        }
    }
    changeDeadline() {
       
       this.setState({deadline: this.state.newDeadline })
    }

    render() {
        return(
            <div className="App">
            <div className="CarouselPics">
             <Carousel >
                <Carousel.Item>
                    <img width={400} height={400} alt="Dog in lights" src="https://media.istockphoto.com/photos/closeup-of-red-bauble-hanging-from-christmas-tree-picture-id494500128?k=6&m=494500128&s=612x612&w=0&h=VTfwaA0mqUQwx2A4mFf0dEHBaNckxqakFTe5KWUEc9U=" />  
                </Carousel.Item  >
                <Carousel.Item>
                    <img width={400} height={400} alt="Puppy in lights" src="https://media.istockphoto.com/photos/christmas-gift-on-old-plank-and-defocused-lights-picture-id623537776?k=6&m=623537776&s=612x612&w=0&h=GiwAAqey6Jbz1cE0pCtBqeIvJs27lTpSCeJxYcsHlkQ=" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={400} height={400} alt="Christmas puppy" src="https://cf.ltkcdn.net/dogs/images/std/206270-675x450-Christmas-puppy.jpg" />
                </Carousel.Item>
            </Carousel>
            </div>

            <div className="App-title">Countdown to {this.state.deadline}</div>
            <div>
            <Clock
             deadline={this.state.deadline} 
            />
            </div>
            <Form inline>
                <FormControl className="Deadline-input"
                    placeholder='New date'
                    onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                <Button onClick={() => this.changeDeadline()}>Submit</Button>
            </Form>
            </div>
        )
        
    }
}

export default App;

