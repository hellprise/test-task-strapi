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

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface LayoutTestList extends Schema.Component {
  collectionName: 'components_layout_test_lists';
  info: {
    displayName: 'TestList';
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
    submenu: Attribute.Component<'list.link', true>;
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
      'layout.navbar': LayoutNavbar;
      'layout.test-list': LayoutTestList;
      'list.link': ListLink;
      'list.links-list': ListLinksList;
      'slider.slide': SliderSlide;
    }
  }
}
