import AnimationTeste from "@/animations/animationTeste";

export default function Home() {
    return (
        <div style={{ height: '200rem', backgroundColor: 'darkgray' }}>
            <AnimationTeste />
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30rem', padding: '5rem' }}>
                <div className="a" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', width: '100px', height: '100px', backgroundColor: 'purple' }}>
                    a
                </div>
                <div className="b" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', width: '100px', height: '100px', backgroundColor: 'green' }}>
                    b
                </div>
                <div className="c" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', width: '100px', height: '100px', backgroundColor: 'orange', zIndex: '1' }}>
                    c
                </div>
                <div className="ghost" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '50px', width: '100px', height: '100px', backgroundColor: 'gray', position: 'relative', bottom: '36.25rem' }}>
                    c
                </div>
            </div>
        </div>
    )
}