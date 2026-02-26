How to run:
1. execute ‘npx playwright test tests/swag_labs.spec.ts’

Design decisions:
* Usernames and passwords: I like to keep all my variables with the tests that use them, especially if there are so little of them. As the number of the variables increases they should be moved to a dedicated file or database.
* Screenshot config: I put it in the test file but only because this is an exercise. Normally it should be in the ‘playwright.config.ts’ in the main palywiright dir
