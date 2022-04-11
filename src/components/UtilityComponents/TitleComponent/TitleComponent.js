// This component is always rendered, it is used to update the document title dynamically
// when the route has changed, it takes the pathname removes the /, capitalizes the first letter
// and then appends it to the prefix (the site name)
const TitleComponent = ({ location }) => {
  const documentTitlePrefix = 'Rick & Morty Library | ';

  let tabTitle = location.pathname.substring(1);
  tabTitle = location.pathname.charAt(1).toUpperCase() + tabTitle.substring(1);

  const slashIndex = location.pathname.indexOf('/');
  const lastSlashIndex = location.pathname.lastIndexOf('/');

  if(slashIndex !== lastSlashIndex) {
    tabTitle = tabTitle.replace('/', ' ');
  }

  if(location.pathname === '/') {
    tabTitle = 'Home';
  }

  document.title = documentTitlePrefix + tabTitle;
  return (<></>);
};

export default TitleComponent;