import { useSearchParams } from 'react-router-dom';

export function useFullscreen() {
  const [searchParams] = useSearchParams();
  const isFullscreen = searchParams.get('fullscreen') === 'true';
  
  // Return container classes based on fullscreen mode
  const getContainerClasses = (defaultClasses = "max-w-6xl mx-auto p-8") => {
    if (isFullscreen) {
      return "max-w-none mx-0 px-4 sm:px-6";
    }
    return defaultClasses;
  };

  // Return section classes with reduced spacing in fullscreen
  const getSectionClasses = (defaultClasses = "py-12 px-8") => {
    if (isFullscreen) {
      return "py-4 px-2 sm:px-4";
    }
    return defaultClasses;
  };

  // Return header classes with reduced spacing
  const getHeaderClasses = (defaultClasses = "text-center mb-12") => {
    if (isFullscreen) {
      return "text-center mb-6";
    }
    return defaultClasses;
  };

  // Return full-width classes (removes all centering and max-width)
  const getFullWidthClasses = (defaultClasses = "max-w-4xl mx-auto") => {
    if (isFullscreen) {
      return "max-w-none mx-0 w-full";
    }
    return defaultClasses;
  };

  return {
    isFullscreen,
    getContainerClasses,
    getSectionClasses,
    getHeaderClasses,
    getFullWidthClasses,
  };
}
