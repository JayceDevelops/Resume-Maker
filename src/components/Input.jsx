import '../styles/Input.css';

export default function Input({lblText, value, placeholder, onChange}) {
    return (
        <div className="Input">
            <label>{lblText}</label>
            <input value={value} placeholder={placeholder} onChange={onChange}></input>
            
        </div>
    );
}