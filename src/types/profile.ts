export interface ProfileHeaderProps {
  user: {
    name: string;
    email: string;
    address: {
      city: string;
      zipcode: string;
    };
  } | null;
}