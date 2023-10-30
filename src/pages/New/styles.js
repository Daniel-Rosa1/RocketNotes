import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;

  grid-template-areas: 
    "header"
    "content"
  ;

  >main{
    grid-area: content;
    overflow-y: auto;
  }

  .tags{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  >header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 36px;

    h1{
      font-size: 36px;
      font-weight: 500;
    }

    a{
      font-size: 20px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`
