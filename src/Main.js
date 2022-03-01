import React from 'react'
import memesData from './memesData';
export default function Main(){
    const [meme, setMeme] = React.useState(
        {
            toptext: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1g8my4.jpg"
        }
    )

    const [allMemesImage, setAllMemesImage] = React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data =>memesData(data.data.memes))
    },[])
    function imgsrc(){
        const randomNumber = Math.floor(Math.random() * allMemesImage.length) 
        const url = allMemesImage[randomNumber].url
        setMeme(prevmeme=>({
            ...prevmeme,
            randomImg: url
        }))
    }
    function handleChange(event){
        const {name,value} = event.target
        setAllMemesImage(prevmeme =>{
            return{
                ...prevmeme,
                [name]: value
            }
        })
    }
    return(
        <div className = "main">
            <div className ="inputs">
                <input
                    id="topText"
                    type="text"
                    value={meme.toptext}
                    name="toptext"
                    onChange={handleChange}
                />
                <input
                    id="bottomText"
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button onClick = {imgsrc} type = "submit">Get new meme image</button>
            <div className="meme-section">
                <h2 className="text Top">{meme.toptext}</h2>
                <img src={meme.randomImg} alt="" className="meme--image" />
                <h2 className="text Bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}