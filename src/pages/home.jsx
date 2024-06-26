import { Animated, Animator, BleepsOnAnimator, FrameSVGOctagon, FrameSVGUnderline, Text, aa, aaFlicker, aaVisibility, useBleeps, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { useEffect, useRef, useState } from "react";
import { octagonStyle, theme } from "../utlis/settings";
import { homeData, socialLinksData } from "../data";
import { Link, } from "react-router-dom";

const HomePage = () => {
    const svgRef = useRef(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
    const [active, setActive] = useState(false);
    const bleeps = useBleeps();


    useEffect(() => {
        setActive(active => !active);
    }, []);


    const hoverSound = () => {
        bleeps.click.play()
    }


    const profileStyle = {
        position: 'relative',
        display: 'block',
        margin: theme.space([4, 'auto']),
        padding: theme.space(3),
        textAlign: 'center'
    }
    return (
        <section className="w-full   h-screen overflow-y-auto md:overflow-hidden flex flex-col gap-y-2 justify-center items-center">
            <Animator active={active} manager='stagger'>
                <BleepsOnAnimator transitions={{ entering: 'intro', }}
                    continuous
                />
                <div
                    className="octagon max-w-[300px] min-w-[150px] w-full"
                    style={profileStyle}
                >
                    <style>{octagonStyle}</style>


                    <Animator>
                        <FrameSVGOctagon
                            elementRef={svgRef}
                            onRender={onRender}
                            padding={4}
                            strokeWidth={0.8}
                        />
                    </Animator>

                    <Animator active={active}>
                        <img className="object-cover   scale-105   rounded-lg  h-full" src={homeData.avator} alt="leo" />
                    </Animator>
                </div>
            </Animator>

            {/* name  */}
            <Animator active={active} duration={{ enter: 0.5, exit: 0.4 }}>
                <Text

                    style={{ color: theme.colors.primary.text(1), textShadow: '0 0 4px rgba(180,249,251,0.65)', }}
                    manager='decipher'
                    easing='outSine'
                    fixed

                    className="text-center text-3xl font-primary font-bold uppercase"
                >
                    {homeData.name}
                </Text>
            </Animator>

            {/* about  */}
            <Animator active={active} duration={{ delay: 1, enter: 1, exit: 0.4 }}>
                <BleepsOnAnimator transitions={{ entering: 'type' }}
                    continuous
                />
                <ul className="max-w-[500px] mb-2 text-[16px]  gap-x-3 justify-center items-center flex-wrap px-2 w-full font-secondary text-center leading-relaxed hover:mix-blend-plus-lighter transition-all duration-150">
                    <Text as="p" style={{ color: theme.colors.primary.text(1) }}>
                        {homeData.point1}
                    </Text>
                    <Text as="p" className="uppercase text-[15px] tracking-wider  font-medium" style={{ color: theme.colors.primary.text(1) }}>
                        {homeData.point2}
                    </Text>

                </ul>
            </Animator>


            {/* links */}
            <Animator active={active} duration={{ delay: 1, enter: 1.5, }}>
                <Animated animated={[aaVisibility(), aaFlicker()]} className="flex flex-wrap justify-center mt-2 mb-4 gap-x-6 gap-y-1 items-center">
                    {
                        socialLinksData.map((element, idx) =>
                            <a key={idx} target='_blank' onMouseEnter={hoverSound} href={element.href} className="flex items-center gap-x-2">
                                {element.icon}
                                <h6 style={{ color: theme.colors.primary.text(1) }} className=" font-secondary uppercase font-light text-sm">{element.text}</h6>
                            </a>
                        )
                    }
                </Animated>
            </Animator>


            <Animator active={active} duration={{ delay: 1, enter: 1.3 }}>
                <Animated as="div" className="flex flex-wrap justify-center max-w-[500px] w-full px-3    items-center gap-x-6 md:gap-x-16 gap-y-4" animated={[aaVisibility(), aa('y', '2rem', 0)]}  >

                    <div
                        onMouseEnter={hoverSound}
                        className='underline flex-1 w-full'
                        style={{
                            position: 'relative',
                            height: 40,
                            maxWidth: '170px',
                            width: '100%',
                            textAlign: 'center',
                            padding: theme.space(1.4)
                        }}

                    >

                        <style>
                            {`
                            .underline .arwes-react-frames-framesvgunderline [data-name=bg] {
                                color: ${theme.colors.primary.deco(2)};
                            },
                            .underline .arwes-react-frames-framesvgunderline [data-name=line] {
                                color: hsl(60, 75%, 50%);
                            }
                            `
                            }
                        </style>

                        <Animator>
                            <FrameSVGUnderline
                                squareSize={32}
                                strokeWidth={2}
                            />
                        </Animator>

                        <Animator active={active}>
                            <Link to={'/projects'}>
                                <Text
                                    as="button"
                                    style={{ color: theme.colors.primary.text(1) }}
                                    className="font-medium text-[17px] font-primary hover:mix-blend-plus-lighter transition-all duration-150"
                                >
                                    Project
                                </Text>
                            </Link>
                        </Animator>
                    </div>


                    <div
                        onMouseEnter={hoverSound}
                        className='underline flex-1 w-full max-w-[170px]'
                        style={{
                            position: 'relative',
                            height: 40,
                            textAlign: 'center',
                            padding: theme.space(1.4)
                        }}>

                        <Animator>
                            <FrameSVGUnderline
                                squareSize={32}
                                strokeWidth={2}
                            />
                        </Animator>


                        <Link to={'/about'}>
                            <Animator active={active}>
                                <Text
                                    as="button"
                                    style={{ color: theme.colors.primary.text(1) }}
                                    className="font-medium font-primary text-[17px] hover:mix-blend-plus-lighter transition-all duration-150"
                                >
                                    About me
                                </Text>
                            </Animator>
                        </Link>
                    </div>

                </Animated>
            </Animator>

        </section>
    );
}

export default HomePage;