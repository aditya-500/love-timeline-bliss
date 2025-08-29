import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you would control audio playback here
    if (!isPlaying) {
      console.log("🎵 Playing romantic background music...");
    } else {
      console.log("🎵 Music paused");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleMusic}
        size="lg"
        className="romantic-button rounded-full w-14 h-14 p-0 shadow-xl"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </Button>
      
      {/* Subtle indicator */}
      <div className="absolute -top-2 -right-2">
        <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-muted'}`} />
      </div>
    </div>
  );
};