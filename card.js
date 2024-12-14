import React from 'react';
import ReactDOM from 'react-dom/client';
import PlaceholderImg from "./placeholder.jpg";

export default class CardComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: "20rem"}}>
                    <div className="card-body">
                        <img className="card-img-top" src={PlaceholderImg}></img>
                        <h3 className="card-title">Card Title</h3>
                        <p className="card-text">Insert text here</p>
                    </div>
                </div>
            </div>
        );
    }
}