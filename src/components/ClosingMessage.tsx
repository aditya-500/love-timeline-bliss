import { Heart, Infinity } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ClosingMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (messageRef.current) {
      observer.observe(messageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={messageRef}
      className={`py-24 text-center ${isVisible ? "animate-slide-up-fade" : "opacity-0"}`}
    >
      <div className="max-w-2xl mx-auto px-4">
        {/* Decorative top */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Heart className="w-8 h-8 text-primary animate-float-hearts" />
          <Infinity className="w-10 h-10 text-accent animate-twinkle" />
          <Heart className="w-8 h-8 text-primary animate-float-hearts" style={{ animationDelay: "1s" }} />
        </div>

        {/* Main message */}
        <h2 className="font-script text-4xl md:text-6xl text-primary mb-6 leading-relaxed">
          This is just the beginning
        </h2>
        <h3 className="font-script text-3xl md:text-4xl text-foreground mb-8">
          of our forever ❤️
        </h3>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground font-light italic mb-12">
          "Every love story is beautiful, but ours is my favorite."
        </p>

        {/* Final decorative elements */}
        <div className="flex justify-center items-center gap-2">
          {[...Array(7)].map((_, i) => (
            <Heart
              key={i}
              className="w-3 h-3 text-primary/40 animate-twinkle"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};