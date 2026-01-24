export type MoodKey = 
  | 'default' | 'heartbreak_hotel' | 'confessions' 
  | 'overthinkers' | 'chaos_energy' | 'optimists' | 'chill_exist' 
  | 'after_dark' | 'sanctuary' | 'premium_gold';

export const MOODS: Record<MoodKey, { label: string; colors: string[] }> = {
  default: { label: 'AnonMe', colors: ['#232526', '#414345'] },
  heartbreak_hotel: { label: 'Heartbreak', colors: ['#2b5876', '#4e4376', '#C06C84'] },
  confessions: { label: 'Confessions', colors: ['#000000', '#434343'] },
  overthinkers: { label: 'Overthinking', colors: ['#0f0c29', '#302b63', '#24243e'] },
  chaos_energy: { label: 'Chaos', colors: ['#FF416C', '#FF4B2B'] },
  optimists: { label: 'Optimism', colors: ['#f12711', '#f5af19'] },
  chill_exist: { label: 'Chill', colors: ['#134E5E', '#71B280'] },
  after_dark: { label: 'After Dark', colors: ['#450404', '#1a0000'] },
  sanctuary: { label: 'Sanctuary', colors: ['#FF0080', '#FF8C00', '#40E0D0', '#7F5AF0'] },
  premium_gold: { label: 'Premium', colors: ['#FFD700', '#FDB931', '#996515'] },
};