import React, { useRef, useState, MouseEvent } from 'react';

interface ImageMagnifierProps {
    src: string;
    width: string | number;
    height: string | number;
    magnifierHeight?: number;
    magnifierWidth?: number;
    zoomLevel?: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
    src,
    width,
    height,
    magnifierHeight = 200,
    magnifierWidth = 200,
    zoomLevel = 2
}) => {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
    const imgRef = useRef<HTMLImageElement>(null);

    const handleMouseEnter = () => {
        setShowMagnifier(true);
    };

    const handleMouseLeave = () => {
        setShowMagnifier(false);
    };

    const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
        const { top, left, } = imgRef.current!.getBoundingClientRect();
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;

        setMagnifierPosition({ x, y });
    };

    return (
        <div className="relative" style={{ position: 'relative', width, height }}>
            <img
                ref={imgRef}
                src={src}
                alt="Product"
                style={{ width: '100%', height: '100%' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            />
            {showMagnifier && (
                <div
                    className="absolute pointer-events-none border-black border-2"
                    style={{
                        position: 'absolute',
                        pointerEvents: 'none',
                        height: `${magnifierHeight}px`,
                        width: `${magnifierWidth}px`,
                        top: `${magnifierPosition.y - magnifierHeight / 2}px`,
                        left: `${magnifierPosition.x - magnifierWidth / 2}px`,
                        backgroundColor: 'white',
                        backgroundImage: `url(${src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${(width as number) * zoomLevel}px ${(height as number) * zoomLevel}px`,
                        backgroundPositionX: `${-magnifierPosition.x * zoomLevel + magnifierWidth / 2}px`,
                        backgroundPositionY: `${-magnifierPosition.y * zoomLevel + magnifierHeight / 2}px`,
                        border: '1px solid lightgray'
                    }}
                />
            )}
        </div>
    );
};

export default ImageMagnifier;
