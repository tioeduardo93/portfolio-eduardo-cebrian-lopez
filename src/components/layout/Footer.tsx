const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pt-5 pb-7">
      <div className="site-container flex flex-wrap items-center justify-between gap-3 text-[13px] text-di">
        <p>© {CURRENT_YEAR} Eduardo Cebrián López</p>
        <a
          href="#inicio"
          className="inline-flex min-h-11 items-center font-mono text-mu transition-colors duration-200 hover:text-accent"
        >
          Volver arriba <span aria-hidden="true">&nbsp;↑</span>
        </a>
      </div>
    </footer>
  );
}
