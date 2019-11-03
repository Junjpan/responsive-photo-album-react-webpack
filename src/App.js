import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import Frames from './components/Frames';
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


class App extends Component {
    constructor() {
        super();
        this.state = {
            image: {},
            viewPanel: false,
            images: [{ src: a1, title: "Quiet Time", description: "6 months old", vertical: false },
            { src: a, title: "Birthday Girl", description: "1 year old", vertical: true },
            { src: b, title: "On the Grass", description: "13 months old", vertical: true },
            { src: c, title: "Twinkling Lights", description: "16 months old", vertical: false },
            { src: d, title: "My Angel", description: "17 months old", vertical: false },
            { src: e, title: "Smelling Good!", description: "17 months old", vertical: true },
            { src: f, title: "Snow White", description: "17 months old", vertical: true },
            { src: g, title: "Me and The Flowers", description: "19 months old", vertical: false },
            { src: h, title: "In The Wild", description: "19 months old", vertical: true },
            { src: i, title: "Bubble Time", description: "20 months old", vertical: true },
            { src: j, title: "Deep Thoughts", description: "20 months old", vertical: true },
            { src: k, title: "At the Beach", description: "22 months old", vetical: false },
            { src: l, title: "Scream", description: "22 months old", vertical: false },
            { src: m, title: "Love the Flowers", description: "2 years old", vertical: true },
            { src: n, title: "Laugh", description: "2 years old", vertical: true },
            { src: o, title: "Wind", description: "26 months old", vertical: false },
            { src: p, title: "At the Pumpkin Patch", description: "27 months old", vertical: false },
            { src: q, title: "Black and White", description: "28 months old", vertical: true },
            { src: r, title: "Orange Witch", description: "28 months old", vertical: true },
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