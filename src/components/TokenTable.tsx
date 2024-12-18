interface Token {
  rank: number;
  name: string;
  icon: string;
  marketCap: string;
  raisedToken: string;
  progress: string;
}

interface TokenTableProps {
  tokens: Token[];
  isMobile: boolean;
}

export const TokenTable = ({ tokens, isMobile }: TokenTableProps) => {
  const getDisplayedTokens = () => {
    if (isMobile) {
      return tokens.map(token => ({
        ...token,
        marketCap: token.marketCap.replace('$', ''),
        progress: `${Math.round(parseFloat(token.progress))}%`
      }));
    }
    return tokens;
  };

  return (
    <div className="-mx-4 sm:mx-0">
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-xs md:text-sm">RANK</th>
              <th className="text-xs md:text-sm">TOKEN NAME</th>
              {!isMobile && (
                <>
                  <th className="text-xs md:text-sm">MARKET CAP</th>
                  <th className="text-xs md:text-sm">RAISED TOKEN</th>
                </>
              )}
              <th className="text-xs md:text-sm">PROGRESS</th>
            </tr>
          </thead>
          <tbody>
            {getDisplayedTokens().map((token) => (
              <tr key={token.rank} className="hover">
                <td className="text-xs md:text-sm">{token.rank}</td>
                <td className="text-xs md:text-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className="text-xl md:text-2xl">{token.icon}</span>
                    <span>{token.name}</span>
                  </div>
                </td>
                {!isMobile && (
                  <>
                    <td className="text-xs md:text-sm">{token.marketCap}</td>
                    <td className="text-xs md:text-sm">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-400" />
                        {token.raisedToken}
                      </div>
                    </td>
                  </>
                )}
                <td className="text-xs md:text-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    <progress 
                      className="progress progress-primary w-20 md:w-56" 
                      value={parseFloat(token.progress)} 
                      max="100"
                    />
                    <span>{token.progress}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 