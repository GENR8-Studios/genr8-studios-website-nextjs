import { useState, useEffect } from "react";

// Custom hook to determine if the current viewport matches a given media query.
const useMediaQuery = (query: string): boolean => {
  // State to track whether the current viewport matches the media query.
  const [matches, setMatches] = useState<boolean>(false);

  // Effect hook to handle changes in the viewport size and update matches state accordingly.
  useEffect(
    () => {
      // Create a MediaQueryList object based on the provided query.
      const media = window.matchMedia(query);

      // If the matches state is different from the media query result, update the state.
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      // Define a listener function to update matches state when the viewport size changes.
      const listener = () => setMatches(media.matches);

      // Attach the listener to the window resize event.
      window.addEventListener("resize", listener);

      // Clean up the listener when the component unmounts or when the query or matches state changes.
      return () => window.removeEventListener("resize", listener);
    },
    // Re-run the effect when matches state or query changes.
    [matches, query]
  );

  // Return the current matches state, indicating whether the viewport matches the provided media query.
  return matches;
};

export default useMediaQuery;
