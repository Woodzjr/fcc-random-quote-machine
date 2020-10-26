import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

function myFunction() {
    var x= Math.floor(Math.random()* 256);
    var y= Math.floor(Math.random()* 256);
    var z= Math.floor(Math.random()* 256);
  
   
    var bgColor = 'rgb(' + x + ',' + y + ',' + z +')';
  
    document.body.style.background = bgColor;
    document.getElementById("tweet-quote").style.color =bgColor;
    document.getElementById("new-quote").style.background =bgColor;

}

  

const QuoteMachine = ({selectedQuote,assignNewQuoteIndex
   }) => (
    <Card>
        <CardContent>
<Typography  id= 'text'> 
{selectedQuote.quote} - <span id = 'author'>{selectedQuote.author}</span>

</Typography>
        </CardContent>
        <CardActions>
        <Button id = 'new-quote'size= 'small' onClick= {()=>{myFunction(); assignNewQuoteIndex()}}>Next Quote</Button>
        <IconButton 
        id = 'tweet-quote'
        target = '_blank'
        href = {encodeURI(`http://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=woodzjr`)}
        >
            <FontAwesomeIcon icon={faTwitter} size = 'lg'></FontAwesomeIcon>
        </IconButton>
        </CardActions>
    </Card>
);

export default QuoteMachine