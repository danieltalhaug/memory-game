const Container = (props) => {
    const { el, children } = props;

    const Element = el ?? 'div';

	return (
        <Element className="container mx-auto">
            {children}
        </Element>
	);
};

export default Container;