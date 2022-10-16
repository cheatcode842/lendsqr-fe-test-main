interface Profile {
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

export interface User {
  id: string;
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor;
  socials: Socials;
  education: Education;
}
