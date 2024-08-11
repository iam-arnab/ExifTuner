import { ModeToggle } from '@/components/ui/mode-toggle';
import ImageForm from '@/components/ui/imageForm';
import { Logo } from '@/components/ui/logo';

export default function Home() {
    return (
        <main className="relative h-screen overflow-auto">
            <div className="absolute top-2 right-2">
                <ModeToggle />
            </div>
            <div className="m-10 flex flex-col items-center justify-center min-h-screen">
                <Logo />
                <ImageForm />
            </div>
        </main>
    );
}
