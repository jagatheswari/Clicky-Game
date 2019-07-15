import React,{Component}from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Images from './components/Images/Images.js'
import Deer from './components/assets/images/deer.jpeg'
import Elephant from './components/assets/images/elephant.jpeg'
import Hippo from './components/assets/images/hippo.jpg'
import Horse from './components/assets/images/horse.jpeg'
import Lemur from './components/assets/images/lemur.jpeg'
import Lion from './components/assets/images/lion.jpeg'
import Penguin from './components/assets/images/penguins.jpeg'
import Rams from './components/assets/images/rams.jpeg'
import Rhino from './components/assets/images/rhinos.jpeg'
import Tiger from './components/assets/images/tiger.jpeg'

class App extends Component {
  state = {
    imagesArr: [
      {
        "name":"Deer",
        "id": 1,
        "image": Deer,
      },
      {
        "name":"Elephant",
        "id": 2,
        "image": Elephant,
      },
      {
        "name":"hippo",
        "id": 3,
        "image": Hippo,
      },
      {
        "name":"horse",
        "id": 4,
        "image": Horse,
      },
      {
        "name":"lemur",
        "id": 5,
        "image": Lemur,
      },
      {
        "name":"lion",
        "id": 6,
        "image": Lion,
      },
      {
        "name":"penguin",
        "id": 7,
        "image": Penguin,
      },
      {
        "name":"rams",
        "id": 8,
        "image": Rams,
      },
      {
        "name":"rhino",
        "id": 9,
        "image": Rhino,
      },
      {
        "name":"tiger",
        "id": 10,
        "image": Tiger,
      },
    ]
  }
  render(){
    console.log(this.state)
    const {images} =this.state.imagesArr
    console.log(images)
    return(
      <>
      <Navbar/>
      <Images images={this.state.imagesArr}/>
      </>
    )
  }
}
export default App;
