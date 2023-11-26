import { FC } from "react";
import './squareCard.css'

interface squareCardProps{
    src: string;
    alt: string;
}

const SquareCard: FC<squareCardProps> = ({src, alt}) => {

    return ( 
       <div className="square-card" style={{backgroundImage: `url(${src})`}}>
            <p className="square-card-text">Alugar</p>
       </div>
     )
}
 
export default SquareCard;
