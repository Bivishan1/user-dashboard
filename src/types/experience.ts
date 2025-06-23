
export interface ExperienceDetails {
  programName: string;
  position: string;
  location: string;
  institution: string;
  date: string;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;
  type: string;
  tags: string[];
  details: ExperienceDetails;
}
