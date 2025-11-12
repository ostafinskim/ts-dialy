import wiseSpeak from "./speak-wisely";
import { expect, test } from 'vitest'

test(() => {
	expect(wiseSpeak("You must speak wisely.")).toEqual("Speak wisely, you must.")
	expect(wiseSpeak("You can do it!")).toEqual("Do it, you can!")
	expect(wiseSpeak("Do you think you will complete this?")).toEqual("Complete this, do you think you will?")
	expect(wiseSpeak("All your base are belong to us.")).toEqual("Belong to us, all your base are.")
	expect(wiseSpeak("You have much to learn.")).toEqual("Much to learn, you have.")
})