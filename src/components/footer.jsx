import { Animated, Animator, BleepsOnAnimator, FrameSVGKranox, FrameSVGLines, FrameSVGOctagon, Text, aa, aaOpacity, useBleeps, useFrameSVGAssemblingAnimation } from "@arwes/react";
import { useRef, useState } from "react";
import { kranoxStyle, linesStyle, octagonStyle, theme } from "../utlis/settings";
import { socialLinksData } from "../data";
import { sendEmail } from "../utlis/emails-service";

const SocialFrame = () => {
    const svgRef = useRef(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
    return (
        <FrameSVGOctagon
            elementRef={svgRef}
            onRender={onRender}
            padding={2}
        />
    )
}

const SocialLinks = ({ active }) => {

    return (
        <div className="flex items-center gap-x-6">
            {
                socialLinksData.map((element, idx) =>

                    <a target='_blank' onMouseEnter={() => bleeps.click?.play()} href={element.href} key={idx} className="octagon even:hover:rotate-12 odd:hover:-rotate-12 transition-all duration-500" style={{
                        position: 'relative',
                        height: 50,
                        width: 54,
                    }}>
                        <style>
                            {octagonStyle}
                        </style>

                        <SocialFrame />

                        <Animator active={active}>
                            <div className=" translate-x-3.5 translate-y-3.5" >
                                {element.icon}
                            </div>
                        </Animator>
                    </a>


                )
            }
        </div>
    );
}




const Footer = ({ active }) => {
    const svgRef = useRef(null);
    const { onRender } = useFrameSVGAssemblingAnimation(svgRef);
    const svgRef2 = useRef(null);
    const renderer = useFrameSVGAssemblingAnimation(svgRef2);

    const SUCCESS_MESSAGE = 'Thankyou for contact me.'
    const FAILURE_MESSAGE = 'Something went wrong.'

    const formRef = useRef(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        if (formRef.current) {
            console.log(formRef.current)
            const res = await sendEmail(formRef.current)
            displayMessage(res.status)
        }

        formRef.current?.reset();
        setLoading(false);
    }

    const displayMessage = (status) => {
        status === 200
            ? setMessage(SUCCESS_MESSAGE)
            : setMessage(FAILURE_MESSAGE);

        setTimeout(() => {
            setMessage(null)
        }, 15000);
    }


    return (
        <Animated animated={[aaOpacity()]} style={{
            padding: theme.space([15, 8]),
        }} className="relative contrast-125 brightness-95 lines w-[100%]">
            <style>{linesStyle}</style>


            <FrameSVGLines
                elementRef={svgRef}
                onRender={onRender}
            />

            <Animator manager="stagger" active={active}>
                <form ref={formRef} onSubmit={handleSubmit} className="h-full w-full max-w-[800px] md:mr-auto mx-auto">
                    <Animator active={active}>
                        <BleepsOnAnimator continuous transitions={{ entering: 'type' }} />
                        <Text style={{ color: theme.colors.secondary.main(1) }} className="font-primary text-center md:text-left uppercase mb-8 text-3xl font-semibold" as="h1">Let's connect</Text>
                    </Animator>

                    {/* input for email */}
                    <Animator>
                        <div className="kranox p-2 mb-6 w-full h-[150px]" style={{
                            position: 'relative',
                        }}>
                            <style>{kranoxStyle}</style>

                            <FrameSVGKranox
                                elementRef={svgRef}
                                onRender={onRender}
                                padding={4}
                                strokeWidth={2}
                                squareSize={0}
                                smallLineLength={12}
                                largeLineLength={48}
                            />

                            <Animator active={true}>
                                <div style={{ backgroundColor: theme.colors.primary.deco(0) }} className=" pl-5 pt-4 pb-1 mb-5 overflow-hidden  h-full w-full">
                                    <textarea required minLength={20} style={{ color: theme.colors.primary.text(0) }} placeholder="Say Hii 👋🏻" className="resize-none placeholder:text-white/90 placeholder:lowercase font-secondary font-medium text-[17px]  bg-transparent  pr-2 leading-relaxed overflow-y-auto outline-none h-full w-full" />
                                </div>

                            </Animator>

                        </div>
                    </Animator>



                    <div className="flex flex-col max-w-[500px] w-full md:flex-row items-center justify-center md:justify-between">
                        {/* button  */}
                        <div className="kranox mb-6">
                            <style>{kranoxStyle}</style>
                            <button disabled={loading} type="submit" style={{ position: "relative", height: 50, width: 150, padding: theme.space([0, 0]), textAlign: 'center' }}>
                                <FrameSVGKranox
                                    elementRef={svgRef2}
                                    onRender={renderer.onRender}
                                    padding={4}
                                    strokeWidth={2}
                                    squareSize={0}
                                    smallLineLength={12}
                                    largeLineLength={48}
                                />
                                <Animator active={active}>
                                    <Text as="p" style={{ color: `hsla(180,85%,55%,1)` }} className="font-primary font-medium  uppercase"  >
                                        Connect
                                    </Text>
                                </Animator>

                            </button>
                            <Text className="mt-2" as="p">{message}</Text>
                        </div>



                        {/* links  */}
                        <Animator active={active}>
                            <SocialLinks active={active} />
                        </Animator>
                    </div>
                </form>
            </Animator>
        </Animated>
    );
};

export default Footer;