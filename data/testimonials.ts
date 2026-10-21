export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar?: string;
}

// Honesty requirement: Never fabricate quotes.
// Data file is deliberately kept empty to render a graceful "Partner & Client Reviews Coming Soon" state.
export const testimonialsData: TestimonialItem[] = [];
