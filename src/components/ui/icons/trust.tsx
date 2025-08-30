import * as React from "react";
import type { SVGProps } from "react";
const TrustWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 444 501"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.710022 72.41L222.16 0.109985V500.63C63.98 433.89 0.710022 305.98 0.710022 233.69V72.41Z"
      fill="#0500FF"
    />
    <path
      d="M443.62 72.41L222.17 0.109985V500.63C380.35 433.89 443.62 305.98 443.62 233.69V72.41Z"
      fill="url(#trust__paint0_linear_3_10)"
    />
    <defs>
      <linearGradient
        id="trust__paint0_linear_3_10"
        x1={385.26}
        y1={-34.78}
        x2={216.61}
        y2={493.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#0000FF" />
        <stop offset={0.08} stopColor="#0094FF" />
        <stop offset={0.16} stopColor="#48FF91" />
        <stop offset={0.42} stopColor="#0094FF" />
        <stop offset={0.68} stopColor="#0038FF" />
        <stop offset={0.9} stopColor="#0500FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default TrustWallet;
