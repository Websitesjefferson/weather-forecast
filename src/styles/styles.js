import styled from "styled-components"


export const Container = styled.header`
 
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   justify-content: center;
   color: white;
   padding-inline: 20px;


   font-family: sans-serif;
  
`
export const Main = styled.main` 
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
  
   margin-top: 40px;
 
   
   width: clamp(200px, 200px + 30vw, 700px);
   

 
 button{

    padding: 20px 50px;
    
    font-size: 15px;
    transition: 300ms;
    border: 0;
    text-decoration: none;
    border-radius: 0px 10px 10px 0;
    background-color: transparent;
    color: white;

}
 button:hover{
    
    background-color: #808080;
 }  
`
export const Input = styled.div`
   
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background-color: #232129;

    border-radius: 10px;
   

    >input{
     width: 100%;
     height: 50px;
     padding: 10px ;

     font-size: 18px;
     border-radius: 10px 0 0 10px;
     background: transparent;
     
     border: 0;
     color: white;
    
   
    }
   
   > svg{
        margin-inline: 16px;
        font-size: 0%;
        
        
       
    }

`
export const Section = styled.section`

margin-top: 100px;
display: flex;

flex-direction: column;
color: white;
gap: 20px;


h1{
    font-size: 35px;
    font-family: sans-serif;
   
}
img{
   margin: auto;
   width: 100px;
    
}
p{
    font-size: 25px; 
   
}

`
export const Footer = styled.footer`

  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  text-align: center;
  
  color: white;
  margin-top: 50px;
 

 > article{
    width: 300px;
    font-size: 20px;
}
h2{
    margin-bottom: 20px;
}
p{
    margin-bottom: 10px;
}
@media (max-width: 1040px) {

 display: flex;
 flex-direction: column;
 align-items: center;
}

 
 


`

