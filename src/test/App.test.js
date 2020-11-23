import App from "../App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Testing App Render", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
  test("renders learn react link", () => {});
});
