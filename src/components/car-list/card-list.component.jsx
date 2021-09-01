import React from 'react'
import "./card-list.styles.css";

import Card from '../card/card.component';

const CardList = ({ monsters }) => {
    const renderCardList = () => {
        if (monsters && monsters.length) return (
            monsters.map((monster) => <Card key={monster.id} monster={monster} />)
        )
    }
    return (
        <div className="card-list">
            {renderCardList()}
        </div>
    )
}

export default CardList
