import React from 'react'
import HomeStyles from '../styles/Home.module.css'

const Userinfo = ({users}) => {
  return (
    <div>
        <main className={HomeStyles.main} >
            <div className={HomeStyles.grid}>
                {users?.map( (user,id)=> <div key={id} className={HomeStyles.card}>
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email}</p>
                    <p>Address:{user.address.street}</p>
                    <a href={`/user/${user.id}`}>Know more</a>
                </div>)}
            </div>
        </main>
    </div>
  )
}

export default Userinfo