import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@radix-ui/react-progress";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <div className="">
        <Button variant="elevated"> i am a button</Button>
      </div>
      <div className="">
        <Input placeholder="input" />
      </div>
      <div className="">
        <Textarea> i am a textarea</Textarea>
      </div>
      <div className="">
        <Progress></Progress>
      </div>
      <div className="">
        <Checkbox>checkbox </Checkbox>
      </div>
    </div>
  );
}
