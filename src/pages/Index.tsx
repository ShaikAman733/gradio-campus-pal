import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load Botpress webchat script
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Botpress webchat with the provided config
      const configUrl = 'https://files.bpcontent.cloud/2025/11/16/02/20251116025224-2J0Y7YX0.json';
      
      // Create iframe for Botpress webchat
      const iframe = document.createElement('iframe');
      iframe.src = `https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=${encodeURIComponent(configUrl)}`;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      
      const container = document.getElementById('botpress-container');
      if (container) {
        container.appendChild(iframe);
      }
    };

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <header className="p-4 border-b border-border/60 bg-background/80 backdrop-blur-sm shrink-0">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
          Campus Mate
        </h1>
        <p className="text-center text-muted-foreground text-sm mt-1">Your AI Campus Assistant</p>
      </header>

      {/* Botpress Chat Area */}
      <div id="botpress-container" className="flex-1 w-full"></div>
    </div>
  );
};

export default Index;
