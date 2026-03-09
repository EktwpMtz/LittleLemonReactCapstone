import './Button.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, type = 'button', ...args }: ButtonProps) => {
  return (
    <button type={type} {...args}>
      {children}
    </button>
  );
};
