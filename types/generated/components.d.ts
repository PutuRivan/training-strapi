import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyProfileAwardItem extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_award_items';
  info: {
    displayName: 'Award Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
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

export interface CompanyProfileManagementItem extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_management_items';
  info: {
    displayName: 'Management Item';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['COMMISSIONER', 'DIRECTOR']> &
      Schema.Attribute.Required;
  };
}

export interface CompanyProfileMissionItem extends Struct.ComponentSchema {
  collectionName: 'components_company_profile_mission_items';
  info: {
    displayName: 'Mission Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'company-profile.award-item': CompanyProfileAwardItem;
      'company-profile.history-item': CompanyProfileHistoryItem;
      'company-profile.management-item': CompanyProfileManagementItem;
      'company-profile.mission-item': CompanyProfileMissionItem;
    }
  }
}
