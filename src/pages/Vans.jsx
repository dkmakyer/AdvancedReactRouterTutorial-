import React from 'react'
import { Link } from "react-router-dom"

const Vans = () => {
    const [vans, setVans] = React.useState(null)

    React.useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    const vanElements = vans.map(van => {
        <div key={van.id} className="van-title">
            <Link to={`/vans/:${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>{van.price}<span>/day</span></p>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
            </Link>
        </div>

    })

    return (
        <div className='van-list-container'>
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans
