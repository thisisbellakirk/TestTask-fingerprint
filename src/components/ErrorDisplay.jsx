import React, { useState } from "react";
const CodeBlock = () => {
  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
      <pre className="text-left text-sm">
        <code>{`import SpotterAI from 'spotter-ai';

// Initialize the Spotter client
const spotter = new SpotterAI({
  apiKey: 'your_api_key',
  mode: 'production'
});

// Identify the current visitor
async function identifyVisitor() {
  const visitorId = await spotter.identify();
  
  // Take action based on visitor type
  if (visitorId.risk > 0.8) {
    // Potential fraud detected
    showCaptcha();
  } else if (visitorId.returning) {
    // Welcome back a returning customer
    personalizeExperience(visitorId);
  }
  
  return visitorId;
}`}</code>
      </pre>
    </div>
  );
};
const Switch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full ${
        enabled ? "bg-orange-500" : "bg-gray-200"
      }`}
    >
      <span className="sr-only">Toggle developer mode</span>
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
};

const ErrorDisplay = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-28 bg-pink-50 rounded-lg border border-rose-500 border-solid shadow-[0px_2px_4px_rgba(209,209,209,0.15)] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 max-w-full w-[305px] max-md:mb-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a115a514abf76b1cc51afd0bbcfe7a5cab90117e?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
          alt="Error icon"
          className="object-contain aspect-[1.16] w-[29px]"
        />
        <p className="mt-5 text-base font-medium leading-none text-red-600">
          An error has occurred_
        </p>
        <p className="self-stretch mt-3 text-sm leading-relaxed text-zinc-700">
          Please refresh the page or try incognito mode.
        </p>
      </div>
    </div>
  );
};

const DemoSection = () => {
  return (
    <section className="max-w-full w-[1248px]">
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white mb-12 md:mb-24">
        <div className="flex items-center justify-end bg-gray-50 px-4 py-2 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <span className="text-xs md:text-sm text-gray-500">
              I'M A DEVELOPER
            </span>
            <Switch />
          </div>
        </div>
        <div className="p-3 md:p-6">
          <CodeBlock />
        </div>
      </div>

      <div className="mt-10">
        <p className="text-[#6e6f6c] font-light text-lg uppercase text-center">
          Trusted by 6000+ companies of all sizes
        </p>
        <div className="flex items-center justify-between mt-9 px-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 128 26"
            role="img"
            aria-labelledby="titleId"
            className="w-15 h-15"
          >
            <title id="titleId">Dropbox</title>
            <g clip-path="url(#clip0_5572_33296)">
              <path
                fill="#0061FF"
                d="M15.2 5 7.8 9.5l7.4 4.7L7.8 19 .4 14.3l7.4-4.7L.4 4.9 7.8.2 15.2 5ZM7.8 20.4l7.3-4.7 7.4 4.7-7.4 4.7-7.3-4.7Zm7.4-6.2 7.3-4.7-7.3-4.7L22.5.2 29.9 5l-7.4 4.7 7.4 4.7-7.4 4.7-7.3-4.7Z"
              ></path>
              <path
                fill="#000"
                d="M35.6 5h6c3.8 0 7 2.1 7 7.1v1c0 5.1-3 7.4-6.9 7.4h-6V5ZM39 7.6v10h2.5c2.2 0 3.6-1.4 3.6-4.6v-.8c0-3.1-1.5-4.6-3.7-4.6H39Zm11.3.2H53l.4 3c.5-2 1.8-3.1 4.1-3.1h.9V11H57c-2.7 0-3.4 1-3.4 3.6v5.8h-3.3V8Zm8.7 6.6V14c0-4.2 2.7-6.5 6.4-6.5 3.8 0 6.4 2.3 6.4 6.5v.4c0 4.1-2.6 6.4-6.4 6.4-4 0-6.4-2.3-6.4-6.4Zm9.4 0V14c0-2.3-1.1-3.7-3-3.7s-3 1.3-3 3.7v.3c0 2.3 1.1 3.6 3 3.6s3-1.3 3-3.6Zm5.1-6.6h2.8l.3 2.4c.6-1.6 2-2.7 4.1-2.7 3.3 0 5.4 2.3 5.4 6.6v.3c0 4.2-2.4 6.4-5.4 6.4-2 0-3.3-1-4-2.4V25h-3.2V8Zm9.2 6.5v-.2c0-2.6-1.3-3.8-3-3.8-1.8 0-3 1.4-3 3.8v.2c0 2.2 1.1 3.6 3 3.6s3-1.2 3-3.6Zm8.2 3.8-.2 2.3h-2.9V3.7H91V10c.8-1.6 2.2-2.5 4.2-2.5 3 0 5.2 2.1 5.2 6.3v.4c0 4.2-2.1 6.6-5.3 6.6-2.1 0-3.5-1-4.2-2.7Zm6.1-4V14c0-2.3-1.2-3.6-3-3.6s-3 1.4-3 3.6v.3c0 2.3 1.2 3.7 3 3.7 2 0 3-1.2 3-3.7Zm4.8.3V14c0-4.2 2.7-6.5 6.4-6.5 3.8 0 6.4 2.3 6.4 6.5v.4c0 4.1-2.6 6.4-6.4 6.4-4 0-6.4-2.3-6.4-6.4Zm9.5 0V14c0-2.3-1.2-3.7-3.1-3.7-1.8 0-3 1.3-3 3.7v.3c0 2.3 1.1 3.6 3 3.6s3-1.3 3-3.6Zm7.6-.5-4.4-6.1h3.8l2.5 3.8 2.6-3.8h3.8l-4.5 6 4.7 6.6h-3.7l-2.9-4.2-2.8 4.2h-4l5-6.5Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5572_33296">
                <path fill="#fff" d="M.4.2h127v25H.4z"></path>
              </clipPath>
            </defs>
          </svg>
          <svg
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            className="w-15 h-15"
          >
            <rect
              x="0.359863"
              y="0.464417"
              width="18.4307"
              height="16.6174"
              fill="url(#pattern0_3078_5990)"
            ></rect>
            <rect
              x="0.359863"
              y="0.464417"
              width="18.4307"
              height="16.6174"
              fill="url(#pattern1_3078_5990)"
            ></rect>
            <rect
              x="0.359863"
              y="0.464417"
              width="18.4307"
              height="16.6174"
              fill="url(#pattern2_3078_5990)"
            ></rect>
            <rect
              x="0.478027"
              y="16.7115"
              width="26.1689"
              height="10.3379"
              fill="url(#pattern3_3078_5990)"
            ></rect>
            <path
              d="M24.5912 6.04635C24.7158 5.8299 24.7816 5.58461 24.782 5.33486C24.7889 4.97126 24.6511 4.61981 24.3989 4.35779C24.1467 4.09577 23.8008 3.94464 23.4372 3.93762C23.1632 3.94058 22.8965 4.02707 22.6729 4.18556C22.4493 4.34406 22.2794 4.56699 22.1859 4.8246L19.2627 12.3306C19.2183 12.4293 19.1952 12.5362 19.1949 12.6444C19.1914 12.8401 19.2656 13.0292 19.4013 13.1703C19.537 13.3114 19.7231 13.3929 19.9188 13.3969C20.0455 13.3958 20.1696 13.3612 20.2785 13.2965C20.3874 13.2318 20.4772 13.1394 20.5388 13.0287L24.5912 6.04635Z"
              fill="url(#paint0_linear_3078_5990)"
            ></path>
            <path
              d="M22.1281 5.63835C22.0686 5.36949 22.0902 5.08904 22.1901 4.83244C22.2757 4.59867 22.4234 4.39265 22.6173 4.23653C22.8112 4.08042 23.044 3.98012 23.2907 3.94641C23.6133 3.91366 23.9369 3.99833 24.2022 4.18491C24.4674 4.37148 24.6565 4.64744 24.7347 4.96215L27.5768 14.3546C27.7024 14.7364 27.7156 15.1463 27.615 15.5354C27.5195 15.9205 27.3119 16.2686 27.0183 16.5356C26.7247 16.8025 26.3584 16.9762 25.966 17.0347C24.8835 17.1739 23.9488 16.3957 23.78 15.3484L22.1281 5.63835Z"
              fill="url(#paint1_linear_3078_5990)"
            ></path>
            <path
              d="M32.7213 6.44884C32.9819 5.97335 33.097 5.43174 33.0523 4.89137C32.9483 3.6 31.9392 2.55088 30.6946 2.44215C29.5177 2.3401 28.4896 3.05732 28.0775 4.10453L23.923 14.177C23.772 14.528 23.7193 14.9134 23.7704 15.292C23.8935 16.2171 24.6288 16.9524 25.5244 17.0411C25.9166 17.0777 26.3108 16.9946 26.6549 16.8027C26.999 16.6108 27.2768 16.3192 27.4519 15.9663L32.7213 6.44884Z"
              fill="url(#paint2_linear_3078_5990)"
            ></path>
            <defs>
              <pattern
                id="pattern0_3078_5990"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_3078_5990"
                  transform="matrix(0.00741959 0 0 0.00822919 -0.482687 0)"
                ></use>
              </pattern>
              <pattern
                id="pattern1_3078_5990"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_3078_5990"
                  transform="matrix(0.00741959 0 0 0.00822919 -0.482687 0)"
                ></use>
              </pattern>
              <pattern
                id="pattern2_3078_5990"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_3078_5990"
                  transform="matrix(0.00741959 0 0 0.00822919 -0.482687 0)"
                ></use>
              </pattern>
              <pattern
                id="pattern3_3078_5990"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_3078_5990"
                  transform="matrix(0.00522558 0 0 0.0132278 -0.344507 -1.56997)"
                ></use>
              </pattern>
              <linearGradient
                id="paint0_linear_3078_5990"
                x1="19.3666"
                y1="13.1985"
                x2="24.0781"
                y2="4.10357"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1" stop-color="#0096FF"></stop>
                <stop offset="0.18" stop-color="#1680FF"></stop>
                <stop offset="0.39" stop-color="#4D49FF"></stop>
                <stop offset="0.57" stop-color="#7521FF"></stop>
                <stop offset="0.71" stop-color="#8D09FF"></stop>
                <stop offset="0.8" stop-color="#9600FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_3078_5990"
                x1="22.6803"
                y1="4.09996"
                x2="26.2626"
                y2="16.9717"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1" stop-color="#9600FF"></stop>
                <stop offset="0.27" stop-color="#B600DF"></stop>
                <stop offset="0.5" stop-color="#DE00B7"></stop>
                <stop offset="0.69" stop-color="#F6009F"></stop>
                <stop offset="0.8" stop-color="#FF0096"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_3078_5990"
                x1="24.4972"
                y1="16.6587"
                x2="31.6999"
                y2="2.75307"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1" stop-color="#FF0096"></stop>
                <stop offset="0.19" stop-color="#FF1680"></stop>
                <stop offset="0.43" stop-color="#FF4D49"></stop>
                <stop offset="0.63" stop-color="#FF7521"></stop>
                <stop offset="0.8" stop-color="#FF8D09"></stop>
                <stop offset="0.9" stop-color="#FF9600"></stop>
              </linearGradient>
              <image
                id="image0_3078_5990"
                width="400"
                height="200"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAACXBIWXMAAC4jAAAuIwF4pT92AAAgAElEQVR4nO2dB2Abx5X33+yislMsAKneG8WmZhVLliX32HFLnHyJ79IuuS89jpNLzpe75LuL0+z4Ls5dLsVO4u64yXGTFfeuTklUtSRThZ1iryg73xsUarlcYBcgQIDy+yUwFruzs7OgMP998+a9sXDOgSAIgiBixZLqBhAEQRATExIQgiAIIi5IQAiCIIi4IAEhCIIg4oIEhCAIgogLEhCCIAgiLkhACIIgiLggASEIgiDiggSEIAiCiAsSEIIgCCIuSEAIgiCIuCABIQiCIOKCBIQgCIKICxIQgiAIIi5IQAiCIIi4IAEhCCIpMMass9myjJwMW9YVc5szPV5HZvncswUwZJM7wA8K5/2nT+e3v1aX38H7+/r38D19nHNvqttNmIcEhCCIhIGiIc1kVTk3zvfNvf8jM8rnlJyqyi/om+eaNDTNYYE8q8WfAcF+x9MzIPf2D3V03wrQWncme99ze+bu+E5Z2f6/HrSfOcp3d6CY+FJ9P0R0SEAIgkgIKB6O7ywqr7p81ZkrFk7vvTQ/y7vAbkfBYNzC8LCmuDMv25ebm+WfjMcXuAsGV1UtaP9ER6/16A1nsnY8v2vuFqzvFRQRT0puhjAFCQhBEGMCO3p266JF0x643n3txZXv31ScN7hYsvBs4OJI9CWzQ8cZiojV4fAVuh2+Ajy/avqU3osLiyc/9E/zyx/7+dH9dSgk/nG5GSImSEAIghgT3128eM61a1pvQwviSrQ4ClAUpMABA/HQQ1gqsoU73YUDZV+8pPnWPVM8lbasub9CJdpOQ1rpBwkIQRBxIbHpzjsv917wzZs6f+7OH6xiMpcTVbcQErvDN2nFkrbrZ0ztnT/fPfNnKCLPoIj0JeoaxNghASEIImawM7fddfnkSz++uvNfUTwqQQIp4dcIWiPWksKByo0XNN7+Z2mmGBN7gvwi6QMJCEEQMSHE4wfL5qy9oqrxm668wXIGTAIFQAxcGfk84qWkcHDmJSua/um2hjmdEpNeUrhC033TABIQgiBME3CYl5XN+dSmE1+ZUzKwSmZsuA9hiphoxVBIeFKExF04sOTmSxu/NTS0qAk/7kn4BYiYIQEhCMI0s9mynCsuOHnT9GLPBhQPu16ZsJAIEikmWKM0p7R/ZdWCjo9NkZYfOaPs6E9IxUTckIAQRJohnvLxTTikLWVsdYYNLLIHfP4DvH+IQ40Y//dxJBVt++TSjiULp/V8yi6xvFRcX7bwnA0VHVd/ri7zDfyaXqbI9dRCAkIQaYKI4p4Es7NXZK2dmQ0bl1T0rawq4lXTw8c5tLccs+3fd9T69o48tviDLjjYOZ7xEdg++ztfLL6pJMc/O7DDr5p0Jes3Q22NgKwkpB3FeYOzr1ja9dHHd1fvw48NCamUiAsSEIJIA7BzllflfGXeYs+6a2f3XnhdpuxeYuHMMbKUG6p8C5W5nvVHl7Mrnn0vY+vjeF4NisjQeLTxX5bOq1o458SVo4PK4ZyYRBCSYBkpMKQlGMuwlogTmTGle9P1Vd1/xftvpiDD1EECQhApRmKSvNB9y6Krm77wg2x5wQYZWCFE6BJlhUm54F6QJV0+tahvekVGZu7d2IluTbaIYBstL32h6Lpci1wKakNC0lgVBkIStEgCW2PyjxTnDZVcXNW16se74S382BNXJcSYIQEhiBQz1/W1GZ9o+9a/5sHka8DPbGbOkf0sMw8WbtjU96V8T5FTdKCvJbON316wZM7kouOXYq8fdJwzg+EoISTRrBEIikm8U38lGZwLp/dccEtZmQtIQFIGCQhBpBCJVWV+i93+hXxp8kewKzUlHudglizZXbWx5zO3VUvVNbuV3Z3JaON0abrzJ9d5L52XD1OZX2IBX0ag58d3RRM/qLZITAxrxTtjS6RLcTp8c5iiFOLHYzHcDpFASEAIIkWIYaHPOh65bNrg8pstfq2/wxxoicjFftemi9jtN0ts+h8UfnIg0e382MKsqdXz6zZit50T2OGXYFhEBGprRAhKjMNaYYbFxKSzPdvhL6le2CEmGbxn6gQi4ZCAEESKyIXFOblDOZskuaAgks/DLHly2f9Z7bzuVdysTUjjQjDGLP+yfM7SEsiqZNBnHT7gV1ke6gxYaqskTiEZWXdkMZFksLnzfFOiV0YkExIQgkgBYsru2uxvVBT3VK6J1/pQk+tzzHZCbhkkWEAWsWVFV1Wd3JST7SmJWCjc4autEkEkZ7uJ6b/quqPN3GIM8sQkBIUrNBMrBZCAEEQKKIR5WfO9q1ZNgsJpiej5MiAvc4ZncZkYFsPONCFpz4XI/fPS2XMWFrDlDMAKvlB3YYlQvVpIBOohLr2hrcA5Zv0kurm2uENihcCWiguRgKQAEhCCSAFuR9aUWYPlG/0g58RzvgV8+D9L4D2Ec9bQkmVFbGkRbjcmqJnOTZXdG3My/AtG7DUjJHpDT5GGtgLnmHe4hy2SwD5K755SSEAIYpwRfoVNOT9YlDlYVAYik61JVGIx6jNuswwomlKeddUCrL8lEcF1X5myYW518YGbAtaH3rTcaEISaVhLoNUP7fCWKWd7YNYWH+DsrKLsoHQmKYIEhCDGmTwoz16c8+WlUl9BjpmBF61wRDnmmuFdWMmgcjtuj/nJ/PpLay/NAOtk8CtBIYjUuZsREoF6aCvazC2TPhLFD976s3KLiVshkgQJCEGMM4uzN0x2n4GLmQzD2Wz9MhdTcgPbeoKhHq6KJCiTwJE7a3BJdSmzFMAYBWSJtCTr5a9mfNpq78sONlA6JyKCWIVEi3YKcDQfCV4rECOijEyh4vXJnrOD0GTmfojkQAJCEOPMwqHVa7Jk18LwZyEIFp3+WDNEpVuXZr81A4oWzXBeMJkxdjrejL1iVtN/XlG6pijft2jEAfWwVDQrIZKQRLJGBAbTf1n4EqprdfRaWtvanK0mbolIEiQgBDGOzJfm2z8lv3I9cMgEkWAXAn388KN1DMNVo7CBF/LBOW2hf83Ct+HXu3FXXPmxKrJXF6x1n/4MA58MSkgoJJVIaGdbRbJKYhnaMjP9V3UtLvuU7n559+adhaf+3fiWiCRBAkIQ48jUzJvWO3yFy4ckYPbBoHoYCUO040I01GRCf96soYr1bih/Dj82x9o+sRbJD5bPWTYli60cMZtKCImkEQg9IYlnaEtv+q96aEugEZIhr9y780jua7V8e1LStxDmIAEhiHEC+2brLez5q2SnPV98HnKgiAzxUREMZiyNSPjAasmAouo5meunhmZjxTSMNY/Ny650+67Mz/IGAwfVnbueiITLGFkjgcbFICR6jnYBCgnekNLea91XczT/PYCGcUllT+hDAkIQ44B4sl+Z/dV5Ob6ll+gdj8XK0D//XBm3ZWDafN/a+W/B3WIYy7SABNY7X1g+d+2MrmUWiY9crtavM9tYb1hLMFZnu0GurSHwdx4+mfXSloPsZKpWZiSCkIAQxDjAYLKzzHvhJQ7ILRnCrtnuGT7EQeUDMSMWaiw65S0+Z85cX94FeM2n8KPpdcMZTHNUzO65EK2P2cwvB9ukFQCtRRImko/ESEiMrJHAuec2hfVxstWy5/m33Jtr+X4avkoxJCAEMQ4sd85yT/WuXuvPsmWIz0O2ESJiWjj0BCOMVWXFuKH4olJWIlKdnzLbxrmsuHRxcctFFi5NGt4ZabaV1m9h5GyPVI9P0wUZBCUOMW/vrveLXr7zyP6DaHwkZo1cIm5IQAgiyYjlai90/bTC2VVY4VOt+TFkCx7N7Y8288or/BqmhSOMw5I/Z4H9qgowKSASm+X481V8w+RMdgHzWYM9tkVzTT0nuZ6QxOtsF0SxSrhf4ifb7Tvuem7WU5w3UPR5GkACQhBJZjJblj+va8bGoXw2Vdas1iFExNdvGWGBaMVCTzz0REON02d1XOJbdTmK13NmntQXsPxJZa62TUWSA62W0PV857K3D4tJpM5fb2hLT0hicbYHrjviPru31xbev2vwnfeN7ocYH0hACCKJiIy2qzK/OXuqclG1T7HZfML/oZk35Av9DKNZGYJooqF3rhtca+axahGVHjXYTjjPv11WNh+tj3XM6pWjlQ0QzYIwmrUVizUiUFkkJxoyX9pxPONvlLo9fSABIYgkwmCyY7F/1RopP2+RorCAY3po5Pwm6M6wwKT+cwJgZF0IIomNrJoT7LDklxZnrBWZdKMLCExzrJ7Vv6lYspcMV2vV1K+1RvwanYk0tKUlLCjq49rsvToBiZ099o7fvej63d2H9jf9KtrNEOMKCQhBJJFq5/TSrEnrrhxg9lwxm0jbL6sxEg4zoqEmz+d3LvCsWY4GxjbOuUe3EPL9ZfL0tdP9l43oDrxW/cYK8QiLidpHEm1oSy0OkWJJRpwzcniL++XeQ2fh0d8dYjvIcZ5ekIAQRJIQw1cbZt6/DPv98vBIjFf1IB/un4N+EKuugMQqGsN1B8+zzxnMq5rDKvNwWzdrrRi+evD60ouK/HkVgSqtqjboNVYtHtGsEr0ZW4H9EXwk2qGtwL5guSY+cPzJt2Y+3An7uiLeMJESSEAIInnYsgvXfsza6haLPI2Knws/5GuHtMYoGiN2uaF4uTtr/WKIICBfKl7nvsQ68HcM+oKt81pGikgYrUWiFo/wZ61FEmh0FEd6NB9J4FwFuvos7a++n3//HQcP7ibrI/0gASGIJLHW8c3pszqnb4o0GiQIHzubB8qMTu8Ix4GRYAh0RGMEU8CZu8BzwRyJSW8pXBlRWFhIty2duzG3wDJXFcsYXUQCF9VcM2yNmB3aMhOMCIFpu/62Qdiz98iklwEaaOXBNIQEhCCSAHbOto0zH7jOZ2Gmlqz1Nvt5NMHIgH6UCmvE42rUoiKDL2/OUH5lCVSJYawRzvQ5rLLwisycy6zertxzJ4fO9aq6Bq2YaIVEzxoRaKf+aq2SSI52CKYp7vbypmcOWx7/eW3tYUpZkp6QgBBEElhY8q3SzMI1V0Nv8LM6Pm7UaBAe6y7JlqCxe3if1rKIJh7RrBA/WOxuKK4ozcqaCioBEb6P25bNXj63omMlG8w7V7meuRQWk0hCEjim0wa1kKj9I+Yc7v4TTY53Hnhj6guc1w9GvEEipZCAEEQSKPC7Vub4i+arH9bVPhDtQ/yAbGd+tBccMLKvFMKhJxBGQ1cqWBG0z3RIlTNQM/aEn+RF1t3qUv+Kot4i16iI80hDVZGEJNo54eEtM1Htgf1BEUHro/21Ru9vdvW/fcbMTRKpgQSEIBJMEZufU7X4D1faWMbw8JX6wV5PSMT2ADhHCUhYKGIQDDFsNeJzHhSUzh9avfogPPcyfgzMZLp6gb1srdNxNQOeo+u7CDd6uCGqY5F8JHqE644U1R5o8Gjfx+4W30PfeqHh1W+ZuwqRIkhACCKBiKGh1Tlfr3LZq8XMJ4v6wXyU60AlJGK7Oc/K8zthxMLfYxGO4L7gkNCFQ/PnvcnyRXLFLmyi/bGq9dVFFs8cUNcfSUgE2qEto2GtaDEkej6S4Qb7oVvxH3llX/bDGyLcJ5E+kIAQRAIpgoVZGVNv2Aj2jLkelBNbKHxP3f9GEhIIpXY3Kxp6ghHcP3q26zzoXfQPsHI2ikfdV1wbppYX+zahUmWDBxtj04k6NyMigX0xCImRs12cprDelw9kPfrjHUO1tFRt+kMCQhAJQlgfC923zMjImHYBfswS+zyh3LtCSLQjQt7RfnGm3RFJJILHFM3nyLO4ZLBPmc3dK3Dz7fWTlTXTc/0XDB/0hBpii9DZq8Uk2rDW8H6DYEQ1qoBEbvH69zdbXnn3RMbjHE4MjC5MpBskIASRIBjMs5U6q5eBLWuRV2aBOarhPlMtJALtA7r4fNaZwb2dVsUBA7oJDfUsCzOxIoHrgNcuQ9XqMrb0kYoi5QYbWIuwVSML6QmJwMhHkiCrpLVXPrl5v/3+O2pr36dpuxMDEhCCSBCFIBdkFq65GLIKXBB6ftY+gOsJSdgaac+ysU6LzLJD/a6ehSFmasUgGprz7fO+XTr95skwsJ5BvwTeUGOsCRCS8LBXnH4StD766vvZC0/szHkbtYPW+pggkIAQRAIQw1ercr42E+zZq6xeZtFb9lvtQhBCorVG8ByhGAoKx4jBLbVgRBMP46j0jKlL3I7PZ+aeNRXcGFVItCLi7A/eSKx+EiwrggZb++QjD72X+ZeDfGeTqbYRaQEJCEEkAJESPXPqjeshc9IMdUb0SPmvBB7bufNtHs47nf1ddb4jQ7Mh34W7IodpazDjdBcLVmVDt21K7tDkUQe9qoZorZFAQ034SNSmVrShLR0R8Xrl3rdOe/5658HeHTR0NbEgASGIBLDKefXkjIxpV3lsLOC/UDvNIwURho8JUEwGmrt2b3Y4OuR1gxnXWcE+ykowOzsr0vrq+a6DXp7Va2Feyzln/agOPYqYJMJHouNs75D797/3fu5TCt9LjvMJBgkIQSQAu2vVBd6C0rLwZ70hqkgWSeBYb3/DQOubv5k/1LAI4BMiBCJnrIKhJhcaQJpZKzNhLPmxEXK4AdFyXsXpIxHozdzSsUg8wL0vNXvv+8XhfYd+bngXRLpBAkIQY2SKtDyjetljH+3LtGaH9wnxiDbzSi0k3RmevqHTm//4VuttNdewr2Qz6O+wgjTN6Lpa4fCgjRJJTCwl7Yoju+ec5aEWkTARs/DazA9tRUMjJBxAOTDQt+U/nyx9gvN6cpxPQEhACGIMCOf5muIfL/NNKt0gPoX3q8VjpK9DKyScW9vq/3a29Vf3cs59F+Ssa1neU9nshEXCWz5iOq+RpWEbTnviwS3b8LZIj5I96ZgUiGpUJyyMJCKBE01aI4GbjSGOJFBX8Fhbt+3oEyd8d+/kO9uj3hiRtpCAEMQYcLGyzPaVl30css9ZH/ahc8fVQ1naz14rV6C3/cT7Df/z4KHe7YEFn8729rR2Q2lTPgRmZMlmhqfCWFVxHeptW8kpcGZ2nFvASb0eh56IBBoXxRoJXCAGi0THR4LWx+DRRufffrxjBy0UNYEhASGIMZBXfMkcT37BKvCdy7euXmFQiElYNNTvAub19no7Dv6lofHNV8Od6HHe1V1v3XJ6rvcG0UNHXQDEqg0E1C3jhUylFyC3EztyYdDgy6KdCqzpBvT8I0JoHKpEj1pnu3qYy4SQoPVx4Kn29qcglNyRmJiQgBBEnEhsutO16T/WF8OkaUP2c8NXagtEiElYRATnhra4Yu3t2XOiY/PTXXxbx7kz6nz9Pl9LNwwN5YA9U3tNM6IRLOcNpYLv4hklx8WuUWlSRqwGOGIt8lC3oLZMxLaRVRJGCIcQEb08Wwj3WftfO5q59b7a3p1i2M7UDRFpCQkIQcRJMSuanO9ctJpnZGeDRjQEYSHRfhag9dHSV//i5vbGFw6ph3AUrvi+M2XDIai/Fk0GmGTWytBbN0R8znWdYiy3e6Qo+ELCEbZEhJCEh7eMhCTqmiAhK8SjMpzU27ZA0KDyfoNz53ZP62Mt/GCP4c0RaQ0JCEHEgVhPfPHkW8vk/HkrODC7dthKEFlIuK/Oun/H2bo7n9PrRAc4P8Ogq8sKeRGvrycWWuyoalJhUyDD7/BOtc9DT0jUJMHZ7vFIzTXN0kN3HjhY+wu9GyMmFCQgBBEHubAov31B+ZrCjKxSraPcyAJpy+xtkt55+P5WvucDvbp3dA903AidH0yCvHLQzMQSmI0PkUoawJnXEhQPtQj4VT97rUUSTUTC5dXEOPV3Z5O05Zd7Bx9HS4um7Z4HkIAQRIwI62OR+9tzh0rXre3NYja9mA9BJCHJ2rtja3vT66+K4Sq9+nv6evraoensFJihoFjoZubVos2RZQGfmLoren8pIBBCHPREwOzQVqCMEn1YSzAilftI3wgaXmef7uh4YBuv7QDivIAEhCBix9ZRVrlCmjptrjbOY0ShkJiohcTj6zmRUb/93sN859lIlR/m8hADVofiIXruqDOxIiVXdLJ+cFj7zg1d+XR0yEhIBJGskmgWiUBjlXAOQwezTj95R638Dk3bPX8gASGIGJnNynMbK5Zekg+Qrz2mF0CoFpKm3nfu72z5ze5oSQM51HqPs/XHq/m51aTMpnK3hE6xFJ8BZvMw/TU4tIKgERL1Z6PhLb/BFOCQkLRK/Yce2Zb3oML3jlz0nZjQkIAQRAyIyPN1rp9c2Jw7bb3Xz0ZkzI0UMBgUEq6wE7uflZ/97m9O8pNRkwYKcVnpvLBm3eD6QRdkZoVFI5J4WDSrFgrrIzOvXlPIP1o41ENbtsFzYqD1kajLCiJN/9UDhWTIMthzrMF+z88P7tj2s+iliQkGCQhBxMBktsy541Mf/Ui2PzMQea6Xnn2kcAQ/2zt7T+Vt3/rwYdhnavy/daivGd9OomgUao9pBWPU8eIzHJ/8R8Z9DDjObetaI6rjifCRhM5BM8t7slva9rUaeBP3qCYyE+cDJCAEEQM5rnWzu/KmbfSE+lJtbivBaIc67/O0H3nmcOuTr+MHU7OP6nhNTz90HceOfamRYKgJWB/WLhbI0igaIikjV7USRBrWCguD3rRd7fRfdTS7XoqU0Dn9Q1JTTav30d29bxyjtT7OP0hATOJmlf8GwOaM1/Xwl7a9BWrux99cp95xMZRSDJWV+Jh5S2w1K9uaYd+DWG/EJ2GseqkLKr+Em87Y6h4bzVDzeWyXbuQctinLBRU349bqWOpkwM808prvJ6J9EpMs7k33bbDIGa6w5RHJgX7uGPc38yP7Z+585OlWvqvNbCeqcMX/FPuPBgsUGJa1qgQmS8Z/Lpm9qoqkc0Ii0C6RqG6weohLLRJ603+16BzCG/UcqMt+96enOl/Cj/2GN0JMOEhATMJAvhw76wvG74pcjCk8ji9dAQHRnwG7RgL26ZhqBSbWrHgFX9GGUqZKIH0cRLjD+CJEK1Lo9VwJZBQQWBVLhRx4vZstuaeJ7z821sbNmvyN0saKpVd5M0GOZHloU7dn9kFPbs2Opw82vfxezLEPrPsw6MiNWjC8oZ+weEfrQ5HyApO7pFELjwghESIi9mstknCDtet1GDnb1fs0znaxTG2/4j/2mHz4D3sG9p0m6+P8hARk4pKF4vHFWE9C0SlHy+VyfKI/FulpP90Q1ha+CeFbHPO5wAo4yF/CKr47lk5MtKHk4vtWSblTy/GTpB6mUgvJyOEr7m/qeuvFqbU7H2vge/piveYJ6Du+EgZb7WApUu8XYhEWEfW7jXdKLFsT2K4WEkUavW9ExREWfjIbR6Iui1s1/b3PbDmkvItfe/SpY8SEhQRkglIM5ZfhW2kcp0poXXwE3/8IkZ/2041JJVAlrL9Ry7yawI7WY5ULysQ6401xNwBm5/gKizb25TsmcVmVeDbCyoNif2YvnJ3x3OY7DjffXQfwXzFfs25y7Sk4s3aE41ktHloUVy82JlRcG4+hJyTRfCSRrJGwkOj5SAQhZ3u/5Dmwub390f1KbS8Q5y0kIBMUFIGb4j0XH+dXF0D5Atx8N4FNSialHNiG0elkTSFOm4v/1IXv5Mm4KhB5r0pvKa+bs2QZly0BG0Od8klvwSirlw95jm/dfLjhrj3CnxHPde8709RxM1iOzwaYEt6nJx4WFlSwDGvXyLxXgYZGERKB2kcSzT8SxkRAIpd9nudaBn7/xMH+Q5Tv6vyGBGQCgh3aQjdULh9DFXZL0MeR9gKC9yoXQ+Ui7BVnxl0HAFofbD3W9TLnPOb1J4pgYWbLmktW95e4pmuPhYWE+X34cG45JyZdjdtL3tr6+5Y4xUPQDUd7+6CrBiB3vd7xsHAErp93lDOrl4EnFPZu08yYjVdIAudaz/lOwmKiF1NiHwLul30766WXf3i06/kTygkKGjzPIQGZgGCHei0DadJY6mDArpXY9H9WDILa0gAH3uvVMCJQIWbseL9CcGfha0+sJ1uYo6Bz2owq3MyOVAYtk0DWKmGR2Lv72rK3vfLnww3P7ge4cwzNBl8HNJ0Kz2VQC8aI9nE/ZDqUkZZHIoREvT/8Hi2yXUzbdXTX1fbaf3+I7zlj6g6JCQ0JyAQjly0szADHJbiZMZZ6sEMtLoK8T0DQF5LOZGKXtiEB9VS4oHolWiG1aIXENBtKAVlmwDO5LBv+Xnyyz2M9vWvz5Hd+97dGODpWHxOXWW/jEPd1ZDJlVNqUMA5Ljw9kzRxbIRxCRMYiJDHO2hoYsnpqlN6tv2w4+y4tFPXhgATEJBz8NWKgAn9VgUcwFvzuQt+fcKsy4aQVVoEUsZKR1GGdpyNfjx0CHSe3E+wX4RP5bNBbYS42nBKwT2GH+gj+2LVWyFkOyjvYiqxIJzOQhQN/ttmLYX0t+N8jBsVG5cVwQ+WlEN9kAS0ZDJQVEPSDtMRyYj/39EJ362nmn+tBS8MeuSTnGY3NB6Y9u/nBnf1vnknA1FX/65O31S0/U9IAUDhKQCyhyU1yVndoLm+oU/fq5F8UQqIVkcA5mnTs0WZthfcPnztSRFq9/tpHTkmP1vLtMX2/xMSFBMQkTbzm/2Jna8uFRYFhDCv4HRJY0AqwMgkUB+rGl7Bj/3s8NGoZUj3wp/+7Zl7zk1jagNfPcEHlGtwsif0OdKoDeUYRVIrZTa+qD2C/J9JOvBntZBer+roMkumpRdiTbsXv8OY42vnJOM6JALvSDeW/hxgFpBeUDtcHp96Wpi69srfQMsoPMly739/pPLZ/c1PTazWJyjjr9fu78a1NbFt0ZsOi9RFYY/zcCVGS9xpZI4Jos7a0+1XXG5D8/dv46Vd/3fD6Psq2++GBBCQGQnETumm43axqP5oEwmloSkDiZK4E0jIwSPEdA24xPITC9GY6DjlguxagBbIsYfUFrETLRVjvrlhiYER2XN/Ld7yuzJr2Astb/UlusYwKsGR+34Cj7tjWGc/8+MGdfE/Mjnrd64qkihnrBo5AZseKCKEUsjXkp/arExz6I8+iEhTYpXoAAB3fSURBVHhURpSRmEQa2lK3E/e2epS9b7SwJyJlTiDOT0hAEgYfwB+Sb6zjSpEQs5FcUFEBcQTTRSEDBUkM64gZTu8nsN6EgPf7EbTq4on9iAK/Dv/zPxBDDIzoyPH7r1/8zNO//kA8bE9Z+pnewszhISWrh/daTx17LPeuv/vlTr7jg0RGXfcOerr64IM6C8z2+sAyrAoiP5bFMgBgVwWhhIUiLCayf/QxLZGsksB5lsgWSXi6WXDWluc9aHjmifrOfXfHe6PEhIQEZOJQgJ3phfgeeaHsc4ieQ3RiRn9foXeL8LUkFJmeNukm8tmSSQ6wiNlXUXwOQbDRvQz4SbwdE+LKqtxQLkTzb7G0JyQih+B3v/y3+a5v3de27rIN/XnOkqyugdait7Zub2h4aV8j7OtM9Hd4kG/rO8yW1V0I9kEL91tHJVbUG77SExK1iKi31c72SCISqDOCsx057ffuf6Oe/bFBiT3anpjYkIBMEAqhbAa+CYeykZGjcPA/h8UOoeCIRItGw11T3VB1ZR/wtyBG30AycYC0FB9vp4K5yQJb/eD/lQyWl0FnDXEN+G9e+kQoJiSmsfpQeZErpAbP38ewaf1cwX2XxVJNrHibSw7W9zXM7SyA7BHTiAPDVz7rSBEJnBFBSPRQD2cZWSOBOkcKyUBWT/vdpxvu+nXTq3FH+RMTFxKQCQB2VlY3VK/CnnSaieLdwmHdDDXvl0D1R/HzAhNXWGkH7wy8Tms6WCHB+624KBgAaMgA9pBPtMC+t/B+xSyvRYb1g3RFMVSKzMpH423jODqKlX4JOrkmm+2I4atI6AlJIoa1AnUG1/qo7RzauqWh7UWKOP9wQgIyMXAy4B8zOXMXOxvfVnxvVkDZJYE0FwyeyrHWBTLYqnGzBtIjP9YsbPJKMBHrgp3YvibYe0Ak7CthVY+iOPzIRP35+H1eg+93jLmlSUYI+orstWe7wXN21MpSQxFyyUeySKKhJyYGQtLt53UH+v2P1fLahEwaICYeJCATgEKoXIjd/FIzZTn432iBA8KR6ythlWIBo8sCVUTHgh2qsFYegwizzMaZSghm3zUE270b306K7Sao2YpWyD+Dsd/EhqK5ES2d3+L31GNQNuX09Q2241sDBH1bgYeB4dlXgrCQhC0SX0gwtEKijhER21ofSXi/Fp1ZWyjcQ5sHGp7+SWPdm5Rt98MLCcgEAH/mIm+VqVQefmCPh6fk9sPA5gzI+jozFhAxxXVDISwphhQLCHbquS6oWMZECipjmhTgIp9Xd+jzSezY3sZzLzY4T2Igz3VDhXCmvzymBo8DCrC+FntL/YyhjCEJnBl2i8ZXLYRDzxrRCok60DDSrK1oQiJAMRFrfTQPKof/u7f1uaN8d9vY7o6YyJCAJI4+ZnK50ljIYVXFWSDdaKYsB36she95Jvy5ix9pdbPKLdhZCj+I0d/aLoP8DXz/xzE0d0yE1v2Yh+0VVpNhRD8H5VAz1GxX+SM60AJ7Ac8XqU+MxvtmYJHr8ZKvp2MMjBo0kfo7PbLIWiD8IKOH9cLioRYRtX9E7WhXD2eZ9ZFoynXLg+0vyg0P7uw5uS0dfGZE6iABSRAcmBhTSLgpnwH8CjBhQQRhL47epzzAQf5H7E0jpiUZPhvYjdihfi+FwWDWEqgWkfFLTJQV3/cObOtwehTcHsT278Y6mkFkQYmOzEAS1xFO931xt3gcqOc7B95ny08sB19vKQwF/y14VWJh1XFbacUk0rBWoC6DYa3wMQgMXfmPWpp3/aqt7bkJkIiTSDIkIGkMdoZON1SYioVA+vygjFrvohn2H3ZD1W6sbZ3h9YBlu2CJeHp/Ko7mJoJM7KAuMhmM2YYW16s6++vEevJYxzUm6qhwQ/kFoQSLaZt+Qzzlf3nKhjqonx90Vo9KJ2LTF5EwQkzG4h8JXCN4rMfR0/LakcL79vDH0y7wlBh/SEDSmEKoLMenZOFMNoptEE+GR1qhZtSPGvueITereIyBxVBAIPDvQRZWyHOpWO4WxXIKM5d5l3NQjjfD3nd0jtWLxJcM5CvB+N93Dn4vIrfYX2EMqxWOB0/Vtzfc5DjTVTI4i7Pw8JxaSLQWiVZUerPOfVZbJIHzvfpDW2pCQrL7jGPLE/DmlpjXdyfOS0hA0hgL8I1gOhOt8hL+R3foqRn2vVQC1frj5yMRy92uRCtErJ3xdgxNTQgcpM9hzxgxbbkKYS2I8fdu7QEhmCLXlRuqT5tbhIqLlQpFfE1aC0gz9HT1DtqEH0T05CN/t9qU63oWiVo81BZJ4Hwdq0Sb1RctkiboP7lraOC+bXxb+5hviDgvIAFJU7ATnFECVeLpOOIiRmE48LYmqHklypTUJizzHAP2MeO6wIVP72KK67vjOawjMh27ofIjJmNdBtHKeCjK8d2oMYdRD2eAYYVsdjFUivvdr5PWPm1Q+InBP025/n2ludQr+6TRv1ttyvVIPhK1b0Rv+q/W2R5651avb4v0wR/vgtPbyXFOhCEBSUPEbCQXVFbjlhlnsqAWXxHXFoHA7B0/WiiWa8EgtUnQ2S6Jp3Jh+YzbqnIuqLiYBVOXGCJmXzXxfXsjHuf8TAmreg97uQtNTB5gaHVdDsGFtdJWQAStDe4THg6DTrEsTDQi+UjUlolaPAx8JPjw4W+G/h3/2932uHDoJ+p+iIkPCUh6ks2CWXLNDF/hL10RsRAnIxUQ/gwxrFMC1cJHYpjqA4IZf1dBMLAw6YjJAiiYnwaTaeo5sOeNyvjAt8UCNrE+i4nZZ7DSDdXi+/6rmeunDt4gEkeCuWG+yD4SPSGJEozY41fObu703L/dd/IEWR+EGhKQBIG/KhHdlah4gqn41IdPz8zQeY40NcHe3fi7NsqEip0P34l1mhGQUrQIVmDH/gLW22ui/JhwQ8WckGCaiP3g3c2w52mjcm1Quw9FaT8LDmMZ1WtHq0YEa6a1gLSUHGzsbFjQmgE2U5baMGofiTdC+pMwmum/3Gf1nVJ6t/3esu917js1GPlE4sMICUiCkEEZDC55O7YVQULrfiyUgFWZKY8dqkgIuNtE0VYF+C4ZmAhKNHSm4x2JdCJT8HXYTDvGAorvOvzWCsyVZUbDdcFynA+6WdUW3BSzsQyFCb/vS/LY4oJOfiAdUrno8lhjZ+PnwNNQGsxbFhtmfSRhQkNbPY7uhhd6eh/bw5uOk/VBaCEBST+ysPMWeamij3MHGUIBEUFwdUYFRbQ1itNeN1QfZyYC9bDHXVUMlZWhdUKSFqmN9RegpSBmm5kZlhFxbML6MJW/agh8f3GC7WdgamiM5WNZIa6/NVN3KjjJ93UeZW3bFvCsq9hYnlT0fCQCjbNd5LvaM9D/0m/h7a0KP6KTUZH4sEMCkiB8IClWYKJjM5WZVIKIM36ysPMu52LmpgYWnMKpnn/fykGJZV2LgwDKm1jTJHxlgn4npOC1PQxQcEASvhDhbxg1XRaPi3bEkoW1P8L+VXidOXrX0IJi2dgMe0XqEVNDKR18f3sJq3oR67/UuG4R2c6vREG7F+tPyxgHYQH8XPrSU2fZ4JcLuaNkzBUaCAlaHx/81bnzT8fq9476t0gQAhKQBNEGNfX4xP4/kkkHpwL8Db39eVDer4DyI+wuRk3fVYCJp8Bhn4Twu7TCvh1m24j9Tyt2kHcWQ/nr2M7JgbCP0aV8WG8ntg87fHYcgilDdNqvCH/Kv5u9djPUHIxw6BQHPz71M8NkkaiS9fh2zOw1g+fwX0ugbDNRdweKuohvEFH/aSkggnvgtdNXZee9WNA949MsUb9fnTgSsc75q4ND9z3c2bn7zoRchDgfIQFJEGLqKL7dO9Z6OvjeDnwblZIkUWA7T+DbibHW08IDwmVavKK0RwzBJS0XVTOvEUKtK9YTkaP8aM/zPd0PuNjgigLuWMBM+HdMobJGhHic9fv2fhteuLdB2UvL1BIRIQEhiAmEGMYqYvN3zGE5f7wcpn3HCVJxQi+AQjIIyqlnp7zxs2OnaeiKiA4JCEFMMNrgaM/tme89OL+3cPZCyPosM5ds0xCxzgeKR+uL7NRvv31m/5bPJKJS4ryGBIQgJhih6bSNS50X/fJOWMZXDs78BFoi5oILI9UJoAyAUv8q1P/m+/DKH87yY7RMLWEICQhBTFB2D75+/HtO+MX3mKX9Mj710w6QJsfjWBez7hrBU/u05fh99zr2/uVw7860jYUh0gsSEIKYoISmb3+wRFryU8auPDaXF944EzJWoJBMYuaWAPCKIas66H/1nilb/vjLM8feUXpokSjCPCQgBDHB2a/s75XY9EerHTO3fd5XtvIi37RLiph1ZSa3uVBMnFox8VuU/g6/50Qr9+58ntW9eA+8997hMzWnFa4kfEVN4vyGBIQgzgPE8rKMscO74PUTZWzFlk3ujKnrmlZMsXJ5Xrbd4wbGcnoHrWfR6mg8xXqO7J+yt/6VM30NR/nuznQNnCTSHxIQgjhPCDnXRbBpU+gViNMR+dVCh9N22V5iYkICQhDnOSgcNDRFJAUSEIIgCCIuSEAIgiCIuCABIQiCIOKCBIQgCIKICxKQBMAYs+RBeXYn7BMpydXZUYXzUqRD7072DBiJTXdyOOWCCH9TF5RBM9SGPzYlYqna0OwesYiENQ/KLJ3B+q16bSiE+dAGRyLWpTouvr9RuZ007ReIqacteB9RA9+wjWLNk1w8v1Bzvl79YiEM8d3oLNGXOELfWyG+hlP269xfmAFsT30y20MQ8UICMgawIxAdwEo3VJThp1kuqM4H4MMCwoKdXCeAcgDLvoQdwQfJaksx5M4DqPouCywWpY8bgiuhSuC/HdvzVqxLlAqhxLfZ+JqPr8kuqMiSQMbvgGdw4HY3VIqF8jJ5UFRG4YLoq/SK4ywgQGzUWijq9gfhzV7gd+BGZFUIYsW/yyas9/Mjz9etv94L3h+BiSVzx0imCyo/y0Bar7n+qIIc/Afw7dYkt4cg4oIEJE6wM11eAtVfwM11+JqJL3tweT+9Rf7kHhSZrSWs4n+bYN/bRk/N8aCAPMkC7CLcLDUqy0G6N9RQUwKC9yq5oXxGMVTeJIG0EU8UKwiKFfFCQsEC/xsuH3Pr44HVyaDcY6IgCjqfie273LgoPyoFV2pMNjYUD6G2JtoE49EegogLEpA4cLHKdfi0fTturgBT621DNgP5GuygFhRD+Z3YIT9sdlnWdMAFZeXY/rtkYOIROSfV7SEIIj0gAYkB8SSOb+vdUPVzFuxMY1kNTgzNLJLB8mMXlHOs65GJICLYTlsJVD2KW8LqSMzqdwRBnBeQgMTGYjdU38YAlsV5vhjdKZFAvr2ULW/B7ecT2Lak4IKKL2Cz56W6HQRBpB8kICbBJ/GMEqj+OG6uSkBtJQr3/wDr3IFWSOvY60sO2L58N1R+JtXtIAgiPSEBMckkWFSEb5/EV0Yi6kNT5AI3lH8aN+9KRH3JwA0V1QykKalux4cYzoENpboRBBEJEhCTWMG6EN9mJLZW6ZMFbM696bp8qAJssZwgwSTiguODRneqG0EQkSABMQk+iS8AE6u8xVjnTBtkfgQ3H0xkvYmCAS8Ac7PMiOQgpln7Ut0IgogECYhJ8Jecl4T4hkkSWD6eyxa+2MUPtSW++rERDOobp7COtIAxBST6TRCESejHYhLsRfOSUK2EwlSdAfZLQ9N602rBHw5MrK1t+t8I3kszvtXhOT243c+CqVySRasffO0JrtMqA89PcJ0Ecd5CAmIanm3mYZwDb8HO80kJ2HT8eAkYf8elDKRL8f0VCK4iN0FRnsT73twMNSK1SAcEx+6TKSBCbNM+joYgzmdIQBIOfxQ70R+6oHK5BJJIcbLA4AQJhUnkRFoMaSYgLJjU0FA1UTiONEGNyEv1Xqz5tQiCmLiQgCQc5RXsQ9sZY++UQNWr2P/OBWPn+zQ3VKzCc0QH3DcerTRJFpj6N8KP438aSDwI4sMFCYhppCIzpbwgHRPv2Jf2uFjlwzJI61BEFhtVjv//LL4/i6+aMTbUEAW4GF4y09mbTF3CxAQAilcgiA8ZJCAJhoNveN5+C+zd5obK11nQCtFNcR4Gy8zCstegFVKL4pPUqZvNUNOfWGuBZxZCBf1bIogPGfSjTzDtUNsf3hYLExWz8j9ZQLoGPxpGdHOQbsC3/4QJFzzGbG2wlxItEsSHDBKQJNMK+/e4oPIdCaSPG5XFHnihCyrEzK0nxqFpiURYVwkNsiQIIv0hAUkyYjiqhFU+hJuGAoJYGcjfkNiUFxR+pt+4eNogFj1K139LfglYouNFCIKA9P3Rpx0ssFRt9BmtoUC6UcGATbD3b26oepMBu9D4OiJrY8FFMAFSvYfhQWd7ukasi3xS3jSbHoZN4rK5r4wnM5aGIMYECYhpWJZhicgzmwY5KP+F1oVYhMpoidJsfGK+njH2GlovE8kKIcyDvztWYKKceBhJ23T/BEECYhI+vOZ5HOdyrqAg7EQrZCcLBg1Gw4ZCs6YYypfj9utxXnJcwe/FCefHvyXGgZ0P90EQ4wL9WMYPESvxN3ytBuMMt9NRaC5G0Xk72VN6EwEKyCwXVH6hhFXVmymPj9UdzMTQjFgLA4W7b7Rlpyit0POKwk8kOJUJF78HQ0uTIIggJCDjBApCPwffqwwsN+KnSoPiTglkITRiHfLD49C8sZLLQPoHs8kTZeAoDJKhW0IK1icEVFNWGsyC3HWQ8FxYYtF7H/0mCMIk9GMZJxSucLQo9pRA9cv4sRyMo7xXu6D6IjznOFoh3nFo4phgMT25s7F63Aec4KFpwwSRYkhAxhEUgoFiVvW6DNJ1YtjHoHgGniFmbT2Nr8ZxaB5BEERMkICMM61Q864bKnegATINDL5/FJmNLqgsRyukORVrhXCAQRacCURR5gRBjIIEZJxBIWhzs8rnsWPehB+jTuVkwFzYiV8OwdlYqVj7ogeCfggSEIIgRkECkgIU8LzEwNnADAREIAG7thDmi7U2TM1wIiYE+Lvjuekbe0kQ5iABSQGtcKjRDZV/Rnm4w0Tx6TI4P43vP0vQ5QcgOLOJSB1o0XEbCQgx0SEBSQEilbrEpvzGDa4fgXFkOsNu5suMsbsTFJku6vgwpcdQ/ODtkQxDbwiCiBUSkBQhkiW6WbVYO/1mo7IMpAIXVFwBEy9LbzQUHhQzQ1BARUChT/V5cBB8pqyoUBaA/hKojredBEFEgAQkhXBQfs9BulQ4yw2KOrHT/HvsCF8XTvhxaVwMcOBtKITPiHcFlIFm2GtmdUIxu6vH5CWE0KhjYYR4dMXazjRCBpCMLE+BWPXLk/TWEESckICkkBbYe0SsFYICcp1BUYmBXFEElatw+5nxaFuMtDfA7t/g+wF8eSZC+pUUg39PnmnCB8Lx38YEW1yM+DBBApJaOqTgOuhX4stuUNaFZUVk+otipcNxaFsMsA78T3caZw8WU6CFxZJrUM7GQZ40Du0RSwM4TZQTwT8kxkTaQgKSQkSKEhSEd91Q/TY+i15sUNzOQLoUrZBnQ6ne02aJCx50yqdNe3QQbTMzcUCkR8lIclsEwqOfPQ7XIYikQgKSek5y8L8lUriDgRWCIrNABiYCEHeCxn8gAbcDBfxFQoiHGastmwFfhAItoz4nbaaaGyrcyaqbIMYTEpAUI4Z9sMN6Ga0QkR9riUFxEYC2Ed8fxlftiHqA50CK/p4sOMwy7qlWYmAQv59OBsyo47ZIIE8vEkvTAzQkqzEc2DKTESDCcupNVjsIYqyQgKQHuzgo+xlIi8HAisAyS1xQvgxF50h8WXoD/pNEP133wchZUukGCgjrMNlpz22FQ1WQRAHBv+G1JouiMPNjyWoHQYwVEpA0AIWgz80qt+LmJfgqMiiewUD+ewg631VTes1lN+fBzj7RjlnfJChLZx9IPwMx/dmUhEx3QeXG0GJenYluSBFbssgKtqUmi/sVUOoS3QaCSBQkIGmD/wkFpE9JQR9H1J6OAVvnggoxc+u+8D4JFFQQ2UwPKYaazHb2Yj1uYVkYhnG3jxxRSzea0MLbjcJ7FRj7iayhadXPo4i8ksgsyFifE8XpdjDxfQqwzY1tsH8iLChGfEghAUkTmvj+XjereAj/JBeBcQcjYSf3TeyQHsUOLhy0V2zivFgxKTRcmD9pm9hJrMOC39XBEqhuAeHDNgC/2xluqPpcE+w5BAlKYonXt7ih/GYG0jrzZ/Gn02m2HUFoIQFJI5ph30tuqDyDncxMo7JYZpELlqzHza2hXdk8ICypgImo6nRPNiVmru0FEwIiQBG5oRSqT2HH/+9iiHEsF8Y6rG6oWIcW0BfBOBYlDF6T/3Us1yWIZEMCkkZgR3XGzSr/jCLwQxPFrSgiX8HO6R08T8zUKcXzbManMVE2oQ5vvO4UiGlJ25Qgpkvvwk5cWABmgvhsKMhfRUEXs+Tuwu/YbNqVEeC5DrQ8LgeQv48fK8DkVGu89pYm2Lc/nmsSxHhBApJmNMPev2Cn9Q0Uh3yDoiK9yVoXVHzbxapOS8CENWJoBfBgVHaiZ2FNc0F5JXaWtemaxkTEdZSwSpEG5gZ8zTd5Wib+HW7Bv4eIDfkF1rErlmsWsfk54u8TmvQwFUyLB+9ugj33gMlkkwSRKkhA0o8GDtKz+FQv1gAxGpHKl0D+HgQd4w4T5UWBWNYDEUM3ZsTGKoHl3/BJezd2tGdM1j1WxD33xiJYTbB3RzFU/rcM0k/BfMR5LorIjSgia9A6fAQF/rcQnFzAQd9HJBfC/EwL2K+yQubX8RufA8ZpatQoeGNP4vueVCxjTBCxQAKSfvQw8N2HfxoxpddovF4IhiOWyvHpNoYhLAUFRDLbic3ANr9dAtXjEviGPfcpP3i/ips7TJ+DVojEpv/BBZOuQ1HYEMPlZCw/Bb/sW/H+bsXvsAa3OzmwAU05G14FyzExpGcm2+6oJuLrcAvsuR/b2hTH+QQxrpCApBmh9Sv2u6EKrRD2OUhwehIG/Cy+mUm3HkfdAT/IuPhCxJog2KnHJJ4ChZ8cKGEVt6GV9wDWMSu+a7PKUBv0WxY/HRx8f8D3t8dSCUGMFyQg6UkrPuW+gB2VsEKmJ7JirFMMMZmdVSSsifNu9cIm2LezGCp/LAP7f/iNTE51e0IMclAexLb9RTU1myDSGhKQNCRkhbxZClVv8+BwiLkwc2O6FFCOQ9APYgKpEc7DBY1CWZCfwO+3lAPcCuan1iavTaA82wQ1P8G2Naa6LQRhFhKQ9KXND/wJCdha3J6WiArRqtnZDHt3mnXO+gDqbUka7ko1+B10TWKzfm2D/EEJ+C0QTLSYijAaP4rHiygeX8E2taTg+gQRNyQgaYqIQJbYrOddkLMMDZCvsTH7FkTnxB/Dag+aPaMd2o+7oGAfA5bQYbR0oZ2fELmu7nCzqhMM+I8YSAshcdaeEcJh3o0W4V+aoeYHJB7ERIQEJI1R+InBAjbnZzbIKoZgLEG8f68BtD7+iE+5D8R2/ZMDxaziRzJYFsfrcJ4INPE9T5awikY0QL6LH1fje3GSL+lD9TiElsdDKB73oXg0J/l6BJEUSEDSnLP8WBdj7EelUM0U4J9AayDWFfOGOPh/3wR7744nJUcL37trMqv+GQrQT8E4uHHC0sj3vovf81fdUHEj3udn8HsWqfUTnp5FBAmiNP8J/x4iTYnI+DuY6GsQxHhBAjIxONMAu39YAtVijYpwVLMh+IQr8mr9N3ZW92BH1RrvxRtgz+N47Un41PwP57Mlgt9RPYpIYBotCsllaIlcg9/fioTUDbwFX0+hxbEFP76O1+pIRL0EkUpIQEzCgJ/B/0Zd3IcH1+dI+LTXUEbW09i5/bQQyp6RwXY1duTXMt0gQuEgZ21orbyEndUTuOPoWJ9y8fx2iU35VREUPSkBW4Qd4Xx8Ss/E76QwVMKO18wOZeWNABNtjWG2E8th0XNW1aNAmpxNZp6QlbZTpGXB93tcUFWObbmBgVKJYjIpxur68O+wD+9jCwfv9maoFX6OHsqwS5wvkICYpIHv/liq2xDq3LaHXj8Yz2sr/IzIy3Q09DrvCYluU+i11aA4QXwoIQEhCIIg4oIEhCAIgogLEhCCIAgiLkhACIIgiLggASEIgiDiggSEIAiCiAsSEIIgCCIuSEAIgiCIuCABIQiCIOKCBIQgCIKICxIQgiAIIi5IQAiCIIi4IAEhCIIg4oIEhCAIgogLEhCCIAgiLv4/muUhVZ5pNgMAAAAASUVORK5CYII="
              ></image>
            </defs>
          </svg>
          <svg
            width="161"
            height="33"
            viewBox="0 0 161 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="titleId"
            className="w-15 h-15"
          >
            <title id="titleId">Binance</title>
            <g clip-path="url(#clip0_10916_143745)">
              <path
                d="M7.79705 16.5391L4.21076 20.1267L0.589844 16.5391L4.20942 12.9195L7.79705 16.5391ZM16.5645 7.77166L22.7413 13.9485L26.3622 10.3303L16.5645 0.564453L6.76669 10.3622L10.3876 13.9805L16.5645 7.77166ZM28.9195 12.9195L25.3319 16.5391L28.9514 20.1586L32.5697 16.5391L28.9195 12.9195ZM16.5645 25.3065L10.3876 19.0977L6.76669 22.7172L16.5645 32.5137L26.3622 22.7159L22.7413 19.0977L16.5645 25.3065ZM16.5645 20.128L20.184 16.5071L16.5645 12.9208L12.9449 16.5391L16.5645 20.1267V20.128ZM54.6293 20.5008V20.4395C54.6293 18.0992 53.3806 16.9131 51.3532 16.133C52.6005 15.4475 53.6615 14.3226 53.6615 12.3577V12.2965C53.6615 9.55017 51.4463 7.77166 47.8893 7.77166H39.7463V25.2758H48.077C52.0387 25.3065 54.6293 23.6837 54.6293 20.5021V20.5008ZM49.8236 13.014C49.8236 14.3239 48.7626 14.8537 47.0467 14.8537H43.491V11.141H47.2969C48.9197 11.141 49.8236 11.7959 49.8236 12.9514V13.014ZM50.7914 20.0029C50.7914 21.3128 49.7624 21.9065 48.0757 21.9065H43.491V18.0673H47.9519C49.9181 18.0673 50.7914 18.7862 50.7914 19.9709V20.0029ZM62.7098 25.3065V7.77166H58.8413V25.2758H62.7098V25.3065ZM83.4275 25.3065V7.77166H79.6202V18.5678L71.4146 7.77166H67.8576V25.2758H71.6649V14.1682L80.1514 25.3065H83.4262H83.4275ZM104.767 25.3065L97.2495 7.67848H93.6939L86.1738 25.3065H90.1368L91.7277 21.3754H99.1226L100.713 25.3065H104.77H104.767ZM97.7474 17.9741H93.0988L95.4391 12.2965L97.7474 17.9741ZM123.146 25.3065V7.77166H119.338V18.5678L111.133 7.77166H107.576V25.2758H111.383V14.1682L119.87 25.3065H123.144H123.146ZM143.019 22.467L140.555 20.0029C139.182 21.2502 137.965 22.061 135.937 22.061C132.942 22.061 130.852 19.5649 130.852 16.5697V16.4765C130.852 13.4813 132.973 11.0172 135.937 11.0172C137.684 11.0172 139.058 11.7653 140.43 12.982L142.894 10.1426C141.273 8.55176 139.307 7.42821 136 7.42821C130.634 7.42821 126.858 11.515 126.858 16.4765V16.5391C126.858 21.5617 130.695 25.5554 135.844 25.5554C139.214 25.5873 141.21 24.4012 143.019 22.467ZM159.463 25.3065V21.8746H149.946V18.1924H158.214V14.7606H149.946V11.2035H159.338V7.77166H146.14V25.2758H159.463V25.3065Z"
                fill="#F0B90B"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_10916_143745">
                <rect
                  width="159.746"
                  height="31.9492"
                  fill="white"
                  transform="translate(0.589844 0.564453)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 47 44"
            role="img"
            aria-labelledby="titleId"
            className="w-15 h-15"
          >
            <title id="titleId">Rockstar Games</title>
            <g clip-path="url(#clip0_5572_33376)">
              <rect
                width="46.6"
                height="42.9"
                x="0.2"
                y="0.3"
                fill="#FCAF16"
                rx="8"
              ></rect>
              <path
                fill="#000"
                d="M38.7.3H8.5a8.2 8.2 0 0 0-8.3 8V35a8 8 0 0 0 8.2 8h30.3a8 8 0 0 0 8.1-8V8.3a8 8 0 0 0-8-8ZM46 35c0 4-3.2 7.1-7.3 7.1H8.4a7 7 0 0 1-7.3-7v-27c0-4 3.2-7 7.4-7h30.2a7 7 0 0 1 7.2 7v27Z"
              ></path>
              <path
                fill="#000"
                d="M40.3 25.8h-5.9l-1-5.9-3.3 5.8h-.7a5 5 0 0 1-.5-2.2v-3.3c0-1.6-.5-2.5-1.8-2.8 2.8-.5 4-2.3 4-5 0-3.6-2.4-4.4-5.6-4.4h-8.7l-3.6 17.3h4.6L19 19h3c1.7 0 2.4.8 2.4 2.4l-.1 3c0 .3 0 1 .3 1.3l3.3 3.6-2.9 6.1 6.1-3.6 4.6 3.5-.8-5.8 5.3-3.7Zm-16.7-10h-3.7l.9-4.2h3.4c1.2 0 2.5.3 2.5 1.8 0 1.9-1.5 2.4-3.1 2.4Zm7.7 15-4.2 2.5 2-4.2-2.5-2.5h4l2.4-4.2.7 4.2h3.9L34 29.1l.6 4.3-3.4-2.7Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5572_33376">
                <rect
                  width="46.6"
                  height="42.9"
                  x="0.2"
                  y="0.3"
                  fill="#fff"
                  rx="8"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 148 29"
            className="w-15 h-15"
          >
            <g clip-path="url(#clip0_5572_33518)">
              <path
                stroke="#53A9DC"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="0.3"
                d="M12.6 6.1s.1.2 0 .2c-3.4 1.4-6.1 4-6.4 7-.3 4.6 4.2 10 12 11.7-12-1.8-16.4-5.9-15.8-11.4C2.7 10 7 7.3 12.6 6Z"
              ></path>
              <path
                fill="#006CB7"
                d="M13 4.4v.1c-1.4.7-7.2 4-6.8 8.8.4 4.7 8 8.5 10.4 9.6v.2c-3-.7-14.2-3.6-14.2-9.6 0-5.8 7.7-9 10.6-9.1Z"
              ></path>
              <path
                fill="#ED1B24"
                d="M3 8.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
              ></path>
              <path
                fill="#53A9DC"
                d="M18.4 8.8h4.1v1.9A6 6 0 0 1 24.4 9c.6-.3 1.4-.4 2.4-.4 1.1 0 2.2.3 2.9 1 .7.7 1 2 1 3.4v7.5h-4.4V14c0-.7-.1-1.3-.4-1.5-.2-.4-.7-.5-1.1-.5-.6 0-1 .2-1.3.6-.4.3-.5 1.1-.5 2.2v5.6h-4.5V8.8h-.1ZM37.1 12.5 33 12a4 4 0 0 1 .7-1.8c.3-.5.7-.8 1.3-1 .3-.3 1-.4 1.6-.5a14.5 14.5 0 0 1 5.6 0c.8.1 1.5.5 2 1 .3.3.7.7 1 1.3l.3 1.8V18l.1 1.3.5 1.2h-4.2c0-.4-.2-.5-.3-.7l-.1-.7a6.6 6.6 0 0 1-4.5 1.7c-1.4-.1-2.5-.4-3.2-1a3 3 0 0 1-1-2.4c0-.8.2-1.6.8-2.1.4-.6 1.4-1 2.8-1.3l3.3-.7 1.5-.5c0-.6 0-1-.3-1.2-.3-.2-.6-.3-1.2-.3-.7 0-1.3 0-1.6.3-.5 0-.8.4-.9.9Zm4 2.3-2 .6c-1 .2-1.5.5-1.7.7a1 1 0 0 0-.4.8c0 .4.1.6.4.9.2.2.6.3 1 .3.5 0 1-.1 1.4-.3.5-.3.7-.6 1-.9.2-.3.2-.8.2-1.3v-.8ZM60 20.4h-4.1v-2a6 6 0 0 1-2 1.7c-.5.4-1.3.5-2.3.5-1.2 0-2.2-.4-2.8-1-.7-.8-1-2-1-3.5V8.8h4.4v6.4c0 .7.1 1.3.4 1.5.2.4.7.5 1.2.5s.9-.3 1.2-.6c.4-.4.5-1.2.5-2.3V8.8H60v11.6ZM62.5 4.3H67v8.3l3.3-4h5.4l-4.1 4.2 4.3 7.6h-5l-2.4-4.6-1.6 1.5v3h-4.6v-16ZM77.2 8.8h4.1v1.9c.4-.8.9-1.4 1.3-1.7.5-.3 1-.4 1.6-.4.7 0 1.4.2 2 .6L85 12.3a3 3 0 0 0-1.3-.3c-.6 0-1 .2-1.4.7-.5.7-.7 2-.7 3.8v3.9h-4.3V8.8ZM87 4.3h4.5v3H87v-3Zm0 4.5h4.5v11.7H87V8.8Z"
              ></path>
              <path
                fill="#006CB7"
                d="m106.8 15.8 4.2.4c-.2.8-.5 1.7-1.1 2.3-.6.6-1.2 1.1-2 1.5a8 8 0 0 1-3.2.6c-1.2 0-2.3-.1-3-.4a6 6 0 0 1-2.2-1c-.6-.5-1-1-1.4-1.8-.4-.7-.5-1.6-.5-2.7 0-1.2.2-2.2.6-3l1.2-1.5a5 5 0 0 1 1.6-1c.8-.4 2-.6 3.3-.6 2 0 3.3.3 4.4 1 1 .7 1.6 1.7 2.1 3l-4.1.4c-.1-.4-.4-.8-.7-1.1-.4-.3-.8-.4-1.4-.4-.7 0-1.3.2-1.8.8-.5.6-.7 1.3-.7 2.4 0 1 .2 1.6.7 2.1.5.5 1 .7 1.8.7.6 0 1-.1 1.4-.5.3 0 .7-.5.8-1.2ZM112.3 14.6c0-1.8.6-3.2 1.8-4.4a6.6 6.6 0 0 1 4.8-1.8c2.4 0 4.2.8 5.3 2a6 6 0 0 1 1.5 4c0 1.8-.6 3.4-1.8 4.4a6.7 6.7 0 0 1-5 1.8c-1.8 0-3.4-.5-4.4-1.4a5.7 5.7 0 0 1-2.2-4.6Zm4.5 0c0 1 .3 1.7.6 2.2.5.5 1 .7 1.5.7.6 0 1.2-.2 1.6-.7a4 4 0 0 0 .6-2.3c0-1.1-.3-1.8-.6-2.3a2.1 2.1 0 0 0-3.2 0c-.4.6-.5 1.3-.5 2.4ZM127.5 8.8h4.2v1.6c.6-.7 1.1-1.1 1.7-1.5.6-.3 1.3-.5 2.3-.5 1 0 1.6.2 2.2.5.6.4 1 .8 1.3 1.4.7-.7 1.3-1.3 1.9-1.5.6-.2 1.3-.4 2.1-.4 1.3 0 2.3.4 3 1.1.7.7 1 1.9 1 3.4v7.3h-4.4v-6.5c0-.4-.2-.9-.4-1.1-.4-.4-.7-.6-1-.6-.5 0-1 .2-1.4.6-.3.3-.4 1-.4 1.7v6H135V14l-.1-1-.5-.8c-.2-.2-.5-.2-.8-.2-.5 0-1 .2-1.3.6-.4.3-.5 1-.5 1.9v5.9h-4.5V8.8h.1Z"
              ></path>
              <path
                fill="#ED1B24"
                d="M95 20.9a2.2 2.2 0 1 0 0-4.5 2.2 2.2 0 0 0 0 4.5Z"
              ></path>
              <path
                fill="#5B5B5B"
                d="M74.7 28.3v-4.9h.6v5h-.6ZM77 28.3v-3.5h.5v.5c.3-.4.6-.6 1.1-.6l.6.1.4.3.2.5v2.7h-.6v-2.7l-.3-.3a.8.8 0 0 0-.4 0 1 1 0 0 0-.7.2c-.2.1-.2.4-.2.9v2H77ZM83.6 28.3V28c-.2.3-.5.5-1 .5-.3 0-.5 0-.8-.2l-.5-.7-.2-1c0-.3 0-.6.2-.9a1.4 1.4 0 0 1 1.3-.9 1.2 1.2 0 0 1 1 .5v-1.8h.6v5h-.6Zm-1.9-1.7c0 .4.1.8.3 1 .2.2.4.3.7.3.3 0 .5 0 .7-.3l.2-1c0-.5 0-.8-.2-1a.9.9 0 0 0-1.4 0c-.2.2-.3.5-.3 1ZM85.7 24.1v-.7h.6v.7h-.6Zm0 4.2v-3.5h.6v3.5h-.6ZM90 27.9c-.1.2-.4.3-.6.4l-.6.1c-.4 0-.7 0-1-.3a1 1 0 0 1-.2-.7 1 1 0 0 1 .4-.8l.4-.2.6-.1 1-.2v-.2l-.1-.5-.7-.2c-.3 0-.5 0-.7.2l-.3.5-.5-.1.2-.6c.1-.2.3-.3.6-.4H90c.2 0 .3.2.4.3l.2.4v2.4l.2.4h-.6l-.1-.4Zm0-1.3-1 .2-.5.1a.5.5 0 0 0-.3.5c0 .1 0 .3.2.4l.5.1.6-.1.4-.4.1-.6v-.2ZM92 24v-.6h.7v1.2a1 1 0 0 1-.5.4l-.2-.2.3-.3.1-.4h-.3ZM93.8 27.3l.6-.1c0 .2.2.4.3.5.2.2.4.2.6.2l.7-.1.2-.4c0-.2 0-.3-.2-.4l-.6-.2c-.5 0-.8-.2-1-.3a1 1 0 0 1-.3-.3 1 1 0 0 1-.2-.5l.1-.4.3-.3.4-.2H96l.4.4.3.5H96l-.3-.3a.8.8 0 0 0-.5-.2l-.6.1-.2.4v.2l.3.1.6.2.8.3c.2 0 .3.1.4.3l.2.5c0 .2 0 .4-.2.6l-.5.4-.7.1c-.5 0-.9 0-1.1-.3-.2-.2-.4-.4-.5-.8ZM100.6 28.3v-4.9h.6l2.6 3.9v-3.9h.6v5h-.6l-2.6-4v4h-.6ZM105.8 26.6c0-.7.2-1.2.5-1.5.3-.3.7-.4 1.2-.4.4 0 .8.2 1.2.5.3.3.4.7.4 1.3 0 .5 0 .8-.2 1-.1.4-.3.6-.6.7l-.8.2c-.5 0-1-.1-1.3-.5-.3-.3-.4-.7-.4-1.3Zm.6 0c0 .4.1.8.3 1 .2.2.5.3.8.3.3 0 .5 0 .7-.3.2-.2.3-.6.3-1 0-.5-.1-.8-.3-1a1 1 0 0 0-.7-.4 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1ZM115 28.3h-.7v-3.8a4 4 0 0 1-1.2.7v-.6l1-.5.4-.7h.4v5ZM119.4 27l.6-.1c0 .3 0 .6.2.7.1.2.3.2.5.2h.4c.2-.1.2-.2.3-.4v-4h.7v3.4c0 .4 0 .7-.2 1a1 1 0 0 1-.4.4c-.2.2-.5.2-.8.2-.4 0-.7-.1-1-.3-.2-.3-.3-.7-.3-1.2ZM123.4 26.6c0-.7.2-1.2.6-1.5.3-.3.6-.4 1-.4.6 0 1 .2 1.3.5.3.3.4.7.4 1.3 0 .5 0 .8-.2 1-.1.4-.3.6-.6.7l-.8.2c-.5 0-1-.1-1.2-.5-.3-.3-.5-.7-.5-1.3Zm.6 0c0 .4.1.8.3 1 .2.2.5.3.8.3.3 0 .5 0 .7-.3.2-.2.3-.6.3-1 0-.5 0-.8-.3-1a1 1 0 0 0-.7-.4 1 1 0 0 0-.8.3c-.2.3-.3.6-.3 1ZM128.6 28.3h-.6v-4.9h.6v1.8c.3-.3.6-.5 1-.5l.6.1.5.4.3.6v.7c0 .6 0 1-.4 1.4-.3.4-.6.5-1 .5-.5 0-.8-.2-1-.5v.4Zm0-1.8.1 1c.2.3.5.4.8.4.3 0 .5 0 .7-.3.2-.2.3-.6.3-1 0-.5-.1-.8-.3-1a.8.8 0 0 0-.7-.4c-.2 0-.5.1-.7.3-.2.3-.3.6-.3 1ZM134.7 26.8h.6c0 .2 0 .4.2.5l.5.4.7.1h.7l.4-.4.2-.4c0-.1 0-.3-.2-.4a1 1 0 0 0-.4-.3l-.9-.2-1-.3-.5-.5-.1-.6c0-.2 0-.5.2-.7.1-.2.3-.4.6-.5l.9-.2 1 .2.6.5.2.8h-.6a1 1 0 0 0-.3-.6c-.2-.2-.5-.3-.9-.3s-.7 0-.8.2l-.3.6c0 .1 0 .3.2.4l1 .3 1 .4c.3 0 .5.3.7.5l.2.7c0 .2 0 .5-.2.7l-.7.5c-.3.2-.6.2-1 .2s-.7 0-1-.2a1.6 1.6 0 0 1-1-1.4ZM140 24.1v-.7h.5v.7h-.6Zm0 4.2v-3.5h.5v3.5h-.6ZM143.3 27.8l.1.5h-.4a1 1 0 0 1-.5 0 .6.6 0 0 1-.3-.3v-2.7h-.5v-.5h.4v-.9l.6-.4v1.3h.6v.5h-.6v2.4h.2l.2.1h.2ZM147 27.2h.5c0 .4-.2.7-.5 1l-1 .2c-.6 0-1-.1-1.3-.5-.3-.3-.4-.7-.4-1.3 0-.6.1-1 .4-1.4.3-.3.7-.5 1.2-.5s.9.2 1.2.5c.3.3.5.8.5 1.4v.1h-2.7c0 .4.1.7.3 1l.8.2.5-.1.4-.6Zm-2-1h2l-.3-.7a1 1 0 0 0-.8-.3 1 1 0 0 0-.7.3c-.1.2-.3.4-.3.7Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5572_33518">
                <path fill="#fff" d="M.8.7h147v28H.8z"></path>
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 98 29"
            className="w-15 h-15"
          >
            <g clip-path="url(#clip0_5572_33617)">
              <path
                fill="#4373FC"
                d="m17.62 21.92 2.76 4.77 1.32-.83.47-1.57-2.95-5.12-1.6 2.75ZM8.7 3.08 7.4 4.23l3.52 6.03L12.5 7.5 9.3 1.97l-.6 1.1Zm3 14.74-3.87 6.7.48 1.8 1.19.83 5.61-9.68 1.6-2.76 6.17-10.73-1.04-1.4-.34-.5-1.5 1.4-8.3 14.34Z"
              ></path>
              <path
                fill="#4373FC"
                d="m8.59.72-1.6 2.76-4.89 8.47-1.6 2.8L8.6 28.73l1.59-2.73-6.49-11.23 6.49-11.23h4.64l1.6-2.81H8.58Zm11.39 2.8 6.5 11.24-6.5 11.23h-4.65l-1.58 2.76h7.82l1.6-2.76 4.91-8.48 1.57-2.75-1.6-2.81-4.9-8.47L21.57.72l-1.6 2.8Z"
              ></path>
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M43.33 9.7 40.37 14l-2.95-4.3h-2.35l4.12 5.76-4.33 6.06h2.35l3.18-4.57 3.16 4.57h2.35l-4.33-6.06 4.12-5.78-2.36.02Zm8.97 1.55a2.47 2.47 0 0 1 2 .83c.48.65.73 1.46.7 2.28h-5.73c.07-.83.39-1.62.92-2.26a2.72 2.72 0 0 1 2.1-.85Zm0-1.76a4.75 4.75 0 0 0-3.81 1.69 6.89 6.89 0 0 0-1.4 4.52c-.1 1.62.44 3.21 1.5 4.43a5.47 5.47 0 0 0 4.18 1.65c.68 0 1.36-.05 2.03-.18.6-.14 1.2-.33 1.78-.58l.1-.04v-1.91l-.22.09c-1.14.5-2.38.76-3.63.76a3.42 3.42 0 0 1-2.63-1c-.65-.8-1-1.79-.98-2.8h7.94v-1.29c.07-1.4-.4-2.78-1.3-3.86a4.53 4.53 0 0 0-3.5-1.48m13.13 0a5.05 5.05 0 0 0-2.23.49c-.55.27-1.03.67-1.4 1.16l-.26-1.4h-1.76v11.8h2.05v-6.2c-.1-1.11.2-2.22.81-3.14a3.19 3.19 0 0 1 2.54-.95 2.48 2.48 0 0 1 1.9.64c.45.57.66 1.29.6 2.01v7.64h2.06v-7.67a4.44 4.44 0 0 0-1.1-3.32 4.53 4.53 0 0 0-3.25-1.05M77.6 20.03a2.58 2.58 0 0 1-2.26-1.07 5.56 5.56 0 0 1-.78-3.25 5.8 5.8 0 0 1 .79-3.28 2.52 2.52 0 0 1 2.23-1.18 2.96 2.96 0 0 1 2.49.99c.52.66.78 1.82.78 3.4v.37a4.8 4.8 0 0 1-.77 3.05 3.05 3.05 0 0 1-2.48.93v.04Zm3.25-10.28.05.82.04.52a4.86 4.86 0 0 0-7.2.08 7.12 7.12 0 0 0-1.3 4.52c-.1 1.6.36 3.2 1.3 4.5a4.44 4.44 0 0 0 3.64 1.59 4.29 4.29 0 0 0 3.6-1.63l.22 1.4h1.7V4.86h-2.05v4.89Zm6.5-4.29c-.32 0-.62.1-.85.32a1.32 1.32 0 0 0-.35.95 1.31 1.31 0 0 0 .33.98 1.14 1.14 0 0 0 .84.34c.31 0 .61-.12.83-.33a1.32 1.32 0 0 0 .35-1 1.3 1.3 0 0 0-.35-.98 1.17 1.17 0 0 0-.83-.32M86.3 21.57h2.05V9.7h-2.05v11.87Zm10.88-1.74c-.22.06-.45.1-.67.14-.29.04-.58.07-.87.07a1.58 1.58 0 0 1-1.25-.51c-.33-.43-.5-.96-.46-1.5v-6.67h3.35V9.7h-3.35V7.04h-1.27l-.75 2.5-1.68.7v1.1h1.65v6.7c0 2.44 1.18 3.68 3.51 3.68a6.27 6.27 0 0 0 1.9-.33l.08-.04v-1.6l-.19.05v.03Z"
                clip-rule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5572_33617">
                <path fill="#fff" d="M.5.72h96.88v28H.5z"></path>
              </clipPath>
            </defs>
          </svg>
          <svg
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-15 h-15"
          >
            <g clip-path="url(#clip0_5572_33460)">
              <mask
                id="mask0_5572_33460"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="49"
                height="49"
              >
                <path
                  d="M0.984375 48.6211H48.7456V0.861298H0.984375V48.6211Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0_5572_33460)">
                <path
                  d="M24.8643 2.44781V0.861305C11.6757 0.861305 0.984375 11.5526 0.984375 24.7412C0.984375 37.9298 11.6757 48.6211 24.8643 48.6211V47.0346C16.3024 47.0269 8.14177 42.0579 4.47189 33.7177C-0.485828 22.4509 4.62896 9.2981 15.8958 4.34074C18.8169 3.05536 21.8652 2.44711 24.8643 2.44781Z"
                  fill="#11BED2"
                ></path>
                <path
                  d="M16.5282 5.79958L15.8876 4.34343C4.62076 9.3008 -0.494022 22.4536 4.46334 33.7204C9.42106 44.9873 22.5735 50.1021 33.8403 45.1444L33.1998 43.6882C27.3731 46.2463 20.449 46.0928 14.5158 42.6671C4.61725 36.9521 1.22566 24.2945 6.94062 14.3959C9.23026 10.4302 12.6341 7.50943 16.5282 5.79958Z"
                  fill="#72BF43"
                ></path>
              </g>
              <mask
                id="mask1_5572_33460"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="49"
                height="49"
              >
                <path
                  d="M0.984375 48.6211H48.7463V0.861298H0.984375V48.6211Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask1_5572_33460)">
                <path
                  d="M34.42 8.18894L35.2117 6.81783C25.3128 1.10287 12.6555 4.49446 6.94018 14.393C1.22523 24.2919 4.61681 36.9496 14.5157 42.6646L15.3095 41.2896C13.7585 40.3925 12.3101 39.2575 11.0142 37.8917C3.75135 30.2381 4.06795 18.1462 11.7212 10.8837C18.0054 4.92034 27.2816 4.06682 34.42 8.18894Z"
                  fill="#F6B52F"
                ></path>
                <path
                  d="M12.8084 12.0371L11.7176 10.8877C4.06409 18.1502 3.74363 30.2382 11.0064 37.8914C18.2693 45.5446 30.3612 45.8616 38.0144 38.5988L36.9198 37.4452C32.8392 41.3104 26.9742 43.1461 21.0737 41.8382C11.6312 39.7447 5.6738 30.3932 7.76701 20.9511C8.55236 17.4088 10.3588 14.3573 12.8084 12.0371Z"
                  fill="#F1602A"
                ></path>
                <path
                  d="M28.309 9.19947L28.6537 7.64458C19.2112 5.55101 9.85979 11.5088 7.76658 20.9512C5.67302 30.3934 11.6308 39.7452 21.0732 41.8384L21.4176 40.2845C21.4166 40.2845 21.4151 40.2842 21.4144 40.2842C12.8304 38.3811 7.41449 29.8796 9.31725 21.2956C11.2204 12.7116 19.7218 7.29565 28.3058 9.19876C28.3069 9.19912 28.3079 9.19912 28.309 9.19947Z"
                  fill="#CF3693"
                ></path>
                <path
                  d="M42.832 27.6399L43.7031 26.6198C44.3448 27.2157 45.0212 27.5826 45.7661 27.5826C46.7289 27.5826 47.3593 27.0323 47.3593 26.1957V26.1728C47.3593 25.359 46.6716 24.8432 45.6972 24.8432C45.1245 24.8432 44.6315 25.0038 44.219 25.1984L43.3707 24.6369L43.6002 20.7056H48.391V21.9551H44.8149L44.6888 23.8347C45.0672 23.697 45.4225 23.6052 45.9608 23.6052C47.5195 23.6052 48.7459 24.4307 48.7459 26.1272V26.15C48.7459 27.7889 47.554 28.8662 45.7777 28.8662C44.5514 28.8662 43.5886 28.3732 42.832 27.6399Z"
                  fill="black"
                ></path>
                <path
                  d="M36.5586 27.1655H40.5901C40.6758 26.6044 40.732 26.033 40.7577 25.4543L36.5586 25.4747V27.1655Z"
                  fill="black"
                ></path>
                <path
                  d="M36.5586 22.2657V23.8989L40.7503 23.8785C40.7211 23.3328 40.6645 22.7949 40.582 22.2657H36.5586Z"
                  fill="black"
                ></path>
                <path
                  d="M34.7992 28.741V20.6901H40.253C38.4613 13.8598 32.246 8.82127 24.8535 8.82127C16.0611 8.82127 8.93359 15.9488 8.93359 24.7412C8.93359 33.5336 16.0611 40.6611 24.8535 40.6611C32.2646 40.6611 38.4926 35.5973 40.2668 28.741H34.7992ZM24.6849 22.0355L20.257 27.1883H24.6849V28.741H17.9793V27.3952L22.4075 22.2425H18.1174V20.6901H24.6849V22.0355ZM32.6673 22.2657H28.2968V23.8989H32.6673V25.4745H28.2968V27.1654H32.6673V28.741H26.537V20.6901H32.6673V22.2657Z"
                  fill="black"
                ></path>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_5572_33460">
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  transform="translate(0.792969 0.718262)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 79 41"
            className="w-15 h-15"
          >
            <g
              fill-rule="evenodd"
              clip-path="url(#clip0_5572_33354)"
              clip-rule="evenodd"
            >
              <path
                fill="#FCB716"
                d="M23.1 28.7a5.8 5.8 0 1 0 0 11.5 5.8 5.8 0 0 0 0-11.5Z"
              ></path>
              <path
                fill="#EE363F"
                d="M7 28.7a5.8 5.8 0 1 0 0 11.5 5.8 5.8 0 0 0 0-11.5Z"
              ></path>
              <path
                fill="#07AF56"
                d="M39.2 28.7a5.8 5.8 0 1 0 0 11.5 5.8 5.8 0 0 0 0-11.5Z"
              ></path>
              <path
                fill="#04A9DF"
                d="M71.3 28.7a5.8 5.8 0 1 0 0 11.5 5.8 5.8 0 0 0 0-11.5Z"
              ></path>
              <path
                fill="#A1479A"
                d="M55.2 28.7a5.8 5.8 0 1 0 0 11.5 5.8 5.8 0 0 0 0-11.5Z"
              ></path>
              <path
                fill="#5A5B5B"
                d="M.4 12.4C.4 8.7 3.4 6 7.1 6s6.7 2.8 6.7 6.5V18c0 .6-.4 1-1 1s-1-.4-1-1v-1.7h-.1A5.2 5.2 0 0 1 7 19a6.5 6.5 0 0 1-6.6-6.6Zm11.4 0c0-2.7-2-4.7-4.7-4.7s-4.7 2-4.7 4.7 2 4.7 4.7 4.7 4.7-2 4.7-4.7ZM19 23.2c-.5-.3-.7-.7-.5-1.3.2-.5.7-.7 1.2-.5 1 .4 2 .7 3.3.7 3 0 4.8-1.8 4.8-4.8v-.9A5.2 5.2 0 0 1 23 19a6.5 6.5 0 1 1 .1-13c3.8-.1 6.7 2.7 6.7 6.4v4.8c0 4-2.6 6.8-7 6.8-1.2 0-2.5-.2-3.8-.8ZM28 12.4c0-2.7-2-4.7-4.8-4.7-2.6 0-4.7 2-4.7 4.7s2 4.7 4.7 4.7 4.8-2 4.8-4.7Zm4.6 0c0-3.7 3-6.5 6.7-6.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1-6.7-6.5Zm11.4 0c0-2.7-2-4.7-4.7-4.7s-4.7 2-4.7 4.7 2 4.7 4.7 4.7 4.7-2 4.7-4.7Zm4.6 0c0-3.7 3-6.5 6.6-6.5 2.3 0 3.9 1.1 4.7 2.5V1.7c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1v10.7c0 3.8-3 6.6-6.7 6.6a6.5 6.5 0 0 1-6.7-6.6Zm11.4 0c0-2.7-2-4.7-4.7-4.7s-4.7 2-4.7 4.7 2 4.7 4.7 4.7 4.7-2 4.7-4.7Zm4.6 0c0-3.7 3-6.5 6.7-6.5 3.8 0 6.7 2.8 6.7 6.5V18c0 .6-.4 1-1 1s-1-.4-1-1v-1.7h-.1a5.2 5.2 0 0 1-4.7 2.6 6.5 6.5 0 0 1-6.6-6.6Zm11.5 0c0-2.7-2-4.7-4.8-4.7-2.7 0-4.7 2-4.7 4.7s2 4.7 4.7 4.7 4.8-2 4.8-4.7Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5572_33354">
                <path fill="#fff" d="M.4.7h77.8v40H.4z"></path>
              </clipPath>
            </defs>
          </svg>
          <svg
            width="124"
            height="34"
            viewBox="0 0 124 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="titleId"
            className="w-15 h-15"
          >
            <title id="titleId">TikTok</title>
            <path
              d="M10.03 11.4585V10.3285C9.63768 10.2663 9.24147 10.2323 8.84434 10.2266C4.99978 10.2185 1.59596 12.7098 0.441455 16.3771C-0.713009 20.0443 0.649716 24.0362 3.80565 26.232C1.44161 23.702 0.785173 20.0189 2.12959 16.8279C3.474 13.6369 6.56819 11.534 10.03 11.4585Z"
              fill="#25F4EE"
            ></path>
            <path
              d="M10.2438 24.2602C12.3934 24.2574 14.1603 22.5639 14.2544 20.4163V1.25244H17.7556C17.6841 0.852012 17.65 0.445806 17.6537 0.0390625L12.8651 0.0390625V19.1844C12.7854 21.3429 11.0144 23.0526 8.85444 23.0561C8.20898 23.0506 7.57406 22.8919 7.00195 22.593C7.37272 23.1067 7.85965 23.5255 8.42303 23.8152C8.98641 24.105 9.61026 24.2574 10.2438 24.2602ZM24.2949 7.75466V6.68946C23.0064 6.6899 21.7464 6.30966 20.6733 5.59649C21.614 6.69012 22.8853 7.4477 24.2949 7.75466Z"
              fill="#25F4EE"
            ></path>
            <path
              d="M20.6715 5.59747C19.6143 4.39366 19.0316 2.84621 19.032 1.24414H17.7538C17.9189 2.12991 18.2627 2.97275 18.7644 3.72122C19.266 4.46969 19.9149 5.10809 20.6715 5.59747ZM8.84339 15.0173C6.99873 15.0268 5.39725 16.2905 4.95916 18.0824C4.52103 19.8743 5.35871 21.7344 6.9909 22.594C6.10652 21.373 5.98157 19.7591 6.66749 18.4166C7.35347 17.074 8.73436 16.2296 10.242 16.2307C10.644 16.2357 11.0432 16.2981 11.4276 16.416V11.5439C11.0351 11.4851 10.6389 11.4541 10.242 11.4513H10.029V15.1562C9.64259 15.0526 9.24324 15.0059 8.84339 15.0173Z"
              fill="#FE2C55"
            ></path>
            <path
              d="M24.2892 7.75586V11.4608C21.9039 11.4562 19.5805 10.7011 17.6481 9.30266V19.0375C17.6379 23.895 13.6971 27.8275 8.83955 27.8275C7.03556 27.8307 5.27502 27.274 3.80078 26.2343C6.26108 28.8804 10.09 29.7514 13.4529 28.4301C16.8157 27.1086 19.0274 23.864 19.0281 20.2508V10.5438C20.967 11.9332 23.2933 12.6784 25.6786 12.6742V7.90404C25.2116 7.90256 24.746 7.85291 24.2892 7.75586Z"
              fill="#FE2C55"
            ></path>
            <path
              d="M17.6531 19.0372V9.30244C19.5914 10.6929 21.9181 11.4382 24.3035 11.4328V7.72783C22.8942 7.43023 21.6199 6.68254 20.6727 5.59747C19.9161 5.10809 19.2672 4.46969 18.7656 3.72122C18.264 2.97275 17.9201 2.12991 17.755 1.24414H14.2538V20.4173C14.1838 22.1279 13.0381 23.6064 11.3992 24.1012C9.76023 24.596 7.98772 23.9985 6.98282 22.6125C5.35067 21.753 4.51298 19.8928 4.95108 18.101C5.38921 16.3091 6.99065 15.0453 8.83531 15.0359C9.2374 15.0395 9.63684 15.1018 10.0209 15.2211V11.5162C6.53969 11.5751 3.42211 13.6854 2.07393 16.8954C0.725703 20.1055 1.4015 23.809 3.79658 26.336C5.28535 27.3414 7.04844 27.8623 8.84459 27.8272C13.7022 27.8272 17.6429 23.8948 17.6531 19.0372Z"
              fill="black"
            ></path>
            <path
              d="M40.8635 27.8412H35.8009V11.3853H30.748L30.7383 6.87449H46.3423L44.9097 11.3853H40.8635V27.8412ZM82.0323 27.8412H76.9793V11.3853H71.9071L71.8974 6.87449H87.8596L86.427 11.3853H82.0323V27.8412ZM47.291 13.544H52.2955V27.8412H47.3297L47.291 13.544ZM60.7558 20.8814L59.2747 22.314V27.8412H54.2799V6.81641H59.2747V16.5835L64.2309 11.7435H70.1937L63.9308 17.8225L70.9487 27.8412H65.4409L60.7558 20.8814ZM113.705 20.8814L112.272 22.314V27.8412H107.268L107.219 6.81641H112.272V16.5835L117.219 11.7435H123.182L116.919 17.8225L123.888 27.8412H118.38L113.705 20.8814Z"
              fill="black"
            ></path>
            <path
              d="M49.798 11.9086C51.188 11.9086 52.3148 10.7818 52.3148 9.39178C52.3148 8.0018 51.188 6.875 49.798 6.875C48.4081 6.875 47.2812 8.0018 47.2812 9.39178C47.2812 10.7818 48.4081 11.9086 49.798 11.9086Z"
              fill="black"
            ></path>
            <path
              d="M87.2216 19.28C87.2232 14.8142 90.6586 11.1005 95.1108 10.752H94.3654C89.8407 11.0159 86.3066 14.7621 86.3066 19.2945C86.3066 23.8269 89.8407 27.5731 94.3654 27.837H95.1108C90.6475 27.4876 87.208 23.7569 87.2216 19.28Z"
              fill="#25F4EE"
            ></path>
            <path
              d="M97.0578 10.728H96.3027C100.74 11.0945 104.155 14.8032 104.155 19.256C104.155 23.7089 100.74 27.4175 96.3027 27.784H97.0578C101.784 27.784 105.615 23.9529 105.615 19.227C105.615 14.501 101.784 10.6699 97.0578 10.6699V10.728Z"
              fill="#FE2C55"
            ></path>
            <path
              d="M95.6996 23.446C93.4008 23.446 91.5373 21.5824 91.5373 19.2836C91.5373 16.9848 93.4008 15.1213 95.6996 15.1213C97.9985 15.1213 99.862 16.9848 99.862 19.2836C99.8567 21.5802 97.9962 23.4407 95.6996 23.446ZM95.6996 10.7266C90.9737 10.7266 87.1426 14.5577 87.1426 19.2836C87.1426 24.0096 90.9737 27.8407 95.6996 27.8407C100.426 27.8407 104.257 24.0096 104.257 19.2836C104.257 17.0142 103.355 14.8376 101.75 13.2329C100.146 11.6281 97.9691 10.7266 95.6996 10.7266Z"
              fill="black"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 70 47"
            className="w-15 h-15"
          >
            <path
              fill="#DD172F"
              d="M27 10.7h-5.3c.4 1 1.4 1.7 2.6 1.7 1.2 0 2.3-.7 2.6-1.7Zm-14 3.5V0H9.6v5.7H4.1V0H.8v14.2H4V8.9h5.5v5.3H13Zm33.4 0h3.2V0h-2.4l-4.6 7.6L38.1 0h-2.4v14.2h3.2V7l2.9 5h1.7l3-5v7.2Zm8.4-8.5V3h7V0H51.5v14.2H62v-3h-7V8.6h6v-3h-6Z"
            ></path>
            <path
              fill="#DD172F"
              d="M34 9.3C34 4.2 29.5 0 24.2 0a9.4 9.4 0 0 0-9.6 9.3 9 9 0 0 0 1.5 4.9h4.6a6 6 0 0 1-2-6.6 6 6 0 0 1 2.1-3 5.8 5.8 0 0 1 9 3 6 6 0 0 1-2 6.6h4.6a9 9 0 0 0 1.4-5ZM23.5 30.9l-2.4-4h-2.5v4h-3.2V17h5.7c3.2 0 5.3 1.9 5.3 4.9 0 1.8-.8 3.2-2.2 4l3 4.9h-3.7Zm-4.9-7H21c1.2 0 2.2-.8 2.2-2 0-1-1-1.8-2.2-1.8h-2.4v3.7ZM32.3 20v2.5h5.9v3h-6v2.3H39v3H29V17h10v3h-6.7Zm20.2 4c0 4-2.8 6.9-6.7 6.9h-5V17h5c3.9 0 6.7 2.8 6.7 6.9Zm-3.1 0c0-2.2-1.6-3.8-3.6-3.8h-2v7.6h2c2 0 3.6-1.7 3.6-3.8Zm8.2-6.9V31h-3.4V17h3.4Zm11.8 3h-3.6V31h-3V20.2h-3.5v-3h10v3ZM10.3 26h3.5c-.7 3-3.2 5-6.5 5-4 0-7-3-7-6.9 0-4 3-6.9 7-6.9 3.3 0 5.8 2 6.5 5h-3.5a3 3 0 0 0-3-1.9c-2.2 0-3.7 1.6-3.7 3.8 0 2.2 1.5 3.8 3.7 3.8a3 3 0 0 0 3-2Z"
            ></path>
            <path
              fill="#DD172F"
              fill-rule="evenodd"
              d="M2.7 34.2c-.2.1-.2.2-.2.5v.3l-.1.3-.1.3v.3l-.2.3v.4c-.1 0-.2.1-.2.3v.3l-.1.4v.4l-.1.4-.1.3v.3l-.2.2c0 .2-.3.6-.5.6l-.2.4v.3l.1.5v.5l-.1.2-.1.2v.3l-.1.3-.1.3v.3c-.1 0-.2.4-.2 1l.1 1.1v.1c0 .3.6.6 1 .6h.4v-.2l-.1-.3v-1.6l.1-.3.1-.3V43l.1-.3c0-.3 0-.4.2-.5l.1-.2c0-.2.1-.2.2 0l.3.2.2.1h.2v.1l.4.3.3.2.2.1.2.2s.2 0 .3.2l.3.2.5.5.6.5.3.3.6.6c0 .1.8.1.8 0h.9A3.7 3.7 0 0 0 9.9 44l.1-.2v-.2l.1.3.1.2v.2l.2.3.2.2c0 .5 1.4.8 1.7.4.2-.2.3-.2.5.1.4.3.6.3 1-.2l.5-.5.1-.3.1-.2.2-.3.3-.3s0-.2.2-.3l.2-.3.5-.6v.9c0 .2-.1.3-.2.3v.6c0 .7.2 1.1.6 1.1v.1h.8c.2 0 .8-.7.8-.8l.4-.4.3-.5.1-.1v-.1l.2-.2.2-.1v-.2l.1.2v.3c.1 0 .2.1.2.3v.6l.2.2v.2l.2.1h.1l.2.1.1.1h.3l.3.2h.4l.1-.1.2-.1.3.2c.4.5 1.2.4 1.2-.1 0 0 0-.2.2-.2l.1-.2c0-.1 0-.2.2-.3l.1-.2.3-.3h.1c0-.2.2-.4.3-.4v.4l.1.2.1.1v.2l.2.1v.2l.1.1v.1c0 .2.3.3.5.3l.1.1c0 .2 1.1 0 1.2 0l.2-.2c.2 0 .5-.3.5-.5l.1-.2v-.2c.1 0 .2-.1.2-.3v-.3l.1-.1-.2-.1h-.2l-.2.1H27l-.1.1-.2.1h-.2l-.2.2h-.6v-.8l.2-.3v-.3l.1-.2v-.1l.1-.2.1-.2v-.2l.2-.1v-.7l-.1-.2-.2-.1-.1-.1h-.2l-.2-.1c0-.2-.4-.1-.5 0v.2l-.2.1v.2l-.1.1v.2h-.1l-.1.2s0 .2-.2.3l-.1.2-.2.3-.2.2-.4.6-.5.5s-.3.4-.4.3l.1-.4.1-.2v-.2l.2-.1v-.2l.1-.1v-.2l.1-.1.1-.2v-.2c.1 0 .2 0 .2-.2v-.1l.1-.2v-.1l.1-.1.1-.2v-.1l.2-.2v-.4l.2-.2-.1-.2v-.2c0-.3-.9-.4-1.2-.1l-.2.3v.2l-.2.3-.2.2v.1l-.1.3c0 .2 0 .3-.2.4l-.1.4-.1.4-.2.3v.2l-.1.3-.1.3v.4c0 .4-.2.6-.4.6s-.4-.1-.4-.3v-.1l-.1-.5v-.5l.1-.8v-.8l-.1-.1c0-.2-.3-.5-.5-.5l-.4-.1h-.4l-.3.6-.4.4-.4.4-.3.4c0 .2-.4.5-.4.4l.1-.5v-.4l.2-.6c0-.7-.3-1.2-.6-1.2h-.2l-.2-.1h-.2l-.2-.1c-.2 0-.3.1-.3.2l-.4.5-.4.4-.1.2-.1.2-.3.3v-.3l.1-.1V41c.1 0 .2-.1.2-.3v-.2l.1-.4v-.4l.1-.2v-.1l-.1-.1c0-.2-.5-.7-.6-.7-.2 0-.5.4-.5.5l-.1.1v.2l-.1.3-.1.2v.3l-.2.2v.3l-.1.3v.2l-.1.3-.1.3v.2l-.1.1-.1.2v.2c-.1 0-.2.1-.2.3v.2l-.1.3v.2l-.1.2c0 .2-.2.4-.4.4l-.2.2h-.2l-.2.1h-.2V43c.1 0 .2-.2.2-.5V42l.1-.4v-.4l.1-.2.1-.3v-.3l.2-.2V40H12c0-.3-.2-.4-.5-.4l-.2-.1h-.5l-.2.2c0-.1-.5-.2-.5 0l-.4.3-.4.3-.6.6-.2.3-.2.3-.1.2-.2.2v.1l-.1.2v.1l-.2.1v.2l-.1.1v.2l-.1.1-.1.2v.1l-.2.2v.2l-.1.2v.1c0 .2 0 .2-.7-.4l-.6-.6s-.2 0-.3-.2l-.3-.2H5l-.2-.2-.2-.1-.2-.1-.3-.3-.3-.2s-.2 0-.3-.2l-.3-.2L3 41l-.3-.2-.2-.2.2-.2.4-.2.2-.1.3-.2.2-.1.2-.1.3-.2.2-.1.2-.1h.1l.2-.1v-.1h.2l.2-.2h.1l.2-.1h.1l.1-.2h.2l.1-.1.2-.1.3-.2.2-.1.2-.1h.1l.2-.1.2-.1h.2l.1-.2h.2l.1-.1c.3 0 .2-.6-.1-1-.2-.2-1.3-.3-1.3 0h-.2l-.2.1c-.1 0-.2 0-.3.2L6 37h-.1l-.2.2-.2.1-.3.2h-.4l-.2.2h-.1l-.2.1c-.2 0-.3.1-.3.2l-.2.2-.2.1c-.2.2-.2.2-.2 0v-.6l.2-.2V37l.1-.4v-.3l.1-.4.1-.7v-.7l-.1-.2c0-.2 0-.3-.2-.3h-.1c0-.2-.7-.1-.8 0Zm48.4.4-.1.1c-.1 0-.2 0-.3.2l-.2.3-.1.2-.2.3-.1.2-.1.1v.2l-.1.1-.1.1v.2c-.1 0-.2 0-.2.2v.2l-.1.3v.3l-.1.3-.1.3v.2l-.2.2v.6c-.1 0-.2 0-.2.2v.2l-.1.3v.3l-.1.3-.1.4v.2l-.2.2v.3l.1.2h.2l.2.1c.3 0 .3 0 .3-.2s0-.2.2-.2.2 0 .2-.2l.1-.1V41l.2-.2v-.2l.1-.1v-.2l.1-.1.1-.2.2-.2v-.4l.2-.1V39l.1-.3v-.2l.1-.2.1-.2c0-.1 0-.3.2-.3l.1-.3.1-.2.1-.2v-.2l.2-.2v-.2l.1-.2V36l.1-.1.1-.5c0-.5-.2-.8-.4-.8l-.2-.1h-.2Zm-18.7 0-.2.1h-.3v.2h-.2l-.1.1c-.4 0-.5.4-.2.7.1 0 .1.1 0 .1v.4c-.1 0-.2.1-.2.3v.4l-.1.3v.4l-.1.4-.1.3v.4c0 .2-.1.3-.2.3v.3l-.1.3v.4l-.1.3-.1.4v.4l-.1.3-.1.4v.4l-.2.4c-.2 0 0 1.4.2 1.6l.2.3v.2l.1.1.1.1v.1c0 .2.5.7.7.7l.6.1h.5l.1-.1.2-.2.2-.1.5-.5.2-.2.2-.4V44l.1-.3.1-.3V42l-.1-.2-.1-.2c0-.2-.3-.5-.4-.5l-.5-.5-.4-.4h-.1l.7-.7.1-.1h.1l.5-.4.4-.4.6-.6.4-.4.3-.3v-.1l.1-.2.1-.1v-.2l.1-.3c.2 0 .1-.8 0-.9l-.2-.2c0-.1-.2-.3-.4-.3h-.1l-.2-.1-.3-.1h-.2l-.2-.2h-1.8Zm2.1 1.2-.4.4-.5.5-1.2 1.3v-1.3l.1-.3c0-.3 0-.4.2-.4h.1l.3-.1.3-.1h1.1Zm2.5 1h-.2l-.3.1-.2.1-.1.3v.3l.1.2.1.2v.1c0 .3.4.5.9.5h.5V38l-.1-.5v-.2l-.3-.4c-.1-.2-.4-.2-.4-.1Zm2.9 1.5v.2c-.1 0-.2 0-.2.2v.2l-.1 1v.9l-.1 1.3a5 5 0 0 1-.1 1.3v.3l-.2.4v.1l-.1.2v.1l-.2.2-.2-.2v-.1l-.1-.2-.1-.1c-.1 0-.2 0-.2-.2v-.1l-.1-.4v-.5l-.2-.1v-.2c-.2 0-.4.2-.4.4l-.1.2-.6.6h-.1l-.2.1-.1-.2v-.2l.1-.2V43l.2-.3v-.3l.1-.2V42l.1-.4.1-.4c.2 0 0-.9-.2-1.2-.3-.3-1.1-.3-1.1 0h-.1v.3l-.1.2-.1.2v.3c-.1 0-.2 0-.2.2v.6c0 .2-.1.3-.2.3v.2l-.1.2v1.6l.1.2.1.1v.2h.1c0 .2.5.7.7.7h.2l.2.1h.2l.2-.1c.2 0 .5-.3.5-.5l.2-.1h.1c0-.2.4.2.4.3l.8.7.2.1.2.1h.7c.2 0 .4-.2.4-.4l.1-.2.1-.2V45l.2-.2v-.5l.1-.4v-1.5l.1-1.5h.1c0 .1.6.1.8 0 0-.1.1-1.6 0-1.6V39c0-.2-.1-.3-.2-.3l-.2-.1-.3-.1v-.1h-.2l-.2-.2h-.4l-.4.1Zm5.4 1.2-.2.1H45c0-.2-.4-.1-.5 0l-.2.2-.4.2c-.1.2-.3.3-.4.3v.1l-.4.4-.3.4v.2c-.2 0-.2.2-.2.2l-.1.2v.1l-.1.2-.1.1v.1l-.2.2v.1l-.1.2-.1.2-.2.4v.2l-.1.3-.1.3v.5c0 .2.5.7.7.7l.4.1h.2l.2-.1c.2 0 1-.7 1-1l.1-.1.2-.2.1-.2.1-.3.1-.1v.4c0 .3.1.5.2.5l.2.4.3.3.1.1.1.1h1.3l.2-.2.3-.2.4-.5c.3-.3.4-.6.1-.6h-.1l-.2.1-.3.1h-.1l-.1.1-.2.1h-.1l-.2.2h-.3l-.2.1h-.2v-1.1c.1 0 .2-.2.2-.5v-.4l.1-.4v-.5l.1-.3.1-.2v-.3c0-.2.1-.3.2-.3V40c0-.4-.2-.6-.6-.6l-.2-.1h-.4Zm-13 1.7.4.5.1.7v.7l-.1.2-.2.3-.1.2-.1.1-.4.3c-.4.4-.4.4-.4-.1v-.5l-.1-.2c0-.1 0-.2-.2-.2h-.1V43l.1-.4.1-.4V42c0-.2.1-.3.2-.3v-.2l.1-.3V41c0-.4.2-.4.7 0Zm16 3H48l-.2.1v.8l.2.2c.3.3 1 .2 1-.1v-.1l.1-.4v-.3l-.1-.2-.4-.1h-.5Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
