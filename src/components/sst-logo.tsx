"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SstLogo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "dark" ? (
        <Image
          src="https://raw.githubusercontent.com/sst/ion/dev/www/src/assets/logo-dark.svg"
          alt="Dark Logo"
          width={256}
          height={75}
          priority
        />
      ) : (
        <Image
          src="https://raw.githubusercontent.com/sst/ion/dev/www/src/assets/logo-light.svg"
          alt="Light Logo"
          width={256}
          height={75}
          priority
        />
      )}
    </div>
  );
};

export default SstLogo;
