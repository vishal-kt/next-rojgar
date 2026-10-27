export interface Job {
  id: string;
  title: string;
  slug: string;
  organization: string;
  category: string;
  summary: string;
  vacancies?: string;
  qualification?: string;
  lastDate?: string;
  postedDate?: string;
  status?: "active" | "upcoming" | "expired";
  applicationUrl?: string;
  officialNotificationUrl?: string;
  location?: string;
  ageLimit?: string;
  applicationFee?: string;
}

export interface Result {
  id: string;
  title: string;
  slug: string;
  organization: string;
  publishedDate?: string;
  resultUrl?: string;
  category: string;
}

export interface AdmitCard {
  id: string;
  title: string;
  slug: string;
  organization: string;
  examDate?: string;
  downloadUrl?: string;
  publishedDate?: string;
  category: string;
}

export interface AnswerKey {
  id: string;
  title: string;
  slug: string;
  organization: string;
  examDate?: string;
  publishedDate?: string;
  downloadUrl?: string;
  category: string;
}

export interface LatestUpdate {
  id: string;
  title: string;
  slug: string;
  type: "job" | "result" | "admit-card" | "answer-key" | "syllabus" | "admission";
  date?: string;
  summary: string;
  href: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
