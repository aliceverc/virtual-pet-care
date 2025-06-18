import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
      <Link href="/">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={100}
          height={100}
          style={{ height: 'auto' }}
        />
      </Link>
  );
}

