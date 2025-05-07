## development

1. nvm use 22 and npm i
2. start umbraco with iis express/kestrel
3. npm run openapi - make sure that the port number in openapi-ts.config.ts is correct (it should be the umbraco http port, not https)
4. npm run dev, open in browser, and wait for nuxt to load

## how it works

1. user visits webpage, request arrives at nuxt server
2. nuxt router loads the component `pages/[...x].vue`
3. component loads the middleware `middleware/content.ts`
4. middleware requests content from umbraco using the requested url
5. middleware injects response data into route object
6. component reads route object and grabs response
7. component resolves relevant page component using the content type alias in response - see `umbraco/utils/get-component.ts`
8. resolved page component resolves relevant block components similar to above, using content type aliases in response

block-grids/lists have a similar component-resolution process to pages.
