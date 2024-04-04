import React from "react";



function Home() {
    return(
        <div class="jumbotron pb-2" style={{background:' lightgrey',textAlign:"center",padding:0,margin:0}}>
  <h1 class="display-4">Learncode with Sanku</h1>
  <p class="lead">This is developed by Sanku</p>
  {/* <hr class="my-4"/> */}
  {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button" style={{marginBottom:8}}>Start Using</a>
  </p>
</div>
    );
};

export default Home;