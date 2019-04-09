import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect } from 'react-router-dom';
import styled from 'styled-components'
import SideMenu from './SideMenu';
import{Button, Grid} from '@material-ui/core'
import logo from './logo.svg'

/*const Login = () =>(
    <Container>
        <Grid container direction='column' alignItems='center' spacing={40}>
        <Grid item>
      
        <h1 style={{width:'100%'}}>LOGIN</h1>
        
        </Grid>
        
        <Grid item xs={12} > 
        <FacebookButton  >Entrar com Facebook</FacebookButton>
        </Grid>
        </Grid>
    </Container>
)
const Container = styled.div`
  padding: 20px;
`

const FacebookButton = styled(Button).attrs({
    variant:'contained',
    fullWidth:true
})`
&MuiButton-root-98.MuiButton-root-98{
    text-transform:none
    font-size:25px;
    max-widht:480px;
    padding:15px;
}*/

class Login extends Component{


    render(){
        return(
            <Router>
            <html>
            <head>

            </head>
            <body>
                <div className="header"> 

                </div>
            </body>
            <body>
                <div className="fundo">
                  <div className="login">
                  <h1>LOGIN</h1>
                  <form action="index.html" method="post">
                  <div className="tbox">
                  <input type="email" placeholder="@username" required>

                  </input>

                  </div>
                  <div className="tbox">
                  <input type="password" placeholder="@password" minlength="6" required >
                  
                  </input>

                  </div>
                  {/* <Link to="/SideMenu" className= "btn"  >LOGIN</Link>  */}
                  {/* <Switch> */}
                  {/* <Route exact path='/SideMenu' component={SideMenu}/>  */}
                   {/* </Switch> */}
                    <input className= "btn" type="submit" name="" value="LOGIN" onClick={this.handleClick} > 
                   </input>   

                  </form>
                  <a className="b1" href="#">FORGOT PASSWORD ?</a>
                  <a className="b2" href="#">CREATE AN ACCOUNT </a>
                  </div>                 
                </div>
            </body>
            </html>
            </Router>
        );
    }

    componentDidMount(){
        
    }
   /* refreshPage(){ 
        window.location.reload(); 
    }*/
}
export default Login;