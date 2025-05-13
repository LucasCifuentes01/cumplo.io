import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Congrats() {
  return (
    <div className='flex flex-col h-dvh'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='flex h-16 items-center justify-between px-8 hover:cursor-pointer'>
          <Link href='/'>
            <p className='text-xl font-bold'>cumplo.io</p>
          </Link>
        </div>
      </header>
      <div className='flex items-center justify-center flex-1'>
        <div className='flex flex-col items-center justify-center space-y-6 rounded-lg border border-violet-200 bg-violet-50 p-8 text-violet-900 w-full max-w-md'>
          <CheckCircle className='h-12 w-12 text-violet-600 dark:text-violet-400' />
          <h3 className='text-2xl font-bold text-center'>¡Felicidades!</h3>
          <p className='text-center'>
            Te has unido exitosamente a la lista de espera de cumplo.io. Serás
            de los primeros en saber cuando lancemos la plataforma.
          </p>
          <div className='flex flex-col gap-3 w-full'>
            <Link href='/'>
              <Button className='w-full bg-violet-600 hover:bg-violet-700'>
                Volver
              </Button>
            </Link>
          </div>
          <div className='pt-4 border-t border-violet-200 dark:border-violet-800 w-full'>
            <p className='text-sm text-center text-muted-foreground'>
              ¿Quieres ayudarnos a crecer? ¡Comparte cumplo.io con tus amigos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
