import './formButton.css'
import { CSSProperties, FC } from "react";

interface FormButtonProps{
    text: string;
    onTap?: ()=> void
    type: "button" | "submit" | "reset" | undefined;
    style?: CSSProperties
}


 
const FormButton : FC<FormButtonProps> = ({text, type, onTap, style}) => {

    return ( 
        <button type= {type} className='form-button' onClick={onTap} style={style || {}}>{text}</button>
     );
}
 
export default FormButton;