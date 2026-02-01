import { useEffect, useRef, useState } from 'react';

const RightPhotos = (props) => {
  const images = [
    props.img1,
    props.img2,
    props.img3,
    props.img4,
    props.img5,
  ];

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationId;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 3; // Adjust speed
        
        // Reset scroll position when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const handleClick = () => {
    setIsPaused(!isPaused);
  };

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="h-full flex items-center justify-center p-10">
      <div 
        id='rightcontent' 
        ref={scrollRef}
        onClick={handleClick}
        className="flex overflow-x-auto flex-nowrap gap-2 p-4 h-130 scrollbar-hide cursor-pointer"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedImages.map(
          (img, index) =>
            img && (
              <img
                key={index}
                src={img}
                className="h-full w-60 shrink-0 relative object-cover rounded-2xl"
                alt="car"
              />
            )
        )}
      </div>
    </div>
  );
};

export default RightPhotos;