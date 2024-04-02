const ConfigDB = {
    settings: {
      layout_type: 'ltr',
      layout_class: 'compact-wrapper',
      sidebar: {
        type: 'compact-wrapper',
        iconType: 'stroke-svg',
      },
      sidebar_setting: 'default-sidebar',
    },
    color: {
      primary_color: localStorage.getItem('default_color') || '#307EF3',
      secondary_color: localStorage.getItem('secondary_color') || '#EBA31D',
      mix_background_layout: 'light-only',
    },
    router_animation: 'fadeIn',
  };

  export default ConfigDB;
  