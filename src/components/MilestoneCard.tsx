import { useEffect, useRef, useState } from "react";
import { Heart, Star, Sparkles } from "lucide-react";

interface MilestoneCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  index: number;
}

export const MilestoneCard = ({ title, description, image, date, index }: MilestoneCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`milestone-card max-w-4xl mx-auto ${
        isVisible ? "animate-slide-up-fade" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="milestone-content">
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4">
          <Heart className="w-8 h-8 text-primary/30 animate-float-hearts" />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Star className="w-6 h-6 text-accent/40 animate-twinkle" />
        </div>
        <div className="absolute top-1/2 -right-6 hidden md:block">
          <Sparkles className="w-5 h-5 text-romantic-gold animate-sparkle" />
        </div>

        <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:grid-flow-col-dense"}`}>
          {/* Image */}
          <div className={`${isEven ? "md:order-1" : "md:order-2"} relative group`}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Floating date badge */}
            <div className="absolute -bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg font-medium text-sm">
              {date}
            </div>
          </div>

          {/* Content */}
          <div className={`${isEven ? "md:order-2" : "md:order-1"} space-y-4`}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              {title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {description}
            </p>
            
            {/* Decorative hearts */}
            <div className="flex gap-2 pt-4">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-4 h-4 text-primary/50 animate-twinkle"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};