import Image from "next/image";
import LandingImg from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Home() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-10 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-6xl font-bold">
            HireMeMaybe
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Because your Job Search saga deserves its own dashboard
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}

export default Home;
