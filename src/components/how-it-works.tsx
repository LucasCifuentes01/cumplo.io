import { Award, DollarSign, Target, Users } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id='como-funciona' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-900'>
              Simple y efectivo
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-violet-900'>
              ¿Cómo funciona?
            </h2>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Comprometerse con tus metas nunca fue tan fácil y efectivo
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4'>
          <div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-900'>
              <Users className='h-8 w-8' />
            </div>
            <h3 className='text-xl font-bold'>1. Acuerda</h3>
            <p className='text-center text-muted-foreground'>
              Encuentra un amigo o colega y acuerden un objetivo común o
              individual
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-900'>
              <Target className='h-8 w-8' />
            </div>
            <h3 className='text-xl font-bold'>2. Define</h3>
            <p className='text-center text-muted-foreground'>
              Establece metas claras y elige un mediador imparcial
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-900'>
              <DollarSign className='h-8 w-8' />
            </div>
            <h3 className='text-xl font-bold'>3. Deposita</h3>
            <p className='text-center text-muted-foreground'>
              Ambos depositan una garantía económica como motivación
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-900'>
              <Award className='h-8 w-8' />
            </div>
            <h3 className='text-xl font-bold'>4. Cumple</h3>
            <p className='text-center text-muted-foreground'>
              Cumple tu meta y recupera tu dinero, o piérdelo si no lo logras
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
