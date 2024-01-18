import NewChat from "@/components/StartChat";

export default function Home() {
  return (
      <>
          <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Jarvis</h1>
              <NewChat/>
          </div>
          </section>
      </>
  );
}