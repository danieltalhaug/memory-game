import { Link } from 'react-router-dom';

const Button = (props) => {
    const { text, isActive, outline, variation, color, ...restProps } = props;
    const colors = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        warning: 'btn-warning',
        error: 'btn-error',
    };
    const variations = {
        ghost: 'btn-ghost',
    };

    const Element = restProps.to ? Link : 'button';

	return (
        <Element
            className={`btn ${isActive && 'btn-active'} ${outline && 'btn-outline'} ${variation ? variations[variation] : ''} ${colors ? colors[color] : ''}`}
            {...restProps}
        >
            { text }
        </Element>
	);
};

export default Button;