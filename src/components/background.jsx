import { MovingLines, } from "@arwes/react";
import BgPuffs from './puffs';

const Background = ({ theme }) => {
    return (
        <div
            className='bg-small fixed brightness-90   md:bg-big bg-center bg-cover bg-no-repeat w-full  h-full'
        >
            <div
                style={{ background: 'radial-gradient(circle, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))' }}
                className="fixed inset-0 opacity-40">

            </div>

            <MovingLines lineColor={theme.colors.primary.deco(2)} lineWidth={3} />
            <BgPuffs />
        </div>
    );
};

export default Background;