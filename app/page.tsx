type Company = {
  name: string;
  href: string;
};

const companies: Record<string, Company> = {
  rebolt: { name: "Rebolt", href: "https://rebolt.ai" },
  yc: { name: "Y Combinator", href: "https://www.ycombinator.com/companies/rebolt" },
  stackai: { name: "Stack AI", href: "https://www.stack-ai.com" },
  canonical: { name: "Ubuntu", href: "https://ubuntu.com" },
};

const links: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanchezfdezjavier/" },
  { label: "X", href: "https://x.com/jvrsanch" },
  { label: "GitHub", href: "https://github.com/sanchezfdezjavier" },
  { label: "Rebolt", href: "https://rebolt.ai" },
];

function CompanyMention({ company }: { company: Company }) {
  return (
    <a
      href={company.href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
    >
      {company.name}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center font-sans dark:bg-black">
      <header className="flex w-full items-center justify-between p-8">
        <span className="text-[15px] tracking-tighter text-zinc-900 dark:text-zinc-50">
          Javier Sánchez
        </span>
        <nav className="flex items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="flex w-full max-w-6xl flex-1 flex-col px-6 sm:px-8">
        <main className="flex flex-1 flex-col items-center justify-center py-24">
          <h1 className="w-full max-w-xl text-4xl leading-tight tracking-tighter text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Javier Sánchez
            <br />
            <span className="block text-3xl leading-tight mt-2 tracking-tight text-zinc-400 dark:text-zinc-500">
            <span className="block">- Founder at Rebolt (YC W25)</span>
              <span className="block">- Founding Engineer at StackAI (acquired)</span>
            </span>
          </h1>

          <section className="mt-16 w-full max-w-xl">
            <div className="space-y-5 text-[16px] leading-7 text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m Javi, born in A Coruña, Spain, and living in San
                Francisco, CA.
              </p>
              <p>
                Since I was a kid, I&apos;ve been curious and excited about
                solving problems with technology, from developing self-driving
                car software to building FPV racing drones in college.
              </p>
              <p>
                I joined <CompanyMention company={companies.canonical} /> as a
                software engineer, then moved to Silicon Valley as Founding Eng.
                at <CompanyMention company={companies.stackai} /> (acquired by{" "}
                <a
                  href="https://asana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
                >
                  Asana
                </a>)
                , and later accepted into{" "}
                <CompanyMention company={companies.yc} /> for founding{" "}
                <CompanyMention company={companies.rebolt} />, with the mission
                of giving companies an edge with technology.
              </p>
              <p>
                Reach out to me on{" "}
                <a
                  href="https://x.com/jvrsanch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
                >
                  X
                </a>{" "}
                or{" "}
                <a
                  href="https://www.linkedin.com/in/sanchezfdezjavier/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
