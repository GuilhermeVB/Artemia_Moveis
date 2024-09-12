"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Animations() {

    useGSAP(() => {

        const mm = gsap.matchMedia();
        gsap.registerPlugin(ScrollTrigger);

        mm.add("(min-width: 0px)", () => {

            /* WHATSAPP */

            gsap.to(".floating_whats_app",
                { duration: 2, opacity: 1 }
            )

            /* PORTFOLIO */

            gsap.to(".portfolio_writing", {
                scrollTrigger: {
                    trigger: ".portfolio_writing",
                    start: "top 80%",
                    end: "top 80%",
                    toggleActions: "restart none reverse none",
                    markers: true
                },
                opacity: 1
            })

            const dialogScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".portfolio_projects",
                    start: "10% 80%",
                    end: "10% 80%",
                    toggleActions: "restart none reverse none",
                    markers: true
                }
            })

            dialogScroller.fromTo(".dialog_animation_1",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 })
                .fromTo(".dialog_animation_2",
                    { yPercent: 50 },
                    { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 },
                    "-=0.6")
                .fromTo(".dialog_animation_3",
                    { yPercent: 50 },
                    { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 },
                    "-=0.6"
                )

            /* ABOUT US */

            const goalScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container_animation_goals",
                    start: "40% 80%",
                    end: "40% 80%",
                    toggleActions: "restart none reverse none",
                    markers: true
                }
            })

            goalScroller.fromTo(".animation_goal",
                { yPercent: 50, opacity: 0 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 }
            )

            const aboutScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container_animation_about",
                    start: "20% 80%",
                    end: "20% 80%",
                    toggleActions: "restart none reverse none",
                    markers: true
                }
            })

            aboutScroller.fromTo(".about",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 }
            )

            const motivationalScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".motivational_speech",
                    start: "30% 80%",
                    end: "30% 80%",
                    toggleActions: "restart none reverse none",
                    markers: true
                }
            })

            motivationalScroller.fromTo(".motivational_speech_content",
                { xPercent: -50 },
                { ease: "back.out(1)", opacity: 1, xPercent: 0, duration: .7 })
                .fromTo(".motivational_speech_figure",
                    { xPercent: 50 },
                    { ease: "back.out(1)", opacity: 1, xPercent: 0, duration: .7 },
                    "-=0.7"
                )

            /* FEEDBACK */

            const feedbackScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container_animation_feedback",
                    start: "40% 80%",
                    end: "40% 80%",
                    toggleActions: "restart none reverse none",
                    markers: true
                }
            })

            feedbackScroller.fromTo(".feedback_container",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 }
            )

            const contactScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact_container",
                    start: "30% 80%",
                    end: "30% 80%",
                    toggleActions: "restart none reverse none",
                    markers: true
                }
            })

            contactScroller.fromTo(".contact_content",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 }
            )
        })
    })

    return <></>
}