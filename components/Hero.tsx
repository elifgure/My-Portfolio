import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      
      {/* LEFT PANEL */}
      <div className="flex items-center justify-center p-8">
        <ProfileCard />
      </div>

      {/* RIGHT PANEL (şimdilik boş) */}
      <div className="hidden lg:flex items-center justify-center">
        {/* stats burada olacak */}
      </div>

    </section>
  );
}
