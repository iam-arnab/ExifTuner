import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <div className="flex items-center justify-center h-screen">
        <Tabs defaultValue="d&t">
          <TabsList>
            <TabsTrigger value="d&t">Date & Time</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="camera">Camera</TabsTrigger>
          </TabsList>
          <TabsContent value="d&t">Make changes to date and time</TabsContent>
          <TabsContent value="location">Make changes to location</TabsContent>
          <TabsContent value="camera">Make changes to camera</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
