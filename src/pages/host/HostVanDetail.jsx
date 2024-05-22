import React from 'react'
import { Link, Outlet, useParams, NavLink } from 'react-router-dom';

const HostVanDetail = () => {
  const [currentVan, setCurrentVan] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    fetch(`api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans))
  }, [params])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  const active = {
    textDecoration : "underline",
    fontWeight : "bold",
    color: "#161616"
  };


  return (
    <section>
      <Link to=".." relative='path' className='back-button'> &larr; <span>Back to all vans</span></Link>
      <div className='host-van-detail-layout-container'>
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
          </div>
        </div>
      </div>
      <nav>
            <NavLink style={({isActive})=> isActive ? active : null} to="." end>Details</NavLink>
            <NavLink style={({isActive})=> isActive ? active : null} to="pricing">Pricing</NavLink>
            <NavLink style={({isActive})=> isActive ? active : null} to="photos">Photos</NavLink>
        </nav>
      <Outlet/>
    </section>
  )
}

export default HostVanDetail
