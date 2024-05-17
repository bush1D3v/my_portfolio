import { type ReactElement } from "react";

interface LanguageListsProps {
  summaryKeys: [ ReactElement, string ][];
}

export default function LanguageLists({
  summaryKeys
}: LanguageListsProps): ReactElement {
  return (
    <ul className="flex gap-4 items-center flex-wrap">
      {summaryKeys.map((key, index) => (
        <li key={index} className="flex text-White px-4 py-2 rounded-full bg-Black2 duration-100
          ease-in gap-4 items-center">
          {key[ 1 ]}
          <span className="text-3xl">{key[ 0 ]}</span>
        </li>
      ))}
    </ul>
  );
}
