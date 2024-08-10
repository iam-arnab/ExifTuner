import { ModeToggle } from "@/components/ui/mode-toggle";
import ImageForm from "@/components/ui/imageForm";

export default function Home() {
    return (
        <main className="relative">
            <div className="absolute top-2 right-2">
                <ModeToggle />
            </div>
            <div className="flex items-center justify-center h-screen">
                <ImageForm />
            </div>
        </main>
    );
}
