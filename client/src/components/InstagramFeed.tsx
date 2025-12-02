import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Call Instagram's embed function if it exists
    if ((window as any).instgrm) {
      (window as any).instgrm.Embed.process();
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://www.instagram.com/festivalcristofoli/embed"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        allow="encrypted-media"
        title="Festival Cristófoli Instagram Feed"
        className="rounded-lg shadow-lg"
        style={{ background: 'transparent' }}
      ></iframe>
    </div>
  );
}
