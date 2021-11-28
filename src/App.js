import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      textarea : '',
      buttondisabled : true
    }
    
    this.textEventHandle = this.textEventHandle.bind(this);
  }

  displayForm()
  {
    return(
      <div className = "textArea">
        <textarea  cols = "80" rows ="25" onChange = {this.textEventHandle}></textarea>
        <button  disabled = {this.state.buttondisabled} onClick = {this.submitOnClick}>Submit</button>
      </div>

    );
  }
  textEventHandle(event){
    const textarea = event.target.value
    this.setState({textarea} , () => {this.buttonDisabled()});  
  }

  submitOnClick(event){
    event.preventDefault(); 
    alert("Sucessfully Submitted");
  }

  updateLength(){
    return(
      <div>{`${this.state.textarea.length} words.`}</div>
    )

  }
  buttonDisabled(){
    if(this.state.buttondisabled){
      if(this.state.textarea.length < 100){
        this.setState({buttondisabled : true})
      }
      else{
        this.setState({buttondisabled : false})
      }
    }
    else{
        if(this.state.textarea.length < 100){
          this.setState({buttondisabled : true})
        }
        else{
          this.setState({buttondisabled : false})
        }  
    }
  }
    





  render(){
    return(
      <div className = "App">
        <h1>Essay</h1><br/>
        <p>Plz write atleast 100 words.</p>
        <hr/>

        {this.displayForm()}
        {this.updateLength()}
      </div>
    );
  }
}

export default App;