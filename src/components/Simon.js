import { useState } from "react";

const Simon = () => {
    const [inicioJuego, setInicioJuego] = useState(false)
    const [colorList, setColorList] = useState([])
    const [colorOn, setColorOn] = useState(null)

    const updateColorList = (color) => {
        setColorList([...colorList, color])
    }

    const showColors = () => {
        colorList.forEach((color, index) => {
            setTimeout(() => {
                setColorOn(color)
            }, (index + 1) * 600)
            // TODO apagar tile despues de un determinado tiempo
            // setTimeout(() => { setColorOn(null) }, (index + 1) * 725)

        })
    }

    const getColor = (buttonColor) => {
        return colorOn === buttonColor ? "orange" : buttonColor
    }

    console.log(colorOn)
    return (
        <>
            <h1>Simon</h1>
            <button style={{ backgroundColor: getColor("red") }} onClick={() => { updateColorList("red") }}>Rojo</button>
            <button style={{ backgroundColor: getColor("yellow") }} onClick={() => { updateColorList("yellow") }}>Amarillo</button>
            <button style={{ backgroundColor: getColor("green") }} onClick={() => { updateColorList("green") }}>Verde</button>
            <button style={{ backgroundColor: getColor("blue") }} onClick={() => { updateColorList("blue") }}>Azul</button>
            <br />
            <button onClick={() => { setInicioJuego(true) }}>Empezar!</button>
            <br />
            <button onClick={() => { showColors() }}>Colores</button>
        </>
    )
}

export default Simon;