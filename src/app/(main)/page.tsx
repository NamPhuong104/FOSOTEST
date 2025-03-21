import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container py-12 md:py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl pb-12 text-center">
        <h1 className="font-bold text-4xl md:text-6xl tracking-tight mb-4">
          Next.js 15 Starter Template
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Một khung khởi đầu hiện đại, nhanh chóng và dễ sử dụng cho dự án Next.js của bạn
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://github.com/yourusername/next-15-starter"
            target="_blank"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
          >
            GitHub Repository
          </Link>
          <Link
            href="https://nextjs.org/docs"
            target="_blank"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Xem Tài Liệu
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Tính Năng Chính</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Next.js 15"
            description="Tận dụng sức mạnh của phiên bản mới nhất với Server Components và App Router"
          />
          <FeatureCard
            title="TypeScript"
            description="Phát triển an toàn hơn với TypeScript được tích hợp sẵn"
          />
          <FeatureCard
            title="Tailwind CSS"
            description="Thiết kế giao diện linh hoạt và nhanh chóng với Tailwind CSS"
          />
        </div>
      </section>

      {/* Getting Started */}
      <section className="mx-auto max-w-4xl py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Bắt Đầu Nhanh Chóng</h2>
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
          <pre className="overflow-x-auto p-4 rounded bg-muted">
            <code>
              {`npx create-next-app -e https://github.com/yourusername/next-15-starter`}
            </code>
          </pre>
          <p className="mt-4 text-sm text-muted-foreground">
            Sao chép và dán lệnh trên vào terminal để khởi tạo dự án mới với template này.
          </p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow transition-all hover:shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}