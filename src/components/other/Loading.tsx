export function Loading({
  mainColor,
  subColor,
}: {
  mainColor?: string;
  subColor?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        className={mainColor}
        cx="50"
        cy="50"
        r="32"
        strokeWidth="8"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
      <circle
        className={subColor}
        cx="50"
        cy="50"
        r="23"
        strokeWidth="8"
        stroke="rgba(255, 255, 255, 0.75)"
        strokeDasharray="36.12831551628262 36.12831551628262"
        strokeDashoffset="36.12831551628262"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
}
