import Button from '../components/Button';
import FormGameSetup from '../components/FormGameSetup';

const GameSetupPage = () => {
    return (
        <article className="bg-base-200 h-screen flex justify-center items-center">
            <section>
                <h1 className="text-primary text-6xl text-center font-bold mb-8">MEMORY</h1>
                <section className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            Lag spill
                        </h2>
                        <FormGameSetup />
                        <span className="divider" />
                        <footer className="card-actions justify-end">
                            <Button
                                color="accent"
                                text="Start spill"
                                to="/play"
                            />
                        </footer>
                    </div>
                </section>
            </section>
        </article>
    );
};

export default GameSetupPage;