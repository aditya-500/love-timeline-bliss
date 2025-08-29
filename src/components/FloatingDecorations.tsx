import { Heart, Star, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export const FloatingDecorations = () => {
  const [decorations, setDecorations] = useState<Array<{
    id: number;
    type: 'heart' | 'star' | 'sparkle';
    x: number;
    y: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newDecorations = [];
    for (let i = 0; i < 15; i++) {
      newDecorations.push({
        id: i,
        type: ['heart', 'star', 'sparkle'][Math.floor(Math.random() * 3)] as 'heart' | 'star' | 'sparkle',
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      });
    }
    setDecorations(newDecorations);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'heart':
        return <Heart className="w-4 h-4 text-primary/20 animate-float-hearts" />;
      case 'star':
        return <Star className="w-3 h-3 text-accent/25 animate-twinkle" />;
      case 'sparkle':
        return <Sparkles className="w-5 h-5 text-romantic-gold/30 animate-sparkle" />;
      default:
        return <Heart className="w-4 h-4 text-primary/20 animate-float-hearts" />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className="absolute"
          style={{
            left: `${decoration.x}%`,
            top: `${decoration.y}%`,
            animationDelay: `${decoration.delay}s`,
          }}
        >
          {getIcon(decoration.type)}
        </div>
      ))}
    </div>
  );
};