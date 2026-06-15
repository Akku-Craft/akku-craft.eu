import PersonImage from "@/components/person-image";
import SectionHeading from "@/components/section-heading";

type TeamMember = {
  name: string;
  key: string;
  github?: string;
};

type TeamSectionProps = {
  dict: {
    title: string;
    timon: string;
    fabian: string;
    henry: string;
    tammo: string;
  };
};

const members: TeamMember[] = [
  {
    name: "Timon",
    key: "timon",
    github: "https://github.com/0day-sudo",
  },
  {
    name: "Fabian",
    key: "fabian",
    github: "https://github.com/keineahnungwasichhierreinschreibensoll",
  },
  {
    name: "Henry",
    key: "henry",
    github: "https://github.com/henrymmey",
  },
  {
    name: "Tammo",
    key: "tammo",
  },
];

export default function TeamSection({ dict }: TeamSectionProps) {
  return (
    <section
      id="team"
      className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow"
    >
      <SectionHeading index="04" title={dict.title} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <div
            key={member.key}
            className="flex flex-col items-center gap-3 rounded-base border-2 border-border bg-main p-5 text-center shadow-shadow"
          >
            <PersonImage name={member.key} alt={member.name} />
            <div>
              <p className="text-lg font-heading">{member.name}</p>
              <p className="text-xs text-main-foreground/70">
                {dict[member.key as keyof typeof dict]}
              </p>
            </div>
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-base border-2 border-border bg-secondary-background px-3 py-1 text-xs font-heading shadow-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
