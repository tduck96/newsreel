# Duck's Newsreel #
Responsive single-page web application built with react. Mobile-first design. User can sort through articles both by posted date (breaking news) and alphabetically (a-z) 

<sub> Articles pulled from public API at https://newsapi.org/ </sub>

<sub> State managed with React Context API/useContext hook. </sub>

<sub> Articles are paginated 15 at a time, the feature is built with the use of the React-Paginate dependency. </sub>

## TO RUN ON YOUR DEVICE ## 

Clone repository => navigate to directory from terminal => run script NPM start in terminal shell (or if you prefer Yarn YARN START).

<sub> I tried to deploy this on Vercel. I kept recieving a 426 error. Digging through StackOverFlow I discovered that the NewsApi.org free tier does not allow for requests from the browser. </sub>

 ### DEPENDENCIES: ###

- Axios
- React-Paginate
- React-Router-Dom

