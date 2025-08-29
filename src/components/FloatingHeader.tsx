import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export const FloatingHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="backdrop-blur-md bg-card/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3">
            <Heart className="w-6 h-6 text-primary animate-float-hearts" />
            <h1 className="font-script text-3xl md:text-4xl text-primary font-semibold">
              Our Story
            </h1>
            <Heart className="w-6 h-6 text-primary animate-float-hearts" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </header>
  );
};