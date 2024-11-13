
type SortDate = 'last30Days' | 'lastWeek' | 'lastYear' | 'allTime';


export interface ValueObject {
  value: number;
  observation?: string;
}

export interface SubCategory {
  reusability: ValueObject;
  clarity: ValueObject;
  accessibility: ValueObject;
  accessible: ValueObject;
  present: ValueObject;
  coverage: ValueObject;
}

export interface EconomicInformation {
  expenses: SubCategory;
  revenues: SubCategory;
  anualBudget: SubCategory;
}

export interface HumanResources {
  quantitativeAdministrativeSupport: SubCategory;
  numberOfForeignTeachers: SubCategory;
  numberOfActiveTeachers: SubCategory;
}

export interface ActionsSoftware {
  institutionalDevelopmentPlan: SubCategory;
  managementReports: SubCategory;
  userServicesCharter: SubCategory;
}

export interface Students {
  undergraduatePostgraduateCoursesOffered: SubCategory;
  numberOfUndergraduateAndPosStudents: SubCategory;
  financialAid: SubCategory;
}

export interface Institutional {
  departments: SubCategory;
  organogram: SubCategory;
  statute: SubCategory;
}

export interface PollFilter {
  state?: string;
  limit?: number;
  page?: number;
  sortByDate?: SortDate;
}


export interface IPoll {
  economicInformation: EconomicInformation;
  humanResources: HumanResources;
  actions_software: ActionsSoftware;
  students: Students;
  institutional: Institutional;
}