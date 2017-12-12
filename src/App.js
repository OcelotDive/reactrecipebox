import React, { Component } from 'react';

import './App.css';
import { SideBar } from "./components/SideBar";
import { RecipeCard } from "./components/RecipeCard";
import { SampleCard } from "./components/SampleCard";
let ls = require('local-storage');




class App extends Component {
  
       constructor(props) {
        super(props);
           this.returnCardDetails = this.returnCardDetails.bind(this);
           this.increaseCards = this.increaseCards.bind(this);
           this.decreaseCards = this.decreaseCards.bind(this);
           //some state
        this.state = {
            cards :   ls('storedInfo') !== null ? ls('storedInfo') : ls('storedInfo', []),
            recipeName: '',
            recipeImage: '',
            recipeIngredients: [
        
            ]
            
        };
         
    }
  
    //this runs in timeout to execute after state has been updated and past
  increaseCards() {
      
        //cardArray.push(<RecipeCard name={this.state.recipeName} image={this.state.recipeImage} ingList={this.state.recipeIngredients}/>);
      
     let temp =  ls('storedInfo');
      temp.push([this.state.recipeName,this.state.recipeImage, this.state.recipeIngredients])
      ls('storedInfo', temp)
     
      this.setState ({
          cards: ls('storedInfo')
      })
     
      
  }  
    
    decreaseCards(index) {
        let temp = ls('storedInfo')
        alert(index)
        for (let i = temp.length; i--;){
           
               if(index === temp[i][0]){
                      temp.splice(i, 1);                 
                                       }
        }
        ls('storedInfo', temp)
        this.setState ({
          cards: ls('storedInfo')
      })
    }
    
    returnCardDetails(details) {
        this.setState ({
            recipeName: details.nameEntered,
            recipeImage: details.imageEntered,
            recipeIngredients: details.ingredientsEntered
        })
        
       
    }
    
  render() {
   
   
       
   
      console.log(ls('storedInfo'))
                 
   
       const cards =  ls('storedInfo').map((val) =>
                          val  = <RecipeCard name={val[0]} image={val[1]} ingList={val[2]} remove={this.decreaseCards}/>        
              
            );

      
    return (
     
      <div className="App ">
                                        
        <header className="App-header">
           
          <h1 className="App-title"> Recipe Box </h1>
         
        </header>
        <SideBar action={this.increaseCards} details={this.returnCardDetails}/>
        <div className='container cardContainer' >
        <div className="row">
       <SampleCard name='Spaghetti bolognese' ingOne='Spaghetti dry or fresh' ingTwo="Minced Beef" ingThree='Chopped Tomatoes' image={require('./images/spag.jpg')} />
       <SampleCard name='Chorizo ciabatta' ingOne='2 small or 1 large ciabatta' ingTwo="150g pack cooking chorizo" ingThree='200g roasted red peppers' ingFour='75g pesto' image={require('./images/chorizo-ciabatta.jpg')} />
       
    
  {cards}
        

       </div>
        
        </div>
             
       
        </div>
    );
  }
}

export default App;
