"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { ChangeEvent, useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de envío - aquí iría la lógica real para guardar el email
    setTimeout(() => {
      setLoading(false);
      // Redirigir a la página de felicitación
      window.location.href = "/congrats";
    }, 1000);
  };

  return (
    <section id='waitlist' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-violet-900 dark:text-violet-100'>
              Sé de los primeros en probar cumplo.io
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Únete a nuestra lista de espera y obtén acceso anticipado cuando
              lancemos la plataforma
            </p>
          </div>
          <div className='w-full max-w-sm space-y-2'>
            {submitted ? (
              <div className='flex flex-col items-center justify-center space-y-6 rounded-lg border border-violet-200 bg-violet-50 p-8 text-violet-900 dark:border-violet-900 dark:bg-violet-900/20 dark:text-violet-100 w-full max-w-md mx-auto'>
                <div className='relative'>
                  <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 opacity-75 blur'></div>
                  <div className='relative flex h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-violet-950'>
                    <CheckCircle className='h-12 w-12 text-violet-600 dark:text-violet-400' />
                  </div>
                </div>
                <h3 className='text-2xl font-bold text-center'>
                  ¡Felicidades!
                </h3>
                <p className='text-center'>
                  Te has unido exitosamente a la lista de espera de cumplo.io.
                  Serás de los primeros en saber cuando lancemos la plataforma.
                </p>
                <div className='flex flex-col sm:flex-row gap-3 w-full max-w-xs'>
                  <Button
                    variant='outline'
                    className='w-full'
                    onClick={() => setSubmitted(false)}
                  >
                    Volver
                  </Button>
                  <Button
                    className='w-full bg-violet-600 hover:bg-violet-700'
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Explorar más
                  </Button>
                </div>
                <div className='pt-4 border-t border-violet-200 dark:border-violet-800 w-full'>
                  <p className='text-sm text-center text-muted-foreground'>
                    ¿Quieres ayudarnos a crecer? ¡Comparte cumplo.io con tus
                    amigos!
                  </p>
                  <div className='flex justify-center gap-4 mt-3'>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='rounded-full h-10 w-10'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-twitter'
                      >
                        <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                      </svg>
                      <span className='sr-only'>Compartir en Twitter</span>
                    </Button>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='rounded-full h-10 w-10'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-facebook'
                      >
                        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                      </svg>
                      <span className='sr-only'>Compartir en Facebook</span>
                    </Button>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='rounded-full h-10 w-10'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-linkedin'
                      >
                        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                        <rect width='4' height='12' x='2' y='9' />
                        <circle cx='4' cy='4' r='2' />
                      </svg>
                      <span className='sr-only'>Compartir en LinkedIn</span>
                    </Button>
                    <Button
                      variant='ghost'
                      size='icon'
                      className='rounded-full h-10 w-10'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-mail'
                      >
                        <rect width='20' height='16' x='2' y='4' rx='2' />
                        <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                      </svg>
                      <span className='sr-only'>Compartir por Email</span>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex w-full max-w-sm flex-col gap-2'
              >
                <div className='flex gap-2'>
                  <Input
                    type='email'
                    placeholder='tu@email.com'
                    required
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    className='max-w-lg flex-1'
                  />
                  <Button
                    type='submit'
                    disabled={loading}
                    className='bg-violet-600 hover:bg-violet-700'
                  >
                    {loading ? "Enviando..." : "Unirme"}
                  </Button>
                </div>
                <p className='text-xs text-muted-foreground'>
                  No compartiremos tu correo con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
