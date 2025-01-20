const parent=
    React.createElement("div",{id:"parent"},   //parent has 2 children-child1, 2 and it is done with []
[
    React.createElement("div",{id:"child1"},   // child 1 has 2 children-h1,h4 which is enclosed using []
   [ 
    React.createElement("h1",{id:"h1"},"Hello from H1 child 1 tag !!"),
    React.createElement("h4",{xyz:"abc"},"hello from h4 from child 1")
    ]),

    React.createElement("div",{id:"child2"}, 
    [
    React.createElement("h1",{id:"h1"},"Hello from H1 child 2 tag !!"),
    React.createElement("h4",{id:"h4"},"hello from h4 from child 2")
    ]),
    
]);
 
const Rroot=ReactDOM.createRoot(document.getElementById('root'));
Rroot.render(parent);