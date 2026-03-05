interface InputProps {
    Content?: string;   // может быть строкой или undefined
    ClassName?: string; // может быть строкой или undefined
    func:(event:any)=> void;
}

const Input = ( { func, ClassName = ''}: InputProps) => {
    return (
        <input onInput={func!} className={`input ${ClassName}`}></input>
    )
};

export default Input;