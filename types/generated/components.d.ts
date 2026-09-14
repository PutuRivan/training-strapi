import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyProfileAward extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_awards';
  info: {
    displayName: 'Award';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface CompanyProfileBusinessLicense extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_business_licenses';
  info: {
    displayName: 'Business License';
  };
  attributes: {
    items: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CompanyProfileCompanyOverview extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_company_overviews';
  info: {
    displayName: 'Company Overview';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CompanyProfileHistory extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_histories';
  info: {
    displayName: 'History';
  };
  attributes: {
    items: Schema.Attribute.Component<'company-profile.history-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CompanyProfileHistoryItem extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_history_items';
  info: {
    displayName: 'History Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    month: Schema.Attribute.Enumeration<
      [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
      ]
    > &
      Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface CompanyProfileManagement extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_managements';
  info: {
    displayName: 'Management';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['COMMISSIONER', 'DIRECTOR']> &
      Schema.Attribute.Required;
  };
}

export interface CompanyProfileVisionMission extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_vision_missions';
  info: {
    displayName: 'Vision Mission';
  };
  attributes: {
    missions: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    vision: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'company-profile.award': CompanyProfileAward;
      'company-profile.business-license': CompanyProfileBusinessLicense;
      'company-profile.company-overview': CompanyProfileCompanyOverview;
      'company-profile.history': CompanyProfileHistory;
      'company-profile.history-item': CompanyProfileHistoryItem;
      'company-profile.management': CompanyProfileManagement;
      'company-profile.vision-mission': CompanyProfileVisionMission;
    }
  }
}
