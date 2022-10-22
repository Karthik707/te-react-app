import React,{Component} from "react";


//Toggle
export default class Trainees extends Component{
    constructor(){
        super();
        this.state={show:false};
        this.toggle=this.bind(this);
    }
    toggle()
    {
        this.setState({show:!this.state.show});

    }
    // //conditional rendering(ternary operator)
    // render(){
    //     return(
    //         <>
    //             <h3>No of trainees in dotnet</h3>
    //             {
    //                 this.state.show?
    //                 (
    //                     <>
    //                         <button onClick={this.toggle}>-</button>
    //                         <br>
    //                         </br>
    //                         <h2>32 participants</h2>
    //                     </>
    //                 )
    //                 (
    //                     <>
    //                         <button onClick={this.toggle}>+</button>
    //                         <br>
    //                         </br>
                            
    //                     </>
    //                 )
    //             {"}"}
                
    //         </>
    //     )
    // }
}
