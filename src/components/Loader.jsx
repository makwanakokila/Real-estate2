// import React, { useEffect, useState } from 'react';

// const Loader = ({ onComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = [
//     "Sketching blueprints...",
//     "Drawing foundations...",
//     "Outlining structures...",
//     "Adding architectural details...",
//     "Completing the skyline..."
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => onComplete(), 500);
//           return 100;
//         }
//         return prev + 0.8;
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   useEffect(() => {
//     const stepIndex = Math.floor(progress / 20);
//     setCurrentStep(Math.min(stepIndex, steps.length - 1));
//   }, [progress]);

//   const getLineOpacity = (lineIndex, totalLines = 300) => {
//     const lineProgress = (progress / 100) * totalLines;
//     return lineProgress >= lineIndex ? 1 : 0;
//   };

//   const buildings = [
//     // x, height, type
//     { x: 0, h: 40, type: 'flat' },
//     { x: 50, h: 80, type: 'antenna' },
//     { x: 100, h: 120, type: 'grid' },
//     { x: 150, h: 180, type: 'antenna' },
//     { x: 200, h: 100, type: 'gable' },
//     { x: 250, h: 120, type: 'triple-peak' },
//     { x: 320, h: 140, type: 'flat' },
//     { x: 370, h: 160, type: 'grid' },
//     { x: 420, h: 200, type: 'spire' },
//     { x: 470, h: 140, type: 'gable' },
//     { x: 520, h: 130, type: 'double' },
//     { x: 570, h: 180, type: 'antenna' },
//     { x: 620, h: 80, type: 'flat' },
//   ];

//   const Building = ({ x, h, index, type }) => {
//     const y = 250 - h;
//     const elements = [];

//     // Main body
//     elements.push(
//       <rect
//         key="body"
//         x={x} y={y} width="40" height={h}
//         fill="none" stroke="#fff" strokeWidth="2"
//         opacity={getLineOpacity(index)}
//       />
//     );

//     if (type === 'gable') {
//       elements.push(
//         <polygon
//           key="roof"
//           points={`${x},${y} ${x + 20},${y - 20} ${x + 40},${y}`}
//           fill="none" stroke="#fff" strokeWidth="2"
//           opacity={getLineOpacity(index + 1)}
//         />
//       );
//     }

//     if (type === 'triple-peak') {
//       elements.push(
//         <polygon
//           key="roof"
//           points={`
//             ${x},${y} ${x + 10},${y - 20} ${x + 20},${y}
//             ${x + 20},${y} ${x + 30},${y - 20} ${x + 40},${y}
//           `}
//           fill="none" stroke="#fff" strokeWidth="2"
//           opacity={getLineOpacity(index + 1)}
//         />
//       );
//     }

//     if (type === 'antenna') {
//       elements.push(
//         <line
//           key="antenna"
//           x1={x + 20} y1={y - 20} x2={x + 20} y2={y - 50}
//           stroke="#fff" strokeWidth="2"
//           opacity={getLineOpacity(index + 1)}
//         />,
//         <rect
//           key="antenna-base"
//           x={x + 10} y={y - 20} width="20" height="20"
//           fill="none" stroke="#fff" strokeWidth="2"
//           opacity={getLineOpacity(index + 2)}
//         />
//       );
//     }

//     if (type === 'spire') {
//       elements.push(
//         <polygon
//           key="spire-base"
//           points={`${x},${y} ${x + 20},${y - 30} ${x + 40},${y}`}
//           fill="none" stroke="#fff" strokeWidth="2"
//           opacity={getLineOpacity(index + 1)}
//         />,
//         <line
//           key="spire-top"
//           x1={x + 20} y1={y - 30} x2={x + 20} y2={y - 50}
//           stroke="#fff" strokeWidth="2"
//           opacity={getLineOpacity(index + 2)}
//         />
//       );
//     }

//     if (type === 'grid') {
//       for (let row = 0; row < 5; row++) {
//         for (let col = 0; col < 2; col++) {
//           elements.push(
//             <rect
//               key={`grid-${row}-${col}`}
//               x={x + 8 + col * 12} y={y + 10 + row * 20}
//               width="8" height="15"
//               fill="none" stroke="#fff" strokeWidth="1"
//               opacity={getLineOpacity(index + 1 + row)}
//             />
//           );
//         }
//       }
//     }

//     if (type === 'double') {
//       elements.push(
//         <rect
//           key="second"
//           x={x + 5} y={y + 30} width="30" height={h - 30}
//           fill="none" stroke="#fff" strokeWidth="2"
//           opacity={getLineOpacity(index + 1)}
//         />
//       );
//     }

//     return <g>{elements}</g>;
//   };

//   return (
//     <div className="fixed inset-0 bg-[#0B1120] flex items-center justify-center z-50 overflow-hidden">
//       <div className="text-center relative">
//         {/* Background Grid */}
//         <div className="absolute inset-0 opacity-5">
//           <svg width="1600" height="400" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <defs>
//               <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
//                 <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#ffffff" strokeWidth="0.5" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </svg>
//         </div>

//         <div className="mb-8 relative z-10">
//           <svg
//             width="1600"
//             height="280"
//             viewBox="0 0 1600 280"
//             className="mx-auto"
//           >
//             <line
//               x1="0" y1="250" x2="1600" y2="250"
//               stroke="#ffffff" strokeWidth="2"
//               opacity={getLineOpacity(1)}
//               className="transition-opacity duration-200"
//             />

//             {/* Render buildings */}
//             {buildings.map((b, i) => (
//               <Building key={i} x={b.x} h={b.h} index={i * 5 + 5} type={b.type} />
//             ))}
//           </svg>

//           {/* Text step below */}
//           <p className="text-white mt-4 text-xl">{steps[currentStep]}</p>
//         </div>

        
        
//       </div>
      
//     </div>
//   );
// };

// export default Loader;


import React, { useEffect, useState, useMemo } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  const steps = [
    "Sketching blueprints...",
    "Drawing foundations...",
    "Outlining structures...",
    "Adding architectural details...",
    "Completing the skyline..."
  ];

  const screenWidth = 1600;
  const buildingWidth = 40;
  const spacing = 10;
  const buildingTypes = ['flat', 'gable', 'triple-peak', 'double', 'antenna', 'spire', 'grid'];

  // ✅ UseMemo to persist generated buildings
  const buildings = useMemo(() => {
    const totalBuildings = Math.ceil(screenWidth / (buildingWidth + spacing));
    let x = 0;

    return Array.from({ length: totalBuildings }).map((_, index) => {
      const type = buildingTypes[index % buildingTypes.length];
      const height = 60 + Math.floor(Math.random() * 150);
      const building = { x, h: height, type };
      x += buildingWidth + spacing;
      return building;
    });
  }, []);

  // ✅ Animation step tracking
  let currentBaseAnimationStepCounter = 1;
  let maxAnimationStepReached = 0;

  const buildingsWithAnimationSteps = buildings.map(b => {
    const buildingInfo = { ...b, baseAnimationStep: currentBaseAnimationStepCounter };
    let stepsForThisBuilding = 1;

    switch (b.type) {
      case 'gable':
      case 'triple-peak':
      case 'double':
        stepsForThisBuilding += 1;
        break;
      case 'antenna':
      case 'spire':
        stepsForThisBuilding += 2;
        break;
      case 'grid':
        stepsForThisBuilding += 1;
        break;
    }

    stepsForThisBuilding += 0.5;
    currentBaseAnimationStepCounter += stepsForThisBuilding;
    maxAnimationStepReached = Math.max(maxAnimationStepReached, currentBaseAnimationStepCounter);
    return buildingInfo;
  });

  const totalAnimationSteps = maxAnimationStepReached;

  const getLineOpacity = (animationStep) => {
    const threshold = (progress / 100) * totalAnimationSteps;
    return animationStep <= threshold ? 1 : 0;
  };

  const Building = ({ x, h, baseAnimationStep, type }) => {
    const y = 250 - h;
    const elements = [];
    let currentAnimationStep = baseAnimationStep;

    elements.push(
      <rect key="body" x={x} y={y} width="40" height={h}
        fill="none" stroke="#fff" strokeWidth="2"
        opacity={getLineOpacity(currentAnimationStep)} />
    );
    currentAnimationStep++;

    if (type === 'gable') {
      elements.push(<polygon key="roof" points={`${x},${y} ${x + 20},${y - 20} ${x + 40},${y}`}
        fill="none" stroke="#fff" strokeWidth="2"
        opacity={getLineOpacity(currentAnimationStep)} />);
      currentAnimationStep++;
    }

    if (type === 'triple-peak') {
      elements.push(<polygon key="roof" points={`
        ${x},${y} ${x + 10},${y - 20} ${x + 20},${y}
        ${x + 20},${y} ${x + 30},${y - 20} ${x + 40},${y}`}
        fill="none" stroke="#fff" strokeWidth="2"
        opacity={getLineOpacity(currentAnimationStep)} />);
      currentAnimationStep++;
    }

    if (type === 'antenna') {
      elements.push(<line key="antenna-line" x1={x + 20} y1={y - 20} x2={x + 20} y2={y - 50}
        stroke="#fff" strokeWidth="2"
        opacity={getLineOpacity(currentAnimationStep)} />);
      currentAnimationStep++;
      elements.push(<rect key="antenna-base" x={x + 10} y={y - 20} width="20" height="20"
        fill="none" stroke="#fff" strokeWidth="2"
        opacity={getLineOpacity(currentAnimationStep)} />);
      currentAnimationStep++;
    }

    if (type === 'spire') {
      elements.push(<polygon key="spire-base" points={`${x},${y} ${x + 20},${y - 30} ${x + 40},${y}`}
        fill="none" stroke="#fff" strokeWidth="2"
        opacity={getLineOpacity(currentAnimationStep)} />);
      currentAnimationStep++;
      elements.push(<line key="spire-top" x1={x + 20} y1={y - 30} x2={x + 20} y2={y - 50}
        stroke="#fff" strokeWidth="2"
        opacity={getLineOpacity(currentAnimationStep)} />);
      currentAnimationStep++;
    }

    if (type === 'grid') {
      const gridStartStep = currentAnimationStep;
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 2; col++) {
          elements.push(
            <rect key={`grid-${row}-${col}`} x={x + 8 + col * 12} y={y + 10 + row * 20}
              width="8" height="15" fill="none" stroke="#fff" strokeWidth="1"
              opacity={getLineOpacity(gridStartStep)} />
          );
        }
      }
      currentAnimationStep++;
    }

    if (type === 'double') {
      elements.push(<rect key="second" x={x + 5} y={y + 30} width="30" height={h - 30}
        fill="none" stroke="#fff" strokeWidth="2"
        opacity={getLineOpacity(currentAnimationStep)} />);
      currentAnimationStep++;
    }

    return <g>{elements}</g>;
  };

useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => {
      const next = prev + 0.8;

      if (next >= 100) {
        clearInterval(interval);

        // Wait until the last building animation finishes
        const totalLines = 300; // Matches getLineOpacity's totalLines
        const delayPerStep = 50; // ms per progress increment (matches interval)
        const totalAnimationTime = (totalLines * delayPerStep);

        setTimeout(() => {
          onComplete(); // 🔚 now safely move to main page
        }, totalAnimationTime + 300); // Add buffer delay

        return 100;
      }

      return next;
    });
  }, 50);

  return () => clearInterval(interval);
}, [onComplete]);

  return (
    <div   className={`fixed inset-0 bg-[#0B1120] flex items-center justify-center z-50 overflow-hidden transition-opacity duration-700 ${progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center relative">
        <div className="absolute inset-0 opacity-5">
          <svg width="1600" height="400" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <defs>
              <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="mb-8 relative z-10">
          <svg width="1600" height="280" viewBox="0 0 1600 280" className="mx-auto">
            <line x1="0" y1="250" x2="1600" y2="250" stroke="#ffffff" strokeWidth="2" opacity={getLineOpacity(0)} />
            {buildingsWithAnimationSteps.map((b, i) => (
              <Building key={i} x={b.x} h={b.h} baseAnimationStep={b.baseAnimationStep} type={b.type} />
            ))}
          </svg>
          <p className="text-white mt-4 text-xl">{steps[Math.floor((progress / 100) * steps.length)]}</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
