import { useState, useEffect } from "react";
import React from "react";
export function CodeBlock() {
  const [code, setCode] = useState("");

  useEffect(() => {
    const demoCode = `// Initialize Spotter AI
const spotter = await SpotterAI.load({
  apiKey: 'YOUR_API_KEY',
  region: 'us'
})

// Identify your visitor
const visitorId = await spotter.identify()

// Use the visitorId for fraud prevention
console.log('Visitor ID:', visitorId)
`;

    let i = 0;
    const typeCode = () => {
      if (i < demoCode.length) {
        setCode(demoCode.substring(0, i + 1));
        i++;
        setTimeout(typeCode, 30);
      }
    };

    typeCode();

    return () => {
      i = demoCode.length;
    };
  }, []);

  return (
    <div className="bg-gray-50 p-4 rounded-md font-mono text-sm text-left overflow-x-auto">
      <pre className="whitespace-pre-wrap">{code}</pre>
      <div className="h-4 w-2 inline-block bg-gray-400 animate-pulse"></div>
    </div>
  );
}
