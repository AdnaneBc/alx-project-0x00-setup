import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Button style="text-sm" title="small" />
      <Button style="text-md" title="medium" />
      <Button style="text-lg" title="large" />
      <Card />
    </div>
  );
};
export default Landing;
