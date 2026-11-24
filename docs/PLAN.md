Plan and estimated timeline:
Start time: 12pm - worked in AM
Estimated end time: 8pm

## Assumptions:
- Order of phone plan cost is the following (least to most): lite, basic, premium, ultimate
- I don't see patterns in the plan features based on plan type - I'm assuming it could be any combination of the three booleans

## Intial Review: done 12:51pm
- Read assignment: 5 mins
- Create + clone git repo 5 mins
- Determine goals and expectations: 10 mins
- Plan the day and timeline 30 mins - they want to see time management skills
- Who is end user?
  - They want a SPA which lists Users and plan details.
  - End user is likely a business consumer, who manages users plans/info

- Review data: 10 mins
  - users: 10 given entries (assume they will test more), each with an ID, name, email, age, and plan.
  - ID: 36 character hexedecimal in the form of XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
  - name: first and last as one string (lol Tom Brady)
  - email: standard email format X@X.X
  - age: int
  - plan: Nested object
    - type: lite, basic, premium, ultimate - assume this order in cost
    - status: active or inactive - missing comma on line 84
    - description: The <plan type> Package
    - features: another nested object with three booleans
      - conferenceCalling:
      - callWaiting:
      - voicemail:

## Archetecture and Design: 1 hr est. - done at 1:53pm
- Compare tasks with job description:
  - What can I use to stand out? What tools / technologies can I show profficiency with? What tools do they want to see?
  - Node.js + npm for runtime - I alr have it downloaded, and its very widely used.
  - Latest Angular
  - TypeScript
  - SCSS + Angular material (googles component lib), need something with lots of documentation
  - For backend, I will use json-server, which turns json into a "fake" REST API. This will allow me to show profficency with REST APIs while avoiding time consuming BE setup
  - HTTP: Will use angulars default http client
  - Vitest + TestBed + HttpTestingController - CLI default, not so familar (normally claude writes my unit tests) will take some research to use - but testing is important
  - Github Actions for CI
  - ESLint + Prettier - staying clean and organized (manual code moment lol)
- What is realistic based on timeline with no AI help?
  - Will have to stay simple on the BE to save time (db is just a 10 entry json), and will prioritize FE work/features + testing

## Had a lunchbreak

## Get an MVP (minimum viable product) committed: 2 hrs est. - done at ~6pm
- Design a base page layout
- Implement API, services, list layout, what details to show, and basic error handling

## Dinner with fam

## Polish the UI, test the UX, and implement a few well done features: 2-3 hrs est.
- Colours, usability, cleanliness, organization
- How can I provide value to the customers?
- Feature ideas: Search (I assume they will load the project with more data to see it scale - possibly data with errors), think of more as you work


## Setup tests + CI: 1 hr
- Demonstrate proficiency in writing automated unit tests and E2E tests for UI features (from job posting)
- Playwright is my go to for E2E web testing
- Simple github CI on commits


## Cleanup, Human testing, README.md explanations, and submission: 0.5-1hr est.