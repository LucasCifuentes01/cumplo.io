import { Heart, Rocket, Shield, Zap } from "lucide-react";

export default function Benefits() {
  return (
    <section
      id='beneficios'
      className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-900'
    >
      <div className='px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-900 dark:bg-violet-900 dark:text-violet-100'>
              Por qué elegir cumplo.io
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-violet-900 dark:text-violet-100'>
              Beneficios clave
            </h2>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Descubre cómo cumplo.io te ayuda a alcanzar tus metas
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col items-center space-y-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-900 dark:bg-violet-900 dark:text-violet-100'>
              <Rocket className='h-6 w-6' />
            </div>
            <h3 className='text-2xl font-bold text-violet-900 dark:text-violet-100'>
              Compromiso real
            </h3>
            <p className='text-center text-muted-foreground'>
              La garantía económica te brinda la motivación extra que necesitas
              para cumplir tus objetivos y no abandonarlos a mitad de camino.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-900 dark:bg-violet-900 dark:text-violet-100'>
              <Zap className='h-6 w-6' />
            </div>
            <h3 className='text-2xl font-bold text-violet-900 dark:text-violet-100'>
              Motivación constante
            </h3>
            <p className='text-center text-muted-foreground'>
              El apoyo mutuo y la responsabilidad compartida te mantienen
              enfocado en tus metas, incluso cuando la motivación inicial
              disminuye.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-900 dark:bg-violet-900 dark:text-violet-100'>
              <Shield className='h-6 w-6' />
            </div>
            <h3 className='text-2xl font-bold text-violet-900 dark:text-violet-100'>
              Seguridad garantizada
            </h3>
            <p className='text-center text-muted-foreground'>
              Tu dinero está seguro en todo momento. Solo se libera cuando el
              mediador confirma el cumplimiento de la meta acordada.
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <div className='flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-900 dark:bg-violet-900 dark:text-violet-100'>
              <Heart className='h-6 w-6' />
            </div>
            <h3 className='text-2xl font-bold text-violet-900 dark:text-violet-100'>
              Confianza y transparencia
            </h3>
            <p className='text-center text-muted-foreground'>
              El sistema de mediación imparcial asegura que todas las partes
              cumplan con lo acordado, creando un entorno de confianza mutua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
