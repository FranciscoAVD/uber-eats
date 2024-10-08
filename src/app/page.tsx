import App from "@/components/app";
import Phone from "@/components/phone";

export default function Landing() {
  return (
    <div className="grid place-items-center sm:h-screen sm:bg-neutral-300">
    <Phone className="hidden sm:block">
      <App />
    </Phone>
    <App className="sm:hidden"/>
    </div>
  )
}
