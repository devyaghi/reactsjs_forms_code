import React from "react";

export default class Add extends React.Component{


    constructor(props) {
        super(props);
        this.state={cv:''};
    }


    handleCVchange=(e)=>{
        this.setState({cv:e.target.value});
    }


    handlebtn=()=>{
        console.log(this.state.cv);
    }

    render() {

        return(
            <form>
                <label>CV</label>

                <textarea onChange={this.handleCVchange}/>


                <input type="button" value="add" onClick={this.handlebtn} />
                <textarea value={this.state.cv}/>

            </form>

        )
    }

}