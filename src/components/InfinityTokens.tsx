import { useRef, useState, useEffect } from 'react';

interface Token {
  id: number;
  name: string;
  icon: string;
  price: string;
  change: string;
  trending: boolean;
}

interface InfinityTokensProps {
  tokens: Token[];
}

export const InfinityTokens = ({ tokens }: InfinityTokensProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstElementChild;
    if (!scrollContent) return;

    const clonedContent = scrollContent.cloneNode(true);
    scrollContainer.appendChild(clonedContent);

    let animationId: number;

    const animate = () => {
      if (!scrollContainer || isPaused) return;
      
      if (scrollContainer.scrollLeft >= scrollContent.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <div className="mb-6">
      <h2 className="text-lg md:text-xl font-bold mb-4">Infinity Tokens</h2>
      <div 
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="inline-flex gap-4">
          {tokens.map((token) => (
            <div 
              key={token.id} 
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow w-[300px] shrink-0"
            >
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{token.icon}</span>
                    <div>
                      <h3 className="font-bold whitespace-normal">{token.name}</h3>
                      <p className="text-sm opacity-70">Price: {token.price}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-success font-medium">{token.change}</span>
                    {token.trending && (
                      <div className="badge badge-primary badge-sm mt-1">Trending</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 