import { type ReactElement } from "react";

export default function NotFound(): ReactElement {
  return (
    <div className="min-h-[90dvh] flex items-center justify-center">
      <h1>Error 404: Not Found</h1>
    </div>
  );
}
