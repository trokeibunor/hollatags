import React from "react";

export default class NewsLetter extends React.Component {
    constructor(props){
        super(props);
        this.state= {value: ''}

        

        const handleEmail = (event) =>{
            this.setState({value: event.target.value})
        }
        const handleSubmit = (event) =>{
            event.preventDefault()
        }
        this.handleEmail = handleEmail.bind(this)
        this.handleSubmit = handleSubmit.bind(this)
    }
    render (){
        return(
            <>
                <div className="newsCon">
                    <h2>Subscribe to get Latest articles</h2>
                    <p>Enter your email address to get notified of new articles</p>
                    <form className="formHolder" onSubmit={this.handleSubmit}>
                        <input type="text" id="textInput" placeholder="Email Address" value={this.state.value} onChange={this.handleEmail} />
                        <input type="submit" id="submit" value="Get In Touch" />
                    </form>
                </div>
            </>
        )
    }
}