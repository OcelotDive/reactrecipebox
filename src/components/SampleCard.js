import React from "react";


export class SampleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
  

        
    render() {
        
      
        
  
        return(

      
        
<div className="col-3">
<div id="recipecontainer">
<div id="recipecard" className="shadow">
  <div className="front face">
    <img className="recipeImage" src={this.props.image} alt="test"/>
            <h4 className='recipeName'>{this.props.name}</h4>
            <h5 className="recipeClickBlock">View ingredients</h5>
  </div>
  <div className="back face center">
    <p></p>
    <p><b>Ingredients</b></p>
    <ol>
            <li className="ingredientList">
            {this.props.ingOne}
            </li>
             <li className="ingredientList">
            {this.props.ingTwo}
            </li>
             <li className="ingredientList">
            {this.props.ingThree}
            </li>
            <li className="ingredientList">
            {this.props.ingFour}
            </li>
    </ol>
  </div>
</div>
</div>
            
      
        </div>
        
      
            


        );
    }
}


