import React from 'react';
import Alert from 'react-bootstrap/Alert';


class Error extends React.Component{
   
    render(){
        
        return(
            <>
            <Alert variant="Success" onClose={() => this.props.toggleError()} dismissible>
            <Alert.Heading>You got an error!</Alert.Heading>
            
            
          </Alert>
           </>
        );
    }
}

export default Error;