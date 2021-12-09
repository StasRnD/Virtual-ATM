import React from 'react';
import ChoiceWindow from'./ChoiceWindow.js'
import Nampad from './Nampad.js';
import {denominations} from '../utils/constans.js'

let choiceCollectionDenominations
let minDenomination

//Копия выбранного набора купюр с нулевым количеством купюр
function copyOfTheSelectedSetOfBanknotes() {
  return Object.keys(choiceCollectionDenominations)
    .reduce((accumulator, item) => ({...accumulator, [item]: 0}), {})
}

export default function App() {
  const [amount, setAmount] = React.useState('');
  const [currentDenomination, setCurrentDenomination] = React.useState('')
  const [withdrawnDenominations, setWithdrawnDenominations] = React.useState({})
  const [issuedBanknotes, setIssuedBanknotes] = React.useState(0) 
  const [onChoiceWindow, setOnChoiceWindow] = React.useState(true)
  const [onNampad, setOnNampad] = React.useState(false)
  const [outstandingBalance, setOutstandingBalance] = React.useState(0)

  //округление суммы - отброс цифр после зпятых
  function roundAmount() {
    return amount.split(',')[0]
  }

  //выдача введенной суммы
  function onClickWithdraw() {
    let lastDenomination
    let restAmount = roundAmount();
    let runNumber = 0;
    let tempWithdrawnDenominations = {...withdrawnDenominations};
    
    while (restAmount >= minDenomination) {
      // eslint-disable-next-line no-loop-func
      Object.keys(choiceCollectionDenominations).forEach((item) => {
        if (currentDenomination && runNumber === 0 && item >= currentDenomination) {
          return
        }
        
        if (choiceCollectionDenominations[item] - withdrawnDenominations[item] === 0) {
          return
        }

        if (restAmount < item) {
          return
        }

        restAmount = restAmount - item
        lastDenomination = item
        tempWithdrawnDenominations[item] = tempWithdrawnDenominations[item] + 1
      })

      runNumber = runNumber + 1
    }
    
    setCurrentDenomination(lastDenomination)
    setWithdrawnDenominations(copyOfTheSelectedSetOfBanknotes())
    setOutstandingBalance(restAmount % 50)
    setAmount('')
    
    for (let key in choiceCollectionDenominations) {
      choiceCollectionDenominations[key] -= tempWithdrawnDenominations[key]
    }

    setIssuedBanknotes(withdrawBanknotes(tempWithdrawnDenominations))
  }

  //выбор варианта набора купюр
  function choiceDenomination(evt) {
      const variantSetDenominations = evt.target.textContent
      choiceCollectionDenominations = (denominations[variantSetDenominations])
      minDenomination = Math.min.apply(null, Object.keys(choiceCollectionDenominations))

      setOnChoiceWindow(false)
      setOnNampad(true)
      setWithdrawnDenominations(copyOfTheSelectedSetOfBanknotes())
    }

    //общее кол-во выданных купюр
    function withdrawBanknotes(obj) {
      return Object.values(obj).reduce((acc,el)=>{
        return acc+Number(el)
      }, 0)
    }

    
  return (
    <div className="page">
      <ChoiceWindow
        choiceDenomination ={choiceDenomination}
        isChoiceWindow = {onChoiceWindow}
      />

      <Nampad
        isNampad={onNampad}
        setAmount={setAmount}
        amount={amount}
        onClickWithdraw={onClickWithdraw}
        outstandingBalance={outstandingBalance}
        issuedBanknotes={issuedBanknotes}
        choiceCollectionDenominations={choiceCollectionDenominations}
      />
    </div>
  );
}