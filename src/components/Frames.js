import React, { Component } from 'react';

class Frames extends Component {

    getStyle() {
        return {
            width: this.props.info.vertical ? "auto" : "100%",
            height: this.props.info.vertical ? "100%" : "auto",
            display:this.props.status?"flex":"none",
            background: "black",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
            top: '0px',
            zIndex: "2",
            justifyContent:"center",
        }
    }

    close() {
        this.props.close();
    }

    render() {
        return ( 
            <div className="frames" style={this.getStyle()} onClick={this.close.bind(this)}>
                <img src={this.props.info.src}  style={{ maxWidth:"100%",maxHeight:"100%"}}></img>
               <h1 className="title" style={{textOrientation:"upright",writingMode:"vertical-rl"}}>{this.props.info.title}</h1>
               <p style={{color:"lightblue"}}>Click anywhere to exit</p>               
          </div>)//responsive
    }

}



export default Frames;

