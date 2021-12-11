import React, {useEffect, useState} from 'react';

const data = [
    'Москва',
    'Санкт-Петербург',
    'Владивосток',
    'Владимир',
    'Суздаль',
    'Волгоград',
    'Астрахань',
    'Коломна',
    'Ульяновск',
    'Раменское',
    'Люберцы',
]

function StartPage() {

    const [randomName, setRandomName] = useState();
    const [names, setNames] = useState(data);
    const [showNames, setShowNames] = useState(false);

    const handleShowNames = () =>{
        setShowNames(true)
    }

    const handleHideNames = () =>{
        setShowNames(false)
    }

    const handleSwitch = () =>{
        setShowNames(state => !state)
    }

    useEffect(()=>{
        console.log('Этот код выполняется только на первом рендере компонента')
        // В данном примере можно наблюдать Spread syntax (Троеточие перед массивом)
        setNames(names=>[...names, 'Бедный студент'])

        return () => {
            console.log('Этот код выполняется, когда компонент будет размонтирован')
        }
    },[])

    useEffect(()=>{
        console.log('Этот код выполняется каждый раз, когда изменится состояние showNames ')
        setRandomName(names[Math.floor(Math.random()*names.length)])
    },[showNames])

    
    return (
        <div>
            <h3>Случайный город из списка: {randomName}</h3>
            <button onClick={handleShowNames}>Хочу увидеть список городов</button>
            <button onClick={handleHideNames}>Хочу скрыть список городов</button>

            <button onClick={handleSwitch}>{showNames ? 'Хочу скрыть список городов' :'Хочу увидеть список городов' }</button>

            {/*React отрисует список только если showNames будет равен true, boolean значения игнорируются при отрисовке*/}
            {showNames && <ul>
            {/*Рекомендую почитать про прекрасные встроенные методы массивов в JavaScript    */}
            {names.map((name, index)=>{
                return (
                    <li key={index}>
                        <span>{name}</span>
                    </li>
                )
            })}
            </ul>
            }
        </div>
    );
}

export default StartPage;