import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-4  p-4 w-full ">
      <div className="">
        <Button variant="elevated"> i am a button</Button>
      </div>
      <div className="">
        <Input placeholder="input" />
      </div>
      <div className="">
        <Textarea> i am a textarea</Textarea>
      </div>
      <div className=" ">
        <Progress value={50} />
      </div>
      <div className="">
        <Checkbox>checkbox </Checkbox>
      </div>
    </div>
  );
}
