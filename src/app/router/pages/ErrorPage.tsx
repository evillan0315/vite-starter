import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        {error.status} {error.statusText}
      </h1>
    );
  }

  return <h1>Something went wrong.</h1>;
};
