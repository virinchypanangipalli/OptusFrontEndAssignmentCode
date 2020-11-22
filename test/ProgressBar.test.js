import { ProgressBar } from "./ProgressBar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Testing Progress Bar Component", () => {
  const wrapper = shallow(<ProgressBar />);
  test("Checking Heading Text", () => {
    expect(wrapper.find("h3").text()).toContain("Progress Bars Demo");
  });
});
