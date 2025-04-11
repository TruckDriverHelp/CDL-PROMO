import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input/input';

export default function Home() {
  return (
    <div className="max-w-md ml-10">
      <br />

      <Button content="Стать партнером" />
      <br />
      <br />
      <Button content="Стать партнером 2" />
      <br />
      <br />
      <br />
      <div>
        <Input
          styleVariant="primary"
          label="Test mode"
          message="hello ist test"
        />
        <br />
        <Input
          styleVariant="primary"
          label="Test mode"
          invalid
          message="invalid state test"
        />
        <br />
        <Input styleVariant="primary" label="Hello" />
      </div>
    </div>
  );
}
