import { renderMermaidSVG } from 'beautiful-mermaid';

const chart = `graph TD\nA[One] --> B[Two]`;

try {
  const svg = renderMermaidSVG(chart, { interactive: true });
  console.log('SVG length:', svg.length);
  console.log(svg.slice(0, 400));
} catch (err) {
  console.error('render error:');
  console.error(err);
  process.exit(1);
}
