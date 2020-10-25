import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AccountSummary from "@/components/AccountSummary.vue";

describe("AccountSummary.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(AccountSummary, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
