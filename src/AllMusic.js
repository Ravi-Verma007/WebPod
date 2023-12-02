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



const AllMusic = (props)=>{
    return <>
    <UlList>
                <List className={props.activeList==='Song1'?'active':''}>Gods Plan</List>
                <List className={props.activeList==='Song2'?'active':''}>After Hours</List>
                {/* <List className={props.activeList==='Song3'?'active':''}>Song 3</List>
                <List className={props.activeList==='Song4'?'active':''}>Song 4</List>
                <List className={props.activeList==='Song5'?'active':''}>Song 5</List> */}
               
            </UlList>
    </>

}





export default AllMusic;