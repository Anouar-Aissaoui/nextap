import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t mt-auto py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p className="mb-2">AppsGU - Best App Downloader</p>
        <div className="flex justify-center items-center space-x-4">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/copyright-policy" className="hover:text-primary transition-colors">
            Copyright Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/eu-amau" className="hover:text-primary transition-colors">
            EU AMAU
          </Link>
        </div>
      </div>
    </footer>
  );
}
