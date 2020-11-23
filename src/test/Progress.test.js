import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Progress from "../Progress";
configure({ adapter: new Adapter() });

describe("Testing Progress Bar Rendering ", () => {
  let wrapper;
  beforeAll(() => {
    let obj = { bar: 0, background: "lightblue" };
    wrapper = shallow(<Progress bar={obj} />);
    // wrapper = shallow(<ProgressBar getbars={getbars} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  test("It Should render without errors ", () => {
    expect(wrapper.find("span").text()).toContain(0);
  });
});
