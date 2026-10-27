/**
 * MOCK DATA — FOR DEMONSTRATION PURPOSES ONLY
 *
 * This data is entirely fictional and does not represent real government
 * vacancies, deadlines, eligibility criteria, or official information.
 * Do not rely on this data for any real-world decisions.
 */

import type { Job, Result, AdmitCard, AnswerKey, LatestUpdate } from "@/types";

export const DEMO_NOTICE =
  "⚠️ This is demo content for development purposes. It does not represent real government notifications.";

export const mockJobs: Job[] = [
  {
    id: "demo-1",
    title: "Sample — Staff Selection Commission Combined Graduate Level Exam 2025",
    slug: "demo-ssc-cgl-2025",
    organization: "Staff Selection Commission (Demo)",
    category: "ssc",
    summary:
      "This is a sample listing for demonstration purposes only. The SSC CGL examination is a popular competitive exam for various Group B and Group C posts.",
    vacancies: "Demo — Not real vacancy count",
    qualification: "Demo — Graduation from recognized university",
    lastDate: "2025-12-31",
    postedDate: "2025-10-15",
    status: "active",
    location: "All India (Demo)",
    ageLimit: "Demo — 18-32 years",
    applicationFee: "Demo — ₹100",
  },
  {
    id: "demo-2",
    title: "Sample — Railway Recruitment Board NTPC 2025",
    slug: "demo-rrb-ntpc-2025",
    organization: "Railway Recruitment Board (Demo)",
    category: "railway",
    summary:
      "This is a sample listing for demonstration purposes only. RRB NTPC covers Non-Technical Popular Categories posts.",
    vacancies: "Demo — Not real vacancy count",
    qualification: "Demo — 12th Pass / Graduation",
    lastDate: "2025-11-30",
    postedDate: "2025-10-10",
    status: "active",
    location: "All India (Demo)",
    ageLimit: "Demo — 18-33 years",
    applicationFee: "Demo — ₹250",
  },
  {
    id: "demo-3",
    title: "Sample — UPSC Civil Services Examination 2025",
    slug: "demo-upsc-cse-2025",
    organization: "Union Public Service Commission (Demo)",
    category: "upsc",
    summary:
      "This is a sample listing for demonstration purposes only. UPSC CSE is conducted for IAS, IPS, and other All India Services.",
    vacancies: "Demo — Not real vacancy count",
    qualification: "Demo — Graduation from recognized university",
    lastDate: "2025-11-15",
    postedDate: "2025-10-01",
    status: "active",
    location: "All India (Demo)",
    ageLimit: "Demo — 21-32 years",
    applicationFee: "Demo — ₹100",
  },
  {
    id: "demo-4",
    title: "Sample — IBPS Clerk Recruitment 2025",
    slug: "demo-ibps-clerk-2025",
    organization: "Institute of Banking Personnel Selection (Demo)",
    category: "banking",
    summary:
      "This is a sample listing for demonstration purposes only. IBPS Clerk recruitment for clerical cadre positions in public sector banks.",
    vacancies: "Demo — Not real vacancy count",
    qualification: "Demo — Graduation from recognized university",
    lastDate: "2025-12-15",
    postedDate: "2025-10-20",
    status: "active",
    location: "All India (Demo)",
    ageLimit: "Demo — 20-28 years",
    applicationFee: "Demo — ₹175",
  },
  {
    id: "demo-5",
    title: "Sample — Indian Army Agniveer Recruitment Rally 2025",
    slug: "demo-army-agniveer-2025",
    organization: "Indian Army (Demo)",
    category: "defence",
    summary:
      "This is a sample listing for demonstration purposes only. Agniveer recruitment for various soldier categories.",
    vacancies: "Demo — Not real vacancy count",
    qualification: "Demo — 10th/12th Pass",
    lastDate: "2025-11-20",
    postedDate: "2025-10-05",
    status: "active",
    location: "Various Centres (Demo)",
    ageLimit: "Demo — 17.5-23 years",
    applicationFee: "Demo — Free",
  },
  {
    id: "demo-6",
    title: "Sample — UP Police Constable Recruitment 2025",
    slug: "demo-up-police-2025",
    organization: "UP Police Recruitment Board (Demo)",
    category: "police",
    summary:
      "This is a sample listing for demonstration purposes only. Uttar Pradesh Police Constable recruitment.",
    vacancies: "Demo — Not real vacancy count",
    qualification: "Demo — 12th Pass",
    lastDate: "2025-12-01",
    postedDate: "2025-10-12",
    status: "active",
    location: "Uttar Pradesh (Demo)",
    ageLimit: "Demo — 18-22 years",
    applicationFee: "Demo — ₹400",
  },
];

