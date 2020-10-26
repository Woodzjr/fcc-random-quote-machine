import React, { Component } from 'react';
import QuoteMachine from './components/QuoteMachine';
import 'typeface-roboto';
import { Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import {random} from 'lodash';

const styles = {
  container : {
    display : 'flex',
    height : '100vh', 
   alignItems : 'center',
   }
}


class App extends Component{


   constructor(props){
     super(props);
     this.state ={
       quotes: [],
       selectedQuoteIndex: null,
       ColorHolder : [],
     selectedColorIndex: null,
     backgroundColor : ''
    
}    
this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);

this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);

}
   

   componentDidMount(){
     fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json').then(data => data.json())
     .then(quotes =>this.setState({quotes}, this.assignNewQuoteIndex))
   }




get selectedQuote(){
     if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
return undefined ;
}
return this.state.quotes[this.state.selectedQuoteIndex];
     }
  

// return an integer representing an index in state.quotes
// if state.quotes is empty return undefined
//  else return a random index of quotes
 generateNewQuoteIndex(){
   if(!this.state.quotes.length){
     return undefined;
   }
return random(0, this.state.quotes.length - 1);
 }

 assignNewQuoteIndex(){
  this.setState({selectedQuoteIndex : this.generateNewQuoteIndex()})
}


render(){

console.log(this.bgColor)


  return (
    
    <Grid  className = {this.props.classes.container} id = 'quote-box' justify = 'center' style ={{ backgroundColor : this.state.backgroundColor}} container>
      <Grid xs = {11} lg ={8} item>
        
     {
       this.selectedQuote?
       <QuoteMachine  selectedQuote = {this.selectedQuote} assignNewQuoteIndex ={this.assignNewQuoteIndex}/> :
       null
     }

     
     </Grid>
    
    </Grid>
  )
}
  }

export default withStyles(styles)(App);
