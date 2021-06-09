import React from 'react'
import { Header, List, Rating } from 'semantic-ui-react'

export default function Movies({movies}) {
    return (
        <List>
            {movies.map(movie =>{
                return(
                    // when ever we map over an item in react we need to pass a key to it and the key must be unique to each element
                    <List.Item key={movie.title}>
                        <Header>{movie.title}</Header>
                        <Rating rating={movie.rating} maxRating={5} disabled/>
                    </List.Item>
                )
            })}
        </List>
    )
}
