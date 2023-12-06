import './formButton.css'
import { FC, MouseEventHandler } from "react";

interface FormButtonProps{
    text: string;
    func?: MouseEventHandler;
    onTap?: ()=> void
    type: "button" | "submit" | "reset" | undefined;
}


 
const FormButton : FC<FormButtonProps> = ({text, func, type, onTap}) => {

    return ( 
        <button type= {type} className='form-button' onClick={onTap || func}>{text}</button>
     );
}
 
export default FormButton;