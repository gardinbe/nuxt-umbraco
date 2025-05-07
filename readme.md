## development

1. start umbraco `dotnet watch run --project umbraco.csproj`
2. install nuxt deps `nvm use 22` and `npm i`
3. start nuxt `npm run dev`

umbraco login is ben.gardiner@appius.com, mmmmmmmmmm

## how nuxt works

1. user visits webpage, request arrives at nuxt server
2. nuxt router loads the component `pages/[...x].vue`
3. component loads the middleware `middleware/content.ts`
4. middleware requests content from umbraco using the requested url
5. middleware injects response data into route object
6. component reads route object and grabs response
7. component resolves relevant page component using the content type alias in response - see `umbraco/utils/get-component.ts`
8. resolved page component resolves relevant block components similar to above, using content type aliases in response

block-grids/lists have a similar component-resolution process to pages.
