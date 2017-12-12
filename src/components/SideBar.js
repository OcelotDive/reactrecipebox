import React from 'react';
import $ from 'jquery'; 
import { IngredientBar } from './IngredientBar'


let ingredientsArray = [];
let ingredientsList = [];
export class SideBar extends React.Component {
   
     constructor(props) {
        super(props);
    
         this.returnIngredients= this.returnIngredients.bind(this);
         
        this.state = {
            nameEntered: '',
            imageEntered: '',
            ingredientsEntered: ingredientsList,
            ingredients: ingredientsArray,
            addClicked: false
        };
    }
    
    
    
     addWasClicked() {
       this.setState ({
           addClicked: !this.state.addClicked  
       })
         
                      $('input').val('');
                   $('.box').prop('checked', false);
                   ingredientsArray = [];
                   ingredientsList = [];
                   setTimeout(() =>  this.setState ({
           
                        ingredients: ingredientsArray
           
       }));
         
   } 
    
    plusIngredient() {
        if(ingredientsArray.length === 8){alert('Ingredients limit reached'); return}
        ingredientsArray.push(<IngredientBar ingredientsInfo={this.returnIngredients}/>)
        this.setState ({
           ingredients: ingredientsArray
       })
        $('.addIngredientButton').prop('disabled', true);
        $('.deleteIngredientButton').prop('disabled', true);
    }
    minusIngredient() {
        
        ingredientsArray.pop();
        ingredientsList.pop();
        this.setState ({
            ingredients: ingredientsArray
        })
    }
    
       watchChangeName (event) {
    this.setState({
      nameEntered: event.target.value 
    });
                   
  }
        watchChangeImage (event) {
    this.setState({
      imageEntered: event.target.value
    });
           
  }
    
    commitRecipe () {
        this.setState ({
           
           addClicked: false
           
       })
         this.props.details(this.state);
        setTimeout(() =>this.props.action());
                   
       
      
                   $('input').val('');
                   $('.box').prop('checked', false);
                   ingredientsArray = [];
                   ingredientsList = [];
                   setTimeout(() => this.setState ({
           
                        ingredients: ingredientsArray
           
       }));
                           
    }
    

     returnIngredients(ingredientsEntered) {
         ingredientsList.push(ingredientsEntered);
     
        this.setState ({
            ingredientsEntered: ingredientsList
            
        })
        
        
    }

   
 
      
    
    
    
    render() {
    
          const onOffClass = this.state.addClicked  ? 'addContainerOn animated slideInLeft' : 'addContainerOff animated slideOutLeft';
            const addMessage = this.state.addClicked ? 'Cancel' : 'New Recipe Card';
        const ingredients = this.state.ingredients.map((ing) =>
                                               // <IngredientBar entry={this.getIngredientsEntry}/>  
                                                       ing
            );
        
         
        return (
        <div >
            <button className="btn btn-success btn-lg  addButton" onClick={()=> this.addWasClicked()}>{addMessage}</button>
           
        <div id="recipeForm" className={onOffClass}>
            <h4>Enter New Recipe</h4>
            <div className="recipeNameBox">
            <label className="form-check-label">Recipe Name:&nbsp;</label><input type="textbox" className="form-control form-control-sm" placeholder="Enter Recipe Name" onChange={(event) => this.watchChangeName(event)} />
                </div>
            <div className="recipeImageBox">
            <label>Recipe Image:&nbsp;</label><input className="form-control form-control-sm" type="textbox" placeholder="paste image address" onChange={(event) => this.watchChangeImage(event)}/><label>&nbsp;(Optional)</label>
                </div>
                {ingredients}
            <button className="btn btn-default addIngredientButton" onClick={()=> this.plusIngredient()}>+ Ingredient</button>
            <button className="btn btn-default deleteIngredientButton" onClick={()=> this.minusIngredient()}>- Ingredient</button>
            <div className="clear"></div>
            <button className="btn btn-default addRecipeButton" onClick={()=> this.commitRecipe()}>Commit Recipe</button>
           
            </div>
                
</div>
        )
        
    }
    
    
    
}