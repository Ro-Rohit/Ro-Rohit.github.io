import {
    useBleeps,
    Animated,
    FrameSVGCorners,
    aa,
    aaVisibility,
    Animator
} from '@arwes/react';


const Card = ({ theme, children }) => {
    const bleeps = useBleeps();

    return (
        <Animator merge combine manager='stagger'>
            <Animated
                className='card mt-[80px] mx-2 sm:mx-0 mb-[200px]'
                style={{
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    padding: theme.space([10, 5]),
                    textAlign: 'left'
                }}
                animated={[aaVisibility(), aa('y', '2rem', 0)]}
                onClick={() => bleeps.click?.play()}
            >
                <style>{`
                    .card .arwes-react-frames-framesvg [data-name=bg] {
                    color: ${theme.colors.primary.deco(3)};
                    }
                    .card .arwes-react-frames-framesvg [data-name=line] {
                        color: hsl(60, 75%, 50%);
                        filter: drop-shadow(0 0 4px hsl(60, 75%, 50%))                    }
                `}
                </style>


                <Animator>
                    <FrameSVGCorners strokeWidth={2} />
                </Animator>

                {children}

            </Animated>
        </Animator>
    );
};

export default Card;
