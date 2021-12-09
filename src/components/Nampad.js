import React from 'react';
import {regex} from '../utils/constans.js'

export default function Nampad ({choiceCollectionDenominations, isNampad, amount, setAmount, onClickWithdraw, outstandingBalance, issuedBanknotes}) {

    const [banknotesInATM, setBanknotesInATM] = React.useState('')
    const [isInfoAboutTheBalance, setIsInfoAboutTheBalance] = React.useState(false)
    
    React.useEffect(()=>{
        function handleEnterClick (evt) {
            if (evt.key==="Enter")
            handleAmount()
        }
        document.addEventListener('keydown', handleEnterClick)
        return () => {
            document.removeEventListener('keydown', handleEnterClick) 
        }
    })

    //отграничение ввода символов кроме 0-9 и ,
    function entryBan (evt) {
      let value = evt.target.value;
      setAmount(value.replace(regex, ''))
    }

    //клик на кнопки клавиатуры для ввода суммы
    function onClickButtonKeybord(evt) {
        let buttonNumber = evt.target.textContent
        setAmount(amount += buttonNumber)
    }

    //проверка на виладность введенной суммы - кол-во запятых
    function chekingAmountValidity() {
        let numberOfCommas = 0;
        for (let i=0; i<amount.length; i++) {
            if(amount[i] === ',' || amount[0] === ',') {
                numberOfCommas += 1
            }
        }
        
        return numberOfCommas
    }

    //обработчик суммы
    function handleAmount() {
        let numberOfCommas = chekingAmountValidity();
        if (numberOfCommas>1) {
            alert('Некорректная сумма')
        } else {
            onClickWithdraw()
        }
    }

    //удаления последнего симовла суммы
    function adjustmentAmount() {
        setAmount(amount.slice(0, -1))
    }
    
    //вызов информации об оставшихся купюрах в банкомате
    function callingInformationAboutTheAvailabilityOfBanknotes() {
        let remainingBanknotes = 'Осталось купюр: '
        for (let key in choiceCollectionDenominations) {
            remainingBanknotes += `номинал ${key}-${choiceCollectionDenominations[key]}штук, `
        }
        if(banknotesInATM !== '') {
            setBanknotesInATM('')
            setIsInfoAboutTheBalance(false)
        } else {
            setBanknotesInATM(remainingBanknotes)
            setIsInfoAboutTheBalance(true)
        }
    }
    //Очистить поле ввода для суммы
    function clearAmount() {
        setAmount('')
    }

    return (
        <div className={`nampad ${isNampad ? 'nampad_open' : ''}`}>
            <p className={`nampad__text ${isInfoAboutTheBalance ? 'nampad__text_open' : ''}`}>{banknotesInATM}</p>
            <input className="nampad__input" value={amount} placeholder="Введите сумму для снятия"  type="text" onChange={entryBan}/>
            <input className="nampad__input" value = {`Выдано купюр: ${issuedBanknotes}`} type="text" disabled/>
            <input className="nampad__input" value={`Невыданный остаток: ${outstandingBalance} руб.`} type="text" disabled/>
            
            <div className="nampad__keyboard" onClick={onClickButtonKeybord}>
                <button type="button" className="nampad__keyboard-button">1</button>
                <button type="button" className="nampad__keyboard-button">2</button>
                <button type="button" className="nampad__keyboard-button">3</button>
                <button type="button" className="nampad__keyboard-button">4</button>
                <button type="button" className="nampad__keyboard-button">5</button>
                <button type="button" className="nampad__keyboard-button">6</button>
                <button type="button" className="nampad__keyboard-button">7</button>
                <button type="button" className="nampad__keyboard-button">8</button>
                <button type="button" className="nampad__keyboard-button">9</button>
                <button type="button" className="nampad__keyboard-button"></button>
                <button type="button" className="nampad__keyboard-button">0</button>
                <button type="button" className="nampad__keyboard-button">,</button>
            </div>
            <div className="nampad__interaction">
                <button type="button" className="nampad__interaction-button" onClick={clearAmount}>Отмена</button>
                <button type="button" className="nampad__interaction-button" onClick={callingInformationAboutTheAvailabilityOfBanknotes}>Справка</button> 
                <button type="button" className="nampad__interaction-button" onClick={adjustmentAmount}>Корректировка</button> 
                <button type="button" className="nampad__interaction-button" onClick={handleAmount}>Выдать</button>
            </div>
        </div>
    )
}