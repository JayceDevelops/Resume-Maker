import '../styles/Input.css';

export default function Input({lblText, value, placeholder, onChange, onBlur, errorText}) {
    return (
        <div className="Input">
            <label>{lblText}</label>
            <input value={value} placeholder={placeholder} onChange={onChange} onBlur={onBlur}></input>
            <h3 className='error'>{errorText}</h3>
        </div>
    );
}