export type EnvelopeStatus = 'draft' | 'delivered' | 'pending'

// Te stvari tuki bi lahko bile avtomatsko generirane na podlagi
// swagger sheme od apija.

export interface Envelope {
  id: string;
  inboxId: string;
  message: string;
  status: EnvelopeStatus;
}

export interface User {
  id: string;
  username: string;
  name: string;
  phone?: string;
  company?: string;
  avatarUrl?: string;
}