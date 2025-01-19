import Button from '../components/Button';
import FormGameSetup from '../components/FormGameSetup';

const GameSetupPage = () => {
    return (
        <article className="bg-base-200 h-screen flex justify-center items-center">
            <section className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        Lag spill
                    </h2>
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
        </article>
    );
};

export default GameSetupPage;