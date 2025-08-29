import { FloatingHeader } from "@/components/FloatingHeader";
import { MilestoneCard } from "@/components/MilestoneCard";
import { FloatingDecorations } from "@/components/FloatingDecorations";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ClosingMessage } from "@/components/ClosingMessage";

// Import our generated romantic images
import meetingImage from "@/assets/meeting.jpg";
import firstTripImage from "@/assets/first-trip.jpg";
import anniversaryImage from "@/assets/anniversary.jpg";
import memoriesImage from "@/assets/memories.jpg";
import foreverImage from "@/assets/forever.jpg";

const milestones = [
  {
    title: "How We Met",
    description: "It was a rainy Tuesday morning at our favorite coffee shop. You ordered a lavender latte, and I knew right then that you were someone special. Our eyes met across the crowded café, and in that moment, everything else faded away. What started as a simple conversation about books turned into hours of laughter and connection.",
    image: meetingImage,
    date: "March 15, 2022",
  },
  {
    title: "Our First Adventure",
    description: "Remember our spontaneous weekend getaway to the mountains? We packed our bags with excitement and drove until we found that perfect little cabin. We hiked through misty trails, watched sunsets paint the sky in shades of pink and gold, and shared our dreams under a blanket of stars.",
    image: firstTripImage,
    date: "June 8, 2022",
  },
  {
    title: "First Anniversary",
    description: "A year of love, laughter, and endless memories. You surprised me with dinner at that intimate little restaurant where the candles flickered like our hearts - warm and bright. We talked about how much we'd grown together, and I knew that this was just the beginning of our beautiful story.",
    image: anniversaryImage,
    date: "March 15, 2023",
  },
  {
    title: "Our Special Moments",
    description: "From dancing in the kitchen while cooking dinner to those quiet Sunday mornings with coffee and crosswords. From surprise picnics in the park to getting caught in the rain and laughing until our sides hurt. These are the moments that make up the beautiful tapestry of our love.",
    image: memoriesImage,
    date: "Every Day",
  },
  {
    title: "Today & Forever",
    description: "Here we are, writing new chapters of our love story every single day. With every sunrise, I fall in love with you all over again. Our journey together has been magical, and I can't wait to see what adventures await us. Thank you for being my partner, my best friend, and my forever love.",
    image: foreverImage,
    date: "Always",
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background decorations */}
      <FloatingDecorations />
      
      {/* Fixed header */}
      <FloatingHeader />
      
      {/* Main content */}
      <main className="relative z-10 pt-24">
        {/* Timeline */}
        <section className="py-12">
          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={index}
              title={milestone.title}
              description={milestone.description}
              image={milestone.image}
              date={milestone.date}
              index={index}
            />
          ))}
        </section>
        
        {/* Closing message */}
        <ClosingMessage />
      </main>
      
      {/* Music player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;