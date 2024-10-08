import App from "@/components/app";
import Phone from "@/components/phone";

export default function Landing() {
  return (
    <div className="sm:grid sm:place-items-center sm:h-screen sm:bg-neutral-300">
    <Phone className="hidden sm:block">
      <App className=""/>
    </Phone>
    <App className="sm:hidden min-h-screen"/>
    </div>
  )
}
