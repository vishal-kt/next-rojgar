/**
 * MOCK DATA — FOR DEMONSTRATION PURPOSES ONLY
 *
 * These generic examples are fictional placeholders, not current notices.
 * They contain no verified recruitment facts, dates, eligibility, or links.
 */

import type { Job, Result, AdmitCard, AnswerKey, LatestUpdate } from "@/types";

export const DEMO_NOTICE =
  "Fictional demo content only. These examples are not current, verified, or official recruitment notices.";

export const mockJobs: Job[] = [
  {
    id: "demo-job-1",
    title: "Sample graduate recruitment notice",
    slug: "sample-graduate-recruitment",
    organization: "Fictional example recruiting body",
    category: "Graduate roles",
    summary:
      "A fictional placeholder showing how a recruitment summary could appear. No real vacancy or eligibility details are provided.",
  },
  {
    id: "demo-job-2",
    title: "Sample technical recruitment notice",
    slug: "sample-technical-recruitment",
    organization: "Fictional example recruiting body",
    category: "Technical roles",
    summary:
      "A fictional placeholder for a technical role. Check official recruiting-body notices for authoritative information.",
  },
  {
    id: "demo-job-3",
    title: "Sample public service recruitment notice",
    slug: "sample-public-service-recruitment",
    organization: "Fictional example recruiting body",
    category: "Public service",
    summary:
      "A fictional listing used to demonstrate the layout. No dates, requirements, or application links are claimed.",
  },
];

export const mockResults: Result[] = [
  {
    id: "demo-result-1",
    title: "Sample examination result listing",
    slug: "sample-examination-result",
    organization: "Fictional example examination board",
    category: "Sample result",
  },
  {
    id: "demo-result-2",
    title: "Sample merit list update",
    slug: "sample-merit-list",
    organization: "Fictional example examination board",
    category: "Sample result",
  },
];

export const mockAdmitCards: AdmitCard[] = [
  {
    id: "demo-admit-1",
    title: "Sample examination admit card",
    slug: "sample-examination-admit-card",
    organization: "Fictional example examination board",
    category: "Sample admit card",
  },
  {
    id: "demo-admit-2",
    title: "Sample hall ticket listing",
    slug: "sample-hall-ticket",
    organization: "Fictional example examination board",
    category: "Sample admit card",
  },
];

export const mockAnswerKeys: AnswerKey[] = [
  {
    id: "demo-answer-key-1",
    title: "Sample answer key listing",
    slug: "sample-answer-key",
    organization: "Fictional example examination board",
    category: "Sample answer key",
  },
];

export const mockLatestUpdates: LatestUpdate[] = [
  {
    id: "demo-update-1",
    title: "Sample recruitment notice update",
    slug: "sample-recruitment-update",
    type: "job",
    summary: "Fictional example of how a recruitment update may be presented.",
    href: "/jobs",
  },
  {
    id: "demo-update-2",
    title: "Sample examination result update",
    slug: "sample-result-update",
    type: "result",
    summary: "Fictional example for the results section preview.",
    href: "/results",
  },
  {
    id: "demo-update-3",
    title: "Sample admit card update",
    slug: "sample-admit-card-update",
    type: "admit-card",
    summary: "Fictional example for the admit cards section preview.",
    href: "/admit-card",
  },
  {
    id: "demo-update-4",
    title: "Sample answer key update",
    slug: "sample-answer-key-update",
    type: "answer-key",
    summary: "Fictional example for the answer keys section preview.",
    href: "/answer-key",
  },
];
