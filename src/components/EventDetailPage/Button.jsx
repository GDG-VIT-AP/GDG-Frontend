export const Button = ({ children, className, variant, size }) => {
    return (
      <button 
        className={`${className} ${variant === 'outline' ? 'border' : ''} ${size === 'sm' ? 'text-sm py-1 px-2' : 'py-2 px-4'} ${size === 'icon' ? 'p-2' : ''}`}
      >
        {children}
      </button>
    );
  }