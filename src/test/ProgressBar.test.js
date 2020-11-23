import ProgressBar from "../ProgressBar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

jest.mock("./api.js", () => {
  return {
    fetchData: jest.fn(),
  };
});

describe("Testing Progress Bar Component", () => {
  let wrapper;
  const getbars = jest.fn();

  beforeAll(() => {
    wrapper = shallow(<ProgressBar getbars={getbars} />);
    expect(wrapper.getElements()).toMatchSnapshot();
    jest.clearAllMocks();
  });

  test("Checking Heading Text", () => {
    expect(wrapper.find("h3").text()).toContain("Progress Bars Demo");
  });

  test("Checking Bars Length ", () => {
    expect(wrapper.find(".bar").length).toEqual(0);
  });

  test("Checking Buttons Length ", () => {
    expect(wrapper.find(".button").length).toEqual(0);
  });
  test("Checking Option Length ", () => {
    expect(wrapper.find(".option").length).toEqual(0);
  });
  it("fetches async data", () => {
    const promise = new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve({
            buttons: [16, 22, -13, -24],
            bars: [15, 11, 78, 23],
            limit: 160,
          }),
        100
      )
    );
    const wrapper = shallow(<ProgressBar />);
    promise.then(() => {
      wrapper.update();

      expect(wrapper.find(".bar").length).toEqual(4);
      expect(wrapper.find(".button").length).toEqual(4);
    });
  });
});
