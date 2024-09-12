"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Animations() {

    useGSAP(() => {

        const mm = gsap.matchMedia();
        gsap.registerPlugin(ScrollTrigger);

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
                toggleActions: "restart none reverse none"
            },
            opacity: 1
        })

        const dialogScroller = gsap.timeline({
            scrollTrigger: {
                trigger: ".portfolio_projects",
                start: "10% 80%",
                end: "10% 80%",
                toggleActions: "restart none reverse none"
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

        /* --- Goal --- */

        const goalScroller = gsap.timeline({
            scrollTrigger: {
                trigger: ".container_animation_goals",
                start: "40% 80%",
                end: "40% 80%",
                toggleActions: "restart none reverse none"
            }
        })

        goalScroller.fromTo(".animation_goal",
            { yPercent: 50 },
            { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 }
        )

        /* --- About --- */

        const aboutScroller = gsap.timeline({
            scrollTrigger: {
                trigger: ".container_animation_about",
                start: "20% 80%",
                end: "20% 80%",
                toggleActions: "restart none reverse none"
            }
        })

        aboutScroller.fromTo(".about",
            { yPercent: 50 },
            { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 }
        )

        /* --- Motivational Speech --- */

        /* LAPTOP or + */

        mm.add("(min-width: 1000px)", () => {
            const motivationalScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".motivational_speech",
                    start: "30% 80%",
                    end: "30% 80%",
                    toggleActions: "restart none reverse none"
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
        })

        /* IPAD */

        mm.add("(min-width: 675px) and (max-width: 999px)", () => {
            const motivationalScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".motivational_speech",
                    start: "30% 80%",
                    end: "30% 80%",
                    toggleActions: "restart none reverse none"
                }
            })

            motivationalScroller.fromTo(".motivational_speech_figure",
                { xPercent: -50 },
                { ease: "back.out(1)", opacity: 1, xPercent: 0, duration: .7 })
                .fromTo(".motivational_speech_content",
                    { xPercent: 50 },
                    { ease: "back.out(1)", opacity: 1, xPercent: 0, duration: .7 },
                    "-=0.7"
                )
        })

        /* MOBILE */

        mm.add("(max-width: 674px)", () => {
            const motivationalScroller = gsap.timeline({
                scrollTrigger: {
                    trigger: ".motivational_speech",
                    start: "50% 80%",
                    end: "50% 80%",
                    toggleActions: "restart none reverse none"
                }
            })

            motivationalScroller.fromTo(".motivational_speech_content",
                { yPercent: 50 },
                { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 })
        })

        /* FEEDBACK */

        const feedbackScroller = gsap.timeline({
            scrollTrigger: {
                trigger: ".container_animation_feedback",
                start: "40% 80%",
                end: "40% 80%",
                toggleActions: "restart none reverse none"
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
                toggleActions: "restart none reverse none"
            }
        })

        contactScroller.fromTo(".contact_content",
            { yPercent: 50 },
            { ease: "back.out(1)", opacity: 1, yPercent: 0, duration: .7 }
        )
    })

    return <></>
}