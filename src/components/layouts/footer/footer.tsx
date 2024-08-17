export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Deployed by{" "}
          <a
            href="https://ion.sst.dev/docs/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            SST ion
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/gusugusu1018/sst-ion-next-auth-template"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
