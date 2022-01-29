import app from 'apprun';

const state = 'Todo Application';

const view = (state) => <div>
  <h1>{state}</h1>
</div>;

const update = {

};

app.start(document.body, state, view, update);
