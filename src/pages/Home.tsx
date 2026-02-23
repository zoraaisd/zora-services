import { useEffect, useState } from "react";
import {
  Hero,
  EnterpriseDifferentiators,
  TrustedBy,
  Industries,
  Technologies,
  ImpactMetrics,
  Cta,
} from "../components/home";
import CookieNotice from "../components/CookieNotice";

const Home: React.FC = () => {
  /* Cursor Glow */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* Cookie Notice */
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("zora-cookie");
    if (!consent) setShowCookie(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("zora-cookie", "accepted");
    setShowCookie(false);
  };

  return (
    <section className="relative bg-[#010409] text-white overflow-hidden">
      {/* Keyframes */}
      <style>{`
        @keyframes zora-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes zora-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Ultra Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010409] via-[#050b14] to-[#010409] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.06),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(30,64,175,0.05),transparent_40%)] pointer-events-none" />

      {/* Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-[600px] h-[600px] bg-blue-600/10 blur-[250px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <div className="relative z-10">
        <Hero />
        <EnterpriseDifferentiators />
        <TrustedBy />
        <Industries />
        <Technologies />
        <ImpactMetrics />
        <Cta />
      </div>

      {/* ================= COOKIE NOTICE ================= */}
      {showCookie && (
        <CookieNotice onAccept={acceptCookies} />
      )}
    </section>
  );
};

export default Home;
