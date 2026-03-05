interface InputProps {
    Content?: string;   // может быть строкой или undefined
    ClassName?: string; // может быть строкой или undefined
    nameInp?: string;
    func:(event:any)=> void;
}

const Input = ( { func, ClassName = '', nameInp = 'none'}: InputProps) => {
    return (
        <input name={nameInp} onChange={func!} className={`input ${ClassName}`}></input>
    )
};

export default Input;