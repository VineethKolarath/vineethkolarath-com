export type Paper = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  abstract: string[];
  contents: string[];
  status: string;
  pdfUrl?: string; // add the link here when the paper is ready to download
};

export const papers: Paper[] = [
  {
    slug: "comradeship-architecture",
    title: "Comradeship Architecture",
    kind: "White paper",
    summary:
      "A framework for autonomous systems in mission-critical environments, where machines act as proactive partners.",
    abstract: [
      "Comradeship Architecture (CA) is a framework for autonomous systems in mission-critical environments. In it, machines act as proactive partners, and can voice what the paper calls Strategic Dissent.",
      "The paper introduces the Priority Command Layer (PCL), a five-tier structure for deciding who acts, and when.",
    ],
    contents: [
      "The Priority Command Layer, a five-tier structure",
      "A formal ethics framework",
      "Case studies in surgical robotics, aerial platforms and power grids",
      "A catalogue of threat models",
    ],
    status: "Publication in preparation",
  },
];

export function getPaper(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}