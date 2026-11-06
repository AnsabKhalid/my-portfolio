// Flow diagram for projects that have no screenshot: numbered stages joined by dotted links.
// Tall layout (20:17) zig-zags down for cards; wide layout (20:11) for a case-study banner
// uses one zig-zag row for up to 4 steps and two rows of larger boxes beyond that.
type Node = { s: string; x: number; y: number };

export default function Schematic({ steps, label, wide = false }: { steps: string[]; label: string; wide?: boolean }) {
  const W = wide ? 2000 : 1000;
  const H = wide ? 1100 : 850;
  const n = steps.length;
  const twoRows = wide && n > 4;
  const cols = twoRows ? Math.ceil(n / 2) : n;
  const nodeH = wide ? 124 : 96;
  const nodeW = wide ? (twoRows ? (W - 160 - (cols - 1) * 90) / cols : 340) : 440;
  const font = wide ? (twoRows ? 40 : 36) : 34;
  const id = `dots-${label.replace(/\W/g, "")}-${wide ? "w" : "t"}`;

  const nodes: Node[] = steps.map((s, i) => {
    if (twoRows) {
      const row = i < cols ? 0 : 1, col = row ? i - cols : i;
      return { s, x: 80 + col * (nodeW + 90), y: row ? 680 : 400 };
    }
    if (wide) {
      const gap = (W - 160 - nodeW * n) / Math.max(1, n - 1);
      return { s, x: 80 + i * (nodeW + gap), y: i % 2 ? 610 : 370 };
    }
    const gap = (H - 180 - nodeH * n) / Math.max(1, n - 1);
    return { s, x: i % 2 ? 390 : 170, y: 120 + i * (nodeH + gap) };
  });

  const link = (a: Node, b: Node) => {
    if (wide && a.y === b.y) {
      const y = a.y + nodeH / 2;
      return `M${a.x + nodeW} ${y} L${b.x} ${y}`;
    }
    if (wide && !twoRows) {
      const x1 = a.x + nodeW, y1 = a.y + nodeH / 2, x2 = b.x, y2 = b.y + nodeH / 2, mx = (x1 + x2) / 2;
      return `M${x1} ${y1} C${mx + 60} ${y1}, ${mx - 60} ${y2}, ${x2} ${y2}`;
    }
    // vertical hop: down the tall layout, or from the end of row one back to the start of row two
    const x1 = a.x + nodeW / 2, y1 = a.y + nodeH, x2 = b.x + nodeW / 2, y2 = b.y, my = (y1 + y2) / 2;
    return `M${x1} ${y1} C${x1} ${my + 40}, ${x2} ${my - 40}, ${x2} ${y2}`;
  };

  return (
    <svg className="schema" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label={`${label}: ${steps.join(" → ")}`}>
      <defs>
        <pattern id={id} width="32" height="32" patternUnits="userSpaceOnUse">
          <circle className="grid-dot" cx="2" cy="2" r="2" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill={`url(#${id})`} />
      {wide && <text className="title" x={80} y={twoRows ? 300 : 240} style={{ fontSize: 30 }}>{label.toUpperCase()}</text>}
      {nodes.slice(1).map((b, i) => <path key={i} className="link" d={link(nodes[i], b)} />)}
      {nodes.map((nd, i) => (
        <g key={nd.s}>
          <rect className={`node${i === n - 1 ? " last" : ""}`} x={nd.x} y={nd.y} width={nodeW} height={nodeH} rx="22" />
          <text className="num" x={nd.x + 28} y={nd.y + nodeH / 2 + 8} style={wide ? { fontSize: 26 } : undefined}>{String(i + 1).padStart(2, "0")}</text>
          <text className="lbl" x={nd.x + (wide ? 84 : 78)} y={nd.y + nodeH / 2 + 12} style={{ fontSize: font }}>{nd.s}</text>
        </g>
      ))}
    </svg>
  );
}
