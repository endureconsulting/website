import Link from "next/link";

import { Container } from "@/components/container";

export default function EndureConsulting404() {
  return (
    <Container title="404 - Endure Consulting">
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-brand-gradient">
        <main className="max-w-2xl space-y-14 text-center">
          <div className="font-black">
            <h1 className="text-9xl text-brand">404</h1>
            <h2 className="text-5xl">Not Found</h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a className="font-medium text-sm xs:text-base text-gray-500 hover:text-gray-900">
                    Home
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </Container>
  );
}
