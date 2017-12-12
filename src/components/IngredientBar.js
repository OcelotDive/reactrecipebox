import React from "react";
import $ from 'jquery'; 
let ingCounter = 0;
export class IngredientBar extends React.Component {
         constructor(props) {
        super(props);
        this.state = {
         ingredientsEntry:  ''
        };
    }
    
    watchChangeIngredient (event) {
    this.setState({
      ingredientsEntry: event.target.value
        
    });
   
           
  }
    confirm() {
       
        this.props.ingredientsInfo(this.state.ingredientsEntry)
          setTimeout(function() {
        $('.box').prop('checked', false); 
        $('input').eq(-1).prop('disabled', true);
        $('input').eq(-2).prop('disabled', true);
        $('label:last').text('ADDED').css('color', 'green');
        $('.addIngredientButton').prop('disabled', false);
        $('.deleteIngredientButton').prop('disabled', false)         
          },500)
       
    }
  
   
    
    render() {
        
        return(
          <div className="ingredientBar">
            
                <label>Ingredient:&nbsp;</label><input className="ingText" className="form-control form-control-sm" type="textbox" onChange={(event) => this.watchChangeIngredient(event)}/><label className="addText">Add Ingredient</label>&nbsp;&nbsp;<input className="box" type="checkBox" onClick={() =>this.confirm()}></input>
                
            
            </div>
        );
    }
}