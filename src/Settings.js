import styled from 'styled-components';


const Creator = styled.img`
width:50%;
height:50%;
position:absolute;
top:15%;
left:25%;


`;

const Outerimg = styled.div`
width:100%;
height:100%;
position:relative;
background-image:url('https://ukbeautyroom.com/wp-content/uploads/2022/06/beach-background-Wallpaper-1.jpg');
background-position: center;
background-size: cover;

`;


const Settings =(props)=>{
            return <><Outerimg>
            <Creator alt="CreatorImage" src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-512.png">
            </Creator>
            </Outerimg>
            </>
}




export default Settings;