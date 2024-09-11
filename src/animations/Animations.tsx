"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Animations() {

    useGSAP(() => {

        const mm = gsap.matchMedia();
        gsap.registerPlugin(ScrollTrigger);

        mm.add("(min-width: 1900px)", () => {

            /* BANNER */

            gsap.fromTo(".banner_content",
                { yPercent: 200 },
                { duration: 1.5, ease: "back.out(1)", opacity: 1, yPercent: 0, }
            )

            /* PORTFOLIO */

            gsap.to(".portfolio_writing", {
                scrollTrigger: {
                    trigger: ".portfolio_writing",
                    start: "top 80%",
                    end: "top 80%",
                    toggleActions: "restart none reverse none",
                },
                opacity: 1
            })

            const dialogScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".portfolio_projects",
                    start: "15% 80%",
                    end: "15% 80%",
                    toggleActions: "restart none reverse none",
                }
            })

            dialogScroller.fromTo(".dialog_animation_1",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0 })
                .fromTo(".dialog_animation_2",
                    { yPercent: 50 },
                    { ease: "back.out(1)", opacity: 1, yPercent: 0 },
                    "-=0.4")
                .fromTo(".dialog_animation_3",
                    { yPercent: 50 },
                    { ease: "back.out(1)", opacity: 1, yPercent: 0 },
                    "-=0.4"
                )

            /* ABOUT US */

            const goalScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container_animation_goals",
                    start: "center 80%",
                    end: "center 80%",
                    toggleActions: "restart none reverse none",
                }
            })

            goalScroller.fromTo(".goal",
                { yPercent: 50, opacity: 0 },
                { ease: "back.out(1)", opacity: 0.8, yPercent: 0 }
            )

            const aboutScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container_animation_about",
                    start: "25% 80%",
                    end: "25% 80%",
                    toggleActions: "restart none reverse none",
                }
            })

            aboutScroller.fromTo(".about",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0 }
            )

            const motivationalScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".motivational_speech",
                    start: "30% 80%",
                    end: "30% 80%",
                    toggleActions: "restart none reverse none",
                }
            })

            motivationalScroller.fromTo(".motivational_speech_content",
                { xPercent: -50 },
                { ease: "back.out(1)", opacity: 1, xPercent: 0 })
                .fromTo(".motivational_speech_figure",
                    { xPercent: 50 },
                    { ease: "back.out(1)", opacity: 1, xPercent: 0 },
                    "-=0.5"
                )

            /* FEEDBACK */

            const feedbackScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container_animation_feedback",
                    start: "40% 80%",
                    end: "40% 80%",
                    toggleActions: "restart none reverse none",
                }
            })

            feedbackScroller.fromTo(".feedback_container",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0 }
            )

            const contactScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact_container",
                    start: "30% 80%",
                    end: "30% 80%",
                    toggleActions: "restart none reverse none",
                }
            })

            contactScroller.fromTo(".contact_content",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0 }
            )
        })

    })

    return <></>
}