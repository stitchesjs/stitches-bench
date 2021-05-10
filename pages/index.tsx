import { StitchesTest } from "../bench/stitches/StitchesTest";
import { SCTest } from "../bench/sc/SCTest";

export default function Home() {
  return (
    <div>
      <div>
        <StitchesTest />
      </div>

      <div>
        <SCTest />
      </div>
    </div>
  );
}
