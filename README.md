# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

# Project Structure

next-15-starter/
├── .eslintrc.json                # ESLint configuration with Next.js and Prettier extensions
├── .gitignore                    # Git ignore configuration for Next.js projects
├── components.json               # Shadcn UI configuration (component styling and aliases)
├── next.config.mjs               # Next.js configuration with experimental features and image settings
├── package.json                  # Project dependencies and scripts (Next.js 15, React Query, Tailwind)
├── postcss.config.mjs            # PostCSS configuration for Tailwind CSS
├── prettier.config.js            # Prettier configuration with Tailwind plugin
├── README.md                     # Project documentation (currently a template)
├── tailwind.config.ts            # Tailwind CSS configuration with theme settings
├── tsconfig.json                 # TypeScript configuration for Next.js
│
├── public/                       # Static files served by Next.js
│   ├── next.svg                  # Next.js logo
│   └── vercel.svg                # Vercel logo
│
└── src/                          # Source code
    ├── app/                      # App Router directory structure
    │   ├── favicon.ico           # Website favicon
    │   ├── globals.css           # Global CSS including Tailwind and theme variables
    │   ├── layout.tsx            # Root layout with font setup, providers, and Toaster
    │   ├── loading.tsx           # Global loading component with spinner
    │   ├── ReactQueryProvider.tsx # Client component that provides React Query capabilities
    │   │
    │   ├── (auth)/               # Authentication route group
    │   │   ├── layout.tsx        # Auth layout with redirect logic
    │   │   ├── login/            # Login page route
    │   │   │   └── page.tsx      # Login page component
    │   │   └── signup/           # Signup page route
    │   │       └── page.tsx      # Signup page component
    │   │
    │   ├── (main)/               # Main application route group
    │   │   ├── layout.tsx        # Main layout with header and footer
    │   │   ├── page.tsx          # Homepage with feature sections
    │   │   └── SessionProvider.tsx # Client component for session context
    │   │
    │   └── fonts/                # Local font files
    │       ├── GeistMonoVF.woff  # Geist Mono variable font
    │       └── GeistVF.woff      # Geist Sans variable font
    │
    ├── components/               # Reusable components
    │   └── ui/                   # Shadcn UI components
    │       ├── button.tsx        # Button component
    │       ├── dialog.tsx        # Dialog/Modal component
    │       ├── dropdown-menu.tsx # Dropdown menu component
    │       ├── form.tsx          # Form components with React Hook Form integration
    │       ├── input.tsx         # Input field component
    │       ├── label.tsx         # Form label component
    │       ├── skeleton.tsx      # Loading skeleton component
    │       ├── tabs.tsx          # Tabs component
    │       ├── textarea.tsx      # Textarea component
    │       ├── toast.tsx         # Toast notification component
    │       ├── toaster.tsx       # Toast container component
    │       ├── tooltip.tsx       # Tooltip component
    │       └── use-toast.ts      # Toast hook for showing notifications
    │
    ├── hooks/                    # Custom React hooks
    │   └── useDebounce.ts        # Hook for debouncing values (delays updates)
    │
    └── lib/                      # Utility functions and libraries
        ├── utils.ts              # Common utilities (CSS class merging, date formatting)
        └── validation.ts         # Zod validation schemas for forms

# Cấu Trúc Dự Án

next-15-starter/
├── .eslintrc.json                # Cấu hình ESLint với các phần mở rộng Next.js và Prettier
├── .gitignore                    # Cấu hình Git Ignore cho dự án Next.js
├── components.json               # Cấu hình Shadcn UI (kiểu dáng component và bí danh)
├── next.config.mjs               # Cấu hình Next.js với tính năng thử nghiệm và cài đặt hình ảnh
├── package.json                  # Phụ thuộc và script dự án (Next.js 15, React Query, Tailwind)
├── postcss.config.mjs            # Cấu hình PostCSS cho Tailwind CSS
├── prettier.config.js            # Cấu hình Prettier với plugin Tailwind
├── README.md                     # Tài liệu dự án (hiện tại là mẫu)
├── tailwind.config.ts            # Cấu hình Tailwind CSS với thiết lập chủ đề
├── tsconfig.json                 # Cấu hình TypeScript cho Next.js
│
├── public/                       # Tệp tĩnh được Next.js phục vụ
│   ├── next.svg                  # Logo Next.js
│   └── vercel.svg                # Logo Vercel
│
└── src/                          # Mã nguồn
    ├── app/                      # Cấu trúc thư mục App Router
    │   ├── favicon.ico           # Favicon trang web
    │   ├── globals.css           # CSS toàn cục bao gồm Tailwind và biến chủ đề
    │   ├── layout.tsx            # Layout gốc với thiết lập font, providers và Toaster
    │   ├── loading.tsx           # Component tải toàn cục với spinner
    │   ├── ReactQueryProvider.tsx # Component phía máy khách cung cấp khả năng React Query
    │   │
    │   ├── (auth)/               # Nhóm route xác thực
    │   │   ├── layout.tsx        # Layout xác thực với logic chuyển hướng
    │   │   ├── login/            # Route trang đăng nhập
    │   │   │   └── page.tsx      # Component trang đăng nhập
    │   │   └── signup/           # Route trang đăng ký
    │   │       └── page.tsx      # Component trang đăng ký
    │   │
    │   ├── (main)/               # Nhóm route ứng dụng chính
    │   │   ├── layout.tsx        # Layout chính với header và footer
    │   │   ├── page.tsx          # Trang chủ với các phần tính năng
    │   │   └── SessionProvider.tsx # Component phía máy khách cho context phiên
    │   │
    │   └── fonts/                # Tệp font cục bộ
    │       ├── GeistMonoVF.woff  # Font biến thể Geist Mono
    │       └── GeistVF.woff      # Font biến thể Geist Sans
    │
    ├── components/               # Các component có thể tái sử dụng
    │   └── ui/                   # Component Shadcn UI
    │       ├── button.tsx        # Component nút
    │       ├── dialog.tsx        # Component hộp thoại/Modal
    │       ├── dropdown-menu.tsx # Component menu thả xuống
    │       ├── form.tsx          # Component biểu mẫu với tích hợp React Hook Form
    │       ├── input.tsx         # Component trường nhập liệu
    │       ├── label.tsx         # Component nhãn biểu mẫu
    │       ├── skeleton.tsx      # Component skeleton tải
    │       ├── tabs.tsx          # Component tab
    │       ├── textarea.tsx      # Component vùng văn bản
    │       ├── toast.tsx         # Component thông báo toast
    │       ├── toaster.tsx       # Component container toast
    │       ├── tooltip.tsx       # Component chú thích
    │       └── use-toast.ts      # Hook toast để hiển thị thông báo
    │
    ├── hooks/                    # Hook React tùy chỉnh
    │   └── useDebounce.ts        # Hook để debounce giá trị (trì hoãn cập nhật)
    │
    └── lib/                      # Tiện ích và thư viện
        ├── utils.ts              # Tiện ích chung (ghép lớp CSS, định dạng ngày)
        └── validation.ts         # Schema xác thực Zod cho biểu mẫu