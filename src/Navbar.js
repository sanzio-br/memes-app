import img from './imgs/troll-face.png';
export default function Navbar(){
    return(
        <div className = "navbar">
            <h2>
                <img src = {img} alt = "" />
                <p>Meme Generator</p>
            </h2>
            <p>React Course - Project 3</p>
        </div>
    )
}