export const CATEGORIES = [
  { slug: "central-govt", label: "Central Government", icon: "🏛️" },
  { slug: "state-govt", label: "State Government", icon: "🏢" },
  { slug: "banking", label: "Banking", icon: "🏦" },
  { slug: "railway", label: "Railway", icon: "🚂" },
  { slug: "defence", label: "Defence", icon: "🛡️" },
  { slug: "ssc", label: "SSC", icon: "📋" },
  { slug: "upsc", label: "UPSC", icon: "📜" },
  { slug: "teaching", label: "Teaching", icon: "🎓" },
  { slug: "police", label: "Police", icon: "👮" },
  { slug: "engineering", label: "Engineering", icon: "⚙️" },
  { slug: "medical", label: "Medical", icon: "🏥" },
  { slug: "other", label: "Other", icon: "📂" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const JOB_STATUS = {
  ACTIVE: "active",
  UPCOMING: "upcoming",
  EXPIRED: "expired",
} as const;

export type JobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];

export const ITEMS_PER_PAGE = 20;
