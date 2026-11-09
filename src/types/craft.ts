export type CraftCategory = 
  | 'all'
  | 'ceramic' 
  | 'silk' 
  | 'folk-painting' 
  | 'metalwork' 
  | 'bamboo' 
  | 'lacquer';

export interface CraftProcessStep {
  stepNumber: number;
  stageName: string;
  title: string;
  summary: string;
  technicalDetails: string[];
  traditionalTools: string[];
  artisanSecret: string;
  estimatedDuration: string;
  image?: string;
  soundAmbientLabel?: string;
}

export interface CraftProduct {
  id: string;
  villageId: string;
  name: string;
  artisanId?: string;
  artisanName?: string;
  material: string;
  ocopRank: number; // 3, 4, 5
  dimensions: string;
  culturalMeaning: string;
  techniquesUsed: string[];
  estimatedTime: string;
  image: string;
  priceReference: string;
  curatorNote: string;
}

export interface Artisan {
  id: string;
  villageId: string;
  fullName: string;
  birthYear: number;
  gender: 'male' | 'female';
  title: string; // 'Nghệ nhân Nhân dân' | 'Nghệ nhân Ưu tú' | 'Bàn tay vàng' | 'Nghệ nhân Làng nghề'
  titleAcronym: 'NNND' | 'NNƯT' | 'BTV' | 'NN';
  avatar: string;
  experienceYears: number;
  generation: string;
  consentStatus: boolean; // Phải true theo yêu cầu "đã đồng ý công bố thông tin"
  consentDate: string;
  consentDocRef: string;
  workshopName: string;
  address: string;
  phone: string;
  email: string;
  quote: string;
  achievements: string[];
  signatureSpecialty: string;
  isVerifiedConsent: boolean;
}

export interface CraftVillage {
  id: string;
  name: string;
  category: CraftCategory;
  categoryLabel: string;
  province: string;
  locationAddress: string;
  establishedEra: string;
  patronSaint: string; // Tổ nghề
  heritageStatus: string;
  coverImage: string;
  briefDescription: string;
  historicalChronology: Array<{
    period: string;
    title: string;
    content: string;
  }>;
  culturalSignificance: string;
  festival: {
    name: string;
    dateLunar: string;
    description: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  metrics: {
    artisanTotal: number;
    consentedCount: number;
    activeWorkshops: number;
    ocopProductsCount: number;
  };
  audioNarration: {
    title: string;
    duration: string;
    speaker: string;
    transcript: string;
  };
  productionProcess: CraftProcessStep[];
  products: CraftProduct[];
}
