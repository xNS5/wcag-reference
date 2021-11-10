module.exports = {
	wcag20: {
		information: {
			1: {
				id: 'perceivable',
				text: 'Principle 1: Perceivable - Information and user interface components must be presentable to users in ways they can perceive.',
				guidelines: {
					1: {
						id: 'text-equiv',
						text: 'Guideline 1.1 Text Alternatives: Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html',
						successCriterions: {
							1: {
								id: 'text-equiv-all',
								handle: '1.1.1 Non-text Content',
								description: 'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.  Controls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.) Time-Based Media: If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.) Test: If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content. Sensory: If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content. CAPTCHA: If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. Decoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-text-equiv-all',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html',
								level: 1
							}
						}
					},
					2: {
						id: 'media-equiv',
						text: 'Guideline 1.2 Time-based Media: Provide alternatives for time-based media.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv.html',
						successCriterions: {
							1: {
								id: 'media-equiv-av-only-alt',
								handle: '1.2.1 Audio-only and Video-only (Prerecorded)',
								description: 'For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:  Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-av-only-alt',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html',
								level: 1
							},
							2: {
								id: 'media-equiv-captions',
								handle: '1.2.2 Captions (Prerecorded)',
								description: 'Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-captions',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html',
								level: 1
							},
							3: {
								id: 'media-equiv-audio-desc',
								handle: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
								description: 'An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-audio-desc',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html',
								level: 1
							},
							4: {
								id: 'media-equiv-real-time-captions',
								handle: '1.2.4 Captions (Live)',
								description: 'Captions are provided for all live audio content in synchronized media.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-real-time-captions',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html',
								level: 2
							},
							5: {
								id: 'media-equiv-audio-desc-only',
								handle: '1.2.5 Audio Description (Prerecorded)',
								description: 'Audio description is provided for all prerecorded video content in synchronized media.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-audio-desc-only',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html',
								level: 2
							},
							6: {
								id: 'media-equiv-sign',
								handle: '1.2.6 Sign Language (Prerecorded)',
								description: 'Sign language interpretation is provided for all prerecorded audio content in synchronized media.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-sign',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-sign.html',
								level: 3
							},
							7: {
								id: 'media-equiv-extended-ad',
								handle: '1.2.7 Extended Audio Description (Prerecorded)',
								description: 'Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-extended-ad',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html',
								level: 3
							},
							8: {
								id: 'media-equiv-text-doc',
								handle: '1.2.8 Media Alternative (Prerecorded)',
								description: 'An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-text-doc',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-text-doc.html',
								level: 3
							},
							9: {
								id: 'media-equiv-live-audio-only',
								handle: '1.2.9 Audio-only (Live)',
								description: 'An alternative for time-based media that presents equivalent information for live audio-only content is provided.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-live-audio-only',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-live-audio-only.html',
								level: 3
							}
						}
					},
					3: {
						id: 'content-structure-separation',
						text: 'Guideline 1.3 Adaptable: Create content that can be presented in different ways (for example simpler layout) without losing information or structure.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation.html',
						successCriterions: {
							1: {
								id: 'content-structure-separation-programmatic',
								handle: '1.3.1 Info and Relationships',
								description: 'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-programmatic',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html',
								level: 1
							},
							2: {
								id: 'content-structure-separation-sequence',
								handle: '1.3.2 Meaningful Sequence',
								description: 'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-sequence',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html',
								level: 1
							},
							3: {
								id: 'content-structure-separation-understanding',
								handle: '1.3.3 Sensory Characteristics',
								description: 'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.   Note: : For requirements related to color, refer to Guideline 1.4.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-understanding',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html',
								level: 1
							}
						}
					},
					4: {
						id: 'visual-audio-contrast',
						text: 'Guideline 1.4 Distinguishable: Make it easier for users to see and hear content including separating foreground from background.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast.html',
						successCriterions: {
							1: {
								id: 'visual-audio-contrast-without-color',
								handle: '1.4.1 Use of Color',
								description: 'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.   Note: : This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-without-color',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html',
								level: 1
							},
							2: {
								id: 'visual-audio-contrast-dis-audio',
								handle: '1.4.2 Audio Control',
								description: 'If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.   Note: : Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-dis-audio',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html',
								level: 1
							},
							3: {
								id: 'visual-audio-contrast-contrast',
								handle: '1.4.3 Contrast (Minimum)',
								description: 'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:  Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1; Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html',
								level: 2
							},
							4: {
								id: 'visual-audio-contrast-scale',
								handle: '1.4.4 Resize text',
								description: 'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-scale',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html',
								level: 2
							},
							5: {
								id: 'visual-audio-contrast-text-presentation',
								handle: '1.4.5 Images of Text',
								description: 'If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:  Customizable: The image of text can be visually customized to the user\'s requirements; Essential: A particular presentation of text is essential to the information being conveyed. Note: : Logotypes (text that is part of a logo or brand name) are considered essential.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html',
								level: 2
							},
							6: {
								id: 'visual-audio-contrast7',
								handle: '1.4.6 Contrast (Enhanced)',
								description: 'The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:  Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1; Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast7',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html',
								level: 3
							},
							7: {
								id: 'visual-audio-contrast-noaudio',
								handle: '1.4.7 Low or No Background Audio',
								description: 'For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:  No Background: The audio does not contain background sounds.Turn Off: The background sounds can be turned off.20 dB: The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds. Note: : Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-noaudio',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-noaudio.html',
								level: 3
							},
							8: {
								id: 'visual-audio-contrast-visual-presentation',
								handle: '1.4.8 Visual Presentation',
								description: 'For the visual presentation of blocks of text, a mechanism is available to achieve the following:  Foreground and background colors can be selected by the user.Width is no more than 80 characters or glyphs (40 if CJK).Text is not justified (aligned to both the left and the right margins).Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-visual-presentation',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html',
								level: 3
							},
							9: {
								id: 'visual-audio-contrast-text-images',
								handle: '1.4.9 Images of Text (No Exception)',
								description: 'Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.   Note: : Logotypes (text that is part of a logo or brand name) are considered essential.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-images',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-images.html',
								level: 3
							}
						}
					}
				}
			},
			2: {
				id: 'operable',
				text: 'Principle 2: Operable - User interface components and navigation must be operable.',
				guidelines: {
					1: {
						id: 'keyboard-operation',
						text: 'Guideline 2.1 Keyboard Accessible: Make all functionality available from a keyboard.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html',
						successCriterions: {
							1: {
								id: 'keyboard-operation-keyboard-operable',
								handle: '2.1.1 Keyboard',
								description: 'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints.   Note:  1: This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not. Note:  2: This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-keyboard-operable',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html',
								level: 1
							},
							2: {
								id: 'keyboard-operation-trapping',
								handle: '2.1.2 No Keyboard Trap',
								description: 'If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.   Note: : Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-trapping',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html',
								level: 1
							},
							3: {
								id: 'keyboard-operation-all-funcs',
								handle: '2.1.3 Keyboard (No Exception)',
								description: 'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-all-funcs',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-all-funcs.html',
								level: 3
							}
						}
					},
					2: {
						id: 'time-limits',
						text: 'Guideline 2.2 Enough Time: Provide users enough time to read and use content.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html',
						successCriterions: {
							1: {
								id: 'time-limits-required-behaviors',
								handle: '2.2.1 Timing Adjustable',
								description: 'For each time limit that is set by the content, at least one of the following is true:  Turn off: The user is allowed to turn off the time limit before encountering it; or Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or Essential Exception: The time limit is essential and extending it would invalidate the activity; or 20 Hour Exception: The time limit is longer than 20 hours.  Note: : This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-required-behaviors',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html',
								level: 1
							},
							2: {
								id: 'time-limits-pause',
								handle: '2.2.2 Pause, Stop, Hide',
								description: '2.2.2 Pause, Stop, Hide: For moving, blinking, scrolling, or auto-updating information, all of the following are true:  Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; andAuto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential. Note:  1: For requirements related to flickering or flashing content, refer to Guideline 2.3. Note:  2: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. Note:  3: Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.  Note:  4: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-pause',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html',
								level: 1
							},
							3: {
								id: 'time-limits-no-exceptions',
								handle: '2.2.3 No Timing',
								description: 'Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-no-exceptions',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html',
								level: 3
							},
							4: {
								id: 'time-limits-postponed',
								handle: '2.2.4 Interruptions',
								description: 'Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-postponed',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html',
								level: 3
							},
							5: {
								id: 'time-limits-server-timeout',
								handle: '2.2.5 Re-authenticating',
								description: 'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-server-timeout',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-server-timeout.html',
								level: 3
							}
						}
					},
					3: {
						id: 'seizure',
						text: 'Guideline 2.3 Seizures: Do not design content in a way that is known to cause seizures.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure.html',
						successCriterions: {
							1: {
								id: 'seizure-does-not-violate',
								handle: '2.3.1 Three Flashes or Below Threshold',
								description: 'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.   Note: : Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-seizure-does-not-violate',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html',
								level: 1
							},
							2: {
								id: 'seizure-three-times',
								handle: '2.3.2 Three Flashes',
								description: 'Web pages do not contain anything that flashes more than three times in any one second period.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-seizure-three-times',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-three-times.html',
								level: 3
							}
						}
					},
					4: {
						id: 'navigation-mechanisms',
						text: 'Guideline 2.4 Navigable: Provide ways to help users navigate, find content, and determine where they are.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms.html',
						successCriterions: {
							1: {
								id: 'navigation-mechanisms-skip',
								handle: '2.4.1 Bypass Blocks',
								description: 'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-skip',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html',
								level: 1
							},
							2: {
								id: 'navigation-mechanisms-title',
								handle: '2.4.2 Page Titled',
								description: 'Web pages have titles that describe topic or purpose.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-title',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html',
								level: 1
							},
							3: {
								id: 'navigation-mechanisms-focus-order',
								handle: '2.4.3 Focus Order',
								description: 'If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-focus-order',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html',
								level: 1
							},
							4: {
								id: 'navigation-mechanisms-refs',
								handle: '2.4.4 Link Purpose (In Context)',
								description: 'The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-refs',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html',
								level: 1
							},
							5: {
								id: 'navigation-mechanisms-mult-loc',
								handle: '2.4.5 Multiple Ways',
								description: 'More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-mult-loc',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html',
								level: 2
							},
							6: {
								id: 'navigation-mechanisms-descriptive',
								handle: '2.4.6 Headings and Labels',
								description: 'Headings and labels describe topic or purpose.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-descriptive',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html',
								level: 2
							},
							7: {
								id: 'navigation-mechanisms-focus-visible',
								handle: '2.4.7 Focus Visible',
								description: 'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-focus-visible',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html',
								level: 2
							},
							8: {
								id: 'navigation-mechanisms-location',
								handle: '2.4.8 Location',
								description: 'Information about the user\'s location within a set of Web pages is available.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-location',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-location.html',
								level: 3
							},
							9: {
								id: 'navigation-mechanisms-link',
								handle: '2.4.9 Link Purpose (Link Only)',
								description: 'A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-link',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html',
								level: 3
							},
							10: {
								id: 'navigation-mechanisms-headings',
								handle: '2.4.10 Section Headings',
								description: '2.4.10 Section Headings: Section headings are used to organize the content.   Note:  1: "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.  Note:  2: This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2.How to Meet 2.4.10 | Understanding 2.4.10',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-headings',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html',
								level: 3
							}
						}
					}
				}
			},
			3: {
				id: 'understandable',
				text: 'Principle 3: Understandable - Information and the operation of user interface must be understandable.',
				guidelines: {
					1: {
						id: 'meaning',
						text: 'Guideline 3.1 Readable: Make text content readable and understandable.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning.html',
						successCriterions: {
							1: {
								id: 'meaning-doc-lang-id',
								handle: '3.1.1 Language of Page',
								description: 'The default human language of each Web page can be programmatically determined.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-doc-lang-id',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html',
								level: 1
							},
							2: {
								id: 'meaning-other-lang-id',
								handle: '3.1.2 Language of Parts',
								description: 'The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-other-lang-id',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html',
								level: 2
							},
							3: {
								id: 'meaning-idioms',
								handle: '3.1.3 Unusual Words',
								description: 'A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-idioms',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-idioms.html',
								level: 3
							},
							4: {
								id: 'meaning-located',
								handle: '3.1.4 Abbreviations',
								description: 'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-located',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html',
								level: 3
							},
							5: {
								id: 'meaning-supplements',
								handle: '3.1.5 Reading Level',
								description: 'When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-supplements',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-supplements.html',
								level: 3
							},
							6: {
								id: 'meaning-pronunciation',
								handle: '3.1.6 Pronunciation',
								description: 'A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-pronunciation',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-pronunciation.html',
								level: 3
							}
						}
					},
					2: {
						id: 'consistent-behavior',
						text: 'Guideline 3.2 Predictable: Make Web pages appear and operate in predictable ways.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior.html',
						successCriterions: {
							1: {
								id: 'consistent-behavior-receive-focus',
								handle: '3.2.1 On Focus',
								description: 'When any component receives focus, it does not initiate a change of context.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-receive-focus',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html',
								level: 1
							},
							2: {
								id: 'consistent-behavior-unpredictable-change',
								handle: '3.2.2 On Input',
								description: 'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-unpredictable-change',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html',
								level: 1
							},
							3: {
								id: 'consistent-behavior-consistent-locations',
								handle: '3.2.3 Consistent Navigation',
								description: 'Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-consistent-locations',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html',
								level: 2
							},
							4: {
								id: 'consistent-behavior-consistent-functionality',
								handle: '3.2.4 Consistent Identification',
								description: 'Components that have the same functionality within a set of Web pages are identified consistently.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-consistent-functionality',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html',
								level: 2
							},
							5: {
								id: 'consistent-behavior-no-extreme-changes-context',
								handle: '3.2.5 Change on Request',
								description: 'Changes of context are initiated only by user request or a mechanism is available to turn off such changes.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-no-extreme-changes-context',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html',
								level: 3
							}
						}
					},
					3: {
						id: 'minimize-error',
						text: 'Guideline 3.3 Input Assistance: Help users avoid and correct mistakes.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error.html',
						successCriterions: {
							1: {
								id: 'minimize-error-identified',
								handle: '3.3.1 Error Identification',
								description: 'If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-identified',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html',
								level: 1
							},
							2: {
								id: 'minimize-error-cues',
								handle: '3.3.2 Labels or Instructions',
								description: 'Labels or instructions are provided when content requires user input.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-cues',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html',
								level: 1
							},
							3: {
								id: 'minimize-error-suggestions',
								handle: '3.3.3 Error Suggestion',
								description: 'If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-suggestions',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html',
								level: 2
							},
							4: {
								id: 'minimize-error-reversible',
								handle: '3.3.4 Error Prevention (Legal, Financial, Data)',
								description: '3.3.4 Error Prevention (Legal, Financial, Data): For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:  Reversible: Submissions are reversible. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-reversible',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html',
								level: 2
							},
							5: {
								id: 'minimize-error-context-help',
								handle: '3.3.5 Help',
								description: 'Context-sensitive help is available.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-context-help',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-context-help.html',
								level: 3
							},
							6: {
								id: 'minimize-error-reversible-all',
								handle: '3.3.6 Error Prevention (All)',
								description: 'For Web pages that require the user to submit information, at least one of the following is true:  Reversible: Submissions are reversible. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-reversible-all',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible-all.html',
								level: 3
							}
						}
					}
				}
			},
			4: {
				id: 'robust',
				text: 'Principle 4: Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.',
				guidelines: {
					1: {
						id: 'ensure-compat',
						text: 'Guideline 4.1 Compatible: Maximize compatibility with current and future user agents, including assistive technologies.',
						detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat.html',
						successCriterions: {
							1: {
								id: 'ensure-compat-parses',
								handle: '4.1.1 Parsing',
								description: 'In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.   Note: : Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-parses',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html',
								level: 1
							},
							2: {
								id: 'ensure-compat-rsv',
								handle: '4.1.2 Name, Role, Value',
								description: '4.1.2 Name, Role, Value: For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.   Note: : This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.',
								quickReference: 'http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-rsv',
								detailedReference: 'http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html',
								level: 1
							}
						}
					}
				}
			},
			url: 'https://www.w3.org/TR/WCAG20/'
		},
		techniques: {
			url: 'https://www.w3.org/TR/WCAG20-TECHS/',
			G: {
				text: 'General Techniques',
				onePage: 'general.html',
				techniques: {
					G1: {
						text: 'G1: Adding a link at the top of each page that goes directly to the main content area'
					},
					G4: {
						text: 'G4: Allowing the content to be paused and restarted from where it was paused'
					},
					G5: {
						text: 'G5: Allowing users to complete an activity without any time limit'
					},
					G8: {
						text: 'G8: Providing a movie with extended audio descriptions'
					},
					G9: {
						text: 'G9: Creating captions for live synchronized media'
					},
					G10: {
						text: 'G10: Creating components using a technology that supports the accessibility API features of the platforms on which the user agents will be run to expose the names and roles, allow user-settable properties to be directly set, and provide notification of changes'
					},
					G11: {
						text: 'G11: Creating content that blinks for less than 5 seconds'
					},
					G13: {
						text: 'G13: Describing what will happen before a change to a form control that causes a change of context to occur is made'
					},
					G14: {
						text: 'G14: Ensuring that information conveyed by color differences is also available in text'
					},
					G15: {
						text: 'G15: Using a tool to ensure that content does not violate the general flash threshold or red flash threshold'
					},
					G17: {
						text: 'G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text'
					},
					G18: {
						text: 'G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text'
					},
					G19: {
						text: 'G19: Ensuring that no component of the content flashes more than three times in any 1-second period'
					},
					G21: {
						text: 'G21: Ensuring that users are not trapped in content'
					},
					G53: {
						text: 'G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence'
					},
					G54: {
						text: 'G54: Including a sign language interpreter in the video stream'
					},
					G55: {
						text: 'G55: Linking to definitions'
					},
					G56: {
						text: 'G56: Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content'
					},
					G57: {
						text: 'G57: Ordering the content in a meaningful sequence'
					},
					G58: {
						text: 'G58: Placing a link to the alternative for time-based media immediately next to the non-text content'
					},
					G59: {
						text: 'G59: Placing the interactive elements in an order that follows sequences and relationships within the content'
					},
					G60: {
						text: 'G60: Playing a sound that turns off automatically within three seconds'
					},
					G61: {
						text: 'G61: Presenting repeated components in the same relative order each time they appear'
					},
					G62: {
						text: 'G62: Providing a glossary'
					},
					G63: {
						text: 'G63: Providing a site map'
					},
					G64: {
						text: 'G64: Providing a Table of Contents'
					},
					G65: {
						text: 'G65: Providing a breadcrumb trail'
					},
					G68: {
						text: 'G68: Providing a short text alternative that describes the purpose of live audio-only and live video-only content'
					},
					G69: {
						text: 'G69: Providing an alternative for time based media'
					},
					G70: {
						text: 'G70: Providing a function to search an online dictionary'
					},
					G71: {
						text: 'G71: Providing a help link on every Web page'
					},
					G73: {
						text: 'G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content'
					},
					G74: {
						text: 'G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description'
					},
					G75: {
						text: 'G75: Providing a mechanism to postpone any updating of content'
					},
					G76: {
						text: 'G76: Providing a mechanism to request an update of the content instead of updating automatically'
					},
					G78: {
						text: 'G78: Providing a second, user-selectable, audio track that includes audio descriptions'
					},
					G79: {
						text: 'G79: Providing a spoken version of the text'
					},
					G80: {
						text: 'G80: Providing a submit button to initiate a change of context'
					},
					G81: {
						text: 'G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player'
					},
					G82: {
						text: 'G82: Providing a text alternative that identifies the purpose of the non-text content'
					},
					G83: {
						text: 'G83: Providing text descriptions to identify required fields that were not completed'
					},
					G84: {
						text: 'G84: Providing a text description when the user provides information that is not in the list of allowed values'
					},
					G85: {
						text: 'G85: Providing a text description when user input falls outside the required format or values'
					},
					G86: {
						text: 'G86: Providing a text summary that can be understood by people with lower secondary education level reading ability'
					},
					G87: {
						text: 'G87: Providing closed captions'
					},
					G88: {
						text: 'G88: Providing descriptive titles for Web pages'
					},
					G89: {
						text: 'G89: Providing expected data format and example'
					},
					G90: {
						text: 'G90: Providing keyboard-triggered event handlers'
					},
					G91: {
						text: 'G91: Providing link text that describes the purpose of a link'
					},
					G92: {
						text: 'G92: Providing long description for non-text content that serves the same purpose and presents the same information'
					},
					G93: {
						text: 'G93: Providing open (always visible) captions'
					},
					G94: {
						text: 'G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content'
					},
					G95: {
						text: 'G95: Providing short text alternatives that provide a brief description of the non-text content'
					},
					G96: {
						text: 'G96: Providing textual identification of items that otherwise rely only on sensory information to be understood'
					},
					G97: {
						text: 'G97: Providing the first use of an abbreviation immediately before or after the expanded form'
					},
					G98: {
						text: 'G98: Providing the ability for the user to review and correct answers before submitting'
					},
					G99: {
						text: 'G99: Providing the ability to recover deleted information'
					},
					G100: {
						text: 'G100: Providing a short text alternative which is the accepted name or a descriptive name of the non-text content'
					},
					G101: {
						text: 'G101: Providing the definition of a word or phrase used in an unusual or restricted way'
					},
					G102: {
						text: 'G102: Providing the expansion or explanation of an abbreviation'
					},
					G103: {
						text: 'G103: Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes'
					},
					G105: {
						text: 'G105: Saving data so that it can be used after a user re-authenticates'
					},
					G107: {
						text: 'G107: Using "activate" rather than "focus" as a trigger for changes of context'
					},
					G108: {
						text: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes'
					},
					G110: {
						text: 'G110: Using an instant client-side redirect'
					},
					G111: {
						text: 'G111: Using color and pattern'
					},
					G112: {
						text: 'G112: Using inline definitions'
					},
					G115: {
						text: 'G115: Using semantic elements to mark up structure'
					},
					G117: {
						text: 'G117: Using text to convey information that is conveyed by variations in presentation of text'
					},
					G120: {
						text: 'G120: Providing the pronunciation immediately following the word'
					},
					G121: {
						text: 'G121: Linking to pronunciations'
					},
					G123: {
						text: 'G123: Adding a link at the beginning of a block of repeated content to go to the end of the block'
					},
					G124: {
						text: 'G124: Adding links at the top of the page to each area of the content'
					},
					G125: {
						text: 'G125: Providing links to navigate to related Web pages'
					},
					G126: {
						text: 'G126: Providing a list of links to all other Web pages'
					},
					G127: {
						text: 'G127: Identifying a Web page\'s relationship to a larger collection of Web pages'
					},
					G128: {
						text: 'G128: Indicating current location within navigation bars'
					},
					G130: {
						text: 'G130: Providing descriptive headings'
					},
					G131: {
						text: 'G131: Providing descriptive labels'
					},
					G133: {
						text: 'G133: Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit'
					},
					G134: {
						text: 'G134: Validating Web pages'
					},
					G135: {
						text: 'G135: Using the accessibility API features of a technology to expose names and roles, to allow user-settable properties to be directly set, and to provide notification of changes'
					},
					G136: {
						text: 'G136: Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version'
					},
					G138: {
						text: 'G138: Using semantic markup whenever color cues are used'
					},
					G139: {
						text: 'G139: Creating a mechanism that allows users to jump to errors'
					},
					G140: {
						text: 'G140: Separating information and structure from presentation to enable different presentations'
					},
					G141: {
						text: 'G141: Organizing a page using headings'
					},
					G142: {
						text: 'G142: Using a technology that has commonly-available user agents that support zoom'
					},
					G143: {
						text: 'G143: Providing a text alternative that describes the purpose of the CAPTCHA'
					},
					G144: {
						text: 'G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality'
					},
					G145: {
						text: 'G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text'
					},
					G146: {
						text: 'G146: Using liquid layout'
					},
					G148: {
						text: 'G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults'
					},
					G149: {
						text: 'G149: Using user interface components that are highlighted by the user agent when they receive focus'
					},
					G150: {
						text: 'G150: Providing text based alternatives for live audio-only content'
					},
					G151: {
						text: 'G151: Providing a link to a text transcript of a prepared statement or script if the script is followed'
					},
					G152: {
						text: 'G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)'
					},
					G153: {
						text: 'G153: Making the text easier to read'
					},
					G155: {
						text: 'G155: Providing a checkbox in addition to a submit button'
					},
					G156: {
						text: 'G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text'
					},
					G157: {
						text: 'G157: Incorporating a live audio captioning service into a Web page'
					},
					G158: {
						text: 'G158: Providing an alternative for time-based media for audio-only content'
					},
					G159: {
						text: 'G159: Providing an alternative for time-based media for video-only content'
					},
					G160: {
						text: 'G160: Providing sign language versions of information, ideas, and processes that must be understood in order to use the content'
					},
					G161: {
						text: 'G161: Providing a search function to help users find content'
					},
					G162: {
						text: 'G162: Positioning labels to maximize predictability of relationships'
					},
					G163: {
						text: 'G163: Using standard diacritical marks that can be turned off'
					},
					G164: {
						text: 'G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request'
					},
					G165: {
						text: 'G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over'
					},
					G166: {
						text: 'G166: Providing audio that describes the important video content and describing it as such'
					},
					G167: {
						text: 'G167: Using an adjacent button to label the purpose of a field'
					},
					G168: {
						text: 'G168: Requesting confirmation to continue with selected action'
					},
					G169: {
						text: 'G169: Aligning text on only one side'
					},
					G170: {
						text: 'G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically'
					},
					G171: {
						text: 'G171: Playing sounds only on user request'
					},
					G172: {
						text: 'G172: Providing a mechanism to remove full justification of text'
					},
					G173: {
						text: 'G173: Providing a version of a movie with audio descriptions'
					},
					G174: {
						text: 'G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast'
					},
					G175: {
						text: 'G175: Providing a multi color selection tool on the page for foreground and background colors'
					},
					G176: {
						text: 'G176: Keeping the flashing area small enough'
					},
					G177: {
						text: 'G177: Providing suggested correction text'
					},
					G178: {
						text: 'G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent'
					},
					G179: {
						text: 'G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width'
					},
					G180: {
						text: 'G180: Providing the user with a means to set the time limit to 10 times the default time limit'
					},
					G181: {
						text: 'G181: Encoding user data as hidden or encrypted data in a re-authorization page'
					},
					G182: {
						text: 'G182: Ensuring that additional visual cues are available when text color differences are used to convey information'
					},
					G183: {
						text: 'G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them'
					},
					G184: {
						text: 'G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input'
					},
					G185: {
						text: 'G185: Linking to all of the pages on the site from the home page'
					},
					G186: {
						text: 'G186: Using a control in the Web page that stops moving, blinking, or auto-updating content'
					},
					G187: {
						text: 'G187: Using a technology to include blinking content that can be turned off via the user agent'
					},
					G188: {
						text: 'G188: Providing a button on the page to increase line spaces and paragraph spaces'
					},
					G189: {
						text: 'G189: Providing a control near the beginning of the Web page that changes the link text'
					},
					G190: {
						text: 'G190: Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version'
					},
					G191: {
						text: 'G191: Providing a link, button, or other mechanism that reloads the page without any blinking content'
					},
					G192: {
						text: 'G192: Fully conforming to specifications'
					},
					G193: {
						text: 'G193: Providing help by an assistant in the Web page'
					},
					G194: {
						text: 'G194: Providing spell checking and suggestions for text input'
					},
					G195: {
						text: 'G195: Using an author-supplied, highly visible focus indicator'
					},
					G196: {
						text: 'G196: Using a text alternative on one item within a group of images that describes all items in the group'
					},
					G197: {
						text: 'G197: Using labels, names, and text alternatives consistently for content that has the same functionality'
					},
					G198: {
						text: 'G198: Providing a way for the user to turn the time limit off'
					},
					G199: {
						text: 'G199: Providing success feedback when data is submitted successfully'
					},
					G200: {
						text: 'G200: Opening new windows and tabs from a link only when necessary'
					},
					G201: {
						text: 'G201: Giving users advanced warning when opening a new window'
					},
					G202: {
						text: 'G202: Ensuring keyboard control for all functionality'
					},
					G203: {
						text: 'G203: Using a static text alternative to describe a talking head video'
					},
					G204: {
						text: 'G204: Not interfering with the user agent\'s reflow of text as the viewing window is narrowed'
					},
					G205: {
						text: 'G205: Including a text cue for colored form control labels'
					},
					G206: {
						text: 'G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text'
					}
				}
			},
			H: {
				text: 'HTML and XHTML Techniques',
				onePage: 'html.html',
				techniques: {
					H2: {
						text: 'H2: Combining adjacent image and text links for the same resource'
					},
					H4: {
						text: 'H4: Creating a logical tab order through links, form controls, and objects'
					},
					H24: {
						text: 'H24: Providing text alternatives for the area elements of image maps'
					},
					H25: {
						text: 'H25: Providing a title using the title element'
					},
					H28: {
						text: 'H28: Providing definitions for abbreviations by using the abbr element'
					},
					H30: {
						text: 'H30: Providing link text that describes the purpose of a link for anchor elements'
					},
					H32: {
						text: 'H32: Providing submit buttons'
					},
					H33: {
						text: 'H33: Supplementing link text with the title attribute'
					},
					H34: {
						text: 'H34: Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline'
					},
					H35: {
						text: 'H35: Providing text alternatives on applet elements'
					},
					H36: {
						text: 'H36: Using alt attributes on images used as submit buttons'
					},
					H37: {
						text: 'H37: Using alt attributes on img elements'
					},
					H39: {
						text: 'H39: Using caption elements to associate data table captions with data tables'
					},
					H40: {
						text: 'H40: Using description lists'
					},
					H42: {
						text: 'H42: Using h1-h6 to identify headings'
					},
					H43: {
						text: 'H43: Using id and headers attributes to associate data cells with header cells in data tables'
					},
					H44: {
						text: 'H44: Using label elements to associate text labels with form controls'
					},
					H45: {
						text: 'H45: Using longdesc'
					},
					H46: {
						text: 'H46: Using noembed with embed'
					},
					H48: {
						text: 'H48: Using ol, ul and dl for lists or groups of links'
					},
					H49: {
						text: 'H49: Using semantic markup to mark emphasized or special text'
					},
					H51: {
						text: 'H51: Using table markup to present tabular information'
					},
					H53: {
						text: 'H53: Using the body of the object element'
					},
					H54: {
						text: 'H54: Using the dfn element to identify the defining instance of a word'
					},
					H56: {
						text: 'H56: Using the dir attribute on an inline element to resolve problems with nested directional runs'
					},
					H57: {
						text: 'H57: Using language attributes on the html element'
					},
					H58: {
						text: 'H58: Using language attributes to identify changes in the human language'
					},
					H59: {
						text: 'H59: Using the link element and navigation tools'
					},
					H60: {
						text: 'H60: Using the link element to link to a glossary'
					},
					H62: {
						text: 'H62: Using the ruby element'
					},
					H63: {
						text: 'H63: Using the scope attribute to associate header cells and data cells in data tables'
					},
					H64: {
						text: 'H64: Using the title attribute of the frame and iframe elements'
					},
					H65: {
						text: 'H65: Using the title attribute to identify form controls when the label element cannot be used'
					},
					H67: {
						text: 'H67: Using null alt text and no title attribute on img elements for images that AT should ignore'
					},
					H69: {
						text: 'H69: Providing heading elements at the beginning of each section of content'
					},
					H70: {
						text: 'H70: Using frame elements to group blocks of repeated material'
					},
					H71: {
						text: 'H71: Providing a description for groups of form controls using fieldset and legend elements'
					},
					H73: {
						text: 'H73: Using the summary attribute of the table element to give an overview of data tables'
					},
					H74: {
						text: 'H74: Ensuring that opening and closing tags are used according to specification'
					},
					H75: {
						text: 'H75: Ensuring that Web pages are well-formed'
					},
					H76: {
						text: 'H76: Using meta refresh to create an instant client-side redirect'
					},
					H77: {
						text: 'H77: Identifying the purpose of a link using link text combined with its enclosing list item'
					},
					H78: {
						text: 'H78: Identifying the purpose of a link using link text combined with its enclosing paragraph'
					},
					H79: {
						text: 'H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells'
					},
					H80: {
						text: 'H80: Identifying the purpose of a link using link text combined with the preceding heading element'
					},
					H81: {
						text: 'H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested'
					},
					H83: {
						text: 'H83: Using the target attribute to open a new window on user request and indicating this in link text'
					},
					H84: {
						text: 'H84: Using a button with a select element to perform an action'
					},
					H85: {
						text: 'H85: Using OPTGROUP to group OPTION elements inside a SELECT'
					},
					H86: {
						text: 'H86: Providing text alternatives for ASCII art, emoticons, and leetspeak'
					},
					H88: {
						text: 'H88: Using HTML according to spec'
					},
					H89: {
						text: 'H89: Using the title attribute to provide context-sensitive help'
					},
					H90: {
						text: 'H90: Indicating required form controls using label or legend'
					},
					H91: {
						text: 'H91: Using HTML form controls and links'
					},
					H93: {
						text: 'H93: Ensuring that id attributes are unique on a Web page'
					},
					H94: {
						text: 'H94: Ensuring that elements do not contain duplicate attributes'
					},
					H95: {
						text: 'H95: Using the track element to provide captions'
					},
					H96: {
						text: 'H96: Using the track element to provide audio descriptions'
					},
					H97: {
						text: 'H97: Grouping related links using the nav element'
					}
				}
			},
			C: {
				text: 'CSS Techniques',
				onePage: 'css.html',
				techniques: {
					C6: {
						text: 'C6: Positioning content based on structural markup'
					},
					C7: {
						text: 'C7: Using CSS to hide a portion of the link text'
					},
					C8: {
						text: 'C8: Using CSS letter-spacing to control spacing within a word'
					},
					C9: {
						text: 'C9: Using CSS to include decorative images'
					},
					C12: {
						text: 'C12: Using percent for font sizes'
					},
					C13: {
						text: 'C13: Using named font sizes'
					},
					C14: {
						text: 'C14: Using em units for font sizes'
					},
					C15: {
						text: 'C15: Using CSS to change the presentation of a user interface component when it receives focus'
					},
					C17: {
						text: 'C17: Scaling form elements which contain text'
					},
					C18: {
						text: 'C18: Using CSS margin and padding rules instead of spacer images for layout design'
					},
					C19: {
						text: 'C19: Specifying alignment either to the left OR right in CSS'
					},
					C20: {
						text: 'C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized'
					},
					C21: {
						text: 'C21: Specifying line spacing in CSS'
					},
					C22: {
						text: 'C22: Using CSS to control visual presentation of text'
					},
					C23: {
						text: 'C23: Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content'
					},
					C24: {
						text: 'C24: Using percentage values in CSS for container sizes'
					},
					C25: {
						text: 'C25: Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors'
					},
					C27: {
						text: 'C27: Making the DOM order match the visual order'
					},
					C28: {
						text: 'C28: Specifying the size of text containers using em units'
					},
					C29: {
						text: 'C29: Using a style switcher to provide a conforming alternate version'
					},
					C30: {
						text: 'C30: Using CSS to replace text with images of text and providing user interface controls to switch'
					}
				}
			},
			SCR: {
				text: 'Client-side Scripting Techniques',
				onePage: 'client-side-script.html',
				techniques: {
					SCR1: {
						text: 'SCR1: Allowing the user to extend the default time limit'
					},
					SCR2: {
						text: 'SCR2: Using redundant keyboard and mouse event handlers'
					},
					SCR14: {
						text: 'SCR14: Using scripts to make nonessential alerts optional'
					},
					SCR16: {
						text: 'SCR16: Providing a script that warns the user a time limit is about to expire'
					},
					SCR18: {
						text: 'SCR18: Providing client-side validation and alert'
					},
					SCR19: {
						text: 'SCR19: Using an onchange event on a select element without causing a change of context'
					},
					SCR20: {
						text: 'SCR20: Using both keyboard and other device-specific functions'
					},
					SCR21: {
						text: 'SCR21: Using functions of the Document Object Model (DOM) to add content to a page'
					},
					SCR22: {
						text: 'SCR22: Using scripts to control blinking and stop it in five seconds or less'
					},
					SCR24: {
						text: 'SCR24: Using progressive enhancement to open new windows on user request'
					},
					SCR26: {
						text: 'SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element'
					},
					SCR27: {
						text: 'SCR27: Reordering page sections using the Document Object Model'
					},
					SCR28: {
						text: 'SCR28: Using an expandable and collapsible menu to bypass block of content'
					},
					SCR29: {
						text: 'SCR29: Adding keyboard-accessible actions to static HTML elements'
					},
					SCR30: {
						text: 'SCR30: Using scripts to change the link text'
					},
					SCR31: {
						text: 'SCR31: Using script to change the background color or border of the element with focus'
					},
					SCR32: {
						text: 'SCR32: Providing client-side validation and adding error text via the DOM'
					},
					SCR33: {
						text: 'SCR33: Using script to scroll content, and providing a mechanism to pause it'
					},
					SCR34: {
						text: 'SCR34: Calculating size and position in a way that scales with text size'
					},
					SCR35: {
						text: 'SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons'
					},
					SCR36: {
						text: 'SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area'
					},
					SCR37: {
						text: 'SCR37: Creating Custom Dialogs in a Device Independent Way'
					},
					SCR38: {
						text: 'SCR38: Creating a conforming alternate version for a web page designed with progressive enhancement'
					}
				}
			},
			SVR: {
				text: 'Server-side Scripting Techniques',
				onePage: 'server-side-script.html',
				techniques: {
					SVR1: {
						text: 'SVR1: Implementing automatic redirects on the server side instead of on the client side'
					},
					SVR2: {
						text: 'SVR2: Using .htaccess to ensure that the only way to access non-conforming content is from conforming content'
					},
					SVR3: {
						text: 'SVR3: Using HTTP referer to ensure that the only way to access non-conforming content is from conforming content'
					},
					SVR4: {
						text: 'SVR4: Allowing users to provide preferences for the display of conforming alternate versions'
					},
					SVR5: {
						text: 'SVR5: Specifying the default language in the HTTP header'
					}
				}
			},
			SM: {
				text: 'SMIL Techniques',
				onePage: 'smil.html',
				techniques: {
					SM1: {
						text: 'SM1: Adding extended audio description in SMIL 1.0'
					},
					SM2: {
						text: 'SM2: Adding extended audio description in SMIL 2.0'
					},
					SM6: {
						text: 'SM6: Providing audio description in SMIL 1.0'
					},
					SM7: {
						text: 'SM7: Providing audio description in SMIL 2.0'
					},
					SM11: {
						text: 'SM11: Providing captions through synchronized text streams in SMIL 1.0'
					},
					SM12: {
						text: 'SM12: Providing captions through synchronized text streams in SMIL 2.0'
					},
					SM13: {
						text: 'SM13: Providing sign language interpretation through synchronized video streams in SMIL 1.0'
					},
					SM14: {
						text: 'SM14: Providing sign language interpretation through synchronized video streams in SMIL 2.0'
					}
				}
			},
			T: {
				text: 'Plain Text Techniques',
				onePage: 'text.html',
				techniques: {
					T1: {
						text: 'T1: Using standard text formatting conventions for paragraphs'
					},
					T2: {
						text: 'T2: Using standard text formatting conventions for lists'
					},
					T3: {
						text: 'T3: Using standard text formatting conventions for headings'
					}
				}
			},
			WAI: {
				text: 'ARIA Techniques',
				onePage: 'aria.html',
				techniques: {
					ARIA1: {
						text: 'ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls'
					},
					ARIA2: {
						text: 'ARIA2: Identifying a required field with the aria-required property'
					},
					ARIA4: {
						text: 'ARIA4: Using a WAI-ARIA role to expose the role of a user interface component'
					},
					ARIA5: {
						text: 'ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component'
					},
					ARIA6: {
						text: 'ARIA6: Using aria-label to provide labels for objects'
					},
					ARIA7: {
						text: 'ARIA7: Using aria-labelledby for link purpose'
					},
					ARIA8: {
						text: 'ARIA8: Using aria-label for link purpose'
					},
					ARIA9: {
						text: 'ARIA9: Using aria-labelledby to concatenate a label from several text nodes'
					},
					ARIA10: {
						text: 'ARIA10: Using aria-labelledby to provide a text alternative for non-text content'
					},
					ARIA11: {
						text: 'ARIA11: Using ARIA landmarks to identify regions of a page'
					},
					ARIA12: {
						text: 'ARIA12: Using role=heading to identify headings'
					},
					ARIA13: {
						text: 'ARIA13: Using aria-labelledby to name regions and landmarks'
					},
					ARIA14: {
						text: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used'
					},
					ARIA15: {
						text: 'ARIA15: Using aria-describedby to provide descriptions of images'
					},
					ARIA16: {
						text: 'ARIA16: Using aria-labelledby to provide a name for user interface controls'
					},
					ARIA17: {
						text: 'ARIA17: Using grouping roles to identify related form controls'
					},
					ARIA18: {
						text: 'ARIA18: Using aria-alertdialog to Identify Errors'
					},
					ARIA19: {
						text: 'ARIA19: Using ARIA role=alert or Live Regions to Identify Errors'
					},
					ARIA20: {
						text: 'ARIA20: Using the region role to identify a region of the page'
					},
					ARIA21: {
						text: 'ARIA21: Using Aria-Invalid to Indicate An Error Field'
					}
				}
			},
			Flash: {
				text: 'Flash Techniques',
				onePage: 'flash.html',
				techniques: {
					FLASH1: {
						text: 'FLASH1: Setting the name property for a non-text object'
					},
					FLASH2: {
						text: 'FLASH2: Setting the description property for a non-text object in Flash'
					},
					FLASH3: {
						text: 'FLASH3: Marking objects in Flash so that they can be ignored by AT'
					},
					FLASH4: {
						text: 'FLASH4: Providing submit buttons in Flash'
					},
					FLASH5: {
						text: 'FLASH5: Combining adjacent image and text buttons for the same resource'
					},
					FLASH6: {
						text: 'FLASH6: Creating accessible hotspots using invisible buttons'
					},
					FLASH7: {
						text: 'FLASH7: Using scripting to change control labels'
					},
					FLASH8: {
						text: 'FLASH8: Adding a group name to the accessible name of a form control'
					},
					FLASH9: {
						text: 'FLASH9: Applying captions to prerecorded synchronized media'
					},
					FLASH10: {
						text: 'FLASH10: Indicating required form controls in Flash'
					},
					FLASH11: {
						text: 'FLASH11: Providing a longer text description of an object'
					},
					FLASH12: {
						text: 'FLASH12: Providing client-side validation and adding error text via the accessible description'
					},
					FLASH13: {
						text: 'FLASH13: Using HTML language attributes to specify language in Flash content'
					},
					FLASH14: {
						text: 'FLASH14: Using redundant keyboard and mouse event handlers in Flash'
					},
					FLASH15: {
						text: 'FLASH15: Using the tabIndex property to specify a logical reading order and a logical tab order in Flash'
					},
					FLASH16: {
						text: 'FLASH16: Making actions keyboard accessible by using the click event on standard components'
					},
					FLASH17: {
						text: 'FLASH17: Providing keyboard access to a Flash object and avoiding a keyboard trap'
					},
					FLASH18: {
						text: 'FLASH18: Providing a control to turn off sounds that play automatically in Flash'
					},
					FLASH19: {
						text: 'FLASH19: Providing a script that warns the user a time limit is about to expire and provides a way to extend it'
					},
					FLASH20: {
						text: 'FLASH20: Reskinning Flash components to provide highly visible focus indication'
					},
					FLASH21: {
						text: 'FLASH21: Using the DataGrid component to associate column headers with cells'
					},
					FLASH22: {
						text: 'FLASH22: Adding keyboard-accessible actions to static elements'
					},
					FLASH23: {
						text: 'FLASH23: Adding summary information to a DataGrid'
					},
					FLASH24: {
						text: 'FLASH24: Allowing the user to extend the default time limit'
					},
					FLASH25: {
						text: 'FLASH25: Labeling a form control by setting its accessible name'
					},
					FLASH26: {
						text: 'FLASH26: Applying audio descriptions to Flash video'
					},
					FLASH27: {
						text: 'FLASH27: Providing button labels that describe the purpose of a button'
					},
					FLASH28: {
						text: 'FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash'
					},
					FLASH29: {
						text: 'FLASH29: Setting the label property for form components'
					},
					FLASH30: {
						text: 'FLASH30: Specifying accessible names for image buttons'
					},
					FLASH31: {
						text: 'FLASH31: Specifying caption text for a DataGrid'
					},
					FLASH32: {
						text: 'FLASH32: Using auto labeling to associate text labels with form controls'
					},
					FLASH33: {
						text: 'FLASH33: Using relative values for Flash object dimensions'
					},
					FLASH34: {
						text: 'FLASH34: Turning off sounds that play automatically when an assistive technology is detected'
					},
					FLASH35: {
						text: 'FLASH35: Using script to scroll Flash content, and providing a mechanism to pause it'
					},
					FLASH36: {
						text: 'FLASH36: Using scripts to control blinking and stop it in five seconds or less'
					}
				}
			},
			Silverlight: {
				text: 'Silverlight Techniques',
				onePage: 'silverlight.html',
				techniques: {
					SL1: {
						text: 'SL1: Accessing Alternate Audio Tracks in Silverlight Media'
					},
					SL2: {
						text: 'SL2: Changing The Visual Focus Indicator in Silverlight'
					},
					SL3: {
						text: 'SL3: Controlling Silverlight MediaElement Audio Volume'
					},
					SL4: {
						text: 'SL4: Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM'
					},
					SL5: {
						text: 'SL5: Defining a Focusable Image Class for Silverlight'
					},
					SL6: {
						text: 'SL6: Defining a UI Automation Peer for a Custom Silverlight Control'
					},
					SL7: {
						text: 'SL7: Designing a Focused Visual State for Custom Silverlight Controls'
					},
					SL8: {
						text: 'SL8: Displaying HelpText in Silverlight User Interfaces'
					},
					SL9: {
						text: 'SL9: Handling Key Events to Enable Keyboard Functionality in Silverlight'
					},
					SL10: {
						text: 'SL10: Implementing a Submit-Form Pattern in Silverlight'
					},
					SL11: {
						text: 'SL11: Pausing or Stopping A Decorative Silverlight Animation'
					},
					SL12: {
						text: 'SL12: Pausing, Stopping, or Playing Media in Silverlight MediaElements'
					},
					SL13: {
						text: 'SL13: Providing A Style Switcher To Switch To High Contrast'
					},
					SL14: {
						text: 'SL14: Providing Custom Control Key Handling for Keyboard Functionality in Silverlight'
					},
					SL15: {
						text: 'SL15: Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application'
					},
					SL16: {
						text: 'SL16: Providing Script-Embedded Text Captions for MediaElement Content'
					},
					SL17: {
						text: 'SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement'
					},
					SL18: {
						text: 'SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name'
					},
					SL19: {
						text: 'SL19: Providing User Instructions With AutomationProperties.HelpText in Silverlight'
					},
					SL20: {
						text: 'SL20: Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name'
					},
					SL21: {
						text: 'SL21: Replacing A Silverlight Timed Animation With a Nonanimated Element'
					},
					SL22: {
						text: 'SL22: Supporting Browser Zoom in Silverlight'
					},
					SL23: {
						text: 'SL23: Using A Style Switcher to Increase Font Size of Silverlight Text Elements'
					},
					SL24: {
						text: 'SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically'
					},
					SL25: {
						text: 'SL25: Using Controls and Programmatic Focus to Bypass Blocks of Content in Silverlight'
					},
					SL26: {
						text: 'SL26: Using LabeledBy to Associate Labels and Targets in Silverlight'
					},
					SL27: {
						text: 'SL27: Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies'
					},
					SL28: {
						text: 'SL28: Using Separate Text-Format Text Captions for MediaElement Content'
					},
					SL29: {
						text: 'SL29: Using Silverlight "List" Controls to Define Blocks that can be Bypassed'
					},
					SL30: {
						text: 'SL30: Using Silverlight Control Compositing and AutomationProperties.Name'
					},
					SL31: {
						text: 'SL31: Using Silverlight Font Properties to Control Text Presentation'
					},
					SL32: {
						text: 'SL32: Using Silverlight Text Elements for Appropriate Accessibility Role'
					},
					SL33: {
						text: 'SL33: Using Well-Formed XAML to Define a Silverlight User Interface'
					},
					SL34: {
						text: 'SL34: Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties'
					},
					SL35: {
						text: 'SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight'
					}
				}
			},
			PDF: {
				text: 'PDF Techniques',
				onePage: 'pdf.html',
				techniques: {
					PDF1: {
						text: 'PDF1: Applying text alternatives to images with the Alt entry in PDF documents'
					},
					PDF2: {
						text: 'PDF2: Creating bookmarks in PDF documents'
					},
					PDF3: {
						text: 'PDF3: Ensuring correct tab and reading order in PDF documents'
					},
					PDF4: {
						text: 'PDF4: Hiding decorative images with the Artifact tag in PDF documents'
					},
					PDF5: {
						text: 'PDF5: Indicating required form controls in PDF forms'
					},
					PDF6: {
						text: 'PDF6: Using table elements for table markup in PDF Documents'
					},
					PDF7: {
						text: 'PDF7: Performing OCR on a scanned PDF document to provide actual text'
					},
					PDF8: {
						text: 'PDF8: Providing definitions for abbreviations via an E entry for a structure element'
					},
					PDF9: {
						text: 'PDF9: Providing headings by marking content with heading tags in PDF documents'
					},
					PDF10: {
						text: 'PDF10: Providing labels for interactive form controls in PDF documents'
					},
					PDF11: {
						text: 'PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents'
					},
					PDF12: {
						text: 'PDF12: Providing name, role, value information for form fields in PDF documents'
					},
					PDF13: {
						text: 'PDF13: Providing replacement text using the /Alt entry for links in PDF documents'
					},
					PDF14: {
						text: 'PDF14: Providing running headers and footers in PDF documents'
					},
					PDF15: {
						text: 'PDF15: Providing submit buttons with the submit-form action in PDF forms'
					},
					PDF16: {
						text: 'PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document'
					},
					PDF17: {
						text: 'PDF17: Specifying consistent page numbering for PDF documents'
					},
					PDF18: {
						text: 'PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document'
					},
					PDF19: {
						text: 'PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents'
					},
					PDF20: {
						text: 'PDF20: Using Adobe Acrobat Pro\'s Table Editor to repair mistagged tables'
					},
					PDF21: {
						text: 'PDF21: Using List tags for lists in PDF documents'
					},
					PDF22: {
						text: 'PDF22: Indicating when user input falls outside the required format or values in PDF forms'
					},
					PDF23: {
						text: 'PDF23: Providing interactive form controls in PDF documents'
					}
				}
			},
			F: {
				text: 'Common Failures',
				onePage: 'failures.html',
				techniques: {
					F1: {
						text: 'F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS'
					},
					F2: {
						text: 'F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text'
					},
					F3: {
						text: 'F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information'
					},
					F4: {
						text: 'F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds'
					},
					F7: {
						text: 'F7: Failure of Success Criterion 2.2.2 due to an object or applet, such as Java or Flash, that has blinking content without a mechanism to pause the content that blinks for more than five seconds'
					},
					F8: {
						text: 'F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects'
					},
					F9: {
						text: 'F9: Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element'
					},
					F10: {
						text: 'F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type'
					},
					F12: {
						text: 'F12: Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism for saving user\'s input and re-establishing that information upon re-authentication'
					},
					F13: {
						text: 'F13: Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image'
					},
					F14: {
						text: 'F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location'
					},
					F15: {
						text: 'F15: Failure of Success Criterion 4.1.2 due to implementing custom controls that do not use an accessibility API for the technology, or do so incompletely'
					},
					F16: {
						text: 'F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content'
					},
					F19: {
						text: 'F19: Failure of Conformance Requirement 1 due to not providing a method for the user to find the alternative conforming version of a non-conforming Web page'
					},
					F20: {
						text: 'F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur'
					},
					F22: {
						text: 'F22: Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user'
					},
					F23: {
						text: 'F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off'
					},
					F24: {
						text: 'F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa'
					},
					F25: {
						text: 'F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents'
					},
					F26: {
						text: 'F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information'
					},
					F30: {
						text: 'F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)'
					},
					F31: {
						text: 'F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages'
					},
					F32: {
						text: 'F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word'
					},
					F33: {
						text: 'F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content'
					},
					F34: {
						text: 'F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content'
					},
					F36: {
						text: 'F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and presenting new content without prior warning when the last field in the form is given a value'
					},
					F37: {
						text: 'F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed'
					},
					F38: {
						text: 'F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them'
					},
					F39: {
						text: 'F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology'
					},
					F40: {
						text: 'F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit'
					},
					F41: {
						text: 'F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page'
					},
					F42: {
						text: 'F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links'
					},
					F43: {
						text: 'F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content'
					},
					F44: {
						text: 'F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability'
					},
					F46: {
						text: 'F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables'
					},
					F47: {
						text: 'F47: Failure of Success Criterion 2.2.2 due to using the blink element'
					},
					F48: {
						text: 'F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information'
					},
					F49: {
						text: 'F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized'
					},
					F50: {
						text: 'F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less'
					},
					F52: {
						text: 'F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded'
					},
					F54: {
						text: 'F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function'
					},
					F55: {
						text: 'F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received'
					},
					F58: {
						text: 'F58: Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out'
					},
					F59: {
						text: 'F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control'
					},
					F60: {
						text: 'F60: Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field'
					},
					F61: {
						text: 'F61: Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content'
					},
					F63: {
						text: 'F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link'
					},
					F65: {
						text: 'F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"'
					},
					F66: {
						text: 'F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages'
					},
					F67: {
						text: 'F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information'
					},
					F68: {
						text: 'F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name'
					},
					F69: {
						text: 'F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured'
					},
					F70: {
						text: 'F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup'
					},
					F71: {
						text: 'F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative'
					},
					F72: {
						text: 'F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative'
					},
					F73: {
						text: 'F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision'
					},
					F74: {
						text: 'F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative'
					},
					F75: {
						text: 'F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page'
					},
					F77: {
						text: 'F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID'
					},
					F78: {
						text: 'F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator'
					},
					F79: {
						text: 'F79: Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available'
					},
					F80: {
						text: 'F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%'
					},
					F81: {
						text: 'F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only'
					},
					F82: {
						text: 'F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label'
					},
					F83: {
						text: 'F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)'
					},
					F84: {
						text: 'F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.'
					},
					F85: {
						text: 'F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order'
					},
					F86: {
						text: 'F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number'
					},
					F87: {
						text: 'F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the \'content\' property in CSS'
					},
					F88: {
						text: 'F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)'
					},
					F89: {
						text: 'F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link'
					},
					F90: {
						text: 'F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes'
					},
					F91: {
						text: 'F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers'
					},
					F92: {
						text: 'F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information'
					},
					F93: {
						text: 'F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays'
					}
				}
			}
		}
	},
	wcag21: {
		information: {
			1: {
				id: 'perceivable',
				text: '1. Perceivable: Information and user interface components must be presentable to users in ways they can perceive.',
				guidelines: {
					1: {
						id: 'text-alternatives',
						text: 'Guideline 1.1 Text Alternatives: Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.',
						successCriterions: {
							1: {
								id: 'non-text-content',
								handle: '1.1.1 Non-text Content',
								description: 'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below. Controls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Success Criterion 4.1.2 for additional requirements for controls and content that accepts user input.) Time-Based Media: If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.) Test: If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content. Sensory: If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content. CAPTCHA: If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. Decoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#non-text-content',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html',
								level: 1
							}
						}
					},
					2: {
						id: 'time-based-media',
						text: 'Guideline 1.2 Time-based Media: Provide alternatives for time-based media.',
						successCriterions: {
							1: {
								id: 'audio-only-and-video-only-prerecorded',
								handle: '1.2.1 Audio-only and Video-only (Prerecorded)',
								description: 'For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content. Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html',
								level: 1
							},
							2: {
								id: 'captions-prerecorded',
								handle: '1.2.2 Captions (Prerecorded)',
								description: 'Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html',
								level: 1
							},
							3: {
								id: 'audio-description-or-media-alternative-prerecorded',
								handle: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
								description: 'An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-description-or-media-alternative-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html',
								level: 1
							},
							4: {
								id: 'captions-live',
								handle: '1.2.4 Captions (Live)',
								description: 'Captions are provided for all live audio content in synchronized media.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#captions-live',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html',
								level: 2
							},
							5: {
								id: 'audio-description-prerecorded',
								handle: '1.2.5 Audio Description (Prerecorded)',
								description: 'Audio description is provided for all prerecorded video content in synchronized media.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html',
								level: 2
							},
							6: {
								id: 'sign-language-prerecorded',
								handle: '1.2.6 Sign Language (Prerecorded)',
								description: 'Sign language interpretation is provided for all prerecorded audio content in synchronized media.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#sign-language-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html',
								level: 3
							},
							7: {
								id: 'extended-audio-description-prerecorded',
								handle: '1.2.7 Extended Audio Description (Prerecorded)',
								description: 'Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#extended-audio-description-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html',
								level: 3
							},
							8: {
								id: 'media-alternative-prerecorded',
								handle: '1.2.8 Media Alternative (Prerecorded)',
								description: 'An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#media-alternative-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html',
								level: 3
							},
							9: {
								id: 'audio-only-live',
								handle: '1.2.9 Audio-only (Live)',
								description: 'An alternative for time-based media that presents equivalent information for live audio-only content is provided.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-only-live',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html',
								level: 3
							}
						}
					},
					3: {
						id: 'adaptable',
						text: 'Guideline 1.3 Adaptable: Create content that can be presented in different ways (for example simpler layout) without losing information or structure.',
						successCriterions: {
							1: {
								id: 'info-and-relationships',
								handle: '1.3.1 Info and Relationships',
								description: 'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html',
								level: 1
							},
							2: {
								id: 'meaningful-sequence',
								handle: '1.3.2 Meaningful Sequence',
								description: 'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html',
								level: 1
							},
							3: {
								id: 'sensory-characteristics',
								handle: '1.3.3 Sensory Characteristics',
								description: 'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound. Note: For requirements related to color, refer to Guideline 1.4.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#sensory-characteristics',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html',
								level: 1
							},
							4: {
								id: 'orientation',
								handle: '1.3.4 Orientation',
								description: 'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential. Note: Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#orientation',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/orientation.html',
								level: 2
							},
							5: {
								id: 'identify-input-purpose',
								handle: '1.3.5 Identify Input Purpose',
								description: 'The purpose of each input field collecting information about the user can be programmatically determined when: The input field serves a purpose identified in the Input Purposes for User Interface Components section; and The content is implemented using technologies with support for identifying the expected meaning for form input data.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html',
								level: 2
							},
							6: {
								id: 'identify-purpose',
								handle: '1.3.6 Identify Purpose',
								description: 'In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#identify-purpose',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html',
								level: 3
							}
						}
					},
					4: {
						id: 'distinguishable',
						text: 'Guideline 1.4 Distinguishable: Make it easier for users to see and hear content including separating foreground from background.',
						successCriterions: {
							1: {
								id: 'use-of-color',
								handle: '1.4.1 Use of Color',
								description: 'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. Note: This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#use-of-color',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html',
								level: 1
							},
							2: {
								id: 'audio-control',
								handle: '1.4.2 Audio Control',
								description: 'If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. Note: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-control',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html',
								level: 1
							},
							3: {
								id: 'contrast-minimum',
								handle: '1.4.3 Contrast (Minimum)',
								description: 'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1; Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. Logotypes: Text that is part of a logo or brand name has no contrast requirement.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html',
								level: 2
							},
							4: {
								id: 'resize-text',
								handle: '1.4.4 Resize text',
								description: 'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#resize-text',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html',
								level: 2
							},
							5: {
								id: 'images-of-text',
								handle: '1.4.5 Images of Text',
								description: 'If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following: Customizable: The image of text can be visually customized to the user\'s requirements; Essential: A particular presentation of text is essential to the information being conveyed. Note: Logotypes (text that is part of a logo or brand name) are considered essential.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#images-of-text',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html',
								level: 2
							},
							6: {
								id: 'contrast-enhanced',
								handle: '1.4.6 Contrast (Enhanced)',
								description: 'The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following: Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1; Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. Logotypes: Text that is part of a logo or brand name has no contrast requirement.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html',
								level: 3
							},
							7: {
								id: 'low-or-no-background-audio',
								handle: '1.4.7 Low or No Background Audio',
								description: 'For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: No Background: The audio does not contain background sounds. Turn Off: The background sounds can be turned off. 20 dB: The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds. Note: Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#low-or-no-background-audio',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html',
								level: 3
							},
							8: {
								id: 'visual-presentation',
								handle: '1.4.8 Visual Presentation',
								description: 'For the visual presentation of blocks of text, a mechanism is available to achieve the following: Foreground and background colors can be selected by the user. Width is no more than 80 characters or glyphs (40 if CJK). Text is not justified (aligned to both the left and the right margins). Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing. Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html',
								level: 3
							},
							9: {
								id: 'images-of-text-no-exception',
								handle: '1.4.9 Images of Text (No Exception)',
								description: 'Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed. Note: Logotypes (text that is part of a logo or brand name) are considered essential.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#images-of-text-no-exception',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html',
								level: 3
							},
							10: {
								id: 'reflow',
								handle: '1.4.10 Reflow',
								description: 'Success Criterion 1.4.10 Reflow§  Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels. Except for parts of the content which require two-dimensional layout for usage or meaning. Note:  320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which are designed to scroll horizontally (e.g. with vertical text), the 256 CSS pixels is equivalent to a starting viewport height of 1024px at 400% zoom. Note: Examples of content which require two-dimensional layout are images, maps, diagrams, video, games, presentations, data tables, and interfaces where it is necessary to keep toolbars in view while manipulating content.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#reflow',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/reflow.html',
								level: 2
							},
							11: {
								id: 'non-text-contrast',
								handle: '1.4.11 Non-text Contrast',
								description: 'Success Criterion 1.4.11 Non-text Contrast§  The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author; Graphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html',
								level: 2
							},
							12: {
								id: 'text-spacing',
								handle: '1.4.12 Text Spacing',
								description: 'Success Criterion 1.4.12 Text Spacing§  In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property: Line height (line spacing) to at least 1.5 times the font size; Spacing following paragraphs to at least 2 times the font size; Letter spacing (tracking) to at least 0.12 times the font size; Word spacing to at least 0.16 times the font size. Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#text-spacing',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html',
								level: 2
							},
							13: {
								id: 'content-on-hover-or-focus',
								handle: '1.4.13 Content on Hover or Focus',
								description: 'Success Criterion 1.4.13 Content on Hover or Focus§  Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: Dismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content; Hoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing; Persistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid. Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author. Note: Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML title attribute. Note: Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html',
								level: 2
							}
						}
					}
				}
			},
			2: {
				id: 'operable',
				text: '2. Operable: User interface components and navigation must be operable.',
				guidelines: {
					1: {
						id: 'keyboard-accessible',
						text: 'Guideline 2.1 Keyboard Accessible: Make all functionality available from a keyboard.',
						successCriterions: {
							1: {
								id: 'keyboard',
								handle: '2.1.1 Keyboard',
								description: 'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints. Note: This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not. Note: This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#keyboard',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html',
								level: 1
							},
							2: {
								id: 'no-keyboard-trap',
								handle: '2.1.2 No Keyboard Trap',
								description: 'If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. Note: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html',
								level: 1
							},
							3: {
								id: 'keyboard-no-exception',
								handle: '2.1.3 Keyboard (No Exception)',
								description: 'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#keyboard-no-exception',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html',
								level: 3
							},
							4: {
								id: 'character-key-shortcuts',
								handle: '2.1.4 Character Key Shortcuts',
								description: 'If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true: Turn off: A mechanism is available to turn the shortcut off; Remap: A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc); Active only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html',
								level: 1
							}
						}
					},
					2: {
						id: 'enough-time',
						text: 'Guideline 2.2 Enough Time: Provide users enough time to read and use content.',
						successCriterions: {
							1: {
								id: 'timing-adjustable',
								handle: '2.2.1 Timing Adjustable',
								description: 'For each time limit that is set by the content, at least one of the following is true: Turn off: The user is allowed to turn off the time limit before encountering it; or Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or Essential Exception: The time limit is essential and extending it would invalidate the activity; or 20 Hour Exception: The time limit is longer than 20 hours. Note: This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html',
								level: 1
							},
							2: {
								id: 'pause-stop-hide',
								handle: '2.2.2 Pause, Stop, Hide',
								description: 'Success Criterion 2.2.2 Pause, Stop, Hide§  For moving, blinking, scrolling, or auto-updating information, all of the following are true: Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential. Note: For requirements related to flickering or flashing content, refer to Guideline 2.3. Note: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. Note: Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so. Note: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html',
								level: 1
							},
							3: {
								id: 'no-timing',
								handle: '2.2.3 No Timing',
								description: 'Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#no-timing',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html',
								level: 3
							},
							4: {
								id: 'interruptions',
								handle: '2.2.4 Interruptions',
								description: 'Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#interruptions',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html',
								level: 3
							},
							5: {
								id: 're-authenticating',
								handle: '2.2.5 Re-authenticating',
								description: 'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#re-authenticating',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html',
								level: 3
							},
							6: {
								id: 'timeouts',
								handle: '2.2.6 Timeouts',
								description: 'Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions. Note: Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#timeouts',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html',
								level: 3
							}
						}
					},
					3: {
						id: 'seizures-and-physical-reactions',
						text: 'Guideline 2.3 Seizures and Physical Reactions: Do not design content in a way that is known to cause seizures or physical reactions.',
						successCriterions: {
							1: {
								id: 'three-flashes-or-below-threshold',
								handle: '2.3.1 Three Flashes or Below Threshold',
								description: 'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds. Note: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html',
								level: 1
							},
							2: {
								id: 'three-flashes',
								handle: '2.3.2 Three Flashes',
								description: 'Web pages do not contain anything that flashes more than three times in any one second period.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#three-flashes',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html',
								level: 3
							},
							3: {
								id: 'animation-from-interactions',
								handle: '2.3.3 Animation from Interactions',
								description: 'Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html',
								level: 3
							}
						}
					},
					4: {
						id: 'navigable',
						text: 'Guideline 2.4 Navigable: Provide ways to help users navigate, find content, and determine where they are.',
						successCriterions: {
							1: {
								id: 'bypass-blocks',
								handle: '2.4.1 Bypass Blocks',
								description: 'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html',
								level: 1
							},
							2: {
								id: 'page-titled',
								handle: '2.4.2 Page Titled',
								description: 'Web pages have titles that describe topic or purpose.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#page-titled',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html',
								level: 1
							},
							3: {
								id: 'focus-order',
								handle: '2.4.3 Focus Order',
								description: 'If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#focus-order',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html',
								level: 1
							},
							4: {
								id: 'link-purpose-in-context',
								handle: '2.4.4 Link Purpose (In Context)',
								description: 'The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html',
								level: 1
							},
							5: {
								id: 'multiple-ways',
								handle: '2.4.5 Multiple Ways',
								description: 'More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html',
								level: 2
							},
							6: {
								id: 'headings-and-labels',
								handle: '2.4.6 Headings and Labels',
								description: 'Headings and labels describe topic or purpose.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html',
								level: 2
							},
							7: {
								id: 'focus-visible',
								handle: '2.4.7 Focus Visible',
								description: 'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#focus-visible',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html',
								level: 2
							},
							8: {
								id: 'location',
								handle: '2.4.8 Location',
								description: 'Information about the user\'s location within a set of Web pages is available.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#location',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/location.html',
								level: 3
							},
							9: {
								id: 'link-purpose-link-only',
								handle: '2.4.9 Link Purpose (Link Only)',
								description: 'A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html',
								level: 3
							},
							10: {
								id: 'section-headings',
								handle: '2.4.10 Section Headings',
								description: 'Success Criterion 2.4.10 Section Headings§  Section headings are used to organize the content. Note: "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content. Note: This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#section-headings',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html',
								level: 3
							}
						}
					},
					5: {
						id: 'input-modalities',
						text: 'Guideline 2.5 Input Modalities: Make it easier for users to operate functionality through various inputs beyond keyboard.',
						successCriterions: {
							1: {
								id: 'pointer-gestures',
								handle: '2.5.1 Pointer Gestures',
								description: 'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential. Note: This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html',
								level: 1
							},
							2: {
								id: 'pointer-cancellation',
								handle: '2.5.2 Pointer Cancellation',
								description: 'For functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event: The down-event of the pointer is not used to execute any part of the function; Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion; Up Reversal: The up-event reverses any outcome of the preceding down-event; Essential: Completing the function on the down-event is essential. Note: Functions that emulate a keyboard or numeric keypad key press are considered essential. Note: This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html',
								level: 1
							},
							3: {
								id: 'label-in-name',
								handle: '2.5.3 Label in Name',
								description: 'For user interface components with labels that include text or images of text, the name contains the text that is presented visually. Note: A best practice is to have the text of the label at the start of the name.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#label-in-name',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html',
								level: 1
							},
							4: {
								id: 'motion-actuation',
								handle: '2.5.4 Motion Actuation',
								description: 'Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: Supported Interface: The motion is used to operate functionality through an accessibility supported interface; Essential: The motion is essential for the function and doing so would invalidate the activity.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#motion-actuation',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html',
								level: 1
							},
							5: {
								id: 'target-size',
								handle: '2.5.5 Target Size',
								description: 'The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when: Equivalent: The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels; Inline: The target is in a sentence or block of text; User Agent Control: The size of the target is determined by the user agent and is not modified by the author; Essential: A particular presentation of the target is essential to the information being conveyed.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#target-size',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html',
								level: 3
							},
							6: {
								id: 'concurrent-input-mechanisms',
								handle: '2.5.6 Concurrent Input Mechanisms',
								description: 'Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#concurrent-input-mechanisms',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html',
								level: 3
							}
						}
					}
				}
			},
			3: {
				id: 'understandable',
				text: '3. Understandable: Information and the operation of user interface must be understandable.',
				guidelines: {
					1: {
						id: 'readable',
						text: 'Guideline 3.1 Readable: Make text content readable and understandable.',
						successCriterions: {
							1: {
								id: 'language-of-page',
								handle: '3.1.1 Language of Page',
								description: 'The default human language of each Web page can be programmatically determined.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#language-of-page',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html',
								level: 1
							},
							2: {
								id: 'language-of-parts',
								handle: '3.1.2 Language of Parts',
								description: 'The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html',
								level: 2
							},
							3: {
								id: 'unusual-words',
								handle: '3.1.3 Unusual Words',
								description: 'A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#unusual-words',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html',
								level: 3
							},
							4: {
								id: 'abbreviations',
								handle: '3.1.4 Abbreviations',
								description: 'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#abbreviations',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html',
								level: 3
							},
							5: {
								id: 'reading-level',
								handle: '3.1.5 Reading Level',
								description: 'When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#reading-level',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html',
								level: 3
							},
							6: {
								id: 'pronunciation',
								handle: '3.1.6 Pronunciation',
								description: 'A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#pronunciation',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html',
								level: 3
							}
						}
					},
					2: {
						id: 'predictable',
						text: 'Guideline 3.2 Predictable: Make Web pages appear and operate in predictable ways.',
						successCriterions: {
							1: {
								id: 'on-focus',
								handle: '3.2.1 On Focus',
								description: 'When any user interface component receives focus, it does not initiate a change of context.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#on-focus',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html',
								level: 1
							},
							2: {
								id: 'on-input',
								handle: '3.2.2 On Input',
								description: 'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#on-input',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html',
								level: 1
							},
							3: {
								id: 'consistent-navigation',
								handle: '3.2.3 Consistent Navigation',
								description: 'Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html',
								level: 2
							},
							4: {
								id: 'consistent-identification',
								handle: '3.2.4 Consistent Identification',
								description: 'Components that have the same functionality within a set of Web pages are identified consistently.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html',
								level: 2
							},
							5: {
								id: 'change-on-request',
								handle: '3.2.5 Change on Request',
								description: 'Changes of context are initiated only by user request or a mechanism is available to turn off such changes.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#change-on-request',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html',
								level: 3
							}
						}
					},
					3: {
						id: 'input-assistance',
						text: 'Guideline 3.3 Input Assistance: Help users avoid and correct mistakes.',
						successCriterions: {
							1: {
								id: 'error-identification',
								handle: '3.3.1 Error Identification',
								description: 'If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#error-identification',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html',
								level: 1
							},
							2: {
								id: 'labels-or-instructions',
								handle: '3.3.2 Labels or Instructions',
								description: 'Labels or instructions are provided when content requires user input.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html',
								level: 1
							},
							3: {
								id: 'error-suggestion',
								handle: '3.3.3 Error Suggestion',
								description: 'If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html',
								level: 2
							},
							4: {
								id: 'error-prevention-legal-financial-data',
								handle: '3.3.4 Error Prevention (Legal, Financial, Data)',
								description: 'Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data)§  For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: Reversible: Submissions are reversible. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-legal-financial-data',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html',
								level: 2
							},
							5: {
								id: 'help',
								handle: '3.3.5 Help',
								description: 'Context-sensitive help is available.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#help',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/help.html',
								level: 3
							},
							6: {
								id: 'error-prevention-all',
								handle: '3.3.6 Error Prevention (All)',
								description: 'For Web pages that require the user to submit information, at least one of the following is true: Reversible: Submissions are reversible. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-all',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html',
								level: 3
							}
						}
					}
				}
			},
			4: {
				id: 'robust',
				text: '4. Robust: Content must be robust enough that it can be interpreted by by a wide variety of user agents, including assistive technologies.',
				guidelines: {
					1: {
						id: 'compatible',
						text: 'Guideline 4.1 Compatible: Maximize compatibility with current and future user agents, including assistive technologies.',
						successCriterions: {
							1: {
								id: 'parsing',
								handle: '4.1.1 Parsing',
								description: 'In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. Note: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#parsing',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html',
								level: 1
							},
							2: {
								id: 'name-role-value',
								handle: '4.1.2 Name, Role, Value',
								description: 'Success Criterion 4.1.2 Name, Role, Value§  For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. Note: This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#name-role-value',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html',
								level: 1
							},
							3: {
								id: 'status-messages',
								handle: '4.1.3 Status Messages',
								description: 'In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.',
								quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#status-messages',
								detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html',
								level: 2
							}
						}
					}
				}
			},
			url: 'https://www.w3.org/TR/WCAG21/'
		},
		techniques: {
			url: 'https://www.w3.org/WAI/WCAG21/Techniques/',
			ARIA: {
				id: 'aria',
				text: 'ARIA Techniques',
				techniques: {
					ARIA1: {
						text: 'ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls'
					},
					ARIA2: {
						text: 'ARIA2: Identifying a required field with the aria-required property'
					},
					ARIA4: {
						text: 'ARIA4: Using a WAI-ARIA role to expose the role of a user interface component'
					},
					ARIA5: {
						text: 'ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component'
					},
					ARIA6: {
						text: 'ARIA6: Using aria-label to provide labels for objects'
					},
					ARIA7: {
						text: 'ARIA7: Using aria-labelledby for link purpose'
					},
					ARIA8: {
						text: 'ARIA8: Using aria-label for link purpose'
					},
					ARIA9: {
						text: 'ARIA9: Using aria-labelledby to concatenate a label from several text nodes'
					},
					ARIA10: {
						text: 'ARIA10: Using aria-labelledby to provide a text alternative for non-text content'
					},
					ARIA11: {
						text: 'ARIA11: Using ARIA landmarks to identify regions of a page'
					},
					ARIA12: {
						text: 'ARIA12: Using role=heading to identify headings'
					},
					ARIA13: {
						text: 'ARIA13: Using aria-labelledby to name regions and landmarks'
					},
					ARIA14: {
						text: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used'
					},
					ARIA15: {
						text: 'ARIA15: Using aria-describedby to provide descriptions of images'
					},
					ARIA16: {
						text: 'ARIA16: Using aria-labelledby to provide a name for user interface controls'
					},
					ARIA17: {
						text: 'ARIA17: Using grouping roles to identify related form controls'
					},
					ARIA18: {
						text: 'ARIA18: Using aria-alertdialog to Identify Errors'
					},
					ARIA19: {
						text: 'ARIA19: Using ARIA role=alert or Live Regions to Identify Errors'
					},
					ARIA20: {
						text: 'ARIA20: Using the region role to identify a region of the page'
					},
					ARIA21: {
						text: 'ARIA21: Using Aria-Invalid to Indicate An Error Field'
					},
					ARIA22: {
						text: 'ARIA22: Using role=status to present status messages'
					},
					ARIA23: {
						text: 'ARIA23: Using role=log to identify sequential information updates'
					},
					ARIA24: {
						text: 'ARIA24: Semantically identifying a font icon with role="img"'
					}
				}
			},
			SCR: {
				id: 'client-side-script',
				text: 'Client-Side Script Techniques',
				techniques: {
					SCR1: {
						text: 'SCR1: Allowing the user to extend the default time limit'
					},
					SCR2: {
						text: 'SCR2: Using redundant keyboard and mouse event handlers'
					},
					SCR14: {
						text: 'SCR14: Using scripts to make nonessential alerts optional'
					},
					SCR16: {
						text: 'SCR16: Providing a script that warns the user a time limit is about to expire'
					},
					SCR18: {
						text: 'SCR18: Providing client-side validation and alert'
					},
					SCR19: {
						text: 'SCR19: Using an onchange event on a select element without causing a change of context'
					},
					SCR20: {
						text: 'SCR20: Using both keyboard and other device-specific functions'
					},
					SCR21: {
						text: 'SCR21: Using functions of the Document Object Model (DOM) to add content to a page'
					},
					SCR22: {
						text: 'SCR22: Using scripts to control blinking and stop it in five seconds or less'
					},
					SCR24: {
						text: 'SCR24: Using progressive enhancement to open new windows on user request'
					},
					SCR26: {
						text: 'SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element'
					},
					SCR27: {
						text: 'SCR27: Reordering page sections using the Document Object Model'
					},
					SCR28: {
						text: 'SCR28: Using an expandable and collapsible menu to bypass block of content'
					},
					SCR29: {
						text: 'SCR29: Adding keyboard-accessible actions to static HTML elements'
					},
					SCR30: {
						text: 'SCR30: Using scripts to change the link text'
					},
					SCR31: {
						text: 'SCR31: Using script to change the background color or border of the element with focus'
					},
					SCR32: {
						text: 'SCR32: Providing client-side validation and adding error text via the DOM'
					},
					SCR33: {
						text: 'SCR33: Using script to scroll content, and providing a mechanism to pause it'
					},
					SCR34: {
						text: 'SCR34: Calculating size and position in a way that scales with text size'
					},
					SCR35: {
						text: 'SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons'
					},
					SCR36: {
						text: 'SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area'
					},
					SCR37: {
						text: 'SCR37: Creating Custom Dialogs in a Device Independent Way'
					},
					SCR38: {
						text: 'SCR38: Creating a conforming alternate version for a web page designed with progressive enhancement'
					},
					SCR39: {
						text: 'SCR39: Making content on focus or hover hoverable, dismissible, and persistent'
					}
				}
			},
			C: {
				id: 'css',
				text: 'CSS Techniques',
				techniques: {
					C6: {
						text: 'C6: Positioning content based on structural markup'
					},
					C7: {
						text: 'C7: Using CSS to hide a portion of the link text'
					},
					C8: {
						text: 'C8: Using CSS letter-spacing to control spacing within a word'
					},
					C9: {
						text: 'C9: Using CSS to include decorative images'
					},
					C12: {
						text: 'C12: Using percent for font sizes'
					},
					C13: {
						text: 'C13: Using named font sizes'
					},
					C14: {
						text: 'C14: Using em units for font sizes'
					},
					C15: {
						text: 'C15: Using CSS to change the presentation of a user interface component when it receives focus'
					},
					C17: {
						text: 'C17: Scaling form elements which contain text'
					},
					C18: {
						text: 'C18: Using CSS margin and padding rules instead of spacer images for layout design'
					},
					C19: {
						text: 'C19: Specifying alignment either to the left OR right in CSS'
					},
					C20: {
						text: 'C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized'
					},
					C21: {
						text: 'C21: Specifying line spacing in CSS'
					},
					C22: {
						text: 'C22: Using CSS to control visual presentation of text'
					},
					C23: {
						text: 'C23: Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content'
					},
					C24: {
						text: 'C24: Using percentage values in CSS for container sizes'
					},
					C25: {
						text: 'C25: Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors'
					},
					C27: {
						text: 'C27: Making the DOM order match the visual order'
					},
					C28: {
						text: 'C28: Specifying the size of text containers using em units'
					},
					C29: {
						text: 'C29: Using a style switcher to provide a conforming alternate version'
					},
					C30: {
						text: 'C30: Using CSS to replace text with images of text and providing user interface controls to switch'
					},
					C31: {
						text: 'C31: Using CSS Flexbox to reflow content'
					},
					C32: {
						text: 'C32: Using media queries and grid CSS to reflow columns'
					},
					C33: {
						text: 'C33: Allowing for Reflow with Long URLs and Strings of Text'
					},
					C34: {
						text: 'C34: Using media queries to un-fixing sticky headers / footers'
					},
					C35: {
						text: 'C35: Allowing for text spacing without wrapping'
					},
					C36: {
						text: 'C36: Allowing for text spacing override'
					},
					C37: {
						text: 'C37: Using CSS max-width and height to fit images'
					},
					C38: {
						text: 'C38: Using CSS width, max-width and flexbox to fit labels and inputs'
					},
					C39: {
						text: 'C39: Using the CSS reduce-motion query to prevent motion'
					},
					C40: {
						text: 'C40: Creating a two-color focus indicator to ensure sufficient contrast with all components'
					},
					C41: {
						text: 'C41: Creating a focus indicator within the component'
					}
				}
			},
			F: {
				id: 'failures',
				text: 'Common Failures',
				techniques: {
					F1: {
						text: 'F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS'
					},
					F2: {
						text: 'F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text'
					},
					F3: {
						text: 'F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information'
					},
					F4: {
						text: 'F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds'
					},
					F7: {
						text: 'F7: Failure of Success Criterion 2.2.2 due to an object or applet for more than five seconds'
					},
					F8: {
						text: 'F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects'
					},
					F9: {
						text: 'F9: Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element'
					},
					F10: {
						text: 'F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type'
					},
					F12: {
						text: 'F12: Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism re-authentication'
					},
					F13: {
						text: 'F13: Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image'
					},
					F14: {
						text: 'F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location'
					},
					F15: {
						text: 'F15: Failure of Success Criterion 4.1.2 due to implementing custom controls that do not use an accessibility API for the technology, or do so incompletely'
					},
					F16: {
						text: 'F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content'
					},
					F19: {
						text: 'F19: Failure of Conformance Requirement 1 due to not providing a method for the user to find the alternative conforming version of a non-conforming Web page'
					},
					F20: {
						text: 'F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur'
					},
					F22: {
						text: 'F22: Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user'
					},
					F23: {
						text: 'F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off'
					},
					F24: {
						text: 'F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa'
					},
					F25: {
						text: 'F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents'
					},
					F26: {
						text: 'F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information'
					},
					F30: {
						text: 'F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)'
					},
					F31: {
						text: 'F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages'
					},
					F32: {
						text: 'F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word'
					},
					F33: {
						text: 'F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content'
					},
					F34: {
						text: 'F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content'
					},
					F36: {
						text: 'F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and given a value'
					},
					F37: {
						text: 'F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed'
					},
					F38: {
						text: 'F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them'
					},
					F39: {
						text: 'F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology'
					},
					F40: {
						text: 'F40: Failure due to using meta redirect with a time limit'
					},
					F41: {
						text: 'F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page'
					},
					F42: {
						text: 'F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links'
					},
					F43: {
						text: 'F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content'
					},
					F44: {
						text: 'F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability'
					},
					F46: {
						text: 'F46: Failure of Success Criterion 1.3.1 due to using th elements, layout tables'
					},
					F47: {
						text: 'F47: Failure of Success Criterion 2.2.2 due to using the blink element'
					},
					F48: {
						text: 'F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information'
					},
					F49: {
						text: 'F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized'
					},
					F50: {
						text: 'F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less'
					},
					F52: {
						text: 'F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded'
					},
					F54: {
						text: 'F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function'
					},
					F55: {
						text: 'F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received'
					},
					F58: {
						text: 'F58: Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out'
					},
					F59: {
						text: 'F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control'
					},
					F60: {
						text: 'F60: Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field'
					},
					F61: {
						text: 'F61: Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content'
					},
					F63: {
						text: 'F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link'
					},
					F65: {
						text: 'F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"'
					},
					F66: {
						text: 'F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages'
					},
					F67: {
						text: 'F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information'
					},
					F68: {
						text: 'F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name'
					},
					F69: {
						text: 'F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured'
					},
					F70: {
						text: 'F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup'
					},
					F71: {
						text: 'F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative'
					},
					F72: {
						text: 'F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative'
					},
					F73: {
						text: 'F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision'
					},
					F74: {
						text: 'F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative'
					},
					F75: {
						text: 'F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page'
					},
					F77: {
						text: 'F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID'
					},
					F78: {
						text: 'F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator'
					},
					F79: {
						text: 'F79: Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available'
					},
					F80: {
						text: 'F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%'
					},
					F81: {
						text: 'F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only'
					},
					F82: {
						text: 'F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label'
					},
					F83: {
						text: 'F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)'
					},
					F84: {
						text: 'F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.'
					},
					F85: {
						text: 'F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order'
					},
					F86: {
						text: 'F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number'
					},
					F87: {
						text: 'F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the \'content\' property in CSS'
					},
					F88: {
						text: 'F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)'
					},
					F89: {
						text: 'F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link'
					},
					F90: {
						text: 'F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes'
					},
					F91: {
						text: 'F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers'
					},
					F92: {
						text: 'F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information'
					},
					F93: {
						text: 'F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays'
					},
					F94: {
						text: 'F94: Failure of Success Criterion 1.4.4 due to incorrect use of viewport units to resize text'
					},
					F95: {
						text: 'F95: Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable'
					},
					F96: {
						text: 'F96: Failure due to the accessible name not containing the visible label text'
					},
					F97: {
						text: 'F97: Failure due to locking the orientation to landscape or portrait view'
					},
					F98: {
						text: 'F98: Failure due to interactions being limited to touch-only on touchscreen devices'
					},
					F99: {
						text: 'F99: Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped'
					},
					F100: {
						text: 'F100: Failure of Success Criterion 1.3.4 due to showing a message asking to reorient device'
					},
					F101: {
						text: 'F101: Failure of Success Criterion 2.5.2 due to activating a control on the down-event'
					},
					F102: {
						text: 'F102: Failure of Success Criterion 1.4.10 due to content disappearing and not being available when content has reflowed'
					},
					F103: {
						text: 'F103: Failure of Success Criterion 4.1.3 due to providing status messages that cannot be programmatically determined through role or properties'
					},
					F104: {
						text: 'F104: Failure of Success Criterion 1.4.12 due to clipped or overlapped content when text spacing is adjusted'
					},
					F105: {
						text: 'F105: Failure of Success Criterion 2.5.1 due to providing functionality via a path-based gesture without simple pointer alternative'
					},
					F106: {
						text: 'F106: Failure due to inability to deactivate motion actuation'
					},
					F107: {
						text: 'F107: Failure of Success Criterion 1.3.5 due to incorrect autocomplete attribute values'
					}
				}
			},
			G: {
				id: 'general',
				text: 'General Techniques',
				techniques: {
					G1: {
						text: 'G1: Adding a link at the top of each page that goes directly to the main content area'
					},
					G4: {
						text: 'G4: Allowing the content to be paused and restarted from where it was paused'
					},
					G5: {
						text: 'G5: Allowing users to complete an activity without any time limit'
					},
					G8: {
						text: 'G8: Providing a movie with extended audio descriptions'
					},
					G9: {
						text: 'G9: Creating captions for live synchronized media'
					},
					G10: {
						text: 'G10: Creating components using a technology that supports the accessibility notification of changes'
					},
					G11: {
						text: 'G11: Creating content that blinks for less than 5 seconds'
					},
					G13: {
						text: 'G13: Describing what will happen before a change to a form control that causes a change of context to occur is made'
					},
					G14: {
						text: 'G14: Ensuring that information conveyed by color differences is also available in text'
					},
					G15: {
						text: 'G15: Using a tool to ensure that content does not violate the general flash threshold or red flash threshold'
					},
					G17: {
						text: 'G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text'
					},
					G18: {
						text: 'G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text'
					},
					G19: {
						text: 'G19: Ensuring that no component of the content flashes more than three times in any 1-second period'
					},
					G21: {
						text: 'G21: Ensuring that users are not trapped in content'
					},
					G53: {
						text: 'G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence'
					},
					G54: {
						text: 'G54: Including a sign language interpreter in the video stream'
					},
					G55: {
						text: 'G55: Linking to definitions'
					},
					G56: {
						text: 'G56: Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content'
					},
					G57: {
						text: 'G57: Ordering the content in a meaningful sequence'
					},
					G58: {
						text: 'G58: Placing a link to the alternative for time-based media immediately next to the non-text content'
					},
					G59: {
						text: 'G59: Placing the interactive elements in an order that follows sequences and relationships within the content'
					},
					G60: {
						text: 'G60: Playing a sound that turns off automatically within three seconds'
					},
					G61: {
						text: 'G61: Presenting repeated components in the same relative order each time they appear'
					},
					G62: {
						text: 'G62: Providing a glossary'
					},
					G63: {
						text: 'G63: Providing a site map'
					},
					G64: {
						text: 'G64: Providing a Table of Contents'
					},
					G65: {
						text: 'G65: Providing a breadcrumb trail'
					},
					G68: {
						text: 'G68: Providing a short text alternative that describes the purpose of live audio-only and live video-only content'
					},
					G69: {
						text: 'G69: Providing an alternative for time based media'
					},
					G70: {
						text: 'G70: Providing a function to search an online dictionary'
					},
					G71: {
						text: 'G71: Providing a help link on every Web page'
					},
					G73: {
						text: 'G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content'
					},
					G74: {
						text: 'G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description'
					},
					G75: {
						text: 'G75: Providing a mechanism to postpone any updating of content'
					},
					G76: {
						text: 'G76: Providing a mechanism to request an update of the content instead of updating automatically'
					},
					G78: {
						text: 'G78: Providing a second, user-selectable, audio track that includes audio descriptions'
					},
					G79: {
						text: 'G79: Providing a spoken version of the text'
					},
					G80: {
						text: 'G80: Providing a submit button to initiate a change of context'
					},
					G81: {
						text: 'G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player'
					},
					G82: {
						text: 'G82: Providing a text alternative that identifies the purpose of the non-text content'
					},
					G83: {
						text: 'G83: Providing text descriptions to identify required fields that were not completed'
					},
					G84: {
						text: 'G84: Providing a text description when the user provides information that is not in the list of allowed values'
					},
					G85: {
						text: 'G85: Providing a text description when user input falls outside the required format or values'
					},
					G86: {
						text: 'G86: Providing a text summary that can be understood by people with lower secondary education level reading ability'
					},
					G87: {
						text: 'G87: Providing closed captions'
					},
					G88: {
						text: 'G88: Providing descriptive titles for Web pages'
					},
					G89: {
						text: 'G89: Providing expected data format and example'
					},
					G90: {
						text: 'G90: Providing keyboard-triggered event handlers'
					},
					G91: {
						text: 'G91: Providing link text that describes the purpose of a link'
					},
					G92: {
						text: 'G92: Providing long description for non-text content that serves the same purpose and presents the same information'
					},
					G93: {
						text: 'G93: Providing open (always visible) captions'
					},
					G94: {
						text: 'G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content'
					},
					G95: {
						text: 'G95: Providing short text alternatives that provide a brief description of the non-text content'
					},
					G96: {
						text: 'G96: Providing textual identification of items that otherwise rely only on sensory information to be understood'
					},
					G97: {
						text: 'G97: Providing the first use of an abbreviation immediately before or after the expanded form'
					},
					G98: {
						text: 'G98: Providing the ability for the user to review and correct answers before submitting'
					},
					G99: {
						text: 'G99: Providing the ability to recover deleted information'
					},
					G100: {
						text: 'G100: Providing a short text alternative which is the accepted name or a descriptive name of the non-text content'
					},
					G101: {
						text: 'G101: Providing the definition of a word or phrase used in an unusual or restricted way'
					},
					G102: {
						text: 'G102: Providing the expansion or explanation of an abbreviation'
					},
					G103: {
						text: 'G103: Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes'
					},
					G105: {
						text: 'G105: Saving data so that it can be used after a user re-authenticates'
					},
					G107: {
						text: 'G107: Using "activate" rather than "focus" as a trigger for changes of context'
					},
					G108: {
						text: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes'
					},
					G110: {
						text: 'G110: Using an instant client-side redirect'
					},
					G111: {
						text: 'G111: Using color and pattern'
					},
					G112: {
						text: 'G112: Using inline definitions'
					},
					G115: {
						text: 'G115: Using semantic elements to mark up structure'
					},
					G117: {
						text: 'G117: Using text to convey information that is conveyed by variations in presentation of text'
					},
					G120: {
						text: 'G120: Providing the pronunciation immediately following the word'
					},
					G121: {
						text: 'G121: Linking to pronunciations'
					},
					G123: {
						text: 'G123: Adding a link at the beginning of a block of repeated content to go to the end of the block'
					},
					G124: {
						text: 'G124: Adding links at the top of the page to each area of the content'
					},
					G125: {
						text: 'G125: Providing links to navigate to related Web pages'
					},
					G126: {
						text: 'G126: Providing a list of links to all other Web pages'
					},
					G127: {
						text: 'G127: Identifying a Web page\'s relationship to a larger collection of Web pages'
					},
					G128: {
						text: 'G128: Indicating current location within navigation bars'
					},
					G130: {
						text: 'G130: Providing descriptive headings'
					},
					G131: {
						text: 'G131: Providing descriptive labels'
					},
					G133: {
						text: 'G133: Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit'
					},
					G134: {
						text: 'G134: Validating Web pages'
					},
					G135: {
						text: 'G135: Using the accessibility API features of a technology to expose names and notification of changes'
					},
					G136: {
						text: 'G136: Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version'
					},
					G138: {
						text: 'G138: Using semantic markup whenever color cues are used'
					},
					G139: {
						text: 'G139: Creating a mechanism that allows users to jump to errors'
					},
					G140: {
						text: 'G140: Separating information and structure from presentation to enable different presentations'
					},
					G141: {
						text: 'G141: Organizing a page using headings'
					},
					G142: {
						text: 'G142: Using a technology that has commonly-available user agents that support zoom'
					},
					G143: {
						text: 'G143: Providing a text alternative that describes the purpose of the CAPTCHA'
					},
					G144: {
						text: 'G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality'
					},
					G145: {
						text: 'G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text'
					},
					G146: {
						text: 'G146: Using liquid layout'
					},
					G148: {
						text: 'G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults'
					},
					G149: {
						text: 'G149: Using user interface components that are highlighted by the user agent when they receive focus'
					},
					G150: {
						text: 'G150: Providing text based alternatives for live audio-only content'
					},
					G151: {
						text: 'G151: Providing a link to a text transcript of a prepared statement or script if the script is followed'
					},
					G152: {
						text: 'G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)'
					},
					G153: {
						text: 'G153: Making the text easier to read'
					},
					G155: {
						text: 'G155: Providing a checkbox in addition to a submit button'
					},
					G156: {
						text: 'G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text'
					},
					G157: {
						text: 'G157: Incorporating a live audio captioning service into a Web page'
					},
					G158: {
						text: 'G158: Providing an alternative for time-based media for audio-only content'
					},
					G159: {
						text: 'G159: Providing an alternative for time-based media for video-only content'
					},
					G160: {
						text: 'G160: Providing sign language versions of information, ideas, and processes that must be understood in order to use the content'
					},
					G161: {
						text: 'G161: Providing a search function to help users find content'
					},
					G162: {
						text: 'G162: Positioning labels to maximize predictability of relationships'
					},
					G163: {
						text: 'G163: Using standard diacritical marks that can be turned off'
					},
					G164: {
						text: 'G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request'
					},
					G165: {
						text: 'G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over'
					},
					G166: {
						text: 'G166: Providing audio that describes the important video content and describing it as such'
					},
					G167: {
						text: 'G167: Using an adjacent button to label the purpose of a field'
					},
					G168: {
						text: 'G168: Requesting confirmation to continue with selected action'
					},
					G169: {
						text: 'G169: Aligning text on only one side'
					},
					G170: {
						text: 'G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically'
					},
					G171: {
						text: 'G171: Playing sounds only on user request'
					},
					G172: {
						text: 'G172: Providing a mechanism to remove full justification of text'
					},
					G173: {
						text: 'G173: Providing a version of a movie with audio descriptions'
					},
					G174: {
						text: 'G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast'
					},
					G175: {
						text: 'G175: Providing a multi color selection tool on the page for foreground and background colors'
					},
					G176: {
						text: 'G176: Keeping the flashing area small enough'
					},
					G177: {
						text: 'G177: Providing suggested correction text'
					},
					G178: {
						text: 'G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent'
					},
					G179: {
						text: 'G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width'
					},
					G180: {
						text: 'G180: Providing the user with a means to set the time limit to 10 times the default time limit'
					},
					G181: {
						text: 'G181: Encoding user data as hidden or encrypted data in a re-authorization page'
					},
					G182: {
						text: 'G182: Ensuring that additional visual cues are available when text color differences are used to convey information'
					},
					G183: {
						text: 'G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them'
					},
					G184: {
						text: 'G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input'
					},
					G185: {
						text: 'G185: Linking to all of the pages on the site from the home page'
					},
					G186: {
						text: 'G186: Using a control in the Web page that stops moving, blinking, or auto-updating content'
					},
					G187: {
						text: 'G187: Using a technology to include blinking content that can be turned off via the user agent'
					},
					G188: {
						text: 'G188: Providing a button on the page to increase line spaces and paragraph spaces'
					},
					G189: {
						text: 'G189: Providing a control near the beginning of the Web page that changes the link text'
					},
					G190: {
						text: 'G190: Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version'
					},
					G191: {
						text: 'G191: Providing a link, button, or other mechanism that reloads the page without any blinking content'
					},
					G192: {
						text: 'G192: Fully conforming to specifications'
					},
					G193: {
						text: 'G193: Providing help by an assistant in the Web page'
					},
					G194: {
						text: 'G194: Providing spell checking and suggestions for text input'
					},
					G195: {
						text: 'G195: Using an author-supplied, highly visible focus indicator'
					},
					G196: {
						text: 'G196: Using a text alternative on one item within a group of images that describes all items in the group'
					},
					G197: {
						text: 'G197: Using labels, names, and text alternatives consistently for content that has the same functionality'
					},
					G198: {
						text: 'G198: Providing a way for the user to turn the time limit off'
					},
					G199: {
						text: 'G199: Providing success feedback when data is submitted successfully'
					},
					G200: {
						text: 'G200: Opening new windows and tabs from a link only when necessary'
					},
					G201: {
						text: 'G201: Giving users advanced warning when opening a new window'
					},
					G202: {
						text: 'G202: Ensuring keyboard control for all functionality'
					},
					G203: {
						text: 'G203: Using a static text alternative to describe a talking head video'
					},
					G204: {
						text: 'G204: Not interfering with the user agent\'s reflow of text as the viewing window is narrowed'
					},
					G205: {
						text: 'G205: Including a text cue for colored form control labels'
					},
					G206: {
						text: 'G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text'
					},
					G207: {
						text: 'G207: Ensuring that a contrast ratio of 3:1 is provided for icons'
					},
					G208: {
						text: 'G208: Including the text of the visible label as part of the accessible name'
					},
					G209: {
						text: 'G209: Provide sufficient contrast at the boundaries between adjoining colors'
					},
					G210: {
						text: 'G210: Ensuring that drag-and-drop actions can be cancelled'
					},
					G211: {
						text: 'G211: Matching the accessible name to the visible label'
					},
					G212: {
						text: 'G212: Using native controls to ensure functionality is triggered on the up-event.'
					},
					G213: {
						text: 'G213: Provide conventional controls and an application setting for motion activated input'
					},
					G214: {
						text: 'G214: Using a control to allow access to content in different orientations which is otherwise restricted'
					},
					G215: {
						text: 'G215: Providing controls to achieve the same result as path based or multipoint gestures'
					},
					G216: {
						text: 'G216: Providing single point activation for a control slider'
					},
					G217: {
						text: 'G217: Providing a mechanism to allow users to remap or turn off character key shortcuts'
					}
				}
			},
			H: {
				id: 'html',
				text: 'HTML Techniques',
				techniques: {
					H2: {
						text: 'H2: Combining adjacent image and text links for the same resource'
					},
					H4: {
						text: 'H4: Creating a logical tab order through links, form controls, and objects'
					},
					H24: {
						text: 'H24: Providing text alternatives for the area elements of image maps'
					},
					H25: {
						text: 'H25: Providing a title using the title element'
					},
					H28: {
						text: 'H28: Providing definitions for abbreviations by using the abbr element'
					},
					H30: {
						text: 'H30: Providing link text that describes the purpose of a link for anchor elements'
					},
					H32: {
						text: 'H32: Providing submit buttons'
					},
					H33: {
						text: 'H33: Supplementing link text with the title attribute'
					},
					H34: {
						text: 'H34: Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline'
					},
					H35: {
						text: 'H35: Providing text alternatives on applet elements'
					},
					H36: {
						text: 'H36: Using alt attributes on images used as submit buttons'
					},
					H37: {
						text: 'H37: Using alt attributes on img elements'
					},
					H39: {
						text: 'H39: Using caption elements to associate data table captions with data tables'
					},
					H40: {
						text: 'H40: Using description lists'
					},
					H42: {
						text: 'H42: Using h1-h6 to identify headings'
					},
					H43: {
						text: 'H43: Using id and headers attributes to associate data cells with header cells in data tables'
					},
					H44: {
						text: 'H44: Using label elements to associate text labels with form controls'
					},
					H45: {
						text: 'H45: Using longdesc'
					},
					H46: {
						text: 'H46: Using noembed with embed'
					},
					H48: {
						text: 'H48: Using ol, ul and dl for lists or groups of links'
					},
					H49: {
						text: 'H49: Using semantic markup to mark emphasized or special text'
					},
					H51: {
						text: 'H51: Using table markup to present tabular information'
					},
					H53: {
						text: 'H53: Using the body of the object element'
					},
					H54: {
						text: 'H54: Using the dfn element to identify the defining instance of a word'
					},
					H56: {
						text: 'H56: Using the dir attribute on an inline element to resolve problems with nested directional runs'
					},
					H57: {
						text: 'H57: Using the language attribute on the HTML element'
					},
					H58: {
						text: 'H58: Using language attributes to identify changes in the human language'
					},
					H59: {
						text: 'H59: Using the link element and navigation tools'
					},
					H60: {
						text: 'H60: Using the link element to link to a glossary'
					},
					H62: {
						text: 'H62: Using the ruby element'
					},
					H63: {
						text: 'H63: Using the scope attribute to associate header cells and data cells in data tables'
					},
					H64: {
						text: 'H64: Using the title attribute of the frame and iframe elements'
					},
					H65: {
						text: 'H65: Using the title attribute to identify form controls when the label element cannot be used'
					},
					H67: {
						text: 'H67: Using null alt text and no title attribute on img elements for images that AT should ignore'
					},
					H69: {
						text: 'H69: Providing heading elements at the beginning of each section of content'
					},
					H70: {
						text: 'H70: Using frame elements to group blocks of repeated material'
					},
					H71: {
						text: 'H71: Providing a description for groups of form controls using fieldset and legend elements'
					},
					H73: {
						text: 'H73: Using the summary attribute of the table element to give an overview of data tables'
					},
					H74: {
						text: 'H74: Ensuring that opening and closing tags are used according to specification'
					},
					H75: {
						text: 'H75: Ensuring that Web pages are well-formed'
					},
					H76: {
						text: 'H76: Using meta refresh to create an instant client-side redirect'
					},
					H77: {
						text: 'H77: Identifying the purpose of a link using link text combined with its enclosing list item'
					},
					H78: {
						text: 'H78: Identifying the purpose of a link using link text combined with its enclosing paragraph'
					},
					H79: {
						text: 'H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells'
					},
					H80: {
						text: 'H80: Identifying the purpose of a link using link text combined with the preceding heading element'
					},
					H81: {
						text: 'H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested'
					},
					H83: {
						text: 'H83: Using the target attribute to open a new window on user request and indicating this in link text'
					},
					H84: {
						text: 'H84: Using a button with a select element to perform an action'
					},
					H85: {
						text: 'H85: Using OPTGROUP to group OPTION elements inside a SELECT'
					},
					H86: {
						text: 'H86: Providing text alternatives for ASCII art, emoticons, and leetspeak'
					},
					H88: {
						text: 'H88: Using HTML according to spec'
					},
					H89: {
						text: 'H89: Using the title attribute to provide context-sensitive help'
					},
					H90: {
						text: 'H90: Indicating required form controls using label or legend'
					},
					H91: {
						text: 'H91: Using HTML form controls and links'
					},
					H93: {
						text: 'H93: Ensuring that id attributes are unique on a Web page'
					},
					H94: {
						text: 'H94: Ensuring that elements do not contain duplicate attributes'
					},
					H95: {
						text: 'H95: Using the track element to provide captions'
					},
					H96: {
						text: 'H96: Using the track element to provide audio descriptions'
					},
					H97: {
						text: 'H97: Grouping related links using the nav element'
					},
					H98: {
						text: 'H98: Using HTML 5.2 autocomplete attributes'
					}
				}
			},
			PDF: {
				id: 'pdf',
				text: 'PDF Techniques',
				techniques: {
					PDF1: {
						text: 'PDF1: Applying text alternatives to images with the Alt entry in PDF documents'
					},
					PDF2: {
						text: 'PDF2: Creating bookmarks in PDF documents'
					},
					PDF3: {
						text: 'PDF3: Ensuring correct tab and reading order in PDF documents'
					},
					PDF4: {
						text: 'PDF4: Hiding decorative images with the Artifact tag in PDF documents'
					},
					PDF5: {
						text: 'PDF5: Indicating required form controls in PDF forms'
					},
					PDF6: {
						text: 'PDF6: Using table elements for table markup in PDF Documents'
					},
					PDF7: {
						text: 'PDF7: Performing OCR on a scanned PDF document to provide actual text'
					},
					PDF8: {
						text: 'PDF8: Providing definitions for abbreviations via an E entry for a structure element'
					},
					PDF9: {
						text: 'PDF9: Providing headings by marking content with heading tags in PDF documents'
					},
					PDF10: {
						text: 'PDF10: Providing labels for interactive form controls in PDF documents'
					},
					PDF11: {
						text: 'PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents'
					},
					PDF12: {
						text: 'PDF12: Providing name, role, value information for form fields in PDF documents'
					},
					PDF13: {
						text: 'PDF13: Providing replacement text using the /Alt entry for links in PDF documents'
					},
					PDF14: {
						text: 'PDF14: Providing running headers and footers in PDF documents'
					},
					PDF15: {
						text: 'PDF15: Providing submit buttons with the submit-form action in PDF forms'
					},
					PDF16: {
						text: 'PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document'
					},
					PDF17: {
						text: 'PDF17: Specifying consistent page numbering for PDF documents'
					},
					PDF18: {
						text: 'PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document'
					},
					PDF19: {
						text: 'PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents'
					},
					PDF20: {
						text: 'PDF20: Using Adobe Acrobat Pro\'s Table Editor to repair mistagged tables'
					},
					PDF21: {
						text: 'PDF21: Using List tags for lists in PDF documents'
					},
					PDF22: {
						text: 'PDF22: Indicating when user input falls outside the required format or values in PDF forms'
					},
					PDF23: {
						text: 'PDF23: Providing interactive form controls in PDF documents'
					}
				}
			},
			SVR: {
				id: 'server-side-script',
				text: 'Server-Side Script Techniques',
				techniques: {
					SVR1: {
						text: 'SVR1: Implementing automatic redirects on the server side instead of on the client side'
					},
					SVR2: {
						text: 'SVR2: Using .htaccess to ensure that the only way to access non-conforming content is from conforming content'
					},
					SVR3: {
						text: 'SVR3: Using HTTP referer to ensure that the only way to access non-conforming content is from conforming content'
					},
					SVR4: {
						text: 'SVR4: Allowing users to provide preferences for the display of conforming alternate versions'
					},
					SVR5: {
						text: 'SVR5: Specifying the default language in the HTTP header'
					}
				}
			},
			SL: {
				id: 'silverlight',
				text: 'Silverlight Techniques',
				techniques: {
					SL1: {
						text: 'SL1: Accessing Alternate Audio Tracks in Silverlight Media'
					},
					SL2: {
						text: 'SL2: Changing The Visual Focus Indicator in Silverlight'
					},
					SL3: {
						text: 'SL3: Controlling Silverlight MediaElement Audio Volume'
					},
					SL4: {
						text: 'SL4: Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM'
					},
					SL5: {
						text: 'SL5: Defining a Focusable Image Class for Silverlight'
					},
					SL6: {
						text: 'SL6: Defining a UI Automation Peer for a Custom Silverlight Control'
					},
					SL7: {
						text: 'SL7: Designing a Focused Visual State for Custom Silverlight Controls'
					},
					SL8: {
						text: 'SL8: Displaying HelpText in Silverlight User Interfaces'
					},
					SL9: {
						text: 'SL9: Handling Key Events to Enable Keyboard Functionality in Silverlight'
					},
					SL10: {
						text: 'SL10: Implementing a Submit-Form Pattern in Silverlight'
					},
					SL11: {
						text: 'SL11: Pausing or Stopping A Decorative Silverlight Animation'
					},
					SL12: {
						text: 'SL12: Pausing, Stopping, or Playing Media in Silverlight MediaElements'
					},
					SL13: {
						text: 'SL13: Providing A Style Switcher To Switch To High Contrast'
					},
					SL14: {
						text: 'SL14: Providing Custom Control Key Handling for Keyboard Functionality in Silverlight'
					},
					SL15: {
						text: 'SL15: Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application'
					},
					SL16: {
						text: 'SL16: Providing Script-Embedded Text Captions for MediaElement Content'
					},
					SL17: {
						text: 'SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement'
					},
					SL18: {
						text: 'SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name'
					},
					SL19: {
						text: 'SL19: Providing User Instructions With AutomationProperties.HelpText in Silverlight'
					},
					SL20: {
						text: 'SL20: Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name'
					},
					SL21: {
						text: 'SL21: Replacing A Silverlight Timed Animation With a Nonanimated Element'
					},
					SL22: {
						text: 'SL22: Supporting Browser Zoom in Silverlight'
					},
					SL23: {
						text: 'SL23: Using A Style Switcher to Increase Font Size of Silverlight Text Elements'
					},
					SL24: {
						text: 'SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically'
					},
					SL25: {
						text: 'SL25: Using Controls and Programmatic Focus to Bypass Blocks of Content in Silverlight'
					},
					SL26: {
						text: 'SL26: Using LabeledBy to Associate Labels and Targets in Silverlight'
					},
					SL27: {
						text: 'SL27: Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies'
					},
					SL28: {
						text: 'SL28: Using Separate Text-Format Text Captions for MediaElement Content'
					},
					SL29: {
						text: 'SL29: Using Silverlight "List" Controls to Define Blocks that can be Bypassed'
					},
					SL30: {
						text: 'SL30: Using Silverlight Control Compositing and AutomationProperties.Name'
					},
					SL31: {
						text: 'SL31: Using Silverlight Font Properties to Control Text Presentation'
					},
					SL32: {
						text: 'SL32: Using Silverlight Text Elements for Appropriate Accessibility Role'
					},
					SL33: {
						text: 'SL33: Using Well-Formed XAML to Define a Silverlight User Interface'
					},
					SL34: {
						text: 'SL34: Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties'
					},
					SL35: {
						text: 'SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight'
					}
				}
			},
			SM: {
				id: 'smil',
				text: 'SMIL Techniques',
				techniques: {
					SM1: {
						text: 'SM1: Adding extended audio description in SMIL 1.0'
					},
					SM2: {
						text: 'SM2: Adding extended audio description in SMIL 2.0'
					},
					SM6: {
						text: 'SM6: Providing audio description in SMIL 1.0'
					},
					SM7: {
						text: 'SM7: Providing audio description in SMIL 2.0'
					},
					SM11: {
						text: 'SM11: Providing captions through synchronized text streams in SMIL 1.0'
					},
					SM12: {
						text: 'SM12: Providing captions through synchronized text streams in SMIL 2.0'
					},
					SM13: {
						text: 'SM13: Providing sign language interpretation through synchronized video streams in SMIL 1.0'
					},
					SM14: {
						text: 'SM14: Providing sign language interpretation through synchronized video streams in SMIL 2.0'
					}
				}
			},
			T: {
				id: 'text',
				text: 'Plain-Text Techniques',
				techniques: {
					T1: {
						text: 'T1: Using standard text formatting conventions for paragraphs'
					},
					T2: {
						text: 'T2: Using standard text formatting conventions for lists'
					},
					T3: {
						text: 'T3: Using standard text formatting conventions for headings'
					}
				}
			}
		}
	},
	wcag22: {
		information: {
			1: {
				id: 'perceivable',
				text: '1. Perceivable: Information and user interface components must be presentable to users in ways they can perceive.',
				guidelines: {
					1: {
						id: 'text-alternatives',
						text: 'Guideline 1.1 Text Alternatives: Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.',
						successCriterions: {
							1: {
								id: 'non-text-content',
								handle: '1.1.1 Non-text Content',
								description: 'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below. Controls, Input: If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Success Criterion 4.1.2 for additional requirements for controls and content that accepts user input.) Time-Based Media: If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.) Test: If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content. Sensory: If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content. CAPTCHA: If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities. Decoration, Formatting, Invisible: If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#non-text-content',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content',
								level: 1
							}
						}
					},
					2: {
						id: 'time-based-media',
						text: 'Guideline 1.2 Time-based Media: Provide alternatives for time-based media.',
						successCriterions: {
							1: {
								id: 'audio-only-and-video-only-prerecorded',
								handle: '1.2.1 Audio-only and Video-only (Prerecorded)',
								description: 'For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such: Prerecorded Audio-only: An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content. Prerecorded Video-only: Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-only-and-video-only-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded',
								level: 1
							},
							2: {
								id: 'captions-prerecorded',
								handle: '1.2.2 Captions (Prerecorded)',
								description: 'Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#captions-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded',
								level: 1
							},
							3: {
								id: 'audio-description-or-media-alternative-prerecorded',
								handle: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
								description: 'An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-description-or-media-alternative-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded',
								level: 1
							},
							4: {
								id: 'captions-live',
								handle: '1.2.4 Captions (Live)',
								description: 'Captions are provided for all live audio content in synchronized media.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#captions-live',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-live',
								level: 2
							},
							5: {
								id: 'audio-description-prerecorded',
								handle: '1.2.5 Audio Description (Prerecorded)',
								description: 'Audio description is provided for all prerecorded video content in synchronized media.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-description-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded',
								level: 2
							},
							6: {
								id: 'sign-language-prerecorded',
								handle: '1.2.6 Sign Language (Prerecorded)',
								description: 'Sign language interpretation is provided for all prerecorded audio content in synchronized media.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#sign-language-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded',
								level: 3
							},
							7: {
								id: 'extended-audio-description-prerecorded',
								handle: '1.2.7 Extended Audio Description (Prerecorded)',
								description: 'Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#extended-audio-description-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded',
								level: 3
							},
							8: {
								id: 'media-alternative-prerecorded',
								handle: '1.2.8 Media Alternative (Prerecorded)',
								description: 'An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#media-alternative-prerecorded',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded',
								level: 3
							},
							9: {
								id: 'audio-only-live',
								handle: '1.2.9 Audio-only (Live)',
								description: 'An alternative for time-based media that presents equivalent information for live audio-only content is provided.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-only-live',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live',
								level: 3
							}
						}
					},
					3: {
						id: 'adaptable',
						text: 'Guideline 1.3 Adaptable: Create content that can be presented in different ways (for example simpler layout) without losing information or structure.',
						successCriterions: {
							1: {
								id: 'info-and-relationships',
								handle: '1.3.1 Info and Relationships',
								description: 'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#info-and-relationships',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships',
								level: 1
							},
							2: {
								id: 'meaningful-sequence',
								handle: '1.3.2 Meaningful Sequence',
								description: 'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#meaningful-sequence',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence',
								level: 1
							},
							3: {
								id: 'sensory-characteristics',
								handle: '1.3.3 Sensory Characteristics',
								description: 'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound. Note: For requirements related to color, refer to Guideline 1.4.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#sensory-characteristics',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics',
								level: 1
							},
							4: {
								id: 'orientation',
								handle: '1.3.4 Orientation',
								description: 'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential. Note: Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where content is not necessarily restricted to landscape or portrait display orientation.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#orientation',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/orientation',
								level: 2
							},
							5: {
								id: 'identify-input-purpose',
								handle: '1.3.5 Identify Input Purpose',
								description: 'The purpose of each input field collecting information about the user can be programmatically determined when: The input field serves a purpose identified in the Input Purposes for user interface components section; and The content is implemented using technologies with support for identifying the expected meaning for form input data.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-input-purpose',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose',
								level: 2
							},
							6: {
								id: 'identify-purpose',
								handle: '1.3.6 Identify Purpose',
								description: 'In content implemented using markup languages, the purpose of user interface components, icons, and regions can be programmatically determined.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#identify-purpose',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose',
								level: 3
							}
						}
					},
					4: {
						id: 'distinguishable',
						text: 'Guideline 1.4 Distinguishable: Make it easier for users to see and hear content including separating foreground from background.',
						successCriterions: {
							1: {
								id: 'use-of-color',
								handle: '1.4.1 Use of Color',
								description: 'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. Note: This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#use-of-color',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color',
								level: 1
							},
							2: {
								id: 'audio-control',
								handle: '1.4.2 Audio Control',
								description: 'If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. Note: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#audio-control',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-control',
								level: 1
							},
							3: {
								id: 'contrast-minimum',
								handle: '1.4.3 Contrast (Minimum)',
								description: 'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1; Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. Logotypes: Text that is part of a logo or brand name has no contrast requirement.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#contrast-minimum',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum',
								level: 2
							},
							4: {
								id: 'resize-text',
								handle: '1.4.4 Resize text',
								description: 'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#resize-text',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text',
								level: 2
							},
							5: {
								id: 'images-of-text',
								handle: '1.4.5 Images of Text',
								description: 'If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following: Customizable: The image of text can be visually customized to the user\'s requirements; Essential: A particular presentation of text is essential to the information being conveyed. Note: Logotypes (text that is part of a logo or brand name) are considered essential.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#images-of-text',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text',
								level: 2
							},
							6: {
								id: 'contrast-enhanced',
								handle: '1.4.6 Contrast (Enhanced)',
								description: 'The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following: Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1; Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement. Logotypes: Text that is part of a logo or brand name has no contrast requirement.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#contrast-enhanced',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced',
								level: 3
							},
							7: {
								id: 'low-or-no-background-audio',
								handle: '1.4.7 Low or No Background Audio',
								description: 'For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true: No Background: The audio does not contain background sounds. Turn Off: The background sounds can be turned off. 20 dB: The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds. Note: Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#low-or-no-background-audio',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio',
								level: 3
							},
							8: {
								id: 'visual-presentation',
								handle: '1.4.8 Visual Presentation',
								description: 'For the visual presentation of blocks of text, a mechanism is available to achieve the following: Foreground and background colors can be selected by the user. Width is no more than 80 characters or glyphs (40 if CJK). Text is not justified (aligned to both the left and the right margins). Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing. Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#visual-presentation',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation',
								level: 3
							},
							9: {
								id: 'images-of-text-no-exception',
								handle: '1.4.9 Images of Text (No Exception)',
								description: 'Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed. Note: Logotypes (text that is part of a logo or brand name) are considered essential.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#images-of-text-no-exception',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception',
								level: 3
							},
							10: {
								id: 'reflow',
								handle: '1.4.10 Reflow',
								description: 'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels. Except for parts of the content which require two-dimensional layout for usage or meaning. Note: 320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which is designed to scroll horizontally (e.g., with vertical text), 256 CSS pixels is equivalent to a starting viewport height of 1024 CSS pixels at 400% zoom. Note: Examples of content which requires two-dimensional layout are images required for understanding (such as maps and diagrams), video, games, presentations, data tables (not individual cells), and interfaces where it is necessary to keep toolbars in view while manipulating content. It is acceptable to provide two-dimensional scrolling for such parts of the content.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#reflow',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow',
								level: 2
							},
							11: {
								id: 'non-text-contrast',
								handle: '1.4.11 Non-text Contrast',
								description: 'The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author; Graphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#non-text-contrast',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast',
								level: 2
							},
							12: {
								id: 'text-spacing',
								handle: '1.4.12 Text Spacing',
								description: 'In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property: Line height (line spacing) to at least 1.5 times the font size; Spacing following paragraphs to at least 2 times the font size; Letter spacing (tracking) to at least 0.12 times the font size; Word spacing to at least 0.16 times the font size. Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#text-spacing',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing',
								level: 2
							},
							13: {
								id: 'content-on-hover-or-focus',
								handle: '1.4.13 Content on Hover or Focus',
								description: 'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: Dismissible: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content; Hoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing; Persistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid. Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author. Note: Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML title attribute. Note: Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#content-on-hover-or-focus',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus',
								level: 2
							}
						}
					}
				}
			},
			2: {
				id: 'operable',
				text: '2. Operable: User interface components and navigation must be operable.',
				guidelines: {
					1: {
						id: 'keyboard-accessible',
						text: 'Guideline 2.1 Keyboard Accessible: Make all functionality available from a keyboard.',
						successCriterions: {
							1: {
								id: 'keyboard',
								handle: '2.1.1 Keyboard',
								description: 'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user\'s movement and not just the endpoints. Note: This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not. Note: This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard',
								level: 1
							},
							2: {
								id: 'no-keyboard-trap',
								handle: '2.1.2 No Keyboard Trap',
								description: 'If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. Note: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#no-keyboard-trap',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap',
								level: 1
							},
							3: {
								id: 'keyboard-no-exception',
								handle: '2.1.3 Keyboard (No Exception)',
								description: 'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#keyboard-no-exception',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception',
								level: 3
							},
							4: {
								id: 'character-key-shortcuts',
								handle: '2.1.4 Character Key Shortcuts',
								description: 'If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true: Turn off: A mechanism is available to turn the shortcut off; Remap: A mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt); Active only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#character-key-shortcuts',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts',
								level: 1
							}
						}
					},
					2: {
						id: 'enough-time',
						text: 'Guideline 2.2 Enough Time: Provide users enough time to read and use content.',
						successCriterions: {
							1: {
								id: 'timing-adjustable',
								handle: '2.2.1 Timing Adjustable',
								description: 'For each time limit that is set by the content, at least one of the following is true: Turn off: The user is allowed to turn off the time limit before encountering it; or Adjust: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or Extend: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or Real-time Exception: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or Essential Exception: The time limit is essential and extending it would invalidate the activity; or 20 Hour Exception: The time limit is longer than 20 hours. Note: This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1, which puts limits on changes of content or context as a result of user action.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#timing-adjustable',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable',
								level: 1
							},
							2: {
								id: 'pause-stop-hide',
								handle: '2.2.2 Pause, Stop, Hide',
								description: 'For moving, blinking, scrolling, or auto-updating information, all of the following are true: Moving, blinking, scrolling: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and Auto-updating: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential. Note: For requirements related to flickering or flashing content, refer to Guideline 2.3. Note: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. Note: Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so. Note: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#pause-stop-hide',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide',
								level: 1
							},
							3: {
								id: 'no-timing',
								handle: '2.2.3 No Timing',
								description: 'Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#no-timing',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/no-timing',
								level: 3
							},
							4: {
								id: 'interruptions',
								handle: '2.2.4 Interruptions',
								description: 'Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#interruptions',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/interruptions',
								level: 3
							},
							5: {
								id: 're-authenticating',
								handle: '2.2.5 Re-authenticating',
								description: 'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#re-authenticating',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating',
								level: 3
							},
							6: {
								id: 'timeouts',
								handle: '2.2.6 Timeouts',
								description: 'Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions. Note: Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#timeouts',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/timeouts',
								level: 3
							}
						}
					},
					3: {
						id: 'seizures-and-physical-reactions',
						text: 'Guideline 2.3 Seizures and Physical Reactions: Do not design content in a way that is known to cause seizures or physical reactions.',
						successCriterions: {
							1: {
								id: 'three-flashes-or-below-threshold',
								handle: '2.3.1 Three Flashes or Below Threshold',
								description: 'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds. Note: Since any content that does not meet this success criterion can interfere with a user\'s ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold',
								level: 1
							},
							2: {
								id: 'three-flashes',
								handle: '2.3.2 Three Flashes',
								description: 'Web pages do not contain anything that flashes more than three times in any one second period.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#three-flashes',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes',
								level: 3
							},
							3: {
								id: 'animation-from-interactions',
								handle: '2.3.3 Animation from Interactions',
								description: 'Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#animation-from-interactions',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions',
								level: 3
							}
						}
					},
					4: {
						id: 'navigable',
						text: 'Guideline 2.4 Navigable: Provide ways to help users navigate, find content, and determine where they are.',
						successCriterions: {
							1: {
								id: 'bypass-blocks',
								handle: '2.4.1 Bypass Blocks',
								description: 'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#bypass-blocks',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks',
								level: 1
							},
							2: {
								id: 'page-titled',
								handle: '2.4.2 Page Titled',
								description: 'Web pages have titles that describe topic or purpose.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#page-titled',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled',
								level: 1
							},
							3: {
								id: 'focus-order',
								handle: '2.4.3 Focus Order',
								description: 'If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-order',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order',
								level: 1
							},
							4: {
								id: 'link-purpose-in-context',
								handle: '2.4.4 Link Purpose (In Context)',
								description: 'The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-in-context',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context',
								level: 1
							},
							5: {
								id: 'multiple-ways',
								handle: '2.4.5 Multiple Ways',
								description: 'More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#multiple-ways',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways',
								level: 2
							},
							6: {
								id: 'headings-and-labels',
								handle: '2.4.6 Headings and Labels',
								description: 'Headings and labels describe topic or purpose.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#headings-and-labels',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels',
								level: 2
							},
							7: {
								id: 'focus-visible',
								handle: '2.4.7 Focus Visible',
								description: '[Changed] Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-visible',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible',
								level: 1
							},
							8: {
								id: 'location',
								handle: '2.4.8 Location',
								description: 'Information about the user\'s location within a set of Web pages is available.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#location',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/location',
								level: 3
							},
							9: {
								id: 'link-purpose-link-only',
								handle: '2.4.9 Link Purpose (Link Only)',
								description: 'A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#link-purpose-link-only',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only',
								level: 3
							},
							10: {
								id: 'section-headings',
								handle: '2.4.10 Section Headings',
								description: 'Section headings are used to organize the content. Note: "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content. Note: This success criterion covers sections within writing, not user interface components. User interface components are covered under Success Criterion 4.1.2.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#section-headings',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/section-headings',
								level: 3
							},
							11: {
								id: 'focus-appearance-minimum',
								handle: '2.4.11 Focus Appearance (Minimum)',
								description: 'When user interface components receive keyboard focus, all of the following are true: Contrasting area: There is an area of the focus indicator that has a contrast ratio of at least 3:1 between the colors in the focused and unfocused states. Minimum area: The contrasting area is at least as large as: Outline: the area of a 1 CSS pixel thick perimeter of the unfocused component, or Shape: the area of a 4 CSS pixel thick line along the shortest side of a minimum bounding box of the unfocused component, and no thinner than 2 CSS pixels. Adjacent contrast: The contrasting area also has a contrast ratio of least 3:1 against adjacent colors in the focused component, or the contrasting area has a thickness of at least 2 CSS pixels. Not fully obscured: The item with focus is not entirely hidden by author-created content. Note: A keyboard focus indicator which has a pattern or gradient may have parts that do not meet the 3:1 contrast ratio for the change of contrast, as long as an area equal to the minimum does meet the contrast ratio. Note: If the component has a visible boundary smaller than the hit area, or the size of the component is not available, the minimum area can be taken from the visible boundary. Editor\'s noteThe working group is interested in feedback about the minimum area metric, and if there are unusual scenarios where visible indicators are caught by the wording.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance-minimum',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum',
								level: 2
							},
							12: {
								id: 'focus-appearance-enhanced',
								handle: '2.4.12 Focus Appearance (Enhanced)',
								description: 'When user interface components have keyboard focus, all of the following are true: Contrasting area: There is an area of the focus indicator that has a contrast ratio of at least 4.5:1 between the colors in the focused and unfocused states. Minimum area: The contrasting area is at least double the area of a 1 CSS pixel perimeter of the unfocused component; Not obscured: No part of the focus indicator is hidden by author-created content.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#focus-appearance-enhanced',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced',
								level: 3
							},
							13: {
								id: 'page-break-navigation',
								handle: '2.4.13 Page Break Navigation',
								description: 'For web content with page break locators, a mechanism is available to navigate to each locator.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#page-break-navigation',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/page-break-navigation',
								level: 1
							}
						}
					},
					5: {
						id: 'input-modalities',
						text: 'Guideline 2.5 Input Modalities: Make it easier for users to operate functionality through various inputs beyond keyboard.',
						successCriterions: {
							1: {
								id: 'pointer-gestures',
								handle: '2.5.1 Pointer Gestures',
								description: 'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential. Note: This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-gestures',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures',
								level: 1
							},
							2: {
								id: 'pointer-cancellation',
								handle: '2.5.2 Pointer Cancellation',
								description: 'For functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event: The down-event of the pointer is not used to execute any part of the function; Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion; Up Reversal: The up-event reverses any outcome of the preceding down-event; Essential: Completing the function on the down-event is essential. Note: Functions that emulate a keyboard or numeric keypad key press are considered essential. Note: This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#pointer-cancellation',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation',
								level: 1
							},
							3: {
								id: 'label-in-name',
								handle: '2.5.3 Label in Name',
								description: 'For user interface components with labels that include text or images of text, the name contains the text that is presented visually. Note: A best practice is to have the text of the label at the start of the name.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#label-in-name',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/label-in-name',
								level: 1
							},
							4: {
								id: 'motion-actuation',
								handle: '2.5.4 Motion Actuation',
								description: 'Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: Supported Interface: The motion is used to operate functionality through an accessibility supported interface; Essential: The motion is essential for the function and doing so would invalidate the activity.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#motion-actuation',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation',
								level: 1
							},
							5: {
								id: 'target-size-enhanced',
								handle: '2.5.5 Target Size (Enhanced)',
								description: 'The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when: Equivalent: The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels; Inline: The target is in a sentence or block of text; User Agent Control: The size of the target is determined by the user agent and is not modified by the author; Essential: A particular presentation of the target is essential to the information being conveyed.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#target-size-enhanced',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced',
								level: 3
							},
							6: {
								id: 'concurrent-input-mechanisms',
								handle: '2.5.6 Concurrent Input Mechanisms',
								description: 'Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#concurrent-input-mechanisms',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms',
								level: 3
							},
							7: {
								id: 'dragging-movements',
								handle: '2.5.7 Dragging Movements',
								description: 'All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential. Note: This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology). Editor\'s noteIs there an assistive technology that helps for people with mobility impairments? The group would like feedback on the frontier between AT & author responsibility.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#dragging-movements',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements',
								level: 2
							},
							8: {
								id: 'target-size-minimum',
								handle: '2.5.8 Target Size (Minimum)',
								description: 'Targets have an area of at least 24 by 24 CSS pixels, except where: Spacing: The target offset is at least 24 CSS pixels to every adjacent target; Inline: The target is in a sentence or block of text; Essential: A particular presentation of the target is essential to the information being conveyed. Note: Targets that allow for values to be selected spatially based on position within the target are considered one target for the purpose of the success criterion. Examples include sliders with granular values, color pickers displaying a gradient of colors, or editable areas where you position the cursor. Editor\'s noteAre there issues with internationalization when describing inline links? Editor\'s noteAre there issues with pop-over content overlapping targets triggering failures?',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#target-size-minimum',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum',
								level: 2
							}
						}
					}
				}
			},
			3: {
				id: 'understandable',
				text: '3. Understandable: Information and the operation of the user interface must be understandable.',
				guidelines: {
					1: {
						id: 'readable',
						text: 'Guideline 3.1 Readable: Make text content readable and understandable.',
						successCriterions: {
							1: {
								id: 'language-of-page',
								handle: '3.1.1 Language of Page',
								description: 'The default human language of each Web page can be programmatically determined.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-page',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page',
								level: 1
							},
							2: {
								id: 'language-of-parts',
								handle: '3.1.2 Language of Parts',
								description: 'The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#language-of-parts',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts',
								level: 2
							},
							3: {
								id: 'unusual-words',
								handle: '3.1.3 Unusual Words',
								description: 'A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#unusual-words',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/unusual-words',
								level: 3
							},
							4: {
								id: 'abbreviations',
								handle: '3.1.4 Abbreviations',
								description: 'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#abbreviations',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/abbreviations',
								level: 3
							},
							5: {
								id: 'reading-level',
								handle: '3.1.5 Reading Level',
								description: 'When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#reading-level',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/reading-level',
								level: 3
							},
							6: {
								id: 'pronunciation',
								handle: '3.1.6 Pronunciation',
								description: 'A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#pronunciation',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/pronunciation',
								level: 3
							}
						}
					},
					2: {
						id: 'predictable',
						text: 'Guideline 3.2 Predictable: Make Web pages appear and operate in predictable ways.',
						successCriterions: {
							1: {
								id: 'on-focus',
								handle: '3.2.1 On Focus',
								description: 'When any user interface component receives focus, it does not initiate a change of context.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#on-focus',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/on-focus',
								level: 1
							},
							2: {
								id: 'on-input',
								handle: '3.2.2 On Input',
								description: 'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#on-input',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/on-input',
								level: 1
							},
							3: {
								id: 'consistent-navigation',
								handle: '3.2.3 Consistent Navigation',
								description: 'Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-navigation',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation',
								level: 2
							},
							4: {
								id: 'consistent-identification',
								handle: '3.2.4 Consistent Identification',
								description: 'Components that have the same functionality within a set of Web pages are identified consistently.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-identification',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification',
								level: 2
							},
							5: {
								id: 'change-on-request',
								handle: '3.2.5 Change on Request',
								description: 'Changes of context are initiated only by user request or a mechanism is available to turn off such changes.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#change-on-request',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/change-on-request',
								level: 3
							},
							6: {
								id: 'consistent-help',
								handle: '3.2.6 Consistent Help',
								description: 'For each web page within a set of web pages that provides one or more of the following ways of finding help, access to at least one form of help is included in the same relative order on each page: Human contact details; Human contact mechanism; Self-help option; A fully automated contact mechanism. Note: Access to help mechanisms may be provided directly on the page, or may be provided via a direct link to a different page containing the information.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#consistent-help',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help',
								level: 1
							},
							7: {
								id: 'visible-controls',
								handle: '3.2.7 Visible Controls',
								description: 'Where receiving pointer hover or keyboard focus triggers user interface components to be visible, information needed to identify that user interface components are available is visible, except when: The information needed to identify the user interface components is available through an equivalent component that is visible on the same page or on a different step in a multi-step process without requiring pointer hover or keyboard focus; The component is provided specifically to enhance the experience for keyboard navigation; A mechanism is available to make the information persistently visible; Hiding the information needed to identify the component is essential. Note: User interface components can be available through other visible components such as sub-menus, edit buttons, tabs, or thumbnails of media. Editor\'s noteThe working group is interested in feedback about whether there are Components determined by the user agent that should not be in scope.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#visible-controls',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/visible-controls',
								level: 2
							}
						}
					},
					3: {
						id: 'input-assistance',
						text: 'Guideline 3.3 Input Assistance: Help users avoid and correct mistakes.',
						successCriterions: {
							1: {
								id: 'error-identification',
								handle: '3.3.1 Error Identification',
								description: 'If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-identification',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification',
								level: 1
							},
							2: {
								id: 'labels-or-instructions',
								handle: '3.3.2 Labels or Instructions',
								description: 'Labels or instructions are provided when content requires user input.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#labels-or-instructions',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions',
								level: 1
							},
							3: {
								id: 'error-suggestion',
								handle: '3.3.3 Error Suggestion',
								description: 'If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-suggestion',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion',
								level: 2
							},
							4: {
								id: 'error-prevention-legal-financial-data',
								handle: '3.3.4 Error Prevention (Legal, Financial, Data)',
								description: 'For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: Reversible: Submissions are reversible. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-legal-financial-data',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data',
								level: 2
							},
							5: {
								id: 'help',
								handle: '3.3.5 Help',
								description: 'Context-sensitive help is available.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#help',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/help',
								level: 3
							},
							6: {
								id: 'error-prevention-all',
								handle: '3.3.6 Error Prevention (All)',
								description: 'For Web pages that require the user to submit information, at least one of the following is true: Reversible: Submissions are reversible. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#error-prevention-all',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all',
								level: 3
							},
							7: {
								id: 'accessible-authentication',
								handle: '3.3.7 Accessible Authentication',
								description: 'For each step in an authentication process that relies on a cognitive function test, at least one other authentication method is available that does not rely on a cognitive function test, or a mechanism is available to assist the user in completing the cognitive function test. Note: Examples of mechanisms include: 1) support for password entry by password managers to address the memorization cognitive function test, and 2) copy and paste to help address transcription cognitive function test.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#accessible-authentication',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication',
								level: 1
							},
							8: {
								id: 'redundant-entry',
								handle: '3.3.8 Redundant entry',
								description: 'Information previously entered by or provided to the user that is required to be entered again in the same process and in the same user-session is either: auto-populated, or available for the user to select. Except when: re-entering the information is essential, the information is required to ensure the security of the content, or previously entered information is no longer valid. Editor\'s noteAre there issues storing the data so a user can access it in subsequent steps? Editor\'s noteAre there broader exceptions needed than essential? E.g. for mandated or required information re-entry.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#redundant-entry',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry',
								level: 1
							}
						}
					}
				}
			},
			4: {
				id: 'robust',
				text: '4. Robust: Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.',
				guidelines: {
					1: {
						id: 'compatible',
						text: 'Guideline 4.1 Compatible: Maximize compatibility with current and future user agents, including assistive technologies.',
						successCriterions: {
							1: {
								id: 'parsing',
								handle: '4.1.1 Parsing',
								description: 'In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. Note: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#parsing',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/parsing',
								level: 1
							},
							2: {
								id: 'name-role-value',
								handle: '4.1.2 Name, Role, Value',
								description: 'For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. Note: This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#name-role-value',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value',
								level: 1
							},
							3: {
								id: 'status-messages',
								handle: '4.1.3 Status Messages',
								description: 'In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.',
								quickReference: 'https://www.w3.org/WAI/WCAG22/quickref/#status-messages',
								detailedReference: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages',
								level: 2
							}
						}
					}
				}
			},
			url: 'https://www.w3.org/TR/WCAG22/'
		},
		techniques: {
			url: 'https://www.w3.org/WAI/WCAG22/Techniques/',
			ARIA: {
				id: 'aria',
				text: 'ARIA Techniques',
				techniques: {
					ARIA1: {
						text: 'ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls'
					},
					ARIA2: {
						text: 'ARIA2: Identifying a required field with the aria-required property'
					},
					ARIA4: {
						text: 'ARIA4: Using a WAI-ARIA role to expose the role of a user interface component'
					},
					ARIA5: {
						text: 'ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component'
					},
					ARIA6: {
						text: 'ARIA6: Using aria-label to provide labels for objects'
					},
					ARIA7: {
						text: 'ARIA7: Using aria-labelledby for link purpose'
					},
					ARIA8: {
						text: 'ARIA8: Using aria-label for link purpose'
					},
					ARIA9: {
						text: 'ARIA9: Using aria-labelledby to concatenate a label from several text nodes'
					},
					ARIA10: {
						text: 'ARIA10: Using aria-labelledby to provide a text alternative for non-text content'
					},
					ARIA11: {
						text: 'ARIA11: Using ARIA landmarks to identify regions of a page'
					},
					ARIA12: {
						text: 'ARIA12: Using role=heading to identify headings'
					},
					ARIA13: {
						text: 'ARIA13: Using aria-labelledby to name regions and landmarks'
					},
					ARIA14: {
						text: 'ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used'
					},
					ARIA15: {
						text: 'ARIA15: Using aria-describedby to provide descriptions of images'
					},
					ARIA16: {
						text: 'ARIA16: Using aria-labelledby to provide a name for user interface controls'
					},
					ARIA17: {
						text: 'ARIA17: Using grouping roles to identify related form controls'
					},
					ARIA18: {
						text: 'ARIA18: Using aria-alertdialog to Identify Errors'
					},
					ARIA19: {
						text: 'ARIA19: Using ARIA role=alert or Live Regions to Identify Errors'
					},
					ARIA20: {
						text: 'ARIA20: Using the region role to identify a region of the page'
					},
					ARIA21: {
						text: 'ARIA21: Using Aria-Invalid to Indicate An Error Field'
					},
					ARIA22: {
						text: 'ARIA22: Using role=status to present status messages'
					},
					ARIA23: {
						text: 'ARIA23: Using role=log to identify sequential information updates'
					},
					ARIA24: {
						text: 'ARIA24: Semantically identifying a font icon with role="img"'
					}
				}
			},
			SCR: {
				id: 'client-side-script',
				text: 'Client-Side Script Techniques',
				techniques: {
					SCR1: {
						text: 'SCR1: Allowing the user to extend the default time limit'
					},
					SCR2: {
						text: 'SCR2: Using redundant keyboard and mouse event handlers'
					},
					SCR14: {
						text: 'SCR14: Using scripts to make nonessential alerts optional'
					},
					SCR16: {
						text: 'SCR16: Providing a script that warns the user a time limit is about to expire'
					},
					SCR18: {
						text: 'SCR18: Providing client-side validation and alert'
					},
					SCR19: {
						text: 'SCR19: Using an onchange event on a select element without causing a change of context'
					},
					SCR20: {
						text: 'SCR20: Using both keyboard and other device-specific functions'
					},
					SCR21: {
						text: 'SCR21: Using functions of the Document Object Model (DOM) to add content to a page'
					},
					SCR22: {
						text: 'SCR22: Using scripts to control blinking and stop it in five seconds or less'
					},
					SCR24: {
						text: 'SCR24: Using progressive enhancement to open new windows on user request'
					},
					SCR26: {
						text: 'SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element'
					},
					SCR27: {
						text: 'SCR27: Reordering page sections using the Document Object Model'
					},
					SCR28: {
						text: 'SCR28: Using an expandable and collapsible menu to bypass block of content'
					},
					SCR29: {
						text: 'SCR29: Adding keyboard-accessible actions to static HTML elements'
					},
					SCR30: {
						text: 'SCR30: Using scripts to change the link text'
					},
					SCR31: {
						text: 'SCR31: Using script to change the background color or border of the element with focus'
					},
					SCR32: {
						text: 'SCR32: Providing client-side validation and adding error text via the DOM'
					},
					SCR33: {
						text: 'SCR33: Using script to scroll content, and providing a mechanism to pause it'
					},
					SCR34: {
						text: 'SCR34: Calculating size and position in a way that scales with text size'
					},
					SCR35: {
						text: 'SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons'
					},
					SCR36: {
						text: 'SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area'
					},
					SCR37: {
						text: 'SCR37: Creating Custom Dialogs in a Device Independent Way'
					},
					SCR38: {
						text: 'SCR38: Creating a conforming alternate version for a web page designed with progressive enhancement'
					},
					SCR39: {
						text: 'SCR39: Making content on focus or hover hoverable, dismissible, and persistent'
					}
				}
			},
			C: {
				id: 'css',
				text: 'CSS Techniques',
				techniques: {
					C6: {
						text: 'C6: Positioning content based on structural markup'
					},
					C7: {
						text: 'C7: Using CSS to hide a portion of the link text'
					},
					C8: {
						text: 'C8: Using CSS letter-spacing to control spacing within a word'
					},
					C9: {
						text: 'C9: Using CSS to include decorative images'
					},
					C12: {
						text: 'C12: Using percent for font sizes'
					},
					C13: {
						text: 'C13: Using named font sizes'
					},
					C14: {
						text: 'C14: Using em units for font sizes'
					},
					C15: {
						text: 'C15: Using CSS to change the presentation of a user interface component when it receives focus'
					},
					C17: {
						text: 'C17: Scaling form elements which contain text'
					},
					C18: {
						text: 'C18: Using CSS margin and padding rules instead of spacer images for layout design'
					},
					C19: {
						text: 'C19: Specifying alignment either to the left OR right in CSS'
					},
					C20: {
						text: 'C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized'
					},
					C21: {
						text: 'C21: Specifying line spacing in CSS'
					},
					C22: {
						text: 'C22: Using CSS to control visual presentation of text'
					},
					C23: {
						text: 'C23: Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content'
					},
					C24: {
						text: 'C24: Using percentage values in CSS for container sizes'
					},
					C25: {
						text: 'C25: Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors'
					},
					C27: {
						text: 'C27: Making the DOM order match the visual order'
					},
					C28: {
						text: 'C28: Specifying the size of text containers using em units'
					},
					C29: {
						text: 'C29: Using a style switcher to provide a conforming alternate version'
					},
					C30: {
						text: 'C30: Using CSS to replace text with images of text and providing user interface controls to switch'
					},
					C31: {
						text: 'C31: Using CSS Flexbox to reflow content'
					},
					C32: {
						text: 'C32: Using media queries and grid CSS to reflow columns'
					},
					C33: {
						text: 'C33: Allowing for Reflow with Long URLs and Strings of Text'
					},
					C34: {
						text: 'C34: Using media queries to un-fixing sticky headers / footers'
					},
					C35: {
						text: 'C35: Allowing for text spacing without wrapping'
					},
					C36: {
						text: 'C36: Allowing for text spacing override'
					},
					C37: {
						text: 'C37: Using CSS max-width and height to fit images'
					},
					C38: {
						text: 'C38: Using CSS width, max-width and flexbox to fit labels and inputs'
					},
					C39: {
						text: 'C39: Using the CSS reduce-motion query to prevent motion'
					},
					C40: {
						text: 'C40: Creating a two-color focus indicator to ensure sufficient contrast with all components'
					},
					C41: {
						text: 'C41: Creating a strong focus indicator within the component'
					},
					C42: {
						text: 'C42: Using min-height and min-width to ensure sufficient target spacing'
					}
				}
			},
			F: {
				id: 'failures',
				text: 'Common Failures',
				techniques: {
					F1: {
						text: 'F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS'
					},
					F2: {
						text: 'F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text'
					},
					F3: {
						text: 'F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information'
					},
					F4: {
						text: 'F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds'
					},
					F7: {
						text: 'F7: Failure of Success Criterion 2.2.2 due to an object or applet for more than five seconds'
					},
					F8: {
						text: 'F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects'
					},
					F9: {
						text: 'F9: Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element'
					},
					F10: {
						text: 'F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type'
					},
					F12: {
						text: 'F12: Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism re-authentication'
					},
					F13: {
						text: 'F13: Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image'
					},
					F14: {
						text: 'F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location'
					},
					F15: {
						text: 'F15: Failure of Success Criterion 4.1.2 due to implementing custom controls that do not use an accessibility API for the technology, or do so incompletely'
					},
					F16: {
						text: 'F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content'
					},
					F19: {
						text: 'F19: Failure of Conformance Requirement 1 due to not providing a method for the user to find the alternative conforming version of a non-conforming Web page'
					},
					F20: {
						text: 'F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur'
					},
					F22: {
						text: 'F22: Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user'
					},
					F23: {
						text: 'F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off'
					},
					F24: {
						text: 'F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa'
					},
					F25: {
						text: 'F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents'
					},
					F26: {
						text: 'F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information'
					},
					F30: {
						text: 'F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)'
					},
					F31: {
						text: 'F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages'
					},
					F32: {
						text: 'F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word'
					},
					F33: {
						text: 'F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content'
					},
					F34: {
						text: 'F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content'
					},
					F36: {
						text: 'F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and given a value'
					},
					F37: {
						text: 'F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed'
					},
					F38: {
						text: 'F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them'
					},
					F39: {
						text: 'F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology'
					},
					F40: {
						text: 'F40: Failure due to using meta redirect with a time limit'
					},
					F41: {
						text: 'F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page'
					},
					F42: {
						text: 'F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links'
					},
					F43: {
						text: 'F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content'
					},
					F44: {
						text: 'F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability'
					},
					F46: {
						text: 'F46: Failure of Success Criterion 1.3.1 due to using th elements, layout tables'
					},
					F47: {
						text: 'F47: Failure of Success Criterion 2.2.2 due to using the blink element'
					},
					F48: {
						text: 'F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information'
					},
					F49: {
						text: 'F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized'
					},
					F50: {
						text: 'F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less'
					},
					F52: {
						text: 'F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded'
					},
					F54: {
						text: 'F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function'
					},
					F55: {
						text: 'F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received'
					},
					F58: {
						text: 'F58: Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out'
					},
					F59: {
						text: 'F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control'
					},
					F60: {
						text: 'F60: Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field'
					},
					F61: {
						text: 'F61: Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content'
					},
					F63: {
						text: 'F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link'
					},
					F65: {
						text: 'F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"'
					},
					F66: {
						text: 'F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages'
					},
					F67: {
						text: 'F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information'
					},
					F68: {
						text: 'F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name'
					},
					F69: {
						text: 'F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured'
					},
					F70: {
						text: 'F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup'
					},
					F71: {
						text: 'F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative'
					},
					F72: {
						text: 'F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative'
					},
					F73: {
						text: 'F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision'
					},
					F74: {
						text: 'F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative'
					},
					F75: {
						text: 'F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page'
					},
					F77: {
						text: 'F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID'
					},
					F78: {
						text: 'F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator'
					},
					F79: {
						text: 'F79: Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available'
					},
					F80: {
						text: 'F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%'
					},
					F81: {
						text: 'F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only'
					},
					F82: {
						text: 'F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label'
					},
					F83: {
						text: 'F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)'
					},
					F84: {
						text: 'F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.'
					},
					F85: {
						text: 'F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order'
					},
					F86: {
						text: 'F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number'
					},
					F87: {
						text: 'F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the \'content\' property in CSS'
					},
					F88: {
						text: 'F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)'
					},
					F89: {
						text: 'F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link'
					},
					F90: {
						text: 'F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes'
					},
					F91: {
						text: 'F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers'
					},
					F92: {
						text: 'F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information'
					},
					F93: {
						text: 'F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays'
					},
					F94: {
						text: 'F94: Failure of Success Criterion 1.4.4 due to incorrect use of viewport units to resize text'
					},
					F95: {
						text: 'F95: Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable'
					},
					F96: {
						text: 'F96: Failure due to the accessible name not containing the visible label text'
					},
					F97: {
						text: 'F97: Failure due to locking the orientation to landscape or portrait view'
					},
					F98: {
						text: 'F98: Failure due to interactions being limited to touch-only on touchscreen devices'
					},
					F99: {
						text: 'F99: Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped'
					},
					F100: {
						text: 'F100: Failure of Success Criterion 1.3.4 due to showing a message asking to reorient device'
					},
					F101: {
						text: 'F101: Failure of Success Criterion 2.5.2 due to activating a control on the down-event'
					},
					F102: {
						text: 'F102: Failure of Success Criterion 1.4.10 due to content disappearing and not being available when content has reflowed'
					},
					F103: {
						text: 'F103: Failure of Success Criterion 4.1.3 due to providing status messages that cannot be programmatically determined through role or properties'
					},
					F104: {
						text: 'F104: Failure of Success Criterion 1.4.12 due to clipped or overlapped content when text spacing is adjusted'
					},
					F105: {
						text: 'F105: Failure of Success Criterion 2.5.1 due to providing functionality via a path-based gesture without simple pointer alternative'
					},
					F106: {
						text: 'F106: Failure due to inability to deactivate motion actuation'
					},
					F107: {
						text: 'F107: Failure of Success Criterion 1.3.5 due to incorrect autocomplete attribute values'
					},
					F108: {
						text: 'F108: Failure of Success Criterion 2.5.X Dragging due to not providing a single pointer method for the user to operate a function that does not require a dragging movement'
					}
				}
			},
			G: {
				id: 'general',
				text: 'General Techniques',
				techniques: {
					G1: {
						text: 'G1: Adding a link at the top of each page that goes directly to the main content area'
					},
					G4: {
						text: 'G4: Allowing the content to be paused and restarted from where it was paused'
					},
					G5: {
						text: 'G5: Allowing users to complete an activity without any time limit'
					},
					G8: {
						text: 'G8: Providing a movie with extended audio descriptions'
					},
					G9: {
						text: 'G9: Creating captions for live synchronized media'
					},
					G10: {
						text: 'G10: Creating components using a technology that supports the accessibility notification of changes'
					},
					G11: {
						text: 'G11: Creating content that blinks for less than 5 seconds'
					},
					G13: {
						text: 'G13: Describing what will happen before a change to a form control that causes a change of context to occur is made'
					},
					G14: {
						text: 'G14: Ensuring that information conveyed by color differences is also available in text'
					},
					G15: {
						text: 'G15: Using a tool to ensure that content does not violate the general flash threshold or red flash threshold'
					},
					G17: {
						text: 'G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text'
					},
					G18: {
						text: 'G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text'
					},
					G19: {
						text: 'G19: Ensuring that no component of the content flashes more than three times in any 1-second period'
					},
					G21: {
						text: 'G21: Ensuring that users are not trapped in content'
					},
					G53: {
						text: 'G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence'
					},
					G54: {
						text: 'G54: Including a sign language interpreter in the video stream'
					},
					G55: {
						text: 'G55: Linking to definitions'
					},
					G56: {
						text: 'G56: Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content'
					},
					G57: {
						text: 'G57: Ordering the content in a meaningful sequence'
					},
					G58: {
						text: 'G58: Placing a link to the alternative for time-based media immediately next to the non-text content'
					},
					G59: {
						text: 'G59: Placing the interactive elements in an order that follows sequences and relationships within the content'
					},
					G60: {
						text: 'G60: Playing a sound that turns off automatically within three seconds'
					},
					G61: {
						text: 'G61: Presenting repeated components in the same relative order each time they appear'
					},
					G62: {
						text: 'G62: Providing a glossary'
					},
					G63: {
						text: 'G63: Providing a site map'
					},
					G64: {
						text: 'G64: Providing a Table of Contents'
					},
					G65: {
						text: 'G65: Providing a breadcrumb trail'
					},
					G68: {
						text: 'G68: Providing a short text alternative that describes the purpose of live audio-only and live video-only content'
					},
					G69: {
						text: 'G69: Providing an alternative for time based media'
					},
					G70: {
						text: 'G70: Providing a function to search an online dictionary'
					},
					G71: {
						text: 'G71: Providing a help link on every Web page'
					},
					G73: {
						text: 'G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content'
					},
					G74: {
						text: 'G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description'
					},
					G75: {
						text: 'G75: Providing a mechanism to postpone any updating of content'
					},
					G76: {
						text: 'G76: Providing a mechanism to request an update of the content instead of updating automatically'
					},
					G78: {
						text: 'G78: Providing a second, user-selectable, audio track that includes audio descriptions'
					},
					G79: {
						text: 'G79: Providing a spoken version of the text'
					},
					G80: {
						text: 'G80: Providing a submit button to initiate a change of context'
					},
					G81: {
						text: 'G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player'
					},
					G82: {
						text: 'G82: Providing a text alternative that identifies the purpose of the non-text content'
					},
					G83: {
						text: 'G83: Providing text descriptions to identify required fields that were not completed'
					},
					G84: {
						text: 'G84: Providing a text description when the user provides information that is not in the list of allowed values'
					},
					G85: {
						text: 'G85: Providing a text description when user input falls outside the required format or values'
					},
					G86: {
						text: 'G86: Providing a text summary that can be understood by people with lower secondary education level reading ability'
					},
					G87: {
						text: 'G87: Providing closed captions'
					},
					G88: {
						text: 'G88: Providing descriptive titles for Web pages'
					},
					G89: {
						text: 'G89: Providing expected data format and example'
					},
					G90: {
						text: 'G90: Providing keyboard-triggered event handlers'
					},
					G91: {
						text: 'G91: Providing link text that describes the purpose of a link'
					},
					G92: {
						text: 'G92: Providing long description for non-text content that serves the same purpose and presents the same information'
					},
					G93: {
						text: 'G93: Providing open (always visible) captions'
					},
					G94: {
						text: 'G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content'
					},
					G95: {
						text: 'G95: Providing short text alternatives that provide a brief description of the non-text content'
					},
					G96: {
						text: 'G96: Providing textual identification of items that otherwise rely only on sensory information to be understood'
					},
					G97: {
						text: 'G97: Providing the first use of an abbreviation immediately before or after the expanded form'
					},
					G98: {
						text: 'G98: Providing the ability for the user to review and correct answers before submitting'
					},
					G99: {
						text: 'G99: Providing the ability to recover deleted information'
					},
					G100: {
						text: 'G100: Providing a short text alternative which is the accepted name or a descriptive name of the non-text content'
					},
					G101: {
						text: 'G101: Providing the definition of a word or phrase used in an unusual or restricted way'
					},
					G102: {
						text: 'G102: Providing the expansion or explanation of an abbreviation'
					},
					G103: {
						text: 'G103: Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes'
					},
					G105: {
						text: 'G105: Saving data so that it can be used after a user re-authenticates'
					},
					G107: {
						text: 'G107: Using "activate" rather than "focus" as a trigger for changes of context'
					},
					G108: {
						text: 'G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes'
					},
					G110: {
						text: 'G110: Using an instant client-side redirect'
					},
					G111: {
						text: 'G111: Using color and pattern'
					},
					G112: {
						text: 'G112: Using inline definitions'
					},
					G115: {
						text: 'G115: Using semantic elements to mark up structure'
					},
					G117: {
						text: 'G117: Using text to convey information that is conveyed by variations in presentation of text'
					},
					G120: {
						text: 'G120: Providing the pronunciation immediately following the word'
					},
					G121: {
						text: 'G121: Linking to pronunciations'
					},
					G123: {
						text: 'G123: Adding a link at the beginning of a block of repeated content to go to the end of the block'
					},
					G124: {
						text: 'G124: Adding links at the top of the page to each area of the content'
					},
					G125: {
						text: 'G125: Providing links to navigate to related Web pages'
					},
					G126: {
						text: 'G126: Providing a list of links to all other Web pages'
					},
					G127: {
						text: 'G127: Identifying a Web page\'s relationship to a larger collection of Web pages'
					},
					G128: {
						text: 'G128: Indicating current location within navigation bars'
					},
					G130: {
						text: 'G130: Providing descriptive headings'
					},
					G131: {
						text: 'G131: Providing descriptive labels'
					},
					G133: {
						text: 'G133: Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit'
					},
					G134: {
						text: 'G134: Validating Web pages'
					},
					G135: {
						text: 'G135: Using the accessibility API features of a technology to expose names and notification of changes'
					},
					G136: {
						text: 'G136: Providing a link at the beginning of a nonconforming Web page that points to a conforming alternate version'
					},
					G138: {
						text: 'G138: Using semantic markup whenever color cues are used'
					},
					G139: {
						text: 'G139: Creating a mechanism that allows users to jump to errors'
					},
					G140: {
						text: 'G140: Separating information and structure from presentation to enable different presentations'
					},
					G141: {
						text: 'G141: Organizing a page using headings'
					},
					G142: {
						text: 'G142: Using a technology that has commonly-available user agents that support zoom'
					},
					G143: {
						text: 'G143: Providing a text alternative that describes the purpose of the CAPTCHA'
					},
					G144: {
						text: 'G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality'
					},
					G145: {
						text: 'G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text'
					},
					G146: {
						text: 'G146: Using liquid layout'
					},
					G148: {
						text: 'G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults'
					},
					G149: {
						text: 'G149: Using user interface components that are highlighted by the user agent when they receive focus'
					},
					G150: {
						text: 'G150: Providing text based alternatives for live audio-only content'
					},
					G151: {
						text: 'G151: Providing a link to a text transcript of a prepared statement or script if the script is followed'
					},
					G152: {
						text: 'G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)'
					},
					G153: {
						text: 'G153: Making the text easier to read'
					},
					G155: {
						text: 'G155: Providing a checkbox in addition to a submit button'
					},
					G156: {
						text: 'G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text'
					},
					G157: {
						text: 'G157: Incorporating a live audio captioning service into a Web page'
					},
					G158: {
						text: 'G158: Providing an alternative for time-based media for audio-only content'
					},
					G159: {
						text: 'G159: Providing an alternative for time-based media for video-only content'
					},
					G160: {
						text: 'G160: Providing sign language versions of information, ideas, and processes that must be understood in order to use the content'
					},
					G161: {
						text: 'G161: Providing a search function to help users find content'
					},
					G162: {
						text: 'G162: Positioning labels to maximize predictability of relationships'
					},
					G163: {
						text: 'G163: Using standard diacritical marks that can be turned off'
					},
					G164: {
						text: 'G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request'
					},
					G165: {
						text: 'G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over'
					},
					G166: {
						text: 'G166: Providing audio that describes the important video content and describing it as such'
					},
					G167: {
						text: 'G167: Using an adjacent button to label the purpose of a field'
					},
					G168: {
						text: 'G168: Requesting confirmation to continue with selected action'
					},
					G169: {
						text: 'G169: Aligning text on only one side'
					},
					G170: {
						text: 'G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically'
					},
					G171: {
						text: 'G171: Playing sounds only on user request'
					},
					G172: {
						text: 'G172: Providing a mechanism to remove full justification of text'
					},
					G173: {
						text: 'G173: Providing a version of a movie with audio descriptions'
					},
					G174: {
						text: 'G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast'
					},
					G175: {
						text: 'G175: Providing a multi color selection tool on the page for foreground and background colors'
					},
					G176: {
						text: 'G176: Keeping the flashing area small enough'
					},
					G177: {
						text: 'G177: Providing suggested correction text'
					},
					G178: {
						text: 'G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent'
					},
					G179: {
						text: 'G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width'
					},
					G180: {
						text: 'G180: Providing the user with a means to set the time limit to 10 times the default time limit'
					},
					G181: {
						text: 'G181: Encoding user data as hidden or encrypted data in a re-authorization page'
					},
					G182: {
						text: 'G182: Ensuring that additional visual cues are available when text color differences are used to convey information'
					},
					G183: {
						text: 'G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on hover for links or controls where color alone is used to identify them'
					},
					G184: {
						text: 'G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input'
					},
					G185: {
						text: 'G185: Linking to all of the pages on the site from the home page'
					},
					G186: {
						text: 'G186: Using a control in the Web page that stops moving, blinking, or auto-updating content'
					},
					G187: {
						text: 'G187: Using a technology to include blinking content that can be turned off via the user agent'
					},
					G188: {
						text: 'G188: Providing a button on the page to increase line spaces and paragraph spaces'
					},
					G189: {
						text: 'G189: Providing a control near the beginning of the Web page that changes the link text'
					},
					G190: {
						text: 'G190: Providing a link adjacent to or associated with a non-conforming object that links to a conforming alternate version'
					},
					G191: {
						text: 'G191: Providing a link, button, or other mechanism that reloads the page without any blinking content'
					},
					G192: {
						text: 'G192: Fully conforming to specifications'
					},
					G193: {
						text: 'G193: Providing help by an assistant in the Web page'
					},
					G194: {
						text: 'G194: Providing spell checking and suggestions for text input'
					},
					G195: {
						text: 'G195: Using an author-supplied, visible focus indicator'
					},
					G196: {
						text: 'G196: Using a text alternative on one item within a group of images that describes all items in the group'
					},
					G197: {
						text: 'G197: Using labels, names, and text alternatives consistently for content that has the same functionality'
					},
					G198: {
						text: 'G198: Providing a way for the user to turn the time limit off'
					},
					G199: {
						text: 'G199: Providing success feedback when data is submitted successfully'
					},
					G200: {
						text: 'G200: Opening new windows and tabs from a link only when necessary'
					},
					G201: {
						text: 'G201: Giving users advanced warning when opening a new window'
					},
					G202: {
						text: 'G202: Ensuring keyboard control for all functionality'
					},
					G203: {
						text: 'G203: Using a static text alternative to describe a talking head video'
					},
					G204: {
						text: 'G204: Not interfering with the user agent\'s reflow of text as the viewing window is narrowed'
					},
					G205: {
						text: 'G205: Including a text cue for colored form control labels'
					},
					G206: {
						text: 'G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text'
					},
					G207: {
						text: 'G207: Ensuring that a contrast ratio of 3:1 is provided for icons'
					},
					G208: {
						text: 'G208: Including the text of the visible label as part of the accessible name'
					},
					G209: {
						text: 'G209: Provide sufficient contrast at the boundaries between adjoining colors'
					},
					G210: {
						text: 'G210: Ensuring that drag-and-drop actions can be cancelled'
					},
					G211: {
						text: 'G211: Matching the accessible name to the visible label'
					},
					G212: {
						text: 'G212: Using native controls to ensure functionality is triggered on the up-event.'
					},
					G213: {
						text: 'G213: Provide conventional controls and an application setting for motion activated input'
					},
					G214: {
						text: 'G214: Using a control to allow access to content in different orientations which is otherwise restricted'
					},
					G215: {
						text: 'G215: Providing controls to achieve the same result as path based or multipoint gestures'
					},
					G216: {
						text: 'G216: Providing single point activation for a control slider'
					},
					G217: {
						text: 'G217: Providing a mechanism to allow users to remap or turn off character key shortcuts'
					},
					G218: {
						text: 'G218: Email link authentication'
					},
					G219: {
						text: 'G219: Ensuring that a single pointer operable alternative is available for dragging movements that operate on content'
					},
					G220: {
						text: 'G220: Provide a contact-us link'
					},
					G221: {
						text: 'G221: Provide data from a previous step in a process'
					},
					G222: {
						text: 'G222: Provide persistently visible controls'
					},
					G223: {
						text: 'G223: Using an author-supplied, highly visible focus indicator'
					}
				}
			},
			H: {
				id: 'html',
				text: 'HTML Techniques',
				techniques: {
					H2: {
						text: 'H2: Combining adjacent image and text links for the same resource'
					},
					H4: {
						text: 'H4: Creating a logical tab order through links, form controls, and objects'
					},
					H24: {
						text: 'H24: Providing text alternatives for the area elements of image maps'
					},
					H25: {
						text: 'H25: Providing a title using the title element'
					},
					H28: {
						text: 'H28: Providing definitions for abbreviations by using the abbr element'
					},
					H30: {
						text: 'H30: Providing link text that describes the purpose of a link for anchor elements'
					},
					H32: {
						text: 'H32: Providing submit buttons'
					},
					H33: {
						text: 'H33: Supplementing link text with the title attribute'
					},
					H34: {
						text: 'H34: Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline'
					},
					H35: {
						text: 'H35: Providing text alternatives on applet elements'
					},
					H36: {
						text: 'H36: Using alt attributes on images used as submit buttons'
					},
					H37: {
						text: 'H37: Using alt attributes on img elements'
					},
					H39: {
						text: 'H39: Using caption elements to associate data table captions with data tables'
					},
					H40: {
						text: 'H40: Using description lists'
					},
					H42: {
						text: 'H42: Using h1-h6 to identify headings'
					},
					H43: {
						text: 'H43: Using id and headers attributes to associate data cells with header cells in data tables'
					},
					H44: {
						text: 'H44: Using label elements to associate text labels with form controls'
					},
					H45: {
						text: 'H45: Using longdesc'
					},
					H46: {
						text: 'H46: Using noembed with embed'
					},
					H48: {
						text: 'H48: Using ol, ul and dl for lists or groups of links'
					},
					H49: {
						text: 'H49: Using semantic markup to mark emphasized or special text'
					},
					H51: {
						text: 'H51: Using table markup to present tabular information'
					},
					H53: {
						text: 'H53: Using the body of the object element'
					},
					H54: {
						text: 'H54: Using the dfn element to identify the defining instance of a word'
					},
					H56: {
						text: 'H56: Using the dir attribute on an inline element to resolve problems with nested directional runs'
					},
					H57: {
						text: 'H57: Using the language attribute on the HTML element'
					},
					H58: {
						text: 'H58: Using language attributes to identify changes in the human language'
					},
					H59: {
						text: 'H59: Using the link element and navigation tools'
					},
					H60: {
						text: 'H60: Using the link element to link to a glossary'
					},
					H62: {
						text: 'H62: Using the ruby element'
					},
					H63: {
						text: 'H63: Using the scope attribute to associate header cells and data cells in data tables'
					},
					H64: {
						text: 'H64: Using the title attribute of the frame and iframe elements'
					},
					H65: {
						text: 'H65: Using the title attribute to identify form controls when the label element cannot be used'
					},
					H67: {
						text: 'H67: Using null alt text and no title attribute on img elements for images that AT should ignore'
					},
					H69: {
						text: 'H69: Providing heading elements at the beginning of each section of content'
					},
					H70: {
						text: 'H70: Using frame elements to group blocks of repeated material'
					},
					H71: {
						text: 'H71: Providing a description for groups of form controls using fieldset and legend elements'
					},
					H73: {
						text: 'H73: Using the summary attribute of the table element to give an overview of data tables'
					},
					H74: {
						text: 'H74: Ensuring that opening and closing tags are used according to specification'
					},
					H75: {
						text: 'H75: Ensuring that Web pages are well-formed'
					},
					H76: {
						text: 'H76: Using meta refresh to create an instant client-side redirect'
					},
					H77: {
						text: 'H77: Identifying the purpose of a link using link text combined with its enclosing list item'
					},
					H78: {
						text: 'H78: Identifying the purpose of a link using link text combined with its enclosing paragraph'
					},
					H79: {
						text: 'H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells'
					},
					H80: {
						text: 'H80: Identifying the purpose of a link using link text combined with the preceding heading element'
					},
					H81: {
						text: 'H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested'
					},
					H83: {
						text: 'H83: Using the target attribute to open a new window on user request and indicating this in link text'
					},
					H84: {
						text: 'H84: Using a button with a select element to perform an action'
					},
					H85: {
						text: 'H85: Using OPTGROUP to group OPTION elements inside a SELECT'
					},
					H86: {
						text: 'H86: Providing text alternatives for ASCII art, emoticons, and leetspeak'
					},
					H88: {
						text: 'H88: Using HTML according to spec'
					},
					H89: {
						text: 'H89: Using the title attribute to provide context-sensitive help'
					},
					H90: {
						text: 'H90: Indicating required form controls using label or legend'
					},
					H91: {
						text: 'H91: Using HTML form controls and links'
					},
					H93: {
						text: 'H93: Ensuring that id attributes are unique on a Web page'
					},
					H94: {
						text: 'H94: Ensuring that elements do not contain duplicate attributes'
					},
					H95: {
						text: 'H95: Using the track element to provide captions'
					},
					H96: {
						text: 'H96: Using the track element to provide audio descriptions'
					},
					H97: {
						text: 'H97: Grouping related links using the nav element'
					},
					H98: {
						text: 'H98: Using HTML 5.2 autocomplete attributes'
					},
					H99: {
						text: 'H99: Provide page list navigation'
					}
				}
			},
			PDF: {
				id: 'pdf',
				text: 'PDF Techniques',
				techniques: {
					PDF1: {
						text: 'PDF1: Applying text alternatives to images with the Alt entry in PDF documents'
					},
					PDF2: {
						text: 'PDF2: Creating bookmarks in PDF documents'
					},
					PDF3: {
						text: 'PDF3: Ensuring correct tab and reading order in PDF documents'
					},
					PDF4: {
						text: 'PDF4: Hiding decorative images with the Artifact tag in PDF documents'
					},
					PDF5: {
						text: 'PDF5: Indicating required form controls in PDF forms'
					},
					PDF6: {
						text: 'PDF6: Using table elements for table markup in PDF Documents'
					},
					PDF7: {
						text: 'PDF7: Performing OCR on a scanned PDF document to provide actual text'
					},
					PDF8: {
						text: 'PDF8: Providing definitions for abbreviations via an E entry for a structure element'
					},
					PDF9: {
						text: 'PDF9: Providing headings by marking content with heading tags in PDF documents'
					},
					PDF10: {
						text: 'PDF10: Providing labels for interactive form controls in PDF documents'
					},
					PDF11: {
						text: 'PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents'
					},
					PDF12: {
						text: 'PDF12: Providing name, role, value information for form fields in PDF documents'
					},
					PDF13: {
						text: 'PDF13: Providing replacement text using the /Alt entry for links in PDF documents'
					},
					PDF14: {
						text: 'PDF14: Providing running headers and footers in PDF documents'
					},
					PDF15: {
						text: 'PDF15: Providing submit buttons with the submit-form action in PDF forms'
					},
					PDF16: {
						text: 'PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document'
					},
					PDF17: {
						text: 'PDF17: Specifying consistent page numbering for PDF documents'
					},
					PDF18: {
						text: 'PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document'
					},
					PDF19: {
						text: 'PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents'
					},
					PDF20: {
						text: 'PDF20: Using Adobe Acrobat Pro\'s Table Editor to repair mistagged tables'
					},
					PDF21: {
						text: 'PDF21: Using List tags for lists in PDF documents'
					},
					PDF22: {
						text: 'PDF22: Indicating when user input falls outside the required format or values in PDF forms'
					},
					PDF23: {
						text: 'PDF23: Providing interactive form controls in PDF documents'
					}
				}
			},
			SVR: {
				id: 'server-side-script',
				text: 'Server-Side Script Techniques',
				techniques: {
					SVR1: {
						text: 'SVR1: Implementing automatic redirects on the server side instead of on the client side'
					},
					SVR2: {
						text: 'SVR2: Using .htaccess to ensure that the only way to access non-conforming content is from conforming content'
					},
					SVR3: {
						text: 'SVR3: Using HTTP referer to ensure that the only way to access non-conforming content is from conforming content'
					},
					SVR4: {
						text: 'SVR4: Allowing users to provide preferences for the display of conforming alternate versions'
					},
					SVR5: {
						text: 'SVR5: Specifying the default language in the HTTP header'
					}
				}
			},
			SL: {
				id: 'silverlight',
				text: 'Silverlight Techniques',
				techniques: {
					SL1: {
						text: 'SL1: Accessing Alternate Audio Tracks in Silverlight Media'
					},
					SL2: {
						text: 'SL2: Changing The Visual Focus Indicator in Silverlight'
					},
					SL3: {
						text: 'SL3: Controlling Silverlight MediaElement Audio Volume'
					},
					SL4: {
						text: 'SL4: Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM'
					},
					SL5: {
						text: 'SL5: Defining a Focusable Image Class for Silverlight'
					},
					SL6: {
						text: 'SL6: Defining a UI Automation Peer for a Custom Silverlight Control'
					},
					SL7: {
						text: 'SL7: Designing a Focused Visual State for Custom Silverlight Controls'
					},
					SL8: {
						text: 'SL8: Displaying HelpText in Silverlight User Interfaces'
					},
					SL9: {
						text: 'SL9: Handling Key Events to Enable Keyboard Functionality in Silverlight'
					},
					SL10: {
						text: 'SL10: Implementing a Submit-Form Pattern in Silverlight'
					},
					SL11: {
						text: 'SL11: Pausing or Stopping A Decorative Silverlight Animation'
					},
					SL12: {
						text: 'SL12: Pausing, Stopping, or Playing Media in Silverlight MediaElements'
					},
					SL13: {
						text: 'SL13: Providing A Style Switcher To Switch To High Contrast'
					},
					SL14: {
						text: 'SL14: Providing Custom Control Key Handling for Keyboard Functionality in Silverlight'
					},
					SL15: {
						text: 'SL15: Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application'
					},
					SL16: {
						text: 'SL16: Providing Script-Embedded Text Captions for MediaElement Content'
					},
					SL17: {
						text: 'SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement'
					},
					SL18: {
						text: 'SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name'
					},
					SL19: {
						text: 'SL19: Providing User Instructions With AutomationProperties.HelpText in Silverlight'
					},
					SL20: {
						text: 'SL20: Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name'
					},
					SL21: {
						text: 'SL21: Replacing A Silverlight Timed Animation With a Nonanimated Element'
					},
					SL22: {
						text: 'SL22: Supporting Browser Zoom in Silverlight'
					},
					SL23: {
						text: 'SL23: Using A Style Switcher to Increase Font Size of Silverlight Text Elements'
					},
					SL24: {
						text: 'SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically'
					},
					SL25: {
						text: 'SL25: Using Controls and Programmatic Focus to Bypass Blocks of Content in Silverlight'
					},
					SL26: {
						text: 'SL26: Using LabeledBy to Associate Labels and Targets in Silverlight'
					},
					SL27: {
						text: 'SL27: Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies'
					},
					SL28: {
						text: 'SL28: Using Separate Text-Format Text Captions for MediaElement Content'
					},
					SL29: {
						text: 'SL29: Using Silverlight "List" Controls to Define Blocks that can be Bypassed'
					},
					SL30: {
						text: 'SL30: Using Silverlight Control Compositing and AutomationProperties.Name'
					},
					SL31: {
						text: 'SL31: Using Silverlight Font Properties to Control Text Presentation'
					},
					SL32: {
						text: 'SL32: Using Silverlight Text Elements for Appropriate Accessibility Role'
					},
					SL33: {
						text: 'SL33: Using Well-Formed XAML to Define a Silverlight User Interface'
					},
					SL34: {
						text: 'SL34: Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties'
					},
					SL35: {
						text: 'SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight'
					}
				}
			},
			SM: {
				id: 'smil',
				text: 'SMIL Techniques',
				techniques: {
					SM1: {
						text: 'SM1: Adding extended audio description in SMIL 1.0'
					},
					SM2: {
						text: 'SM2: Adding extended audio description in SMIL 2.0'
					},
					SM6: {
						text: 'SM6: Providing audio description in SMIL 1.0'
					},
					SM7: {
						text: 'SM7: Providing audio description in SMIL 2.0'
					},
					SM11: {
						text: 'SM11: Providing captions through synchronized text streams in SMIL 1.0'
					},
					SM12: {
						text: 'SM12: Providing captions through synchronized text streams in SMIL 2.0'
					},
					SM13: {
						text: 'SM13: Providing sign language interpretation through synchronized video streams in SMIL 1.0'
					},
					SM14: {
						text: 'SM14: Providing sign language interpretation through synchronized video streams in SMIL 2.0'
					}
				}
			},
			T: {
				id: 'text',
				text: 'Plain-Text Techniques',
				techniques: {
					T1: {
						text: 'T1: Using standard text formatting conventions for paragraphs'
					},
					T2: {
						text: 'T2: Using standard text formatting conventions for lists'
					},
					T3: {
						text: 'T3: Using standard text formatting conventions for headings'
					}
				}
			}
		}
	}
};
