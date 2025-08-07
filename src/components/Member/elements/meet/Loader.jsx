export const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
    <svg
      width={64}
      height={64}
      viewBox="0 0 50 50"
      className="animate-spin text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray="70 30"
        fill="none"
      />
    </svg>
  </div>
);
