import type { Schema, Attribute } from '@strapi/strapi';

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
      'slider.slide': SliderSlide;
    }
  }
}
