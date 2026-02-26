How to run:
1. create tests dir in the playwright dir
2. copy files to test dir
3. In console navigate to playwright dir
4. execute ‘npx playwright test tests/swag_labs.spec.ts’

Design decisions:
* Usernames and passwords: I like to keep all my variables with the tests that use them, especially if there are so little of them. As the number of the variables increases they should be moved to a dedicated file or database.
* Screenshot config: I put it in the test file but only because this is an exercise. Normally it should be in the ‘playwright.config.ts’ in the main palywiright dir
