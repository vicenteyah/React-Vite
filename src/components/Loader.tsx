import React from 'react'
import { PreloaerContainer } from '../styles/components/PreloaderContainer'
import '../styles/css/preloader.css'

const Loader:React.FC = () => {
    return (
        <PreloaerContainer>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="250.149"
                height="150.377"
                viewBox="0 0 87.149 76.377"
            >
                <defs>
                    <linearGradient
                        id="linear-gradient"
                        x1="0.761"
                        y1="0.551"
                        x2="0"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0" stop-color="#3de864" />
                        <stop offset="0.324" stop-color="#40e86d" />
                        <stop offset="0.594" stop-color="#60e4d2" />
                        <stop offset="0.636" stop-color="#62e6d5" />
                        <stop offset="1" stop-color="#16732b" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-2"
                        x1="1"
                        x2="0.126"
                        y2="0.861"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0" stop-color="#2be556" />
                        <stop offset="0" stop-color="#5cef7e" />
                        <stop offset="0.533" stop-color="#64f2e3" />
                        <stop offset="0.552" stop-color="#64f2e3" />
                        <stop offset="1" stop-color="#4be8e3" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-3"
                        x1="-0.061"
                        y1="-0.089"
                        x2="0.821"
                        y2="0.695"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0" stop-color="#2be556" />
                        <stop offset="0.063" stop-color="#2edd63" />
                        <stop offset="0.866" stop-color="#47dff6" />
                        <stop offset="0.887" stop-color="#3eb1aa" />
                        <stop offset="1" stop-color="#276d37" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-4"
                        x1="-0.033"
                        y1="0.411"
                        x2="0.869"
                        y2="1.139"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0" stop-color="#3de864" />
                        <stop offset="0.482" stop-color="#3de864" />
                        <stop offset="0.69" stop-color="#37f3d9" />
                        <stop offset="1" stop-color="#1f745a" />
                    </linearGradient>
                </defs>
                <g
                    id="Company_logo"
                    data-name="Company logo"
                    transform="translate(0)"
                >
                    <g
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        transform="translate(9.382 4.304)"
                        fill="none"
                        stroke="rgba(163,73,230,0.81)"
                        stroke-width="5"
                    >
                        <ellipse
                            cx="33.588"
                            cy="36.036"
                            rx="33.588"
                            ry="36.036"
                            stroke="none"
                        />
                        <ellipse
                            cx="33.588"
                            cy="36.036"
                            rx="31.088"
                            ry="33.536"
                            fill="none"
                        />
                    </g>
                    <path
                        className="triangle-top-left"
                        id="Path_1"
                        data-name="Path 1"
                        d="M-24.069-15.269l43.115,40.34H-10.632Z"
                        transform="translate(24.069 15.269)"
                        fill="url(#linear-gradient)"
                    />
                    <path
                        className="triangle-bottom-left"
                        id="Path_3"
                        data-name="Path 3"
                        d="M30.685-2.3V32.7L.981-2.3Z"
                        transform="translate(12.43 42.644)"
                        fill="url(#linear-gradient-2)"
                    />
                    <path
                        className="triangle-bottom-right"
                        id="Path_4"
                        data-name="Path 4"
                        d="M53-2.3V32.869L82.058-2.3Z"
                        transform="translate(-10.182 42.644)"
                        fill="url(#linear-gradient-3)"
                    />
                    <path
                        className="triangle-top-right"
                        id="Path_2"
                        data-name="Path 2"
                        d="M44.332-7.976l-15.037,40H0Z"
                        transform="translate(42.818 8.318)"
                        fill="url(#linear-gradient-4)"
                    />
                </g>
            </svg>
        </PreloaerContainer>
    )
}

export default Loader