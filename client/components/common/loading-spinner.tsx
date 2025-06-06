interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const spinnerSizes = {
  sm: "h-4 w-4",
  md: "h-8 w-9",
  lg: "h-12 w-12",
};

export function LoadingSpinner({ size = "md", className = "", ...props }: LoadingSpinnerProps) {
  const sizeClass = spinnerSizes[size] || spinnerSizes.md;

  return (
    <div
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-purple-500 ${sizeClass} ${className}`}
      {...props}
    />
  );
}
// check if the code is complete