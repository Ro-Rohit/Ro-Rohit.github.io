import { Animator } from '@arwes/react-animator';
import { Puffs } from '@arwes/react-bgs';

const BgPuffs = () => {
    return (
        <Animator duration={{
            enter: 1, exit: 1.5, interval: 3.5
        }}>
            <Puffs
                color='hsla(180, 100%, 75%, 0.5)'
                quantity={50}
                padding={0}
                //xOffset={[50, -100]}
                yOffset={[50, -100]}
                radiusOffset={[8, 16]}
            // sets={1}
            />
        </Animator>
    );
};

export default BgPuffs

