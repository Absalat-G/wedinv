export interface RsvpEntry {
  id: string;
  name: string;
  email: string;
  attending: 'yes' | 'no';
  eventsAttending?: string;
  guestsCount: number;
  guestNames?: string;
  mealPreference: string;
  dietaryRestrictions?: string;
  songRequest?: string;
  message?: string;
  submittedAt: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  location?: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  orientation?: 'portrait' | 'landscape' | 'square';
}
