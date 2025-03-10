import { useEffect, useState } from "react";

export const Loadingscreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [loadingWidth, setLoadingWidth] = useState(0); 
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setText(fullText.substring(0, index));

            
            const progress = (index / fullText.length) * 100;
            setLoadingWidth(progress); 

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}<span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-100 rounded relative overflow-hidden">
                <div
                    className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
                    style={{ width: `${loadingWidth}%` }}
                ></div>
            </div>
        </div>
    );
};