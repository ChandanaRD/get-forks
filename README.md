# Get-forks:

Angular project to get list of forks of a repo using Github APIs

### Configuration to use the project:

Generate a personal access token from your github account from settings:

`https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token`

Add Personal token to config file:

    - Copy the personal token from gitHub and paste it inside `get-forks/src/app/config/user-details.ts` as value for TOKEN

Change Repo and Owner Details:

    - By default repo is `facebook/react`
    - To check forks or a different repo, Open `get-forks/src/app/config/config.ts` and update the value of owner and repo

### Additional Details:

All API endpoints are placed in a config file - `get-forks/src/app/config/config.ts` inside API_ENDPOINTS const

A Component has been created to display forks in Cards

A service has been created to handle all API calls

Styling is done using Bootstrap

@Otokit/core is used to access Github APIs

For code maintenance, Husky and Prettier is used.

For Further Details on Running the Application, Read: `get-forks/README.md`
