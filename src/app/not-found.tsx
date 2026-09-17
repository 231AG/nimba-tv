import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <span aria-hidden className="mb-4 block h-1 w-10 bg-flag-red" />
      <p className="font-display text-5xl font-semibold text-navy">404</p>
      <h1 className="mt-3 text-2xl text-navy sm:text-3xl">We can&rsquo;t find that page</h1>
      <p className="mt-2 max-w-md font-read text-base text-muted">
        The story may have moved, or the link may be incomplete. Try the latest news instead.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button href="/news" variant="primary">Latest news</Button>
        <Button href="/" variant="ghost">Back home</Button>
      </div>
    </div>
  );
}
