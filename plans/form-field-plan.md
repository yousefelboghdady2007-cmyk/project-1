# Registration form field plan

| Field | Control | Validation attributes | Why it is needed |
|---|---|---|---|
| Full name | `input type="text"` | `required`, `minlength="2"`, `maxlength="60"` | Identifies the student in the course list. |
| Email address | `input type="email"` | `required`, `maxlength="100"` | Provides a contact route for course updates. |
| Phone number | `input type="tel"` | `pattern`, optional | Optional alternative contact method; not required to register. |
| Preferred start date | `input type="date"` | `required`, `min`, `max` | Checks the student's preferred course start window. |
| Student number | `input type="number"` | `required`, `min`, `max`, `step` | Links the registration to the student's institutional record. |
| Portfolio URL | `input type="url"` | Optional; browser URL syntax validation | Optional example of previous work. |
| Study format | Radio group | One required radio choice | Captures one preferred learning format. |
| Topics of interest | Checkbox group | Optional; no required selection | Helps plan practice examples without forcing extra disclosure. |

## Data-minimisation decision
The form deliberately does not request a home address, date of birth, password, government ID, payment details, or health information. None is necessary for this course-registration demonstration. The phone number and portfolio URL are optional. The project uses a local demonstration endpoint and does not save submissions permanently.
