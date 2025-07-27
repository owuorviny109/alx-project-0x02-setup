// Core component interfaces
export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

// API data interfaces
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  phone?: string;
  website?: string;
}

// Form data interfaces
export interface PostFormData {
  title: string;
  content: string;
}