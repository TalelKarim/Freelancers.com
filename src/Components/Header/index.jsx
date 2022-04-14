import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/dark-logo.png'


const StyledLink = styled(Link)`
padding: 15px;
color: #8186a0;
text-decoration: none;
font-size: 18px;
margin-right: 10px;
border-radius: 40%;
&:hover{
    cursor: pointer;
    background-color: #5843e4;
    color: white;
}
`

const HeaderContainer = styled.div`
 display :flex;
 flex-direction :row;
 justifiy-content:space-between;
 align-items: center;
 padding: 20px ;
 min-height : 70px;
 border-sizing: border-box;

`

const Logo = styled.div`
 width: 30%;

`

const MenuDeNavigation = styled.div`
 width:30%;
 transform: translate(700px);
`

function Header() {

 

    return (
    
        <HeaderContainer>
      <Logo>
          <img src={logo} alt='logo' style={{
              height: 80,
              width:220
          }} />
      </Logo>

      <MenuDeNavigation>
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/1">Questionnaire</StyledLink>
            <StyledLink to="/freelance">Profils</StyledLink>
        </nav>
        </MenuDeNavigation>
      



        </HeaderContainer>
      
        
    )
}

export default Header