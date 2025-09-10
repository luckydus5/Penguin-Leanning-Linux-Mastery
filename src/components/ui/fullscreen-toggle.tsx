import { useSearchParams } from 'react-router-dom';
import { Maximize, Minimize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCallback } from 'react';

export function FullscreenToggle({ className = "" }: { className?: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isFullscreen = searchParams.get('fullscreen') === 'true';

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      setSearchParams({});
    } else {
      setSearchParams({ fullscreen: 'true' });
    }
  }, [isFullscreen, setSearchParams]);

  return (
    <Button
      onClick={toggleFullscreen}
      variant="outline"
      size="sm"
      className={`fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 ${className}`}
      title={isFullscreen ? 'Exit Full Screen (F11)' : 'Enter Full Screen (F11)'}
    >
      {isFullscreen ? (
        <>
          <Minimize className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Exit Fullscreen</span>
        </>
      ) : (
        <>
          <Maximize className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Fullscreen</span>
        </>
      )}
    </Button>
  );
}
