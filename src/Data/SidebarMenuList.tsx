import { SidebarMenuType } from "../Types/LayoutTypes";

export const menuList: SidebarMenuType[] = [
  {
    title: "General",
    menucontent: "Dashboards",
    menu: [
      {
        id: 1,
        title: "Dashboard",
        icon: "home",
        url: `${process.env.PUBLIC_URL}/dashboard/eCommerce`,
        type: "link",
      },
    ],
  },
  {
    title: "Applications",
    menucontent: "Ready to use Apps",
    menu: [
      {
        id: 3,
        title: "Project",
        type: "sub",
        icon: "project",
        active: false,
        menu: [
          {
            title: "Project List",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/project/project-list`,
          },
          {
            title: "Create New",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/project/create-project`,
          },
        ],
      },
      {
        id: 4,
        title: "File Manager",
        url: `${process.env.PUBLIC_URL}/applications/file-manager`,
        icon: "file",
        type: "link",
      },
      {
        id: 5,
        title: "Ecommerce",
        icon: "ecommerce",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Add Products",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/add-products`,
          },
          {
            title: "Product",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/product`,
          },
          {
            title: "Product Page",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/product-page`,
          },
          {
            title: "Product list",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/product-list`,
          },
          {
            title: "Payment Details",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/payment-details`,
          },
          {
            title: "Order History",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/order-history`,
          },
          {
            title: "Invoices",
            type: "sub",
            menu: [
              {
                title: "Invoice-1",
                type: "link",
                url: `${process.env.PUBLIC_URL}/invoice/invoice-1`,
              },
              {
                title: "Invoice-2",
                type: "link",
                url: `${process.env.PUBLIC_URL}/invoice/invoice-2`,
              },
              {
                title: "Invoice-3",
                type: "link",
                url: `${process.env.PUBLIC_URL}/invoice/invoice-3`,
              },
              {
                title: "Invoice-4",
                type: "link",
                url: `${process.env.PUBLIC_URL}/invoice/invoice-4`,
              },
              {
                title: "Invoice-5",
                type: "link",
                url: `${process.env.PUBLIC_URL}/invoice/invoice-5`,
              },
              {
                title: "Invoice-6",
                type: "link",
                url: `${process.env.PUBLIC_URL}/invoice/invoice-6`,
              },
            ],
          },
          {
            title: "Cart",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/cart`,
          },
          {
            title: "Wishlist",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/wishlist`,
          },
          {
            title: "Checkout",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/checkout`,
          },
          {
            title: "Pricing",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/ecommerce/pricing`,
          },
        ],
      },
      {
        id: 7,
        title: "Chat",
        icon: "chat",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Private Chat",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/chat/chat-private`,
          },
          {
            title: "Group chat",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/chat/chat-group`,
          },
        ],
      },
      {
        id: 8,
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Users Profile",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/users/user-profile`,
          },
          {
            title: "Users Edit",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/users/edit-profile`,
          },
          {
            title: "Users Cards",
            type: "link",
            url: `${process.env.PUBLIC_URL}/applications/users/user-cards`,
          },
        ],
      },
      {
        id: 9,
        title: "Bookmarks",
        url: `${process.env.PUBLIC_URL}/applications/bookmark`,
        bookmark: true,
        type: "link",
        icon: "bookmark",
      },
      {
        id: 10,
        title: "Contacts",
        icon: "contact",
        url: `${process.env.PUBLIC_URL}/applications/contacts`,
        type: "link",
        active: false,
      },
      {
        id: 11,
        title: "Tasks",
        url: `${process.env.PUBLIC_URL}/applications/task`,
        icon: "task",
        type: "link",
      },
      {
        id: 12,
        title: "Calendar",
        url: `${process.env.PUBLIC_URL}/applications/calendar-basic`,
        icon: "calendar",
        type: "link",
      },
      {
        id: 13,
        title: "Social App",
        url: `${process.env.PUBLIC_URL}/applications/social-app`,
        bookmark: true,
        icon: "social",
        type: "link",
      },
      {
        id: 14,
        title: "To-Do",
        url: `${process.env.PUBLIC_URL}/applications/to-do`,
        bookmark: true,
        icon: "to-do",
        type: "link",
      },
      {
        id: 15,
        title: "Search Result",
        url: `${process.env.PUBLIC_URL}/applications/search`,
        icon: "search",
        type: "link",
      },
    ],
  },
  {
    title: "Forms & Table",
    menucontent: "Ready to use froms & tables",
    menu: [
      {
        id: 16,
        title: "Forms",
        icon: "form",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Form Controls",
            type: "sub",
            menu: [
              {
                title: "Form Validation",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-controls/form-validation`,
              },
              {
                title: "Base Inputs",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-controls/base-input`,
              },
              {
                title: "Checkbox & Radio",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-controls/radio-checkbox-control`,
              },
              {
                title: "Input Groups",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-controls/input-group`,
              },
              {
                title: "Input Mask",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-controls/input-mask`,
              },
              {
                title: "Mega Options",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-controls/mega-options`,
              },
            ],
          },
          {
            title: "Form Widgets",
            type: "sub",
            menu: [
              {
                title: "Datepicker",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/datepicker`,
              },
              {
                title: "Touchspin",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/touchspin`,
              },
              {
                title: "Switch",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/switch`,
              },
              {
                title: "Typeahead",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/typeahead`,
              },
              {
                title: "Clipboard",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/clipboard`,
              },
            ],
          },
          {
            title: "Form Layout",
            type: "sub",
            menu: [
              {
                title: "Form Wizard 1",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-layout/form-wizard-1`,
              },
              {
                title: "Form Wizard 2",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-layout/form-wizard-2`,
              },
              {
                title: "Two Factor",
                type: "link",
                url: `${process.env.PUBLIC_URL}/forms/form-layout/two-factor`,
              },
            ],
          },
        ],
      },
      {
        id: 17,
        title: "Tables",
        icon: "table",
        type: "sub",
        menu: [
          {
            title: "Reactstrap Tables",
            type: "sub",
            menu: [
              {
                title: "Basic Tables",
                type: "link",
                url: `${process.env.PUBLIC_URL}/table/reactstrap-tables/basic-table`,
              },
              {
                title: "Table Components",
                type: "link",
                url: `${process.env.PUBLIC_URL}/table/reactstrap-tables/table-components`,
              },
            ],
          },
          {
            title: "Data Tables",
            type: "sub",
            menu: [
              {
                title: "Basic Init",
                type: "link",
                url: `${process.env.PUBLIC_URL}/table/data-tables/basic-init`,
              },
              {
                title: "Advance Init",
                type: "link",
                url: `${process.env.PUBLIC_URL}/table/data-tables/advance-init`,
              },
              {
                title: "API",
                type: "link",
                url: `${process.env.PUBLIC_URL}/table/data-tables/api`,
              },
              {
                title: "Data Sources",
                type: "link",
                url: `${process.env.PUBLIC_URL}/table/data-tables/data-sources`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Pages",
    menucontent: "All neccessary pages added",
    menu: [
      {
        id: 24,
        title: "Others",
        icon: "others",
        type: "sub",
        menu: [
          {
            title: "Error Page",
            type: "sub",
            menu: [
              {
                title: "Error 400",
                type: "link",
                url: `${process.env.PUBLIC_URL}/others/error-page-400`,
              },
              {
                title: "Error 401",
                type: "link",
                url: `${process.env.PUBLIC_URL}/others/error-page-401`,
              },
              {
                title: "Error 403",
                type: "link",
                url: `${process.env.PUBLIC_URL}/others/error-page-403`,
              },
              {
                title: "Error 404",
                type: "link",
                url: `${process.env.PUBLIC_URL}/others/error-page-404`,
              },
              {
                title: "Error 500",
                type: "link",
                url: `${process.env.PUBLIC_URL}/others/error-page-500`,
              },
              {
                title: "Error 503",
                type: "link",
                url: `${process.env.PUBLIC_URL}/others/error-page-503`,
              },
            ],
          },
          {
            title: "Authentication",
            type: "sub",
            menu: [
              {
                title: "Login Simple",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/login`,
              },
              {
                title: "Login With Bg Image",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/login-bg-img`,
              },
              {
                title: "Login With Image Two ",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/login-bg-img2`,
              },
              {
                title: "Login With Validation",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/login-bs-validation`,
              },
              {
                title: "Login With Tooltip",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/login-bs-tooltip`,
              },
              {
                title: "Login With Sweetalert",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/login-sa-validation`,
              },
              {
                title: "Register Simple",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/sign-up`,
              },
              {
                title: "Register With Bg Image",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/sign-up-one`,
              },
              {
                title: "Register with Image Two",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/sign-up-two`,
              },
              {
                title: "Register Wizard",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/sign-up-wizard`,
              },
              {
                title: "Unlock User",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/unlock`,
              },
              {
                title: "Forget Password",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/forget-password`,
              },
              {
                title: "Reset Password",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/reset-password`,
              },
              {
                title: "Maintenance",
                type: "link",
                url: `${process.env.PUBLIC_URL}/auth/maintenance`,
              },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",
            menu: [
              {
                title: "Coming Simple",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming-soon/coming-simple`,
              },
              {
                title: "Coming With Bg Video",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming-soon/coming-bg-video`,
              },
              {
                title: "Coming With Bg Image",
                type: "link",
                url: `${process.env.PUBLIC_URL}/coming-soon/coming-bg-img`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Miscellaneous",
    menucontent: "Bouns Pages & Apps",
    menu: [
      {
        id: 26,
        title: "Blog",
        icon: "blog",
        type: "sub",
        active: false,
        menu: [
          {
            title: "Blog Details",
            type: "link",
            url: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-detail`,
          },
          {
            title: "Blog Single",
            type: "link",
            url: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-single`,
          },
          {
            title: "Add Post",
            type: "link",
            url: `${process.env.PUBLIC_URL}/miscellaneous/blog/add-post`,
          },
        ],
      },
      {
        id: 27,
        title: "FAQ",
        type: "link",
        icon: "faq",
        active: false,
        url: `${process.env.PUBLIC_URL}/miscellaneous/faq`,
      },
      {
        id: 31,
        title: "Editors",
        icon: "editors",
        type: "sub",
        active: false,
        menu: [
          {
            title: "CK Editor",
            type: "link",
            url: `${process.env.PUBLIC_URL}/miscellaneous/editors/ck-editor`,
          },
          {
            title: "MDE Editor",
            type: "link",
            url: `${process.env.PUBLIC_URL}/miscellaneous/editors/mde-editor`,
          },
        ],
      },
    ],
  },
];
