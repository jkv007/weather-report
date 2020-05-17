import React from 'react';
import "./weatherapp1.css"


const Form = props =>{
    return(
        <div className="">
        <div className="container">
            <div>{props.error?error():null}</div>
<form onSubmit={props.loadweather}>
               <div className="form-row"> 
               <div className="col-md3-3 offset-md-2"><input className="form-control" type="text" name="city" placeholder="city"></input></div>
                <div className="col-md3-3 "><input className="form-control" type="text" name="country" placeholder="country"></input></div>
               <div className =" col-md-3 mt-md-0 text-md-left"><button className="btn btn-outline-dark">Get Weather</button></div>
                </div>
                </form>        
</div>
</div>
);
    
};
function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            please enter city and country
        </div>
    )
}


export default Form;