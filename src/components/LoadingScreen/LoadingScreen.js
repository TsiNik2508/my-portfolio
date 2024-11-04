import React, { useEffect, useState } from 'react';
import './LoadingScreen.scss';

const LoadingScreen = () => {
  const [displayedLines, setDisplayedLines] = useState([]);

  const codeLines = [
    `<span class="code__keyword">import</span> <span class="code__variable">React</span> <span class="code__keyword">from</span> <span class="code__string">"react"</span>;`,
    `<span class="code__keyword">import</span> <span class="code__variable">ProjectCard</span> <span class="code__keyword">from</span> <span class="code__string">"./ProjectCard"</span>;`,
    ``,
    `<span class="code__keyword">const</span> <span class="code__function">Portfolio</span> <span class="code__keyword">=</span> <span class="code__function">()</span> <span class="code__keyword">=&gt;</span> {`,
    `  <span class="code__keyword">const</span> <span class="code__variable">projects</span> <span class="code__keyword">=</span> [`,
    `    { <span class="code__variable">id</span>: <span class="code__number">1</span>, <span class="code__variable">name</span>: <span class="code__string">"Portfolio Website"</span>, <span class="code__variable">category</span>: <span class="code__string">"Web Development"</span> },`,
    `    { <span class="code__variable">id</span>: <span class="code__number">2</span>, <span class="code__variable">name</span>: <span class="code__string">"E-commerce Store"</span>, <span class="code__variable">category</span>: <span class="code__string">"Web Development"</span> },`,
    `    { <span class="code__variable">id</span>: <span class="code__number">3</span>, <span class="code__variable">name</span>: <span class="code__string">"Weather App"</span>, <span class="code__variable">category</span>: <span class="code__string">"Mobile App"</span> },`,
    `  ];`,
    ``,
    `  <span class="code__keyword">const</span> <span class="code__function">filteredProjects</span> <span class="code__keyword">=</span> <span class="code__function">projects.filter</span>(`,
    `    <span class="code__variable">project</span> <span class="code__keyword">=&gt;</span> <span class="code__variable">project.category</span> <span class="code__keyword">===</span> <span class="code__string">"Web Development"</span>`,
    `  );`,
    ``,
    `  <span class="code__keyword">return</span> (`,
    `    <span class="code__variable">&lt;div</span> <span class="code__keyword">className</span>=<span class="code__string">"portfolio"</span>&gt;`,
    `      <span class="code__comment">// Отображаем карточки проектов</span>`,
    `      {<span class="code__variable">filteredProjects.map</span>(<span class="code__variable">project</span> <span class="code__keyword">=&gt;</span> (`,
    `        <span class="code__variable">&lt;ProjectCard</span> <span class="code__keyword">key</span>=<span class="code__string">{project.id}</span> <span class="code__keyword">name</span>=<span class="code__string">{project.name}</span> /&gt;`,
    `      ))}`,
    `    &lt;/<span class="code__variable">div&gt;</span>`,
    `  );`,
    `};`,
    ``,
    `<span class="code__keyword">export default</span> <span class="code__variable">Portfolio</span>;`,
  ];

  useEffect(() => {
    let lineIndex = 0;

    const displayNextLine = () => {
      if (lineIndex < codeLines.length) {
        setDisplayedLines((prevLines) => [...prevLines, codeLines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(displayNextLine, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <pre className="loading-screen__code">
        {displayedLines.map((line, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </pre>
    </div>
  );
};

export default LoadingScreen;
