import React from 'react';

class MovieForm extends React.Component{
  constructor(props){
    super(props);
   this.state={
       current:{name:'',rating:0,duration:''},
   }
  }
  onChangeHander = (value)=>{
    let current = this.state.array;
    current = current.concat(value)
    this.setState({
      array:current
    })
  }
  onChangeHandler=(e)=>{
   const {id, value} = e.target;
   switch(id){
     case 'name':{
      let curr = this.state.current;
      curr.name = value 
      this.setState({current:curr});break;}
     case 'rating':{
      let curr = this.state.current;
      curr.rating = value 
      this.setState({current:curr});break;}
     case 'duration':{
      let curr = this.state.current;
      curr.duration = value 
      this.setState({current:curr});break;}
   }
  
  }
   onSubmitHandler = (e)=>{
    e.preventDefault();
    let obj = {...this.state.current}
    this.props.onChange(obj);
  }
  render(){
    return (
      <section>
        <form onSubmit={e=>e.preventDefault()}>
        <div>
          <label>Movie Name</label>
          <input type='text' id='name' 
          placeholder='Enter Movie name'
          data-testid='nameInput' onChange={(e)=>this.onChangeHandler(e)}/>
        
        </div>
        <div>
          <label>Rating</label>
          <input type='number' id='rating' 
          placeholder='Enter Rating on scale of 1 to 10'
          data-testid='ratingInput'  onChange={(e)=>this.onChangeHandler(e)}/>
        
        </div>
        <div>
          <label>Duration</label>
          <input type='text' id='duration' 
          placeholder='Enter duration in hours or minutes'
          data-testid='durationInput'  onChange={(e)=>this.onChangeHandler(e)}/>
        
        </div>
        <div>
          <button type='submit'
          data-testid='addbutton' onClick={(e)=>this.onSubmitHandler(e)}>Submit</button>
        </div>
        </form>
      </section>
    );
  }
  }

export default MovieForm;
