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
  { label: "X", href: "https://x.com/jvrsanch" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanchezfdezjavier/" },
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
    <div className="flex min-h-screen flex-col items-center font-sans dark:bg-black">
      <header className="flex w-full items-center justify-between p-8">
        <span className="stagger-in inline-block text-[15px] tracking-tighter text-zinc-900 dark:text-zinc-50">
          Javi Sánchez
        </span>
        <nav className="flex items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="stagger-in inline-block transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              style={{ animationDelay: `${60 + index * 55}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="flex w-full max-w-6xl flex-1 flex-col px-6 sm:px-8">
        <main className="flex flex-1 -translate-y-8 flex-col items-center justify-center py-16 sm:-translate-y-12">
          <h1 className="w-full max-w-lg text-4xl leading-tight tracking-tighter text-zinc-900 sm:text-5xl dark:text-zinc-50">
            <span className="stagger-in block" style={{ animationDelay: "260ms" }}>
              Javi Sánchez
            </span>
            <span className="block text-xl space-y-01 leading-8 mt-1 tracking-tight text-zinc-400 dark:text-zinc-500">
              <span className="stagger-in block" style={{ animationDelay: "330ms" }}>
                Founder, Engineer
              </span>
            </span>
          </h1>

          <section className="mt-16 w-full max-w-lg">
            <div className="space-y-5 text-justify text-[16px] leading-7 tracking-tight text-zinc-600 hyphens-auto dark:text-zinc-400">
              <p className="stagger-in" style={{ animationDelay: "400ms" }}>
                I&apos;m a Telecom engineer by training, born in A Coruña, Spain,
                living in San Francisco, CA.
              </p>
              <p className="stagger-in" style={{ animationDelay: "470ms" }}>
                Since I was a kid, I&apos;ve been curious and excited about
                solving problems with technology, from developing self-driving
                car software to building FPV racing drones in college.
              </p>
              <p className="stagger-in" style={{ animationDelay: "540ms" }}>
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
                </a>), and later accepted into{" "}
                <CompanyMention company={companies.yc} /> for founding{" "}
                <CompanyMention company={companies.rebolt} />, with the mission
                of giving companies an edge with technology.
              </p>
              <p className="stagger-in" style={{ animationDelay: "610ms" }}>
                Reach me on X at{" "}
                <a
                  href="https://x.com/jvrsanch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-100"
                >
                  @jvrsanch
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