export const mockResults: Result[] = [
  {
    id: "demo-r1",
    title: "Sample — SSC CHSL Tier-I Result 2025",
    slug: "demo-ssc-chsl-result-2025",
    organization: "Staff Selection Commission (Demo)",
    publishedDate: "2025-10-25",
    category: "ssc",
  },
  {
    id: "demo-r2",
    title: "Sample — IBPS PO Prelims Result 2025",
    slug: "demo-ibps-po-result-2025",
    organization: "IBPS (Demo)",
    publishedDate: "2025-10-22",
    category: "banking",
  },
  {
    id: "demo-r3",
    title: "Sample — RRB Group D CBT Result 2025",
    slug: "demo-rrb-group-d-result-2025",
    organization: "Railway Recruitment Board (Demo)",
    publishedDate: "2025-10-20",
    category: "railway",
  },
  {
    id: "demo-r4",
    title: "Sample — UPPSC PCS Prelims Result 2025",
    slug: "demo-uppsc-pcs-result-2025",
    organization: "UP Public Service Commission (Demo)",
    publishedDate: "2025-10-18",
    category: "state-govt",
  },
];

export const mockAdmitCards: AdmitCard[] = [
  {
    id: "demo-a1",
    title: "Sample — SSC CGL Tier-II Admit Card 2025",
    slug: "demo-ssc-cgl-admit-2025",
    organization: "Staff Selection Commission (Demo)",
    examDate: "2025-11-20",
    publishedDate: "2025-10-24",
    category: "ssc",
  },
  {
    id: "demo-a2",
    title: "Sample — IBPS Clerk Prelims Admit Card 2025",
    slug: "demo-ibps-clerk-admit-2025",
    organization: "IBPS (Demo)",
    examDate: "2025-12-05",
    publishedDate: "2025-10-23",
    category: "banking",
  },
  {
    id: "demo-a3",
    title: "Sample — RRB NTPC CBT-1 Admit Card 2025",
    slug: "demo-rrb-ntpc-admit-2025",
    organization: "Railway Recruitment Board (Demo)",
    examDate: "2025-11-28",
    publishedDate: "2025-10-21",
    category: "railway",
  },
];

export const mockAnswerKeys: AnswerKey[] = [
  {
    id: "demo-ak1",
    title: "Sample — SSC MTS Tier-I Answer Key 2025",
    slug: "demo-ssc-mts-answer-key-2025",
    organization: "Staff Selection Commission (Demo)",
    examDate: "2025-10-10",
    publishedDate: "2025-10-20",
    category: "ssc",
  },
  {
    id: "demo-ak2",
    title: "Sample — UPSC CAPF Answer Key 2025",
    slug: "demo-upsc-capf-answer-key-2025",
    organization: "Union Public Service Commission (Demo)",
    examDate: "2025-10-05",
    publishedDate: "2025-10-18",
    category: "upsc",
  },
];

export const mockLatestUpdates: LatestUpdate[] = [
  {
    id: "demo-u1",
    title: "SSC CGL 2025 Notification Released (Demo)",
    slug: "demo-ssc-cgl-notification",
    type: "job",
    date: "2025-10-25",
    summary: "Sample update — SSC has released the notification for CGL 2025.",
    href: "/jobs",
  },
  {
    id: "demo-u2",
    title: "IBPS PO Prelims Result Declared (Demo)",
    slug: "demo-ibps-result-declared",
    type: "result",
    date: "2025-10-24",
    summary: "Sample update — IBPS PO Prelims result has been declared.",
    href: "/results",
  },
  {
    id: "demo-u3",
    title: "RRB NTPC Admit Card Available (Demo)",
    slug: "demo-rrb-admit-available",
    type: "admit-card",
    date: "2025-10-23",
    summary: "Sample update — RRB NTPC CBT-1 admit card is now available.",
    href: "/admit-card",
  },
  {
    id: "demo-u4",
    title: "UP Police Constable Recruitment 2025 (Demo)",
    slug: "demo-up-police-recruitment",
    type: "job",
    date: "2025-10-22",
    summary: "Sample update — UP Police Constable recruitment notification.",
    href: "/jobs",
  },
  {
    id: "demo-u5",
    title: "SSC MTS Answer Key Released (Demo)",
    slug: "demo-ssc-mts-answer-key",
    type: "answer-key",
    date: "2025-10-21",
    summary: "Sample update — SSC MTS Tier-I answer key has been released.",
    href: "/answer-key",
  },
  {
    id: "demo-u6",
    title: "Army Agniveer Rally 2025 Schedule (Demo)",
    slug: "demo-army-agniveer-schedule",
    type: "job",
    date: "2025-10-20",
    summary: "Sample update — Indian Army Agniveer rally schedule announced.",
    href: "/jobs",
  },
];
