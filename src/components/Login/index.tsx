import Nav from '../Nav';
import { Container, Left, Right, P } from './styles';

const Login = () => {
    return (
        <>
            <Nav/>
            <Container>
                <Left>
                    <P>music player</P>
                    <P>for your amusment</P>
                </Left>
                <Right>
                    <P>designed with brutalism in mind</P>
                    <P>* spotify account is required</P>
                </Right>
            </Container>  
        </>
    )
}

export default Login;