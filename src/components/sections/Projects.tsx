import { PROJECTS } from '../../data/projects';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <Section id="proyectos">
      <div className="site-container">
        <SectionHeader sectionId="proyectos" />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
