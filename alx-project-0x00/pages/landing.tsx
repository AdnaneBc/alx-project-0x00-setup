import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Button styles="text-sm" title="small" />
      <Button styles="text-md" title="medium" />
      <Button styles="text-lg" title="large" />
      <Button styles="rounded-sm" title="rounded-sm" />
      <Button styles="rounded-lg" title="rounded-lg" />
      <Button styles="rounded-full" title="rounded-full" />
      <Card />
    </div>
  );
};
export default Landing;
