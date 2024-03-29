/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "react-animated-text-content"

function MainTitle({ title, secondTitle}) {

    return (
        <>
        <div className="wrapper pt-24 bold relative tracking-[-0.05em] text-[48px] leading-snug flex items-center justify-center agbalumo xl:pt-40">
            <h1 className=" pb-8 lg:text-7xl 2xl:text-9xl 2xl:pb-12">
                <span className="">
                    <AnimatedText
                    type='chars'
                    interval={0.04}
                    duration={0.8}
                    animation={{
                    y: '100px',
                    ease: 'ease',
                        }}
                      >
                       {title}
                    </AnimatedText>
                </span>
                <span>
                    <AnimatedText
                    type='chars'
                    interval={0.04}
                    duration={0.8}
                    animation={{
                    y: '100px',
                    ease: 'ease',
                        }}
                      >
                       {secondTitle}
                    </AnimatedText>
                </span>
            </h1>
        </div>
        </>
    )
}

export default MainTitle