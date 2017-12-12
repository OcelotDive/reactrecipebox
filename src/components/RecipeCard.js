import React from "react";


export class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
  
    remove() {
        
    }
        
    render() {
        
           const inglist = this.props.ingList.map((ing) =>
                                         
                                                <li className="ingredientList">{ing}</li>
            );
        
  
        return(

      
        
<div className="col-3">
<div id="recipecontainer">
<div id="recipecard" className="shadow">
  <div className="front face">
    <img className="recipeImage" src={this.props.image} alt="Recipe image"/>
            <h4 className='recipeName'>{this.props.name}</h4>
            <h5 className="recipeClickBlock">View ingredients</h5>
  </div>
  <div className="back face center">
    <p></p>
    <p><b>Ingredients</b></p>
    <ol>
       {inglist}
    </ol>
     <button className="removeButton" onClick={()=> this.props.remove(this.props.name)}>Remove Card</button>       
  </div>
</div>
</div>
            
      
        </div>
        
      
            


        );
    }
}


