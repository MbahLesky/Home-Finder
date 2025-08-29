import "./FilledButton.css";

function FilledButton({children, onClick}) {
    return <button onClick={onClick} className="filled-button">{children}</button>;
}

export default FilledButton;