export function Footer() {
  return (
    <footer className='flex justify-center w-full border-t md:py-0'>
      <p className='text-center text-sm leading-loose text-muted-foreground md:text-left py-6'>
        © {new Date().getFullYear()} cumplo.io. Todos los derechos reservados.
      </p>
    </footer>
  );
}
