
const header = React.createElement(
    'div',
     { id: 'parent' }, 
     React.createElement(
        'div',
        {id:'child'},
       React.createElement(
        'div',{id:'grandChild'},'This is grand child')
    ))



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(header);