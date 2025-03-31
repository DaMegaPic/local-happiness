import './App.css';

function App() {
  return (
    <div className="App">
    <body>
        <header>
            <div id="flex-header">
                <img id="header-logo" src="pages/images/logo.jpg"/>
                <h1 id="centered">Local Happiness Construction</h1>
            </div>
            <hr/>
            <nav id="main-nav">
                <div id="toggle-nav">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" class="hide-small">
                    <li class="highlight-nav"><a href="index.html">Home</a></li>
                    <li><a href="pages/about.html">About Us</a></li>
                    <li><a href="pages/kitchens.html">Kitchens</a></li>
                    <li><a href="pages/bathrooms.html">Bathrooms</a></li>
                    <li><a href="pages/landscaping.html">Landscaping</a></li>
                    <li><a href="pages/reviews.html">Review Board</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <div id="flex-nodes">
                <div class="node">
                    <img src="pages/images/butlerhouse.jpg"/>
                    <h2>Our most recent project!</h2>
                </div>
                <div class="node">
                    <img src="pages/images/gutted.jpg"/>
                    <h2>We've been fully rebuilding the inside!</h2>
                </div>
                <div class="node">
                    <img src="pages/images/door.jpg"/>
                    <h2>Added some new doors!</h2>
                </div>
            </div>
            <div id="flex-nodes">
                <div class="node">
                    <img src="pages/images/noroof.jpg"/>
                    <h2>We removed a tree from the roof</h2>
                </div>
                <div class="node">
                    <img src="pages/images/plywoodroof.jpg"/>
                    <h2>Roof Rebuild</h2>
                </div>
                <div class="node">
                    <img src="pages/images/tarproof.jpg"/>
                    <h2>It's come a long way!</h2>
                </div>
            </div>
        </main>
        <script src="script.js"></script>
    </body>
    </div>
  );
}

export default App;
