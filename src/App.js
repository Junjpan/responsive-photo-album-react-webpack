import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import Frames from './components/Frames';
import new1 from './assets/1.jpg';
import new2 from './assets/2.jpg';
import new5 from './assets/5.jpg';
import new6 from './assets/6.jpg';
import new9 from './assets/9.jpg';
import new51 from './assets/51.jpg';
import new15 from './assets/15.jpg';
import new22 from './assets/22.jpg';
import new24 from './assets/24.JPG';
import a from './assets/a.JPG';
import a1 from './assets/a1.JPG';
import b from './assets/b.JPG';
import c from './assets/c.JPG';
import d from './assets/d.JPG';
import e from './assets/e.JPG';
import f from './assets/f.JPG';
import g from './assets/g.JPG';
import h from './assets/h.JPG';
import i from './assets/i.JPG';
import j from './assets/j.JPG';
import k from './assets/k.JPG';
import l from './assets/l.JPG';
import m from './assets/m.JPG';
import n from './assets/n.JPG';
import o from './assets/o.JPG';
import p from './assets/p.JPG';
import q from './assets/q.JPG';
import r from './assets/r.JPG';
import s from './assets/s.JPG';
import t from './assets/t.JPG';
import u from './assets/u.JPG';


class App extends Component {
    constructor() {
        super();
        this.state = {
            image: {},
            viewPanel: false,
            images: [
            { src: new1, title: "New Born", description: "1 months old", vertical: true },
            { src: new2, title: "Curiosity", description: "2 months old", vertical: false },
            { src: new5, title: "Sweet Smile", description: "5 months old", vertical: false },
            { src: new51, title: "First Christmas", description: "5 months old", vertical: true },
            { src: new6, title: "Sun Shine", description: "6 months old", vertical: true },
            { src: a1, title: "Quiet Time", description: "6 months old", vertical: false },
            { src: new9, title: "Serious", description: "9 months old", vertical: false },
            { src: a, title: "Birthday Girl", description: "1 year old", vertical: true },
            { src: b, title: "On the Grass", description: "13 months old", vertical: true },
            { src: new15, title: "My first Backpack", description: "15 months old", vertical: true },
            { src: c, title: "Twinkling Lights", description: "16 months old", vertical: false },
            { src: d, title: "My Angel", description: "17 months old", vertical: false },
            { src: e, title: "Smelling Good!", description: "17 months old", vertical: true },
            { src: f, title: "Snow White", description: "17 months old", vertical: true },
            { src: g, title: "Me and The Flowers", description: "19 months old", vertical: false },
            { src: h, title: "In The Wild", description: "19 months old", vertical: true },
            { src: i, title: "Bubble Time", description: "20 months old", vertical: true },
            { src: j, title: "Deep Thoughts", description: "20 months old", vertical: true },
            { src: new22, title: "Elegant Lady", description: "22 months old", vertical: true},
            { src: k, title: "At the Beach", description: "22 months old", vetical: false },
            { src: l, title: "Scream", description: "22 months old", vertical: false },
            { src: new24, title: "Flower Dress", description: "2 years old", vertical: true },
            { src: m, title: "Love the Flowers", description: "2 years old", vertical: true },
            { src: n, title: "Laugh", description: "2 years old", vertical: true },
            { src: o, title: "Wind", description: "26 months old", vertical: false },
            { src: p, title: "At the Pumpkin Patch", description: "27 months old", vertical: false },
            { src: q, title: "Black and White", description: "28 months old", vertical: true },
            { src: r, title: "Orange Witch", description: "28 months old", vertical: true },
            { src: s, title: "A Little Raindeer", description: "29 months old", vertical: false },
            { src: t, title: "Talking to the Bunny", description: "29 months old", vertical: false },
            { src: u, title: "Happy Chinese Year", description: "30 months old", vertical: true },
            ]
        }
    }

    open(index) {
        console.log(index)
            this.setState({
                viewPanel: true,
                image: this.state.images[index]
            })

            setTimeout(()=>{console.log(this.state.viewPanel)},2000)

    }

    close(){
        this.setState({
            viewPanel:false
        })
    }
    render() {
        return (<div>
            <div className="container" style={{display:this.state.viewPanel?"none":"block"}}>
                {this.state.images.map((image, index) => (
                    <div className="box" key={index} onClick={this.open.bind(this, index)}>
                        <p style={{ float: "right", marginRight: "10px" }}>{image.description} </p>
                        <img src={image.src} alt={image.title}></img>
                        <h2 >{image.title}</h2>
                    </div>
                ))}
            </div>
            {this.state.viewPanel?<Spring from={{opacity:0}} to={{opacity:1}} config={{delay:500,duration:1500}}>{props => (<div style={props}>
                <Frames info={this.state.image} close={this.close.bind(this)} status={this.state.viewPanel}/>
            </div>
            )}</Spring>:<Spring from={{opacity:1}} to={{opacity:0}} config={{delay:500,duration:1000}}>{props => (<div style={props}>
                <Frames info={this.state.image} status={this.state.viewPanel}/>
            </div>
            )}</Spring>}

        </div>)
    }


}

export default App