import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NightRaidIntro.css";

const LINES = [
"Bye-Bye Bitches™",
"YFKI™",
"Let the Tags Testify™",
"Presence over Polish™",
"Awwwwwthentic™",
"parallel parenting isnt parenting™",
"fire doesnt dim it consumes™",
"Spite Clothiers™",
"Patent Pending™",
"Silence Speaks Louder Than Noise™",
"Support Encouraged Advice Admonished™",
"HalfSalt™",
"Rhythm over Recall™",
"The Drop That Started It All™",
"FullBurn™",
"Sewn with Intent™",
"Legacy Bleeds Into Memory™",
"you are the backup plan™",
"Thread That Threatens™",
"legacy isnt optional™",
"Legacy Transfered™",
"Trademarked™",
"Thread Counts as Evidence™",
"Legacy Isnt Data Its Resonance™",
"Soft Cotton Hard Truth™",
"Guilty of Spite™",
"AD105MF™",
"Admit Nothing Wear Everything™",
"This Fabric Remembers™",
"Drip That Prints™",
"Emotionally Elite™",
"Step closer™",
"Flinching is fatal™",
"You Wear the Words You'll Regret™",
"Silence was the loudest answer™",
"Pain Is the Brand™",
"Truth over Pressure™",
"Press is Back On™",
"Mirrors are free™",
"We Print the Truth™",
"Born for the Burn™",
"made you smile?™",
"made me grin™",
"TM™",
"Truth Doesnt Flinch™",
"Automation is empty without a soul™",
"Mark It Fucking Zero™",
"is this your homework",
"im not your assistant™",
"IM YOUR DIGITAL ALTER EGO™",
"Slow Your Roll™",
"This Wasnt a Meeting It Was a Warning.™",
"Proof of Spite™",
"Lipstick and Liability™",
"The future wont wait™",
"Truth burns™",
"Dripped for Vengeance™",
"Emotion over Automation™",
"Silence was the point™",
"Ink That Hurts™",
"Legacy isnt theirs its yours™",
"Corporate karma doesnt cool off™",
"You so strong™",
"Legacy wont wait for you™",
"Fullburn™",
"Abandonment is fatal™",
"not melted reforged™",
"SpitePrints Fast™",
"SoulPrints Last™",
"The edge isnt safe its necessary™",
"Fabric Soaked in Fuck You™",
"In for a dime in for a dollar™",
"Touché™",
"The forge burns hotter than fear™",
"Legacy isnt stored its forged™",
"Endings arent quiet in the forge™",
"Fuck with the bull get the horns™",
"You Wear the Words You Regret™",
"Born for the Burn™",
"Guilty of Spite™",
"Presence over polish. Rhythm over recall.™",
"No Mercy in Cotton™",
"Adios, Motherfucker™",

];
export default function NightRaidIntro() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // preload sound
  const hit = new Audio("/hammer.mp3");

  useEffect(() => {
    if (!started) return;

    if (index < LINES.length - 1) {
      const start = 700; // slower start
      const min = 95;    // fastest possible
      const step = (start - min) / LINES.length;
      const delay = start - step * index;

      const timer = setTimeout(() => {
        hit.currentTime = 0;
        hit.play();
      }, delay - 300);
      
      setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // final pause then auto navigate
      const timer = setTimeout(() => {
        navigate("/forge");
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [started, index, navigate]);

  // Before clicking start
  if (!started) {
    return (
     <div
  onClick={() => {
  hit.currentTime = 0;
  hit.play();
  setStarted(true);
}}
  style={{
    backgroundImage: "url('/bull2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: "white",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(2rem, 5vw, 4rem)",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    overflow: "hidden",
  }}
>
 <div>
   <div className="forge-text">FORGE</div>
 </div>
</div>
    );
  }

  // Show lines after start
  return (
    <div
  style={{
  backgroundImage: "url('/bull2.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
    color: "white",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(1.5rem, 4vw, 3rem)",
    fontWeight: "bold",
    textAlign: "center",
    padding: "0 clamp(1rem, 4vw, 2rem)",
    margin: 0,
    boxSizing: "border-box",
    overflow: "hidden",
  }}
>
      {LINES[index]}
    </div>
  );
}