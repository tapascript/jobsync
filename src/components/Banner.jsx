import Image from "next/image";
import Logo from "./shared/Logo";

const Banner = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-full overflow-hidden">
        <Logo />
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          JobSync
        </h1>
        <p className="text-sm text-gray-500">
          Sync your skills to requirements and get started with your job
        </p>
      </div>
    </div>
  );
};

export default Banner;
