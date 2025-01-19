const Card = ({theme = 'dark', preTitle, title, subtitle, children}) => {
	return (
        <article data-theme={theme} className="card bg-base-100 shadow-xl w-full">
            <section className="card-body">
                <span className="text-secondary text-sm">
                    {preTitle}
                </span>
                <h2 className="card-title">{title}</h2>
                <p>{subtitle}</p>

                <footer className="card-actions justify-end gap-4">
                    {children}
                </footer>
            </section>
        </article>
	);
};

export default Card;