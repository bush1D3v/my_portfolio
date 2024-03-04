import { type ReactElement } from "react";

interface FormationTechnologiesSummaryProps {
  summaryKeys: string[];
}

export default function FormationTechnologiesSummary({
  summaryKeys
}: FormationTechnologiesSummaryProps): ReactElement {
  return (
    <details className="mb-8">
      <summary className="text-White self-center text-center w-fit cursor-pointer duration-75 ease-in m-auto">
        Grade Curricular
      </summary>
      <ul className="flex flex-wrap max-w-[400px]">
        {summaryKeys.map((value, index) => (
          <li
            key={index}
            className="font-semibold"
          >
            {index === summaryKeys.length - 1 ? (
              value
            ) : (
              <>
                {value} -&nbsp;
              </>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}
