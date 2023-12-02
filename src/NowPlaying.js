import styled from 'styled-components';
import Godsplan from './assets/images/GodsPlan.jpeg'
import songgodsplan from './assets/songs/GodsPlan.mp3'
import Afterhours from './assets/images/WeekndAfterHours.png'
import songafterhours from'./assets/songs/WeekndAfterHours.mp3'


const NowPlayingScreen = styled.div`
width:100%;
height:100%;
border:2px solid black;
display:flex;
flex-direction:column;
background-image:url("https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1600");
background-size:cover;


`
const InnerDiv1 = styled.div`
width:100%;
padding-top:20px;
flex:2.5;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
const ImgDiv=styled.div`
width:50%;
height:72%;
border-radius:5px;
background-image:url(${(props)=>props.pic});
background-size:cover;
background-position:center;

`
const InnerDiv2 = styled.div`
width:100%;

flex:1;
position:relative;
`
const Audio =styled.audio`
position:absolute;
top:25px;
width:100%;
border-radius:0px;
`

const P = styled.p`
color:white;
font-size:x-large;
font-family: "Monaco";
font-weight:700;
`


const NowPlaying = (props)=>{
    let SongImg;
    let Song;

    if(props.Song==='Gods Plan'){
        SongImg = Godsplan;
        Song = songgodsplan;
     }
     else if(props.Song==='After Hours'){
        SongImg=Afterhours;
        Song=songafterhours;
     }

    return <>
    
    <NowPlayingScreen>
        <InnerDiv1><ImgDiv pic={SongImg}></ImgDiv><P>{props.Song}</P></InnerDiv1>
        <InnerDiv2>
            <Audio id='audioSong' controls autoPlay><source src={Song} type="audio/mpeg"></source></Audio>
            </InnerDiv2>

    </NowPlayingScreen>
    
 
    </>
}



export default NowPlaying;