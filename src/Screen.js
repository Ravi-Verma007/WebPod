import styled from 'styled-components';
import Home from './home';
import Music from './Music';
import AllMusic from './AllMusic';
import Artist from './Artists'
import Settings from './Settings';
import Games from './Games';
import NowPlaying from './NowPlaying';

const Screendiv = styled.div`

    width: 330px;
    height: 323px;
    background-color:lightgrey;
    padding:20px;
    display:flex;
    box-shadow: rgba(0, 0, 0, 0.17) 0px 23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px 20px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px 80px 20px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    
    border-radius:10px 10px 0px 0px
        
  }
`;

const Mainscreen= styled.div`
    width: 100%;
    height: 100%;
background-color:white;
border:  1.5px solid black;
display :flex;


`;

const MenuScreen = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
padding:5px;
margin:0px;

`;

const PhotoScreen = styled.div`
width:50%;
background-image: url('https://i.imgur.com/QxjWhrs.jpg');
background-position: center;
background-size: cover;

`;

const Heading = styled.h1`text-align:center;

padding:0px;
margin:0px; 
`



const Screen=(props)=>{
    
    return <>

    <Screendiv>
    <Mainscreen>
    {props.activePage==='Home' ||  props.activePage==='Music' || props.activePage==='AllMusic'?
    <>
        <MenuScreen>
            
            {props.activePage==="Home"?<><Heading>Web-Pod</Heading><Home activeList={props.activeList}/></>:null}
            
            {props.activePage==="Music"?<><Heading>Web-Pod</Heading><Music activeList={props.activeList}/></>:null}
            {props.activePage==="AllMusic"?<AllMusic activeList={props.activeList}/>:null}
           
        </MenuScreen>
        <PhotoScreen>
        </PhotoScreen></>  :  null }

        {props.activePage==="Artist"?<Artist activeList={props.activeList}/>:null}
        {props.activePage==="NowPlaying"?<NowPlaying Song={props.Song} activeList={props.activeList}/>:null}
        {props.activePage==='Settings'?<Settings activeList={props.activeList} />:null}
        {props.activePage==="Games"?<Games activeList={props.activeList}/>:null}

        
        
        
    

    </Mainscreen>
    </Screendiv>
    </>
}






export default Screen;