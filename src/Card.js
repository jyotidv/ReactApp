import React from 'react';
import './Card.css';

function Card({ props}) {
    return (
        <div className="card-container">
            <div className="card-title">
                <h3>{ props.title}</h3>
            </div>
            <div className="card-body">
                <p>{ props.body}</p>
            </div>
            <div className="btn">
                <button>
                    <a href={props.url}>
                        View more
                    </a>
                </button>
            </div>
        </div>
    )

}

export default Card;