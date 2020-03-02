import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './animals.css'
//import {animals} from "./data/animals.js"
//can also be saved in different file and imported as

class App extends Component {
  state = {
    index: 0,
    //animals:animals   // if imported from different files
    animals:[
      {
        name: 'Cat',
        image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
      },
      {
        name: 'Dog',
        image:
          'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
      },
      {
        name: 'Koala',
        image:
          'https://pbs.twimg.com/profile_images/1367917640/Twitter_Profile_Picture_400x400.jpg'
      },
      {
        name: 'Lion',
        image:
          'https://www.bornfree.org.uk/storage/media/content/images/Field%20Conservation%20Work/Meru/meru-1.jpg'
      },
      {
        name: 'Zebra',
        image:
          'https://africanzebra.files.wordpress.com/2012/11/zebra-4-400-x-400.jpg?w=584'
      },
      {
        name: 'Tiger',
        image:
          'https://img.apmcdn.org/1d7e509f9c3948721d903c2c77c97cc8ce30a02a/square/d31ef8-20161130-molniy.jpg'
      },
      {
        name: 'Elephant',
        image:
          'https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/08/elephant-235105.jpg?h=3fbe8d4f&itok=9_KcfZat'
      },
      {
        name: 'Hyena',
        image:
          'https://dlp2gfjvaz867.cloudfront.net/product_photos/52538777/Hyena_20smaller_400sq.jpg'
      },
      {
        name: 'Wild Dog',
        image:
          'https://2.bp.blogspot.com/_DfiJkdLFAtk/TMkzrmSXiVI/AAAAAAAABMI/G2u5rD64FqM/s400/licaone01.jpg'
      }
    ]
  };
  nextAnimal = () => {
    if (this.state.index < this.state.animals.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };
  render() {
    const { index, animals } = this.state;
    return (
      <div className="animal-div">
        <div>
          <h1>{animals[index].name}</h1>
          <img src={animals[index].image} alt={animals[index].name} />
          <div>
            <button onClick={this.nextAnimal}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;