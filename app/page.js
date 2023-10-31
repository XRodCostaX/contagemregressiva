// pages/index.js
import Countdown from '../app/components/Countdown';

const HomePage = () => {
    const targetDate = '22-12-2023T06:00:00';

    return (
        <div className="container mx-auto text-center mt-10">
            <Countdown targetDate={targetDate} />
        </div>
    );
};

export default HomePage;
