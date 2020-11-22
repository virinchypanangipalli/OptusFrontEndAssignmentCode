import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/Progress Bars Demo/i);
  // expect(linkElement).toBeInTheDocument();
  // console.log(wrapper.debug(<App />));
});
