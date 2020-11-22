import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Progress from "./Progress";
configure({ adapter: new Adapter() });

describe("Testing Progress Bar Rendering ", () => {
  test("It Should render without errors ", () => {
    let obj = { bar: 0, background: "lightblue" };
    const wrapper = shallow(<Progress bar={obj} />);
    console.log(wrapper.debug());
    expect(wrapper.find("span").text()).toContain(0);
  });
});
