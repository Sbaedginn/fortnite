import { useEffect, useState } from "react";

const Preloader = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length < 3 ? prev + "." : ""));
        }, 500); // каждые 500 мс добавляется точка

        return () => clearInterval(interval); // очистка интервала при размонтировании
    }, []);

    return (
        <>
            <img src="/loading.gif" />
            <div className="preloader">Loading{dots}</div>
        </>
    );
};

export default Preloader;