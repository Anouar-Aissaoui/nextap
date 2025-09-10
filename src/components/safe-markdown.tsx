import React from 'react';

const SafeMarkdown = ({ text }: { text: string }) => {
  const lines = text.split('\n');

  return (
    <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground space-y-4">
      {lines.map((line, index) => {
        if (line.startsWith('### ')) {
          return <h3 key={index}>{line.substring(4)}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index}>{line.substring(3)}</h2>;
        }
        if (line.trim() === '') {
          return null; // Skip empty lines
        }
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
};

export default SafeMarkdown;
