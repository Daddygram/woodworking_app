import About from "@/components/About";
import About2 from "@/components/About2";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import HowSection from "@/components/HowSection";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
      <>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense>
          <Hero />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense>
          <About2 />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense>
          <About />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense>
          <HowSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense>
          <Gallery /> 
        </Suspense>
      </ErrorBoundary>
      </>
  )
}
