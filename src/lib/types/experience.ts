export type ExperiencePosition = {
  id: number;
  title: string;
  period: {
    start: string;
    end: string;
  };
  type?: string;
  responsibilities: string[];
  skills?: string[];
  isExpanded: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: ExperiencePosition[];
  isCurrentyEmployer?: boolean;
};
