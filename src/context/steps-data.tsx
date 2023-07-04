const highlighOdds = "bg-purpy text-white rounded drop-shadow-sm p-4";

export const steps = [
  {
    title: "Step I",
    description: "We're putting all ideas into a cup",
    mediaSrc: "solar:cup-paper-broken",
    mediaAlt: "Illustrated cup icon representing a container for ideas",
    mediaFirst: true,
  },
  {
    title: "Step II",
    description: "Drawing a project scope",
    mediaSrc: "solar:layers-minimalistic-broken",
    mediaAlt: "Illustrated notebook icon representing drawing",
    mediaFirst: false,
    className: `${highlighOdds}`,
  },
  {
    title: "Step III",
    description: "Creating development environment",
    mediaSrc: "solar:server-square-broken",
    mediaAlt: "Illustrated computer icon representing programming",
    mediaFirst: true,
  },
  {
    title: "Step IV",
    description: "Creating content and permissions",
    mediaSrc: "solar:users-group-two-rounded-broken",
    mediaAlt: "Illustrated lock icon representing locked content",
    mediaFirst: false,
    className: `${highlighOdds}`,
  },
  {
    title: "Step V",
    description: "Modifying SEO schemas for the whole platform",
    mediaSrc: "solar:object-scan-broken",
    mediaAlt: "Illustrated gear icon representing modification",
    mediaFirst: true,
  },
  {
    title: "Step VI",
    description: "Last round of reviews",
    mediaSrc: "solar:dialog-broken",
    mediaAlt: "Illustrated forward icon representing fast-track",
    mediaFirst: false,
    className: `${highlighOdds}`,
  },
  {
    title: "Step VII",
    description: "24h till platform release",
    mediaSrc: "solar:confetti-broken",
    mediaAlt: "Illustrated rocket icon representing finalization",
    mediaFirst: true,
    endBlock: true,
  },
];
