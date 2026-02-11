"use client";

import ImageSequenceCanvas from "@/components/ImageSequenceCanvas";
import Overlay from "@/components/Overlay";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* 
        Scroll container height:
        Adjusts how "fast" the scroll feels. 
        500vh means the user has to scroll 5 screens worth 
        to go from start to end of the animation.
      */}
      <div style={{ height: "600vh" }}>

        {/* Sticky container for the visuals */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* Background: Car Animation */}
          <div className="absolute inset-0 z-0">
            <ImageSequenceCanvas />
          </div>

          {/* Foreground: HUD & Text */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <Overlay />
          </div>

        </div>
      </div>

      {/* Scroll indicator if needed at the start, 
          but Overlay handles the main title. 
      */}
    </main>
  );
}
