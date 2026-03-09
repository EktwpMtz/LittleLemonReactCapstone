import './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}
