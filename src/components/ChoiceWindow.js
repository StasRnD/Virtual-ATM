import React from 'react';

export default function ChoiceWnindow ({choiceDenomination, isChoiceWindow}) {
    return (
        <div className={`choiceWindow ${isChoiceWindow ? 'choiceWindow_open' : ''}`}>
            <p className="choiceWindow__text">выберите вариент купюр</p>
            <ul className="choiceWindow__allOptions" onClick={choiceDenomination}>
                <li className="choiceWindow__option">1</li>
                <li className="choiceWindow__option">2</li>
                <li className="choiceWindow__option">3</li>
                <li className="choiceWindow__option">4</li>
                <li className="choiceWindow__option">5</li>
                <li className="choiceWindow__option">6</li>
            </ul>
      </div>
    )
}