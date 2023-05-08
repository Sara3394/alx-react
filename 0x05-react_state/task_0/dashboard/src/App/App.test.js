/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);

  const instance = wrapper.instance();

  instance.handleDisplayDrawer();

  expect(wrapper.state().displayDrawer).toEqual(true);
});

it("displayDrawer changes to false when calling handleHideDrawer", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toEqual(false);
