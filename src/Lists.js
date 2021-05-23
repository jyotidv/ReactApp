import { useState } from "react"
import { useEffect } from "react"
import { Link, Route, Switch, withRouter, BrowserRouter } from 'react-router-dom';
import Card from './Card';
import './Card.css';

function Lists() {
    const [data, setData] = useState([])
    const [status, setStatus] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=5')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

   
    return (
        <div className="container">
            <div>
                <button onClick={() => setStatus(!status)}>ViewSwitch</button>
            </div>
            {
                status ?
                    <div>
                        <h1>Lists</h1>
                        <table border="1">
                            <tbody>
                                <tr>
                                    <td>Id</td>
                                    <td>Title</td>
                                    <td>Details/Link</td>
                                </tr>
                                {
                                    data.map((item) =>
                                        <tr key={item}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.url}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                    :
                    <div>
                        <h4 margin-left="100px">CardView</h4>
                        {
                            data.map((item) =>
                                <div className="card-container">
                                    <div className="card-content">
                                        <div className="card-title">
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>{item.url}</p>
                                        </div>
                                        <div className="btn">
                                            <button>
                                                <a href={item.thumbnailURL}>
                                                    View more
                                             </a>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        }
                    </div>
                    

            }
            
            
        </div>
    )
}



export default Lists;