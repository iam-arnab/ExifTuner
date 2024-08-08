import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DateTimeForm from "@/components/ui/dateTimeForm";
import LocationForm from "@/components/ui/locationForm";
import CameraForm from "@/components/ui/cameraForm";
import ImageForm from "@/components/ui/imageForm";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <div className="flex items-center justify-center h-screen">
        <Tabs defaultValue="d&t">
          <ImageForm />
          <div className="m-2">
            <TabsList>
              <TabsTrigger value="d&t">Date & Time</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="camera">Camera</TabsTrigger>
            </TabsList>
            <TabsContent value="d&t">
              <DateTimeForm />
            </TabsContent>
            <TabsContent value="location">
              <LocationForm />
            </TabsContent>
            <TabsContent value="camera">
              <CameraForm />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
