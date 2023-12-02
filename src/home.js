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
padding-left:10px;
padding-top:7px;
font-family:Monaco,Monospace;
font-weight:bold;

height:35px;
`


const Home =(props)=>{
    return <>
    <UlList>
                <List className={props.activeList==='NowPlaying'?'active':''}>Now Playing</List>
                <List className={props.activeList==='Music'?'active':''}>Music</List>
                <List className={props.activeList==='Games'?'active':''}>Games</List>
                <List className={props.activeList==='Settings'?'active':''}>Settings</List>
            </UlList>
    </>
}



export default Home;