import Introduce from "@/components/Introduce/Introduce";
import VideoClip from "@/components/VideoClip/VideoClip";

export default function Home() {
  return (
    <main>
      <div className="pt-14 text-center bg-[#1e1919] pb-[72px] text-white dark:bg-[#020817]">
        <Introduce />
        <VideoClip />
      </div>
    </main>
  )
}
