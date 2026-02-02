import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                Z
              </div>
              <span className="font-bold">Zonder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Deploy AI agents to your clients
            </p>
          </div>

          <div>
            <div className="text-sm font-medium mb-3">Product</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-medium mb-3">Legal</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#security" className="text-muted-foreground hover:text-foreground">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Zonder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
