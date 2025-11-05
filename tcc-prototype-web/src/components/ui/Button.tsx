import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLink?: boolean;
};

const Button: React.FC<Props> = ({ children, className = '', asLink, ...rest }) => {
  const baseClasses = 'hover:translate-y-[1px] active:translate-y-[2px] transition-transform';

  if (asLink) {
    // render as anchor-styled button
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className={`btn ${baseClasses} ${className}`} {...(rest as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={`btn ${baseClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
