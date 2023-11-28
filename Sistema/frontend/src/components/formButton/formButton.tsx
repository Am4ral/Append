import './formButton.css'
import { FC, MouseEventHandler } from "react";

interface FormButtonProps{
    text: string;
    func?: MouseEventHandler;
    type: "button" | "submit" | "reset" | undefined;
}


 
const FormButton : FC<FormButtonProps> = ({text, func, type}) => {

    return ( 
        <button type= {type} className='form-button' onClick={func}>{text}</button>
     );
}
 
export default FormButton;