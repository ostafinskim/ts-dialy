import complementaryDNA from "./complementary-dna";
import { expect, test } from 'vitest'

test("complementary DNA", () => {
	expect(complementaryDNA("ACGT")).toEqual("TGCA");
	expect(complementaryDNA("ATGCGTACGTTAGC")).toEqual("TACGCATGCAATCG");
	expect(complementaryDNA("GGCTTACGATCGAAG")).toEqual("CCGAATGCTAGCTTC");
	expect(complementaryDNA("GATCTAGCTAGGCTAGCTAG")).toEqual("CTAGATCGATCCGATCGATC");
});