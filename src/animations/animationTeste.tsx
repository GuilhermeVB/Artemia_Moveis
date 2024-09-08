"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react"

export default function AnimationTeste() {

    useGSAP(() => {
        /*
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(".b", {
                scrollTrigger: {
                    trigger: ".a",
                    start: "top 50px",
                    end: "bottom 80%",
                    endTrigger: ".c",
                    markers: true,
                    toggleActions: "restart pause reverse pause"
                },
                x: 1533,
                rotation: 360,
                duration: 3
            })
        */

        /*
            gsap.registerPlugin(ScrollTrigger);

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".c",
                    start: "top center",
                    end: "top 100px",
                    scrub: 3,
                    markers: true
                }
            });

            tl.to(".c", {
                x: 1533,
                rotation: 360,
                ease: "none",
                duration: 3
            })
                .to(".c", {
                    backgroundColor: "purple",
                    duration: 1
                })
                .to(".c", {
                    x: 0,
                    duration: 3
                })
        */

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline()

        tl.to(".c", {
            scrollTrigger: {
                trigger: ".c",
                start: "top center",
                end: "top 100px",
                scrub: 3,
                pin: ".ghost",
                markers: true
            },
            x: 1533,
            rotation: 360,
            ease: "none",
            duration: 3
        })

        gsap.from(".b", { xPercent: 500, duration: 4 })

        ScrollTrigger.create({
            animation: tl,
            trigger: ".container",
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true,
            anticipatePin: 1
        })
    })

    return <></>
}