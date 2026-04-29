export const STAGES = [
  {
    id: 'application_received',
    label: 'Application Received',
    short: 'RECEIVED',
    badgeClass: 'bg-surface-container-high text-on-surface-variant',
  },
  {
    id: 'phone_interview',
    label: 'Phone Interview',
    short: 'PHONE SCREEN',
    badgeClass: 'bg-secondary-container text-secondary',
  },
  {
    id: 'reference_check',
    label: 'Reference Check',
    short: 'REFERENCE',
    badgeClass: 'bg-primary/10 text-primary',
  },
  {
    id: 'in_person_interview',
    label: 'In-Person Interview',
    short: 'INTERVIEW',
    badgeClass: 'bg-tertiary-container text-on-tertiary-container',
  },
  {
    id: 'shadow_shift',
    label: 'Shadow Shift',
    short: 'SHADOW SHIFT',
    badgeClass: 'bg-primary-container text-on-primary-container',
  },
  {
    id: 'decision_made',
    label: 'Decision Made',
    short: 'DECISION',
    badgeClass: 'bg-tertiary text-on-tertiary',
  },
] as const

export type StageId = (typeof STAGES)[number]['id']
export const STAGE_IDS = STAGES.map((s) => s.id) as StageId[]

export function getStage(id: string) {
  return STAGES.find((s) => s.id === id)
}

export function getStageLabel(id: string): string {
  return getStage(id)?.label ?? id
}

export function getStageBadgeClass(id: string): string {
  return getStage(id)?.badgeClass ?? 'bg-surface-container text-on-surface'
}

export function getNextStage(currentStage: string): StageId | null {
  const idx = STAGE_IDS.indexOf(currentStage as StageId)
  if (idx === -1 || idx === STAGE_IDS.length - 1) return null
  return STAGE_IDS[idx + 1]
}

export function formatJobTitle(slug: string): string {
  if (!slug) return 'Caregiver'
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function daysInStage(stageUpdatedAt: string | null): number {
  if (!stageUpdatedAt) return 0
  const updated = new Date(stageUpdatedAt)
  const now = new Date()
  return Math.floor((now.getTime() - updated.getTime()) / (1000 * 60 * 60 * 24))
}

export function urgencyDotClass(days: number): string {
  if (days <= 3) return 'bg-emerald-500 ring-4 ring-emerald-500/10'
  if (days <= 7) return 'bg-amber-500 ring-4 ring-amber-500/10'
  return 'bg-red-500 ring-4 ring-red-500/10'
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
