import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Github from "../assets/github.png";

export default function Footer() {
  return (
    <footer className="bg-[#161619] flex justify-center gap-x-8 py-5">
      <img src={Twitter} alt="Twitter" />
      <img src={Facebook} alt="Facebook" />
      <img src={Instagram} alt="Instagram" />
      <img src={Github} alt="Github" />
    </footer>
  )
}