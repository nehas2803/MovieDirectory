import React,{useState} from 'react';
import MovieForm from './movieform';

class MovieList extends React.Component {
constructor(props){
  super(props);
  this.state={
    array:[],
    searchArray:[],
  };
}
 onChangeHander = (value)=>{
  let current = this.state.array;
  let index = current.findIndex(item=>item.name===value.name);
  if(index!=-1){
      current[index]=value;
      this.setState({
        array:current
      }) 
  }
  else{
current.push(value);
console.log(current)
  this.setState({
    array:current
  })
}
}
onSearchHandler=(e)=>{
  console.log(e.target.value)
  if(e.target.value.length>1){
   let current = this.state.array;
   
   let search = current.filter(item=>item.name.includes(e.target.value));
   this.setState({searchArray:search})
  }
 }

render(){
    console.log(this.state)
    return (
      <section>
       <MovieForm onChange={this.onChangeHander} movies={this.state.array}/>
       <div>
         <label>Search</label>
         <input type='text' data-testid='search-input' 
         onChange={(e)=>this.onSearchHandler(e)}></input>
       </div>
       <table>
         <tr>
         <th>Name</th>
          <th>Ratings</th>
           <th>Duration</th>
         </tr>{
          this.state.searchArray.length>0 && this.state.searchArray.map((item,key)=>
            <tr>
          <td>{item.name}</td>
          <td>{item.rating}</td>
          <td>{item.duration}</td></tr>)
         }
       </table>
      </section>
    );
}
  }

export default MovieList;
