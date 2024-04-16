import React from 'react'
import { useParams } from 'react-router-dom'

const VanDetail = () => {
  const params = useParams()
  //or const { id } from useParams() since we saved the nested path as id
  console.log(params)



  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => console.log(data))
    }, [params.id])

  return (
    <div className='van-detail-container'>
      {van ? (
        <div className="van-detail">
          <img src="" alt="image not found" />
          <i className={`van-price ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price"><span>${van.price}</span>/day</p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : <h2>Loading...</h2>}

    </div>
  )
}

export default VanDetail
