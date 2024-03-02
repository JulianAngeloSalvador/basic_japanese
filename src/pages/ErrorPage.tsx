import { useRouteError } from "react-router-dom";
import { ErrorResponse } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <section className="flex items-center justify-center min-h-dvh">
      <div className="w-fluid-400 flex flex-col sm:flex-row sm:items-center sm:gap-6">
        <h4 className="text-subheadline font-lexend font-800">
          {error.status}
        </h4>
        <div className="flex flex-col text-balance">
          <p className="text-main-fs mt-4 font-600">{error.statusText}</p>
          <p className="text-sm font-600">{error.data}</p>
        </div>
      </div>
    </section>
  );
}
