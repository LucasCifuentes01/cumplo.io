import Benefits from "@/components/benefits";
import HowItWorks from "@/components/how-it-works";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/waitlist-form";

import { Footer } from "@/components/footer";
import LandingImageSvg from "@/images/landingImage.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='flex h-16 items-center justify-between px-8'>
          <p className='text-xl font-bold'>cumpli.me</p>
        </div>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-violet-50 to-purple-100'>
          <div className='px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='flex flex-col justify-center space-y-4'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-violet-900'>
                    Cumple tus metas con un poco de presión amistosa
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Comprométete con tus objetivos, deposita una garantía y
                    recupera tu dinero cuando cumplas. La motivación que
                    necesitabas para alcanzar tus metas.
                  </p>
                </div>
                <div className='flex flex-col w-full gap-2 max-w-md min-[400px]:flex-row'>
                  <div className='w-full'>
                    <Link href='#waitlist'>
                      <Button
                        size='lg'
                        className='bg-violet-600 hover:bg-violet-700 flex-1 w-full'
                      >
                        Comenzar ahora
                      </Button>
                    </Link>
                  </div>

                  <div className='w-full'>
                    <Link href='#como-funciona'>
                      <Button
                        className='w-full flex-1'
                        size='lg'
                        variant='outline'
                      >
                        ¿Cómo funciona?
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <LandingImageSvg />
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Benefits />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
