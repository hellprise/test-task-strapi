import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutColumn extends Schema.Component {
  collectionName: 'components_layout_columns';
  info: {
    displayName: 'Column';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'list.link', true>;
  };
}

export interface ListLink extends Schema.Component {
  collectionName: 'components_list_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
  };
}

export interface ListLinksList extends Schema.Component {
  collectionName: 'components_list_links_lists';
  info: {
    displayName: 'LinksList';
    icon: 'bulletList';
  };
  attributes: {
    Link: Attribute.Component<'list.link', true>;
  };
}

export interface SliderSlide extends Schema.Component {
  collectionName: 'components_slider_slides';
  info: {
    displayName: 'Slide';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String;
    category: Attribute.String;
    slug: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'layout.column': LayoutColumn;
      'list.link': ListLink;
      'list.links-list': ListLinksList;
      'slider.slide': SliderSlide;
    }
  }
}
