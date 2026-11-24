# Evidence record — test cases

Run these cases in **two browsers** (for example, Chrome and Firefox or Chrome and Edge). Record the actual result and date after performing each test. Do not treat the expected result as evidence that the test has passed.

| # | Test | Input/action | Expected result | Actual result / browser |
|---:|---|---|---|---|
| 1 | Empty required name | Submit with name empty | Browser blocks submission and focuses/identifies the required field | To record |
| 2 | Empty required email | Leave email empty | Required-field validation appears | To record |
| 3 | Invalid email | `student-at-example` | Email format validation appears | To record |
| 4 | Valid email boundary | `a@b.co` | Email field accepts a valid address | To record |
| 5 | Name too short | One character | `minlength` validation blocks submission | To record |
| 6 | Name minimum boundary | Two characters | Name passes length validation | To record |
| 7 | Name maximum boundary | More than 60 characters | Browser blocks input beyond maxlength or limits entry | To record |
| 8 | Empty date | Leave date empty | Required-field validation appears | To record |
| 9 | Date below minimum | A date before 2026-12-01 | Date constraint blocks submission | To record |
| 10 | Date at minimum | 2026-12-01 | Date passes minimum constraint | To record |
| 11 | Date above maximum | A date after 2027-06-30 | Date constraint blocks submission | To record |
| 12 | Empty student number | Leave number empty | Required-field validation appears | To record |
| 13 | Student number below minimum | 0 | Number constraint blocks submission | To record |
| 14 | Student number at minimum | 1 | Number passes minimum constraint | To record |
| 15 | Student number above maximum | 1000000 | Number constraint blocks submission | To record |
| 16 | Invalid phone pattern | Letters in phone field | Pattern validation blocks submission when a value is entered | To record |
| 17 | Valid phone pattern | `+201001234567` | Phone pattern accepts the value | To record |
| 18 | Invalid URL | `not-a-url` | URL validation blocks submission when a value is entered | To record |
| 19 | Missing radio choice | Do not select a study format | Required radio group blocks submission | To record |
| 20 | Optional checkboxes empty | Leave all topics unchecked | Form remains valid; unchecked boxes are omitted from submitted pairs | To record |
| 21 | Reset button | Enter data then activate Reset | All controls return to their initial state | To record |
| 22 | Keyboard navigation | Use Tab, Shift+Tab, Enter, and Space | Focus is visible and all links/controls can be operated | To record |
| 23 | Skip link | Press Tab from page load, then Enter | Focus moves to main content | To record |
| 24 | Shared navigation | Open each page and inspect header/footer | Same navigation labels and footer appear on all pages | To record |

## Validator evidence
Run each of the four HTML pages through https://validator.w3.org/nu/ and save the result or screenshot. Record errors and warnings, fix errors, then validate again. Attach the actual validator output here or in the submission evidence folder.

## Network evidence for the form
Start the included local server with `node server.js`, open `http://localhost:5500/register.html`, open Developer Tools > Network, submit valid test data, and inspect the `POST /submit` request. Record the submitted `name=value` pairs and explain:
- Controls without a `name` are not submitted.
- Unchecked checkboxes are not submitted.
- The form sends only named controls that contribute a value.
The local server prints the received pairs but does not store them.

## Keyboard and screen-reader evidence
Record the browser, operating system, screen reader, page, and exact announcement/observed result. Test the skip link, navigation landmark, page heading, table headers, form labels, fieldsets, legends, and status message.

## Contrast evidence
Measure the actual foreground/background combinations with a contrast checker. Record the measured ratio and WCAG AA verdict for normal text (4.5:1 minimum) and large text (3:1 minimum). Do not estimate ratios by eye.
