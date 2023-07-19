"use client";

const ErrorWrapper = ({ error }: { error: Error }) => {
  return <div>Oops! {error.message}</div>;
};

export default ErrorWrapper;
