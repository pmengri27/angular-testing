//Here we are testing arrays

import { getCurrencies } from "./getCurrencies";

describe("getCurrencies", () => {
  it("should return the supported currencies", () => {
    const result = getCurrencies();
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");
  });
});
