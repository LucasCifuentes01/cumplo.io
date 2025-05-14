"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`/api/get-email?email=${email}`);
      const { exists } = await response.json();
      if (!exists) {
        await fetch("/api/save-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
      }

      router.push("/landing/congrats");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='waitlist' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-violet-900 dark:text-violet-100'>
              Sé de los primeros en probar cumpli.me
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Únete a nuestra lista de espera y obtén acceso anticipado cuando
              lancemos la plataforma
            </p>
          </div>
          <div className='w-full max-w-sm space-y-2'>
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
          </div>
        </div>
      </div>
    </section>
  );
}
