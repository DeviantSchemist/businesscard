import Profile from "../assets/Profile.png";
import Mail from "../assets/mail.png";
import LinkedIn from "../assets/linkedin.png";

export default function Info() {
  return (
    <main className="bg-[#1A1B21] flex flex-col items-center">
      <img src={Profile} alt="Profile Picture" className="w-[317px] h-[317px]" />
      <h1 className="text-[25px] font-bold text-white mt-3">Laura Smith</h1>
      <h2 className="text-[#F3BF99] text-[12.8px] mt-[-5px]">Frontend Developer</h2>
      <p className="text-white mb-6 text-[10.24px] mt-2">laurasmith.website</p>
      <section className="flex gap-x-8">
        <button className="flex justify-center items-center gap-x-2 bg-white rounded-md w-[115px] py-[9px] pr-[13px] pl-[11px]">
          <img src={Mail} alt="E-mail" />
          <p className="">Email</p>
        </button>
        <button className="flex justify-center items-center gap-x-2 bg-sky-600 rounded-md w-[115px] py-[9px] pr-[13px] pl-[11px]">
          <img src={LinkedIn} alt="LinkedIn" />
          <p className="text-white">LinkedIn</p>
        </button>
      </section>
    </main>
  )
}