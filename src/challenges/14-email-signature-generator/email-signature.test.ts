import { test } from 'vitest'
import generateSignature from './email-signature'

test(() => {
	expect(generateSignature({ name: "Quinn Waverly", title: "Founder and CEO", company: "TechCo" })).toBe("--Quinn Waverly, Founder and CEO at TechCo")
	expect(generateSignature({ name: "Alice Reed", title: "Engineer", company: "TechCo" })).toBe(">>Alice Reed, Engineer at TechCo")
	expect(generateSignature({ name: "Tina Vaughn", title: "Developer", company: "example.com" })).toBe("::Tina Vaughn, Developer at example.com")
	expect(generateSignature({ name: "B. B.", title: "Product Tester", company: "AcmeCorp" })).toBe(">>B. B., Product Tester at AcmeCorp")
	expect(generateSignature({ name: "windstorm", title: "Cloud Architect", company: "Atmospheronics" })).toBe("::windstorm, Cloud Architect at Atmospheronics")
})