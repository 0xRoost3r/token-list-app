import { ConnectButton } from '@rainbow-me/rainbowkit';

interface HeaderProps {
  isMobile: boolean;
  onCreateClick: () => void;
}

export const Header = ({ isMobile, onCreateClick }: HeaderProps) => {
  return (
    <header className="bg-base-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="navbar min-h-14 md:min-h-16">
          <div className="flex-1">
            <a className="text-lg md:text-xl font-bold">TokenList</a>
          </div>
          <div className="flex-none gap-2 md:gap-4">
            {!isMobile && (
              <button 
                className="btn btn-primary btn-sm md:btn-md"
                onClick={onCreateClick}
              >
                Create Token
              </button>
            )}
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
}; 