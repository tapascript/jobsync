import Header from "@/components/Header";
import JobList from "@/components/JobList";

export default function Home() {
  return (
    <div className="bg-gray-50/90 py-6 md:py-12">
      <div className="px-4 space-y-6 md:space-y-10">
        <Header />
        <JobList />
      </div>
    </div>
  );
}
