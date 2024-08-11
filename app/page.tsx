import { ModeToggle } from '@/components/ui/mode-toggle';
import ImageForm from '@/components/ui/imageForm';
import { Logo } from '@/components/ui/logo';
import Image from 'next/image';
import Link from 'next/link';
import Github from '@/public/github.svg';

export default function Home() {
    return (
        <main className="relative h-screen overflow-auto">
            <div className="flex absolute top-2 right-2">
                <Link
                    href="https://github.com/iam-arnab/exiftuner"
                    passHref
                    className="m-2"
                >
                    <Image src={Github} alt="Github" width={30} height={30} />
                </Link>
                <ModeToggle />
            </div>
            <div className="m-10 flex flex-col items-center justify-center min-h-screen">
                <Logo />
                <ImageForm />
                <p className="mt-20">
                    Made with ❤️ by{' '}
                    <Link href="https://bio.link/arnab" className="font-bold">
                        Arnab
                    </Link>
                </p>
            </div>
        </main>
    );
}
