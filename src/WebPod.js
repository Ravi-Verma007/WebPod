import React from "react";

import ZingTouch from 'zingtouch';
import Screen from "./Screen";






export default class WebPod extends React.Component{
            constructor(){
                super();
                this.state={
                    activeList:"NowPlaying",
                    activePage:"Home",
                    enter:0,
                    Play:true,
                    Song:'Gods Plan'
                }
            }

            // Handling the rotate event here

            rotateWheel=()=>{
                var containerElement = document.getElementById('musicplayercircle');
                
                var activeRegion = new ZingTouch.Region(containerElement);
                var self=this;
                var newAngle=0;
               
                
                self.state.enter=self.state.enter+1;
                if(self.state.enter<2){
                    activeRegion.bind(containerElement, 'rotate', function(event){
                    
                        var LPoint = event.detail.distanceFromLast;
                       
                        if( LPoint>0){
                            newAngle++;
                            
                          if(self.state.activePage==='Home'){
                            if(newAngle===15){
                                console.log("change state");
                                newAngle=0;

                                switch(self.state.activeList){
                                    case 'NowPlaying':self.setState({activeList:'Music'});break;
                                    case 'Music':self.setState({activeList:'Games'});break;
                                    case 'Games':self.setState({activeList:'Settings'});break;
                                    case 'Settings':self.setState({activeList:'NowPlaying'});break;
                                    default:self.setState({activeList:'NowPlaying'});
                                }
                             }
                          }else if(self.state.activePage==='Music'){
                            if(newAngle===15){
                            newAngle=0;
                            switch(self.state.activeList){
                                case 'AllMusic':self.setState({activeList:'Artist'});break;
                                case 'Artist':self.setState({activeList:'AllMusic'});break;
                                default:self.setState({activeList:''});
                            }
                        }
                          }else if(self.state.activePage==='AllMusic'){
                            
                            if(newAngle===15){
                            newAngle=0;

                            switch(self.state.activeList){
                                case 'Song1':self.setState({activeList:'Song2'});break;
                                case 'Song2':self.setState({activeList:'Song1'});break;
                                // case 'Song3':self.setState({activeList:'Song4'});break;
                                // case 'Song4':self.setState({activeList:'Song5'});break;
                                // case 'Song5':self.setState({activeList:'Song1'});break;
                                default:self.setState({activeList:''});
                            
                            }
                           
                            }
                        
                          }
                        
                    }
            
                    })
                }
            }

//Handling of center button 

            MiddleCirlce = ()=>{

                
                switch(this.state.activeList){

                    case 'NowPlaying':this.setState({
                        activePage:"NowPlaying"
                    });break;

                    case 'Music':this.setState({
                        activePage:"Music",
                        activeList:'AllMusic'
                    });break;

                    case 'Artist':this.setState({
                        activePage:"Artist"
                    });break;

                    case 'Settings':this.setState({
                        activePage:"Settings"
                    });break;

                    case 'AllMusic':this.setState({
                        activePage:"AllMusic",
                        activeList:'Song1'
                    });break;

                    case 'Games':this.setState({
                        activePage:"Games"
                    });break;

                    case 'Song1':
                    this.setState({
                        activePage:'NowPlaying',
                        Song:'Gods Plan',
                       
                    });break;
                    case 'Song2':this.setState({
                        activePage:'NowPlaying',
                        Song:'After Hours',
                       
                    });break;

                    default:;
                    
                }
            }
            
        

            //Clicking Menu Button 

            handleMenu=()=>{
                this.setState({activeList:"NowPlaying",activePage:"Home"});
            }

// handling play and pause button

            PlayPause=()=>{
                let audio =document.getElementById('audioSong');
                if(this.state.Play){
                    audio.pause();
                    this.setState({Play:false});
                    
                }else{
                    audio.play();
                    this.setState({Play:true});
                    
                }
            }

            render(){
                return<>
                    <div id="outerIpod">
                    <Screen activeList={this.state.activeList} Song={this.state.Song} activePage={this.state.activePage}/>

             <div  id="mainmusicplayer">
            <div id="musicplayercircle" onMouseOver={this.rotateWheel}>
            <p id="menu" onClick={this.handleMenu}>MENU</p>
            <div id="previous"><img alt="previous" className="imgSize" src="https://cdn-icons-png.flaticon.com/128/5733/5733413.png"></img></div>
            <div id="middlecircle" onClick={this.MiddleCirlce}></div>
            <div id="forward"><img alt="forward" className="imgSize" src="https://cdn-icons-png.flaticon.com/128/5733/5733742.png"></img></div>
            <div id="playPause" onClick={this.PlayPause}><img alt="play-pause" className="imgSize" src="https://cdn-icons-png.flaticon.com/128/7960/7960808.png"></img></div>
            </div>
            </div>
            </div></>
            }
}