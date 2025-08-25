"use client"

export function LisbonTram() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tram body */}
      <rect
        x="40"
        y="100"
        width="220"
        height="60"
        rx="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw-slow"
        style={{
          strokeDasharray: "600",
          strokeDashoffset: "600",
        }}
      />
      
      {/* Windows */}
      <g className="animate-draw-slow" style={{ strokeDasharray: "200", strokeDashoffset: "200", animationDelay: "0.5s" }}>
        <rect x="60" y="110" width="30" height="20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="100" y="110" width="30" height="20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="140" y="110" width="30" height="20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="180" y="110" width="30" height="20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="220" y="110" width="30" height="20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </g>
      
      {/* Wheels */}
      <g className="animate-draw-slow" style={{ strokeDasharray: "150", strokeDashoffset: "150", animationDelay: "1s" }}>
        <circle cx="80" cy="170" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="220" cy="170" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
      </g>
      
      {/* Number 28 */}
      <text
        x="150"
        y="145"
        fontSize="16"
        fontWeight="bold"
        textAnchor="middle"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        className="animate-draw-slow"
        style={{
          strokeDasharray: "50",
          strokeDashoffset: "50",
          animationDelay: "1.5s"
        }}
      >
        28
      </text>
    </svg>
  )
}

export function Ponte25DeAbril() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 350 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main suspension cables */}
      <path
        d="M50 120 Q125 50 200 120 Q275 50 300 120"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw-slow"
        style={{
          strokeDasharray: "400",
          strokeDashoffset: "400",
        }}
      />
      
      {/* Towers */}
      <g className="animate-draw-slow" style={{ strokeDasharray: "200", strokeDashoffset: "200", animationDelay: "0.5s" }}>
        <line x1="125" y1="40" x2="125" y2="140" stroke="currentColor" strokeWidth="3"/>
        <line x1="275" y1="40" x2="275" y2="140" stroke="currentColor" strokeWidth="3"/>
      </g>
      
      {/* Bridge deck */}
      <line
        x1="20"
        y1="120"
        x2="330"
        y2="120"
        stroke="currentColor"
        strokeWidth="3"
        className="animate-draw-slow"
        style={{
          strokeDasharray: "300",
          strokeDashoffset: "300",
          animationDelay: "1s"
        }}
      />
      
      {/* Vertical cables */}
      <g className="animate-draw-slow" style={{ strokeDasharray: "300", strokeDashoffset: "300", animationDelay: "1.5s", opacity: "0.7" }}>
        <line x1="75" y1="120" x2="90" y2="80" stroke="currentColor" strokeWidth="1"/>
        <line x1="100" y1="120" x2="110" y2="70" stroke="currentColor" strokeWidth="1"/>
        <line x1="140" y1="120" x2="140" y2="60" stroke="currentColor" strokeWidth="1"/>
        <line x1="160" y1="120" x2="155" y2="65" stroke="currentColor" strokeWidth="1"/>
        <line x1="190" y1="120" x2="180" y2="70" stroke="currentColor" strokeWidth="1"/>
        <line x1="210" y1="120" x2="200" y2="75" stroke="currentColor" strokeWidth="1"/>
        <line x1="240" y1="120" x2="240" y2="65" stroke="currentColor" strokeWidth="1"/>
        <line x1="260" y1="120" x2="270" y2="70" stroke="currentColor" strokeWidth="1"/>
        <line x1="290" y1="120" x2="285" y2="75" stroke="currentColor" strokeWidth="1"/>
      </g>
    </svg>
  )
}

export function CasteloSaoJorge() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left tower */}
      <rect
        x="60"
        y="80"
        width="30"
        height="80"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw-slow"
        style={{
          strokeDasharray: "220",
          strokeDashoffset: "220",
        }}
      />
      
      {/* Right tower */}
      <rect
        x="210"
        y="70"
        width="30"
        height="90"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw-slow"
        style={{
          strokeDasharray: "240",
          strokeDashoffset: "240",
          animationDelay: "0.3s"
        }}
      />
      
      {/* Center wall */}
      <rect
        x="90"
        y="100"
        width="120"
        height="60"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw-slow"
        style={{
          strokeDasharray: "360",
          strokeDashoffset: "360",
          animationDelay: "0.6s"
        }}
      />
      
      {/* Gate */}
      <path
        d="M130 160 Q130 140 150 140 Q170 140 170 160"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw-slow"
        style={{
          strokeDasharray: "100",
          strokeDashoffset: "100",
          animationDelay: "0.9s"
        }}
      />
      
      {/* Battlements */}
      <g className="animate-draw-slow" style={{ strokeDasharray: "150", strokeDashoffset: "150", animationDelay: "1.2s" }}>
        <rect x="65" y="75" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="75" y="75" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="85" y="75" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        
        <rect x="215" y="65" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="225" y="65" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="235" y="65" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        
        <rect x="110" y="95" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="130" y="95" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="150" y="95" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="170" y="95" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="190" y="95" width="5" height="5" stroke="currentColor" strokeWidth="1" fill="none"/>
      </g>
    </svg>
  )
}