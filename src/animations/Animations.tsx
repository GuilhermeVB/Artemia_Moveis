"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimationTeste()  {

    useGSAP(() => {
        gsap.from(".banner_content", {
            yPercent: 100,
        })
    })

    return <></>
}