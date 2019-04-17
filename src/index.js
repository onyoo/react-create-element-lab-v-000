import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact = React.createElement('div', {className:'me'},
    [
      React.createElement('h1', {className:'my-interests'}, 'An Awesome Person'),
      React.createElement('p', {className:'my-interests'}, 'Who is learning React'),
      React.createElement('ul', {className:'my-interests'},
        [
          React.createElement('li', {className:'my-interests'}, 'JavaScript'),
          React.createElement('li', {className:'my-interests'}, 'React'),
          React.createElement('li', {className:'my-interests'}, 'Movies'),
          React.createElement('li', {className:'my-interests'}, 'Ice cream')
        ]
      )
    ]
)

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
