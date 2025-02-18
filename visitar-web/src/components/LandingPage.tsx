import { useEffect, useState } from "react";
import backgroundVideo from "../assets/backgroundVideo.mp4";
import HowToUse from "./HowToUse";
import Download from "./Download";
import { useTranslation } from "react-i18next";
import FAQ from "./FAQ";

const LandingPage: React.FC = () => {
  const [t] = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="relative flex h-screen flex-col items-center justify-start bg-cover bg-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover">
          <source
            src={backgroundVideo}
            type="video/mp4"
          />
          {t("landing-page.video-error")}
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex-[1]"></div>
        <h1
          id="landing-page-title"
          className={isLoaded ? "animate-fadeIn" : ""}>
          ŠIROKI BRIJEG
          <br />
          LANDMARKS AR
        </h1>
        <h2
          className={`sm:text-md relative mx-10 my-5 text-center text-2xl text-white transition-opacity delay-1000 duration-1000 md:text-4xl ${isLoaded ? "animate-fadeInDelay" : "opacity-0"}`}>
          {t("landing-page.subtitle")}
        </h2>
        <div className="flex-[2]"></div>
      </div>
      <div id="how-to-use">
        <HowToUse />
      </div>
      <div id="download">
        <Download />
      </div>
      <div id="FAQ">
        <FAQ />
      </div>
    </>
  );
};

export default LandingPage;
