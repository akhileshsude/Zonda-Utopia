"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 181;
const IMAGES_BASE_PATH = "/images/utopia-frames/ezgif-frame-";

export default function ImageSequenceCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    // Create a motion value that maps scroll 0-1 to frame index 0-(FRAME_COUNT-1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            // Pad single/double digits to 3, e.g., 001, 010, 100
            const formattedIndex = i.toString().padStart(3, "0");
            img.src = `${IMAGES_BASE_PATH}${formattedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate "cover" dimensions
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Resize handler
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-render current frame after resize
            const currentFrame = Math.round(frameIndex.get());
            if (images.length > 0) {
                renderFrame(currentFrame);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, [images, isLoaded]); // Re-bind when images are loaded

    // Update loop
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded) return;
        const frameToRender = Math.round(latest);
        requestAnimationFrame(() => renderFrame(frameToRender));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen z-0 bg-[#050505]">
            <canvas ref={canvasRef} className="block w-full h-full" />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-[#CC0000] text-sm tracking-widest uppercase">
                    Loading Cinematic Experience...
                </div>
            )}
        </div>
    );
}
