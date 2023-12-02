import styled from 'styled-components';
import RaVe from './assets/images/RaVe.jpeg'

const Creator = styled.img`
width:100%;
height:100%;


`;


const Artist =(props)=>{
            return <>
            <Creator alt="CreatorImage" src={RaVe}>
            </Creator>
            </>
}





export default Artist;