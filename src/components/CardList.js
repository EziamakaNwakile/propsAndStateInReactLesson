import React from 'react'

export default function CardList(props) {

    const { myFriends } = props;

    return (
      <div id="card-container">
        {myFriends.map((friend, index) => {
           return <div key={friend.id} id="cards-div">           
              <img src={`https://robohash.org/${friend.id}`} alt="footballar" />  
              <h3 className="tc">{friend.id}</h3>                  
              <h2 className="tc">{friend.name}</h2>
              <p className="tc">{friend.username}</p>
              <p className="tc">{friend.email}</p>
          </div>  
        })}
                                             
      </div>
    )
}
