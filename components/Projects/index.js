import Section from '../Section'

import { PROJECTS } from '../../utils/constants'

import './styles.scss'

export default function Projects() {
  return (
    <Section style={{ paddingTop: 0 }}>
      <article className="projects">
        {PROJECTS.map(project => {
          return (
            <div key={project.key} className="project">
              <img alt={project.name} src={`/img/${project.key}.png`} />
            </div>
          )
        })}
      </article>
    </Section>
  )
}
