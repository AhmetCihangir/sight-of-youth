import { motion } from 'framer-motion';
import React from 'react'

const iconBlue = {
  hidden: {
    pathLength: 0,
    opacity : 0,
    fill : "rgba(16, 15, 67, 0)"
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill : "rgba(16, 15, 67, 1)",
  }
}

const iconPink = {
  hidden: {
    pathLength: 0,
    opacity : 0,
    fill : "rgba(233, 6, 137, 0)"

  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill : "rgba(233, 6, 137, 1)"
  }
}

const Logo = ({classes,shadowClass}) => {

  return (
    <motion.svg
      width="540"
      height="542"
      viewBox="0 0 540 542"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        filter : "0"
      }}
      animate={ shadowClass && {
        filter : "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"
      } }
      transition={shadowClass && {
        filter : { duration : 1, delay: 2.3 }
      }}
      className={` ${classes} `}
    >
      <motion.path
        d="M454.627 298.908C456.174 293.751 457.111 287.156 457.368 281.951C455.112 284.479 452.034 288.355 446.964 295.048L446.953 295.063L446.941 295.078C424.814 324.107 399.356 353.319 373.865 378.913C340.105 412.874 318.256 430.453 293.925 441.909L293.906 441.918L293.886 441.927C281.964 447.491 273.768 449.5 261.7 449.5C230.552 449.5 200.817 434.974 179.467 410.202C175.699 405.907 171.262 400.313 169.372 397.542L169.324 397.471L169.277 397.4C167.424 394.601 164.728 391.311 162.026 388.501C160.693 387.114 159.475 385.965 158.481 385.125C157.608 384.387 157.192 384.129 157.195 384.123C157.195 384.123 157.196 384.123 157.199 384.124L157.123 384.085C157.123 384.085 157.123 384.085 157.123 384.085C157.022 385.245 156.988 386.664 157.052 388.26C157.203 392.008 157.853 395.82 158.75 398.523C162.685 410.136 172.37 426.206 185.395 442.634C198.293 458.901 213.645 474.483 228.002 485.301C232.411 488.595 239.279 492.735 246.281 496.366C253.513 500.118 259.58 502.643 262.5 503.365L262.516 503.369L262.532 503.373C277.899 507.215 296.932 501.536 326.852 475.82L326.855 475.818C356.814 450.084 396.442 401.872 426.616 353.85L426.619 353.845C444.272 325.778 450.219 313.753 454.617 298.941L454.622 298.925L454.627 298.908Z"
        stroke="#E90689"
        stroke-width="25"
        variants={iconPink}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut",delay:.2 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1],delay:1.2 },
          pathLength : { duration : 2 , delay : .5 }
        }}
      />
      <motion.path
        d="M265.5 29.6C258.3 33.3 253 41 251 50.8C250.4 53.4 248.9 63.4 247.5 73C246.2 82.6 243.5 101.3 241.6 114.5C239.7 127.7 236.9 147 235.5 157.5C234 167.9 232.1 178.3 231.1 180.5C227.3 189 222.5 190 217.9 183.3C216.5 181.2 212.1 171.2 208 161C199.9 140.5 188.2 114.6 182.5 104.4C178.1 96.6 172.9 90.5 168.7 88.3C164.3 86.1 157.8 86.3 154.2 88.8C145.7 94.9 145.2 106.2 151 161C154.3 191.4 155.1 201.1 155.7 216.2L156.3 232.8L153.2 235.9C149.7 239.5 145.5 240 141.2 237.3C139.7 236.4 130.2 227.3 120 216.9C108.6 205.3 99.9 197.4 97.3 196.1C92 193.5 85.5 193.4 81.4 195.9C73.1 200.9 72.9 212.4 80.7 235C86 250.2 94.9 271.3 100.5 281.5C102.3 284.8 105.6 291 107.8 295.2C113.3 305.6 123.9 321.8 128.6 327C135.1 334.2 140.4 337 147.5 337C152.3 337 154.5 336.5 157.1 334.7C161.5 331.8 166.3 323.7 167.9 316.6C173.7 290.5 192.3 267 218.3 252.6C243.6 238.6 281.4 238.6 306.8 252.6C331.7 266.4 346.8 284 355.1 308.6L358.3 318.2L363.5 317.8C377.4 316.6 387.3 306.5 392.8 287.5C398 269.5 404.5 232.6 408.5 198C411 175.5 414 135 414 122.2C414 102 407.3 91.4 396 93.7C390.6 94.7 384.1 102.6 374.6 119.6C352.1 159.7 344.3 171.7 334.5 181.6C323.7 192.6 318.3 192.5 313.4 181.3C308.3 169.8 306.4 157.8 300.5 99C296.4 57.4 292 40.6 283.5 33.1C277.4 27.7 271.3 26.6 265.5 29.6Z"
        stroke="#100F43"
        stroke-width="25"
        variants={iconBlue}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut",delay:.2 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1],delay:1.2 },
          pathLength : { duration : 2 , delay : .5 }
        }}
      />
      <motion.path
        d="M225.5 285.9C220.9 287 217.9 288.8 213.2 293.4C201.4 304.6 200.8 322 211.7 335.6C213.5 337.9 215 340.1 215 340.6C215 341.1 213.6 342.4 212 343.4C208.3 345.5 204.4 351.5 203.5 356.3C202.5 361.3 206.3 368.8 213.7 377C221 384.9 227.2 388.3 235.7 388.8C244.2 389.4 247.7 388.6 254.4 384.5L260.1 381.1L264.6 384.5C271.9 390.1 279 390.4 286.2 385.4C291.6 381.6 293 377.2 293 363.2C293.1 356.3 293.6 350.4 294.3 348.8C295 347.4 301.4 339.3 308.5 331C326.8 309.5 326.5 310 326.5 302.1C326.5 294.2 324.1 290.2 317.2 286.9C312.2 284.4 304.7 284.6 300.6 287.3C299.2 288.2 292.8 295.1 286.4 302.5C272.8 318.3 275.3 318.2 263.3 303.3C255.2 293.2 248.6 287.8 242.5 286.1C238.1 284.9 230.1 284.8 225.5 285.9ZM242.6 297.3C246.3 299.3 255 308.6 263.5 319.6C268.5 326 272.8 330 274.9 330C276 330 277.9 328.7 279.2 327.1C280.5 325.6 287 317.7 293.8 309.6C305.2 296.1 306.4 295 309.5 295C313.1 295 317 298.6 317 302C317 304.5 312.2 310.9 299.2 326.2C292.9 333.5 287 341.3 286.1 343.5C284.8 346.4 284.1 351.3 283.8 361C283.2 374 283.1 374.5 280.6 376.7C277.5 379.3 276.2 379.5 272.6 377.8C269.4 376.4 269.3 375.9 268.5 363.5C267.5 347.4 266.6 345.6 250.2 326.4C248.7 324.6 245.9 321.3 244 318.9C239.3 313.1 236 310 234.4 310C232.6 310 229 313.6 229 315.4C229 316.2 234.8 323.9 242 332.4C249.1 341 255.6 349.3 256.5 350.9C258.8 355.4 258.4 363.7 255.7 368.4C250.2 378.2 239.3 381.7 229.5 377C223 373.9 214 362.6 214 357.7C214 353.6 216.8 351 221.2 351C223.3 351 225.5 352.5 230.1 357.5C236.6 364.3 238.2 365 241.2 362.3C244.8 359 243.7 356.9 230 341.5C216.4 326.1 214 322 214 314.4C214 308.9 214.4 307.6 217.3 303.8C223.9 295.2 233.9 292.6 242.6 297.3Z"
        fill="#100F43"
        variants={iconBlue}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut",delay:.3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1],delay:1.2 }
        }}
      />
    </motion.svg>
  );
}

export default Logo
