import VueTeste from "./VueTeste.vue";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

const renderTest = () => render(VueTeste);

describe('VueTeste', () => {
  it('should has state value',() => {
    renderTest();
    expect(screen.getByText('value 0')).not.toBeNull();
  });
});
