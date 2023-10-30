import styled from "styled-components";
import background from "../../assets/background.png"

export const Forme = styled.form`

padding: 0 136px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

>h1{
    color: ${({theme}) => theme.COLORS.ORANGE};
    font-size: 48px;
  }

  >p{
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 14PX;
  }

  >h2{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 24px;
    padding: 48px 0;
    font-weight: 500;
  }

  >a{
    color: ${({theme}) => theme.COLORS.ORANGE};
    font-size: 16px;
    margin-top: 124px ;
  }
`

export const Container = styled.div`

  height: 100vh;
  display: flex;
  align-items: stretch;


`

export const Background = styled.div`
  flex: auto;
  background: url(${background}) no-repeat center center ;
  background-size: cover;

`