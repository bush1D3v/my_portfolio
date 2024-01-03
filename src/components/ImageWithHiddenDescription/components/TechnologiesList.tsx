import { type ReactElement } from "react";

interface TechnologiesListProps {
  technologies: string[] | null;
}

export default function TechnologiesList({
  technologies
}: TechnologiesListProps): ReactElement {
  return (
    <>
      {technologies === null ? (
        <></>
      ) : (
        <>
          <br />
          <ul className="flex flex-wrap gap-2 animate-fade-right animate-ease-in-out">
            <h4>Tecnologias Utilizadas:</h4>
            {technologies.map((value, index) => (
              <li
                key={index}
                className="text-2xl md:text-3xl font-medium text-White animate-fade-right animate-ease-in-out"
              >
                {index === technologies.length - 1 ? (
                  value
                ) : (
                  <>
                    {value},&nbsp;
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
