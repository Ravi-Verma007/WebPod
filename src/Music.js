import styled from 'styled-components';

const UlList =styled.ul`
padding:20px;
height:100%;

list-style-type: none;  
padding:0px;
margin-bottom:10px;

`

const List =styled.li`
flex:1;
font-size:large;
padding-left:5px;
padding-top:7px;
font-family:Monaco,Monospace;
font-weight:bold;

height:35px;
`


const Music =(props)=>{
    return <>
    <UlList>
                <List className={props.activeList==='AllMusic'?'active':''}>All Music</List>
                <List className={props.activeList==='Artist'?'active':''}>Artist</List>
               
            </UlList>
    </>
}
export default Music;