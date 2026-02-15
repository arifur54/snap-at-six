export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'guest' | 'admin';
  createdAt: Date;
}